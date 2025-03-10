// pages/faq.js
import React, { useState } from "react";
import Nav from "../app/components/nav";
import Footer from "../app/components/footer";
import { generalQuestions, orderQuestions } from "../data/faqData";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 bg-[#FFFAEA] border border-gray-200 rounded-lg">
      <button
        className="flex justify-between items-center w-full p-4 text-left  hover:bg-gray-50 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-gray-900">{question}</span>
        <svg
          className={`w-5 h-5 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 pt-5 border-t border-gray-200">
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection = ({ title, questions }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">
        {title}
      </h2>
      <div className="space-y-2">
        {questions.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-[#FFFAEA] flex flex-col">
      <Nav />
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-600">
              Here, you can find the most frequently asked questions.
            </p>
          </div>

          <div className="mt-12">
            <FAQSection
              title="General Questions"
              questions={generalQuestions}
            />
            <FAQSection
              title="Questions Related to Orders"
              questions={orderQuestions}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;
