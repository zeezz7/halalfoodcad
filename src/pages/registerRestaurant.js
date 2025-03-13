// pages/registerrestaurant.js
import React, { useState } from "react";
import Footer from "../app/components/footer";
import Nav from "../app/components/nav";
import Button from "../app/ui/button";
import Image from "next/image";

export default function RegisterRestaurant() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");

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
    <div className="bg-[#FFFAEA]">
      {/* Nav with higher z-index to appear in front of everything */}
      <div className="relative z-50">
        <Nav />
      </div>

      <div className="min-h-screen pb-20">
        {/* Main layout container with flex */}
        <div className="flex flex-col lg:flex-row min-h-[calc(100vh-64px)]">
          {/* Left side - Image container with fixed height */}
          <div className="relative w-full lg:w-1/2 h-[50vh] lg:h-[100vh]">
            <Image
              src="/rest1.png"
              alt="Restaurant"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              priority
              className="opacity-100 rounded-2xl md:ml-4"
            />
          </div>

          {/* Right side - Form container */}
          <div className="w-full lg:w-1/2 flex justify-center items-start p-4 lg:p-8 overflow-y-auto">
            <div className="w-full max-w-[700px] bg-[#FFFAEA] rounded-2xl shadow-2xl p-6 lg:p-8">
              <div className="flex flex-col space-y-4 md:space-y-5">
                <h1 className="text-2xl md:text-3xl text-[#1B3B31] font-bold">
                  Register Your Restaurant &amp; Grow Business!!
                </h1>
                <p className="text-sm md:text-base">
                  Join our halal-certified platform to reach more customers,
                  boost orders, and expand your restaurant&lsquo;s visibility.
                  Fill in your details to get started!
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
                onSubmit={handleSubmit}
                className="flex flex-col space-y-6 mt-8"
              >
                {/* Basic Information Section */}
                <div className="mb-8">
                  <h2 className="text-lg font-semibold text-[#1B3B31] mb-4">
                    Basic Information
                  </h2>
                  {[
                    "Restaurant Name",
                    "Owner/Manager Name",
                    "Contact Email",
                    "Phone Number",
                  ].map((labelText, index) => (
                    <div key={index} className="mt-4">
                      <label
                        htmlFor={`basic-field-${index}`}
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        {labelText}
                      </label>
                      <div className="border border-[#9CACA7] w-full rounded-lg p-2 pl-3">
                        <input
                          id={`basic-field-${index}`}
                          type={
                            labelText.includes("Email")
                              ? "email"
                              : labelText.includes("Phone")
                              ? "tel"
                              : "text"
                          }
                          className="border-none focus:outline-none w-full text-sm md:text-base bg-transparent"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Business Details Section */}
                <div>
                  <h2 className="text-lg font-semibold text-[#1B3B31] mb-4">
                    Business Details
                  </h2>
                  {[
                    "Restaurant Address",
                    "Business Registration Number",
                    "FSSAI / Halal Certification",
                    "GST Number (if applicable)",
                  ].map((labelText, index) => (
                    <div key={index} className="mt-4">
                      <label
                        htmlFor={`business-field-${index}`}
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        {labelText}
                        {labelText.includes("Certification") && (
                          <span className="text-red-500 ml-1">*</span>
                        )}
                      </label>
                      <div className="border border-[#9CACA7] w-full rounded-lg p-2 pl-3">
                        <input
                          id={`business-field-${index}`}
                          type={
                            labelText.includes("Certification")
                              ? "file"
                              : "text"
                          }
                          className="border-none focus:outline-none w-full text-sm md:text-base bg-transparent"
                          required={labelText.includes("Certification")}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Menu Details Section */}
                <div>
                  <h2 className="text-lg font-semibold text-[#1B3B31] mb-4">
                    Menu Details
                  </h2>
                  {[
                    "Type of Cuisine",
                    "Operating Hours",
                    "Average Preparation Time",
                  ].map((labelText, index) => (
                    <div key={index} className="mt-4">
                      <label
                        htmlFor={`menu-field-${index}`}
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        {labelText}
                      </label>
                      <div className="border border-[#9CACA7] w-full rounded-lg p-2 pl-3">
                        <input
                          id={`menu-field-${index}`}
                          type="text"
                          className="border-none focus:outline-none w-full text-sm md:text-base bg-transparent"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Financial Details Section */}
                <div>
                  <h2 className="text-lg font-semibold text-[#1B3B31] mb-4">
                    Financial Details
                  </h2>
                  {["Bank Account No.", "UPI/Wallet Option"].map(
                    (labelText, index) => (
                      <div key={index} className="mt-4">
                        <label
                          htmlFor={`financial-field-${index}`}
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          {labelText}
                        </label>
                        <div className="border border-[#9CACA7] w-full rounded-lg p-2 pl-3">
                          <input
                            id={`financial-field-${index}`}
                            type="text"
                            className="border-none focus:outline-none w-full text-sm md:text-base bg-transparent"
                          />
                        </div>
                      </div>
                    )
                  )}
                </div>

                {/* Upload Documents Section */}
                <div>
                  <h2 className="text-lg font-semibold text-[#1B3B31] mb-4">
                    Upload Documents
                  </h2>
                  {[
                    "Food License",
                    "Restaurant Logo",
                    "Sample Menu (PDF or Images)",
                    "Kitchen Photos",
                  ].map((label, index) => (
                    <div key={index} className="mt-4">
                      <label
                        htmlFor={`file-upload-${index}`}
                        className="block text-sm md:text-base font-medium text-gray-700 mb-1"
                      >
                        {label}
                      </label>
                      <div className="border border-[#9CACA7] w-full rounded-lg p-2 pl-3">
                        <input
                          id={`file-upload-${index}`}
                          type="file"
                          className="border-none focus:outline-none w-full text-sm md:text-base bg-transparent"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Other Details Section */}
                <div>
                  <h2 className="text-lg font-semibold text-[#1B3B31] mb-4">
                    Other Details
                  </h2>
                  <div className="border border-[#9CACA7] w-full rounded-lg p-2 pl-3 mt-2">
                    <textarea
                      placeholder="Delivery Preferences (App Riders)"
                      className="border-none focus:outline-none w-full text-sm md:text-base bg-transparent"
                      rows="4"
                    ></textarea>
                  </div>
                  <div className="flex items-center mt-3">
                    <input
                      type="checkbox"
                      id="terms"
                      className="w-4 h-4 text-[#1B3B31] focus:ring focus:ring-[#9CACA7]"
                      required
                    />
                    <label
                      htmlFor="terms"
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
      </div>
      <Footer />
    </div>
  );
}
