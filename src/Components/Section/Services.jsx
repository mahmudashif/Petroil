import React from "react";
import servicesImg1 from "/public/servicesImg1.svg";
import servicesImg2 from "/public/servicesImg2.svg";
import servicesImg3 from "/public/servicesImg3.svg";
import servicesImg4 from "/public/servicesImg4.svg";
import servicesImg5 from "/public/servicesImg5.svg";
import servicesImg6 from "/public/servicesImg6.svg";
import servicesImg7 from "/public/servicesImg7.svg";
import servicesImg8 from "/public/servicesImg8.svg";

const Services = () => {
  return (
    <div>
      <div className="flex justify-between">
        <img src={servicesImg1} alt="" />
        <img src={servicesImg2} alt="" />
        <img src={servicesImg3} alt="" />
        <img src={servicesImg4} alt="" />
      </div>
      <div className="flex justify-between mt-10">
        <div className="w-[50%] pl-[20%] space-y-5 pr-28 mt-20">
          <h3 className="font-poppins font-bold text-6xl">our services</h3>
          <p className="font-poppins font-medium leading-[100%] text-lg">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div className="w-[50%]">
          <img src={servicesImg5} alt="" />
        </div>
      </div>
      <div className="flex">
        <div className="w-[50%]">
          <img src={servicesImg6} alt="" />
        </div>
        <div className="w-[50%]">
          <img src={servicesImg7} alt="" />
        </div>
      </div>
      <div className="bg-[#F0F0F0] py-[136px]">
        <div className="max-w-max-width mx-auto flex">
          <div className="bg-red-600 w-[30%] text-white font-poppins py-24 px-16 font-bold text-4xl leading-[100%]">
            Learn more about our company
          </div>
          <div className="relative flex items-center justify-center">
            <img src={servicesImg8} alt="" className="w-full" />
            <button className="absolute px-6 py-3 text-red-600 font-bold font-poppins bg-white border border-black shadow-md transition-all duration-300 ease-in-out hover:bg-black hover:text-white hover:scale-105 hover:shadow-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
