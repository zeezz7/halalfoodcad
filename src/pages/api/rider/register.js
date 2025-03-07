import { IncomingForm } from "formidable";
import dbConnect from "../../../../lib/mongodb";
import Rider from "../../../../models/Rider";
import { uploadToCloudinary } from "../../../../lib/cloudinary";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false, // Disabling body parser to handle form data
  },
};

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, Content-Type"
  );

  // Handle OPTIONS request
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  console.log("API endpoint hit:", req.method);
  console.log("Request headers:", req.headers);

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    // Test MongoDB connection first
    console.log("Connecting to MongoDB...");
    await dbConnect();
    console.log("MongoDB connected successfully");

    // Parse form data with formidable
    const form = new IncomingForm({
      multiples: true,
      keepExtensions: true,
    });

    // Use a Promise wrapper to handle the form parsing
    const formData = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) {
          console.error("Form parsing error:", err);
          reject(err);
          return;
        }
        resolve({ fields, files });
      });
    });

    const { fields, files } = formData;
    console.log("Fields received:", Object.keys(fields));
    console.log("Files received:", Object.keys(files));

    // Basic validation
    if (!fields.fullName || !fields.email || !fields.phone) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Process fields - extract single values from arrays
    const processedFields = {};
    Object.keys(fields).forEach((key) => {
      // If the field is an array, take the first value
      processedFields[key] = Array.isArray(fields[key])
        ? fields[key][0]
        : fields[key];
    });

    // Create rider data with processed fields
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

    if (Object.keys(files).length > 0) {
      console.log("Processing file uploads to Cloudinary...");

      // Create an array of file upload promises
      const uploadPromises = [];

      // Process each document type
      const documentTypes = [
        "governmentId",
        "driversLicense",
        "profilePhoto",
        "vehicleRegistration",
        "proofOfAddress",
      ];

      for (const docType of documentTypes) {
        if (files[docType]) {
          const file = Array.isArray(files[docType])
            ? files[docType][0]
            : files[docType];

          if (file && file.filepath) {
            console.log(`Processing ${docType} file...`);

            try {
              // Read file as buffer
              const fileBuffer = fs.readFileSync(file.filepath);

              // Convert to base64 for Cloudinary
              const base64Image = `data:${
                file.mimetype || "application/octet-stream"
              };base64,${fileBuffer.toString("base64")}`;

              // Create upload promise
              const uploadPromise = uploadToCloudinary(
                base64Image,
                "rider-documents"
              )
                .then((result) => {
                  console.log(`${docType} uploaded to Cloudinary:`, result.url);

                  // Add to rider data
                  riderData[docType] = {
                    url: result.url,
                    publicId: result.publicId,
                  };

                  // Cleanup temp file
                  fs.unlinkSync(file.filepath);
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

      // Wait for all uploads to complete
      if (uploadPromises.length > 0) {
        console.log(
          `Waiting for ${uploadPromises.length} file uploads to complete...`
        );
        await Promise.all(uploadPromises);
        console.log("All file uploads completed");
      }
    }

    console.log("Processed rider data:", riderData);

    // Validate required fields based on your schema
    if (!riderData.gender) {
      return res.status(400).json({ message: "Gender is required" });
    }

    if (!riderData.dateOfBirth) {
      riderData.dateOfBirth = new Date(); // Default to today for testing
    }

    // Try saving to MongoDB with proper error handling
    try {
      console.log("Checking for existing rider with email:", riderData.email);
      const existingRider = await Rider.findOne({ email: riderData.email });

      if (existingRider) {
        console.log("Rider with this email already exists:", existingRider._id);
        return res.status(409).json({
          message: "A rider with this email address already exists",
          error: "duplicate_email",
        });
      }
    } catch (emailCheckError) {
      console.error("Error checking for existing email:", emailCheckError);
    }
    // In your API route
    try {
      console.log("Creating new rider instance");
      const rider = new Rider(riderData);

      // Log the exact data being saved
      console.log("Rider data:", JSON.stringify(riderData, null, 2));

      // Try saving with a timeout to see if there's an issue with the connection closing
      const savedRider = await Promise.race([
        rider.save(),
        new Promise((_, reject) =>
          setTimeout(
            () => reject(new Error("MongoDB save operation timed out")),
            10000
          )
        ),
      ]);

      console.log("Rider saved successfully with ID:", savedRider._id);

      return res.status(201).json({
        message: "Rider registration successful",
        rider: { id: savedRider._id, email: savedRider.email },
      });
    } catch (error) {
      console.error("Save error:", error);
      return res.status(400).json({
        message: "Save failed",
        error: error.message,
      });
    }
  } catch (error) {
    console.error("Server error:", error);
    // Always return JSON even for errors
    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
}
