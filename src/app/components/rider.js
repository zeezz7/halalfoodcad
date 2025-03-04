import React from "react";
import Button from "../ui/button";
import Link from "next/link";
import Image from "next/image";

function rider() {
  return (
    <div className="flex flex-col md:flex-row m-auto justify-between w-[90%] md:w-[85%] lg:w-[75%] px-4 sm:px-6 md:px-8 py-8 md:py-12">
      <div className="flex flex-col space-y-6 md:space-y-10 w-full md:w-[50%]">
        <div className="text-xl sm:text-2xl font-semibold text-[#1B3B31]">
          Register as a Rider
        </div>
        <div className="text-[#232323] text-base sm:text-lg tracking-wide">
          Earn flexibly by delivering 100% halal food to customers. Join our
          trusted network of riders and start making deliveries on your
          schedule!
        </div>
        <Link href="/registerRider">
          <div className="w-full sm:w-auto">
            <Button value={"Register Now"} customWidth="w-full md:w-[180px]" />
          </div>
        </Link>
      </div>
      <div className="mt-8 md:mt-0 flex justify-center md:justify-end">
        <Image
          src="/riderimg.png"
          alt="Rider"
          width={500}
          height={400}
          className="sm:w-[70%] md:w-auto sm:min-width:auto lg:min-w-[300px] object-contain"
        />
      </div>
    </div>
  );
}

export default rider;
