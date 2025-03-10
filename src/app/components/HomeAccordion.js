// components/HomeAccordion.js
"use client";
import React, { useState } from "react";
import { homeQuestions } from "../../data/faqData";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

const HomeAccordion = () => {
  const [openItemId, setOpenItemId] = useState(null);

  const toggleItem = (itemId) => {
    setOpenItemId(openItemId === itemId ? null : itemId);
  };

  return (
    <div className="bg-[#FFFAEA] py-10 mb-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-brown-800 mb-10">
          Got questions? We'll answer them all
        </h2>

        <div className="max-w-3xl mx-auto">
          {homeQuestions.map((item) => (
            <div key={item.id} className="border-b border-gray-200">
              <div
                className="flex justify-between items-center py-6 cursor-pointer"
                onClick={() => toggleItem(item.id)}
              >
                <span className="text-lg font-medium ">{item.question}</span>
                <span className="transform transition-transform duration-200">
                  {openItemId === item.id ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openItemId === item.id ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="text-md  px-6 pb-6">{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeAccordion;
