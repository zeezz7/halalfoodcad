// pages/registerRider.js
import React, { useState } from "react";
import Image from "next/image";
import Footer from "./../app/components/footer";
import Nav from "./../app/components/nav";
import Button from "./../app/ui/button";
import RiderAccordion from "../app/components/RiderAccordion";
// import { useRouter } from "next/router";

export default function RegisterRider() {
  // const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    bankAccountDetails: "",
    upiWalletDetails: "",
    preferredWorkingHours: "",
    modeOfDelivery: "",
    emergencyContact: "",
    referralCode: "",
    agreeToTerms: false,
  });

  const [files, setFiles] = useState({
    governmentId: null,
    driversLicense: null,
    profilePhoto: null,
    vehicleRegistration: null,
    proofOfAddress: null,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files.length > 0) {
      setFiles((prevFiles) => ({
        ...prevFiles,
        [name]: files[0],
      }));
    }
  };

  // Modify the handleSubmit function in registerRider.js

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation remains the same...

    try {
      setIsSubmitting(true);
      setFormError("");

      // Create FormData object
      const submitData = new FormData();

      // Add text fields
      Object.keys(formData).forEach((key) => {
        submitData.append(key, formData[key]);
      });

      // Add files
      Object.keys(files).forEach((key) => {
        if (files[key]) {
          submitData.append(key, files[key]);
        }
      });

      // Send data with better error handling
      const response = await fetch("/api/rider/register", {
        method: "POST",
        body: submitData,
      });

      // Check for non-JSON response
      const contentType = response.headers.get("content-type");
      let data;

      if (!contentType || !contentType.includes("application/json")) {
        const text = await response.text();
        console.error("Non-JSON response:", text);
        throw new Error(
          `Server returned non-JSON response: ${text.substring(0, 100)}...`
        );
      } else {
        data = await response.json();
      }

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      // Success handling remains the same...
      setFormSuccess(
        "Registration successful! We'll review your application and contact you soon."
      );
      // Reset form...
    } catch (error) {
      console.error("Registration failed:", error);
      setFormError(error.message || "Registration failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     setIsSubmitting(true);
  //     setFormError("");

  //     // Create an object with the form data
  //     const dataToSubmit = {};

  //     // Add text fields
  //     Object.keys(formData).forEach((key) => {
  //       dataToSubmit[key] = formData[key];
  //     });

  //     // Process files to base64 strings
  //     const filePromises = Object.keys(files).map(async (key) => {
  //       if (files[key]) {
  //         // Get file info to add to submission
  //         const fileSize = files[key].size;
  //         const fileType = files[key].type;
  //         const fileName = files[key].name;

  //         // Check file size (limit to 2MB for Google Sheets practicality)
  //         if (fileSize > 2 * 1024 * 1024) {
  //           throw new Error(
  //             `File ${fileName} is too large. Please keep files under 2MB.`
  //           );
  //         }

  //         // Convert file to base64
  //         const base64 = await fileToBase64(files[key]);

  //         // Add file data
  //         dataToSubmit[`${key}_name`] = fileName;
  //         dataToSubmit[`${key}_type`] = fileType;
  //         dataToSubmit[`${key}_size`] = fileSize;
  //         dataToSubmit[`${key}_data`] = base64;
  //       }
  //     });

  //     // Wait for all file conversions to complete
  //     await Promise.all(filePromises);

  //     // Google Sheets submission using the Apps Script Web App URL
  //     // Replace with your deployed Google Apps Script web app URL
  //     const GOOGLE_SHEET_SCRIPT_URL =
  //       "https://script.google.com/macros/s/YOUR_SCRIPT_ID_HERE/exec";

  //     // For larger data, we need to use a different approach than URL parameters
  //     const response = await fetch(GOOGLE_SHEET_SCRIPT_URL, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(dataToSubmit),
  //       mode: "no-cors", // Important for cross-origin requests to Google Scripts
  //     });

  //     // Due to no-cors mode, we can't actually read the response
  //     setFormSuccess(
  //       "Registration successful! We'll review your application and contact you soon."
  //     );

  //     // Reset form if needed
  //     // resetForm();
  //   } catch (error) {
  //     console.error("Registration failed:", error);
  //     setFormError(error.message || "Registration failed. Please try again.");
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  // Helper function to convert file to base64
  // const fileToBase64 = (file) => {
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = () => resolve(reader.result.split(",")[1]); // Remove the data URL prefix
  //     reader.onerror = (error) => reject(error);
  //   });
  // };
  return (
    <div className="bg-[#FFFAEA]">
      <div className="min-h-screen">
        <Nav />
        <div className="flex justify-center items-center px-4 sm:px-6 md:px-8 py-8">
          <div className="w-full md:w-1/2 flex flex-col space-y-8 md:space-y-15">
            <div className="flex flex-col space-y-4 md:space-y-5">
              <h1 className="text-2xl md:text-3xl text-[#1B3B31] font-bold text-left">
                Join as a Rider & Start Earning Today!
              </h1>
              <p className="w-full md:w-3/4 text-sm md:text-base text-left">
                Fill in your details to become a part of our trusted halal food
                delivery network. Flexible hours, great earnings, and a
                rewarding experience await!
              </p>
            </div>

            {formError && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                {formError}
              </div>
            )}

            {formSuccess && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                {formSuccess}
              </div>
            )}

            <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
              {/* Basic Information Section */}
              <div>
                <h2 className="text-lg font-semibold text-[#1B3B31] mb-4">
                  Basic Information
                </h2>

                <div className="mt-4">
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <div className="border border-[#9CACA7] w-full md:w-[500px] rounded-lg p-2 pl-3">
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      className="border-none focus:outline-none w-full text-sm md:text-base"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <div className="border border-[#9CACA7] w-full md:w-[500px] rounded-lg p-2 pl-3">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="border-none focus:outline-none w-full text-sm md:text-base"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <div className="border border-[#9CACA7] w-full md:w-[500px] rounded-lg p-2 pl-3">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="border-none focus:outline-none w-full text-sm md:text-base"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="dateOfBirth"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Date of Birth
                  </label>
                  <div className="border border-[#9CACA7] w-full md:w-[500px] rounded-lg p-2 pl-3">
                    <input
                      id="dateOfBirth"
                      type="date"
                      name="dateOfBirth"
                      className="border-none focus:outline-none w-full text-sm md:text-base"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="gender"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Gender
                  </label>
                  <div className="border border-[#9CACA7] w-full md:w-[500px] rounded-lg p-2 pl-3">
                    <select
                      id="gender"
                      name="gender"
                      className="border-none focus:outline-none w-full text-sm md:text-base bg-transparent"
                      value={formData.gender}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="" disabled>
                        Select Gender
                      </option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Identity & Documentation Section */}
              <div>
                <h2 className="text-lg font-semibold text-[#1B3B31] mb-4">
                  Identity & Documentation
                </h2>

                <div className="mt-4">
                  <label
                    htmlFor="governmentId"
                    className="block text-sm font-medium text-[#1B3B31] mb-1"
                  >
                    Government-issued ID (Upload)
                  </label>
                  <input
                    type="file"
                    id="governmentId"
                    name="governmentId"
                    onChange={handleFileChange}
                    className="border border-[#9CACA7] w-full md:w-[500px] rounded-lg p-2 pl-3 text-sm md:text-base"
                  />
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="driversLicense"
                    className="block text-sm font-medium text-[#1B3B31] mb-1"
                  >
                    Driver&apos;s License (if using a motor vehicle)
                  </label>
                  <input
                    type="file"
                    id="driversLicense"
                    name="driversLicense"
                    onChange={handleFileChange}
                    className="border border-[#9CACA7] w-full md:w-[500px] rounded-lg p-2 pl-3 text-sm md:text-base"
                  />
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="profilePhoto"
                    className="block text-sm font-medium text-[#1B3B31] mb-1"
                  >
                    Profile Photo (Clear face image)
                  </label>
                  <input
                    type="file"
                    id="profilePhoto"
                    name="profilePhoto"
                    onChange={handleFileChange}
                    className="border border-[#9CACA7] w-full md:w-[500px] rounded-lg p-2 pl-3 text-sm md:text-base"
                  />
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="vehicleRegistration"
                    className="block text-sm font-medium text-[#1B3B31] mb-1"
                  >
                    Vehicle Registration (if applicable)
                  </label>
                  <input
                    type="file"
                    id="vehicleRegistration"
                    name="vehicleRegistration"
                    onChange={handleFileChange}
                    className="border border-[#9CACA7] w-full md:w-[500px] rounded-lg p-2 pl-3 text-sm md:text-base"
                  />
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="proofOfAddress"
                    className="block text-sm font-medium text-[#1B3B31] mb-1"
                  >
                    Proof of Address (Upload)
                  </label>
                  <input
                    type="file"
                    id="proofOfAddress"
                    name="proofOfAddress"
                    onChange={handleFileChange}
                    className="border border-[#9CACA7] w-full md:w-[500px] rounded-lg p-2 pl-3 text-sm md:text-base"
                  />
                </div>
              </div>

              {/* Banking & Payment Details Section */}
              <div>
                <h2 className="text-lg font-semibold text-[#1B3B31] mb-4">
                  Banking & Payment Details
                </h2>

                <div className="mt-4">
                  <label
                    htmlFor="bankAccountDetails"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Bank Account Details for Payouts
                  </label>
                  <div className="border border-[#9CACA7] w-full md:w-[500px] rounded-lg p-2 pl-3">
                    <input
                      type="text"
                      id="bankAccountDetails"
                      name="bankAccountDetails"
                      className="border-none focus:outline-none w-full text-sm md:text-base"
                      value={formData.bankAccountDetails}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="upiWalletDetails"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    UPI/Wallet Payment Option (if applicable)
                  </label>
                  <div className="border border-[#9CACA7] w-full md:w-[500px] rounded-lg p-2 pl-3">
                    <input
                      type="text"
                      id="upiWalletDetails"
                      name="upiWalletDetails"
                      className="border-none focus:outline-none w-full text-sm md:text-base"
                      value={formData.upiWalletDetails}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>

              {/* Work Preferences Section */}
              <div>
                <h2 className="text-lg font-semibold text-[#1B3B31] mb-4">
                  Work Preferences
                </h2>

                <div className="mt-4">
                  <label
                    htmlFor="preferredWorkingHours"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Preferred Working Hours
                  </label>
                  <div className="border border-[#9CACA7] w-full md:w-[500px] rounded-lg p-2 pl-3">
                    <input
                      type="text"
                      id="preferredWorkingHours"
                      name="preferredWorkingHours"
                      className="border-none focus:outline-none w-full text-sm md:text-base"
                      value={formData.preferredWorkingHours}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="modeOfDelivery"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Mode of Delivery
                  </label>
                  <div className="border border-[#9CACA7] w-full md:w-[500px] rounded-lg p-2 pl-3">
                    <select
                      id="modeOfDelivery"
                      name="modeOfDelivery"
                      className="border-none focus:outline-none w-full text-sm md:text-base bg-transparent"
                      value={formData.modeOfDelivery}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="" disabled>
                        Select Mode of Delivery
                      </option>
                      <option value="Bike">Bike</option>
                      <option value="Bicycle">Bicycle</option>
                      <option value="Car">Car</option>
                      <option value="On Foot">On Foot</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Other Details Section */}
              <div>
                <h2 className="text-lg font-semibold text-[#1B3B31] mb-4">
                  Other Details
                </h2>

                <div className="mt-4">
                  <label
                    htmlFor="emergencyContact"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Emergency Contact
                  </label>
                  <div className="border border-[#9CACA7] w-full md:w-[500px] rounded-lg p-2 pl-3">
                    <input
                      type="text"
                      id="emergencyContact"
                      name="emergencyContact"
                      className="border-none focus:outline-none w-full text-sm md:text-base"
                      value={formData.emergencyContact}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="referralCode"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Referral Code (if applicable)
                  </label>
                  <div className="border border-[#9CACA7] w-full md:w-[500px] rounded-lg p-2 pl-3">
                    <input
                      type="text"
                      id="referralCode"
                      name="referralCode"
                      className="border-none focus:outline-none w-full text-sm md:text-base"
                      value={formData.referralCode}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="flex items-center mt-3">
                  <input
                    type="checkbox"
                    id="agreeToTerms"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-[#1B3B31] focus:ring focus:ring-[#9CACA7]"
                    required
                  />
                  <label
                    htmlFor="agreeToTerms"
                    className="ml-2 text-sm md:text-base text-[#1B3B31]"
                  >
                    Agree to terms and conditions
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="w-full md:w-[500px] rounded-xl">
                <Button
                  type="submit"
                  value={isSubmitting ? "SUBMITTING..." : "SEND"}
                  customWidth="w-full md:w-[500px]"
                  disabled={isSubmitting}
                />
              </div>
            </form>
          </div>
          {/* Image - hidden on mobile */}
          <div className="hidden lg:block">
            <Image
              priority
              src="/rider1.png"
              alt="Rider"
              width={400}
              height={300}
              className="object-contain"
            />
          </div>
        </div>
        <div className="flex justify-center items-center my-20">
          <RiderAccordion />
        </div>
      </div>
      <Footer />
    </div>
  );
}
