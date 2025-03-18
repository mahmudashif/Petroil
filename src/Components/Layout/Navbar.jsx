import React from "react";
import logo from "/public/Logo.svg";

const navItems = [
  { item: "Home", path: "/" },
  { item: "About", path: "/about" },
  { item: "Services", path: "/services" },
  { item: "Gallery", path: "/gallery" },
  { item: "Blog", path: "/blog" },
];

const Navbar = () => {
  return (
    <div className="bg-navbarColor">
      <div className="max-w-max-width mx-auto py-3 flex justify-between items-center">
        <div>
          <img src={logo} alt="Logo" className="h-10" />
        </div>
        <nav>
          <ul className="flex space-x-8">
            {navItems.map((nav, index) => (
              <li key={index}>
                <a href={nav.path} className="text-white hover:text-gray-300">
                  {nav.item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
