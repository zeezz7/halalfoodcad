import React from "react";

export default function why() {
  const obj = [
    {
      icon: "tick.svg",
      title: "100% Verified Halal Restaurants",
      dis: "Every restaurant on our platform is thoroughly vetted to ensure it meets halal standards, giving you complete peace of mind with every meal.",
    },
    {
      icon: "rocket.svg",
      title: "Convenient & Easy to Use",
      dis: "Every restaurant on our platform is thoroughly vetted to ensure it meets halal standards, giving you complete peace of mind with every meal.",
    },
    {
      icon: "location2.svg",
      title: "Find Halal Food Near You",
      dis: "Every restaurant on our platform is thoroughly vetted to ensure it meets halal standards, giving you complete peace of mind with every meal.",
    },
  ];

  return (
    <div className="bg-[#1B3B31] min-h-[550px] py-8 sm:py-12 md:py-16 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
      <div className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold w-full max-w-7xl mx-auto mb-8 sm:mb-12">
        Why Choose Us?
      </div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-4 lg:gap-8 w-full max-w-7xl mx-auto">
        {obj.map((item, index) => (
          <div
            key={index}
            className="w-full md:w-1/3 flex flex-col space-y-4 bg-[#FFFAEA] p-4 sm:p-5 md:p-6 rounded-2xl transition-transform hover:scale-105"
          >
            <img
              src={item.icon}
              alt={item.title}
              className="w-[40px] sm:w-[45px] md:w-[50px]"
            />
            <div className="text-lg sm:text-xl md:text-2xl font-semibold">
              {item.title}
            </div>
            <div className="text-sm sm:text-base tracking-wide text-[#232323] font-light">
              {item.dis}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
