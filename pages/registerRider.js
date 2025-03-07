// pages/registerRider.js
import React, { useState } from "react";
import Image from "next/image";
import Footer from "../src/app/components/footer";
import Nav from "../src/app/components/nav";
import Button from "../src/app/ui/button";
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

  // In registerRider.js, update the handleSubmit function:
  // In registerRider.js, update the handleSubmit function:
  // In registerRider.js, update the handleSubmit function:
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);
      setFormError("");

      // Create FormData object
      const submitData = new FormData();

      // Add form fields
      Object.keys(formData).forEach((key) => {
        if (typeof formData[key] === "boolean") {
          submitData.append(key, formData[key].toString());
        } else if (formData[key]) {
          submitData.append(key, formData[key]);
        }
      });

      // Add files
      Object.keys(files).forEach((key) => {
        if (files[key]) {
          submitData.append(key, files[key]);
        }
      });

      console.log("Submitting form to /api/rider/register");

      // Send data to API
      const response = await fetch("/api/rider/register", {
        method: "POST",
        body: submitData,
      });

      // Check if the response is JSON
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        // If not JSON, get the text and log it
        const text = await response.text();
        console.error("Non-JSON response:", text);
        throw new Error("Server returned non-JSON response");
      }

      const data = await response.json();

      if (!response.ok) {
        console.error("Server error response:", data);
        throw new Error(data.message || "Server returned an error");
      }

      // Success handling
      console.log("Registration successful:", data);
      setFormSuccess(
        "Registration successful! We'll review your application and contact you soon."
      );

      // Reset form
      // ...existing reset code...
    } catch (error) {
      console.error("Registration failed:", error);
      setFormError(error.message || "Registration failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
                <h2 className="text-lg font-semibold text-[#1B3B31]">
                  Basic Information
                </h2>

                <div className="border-1 border-[#9CACA7] w-full md:w-[500px] rounded-lg p-2 pl-3 mt-2">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    className="border-none focus:outline-none w-full text-sm md:text-base"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="border-1 border-[#9CACA7] w-full md:w-[500px] rounded-lg p-2 pl-3 mt-2">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="border-none focus:outline-none w-full text-sm md:text-base"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="border-1 border-[#9CACA7] w-full md:w-[500px] rounded-lg p-2 pl-3 mt-2">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number (with OTP verification)"
                    className="border-none focus:outline-none w-full text-sm md:text-base"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="border-1 border-[#9CACA7] w-full md:w-[500px] rounded-lg p-2 pl-3 mt-2">
                  <input
                    type="date"
                    name="dateOfBirth"
                    placeholder="Date of Birth"
                    className="border-none focus:outline-none w-full text-sm md:text-base"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="border-1 border-[#9CACA7] w-full md:w-[500px] rounded-lg p-2 pl-3 mt-2">
                  <select
                    name="gender"
                    className="border-none focus:outline-none w-full text-sm md:text-base bg-transparent"
                    value={formData.gender}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled>
                      Gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Identity & Documentation Section */}
              <div>
                <h2 className="text-lg font-semibold text-[#1B3B31]">
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
                    className="border-1 border-[#9CACA7] w-full md:w-[500px] rounded-lg p-2 pl-3 text-sm md:text-base"
                  />
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="driversLicense"
                    className="block text-sm font-medium text-[#1B3B31] mb-1"
                  >
                    Driver`&apos;`s License (if using a motor vehicle)
                  </label>
                  <input
                    type="file"
                    id="driversLicense"
                    name="driversLicense"
                    onChange={handleFileChange}
                    className="border-1 border-[#9CACA7] w-full md:w-[500px] rounded-lg p-2 pl-3 text-sm md:text-base"
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
                    className="border-1 border-[#9CACA7] w-full md:w-[500px] rounded-lg p-2 pl-3 text-sm md:text-base"
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
                    className="border-1 border-[#9CACA7] w-full md:w-[500px] rounded-lg p-2 pl-3 text-sm md:text-base"
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
                    className="border-1 border-[#9CACA7] w-full md:w-[500px] rounded-lg p-2 pl-3 text-sm md:text-base"
                  />
                </div>
              </div>

              {/* Banking & Payment Details Section */}
              <div>
                <h2 className="text-lg font-semibold text-[#1B3B31]">
                  Banking & Payment Details
                </h2>

                <div className="border-1 border-[#9CACA7] w-full md:w-[500px] rounded-lg p-2 pl-3 mt-2">
                  <input
                    type="text"
                    name="bankAccountDetails"
                    placeholder="Bank Account Details for Payouts"
                    className="border-none focus:outline-none w-full text-sm md:text-base"
                    value={formData.bankAccountDetails}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="border-1 border-[#9CACA7] w-full md:w-[500px] rounded-lg p-2 pl-3 mt-2">
                  <input
                    type="text"
                    name="upiWalletDetails"
                    placeholder="UPI/Wallet Payment Option (if applicable)"
                    className="border-none focus:outline-none w-full text-sm md:text-base"
                    value={formData.upiWalletDetails}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Work Preferences Section */}
              <div>
                <h2 className="text-lg font-semibold text-[#1B3B31]">
                  Work Preferences
                </h2>

                <div className="border-1 border-[#9CACA7] w-full md:w-[500px] rounded-lg p-2 pl-3 mt-2">
                  <input
                    type="text"
                    name="preferredWorkingHours"
                    placeholder="Preferred Working Hours"
                    className="border-none focus:outline-none w-full text-sm md:text-base"
                    value={formData.preferredWorkingHours}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="border-1 border-[#9CACA7] w-full md:w-[500px] rounded-lg p-2 pl-3 mt-2">
                  <select
                    name="modeOfDelivery"
                    className="border-none focus:outline-none w-full text-sm md:text-base bg-transparent"
                    value={formData.modeOfDelivery}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled>
                      Mode of Delivery
                    </option>
                    <option value="Bike">Bike</option>
                    <option value="Bicycle">Bicycle</option>
                    <option value="Car">Car</option>
                    <option value="On Foot">On Foot</option>
                  </select>
                </div>
              </div>

              {/* Other Details Section */}
              <div>
                <h2 className="text-lg font-semibold text-[#1B3B31]">
                  Other Details
                </h2>

                <div className="border-1 border-[#9CACA7] w-full md:w-[500px] rounded-lg p-2 pl-3 mt-2">
                  <input
                    type="text"
                    name="emergencyContact"
                    placeholder="Emergency Contact"
                    className="border-none focus:outline-none w-full text-sm md:text-base"
                    value={formData.emergencyContact}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="border-1 border-[#9CACA7] w-full md:w-[500px] rounded-lg p-2 pl-3 mt-2">
                  <input
                    type="text"
                    name="referralCode"
                    placeholder="Referral Code (if applicable)"
                    className="border-none focus:outline-none w-full text-sm md:text-base"
                    value={formData.referralCode}
                    onChange={handleInputChange}
                  />
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
      </div>
      <Footer />
    </div>
  );
}
