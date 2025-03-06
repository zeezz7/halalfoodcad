import React from "react";
import Image from "next/image";
import Footer from "./../app/components/footer";
import Nav from "./../app/components/nav";
import Button from "./../app/ui/button";

export default function registerRider() {
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
            <form className="flex flex-col space-y-6">
              {/* Basic Information Section */}
              <div>
                <h2 className="text-lg font-semibold text-[#1B3B31]">
                  Basic Information
                </h2>
                {[
                  "Full Name",
                  "Email Address",
                  "Phone Number (with OTP verification)",
                  "Date of Birth",
                  "Gender",
                ].map((placeholder, index) => (
                  <div
                    key={index}
                    className="border-1 border-[#9CACA7] w-full md:w-[500px] rounded-lg p-2 pl-3 mt-2"
                  >
                    <input
                      type={
                        placeholder.includes("Email")
                          ? "email"
                          : placeholder.includes("Phone")
                          ? "tel"
                          : placeholder === "Date of Birth"
                          ? "date"
                          : "text"
                      }
                      placeholder={placeholder}
                      className="border-none focus:outline-none w-full text-sm md:text-base"
                    />
                  </div>
                ))}
              </div>

              {/* Identity & Documentation Section */}
              <div>
                <h2 className="text-lg font-semibold text-[#1B3B31]">
                  Identity & Documentation
                </h2>
                {[
                  "Government-issued ID",
                  "Driver's License (if using a motor vehicle)",
                  "Profile Photo (Clear face image)",
                  "Vehicle Registration (if applicable)",
                  "Proof of Address",
                ].map((label, index) => (
                  <div key={index} className="mt-4">
                    <label
                      htmlFor={`file-upload-${index}`}
                      className="block text-sm font-medium text-[#1B3B31] mb-1"
                    >
                      {label} (Upload)
                    </label>
                    <input
                      type="file"
                      id={`file-upload-${index}`}
                      className="border-1 border-[#9CACA7] w-full md:w-[500px] rounded-lg p-2 pl-3 text-sm md:text-base"
                    />
                  </div>
                ))}
              </div>

              {/* Banking & Payment Details Section */}
              <div>
                <h2 className="text-lg font-semibold text-[#1B3B31]">
                  Banking & Payment Details
                </h2>
                {[
                  "Bank Account Details for Payouts",
                  "UPI/Wallet Payment Option (if applicable)",
                ].map((placeholder, index) => (
                  <div
                    key={index}
                    className="border-1 border-[#9CACA7] w-full md:w-[500px] rounded-lg p-2 pl-3 mt-2"
                  >
                    <input
                      type="text"
                      placeholder={placeholder}
                      className="border-none focus:outline-none w-full text-sm md:text-base"
                    />
                  </div>
                ))}
              </div>

              {/* Work Preferences Section */}
              <div>
                <h2 className="text-lg font-semibold text-[#1B3B31]">
                  Work Preferences
                </h2>
                {[
                  "Preferred Working Hours",
                  "Mode of Delivery (Bike, Bicycle, Car, On Foot)",
                ].map((placeholder, index) => (
                  <div
                    key={index}
                    className="border-1 border-[#9CACA7] w-full md:w-[500px] rounded-lg p-2 pl-3 mt-2"
                  >
                    <input
                      type="text"
                      placeholder={placeholder}
                      className="border-none focus:outline-none w-full text-sm md:text-base"
                    />
                  </div>
                ))}
              </div>

              {/* Other Details Section */}
              <div>
                <h2 className="text-lg font-semibold text-[#1B3B31]">
                  Other Details
                </h2>
                {["Emergency Contact", "Referral Code (if applicable)"].map(
                  (placeholder, index) => (
                    <div
                      key={index}
                      className="border-1 border-[#9CACA7] w-full md:w-[500px] rounded-lg p-2 pl-3 mt-2"
                    >
                      <input
                        type="text"
                        placeholder={placeholder}
                        className="border-none focus:outline-none w-full text-sm md:text-base"
                      />
                    </div>
                  )
                )}
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
                <Button value="SEND" customWidth="w-full md:w-[500px]" />
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
