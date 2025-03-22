import React from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoMailUnreadOutline } from "react-icons/io5";
import { MdAddIcCall } from "react-icons/md";
import logo from "/public/footerLogo.svg";

const Footer = () => {
  return (
    <div className="bg-footerColor py-[149px]">
      <div className="text-white max-w-max-width mx-auto">
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
        </div>
      </div>
    </div>
  );
};

export default Footer;
