import React from "react";

function button({ value, customWidth, type = "button", disabled = false }) {
  return (
    <div className={`w-full sm:w-auto ${customWidth ? customWidth : ""}`}>
      <button
        type={type}
        disabled={disabled}
        className={`w-full bg-[#FFEA00] cursor-pointer text-[#333333] font-semibold 
        text-sm sm:text-base 
        px-3 sm:px-4 md:px-6 
        py-3 sm:py-4 md:py-2.5
        rounded-[4px] shadow-lg select-none 
        transition-all duration-200 ease-in-out
        hover:bg-[#e6d300] 
        disabled:opacity-70 disabled:cursor-not-allowed`}
      >
        {value}
      </button>
    </div>
  );
}

export default button;
