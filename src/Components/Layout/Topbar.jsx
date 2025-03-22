import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram, FaTwitter } from "react-icons/fa6";
import { MdAddIcCall, MdMessage } from "react-icons/md";

const Topbar = () => {
  return (
    <div>
      <div className="bg-topbar py-2 lg:py-4 font-poppins">
        <div className="max-w-max-width mx-auto px-4 lg:px-0 flex flex-col lg:flex-row justify-between gap-y-3 lg:gap-y-0">
          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between lg:w-[40%] gap-y-2 sm:gap-y-0">
            <div className="text-white flex items-center gap-x-2 text-sm lg:text-base">
              <MdMessage className="text-lg" /> mail@company.com
            </div>

            {/* Divider - hidden on mobile, visible on sm and up */}
            <div className="hidden sm:block w-[2px] h-6 bg-[#5C6A92]"></div>

            <div className="text-white flex items-center gap-x-2 text-sm lg:text-base">
              <MdAddIcCall className="text-lg" />
              +896 120 5889 (Toll free)
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex text-white items-center gap-x-6 sm:gap-x-10 text-lg lg:text-xl justify-center sm:justify-start lg:justify-between">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-white bg-black pt-1 pb-1">
        <div className="bg-[#FFB800] h-[2px] pt-1 ml-1 mr-1"></div>
      </div>
    </div>
  );
};

export default Topbar;
