// components/RiderAccordion.js
import React, { useState } from "react";

import { riderQuestions } from "../../data/faqData";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

const RiderAccordion = () => {
  const [openItemId, setOpenItemId] = useState("rider-requirements");

  const toggleItem = (itemId) => {
    setOpenItemId(openItemId === itemId ? null : itemId);
  };

  return (
    <div className="bg-[#EDFDD5] py-8 flex justify-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-brown-800 mb-6">
          Frequently asked questions
        </h2>

        <div className="max-w-4xl">
          {riderQuestions.map((item) => (
            <div key={item.id} className="border-b border-gray-200">
              <div
                className="flex justify-between py-6 cursor-pointer"
                onClick={() => toggleItem(item.id)}
              >
                <span className="text-lg font-medium">{item.question}</span>
                <span className="transform transition-transform duration-200">
                  {openItemId === item.id ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openItemId === item.id ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="text-gray-700 whitespace-pre-line pb-6">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RiderAccordion;
