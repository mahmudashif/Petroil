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
      <div className="bg-footerColor py-[149px]">
        <div className="text-white max-w-max-width mx-auto flex justify-between items-center">
          {/* ---------- footer first coloum ---------- */}
          <div>
            <div>
              <img src={logo} alt="" />
            </div>
            <div className="mt-8 space-y-4">
              <p className="flex items-center gap-x-3">
                <IoMailUnreadOutline />
                mail@yourcompany.com
              </p>
              <p className="flex items-center gap-x-3">
                <MdAddIcCall />
                +123456789
              </p>
              <p className="flex items-center gap-x-3">
                <FaMapLocationDot />
                101 baker street, NYC
              </p>
            </div>
            <div className="flex mt-6 gap-x-5 text-2xl text-red-300 items-center">
              <FaFacebook />
              <FaTwitter />
              <FaLinkedin />
              <FaInstagramSquare />
            </div>
          </div>
          {/* ---------- footer second coloum ---------- */}
          <div>
            <h6 className="font-bold text-xl">Company</h6>
            <ul className="mt-5 space-y-3 capitalize">
              <li>home</li>
              <li>about</li>
              <li>services</li>
              <li>gallery</li>
            </ul>
          </div>
          {/* ---------- footer third coloum ---------- */}
          <div>
            <h6 className="font-bold text-xl">Others</h6>
            <ul className="mt-5 space-y-3 capitalize">
              <li>blog</li>
              <li>contact</li>
              <li>terms and conditions</li>
              <li>privacy policy</li>
            </ul>
          </div>
          {/* ---------- footer fourth coloum ---------- */}
          <div>
            <h6 className="font-bold text-xl">Certificate</h6>
            <div className="flex mt-5 gap-x-5">
              <img src={certificate1} alt="" />
              <img src={certificate2} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#282828] py-10">
        <p className="max-w-max-width mx-auto text-[#6C6C6C]">
          © Copyright 2022 by AltDesain Studio – All right reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
