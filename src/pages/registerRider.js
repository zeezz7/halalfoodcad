import React from "react";
import Footer from "./../app/components/footer";
import Nav from "./../app/components/nav";
import Button from "./../app/ui/button";

export default function registerRider() {
  return (
    <div className="bg-[#FFFAEA]">
      <div className="min-h-screen">
        <Nav />
        <div className="flex justify-center items-center  px-4 sm:px-6 md:px-8 py-8">
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
            <img src="rider1.png" alt="Restaurant" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
