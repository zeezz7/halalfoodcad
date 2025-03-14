// pages/registerRider.js
import React, { useState } from "react";
import Image from "next/image";
import Footer from "./../app/components/footer";
import Nav from "./../app/components/nav";
import Button from "./../app/ui/button";
import RiderAccordion from "../app/components/RiderAccordion";

export default function RegisterRider() {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset previous messages
    setFormError("");
    setFormSuccess("");

    // Basic frontend validation
    let isValid = true;

    // If validation fails, return early
    if (!isValid) return;

    try {
      setIsSubmitting(true);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Show success message
      setFormSuccess(
        "Registration successful! We'll review your application and contact you soon."
      );

      // Optionally reset form
      // resetForm();
    } catch (error) {
      console.error("Submission failed:", error);
      setFormError("Registration failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#FDF6E3]">
      {/* Nav with higher z-index to appear in front of everything */}
      <div className="relative z-50">
        <Nav />
      </div>

      <div className="min-h-screen">
        {/* Main layout container with flex */}
        <div className="flex flex-col lg:flex-row min-h-[calc(100vh-64px)]">
          {/* Left side - Image container with fixed height */}
          <div className="relative w-full lg:w-1/2 h-[50vh] lg:h-[100vh] rounded-2xl">
            <Image
              src="/rider22.jpg"
              alt="Rider"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              priority
              className="opacity-100 rounded-2xl md:ml-4 "
            />
          </div>

          {/* Right side - Form container */}
          <div className="w-full lg:w-1/2 flex justify-center items-start p-4 lg:p-8 overflow-y-auto">
            <div className="w-full max-w-[700px] bg-[#FFFAEA] shadow-2xl rounded-2xl  p-6 lg:p-8">
              <div className="flex flex-col space-y-4 md:space-y-5">
                <h1 className="text-2xl md:text-3xl text-[#333333] font-bold">
                  Join as a Rider & Start Earning Today!
                </h1>
                <p className="text-sm md:text-base text-[#333333]">
                  Fill in your details to become a part of our trusted halal
                  food delivery network. Flexible hours, great earnings, and a
                  rewarding experience await!
                </p>
              </div>

              {formError && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-6">
                  {formError}
                </div>
              )}

              {formSuccess && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mt-6">
                  {formSuccess}
                </div>
              )}

              <form
                className="flex flex-col space-y-6 mt-8 text-[#333333]"
                onSubmit={handleSubmit}
              >
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
                    <div className="border border-[#9CACA7] w-full rounded-lg p-2 pl-3">
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        className="border-none focus:outline-none w-full text-sm md:text-base bg-transparent"
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
                    <div className="border border-[#9CACA7] w-full rounded-lg p-2 pl-3">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="border-none focus:outline-none w-full text-sm md:text-base bg-transparent"
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
                    <div className="border border-[#9CACA7] w-full rounded-lg p-2 pl-3">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="border-none focus:outline-none w-full text-sm md:text-base bg-transparent"
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
                    <div className="border border-[#9CACA7] w-full rounded-lg p-2 pl-3">
                      <input
                        id="dateOfBirth"
                        type="date"
                        name="dateOfBirth"
                        className="border-none focus:outline-none w-full text-sm md:text-base bg-transparent"
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
                    <div className="border border-[#9CACA7] w-full rounded-lg p-2 pl-3">
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
                      className="border border-[#9CACA7] w-full rounded-lg p-2 pl-3 text-sm md:text-base"
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
                      className="border border-[#9CACA7] w-full rounded-lg p-2 pl-3 text-sm md:text-base"
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
                      className="border border-[#9CACA7] w-full rounded-lg p-2 pl-3 text-sm md:text-base"
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
                      className="border border-[#9CACA7] w-full rounded-lg p-2 pl-3 text-sm md:text-base"
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
                      className="border border-[#9CACA7] w-full rounded-lg p-2 pl-3 text-sm md:text-base"
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
                    <div className="border border-[#9CACA7] w-full rounded-lg p-2 pl-3">
                      <input
                        type="text"
                        id="bankAccountDetails"
                        name="bankAccountDetails"
                        className="border-none focus:outline-none w-full text-sm md:text-base bg-transparent"
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
                    <div className="border border-[#9CACA7] w-full rounded-lg p-2 pl-3">
                      <input
                        type="text"
                        id="upiWalletDetails"
                        name="upiWalletDetails"
                        className="border-none focus:outline-none w-full text-sm md:text-base bg-transparent"
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
                    <div className="border border-[#9CACA7] w-full rounded-lg p-2 pl-3">
                      <input
                        type="text"
                        id="preferredWorkingHours"
                        name="preferredWorkingHours"
                        className="border-none focus:outline-none w-full text-sm md:text-base bg-transparent"
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
                    <div className="border border-[#9CACA7] w-full rounded-lg p-2 pl-3">
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
                    <div className="border border-[#9CACA7] w-full rounded-lg p-2 pl-3">
                      <input
                        type="text"
                        id="emergencyContact"
                        name="emergencyContact"
                        className="border-none focus:outline-none w-full text-sm md:text-base bg-transparent"
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
                    <div className="border border-[#9CACA7] w-full rounded-lg p-2 pl-3">
                      <input
                        type="text"
                        id="referralCode"
                        name="referralCode"
                        className="border-none focus:outline-none w-full text-sm md:text-base bg-transparent"
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
                <div className="w-full rounded-xl">
                  <Button
                    type="submit"
                    value={isSubmitting ? "SUBMITTING..." : "SEND"}
                    customWidth="w-full"
                    disabled={isSubmitting}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="flex w-full bg-[#FDF6E3] justify-center items-center py-20">
          <RiderAccordion />
        </div>
      </div>
      <Footer />
    </div>
  );
}
