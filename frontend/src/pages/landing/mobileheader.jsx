import React from "react";
import { Link } from "react-router-dom";

const MobileHeader = ({isMenuOpen}) => {
  return (
    <div
      className={`md:hidden transition-all duration-300 overflow-hidden  ${
        isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 rounded-md mt-2">
        <a
          href="#"
          className="text-red-500 hover:text-red-400 block px-3 py-2 text-base font-medium transition-colors duration-300"
        >
          HOME
        </a>
        <a
          href="#"
          className="text-white hover:text-red-400 block px-3 py-2 text-base font-medium transition-colors duration-300"
        >
          CONCERTS
        </a>
        <a
          href="#"
          className="text-white hover:text-red-400 block px-3 py-2 text-base font-medium transition-colors duration-300"
        >
          SHOWS
        </a>
        <a
          href="#"
          className="text-white hover:text-red-400 block px-3 py-2 text-base font-medium transition-colors duration-300"
        >
          SELL
        </a>
        <button className="w-full bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md text-base font-medium transition-all duration-300">
          SIGN IN
        </button>
      </div>
    </div>
  );
};

export default MobileHeader;
