// // lib/cloudinary.js
// import { v2 as cloudinary } from "cloudinary";
// import { createReadStream } from "fs";

// // Configure Cloudinary
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// export async function uploadToCloudinary(
//   fileInput,
//   folder = "uploads",
//   isStream = false
// ) {
//   if (!fileInput) {
//     throw new Error("No file provided for upload");
//   }

//   // Handle different input types
//   if (isStream) {
//     // For serverless environments
//     return new Promise((resolve, reject) => {
//       const uploadStream = cloudinary.uploader.upload_stream(
//         { folder },
//         (error, result) => {
//           if (error) {
//             reject(error);
//             return;
//           }
//           resolve({
//             url: result.secure_url,
//             publicId: result.public_id,
//           });
//         }
//       );

//       // If fileInput starts with data:image, it's a base64 string
//       if (typeof fileInput === "string" && fileInput.startsWith("data:")) {
//         uploadStream.end(Buffer.from(fileInput.split(",")[1], "base64"));
//       }
//       // If it's a file path from formidable
//       else {
//         // Use the file's buffer directly with ES module import
//         const readStream = createReadStream(fileInput);
//         readStream.pipe(uploadStream);
//       }
//     });
//   } else {
//     // For local environment or base64 data
//     return new Promise((resolve, reject) => {
//       cloudinary.uploader.upload(fileInput, { folder }, (error, result) => {
//         if (error) {
//           reject(error);
//           return;
//         }
//         resolve({
//           url: result.secure_url,
//           publicId: result.public_id,
//         });
//       });
//     });
//   }
// }

// lib/cloudinary.js
import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadToCloudinary(
  fileInput,
  folder = "uploads",
  isServerless = false
) {
  if (!fileInput) {
    throw new Error("No file provided for upload");
  }

  // Since we're using base64 data URIs with Vercel, we can use a simpler approach
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(fileInput, { folder }, (error, result) => {
      if (error) {
        console.error("Cloudinary upload error:", error);
        reject(error);
        return;
      }

      resolve({
        url: result.secure_url,
        publicId: result.public_id,
      });
    });
  });
}
