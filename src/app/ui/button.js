import React from "react";

function button({ value, customWidth }) {
  return (
    <div className={`w-full sm:w-auto ${customWidth ? customWidth : ""}`}>
      <button
        className="w-full bg-[#1B3B31] cursor-pointer text-white font-semibold 
        text-sm sm:text-base 
        px-3 sm:px-4 md:px-6 
        py-1.5 sm:py-2 md:py-2.5
        rounded-[4px] shadow-lg select-none 
        transition-all duration-200 ease-in-out
        hover:bg-[#234a3d]"
      >
        {value}
      </button>
    </div>
  );
}

export default button;
