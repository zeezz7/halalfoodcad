// pages/faq.js
import React from "react";
// import Link from "next/link";
import Nav from "./../app/components/nav";
import Footer from "./../app/components/footer";

import { generalQuestions, orderQuestions } from "../data/faqData";

const FAQPage = () => {
  return (
    <div className="bg-[#FFFAEA]    ">
      <div className=" pl-17 mb-30 ">
        <div className="flex justify-between items-left mb-12">
          <div className="w-100">
            <Nav />
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-gray-600 mb-8">
          Here, you can find the most frequently asked questions.
        </p>

        {/* General Questions Section */}
        <div className="mb-10">
          <h2 className="text-xl font-bold mb-4">General Questions</h2>
          {generalQuestions.map((item) => (
            <div key={item.id} className="mb-6">
              <h3 className="text-md font-semibold mb-2">• {item.question}</h3>
              <p className="text-gray-600 pl-4 whitespace-pre-line">
                {item.answer}
              </p>
            </div>
          ))}
        </div>

        {/* Order-Related Questions Section */}
        <div className="mb-10">
          <h2 className="text-xl font-bold mb-4">
            Questions Related to Orders
          </h2>
          {orderQuestions.map((item) => (
            <div key={item.id} className="mb-6">
              <h3 className="text-md font-semibold mb-2">• {item.question}</h3>
              <p className="text-gray-600 pl-4 whitespace-pre-line">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQPage;
