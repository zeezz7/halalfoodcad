// // src/pages/api/rider/register.js
// import { IncomingForm } from "formidable";
// import dbConnect from "../../../../lib/mongodb";
// import Rider from "../../../../models/Rider";
// import { uploadToCloudinary } from "../../../../lib/cloudinary";

// // Important: Use specific formidable version for Vercel
// export const config = {
//   api: {
//     bodyParser: false,
//     // Add the following if you're using Next.js 12+
//     externalResolver: true,
//   },
// };

// export default async function handler(req, res) {
//   // Set proper CORS headers
//   res.setHeader("Content-Type", "application/json");

//   if (req.method !== "POST") {
//     return res.status(405).json({ message: "Method not allowed" });
//   }

//   try {
//     // Connect to MongoDB first
//     await dbConnect();

//     // Parse form data with formidable - with memory option for serverless
//     const form = new IncomingForm({
//       multiples: true,
//       keepExtensions: true,
//       // Important for Vercel: don't write to disk
//       uploadDir: "/tmp", // Use temporary directory
//       maxFileSize: 10 * 1024 * 1024, // 10MB limit
//     });

//     // Use a Promise wrapper to handle the form parsing
//     const formData = await new Promise((resolve, reject) => {
//       form.parse(req, (err, fields, files) => {
//         if (err) {
//           reject(err);
//           return;
//         }
//         resolve({ fields, files });
//       });
//     });

//     const { fields, files } = formData;

//     // Basic validation
//     if (!fields.fullName || !fields.email || !fields.phone) {
//       return res.status(400).json({ message: "Missing required fields" });
//     }

//     // Process fields - convert single values from arrays
//     const processedFields = {};
//     Object.keys(fields).forEach((key) => {
//       processedFields[key] = Array.isArray(fields[key])
//         ? fields[key][0]
//         : fields[key];
//     });

//     const riderData = {
//       fullName: processedFields.fullName,
//       email: processedFields.email,
//       phone: processedFields.phone,
//       dateOfBirth: processedFields.dateOfBirth
//         ? new Date(processedFields.dateOfBirth)
//         : undefined,
//       gender: processedFields.gender || "",
//       bankAccountDetails: processedFields.bankAccountDetails || "",
//       upiWalletDetails: processedFields.upiWalletDetails || "",
//       preferredWorkingHours: processedFields.preferredWorkingHours || "",
//       modeOfDelivery: processedFields.modeOfDelivery || "",
//       emergencyContact: processedFields.emergencyContact || "",
//       referralCode: processedFields.referralCode || "",
//       agreeToTerms: processedFields.agreeToTerms === "true",
//     };

//     // Handle file uploads differently for serverless
//     if (files && Object.keys(files).length > 0) {
//       // Skip file system operations on Vercel
//       // Process each document type with direct buffer upload to Cloudinary
//       const documentTypes = [
//         "governmentId",
//         "driversLicense",
//         "profilePhoto",
//         "vehicleRegistration",
//         "proofOfAddress",
//       ];

//       const uploadPromises = [];

//       for (const docType of documentTypes) {
//         if (files[docType]) {
//           const file = Array.isArray(files[docType])
//             ? files[docType][0]
//             : files[docType];

//           if (file && file.filepath) {
//             try {
//               // For Vercel - use a stream approach instead of fs
//               const uploadPromise = uploadToCloudinary(
//                 file.filepath,
//                 "rider-documents",
//                 true // Add a flag to indicate we're using streams
//               )
//                 .then((result) => {
//                   riderData[docType] = {
//                     url: result.url,
//                     publicId: result.publicId,
//                   };
//                 })
//                 .catch((error) => {
//                   console.error(`Error uploading ${docType}:`, error);
//                 });

//               uploadPromises.push(uploadPromise);
//             } catch (error) {
//               console.error(`Error processing ${docType} file:`, error);
//             }
//           }
//         }
//       }

//       if (uploadPromises.length > 0) {
//         await Promise.all(uploadPromises);
//       }
//     }

//     // Check for existing rider
//     const existingRider = await Rider.findOne({ email: riderData.email });
//     if (existingRider) {
//       return res.status(409).json({
//         message: "A rider with this email address already exists",
//         error: "duplicate_email",
//       });
//     }

//     // Create and save new rider
//     const rider = new Rider(riderData);
//     const savedRider = await rider.save();

//     return res.status(201).json({
//       message: "Rider registration successful",
//       rider: { id: savedRider._id, email: savedRider.email },
//     });
//   } catch (error) {
//     console.error("Server error:", error);
//     return res.status(500).json({
//       message: "Server error",
//       error: error.message || "Unknown error occurred",
//     });
//   }
// }
// pages/api/rider/register.js

// import dbConnect from "../../../../lib/mongodb";
// import Rider from "../../../../models/Rider";
// import { uploadToCloudinary } from "../../../../lib/cloudinary";
// import multer from "multer";
// import { createRouter } from "next-connect";
// // import { Readable } from "stream";

// // Configure multer for memory storage (no filesystem writes)
// const upload = multer({
//   storage: multer.memoryStorage(),
//   limits: {
//     fileSize: 10 * 1024 * 1024, // 10MB limit
//   },
// });

// // Function to convert Buffer to Stream
// // function bufferToStream(buffer) {a
// //   const readable = new Readable();
// //   readable._read = () => {}; // _read is required but you can noop it
// //   readable.push(buffer);
// //   readable.push(null);
// //   return readable;
// //

// // Create and configure the router
// const router = createRouter();

// // Use multer middleware to handle multiple file uploads
// router.use(
//   upload.fields([
//     { name: "governmentId", maxCount: 1 },
//     { name: "driversLicense", maxCount: 1 },
//     { name: "profilePhoto", maxCount: 1 },
//     { name: "vehicleRegistration", maxCount: 1 },
//     { name: "proofOfAddress", maxCount: 1 },
//   ])
// );

// // Handle POST requests
// router.post(async (req, res) => {
//   try {
//     // Connect to MongoDB
//     await dbConnect();

//     // Get fields from request body
//     const {
//       fullName,
//       email,
//       phone,
//       dateOfBirth,
//       gender,
//       bankAccountDetails,
//       upiWalletDetails,
//       preferredWorkingHours,
//       modeOfDelivery,
//       emergencyContact,
//       referralCode,
//       agreeToTerms,
//     } = req.body;

//     // Basic validation
//     if (!fullName || !email || !phone) {
//       return res.status(400).json({ message: "Missing required fields" });
//     }

//     // Create rider data object
//     const riderData = {
//       fullName,
//       email,
//       phone,
//       dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : undefined,
//       gender: gender || "",
//       bankAccountDetails: bankAccountDetails || "",
//       upiWalletDetails: upiWalletDetails || "",
//       preferredWorkingHours: preferredWorkingHours || "",
//       modeOfDelivery: modeOfDelivery || "",
//       emergencyContact: emergencyContact || "",
//       referralCode: referralCode || "",
//       agreeToTerms: agreeToTerms === "true" || agreeToTerms === true,
//     };

//     // Handle file uploads
//     if (req.files && Object.keys(req.files).length > 0) {
//       const documentTypes = [
//         "governmentId",
//         "driversLicense",
//         "profilePhoto",
//         "vehicleRegistration",
//         "proofOfAddress",
//       ];

//       const uploadPromises = documentTypes.map(async (docType) => {
//         const files = req.files[docType];
//         if (files && files.length > 0) {
//           const file = files[0];
//           try {
//             // Convert buffer to base64 data URI for Cloudinary upload
//             const base64Data = `data:${
//               file.mimetype
//             };base64,${file.buffer.toString("base64")}`;
//             const result = await uploadToCloudinary(
//               base64Data,
//               "rider-documents",
//               true
//             );

//             riderData[docType] = {
//               url: result.url,
//               publicId: result.publicId,
//             };
//           } catch (error) {
//             console.error(`Error uploading ${docType}:`, error);
//           }
//         }
//       });

//       await Promise.all(uploadPromises.filter(Boolean));
//     }

//     // Check for existing rider
//     const existingRider = await Rider.findOne({ email: riderData.email });
//     if (existingRider) {
//       return res.status(409).json({
//         message: "A rider with this email address already exists",
//         error: "duplicate_email",
//       });
//     }

//     // Create and save new rider
//     const rider = new Rider(riderData);
//     const savedRider = await rider.save();

//     return res.status(201).json({
//       message: "Rider registration successful",
//       rider: { id: savedRider._id, email: savedRider.email },
//     });
//   } catch (error) {
//     console.error("Server error:", error);
//     return res.status(500).json({
//       message: "Server error",
//       error: error.message || "Unknown error occurred",
//     });
//   }
// });

// // Handle other HTTP methods
// router.all((req, res) => {
//   res.setHeader("Allow", ["POST"]);
//   res.status(405).json({ message: `Method ${req.method} Not Allowed` });
// });

// // Export config to disable built-in bodyParser
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// // Export the router as the default handler
// export default router.handler();
import dbConnect from "../../../../lib/mongodb";
import Rider from "../../../../models/Rider";
import { uploadToCloudinary } from "../../../../lib/cloudinary";
import multer from "multer";

// Configure multer for memory storage
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
});

// Function to run middleware with promise
const runMiddleware = (req, res, fn) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
};

// Handle API requests
async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res
      .status(405)
      .json({ message: `Method ${req.method} Not Allowed` });
  }

  try {
    // Process the file uploads first
    await runMiddleware(
      req,
      res,
      upload.fields([
        { name: "governmentId", maxCount: 1 },
        { name: "driversLicense", maxCount: 1 },
        { name: "profilePhoto", maxCount: 1 },
        { name: "vehicleRegistration", maxCount: 1 },
        { name: "proofOfAddress", maxCount: 1 },
      ])
    );

    // Connect to MongoDB
    await dbConnect();

    // Get fields from request body
    const {
      fullName,
      email,
      phone,
      dateOfBirth,
      gender,
      bankAccountDetails,
      upiWalletDetails,
      preferredWorkingHours,
      modeOfDelivery,
      emergencyContact,
      referralCode,
      agreeToTerms,
    } = req.body;

    // Basic validation
    if (!fullName || !email || !phone) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Create rider data object
    const riderData = {
      fullName,
      email,
      phone,
      dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : undefined,
      gender: gender || "",
      bankAccountDetails: bankAccountDetails || "",
      upiWalletDetails: upiWalletDetails || "",
      preferredWorkingHours: preferredWorkingHours || "",
      modeOfDelivery: modeOfDelivery || "",
      emergencyContact: emergencyContact || "",
      referralCode: referralCode || "",
      agreeToTerms: agreeToTerms === "true" || agreeToTerms === true,
    };

    // Handle file uploads
    if (req.files && Object.keys(req.files).length > 0) {
      const documentTypes = [
        "governmentId",
        "driversLicense",
        "profilePhoto",
        "vehicleRegistration",
        "proofOfAddress",
      ];

      const uploadPromises = documentTypes.map(async (docType) => {
        const files = req.files[docType];
        if (files && files.length > 0) {
          const file = files[0];
          try {
            // Convert buffer to base64 data URI for Cloudinary upload
            const base64Data = `data:${
              file.mimetype
            };base64,${file.buffer.toString("base64")}`;
            const result = await uploadToCloudinary(
              base64Data,
              "rider-documents"
            );

            riderData[docType] = {
              url: result.url,
              publicId: result.publicId,
            };
          } catch (error) {
            console.error(`Error uploading ${docType}:`, error);
          }
        }
      });

      await Promise.all(uploadPromises.filter(Boolean));
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

// Export config to disable built-in bodyParser
export const config = {
  api: {
    bodyParser: false,
  },
};

// Export the handler as default function
export default handler;
