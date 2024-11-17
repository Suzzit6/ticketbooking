import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import MobileHeader from "./mobileheader";
import { useUser } from "../../context/authprovider";
import { FaTicketAlt, FaDollarSign, FaHeart, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from "framer-motion";

const Header = ({ setIsLoginOpen }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { userAuth } = useUser();

  const [isprofileOpen, setIsprofileOpen] = useState(false);

  const profileItems = [
    { name: "Tickets", icon: <FaTicketAlt /> },
    { name: "Sell", icon: <FaDollarSign /> },
    { name: "Tracking", icon: <FaHeart /> },
    { name: "My Account", icon: <FaUser /> },
    { name: "Log Out", icon: <FaSignOutAlt /> },
  ];

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

  const getInitials = () => {
    if (userAuth) {
      const name = userAuth.name || userAuth.email;
      return name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase();
    }
    return "";
  };

  const handleMouseEnter = () => {
    setIsprofileOpen(true);
  };

  const handleMouseLeave = (e) => {
    // Check if the mouse is still within the parent container or dropdown
    const relatedTarget = e.relatedTarget;
    const dropdownContainer = e.currentTarget;

    if (!dropdownContainer.contains(relatedTarget)) {
      setIsprofileOpen(false);
    }
  };

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -5,
      scale: 0.95,
      transformOrigin: "top right",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transformOrigin: "top right",
    },
    exit: {
      opacity: 0,
      y: -5,
      scale: 0.95,
      transformOrigin: "top right",
      transition: { duration: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { x: -10, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.2,
      },
    }),
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
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-8">
            <span className="text-red-500 text-3xl font-bold hover:text-red-500 transition-colors duration-300">
              DEUCE
            </span>
            <nav className="hidden md:flex space-x-2">
              <a
                href="#"
                className="text-white hover:text-red-400 px-2 py-1 text-base font-normal"
              >
                Home
              </a>
              <a
                href="#"
                className="text-white hover:text-red-400 px-2 py-1 text-base font-normal"
              >
                Concerts
              </a>
              <a
                href="#"
                className="text-white hover:text-red-400 px-2 py-1 text-base font-normal"
              >
                Shows
              </a>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsLoginOpen(true)}
              className="text-white hover:text-red-400 px-2 py-1 text-base font-medium"
            >
              Sell
            </button>
            <button
              onClick={() => setIsLoginOpen(true)}
              className="text-white hover:text-red-400 px-2 py-1 text-base font-medium"
            >
              Support
            </button>
            {userAuth ? (
              <div
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-br bg-gray-700 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-200"
                >
                  {getInitials()}
                </motion.div>

                <AnimatePresence>
                  {isprofileOpen && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute right-0 mt-3 w-48 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                      style={{
                        filter:
                          "drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08))",
                      }}
                    >
                      <ul className="py-1">
                        {profileItems.map((item, index) => (
                          <motion.li
                            key={index}
                            custom={index}
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            className="group"
                          >
                            <a
                              href="#"
                              className=" px-4 py-3 flex items-center space-x-3 hover:bg-gray-50 transition-colors duration-150"
                            >
                              <span className="text-gray-400 group-hover:text-red-400 transition-colors duration-150">
                                {item.icon}
                              </span>
                              <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors duration-150">
                                {item.name}
                              </span>
                            </a>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <button className="bg-red-500 text-white px-3 py-1.5 rounded text-base font-medium">
                Sign in
              </button>
            )}

            <button
              onClick={toggleMenu}
              className="md:hidden text-white hover:text-red-400"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            {/* Display user profile picture if user info is available */}
            {/* // {userAuth && ( */}

            {/* // )} */}
          </div>
        </div>
        <MobileHeader isMenuOpen={isMenuOpen} />
      </div>
    </header>
  );
};

export default Header;
