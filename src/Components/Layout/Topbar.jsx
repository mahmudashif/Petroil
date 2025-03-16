import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram, FaTwitter } from "react-icons/fa6";
import { MdAddIcCall, MdMessage } from "react-icons/md";

const Topbar = () => {
  return (
    <div className="bg-topbar py-4 font-poppins">
      <div className="max-w-max-width mx-auto flex justify-between">
        <div className="flex items-center justify-between w-[40%]">
          <div className="text-white flex items-center gap-x-2">
            <MdMessage /> mail@company.com
          </div>
          <div className="w-[2px] h-6 bg-[#5C6A92]"></div>
          <div className="text-white flex items-center gap-x-2">
            <MdAddIcCall />
            +896 120 5889 (Toll free)
          </div>
        </div>
        <div className="flex text-white items-center gap-x-10 text-xl">
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
          <FaInstagram />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
