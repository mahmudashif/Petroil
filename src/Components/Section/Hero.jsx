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
      <div className="absolute inset-0 max-w-max-width mx-auto mt-[250px]">
        <h1 className="text-white font-bold font-poppins text-6xl w-[800px]">
          We exist since 1975 on the oil and gas industry.
        </h1>

        <button className="bg-[#F40404] mt-11 hover:bg-red-700 text-white font-semibold text-lg py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg">
          learn more
        </button>
      </div>
    </div>
  );
};

export default Hero;
