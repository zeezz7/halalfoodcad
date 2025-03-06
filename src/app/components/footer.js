"use client";

import React from "react";
import Link from "next/link";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#1B3B31]  text-white py-10">
      {/* Main footer content */}
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-start mb-16">
          {/* Logo/Brand */}
          <div className="w-full md:w-auto mb-6 md:mb-0">
            <Link
              href="/"
              className="text-2xl font-semibold hover:text-gray-400 transition-colors cursor-pointer"
            >
              HALAL GOES
            </Link>
          </div>

          {/* Address and Contact */}
          <div className="w-full md:w-auto mb-6 md:mb-0">
            <p className="max-w-xs mb-2">
              5123 Market St. #22B Charlottesville, California 44635
            </p>
            <p className="mb-2">+1-123456789</p>
            <p>halalgoes@gmail.com</p>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-auto mb-6 md:mb-0">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-gray-200 transition-colors cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/registerRider"
                  className="hover:text-gray-200 transition-colors cursor-pointer"
                >
                  Register as a Rider
                </Link>
              </li>
              <li>
                <Link
                  href="/registerRestaurant"
                  className="hover:text-gray-200 transition-colors cursor-pointer"
                >
                  Register Restaurant
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="w-full md:w-auto mb-6 md:mb-0">
            <ul className="space-y-2">
              <li>Privacy Policy</li>
              <li>Terms Of Service</li>
            </ul>
          </div>

          {/* Scroll to Top Button */}
          <div className="w-full md:w-auto flex justify-center md:justify-end">
            <button
              onClick={scrollToTop}
              className="bg-white rounded-full w-10 h-10 flex items-center justify-center"
              aria-label="Scroll to top"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1B3B31"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 19V5" />
                <path d="M5 12l7-7 7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8">
        © 2025 Halal Goes. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
