import React from 'react';
import { useState } from "react";
import { useEffect } from "react";


const Header = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        setScrollPosition(window.scrollY);
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    return (
        <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor:
            scrollPosition > 50 ? "rgb(34,35,39)" : "transparent",
          backdropFilter: scrollPosition > 50 ? "blur(8px)" : "none",
        }}
        >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <span className="text-white text-xl font-bold hover:text-red-500 transition-colors duration-300">
                LOGO
              </span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-red-500 hover:text-red-400 px-3 py-2 text-sm font-medium transition-colors duration-300"
              >
                HOME
              </a>
              <a
                href="#"
                className="text-white hover:text-red-400 px-3 py-2 text-sm font-medium transition-colors duration-300"
              >
                SPORTS
              </a>
              <a
                href="#"
                className="text-white hover:text-red-400 px-3 py-2 text-sm font-medium transition-colors duration-300"
              >
                CONCERTS
              </a>
              <a
                href="#"
                className="text-white hover:text-red-400 px-3 py-2 text-sm font-medium transition-colors duration-300"
              >
                THEATER
              </a>
            </nav>

            {/* Right side buttons */}
            <div className="flex items-center space-x-4">
              <button className="text-white hover:text-red-400 px-3 py-2 text-sm font-medium transition-colors duration-300">
                SELL
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105">
                SIGN IN
              </button>
            </div>
          </div>
        </div>
      </header>
    );
};

export default Header;