import React from "react";
import heroImg from "/public/heroImage.svg";

const Hero = () => {
  return (
    <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px]">
      {/* Hero Image */}
      <img
        src={heroImg || "/placeholder.svg"}
        alt="Hero"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="absolute inset-0 px-4 sm:px-6 lg:px-8 flex flex-col justify-center lg:justify-start lg:mt-[250px] max-w-max-width mx-auto">
        <h1 className="text-white font-bold font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-6xl w-full sm:w-[80%] md:w-[90%] lg:w-[800px] leading-tight">
          We exist since 1975 on the oil and gas industry.
        </h1>

        <button className="bg-[#F40404] mt-6 sm:mt-8 lg:mt-11 hover:bg-red-700 text-white font-semibold text-base sm:text-lg py-2 sm:py-3 px-6 sm:px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg w-fit">
          learn more
        </button>
      </div>
    </div>
  );
};

export default Hero;
