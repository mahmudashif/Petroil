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
      <div className="flex flex-wrap justify-between">
        <img
          src={servicesImg1 || "/placeholder.svg"}
          alt=""
          className="w-1/4 lg:w-auto"
        />
        <img
          src={servicesImg2 || "/placeholder.svg"}
          alt=""
          className="w-1/4 lg:w-auto"
        />
        <img
          src={servicesImg3 || "/placeholder.svg"}
          alt=""
          className="w-1/4 lg:w-auto"
        />
        <img
          src={servicesImg4 || "/placeholder.svg"}
          alt=""
          className="w-1/4 lg:w-auto"
        />
      </div>

      <div className="flex flex-col lg:flex-row justify-between mt-10">
        <div className="w-full lg:w-[50%] px-4 lg:pl-[20%] lg:pr-28 space-y-5 mt-10 lg:mt-20">
          <h3 className="font-poppins font-bold text-4xl lg:text-6xl">
            our services
          </h3>
          <p className="font-poppins font-medium leading-[100%] text-lg">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>

        <div className="w-full lg:w-[50%] mt-8 lg:mt-0 relative">
          <img
            src={servicesImg5 || "/placeholder.svg"}
            alt=""
            className="w-full"
          />
          {/* Overlay for servicesImg5 */}
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center p-4">
            <h2 className="text-white font-poppins font-bold text-2xl md:text-3xl mb-4 text-center">
              Modern natural oil and gas refineries.
            </h2>
            <button className="bg-white text-red-600 hover:bg-red-600 hover:text-white px-4 py-2 font-poppins font-medium transition-all duration-300 hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row mt-8 lg:mt-0">
        <div className="w-full lg:w-[50%] relative">
          <img
            src={servicesImg6 || "/placeholder.svg"}
            alt=""
            className="w-full"
          />
          {/* Overlay for servicesImg6 */}
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center p-4">
            <h2 className="text-white font-poppins font-bold text-2xl md:text-3xl mb-4 text-center">
              Supply of national industries.
            </h2>
            <button className="bg-white text-red-600 hover:bg-red-600 hover:text-white px-4 py-2 font-poppins font-medium transition-all duration-300 hover:scale-105">
              Learn More
            </button>
          </div>
        </div>

        <div className="w-full lg:w-[50%] mt-8 lg:mt-0 relative">
          <img
            src={servicesImg7 || "/placeholder.svg"}
            alt=""
            className="w-full"
          />
          {/* Overlay for servicesImg7 */}
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center p-4">
            <h2 className="text-white font-poppins font-bold text-2xl md:text-3xl mb-4 text-center">
              National fuel distribution and supply.
            </h2>
            <button className="bg-white text-red-600 hover:bg-red-600 hover:text-white px-4 py-2 font-poppins font-medium transition-all duration-300 hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#F0F0F0] py-16 lg:py-[136px]">
        <div className="max-w-max-width mx-auto flex flex-col lg:flex-row">
          <div className="bg-red-600 w-full lg:w-[30%] text-white font-poppins py-12 lg:py-24 px-8 lg:px-16 font-bold text-3xl lg:text-4xl leading-[100%]">
            Learn more about our company
          </div>
          <div className="relative flex items-center justify-center w-full lg:w-[70%]">
            <img
              src={servicesImg8 || "/placeholder.svg"}
              alt=""
              className="w-full"
            />
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
