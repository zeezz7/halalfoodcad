// models/Rider.js
import mongoose from "mongoose";

const RestaurantSchema = new mongoose.Schema({
  // Basic Information
  restaurantName: {
    type: String,
    required: [true, " Restaurant Name is required"],
    trim: true,
  },
  ManagerName: {
    type: String,
    required: [true, "Manager Name is required"],
    unique: true,
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
    type: Number,
    required: [true, "Phone number is required"],
    trim: true,
  },
  isPhoneVerified: {
    type: Boolean,
    default: false,
  },

  //Business Details
  restaurantAddress: {
    type: String,

    required: false,
  },
  FSSAICertification: {
    type: String,
    required: false,
  },
  GSTNumber: {
    type: String,
    required: false,
  },

  // Menu Details
  TypeofCuisine: {
    url: String,
    publicId: String,
  },
  OperatingHours: {
    url: String,
    publicId: String,
  },
  AveragePreparationTime: {
    url: String,
    publicId: String,
  },
  BankAccountNo: {
    url: String,
    publicId: String,
  },
  UPIWalletOption: {
    url: String,
    publicId: String,
  },

  // Upload Documents
  // These are required in your schema:
  FoodLicense: {
    type: String,
    required: [true, "Bank account details are required"],
  },
  RestaurantLogo: {
    type: String,
    required: [true, "Preferred working hours are required"],
  },
  SampleMenu: {
    type: String,
    required: [true, "Mode of delivery is required"],
    enum: ["Bike", "Bicycle", "Car", "On Foot"],
  },
  KitchenPhotos: {
    type: String,
    required: [true, "Emergency contact is required"],
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
const Restaurant =
  mongoose.models.Restaurant ||
  mongoose.model("Restaurant", RestaurantSchema, "Restaurant");
export default Restaurant;
