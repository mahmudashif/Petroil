import React from "react";

const Map = () => {
  return (
    <div className="font-poppins">
      <div className="flex w-full justify-center">
        <img src="/public/Maps.svg" alt="" />
      </div>
      <div className="bg-red-500">
        <div className="max-w-max-width mx-auto flex justify-between py-5 items-center">
          <h4 className="text-white text-2xl font-bold">
            Want to join as member branch in your area?
          </h4>
          <button
            className="uppercase border-[2px] px-5 py-3 text-white font-bold border-white 
            hover:bg-white hover:text-red-500 transition-all duration-300"
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Map;
