// src/pages/api/rider/register.js
import { IncomingForm } from "formidable";
import dbConnect from "../../../../lib/mongodb";
import Rider from "../../../../models/Rider";
import { uploadToCloudinary } from "../../../../lib/cloudinary";

// Important: Use specific formidable version for Vercel
export const config = {
  api: {
    bodyParser: false,
    // Add the following if you're using Next.js 12+
    externalResolver: true,
  },
};

export default async function handler(req, res) {
  // Set proper CORS headers
  res.setHeader("Content-Type", "application/json");

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    // Connect to MongoDB first
    await dbConnect();

    // Parse form data with formidable - with memory option for serverless
    const form = new IncomingForm({
      multiples: true,
      keepExtensions: true,
      // Important for Vercel: don't write to disk
      uploadDir: "/tmp", // Use temporary directory
      maxFileSize: 10 * 1024 * 1024, // 10MB limit
    });

    // Use a Promise wrapper to handle the form parsing
    const formData = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) {
          reject(err);
          return;
        }
        resolve({ fields, files });
      });
    });

    const { fields, files } = formData;

    // Basic validation
    if (!fields.fullName || !fields.email || !fields.phone) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Process fields - convert single values from arrays
    const processedFields = {};
    Object.keys(fields).forEach((key) => {
      processedFields[key] = Array.isArray(fields[key])
        ? fields[key][0]
        : fields[key];
    });

    const riderData = {
      fullName: processedFields.fullName,
      email: processedFields.email,
      phone: processedFields.phone,
      dateOfBirth: processedFields.dateOfBirth
        ? new Date(processedFields.dateOfBirth)
        : undefined,
      gender: processedFields.gender || "",
      bankAccountDetails: processedFields.bankAccountDetails || "",
      upiWalletDetails: processedFields.upiWalletDetails || "",
      preferredWorkingHours: processedFields.preferredWorkingHours || "",
      modeOfDelivery: processedFields.modeOfDelivery || "",
      emergencyContact: processedFields.emergencyContact || "",
      referralCode: processedFields.referralCode || "",
      agreeToTerms: processedFields.agreeToTerms === "true",
    };

    // Handle file uploads differently for serverless
    if (files && Object.keys(files).length > 0) {
      // Skip file system operations on Vercel
      // Process each document type with direct buffer upload to Cloudinary
      const documentTypes = [
        "governmentId",
        "driversLicense",
        "profilePhoto",
        "vehicleRegistration",
        "proofOfAddress",
      ];

      const uploadPromises = [];

      for (const docType of documentTypes) {
        if (files[docType]) {
          const file = Array.isArray(files[docType])
            ? files[docType][0]
            : files[docType];

          if (file && file.filepath) {
            try {
              // For Vercel - use a stream approach instead of fs
              const uploadPromise = uploadToCloudinary(
                file.filepath,
                "rider-documents",
                true // Add a flag to indicate we're using streams
              )
                .then((result) => {
                  riderData[docType] = {
                    url: result.url,
                    publicId: result.publicId,
                  };
                })
                .catch((error) => {
                  console.error(`Error uploading ${docType}:`, error);
                });

              uploadPromises.push(uploadPromise);
            } catch (error) {
              console.error(`Error processing ${docType} file:`, error);
            }
          }
        }
      }

      if (uploadPromises.length > 0) {
        await Promise.all(uploadPromises);
      }
    }

    // Check for existing rider
    const existingRider = await Rider.findOne({ email: riderData.email });
    if (existingRider) {
      return res.status(409).json({
        message: "A rider with this email address already exists",
        error: "duplicate_email",
      });
    }

    // Create and save new rider
    const rider = new Rider(riderData);
    const savedRider = await rider.save();

    return res.status(201).json({
      message: "Rider registration successful",
      rider: { id: savedRider._id, email: savedRider.email },
    });
  } catch (error) {
    console.error("Server error:", error);
    return res.status(500).json({
      message: "Server error",
      error: error.message || "Unknown error occurred",
    });
  }
}
