import {
  PhoneIcon,
  MailIcon,
  FacebookIcon,
  TwitterIcon,
  HomeIcon,
  MenuIcon,
} from "lucide-react";
import React, { useState } from "react";
import { render } from "react-dom";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="w-full">
      <div className="bg-black text-white px-4 py-2 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-2 sm:space-y-0">
            <div className="flex items-center">
              <PhoneIcon className="h-4 w-4 mr-2" />
              <span>(888) 000-0000</span>
            </div>
            <div className="flex items-center">
              <MailIcon className="h-4 w-4 mr-2" />
              <span>support@website.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-xs sm:text-sm">STAY CONNECTED</span>
            <FacebookIcon className="h-4 w-4" />
            <TwitterIcon className="h-4 w-4" />
            <HomeIcon className="h-4 w-4" />
          </div>
        </div>
      </div>

      <nav className="border-b px-4 py-4 relative">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <div className="text-xl font-bold">LOGO</div>
            <div className="hidden md:flex space-x-6">
              <a className="text-red-500 hover:text-red-700">HOME</a>
              <a className="hover:text-gray-600">SPORTS</a>
              <a className="hover:text-gray-600">CONCERTS</a>
              <a className="hover:text-gray-600">THEATER</a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 hover:text-gray-600">REGISTER</button>
            <button className="px-4 py-2 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white transition-colors">
              SIGN IN
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}
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
              <button className="px-4 py-2 hover:text-gray-600">
                REGISTER
              </button>
              <button className="px-4 py-2 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white transition-colors">
                SIGN IN
              </button>
            </div>
          </div>
        </div>

        {/* Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </nav>
    </div>
  );
}
