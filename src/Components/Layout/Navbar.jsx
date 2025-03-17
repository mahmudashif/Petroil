import React from "react";
import logo from "/public/Logo.svg";

const Navbar = () => {
  return (
    <div className="bg-navbarColor">
      <div className="max-w-max-width mx-auto py-2">
        <div>
          <img src={logo} alt="" />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
