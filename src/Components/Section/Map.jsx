import React from "react";
import map from "/public/Maps.svg";

const Map = () => {
  return (
    <div className="font-poppins">
      <div className="flex w-full justify-center">
        <img src={map} alt="Map" className="w-full h-auto object-cover" />
      </div>

      <div className="bg-red-500">
        <div className="max-w-max-width mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between py-6 sm:py-5 items-center gap-4 sm:gap-0">
          <h4 className="text-white text-xl sm:text-2xl font-bold text-center sm:text-left">
            Want to join as member branch in your area?
          </h4>

          <button
            className="uppercase border-[2px] px-4 sm:px-5 py-2 sm:py-3 text-white font-bold border-white 
            hover:bg-white hover:text-red-500 transition-all duration-300 text-sm sm:text-base"
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Map;
