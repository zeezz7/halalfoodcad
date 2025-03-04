import React from "react";
import Button from "./../ui/button";

function hero() {
  return (
    <div className="pt-4 m-auto mt-[-30px] flex flex-col md:mt-[8px] md:flex-row w-[90%] md:w-[75%] min-h-[80vh] md:h-[90vh] justify-center items-center font-sika">
      <div className="flex flex-col h-1/2 justify-between w-full">
        <div className="flex flex-col space-y-4 md:space-y-7">
          <div className="text-[#1B3B31] tracking-normal text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center md:text-left">
            Delivering Convenience, Ensuring{" "}
            <span className="italic font-bold">Halal Food</span>
          </div>
          <div className="text-[#232323] tracking-wide w-full md:w-[88%] text-sm sm:text-base md:text-lg lg:text-[20px] font-[500] text-center md:text-left">
            Easily find and order from 100% halal-certified restaurants near
            you. Verified for authenticity, delivered with trust.
          </div>
        </div>
        <div className="w-full md:w-3/4 space-y-4 select-none mt-8 md:mt-0">
          <div className="italic text-xs sm:text-sm md:text-base lg:text-lg tracking-wide text-[#232323] text-center md:text-left">
            Join the waitlist and be the first to know when we launch!
          </div>
          <div className="border-2 flex flex-col sm:flex-row gap-2 sm:gap-0 border-[#9CACA7] rounded-[8px] w-full pr-2 pl-3 py-1">
            <input
              placeholder="Enter your email to stay updated"
              className="border-none focus:outline-none w-full sm:w-3/4 text-xs sm:text-sm md:text-base p-1"
            />
            <div className="w-full sm:w-auto">
              <Button value="Notify Me" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[70%] select-none mt-8 md:mt-0">
        <img
          src="Group2.svg"
          alt="Group2"
          className="w-[300px] md:w-[500px] select-none mx-auto md:mx-0"
        />
      </div>
    </div>
  );
}

export default hero;
