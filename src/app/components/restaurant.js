import React from "react";
import Button from "../ui/button";
import Link from "next/link";

export default function restaurant() {
  return (
    <div className="flex flex-col md:flex-row-reverse m-auto justify-between w-[90%] md:w-[85%] lg:w-[75%] px-4 sm:px-6 md:px-8 py-8 md:py-12">
      <div className="flex flex-col space-y-6 md:space-y-10 w-full md:w-[50%]">
        <div className="text-xl sm:text-2xl font-semibold text-[#1B3B31]">
          Register Your Restaurant
        </div>
        <div className="text-[#232323] text-base sm:text-lg tracking-wide">
          Join our halal-certified platform to connect with customers looking
          for authentic halal food. Increase orders and grow your restaurant
          effortlessly!
        </div>
        <Link href="/registerRestaurant">
          <div className="w-full sm:w-auto">
            <Button value={"Register Now"} />
          </div>
        </Link>
      </div>
      <div className="mt-8 md:mt-0 flex justify-center md:justify-start">
        <img
          src="restimg.png"
          alt="Restaurant"
          className="w-[80%] sm:w-[70%] md:w-auto max-w-[500px] object-contain"
        />
      </div>
    </div>
  );
}
