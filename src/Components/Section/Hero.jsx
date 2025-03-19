import React from "react";
import heroImg from "/public/heroImage.svg";

const Hero = () => {
  return (
    <div className="relative w-full">
      {/* Hero Image */}
      <img src={heroImg} alt="Hero" className="w-full h-full object-cover" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-white">
          We exist since 1975 on the oil and gas industry.
        </h1>

        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
