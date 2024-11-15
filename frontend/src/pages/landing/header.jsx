import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import MobileHeader from "./mobileheader";

const Header = ({ setIsLoginOpen }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header
    className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4"
    style={{
      backgroundColor: scrollPosition > 50 ? "rgb(34,35,39)" : "transparent",
      backdropFilter: scrollPosition > 50 ? "blur(8px)" : "none",
    }}
  >
    <div className="max-w-6xl mx-auto">
      <div className="flex  justify-between h-16">
        <div className="flex items-center space-x-8">
          <span className="text-red-500 text-3xl font-bold hover:text-red-500 transition-colors duration-300">
            DEUCE
          </span>
          <nav className="hidden md:flex space-x-2">
            <a href="#" className="text-white hover:text-red-400 px-2 py-1 text-base font-medium">
              Home
            </a>
            <a href="#" className="text-white hover:text-red-400 px-2 py-1 text-base font-medium">
              Concerts
            </a>
            <a href="#" className="text-white hover:text-red-400 px-2 py-1 text-base font-medium">
              Shows
            </a>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <button onClick={setIsLoginOpen} className="text-white hover:text-red-400 px-2 py-1 text-base font-medium">
            Sell
          </button>
          {/* <button onClick={setIsLoginOpen} className="text-white hover:text-red-400 px-2 py-1 text-base font-medium">
            Support
          </button> */}
          <button className="bg-red-500 text-white px-3 py-1.5 rounded text-base font-medium">
            Sign in
          </button>
          <button
              onClick={toggleMenu}
              className="md:hidden text-white hover:text-red-400"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
        </div>
      </div>
      <MobileHeader isMenuOpen={isMenuOpen} />
    </div>
  </header>
  );
};

export default Header;
