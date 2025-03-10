import React, { useState } from "react";
import Footer from "../app/components/footer";
import Nav from "../app/components/nav";
import Button from "../app/ui/button";
import Image from "next/image";

export default function registerRestaurant() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const [formError, setFormError] = useState("");
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
      <div className="pb-40">
        <Nav />
        <div className="flex justify-center items-center px-4 sm:px-6 md:px-8 py-8">
          <div className="w-full md:w-1/2 flex flex-col space-y-8 md:space-y-15">
            <div className="flex flex-col space-y-4 md:space-y-5">
              <h1 className="text-2xl md:text-3xl text-[#1B3B31] font-bold text-left">
                Register Your Restaurant &amp; Grow Business!!
              </h1>
              <p className="w-full md:w-3/4 text-sm md:text-base text-left">
                Join our halal-certified platform to reach more customers, boost
                orders, and expand your restaurant&lsquo;s visibility. Fill in
                your details to get started!
              </p>
            </div>
            {formSuccess && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                {formSuccess}
              </div>
            )}
            <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
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
                    <div className="border border-[#9CACA7] w-full md:w-[500px] rounded-lg p-2 pl-3">
                      <input
                        id={`basic-field-${index}`}
                        type={
                          labelText.includes("Email")
                            ? "email"
                            : labelText.includes("Phone")
                            ? "tel"
                            : "text"
                        }
                        className="border-none focus:outline-none w-full text-sm md:text-base"
                      />
                    </div>
                  </div>
                ))}
              </div>
              {/* Business Details Section */}
              <div>
                <h2 className="text-lg font-semibold text-[#1B3B31]">
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
                    <div className="border border-[#9CACA7] w-full md:w-[500px] rounded-lg p-2 pl-3">
                      <input
                        id={`business-field-${index}`}
                        type={
                          labelText.includes("Certification") ? "file" : "text"
                        }
                        className="border-none focus:outline-none w-full text-sm md:text-base"
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
                    <div className="border border-[#9CACA7] w-full md:w-[500px] rounded-lg p-2 pl-3">
                      <input
                        id={`menu-field-${index}`}
                        type="text"
                        className="border-none focus:outline-none w-full text-sm md:text-base"
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
                      <div className="border border-[#9CACA7] w-full md:w-[500px] rounded-lg p-2 pl-3">
                        <input
                          id={`financial-field-${index}`}
                          type="text"
                          className="border-none focus:outline-none w-full text-sm md:text-base"
                        />
                      </div>
                    </div>
                  )
                )}
              </div>
              {/* Upload Documents Section */}
              <div>
                <h2 className="text-lg font-semibold text-[#1B3B31]">
                  Upload Documents
                </h2>
                {[
                  "Food License",
                  "Restaurant Logo",
                  "Sample Menu (PDF or Images)",
                  "Kitchen Photos",
                ].map((label, index) => (
                  <div key={index}>
                    <label
                      htmlFor={`file-upload-${index}`}
                      className="block text-sm md:text-base font-medium text-gray-700 my-2"
                    >
                      {label}
                    </label>
                    <div className="border border-[#9CACA7] w-full md:w-[500px] rounded-lg p-2 pl-3 ">
                      <input
                        id={`file-upload-${index}`}
                        type="file"
                        className="border-none focus:outline-none w-full text-sm md:text-base mt-1"
                      />
                    </div>
                  </div>
                ))}
              </div>
              {/* Other Details Section */}
              <div>
                <h2 className="text-lg font-semibold text-[#1B3B31]">
                  Other Details
                </h2>
                <div className="border-1 border-[#9CACA7] w-full md:w-[500px] rounded-lg p-2 pl-3 mt-2">
                  <textarea
                    placeholder="Delivery Preferences (App Riders)"
                    className="border-none focus:outline-none w-full text-sm md:text-base"
                  ></textarea>
                </div>
                <div className="flex items-center mt-3">
                  <input
                    type="checkbox"
                    id="terms"
                    className="w-4 h-4 text-[#1B3B31] focus:ring focus:ring-[#9CACA7]"
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
              src="/rest1.png"
              alt="Restaurant"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
