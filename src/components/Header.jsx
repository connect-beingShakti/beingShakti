import React, { useState } from "react";
import logo from "../assets/logo3.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md bg-gray-900 z-50">
      <div className="container max-w-7xl text-gray-800 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Company Name */}
           <div className="text-2xl font-bold text-gray-800 flex items-center justify-between">
            <img src={logo} className="m-2 w-[64px]"/>
            <span>
              Being Shakti
            </span>
          </div>

          {/* Menu for larger screens */}
          <nav className="hidden  md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-800 hover:text-blue-700 font-medium"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-gray-800 hover:text-blue-700 font-medium"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-gray-800 hover:text-blue-700 font-medium"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-800 hover:text-blue-700 font-medium"
            >
              Contact Us
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden focus:outline-none focus:ring-2 focus:ring-blue-700"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <nav className="flex flex-col space-y-2 py-2">
              <a
                href="#home"
                className="text-gray-800 hover:text-blue-700 font-medium"
              >
                Home
              </a>
              <a
                href="#services"
                className="text-gray-800 hover:text-blue-700 font-medium"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-gray-800 hover:text-blue-700 font-medium"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-gray-800 hover:text-blue-700 font-medium"
              >
                Contact Us
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
