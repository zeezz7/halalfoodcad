// "use client";

// import React from "react";
// import Link from "next/link";

// function Footer() {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <div className="bg-[#1B3B31]  text-white py-10">
//       {/* Main footer content */}
//       <div className="container mx-auto px-4">
//         <div className="flex flex-wrap justify-between items-start mb-16">
//           {/* Logo/Brand */}
//           <div className="w-full md:w-auto mb-6 md:mb-0">
//             <Link
//               href="/"
//               className="text-2xl font-semibold hover:text-gray-400 transition-colors cursor-pointer"
//             >
//               HALAL GOES
//             </Link>
//           </div>

//           {/* Address and Contact */}
//           <div className="w-full md:w-auto mb-6 md:mb-0">
//             <p className="max-w-xs mb-2">
//               5123 Market St. #22B Charlottesville, California 44635
//             </p>
//             <p className="mb-2">+1-123456789</p>
//             <p>halalgoes@gmail.com</p>
//           </div>

//           {/* Navigation Links */}
//           <div className="w-full md:w-auto mb-6 md:mb-0">
//             <ul className="space-y-2">
//               <li>
//                 <Link
//                   href="/"
//                   className="hover:text-gray-200 transition-colors cursor-pointer"
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/registerRider"
//                   className="hover:text-gray-200 transition-colors cursor-pointer"
//                 >
//                   Register as a Rider
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/registerRestaurant"
//                   className="hover:text-gray-200 transition-colors cursor-pointer"
//                 >
//                   Register Restaurant
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/faq"
//                   className="hover:text-gray-200 transition-colors cursor-pointer"
//                 >
//                   FAQs
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Legal Links */}
//           <div className="w-full md:w-auto mb-6 md:mb-0">
//             <ul className="space-y-2">
//               <li>Privacy Policy</li>
//               <li>Terms Of Service</li>
//             </ul>
//           </div>

//           {/* Scroll to Top Button */}
//           <div className="w-full md:w-auto flex justify-center md:justify-end">
//             <button
//               onClick={scrollToTop}
//               className="bg-white rounded-full w-10 h-10 flex items-center justify-center"
//               aria-label="Scroll to top"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="#1B3B31"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path d="M12 19V5" />
//                 <path d="M5 12l7-7 7 7" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Copyright */}
//       <div className="text-center mt-8">
//         © 2025 Halal Goes. All rights reserved.
//       </div>
//     </div>
//   );
// }

// export default Footer;
"use client";

import React from "react";
import Link from "next/link";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#FFFAEA] text-[#000000] py-10">
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

            {/* App Download Links */}
            <div className="mt-6 space-y-4">
              <h3 className="text-lg font-medium mb-3">Download Our Apps</h3>
              <div className="flex flex-col sm:flex-row gap-3 text-[#ffffff]">
                <a
                  href="#"
                  className="flex items-center bg-black rounded-lg px-4 py-2 w-48  hover:bg-gray-900 transition"
                  aria-label="Download Rider App from App Store"
                >
                  <div className="mr-3">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      height="24"
                      width="24"
                    >
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                    </svg>
                  </div>
                  <div className="">
                    <div className="text-xs">Download on the</div>
                    <div className="text-lg font-semibold font-sans -mt-1">
                      App Store
                    </div>
                  </div>
                </a>

                <a
                  href="#"
                  className="flex items-center bg-black rounded-lg px-4 py-2 w-48 hover:bg-gray-900 transition"
                  aria-label="Download Rider App from Google Play"
                >
                  <div className="mr-3">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      height="24"
                      width="24"
                    >
                      <path d="M3.609 1.814L13.792 12 3.609 22.186c-.181.181-.29.423-.29.679V1.135c0 .256.109.498.29.679m10.831 2.321L5.982 1.736 15.085 10.8l-1.865 1.865m3.798 1.08l-3.035 1.765 1.865 1.865 2.699-1.502c.199-.155.328-.375.398-.631a1.265 1.265 0 000-.802c-.151-.511-.655-.831-1.177-.831-.259 0-.505.068-.75.136M5.981 22.263l8.458-4.248-2.609-2.609-5.849 6.857z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-lg font-semibold font-sans -mt-1">
                      Google Play
                    </div>
                  </div>
                </a>
              </div>
              {/* rider and restaurant  */}
              {/* <div className="mt-4">
                <h4 className="text-sm font-medium mb-2">Rider App</h4>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="#"
                    className="flex items-center bg-[#607F72] rounded-lg px-4 py-2 hover:bg-[#4a665b] transition"
                    aria-label="Download Rider App"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 mr-2"
                    >
                      <path d="M12 1.5a.75.75 0 01.75.75V7.5h-1.5V2.25A.75.75 0 0112 1.5zM11.25 7.5v5.69l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V7.5h3.75a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9a3 3 0 013-3h3.75z" />
                    </svg>
                    <span>Rider App</span>
                  </a>
                </div>
              </div>

              <div className="mt-1">
                <h4 className="text-sm font-medium mb-2">Restaurant App</h4>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="#"
                    className="flex items-center bg-[#607F72] rounded-lg px-4 py-2 hover:bg-[#4a665b] transition"
                    aria-label="Download Restaurant App"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 mr-2"
                    >
                      <path d="M12 1.5a.75.75 0 01.75.75V7.5h-1.5V2.25A.75.75 0 0112 1.5zM11.25 7.5v5.69l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V7.5h3.75a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9a3 3 0 013-3h3.75z" />
                    </svg>
                    <span>Restaurant App</span>
                  </a>
                </div>
              </div> */}
            </div>
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
                  className="hover:text-[#1B3B31] transition-colors cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/registerRider"
                  className="hover:text-[#1B3B31] transition-colors cursor-pointer"
                >
                  Register as a Rider
                </Link>
              </li>
              <li>
                <Link
                  href="/registerRestaurant"
                  className="hover:text-[#1B3B31] transition-colors cursor-pointer"
                >
                  Register Restaurant
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-[#1B3B31] transition-colors cursor-pointer"
                >
                  FAQs
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
              className="bg-black rounded-full w-10 h-10 flex items-center justify-center"
              aria-label="Scroll to top"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="cursor-pointer"
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
