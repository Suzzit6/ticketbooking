import React from 'react';
import { useState } from "react";
import {
    PhoneIcon,
    MailIcon,
    FacebookIcon,
    TwitterIcon,
    HomeIcon,
    MenuIcon,
  } from "lucide-react";
import { Link } from "react-router-dom";

const MobileHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className='wrapper'>
        <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="p-4 space-y-6">
          <div className="flex justify-end">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2"
              aria-label="Close menu"
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-col space-y-4">
            <a className="text-red-500 hover:text-red-700">HOME</a>
            <a className="hover:text-gray-600">SPORTS</a>
            <a className="hover:text-gray-600">CONCERTS</a>
            <a className="hover:text-gray-600">THEATER</a>
          </div>
          <div className="flex flex-col space-y-4">
            <button className="px-4 py-2 hover:text-gray-600">SELL</button>
            <button className="px-4 py-2 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white transition-colors">
              SIGN IN
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div
          className="fixed bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
      </div>
    );
};

export default MobileHeader;