// app/api/rider/register/route.js
import { NextResponse } from "next/server";
import { IncomingForm } from "formidable";
import dbConnect from "../../../../lib/mongodb";
import Rider from "../../../../models/Rider";
import { uploadToCloudinary } from "../../../../lib/cloudinary";
import fs from "fs";

// This is required for app router API routes
export const dynamic = "force-dynamic";

// These handlers replace the single handler function in pages router
export async function POST(request) {
  console.log("API endpoint hit: POST");

  try {
    // Test MongoDB connection first
    console.log("Connecting to MongoDB...");
    await dbConnect();
    console.log("MongoDB connected successfully");

    // With app router, you need to handle FormData differently
    const formData = await request.formData();

    // Extract fields from formData
    const fields = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      dateOfBirth: formData.get("dateOfBirth"),
      gender: formData.get("gender"),
      bankAccountDetails: formData.get("bankAccountDetails") || "",
      upiWalletDetails: formData.get("upiWalletDetails") || "",
      preferredWorkingHours: formData.get("preferredWorkingHours") || "",
      modeOfDelivery: formData.get("modeOfDelivery") || "",
      emergencyContact: formData.get("emergencyContact") || "",
      referralCode: formData.get("referralCode") || "",
      agreeToTerms: formData.get("agreeToTerms") === "true",
    };

    // Process files
    // For file handling, you would need to implement a different approach with app router
    // This is a simplified version without file handling

    console.log("Fields received:", Object.keys(fields));

    // Basic validation
    if (!fields.fullName || !fields.email || !fields.phone) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create rider data with the fields
    const riderData = {
      fullName: fields.fullName,
      email: fields.email,
      phone: fields.phone,
      dateOfBirth: fields.dateOfBirth
        ? new Date(fields.dateOfBirth)
        : new Date(),
      gender: fields.gender || "",
      bankAccountDetails: fields.bankAccountDetails || "",
      upiWalletDetails: fields.upiWalletDetails || "",
      preferredWorkingHours: fields.preferredWorkingHours || "",
      modeOfDelivery: fields.modeOfDelivery || "",
      emergencyContact: fields.emergencyContact || "",
      referralCode: fields.referralCode || "",
      agreeToTerms: fields.agreeToTerms,
    };

    console.log("Processed rider data:", riderData);

    // Validate required fields
    if (!riderData.gender) {
      return NextResponse.json(
        { message: "Gender is required" },
        { status: 400 }
      );
    }

    // Check for existing rider
    try {
      console.log("Checking for existing rider with email:", riderData.email);
      const existingRider = await Rider.findOne({ email: riderData.email });

      if (existingRider) {
        console.log("Rider with this email already exists:", existingRider._id);
        return NextResponse.json(
          {
            message: "A rider with this email address already exists",
            error: "duplicate_email",
          },
          { status: 409 }
        );
      }
    } catch (emailCheckError) {
      console.error("Error checking for existing email:", emailCheckError);
    }

    // Save the rider
    try {
      console.log("Creating new rider instance");
      const rider = new Rider(riderData);

      // Log the exact data being saved
      console.log("Rider data:", JSON.stringify(riderData, null, 2));

      // Save with timeout
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

      return NextResponse.json(
        {
          message: "Rider registration successful",
          rider: { id: savedRider._id, email: savedRider.email },
        },
        { status: 201 }
      );
    } catch (error) {
      console.error("Save error:", error);
      return NextResponse.json(
        {
          message: "Save failed",
          error: error.message,
        },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      {
        message: "Server error",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
