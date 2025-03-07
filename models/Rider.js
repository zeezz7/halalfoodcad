// models/Rider.js
import mongoose from "mongoose";

const RiderSchema = new mongoose.Schema({
  // Basic Information
  fullName: {
    type: String,
    required: [true, "Full name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    trim: true,
    // match: [
    //   /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    //   "Please enter a valid email",
    // ],
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
    trim: true,
  },
  isPhoneVerified: {
    type: Boolean,
    default: false,
  },
  dateOfBirth: {
    type: Date,
    // Change from required: true to required: false or remove the required constraint
    required: false,
  },
  gender: {
    type: String,
    required: [true, "Gender is required"],
    enum: ["Male", "Female", "Other"],
  },

  governmentId: {
    type: { url: String, publicId: String },
    required: false,
    default: null,
  },
  driversLicense: {
    type: { url: String, publicId: String },
    required: false,
    default: null,
  },
  profilePhoto: {
    type: { url: String, publicId: String },
    required: false,
    default: null,
  },
  vehicleRegistration: {
    type: { url: String, publicId: String },
    required: false,
    default: null,
  },
  proofOfAddress: {
    type: { url: String, publicId: String },
    required: false,
    default: null,
  },

  // Banking & Payment Details
  // These are required in your schema:
  bankAccountDetails: {
    type: String,
    required: [true, "Bank account details are required"],
  },
  preferredWorkingHours: {
    type: String,
    required: [true, "Preferred working hours are required"],
  },
  modeOfDelivery: {
    type: String,
    required: [true, "Mode of delivery is required"],
    enum: ["Bike", "Bicycle", "Car", "On Foot"],
  },
  emergencyContact: {
    type: String,
    required: [true, "Emergency contact is required"],
  },
  referralCode: {
    type: String,
  },
  agreeToTerms: {
    type: Boolean,
    required: false, // Change to false for testing
  },
  // System Fields
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Check if the model exists before creating a new one to prevent overwriting
const Rider =
  mongoose.models.Rider || mongoose.model("Rider", RiderSchema, "riders");
export default Rider;
