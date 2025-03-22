import React from "react";
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
        </div>
      </div>
    </div>
  );
};

export default Footer;
