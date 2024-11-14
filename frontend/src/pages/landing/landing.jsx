import {
  PhoneIcon,
  MailIcon,
  FacebookIcon,
  TwitterIcon,
  HomeIcon,
  MenuIcon,
} from "lucide-react";
import React, { useState } from "react";
import { useEffect } from "react";
import MobileHeader from "./mobileheader";
import Header from "./header";
import TrendingEvents from "./trending-slider";
import ConcertSlider from "./concert-slider";
import ShowsSlider from "./shows-slider";
import { motion } from "framer-motion";
import Footer from "./footer";
import LoginPopup from "../user/login";
import { GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios";

const googleClientID =
  "613011644713-8ulrf00dkg201cq3bc4r5855ed2a1qv8.apps.googleusercontent.com";
const googleSecret = "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";
axios.defaults.withCredentials = true;

export default function Landing() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <GoogleOAuthProvider clientId={googleClientID}>
      <div className="w-full">
        <LoginPopup
          isOpen={isLoginOpen}
          onClose={() => setIsLoginOpen(false)}
        />
        <div className="min-h-screen bg-black/90">
          {/* Header */}
          <Header setIsLoginOpen={setIsLoginOpen} />
          {/* Hero Section */}
          {/* <section className="relative h-[75vh]">
            <img
              src="https://i.imgur.com/JuBUG8B.jpeg"
              alt="Concert Venue"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/40" />

            <div className="absolute inset-0 flex flex-col items-center px-4 md:px-20">
              <div className="text-center max-w-4xl mx-auto mt-32 md:mt-28 animate-fade-in-down">
                <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-slide-up">
                  One click away
                </h1>
                <p className="text-white text-xl md:text-2xl lg:text-2xl font-semibold tracking-wide animate-slide-up-delay">
                  from the time of your life!
                </p>
              </div>

              <div className="w-full max-w-2xl mx-auto mt-auto mb-32 animate-fade-in">
                <div className="relative transform hover:scale-[1.02] transition-transform duration-300">
                  <input
                    type="text"
                    placeholder="Search by Artist, Team, Event, Location, Venue and/or Date"
                    className="w-full p-4 pr-16 rounded-lg text-base outline-none shadow-lg focus:ring-2 focus:ring-red-500 transition-all duration-300"
                  />
                  <button className="absolute right-0 top-0 h-full bg-red-500 hover:bg-red-600 text-white px-8 rounded-r-lg transition-colors duration-300">
                    SEARCH
                  </button>
                </div>
              </div>
            </div>
          </section> */}
          <section className="relative h-[57vh] flex justify-center">
            <img
              src="https://i.imgur.com/JuBUG8B.jpeg"
              alt="Stadium"
              className="w-full md:w-4/5 h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/40" />

            <div className="absolute inset-0 flex flex-col items-center">
              <div className="max-w-5xl w-full mx-auto px-4 flex flex-col items-center">
                <div className="text-center mt-24">
                  <h1 className="text-white text-4xl md:text-5xl font-bold mb-2">
                    One click away
                  </h1>
                  <p className="text-white text-lg md:text-xl font-medium">
                    from the time of your life!
                  </p>
                </div>

                <div className="w-full max-w-xl mt-8">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="What do you want to see live?"
                      className="w-full p-3 pr-12 rounded-lg text-base outline-none shadow-lg"
                    />
                    <button className="absolute right-3 top-1/2 transform -translate-y-1/2 ">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* </div> */}

          <TrendingEvents />
          <div className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -right-24 -top-24 w-96 h-96 bg-red-200 rounded-full blur-3xl" />
              <div className="absolute -left-24 -bottom-24 w-96 h-96 bg-blue-200 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column */}
                <div className="space-y-8">
                  <div className="inline-flex items-center bg-gray-100 rounded-full px-4 py-2 shadow-sm">
                    <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="ml-2 text-sm font-medium text-gray-800">
                      Let's Get Those Tickets Sold
                    </span>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                      Reliable & <span className="text-red-500">Rewarding</span>{" "}
                      Tickets
                    </h1>

                    <p className="text-lg text-gray-600 max-w-2xl">
                      We have a 100% Buyer Guarantee + the only ticket rewards
                      program around. So, grab your seats, they're guaranteed -
                      just like your 11th ticket on us*.
                    </p>

                    <div className="space-x-4">
                      <motion.button
                        onClick={setIsLoginOpen}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-xl 
                           text-lg font-semibold transition-colors shadow-lg 
                           shadow-red-500/30 hover:shadow-red-600/40"
                      >
                        Sell Now!
                      </motion.button>

                      <button
                        className="px-8 py-4 text-lg font-semibold text-gray-600 
                                 hover:text-gray-900 transition-colors"
                      >
                        Learn More →
                      </button>
                    </div>
                  </motion.div>
                </div>

                {/* Right Column */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <div
                    className="aspect-square max-w-md mx-auto bg-white rounded-2xl 
                shadow-2xl p-6 rotate-3 hover:rotate-0 transition-transform 
                duration-300 ease-in-out"
                  >
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-red-500/10 
                  to-blue-500/10 rounded-2xl"
                    />
                    {/* Replace this div with your image */}
                    <img
                      src="/assets/images/trending/page-view3.jpg" // Replace with your actual image path
                      alt="Ticket Rewards"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          <ConcertSlider />
          <ShowsSlider />

          <div className="bg-black/90 min-h-[400px] w-full relative overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6 py-12">
              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                onClick={setIsLoginOpen}
              >
                {/* Left content - with adjusted left margin */}
                <div className="pl-8 md:pl-12">
                  <div className="inline-flex items-center bg-gray-800/50 rounded-full px-4 py-1.5 mb-5">
                    <span className="flex h-2 w-2 rounded-full bg-red-500 mr-2"></span>
                    <span className="text-sm text-white"></span>
                    <span className="text-sm ml-2 text-gray-300">
                      Let’s Get Those Tickets Sold
                    </span>
                  </div>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-4"
                  >
                    Selling Tickets Has Never Been This Easy!
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-gray-300 text-lg mb-6"
                  >
                    Lower fees, higher reach – let's sell out together.
                  </motion.p>

                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg text-base font-medium transition-colors"
                    onClick={setIsLoginOpen}
                  >
                    Sell Now!
                  </motion.button>
                </div>

                {/* Right content - with increased card height */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex justify-center"
                >
                  <div className="bg-white p-3 rounded-xl shadow-lg min-h-[320px] w-[320px] flex flex-col items-center justify-center">
                    <img
                      src="/assets/images/trending/event1.jpg"
                      alt="Exciting Event"
                      className="w-full h-72 object-cover rounded-md "
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          <Footer />
        </div>

        {/* Add these styles to your CSS */}
        <style jsx global>{`
          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          .animate-fade-in-down {
            animation: fadeInDown 1s ease-out;
          }

          .animate-slide-up {
            animation: slideUp 1s ease-out;
          }

          .animate-slide-up-delay {
            animation: slideUp 1s ease-out 0.3s both;
          }

          .animate-fade-in {
            animation: fadeIn 1.5s ease-out;
          }
        `}</style>
      </div>
    </GoogleOAuthProvider>
  );
}
