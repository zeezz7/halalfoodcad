"use client";
import React from "react";
import Link from "next/link";

function nav() {
  return (
    <nav className="w-full">
      <div className=" mx-auto px-4 sm:px-6 lg:px-28 py-4 sm:py-6 lg:py-8">
        <Link href="/">
          <div className="text-[#607F72] text-lg sm:text-xl lg:text-[22px] font-semibold select-none cursor-pointer hover:text-[#4a665b] transition-colors">
            HALAL GOES
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default nav;
