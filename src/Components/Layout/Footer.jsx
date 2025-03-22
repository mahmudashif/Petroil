import React from "react";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoMailUnreadOutline } from "react-icons/io5";
import { MdAddIcCall } from "react-icons/md";
import certificate1 from "/public/Cert1.svg";
import certificate2 from "/public/Cert2.svg";
import logo from "/public/footerLogo.svg";

const Footer = () => {
  return (
    <div className="font-poppins">
      <div className="bg-footerColor py-16 sm:py-20 md:py-24 lg:py-[149px]">
        <div className="text-white max-w-max-width mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* ---------- footer first column ---------- */}
            <div>
              <div>
                <img
                  src={logo || "/placeholder.svg"}
                  alt="Logo"
                  className="h-10 w-auto"
                />
              </div>
              <div className="mt-6 lg:mt-8 space-y-3 lg:space-y-4">
                <p className="flex items-center gap-x-3 text-sm lg:text-base">
                  <IoMailUnreadOutline className="text-lg" />
                  mail@yourcompany.com
                </p>
                <p className="flex items-center gap-x-3 text-sm lg:text-base">
                  <MdAddIcCall className="text-lg" />
                  +123456789
                </p>
                <p className="flex items-center gap-x-3 text-sm lg:text-base">
                  <FaMapLocationDot className="text-lg" />
                  101 baker street, NYC
                </p>
              </div>
              <div className="flex mt-4 lg:mt-6 gap-x-4 lg:gap-x-5 text-xl lg:text-2xl text-red-300 items-center">
                <FaFacebook className="cursor-pointer hover:text-red-400" />
                <FaTwitter className="cursor-pointer hover:text-red-400" />
                <FaLinkedin className="cursor-pointer hover:text-red-400" />
                <FaInstagramSquare className="cursor-pointer hover:text-red-400" />
              </div>
            </div>

            {/* ---------- footer second column ---------- */}
            <div>
              <h6 className="font-bold text-lg lg:text-xl">Company</h6>
              <ul className="mt-3 lg:mt-5 space-y-2 lg:space-y-3 capitalize text-sm lg:text-base">
                <li className="cursor-pointer hover:text-red-300">home</li>
                <li className="cursor-pointer hover:text-red-300">about</li>
                <li className="cursor-pointer hover:text-red-300">services</li>
                <li className="cursor-pointer hover:text-red-300">gallery</li>
              </ul>
            </div>

            {/* ---------- footer third column ---------- */}
            <div>
              <h6 className="font-bold text-lg lg:text-xl">Others</h6>
              <ul className="mt-3 lg:mt-5 space-y-2 lg:space-y-3 capitalize text-sm lg:text-base">
                <li className="cursor-pointer hover:text-red-300">blog</li>
                <li className="cursor-pointer hover:text-red-300">contact</li>
                <li className="cursor-pointer hover:text-red-300">
                  terms and conditions
                </li>
                <li className="cursor-pointer hover:text-red-300">
                  privacy policy
                </li>
              </ul>
            </div>

            {/* ---------- footer fourth column ---------- */}
            <div>
              <h6 className="font-bold text-lg lg:text-xl">Certificate</h6>
              <div className="flex mt-3 lg:mt-5 gap-x-4 lg:gap-x-5">
                <img
                  src={certificate1 || "/placeholder.svg"}
                  alt="Certificate 1"
                  className="h-12 w-auto"
                />
                <img
                  src={certificate2 || "/placeholder.svg"}
                  alt="Certificate 2"
                  className="h-12 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#282828] py-6 lg:py-10 px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <p className="max-w-max-width mx-auto text-[#6C6C6C] text-sm lg:text-base">
          © Copyright 2022 by AltDesain Studio – All right reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
