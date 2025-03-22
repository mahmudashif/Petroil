import React, { useEffect, useRef, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // Make sure to install react-icons
import logo from "/public/Logo.svg";

const navItems = [
  { item: "Home", path: "/" },
  { item: "About", path: "/about" },
  { item: "Services", path: "/services" },
  { item: "Gallery", path: "/gallery" },
  { item: "Blog", path: "/blog" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Handle clicks outside the navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    // Add event listener when menu is open
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Clean up event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="bg-navbarColor">
      <div className="max-w-max-width mx-auto py-3 px-4 lg:px-0 flex justify-between items-center">
        {/* Logo */}
        <div>
          <img
            src={logo || "/placeholder.svg"}
            alt="Logo"
            className="h-8 md:h-10"
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            ref={buttonRef}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <HiX className="h-6 w-6" />
            ) : (
              <HiMenu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-8">
            {navItems.map((nav, index) => (
              <li key={index}>
                <a
                  href={nav.path}
                  className="text-white hover:text-gray-300 font-poppins"
                >
                  {nav.item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Button - Hidden on mobile, visible on large screens */}
        <div className="hidden lg:block">
          <button className="relative border-[2px] px-8 py-3 text-white font-poppins font-bold overflow-hidden group transition-all duration-300 ease-in-out border-white">
            <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            <span className="relative z-10 group-hover:text-black transition-colors duration-300">
              Contact
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="lg:hidden bg-navbarColor border-t border-gray-700 absolute left-0 right-0 z-50"
        >
          <div className="max-w-max-width mx-auto px-4 py-4">
            <ul className="space-y-4">
              {navItems.map((nav, index) => (
                <li key={index}>
                  <a
                    href={nav.path}
                    className="text-white hover:text-gray-300 block font-poppins py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {nav.item}
                  </a>
                </li>
              ))}
              {/* Contact Button in Mobile Menu */}
              <li className="pt-4">
                <button className="relative border-[2px] w-full px-8 py-3 text-white font-poppins font-bold overflow-hidden group transition-all duration-300 ease-in-out border-white">
                  <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                    Contact
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
