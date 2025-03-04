import React from "react";
import Footer from "./../app/components/footer";
import Nav from "./../app/components/nav";
import Button from "./../app/ui/button";
import Image from "next/image";

export default function registerRestaurant() {
  return (
    <div className="bg-[#FFFAEA]">
      <div className="min-h-screen">
        <Nav />
        <div className="flex justify-center items-center  px-4 sm:px-6 md:px-8 py-8">
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
            <div className="flex flex-col space-y-4 md:space-y-5 items-center md:items-start">
              {["Name", "Email", "Phone No."].map((placeholder, index) => (
                <div
                  key={index}
                  className="border-1 border-[#9CACA7] w-full md:w-[500px] rounded-lg p-2 pl-3"
                >
                  <input
                    type={index === 1 ? "email" : index === 2 ? "tel" : "text"}
                    placeholder={placeholder}
                    className="border-none focus:outline-none w-full text-sm md:text-base"
                  />
                </div>
              ))}
              <div className="w-full md:w-[500px] rounded-xl">
                <Button value="SEND" customWidth="w-full md:w-[500px]" />
              </div>
            </div>
          </div>
          {/* Image - hidden on mobile */}
          <div className="hidden lg:block">
            <Image
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
