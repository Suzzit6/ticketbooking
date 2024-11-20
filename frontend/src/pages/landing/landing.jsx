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
import SectionReliable from "./section-reliable";
import BrowseEvents from "./section-location";

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
        <div className="min-h-screen" style={{ backgroundColor: "#020201" }}>
          {" "}
          {/* Header */}
          <Header setIsLoginOpen={setIsLoginOpen} />
          {/* Hero Section */}
          <section className="relative h-[57vh] flex justify-center">
            <img
              // src="https://i.imgur.com/JuBUG8B.jpeg"
              // src="https://i.imgur.com/GdBdyTC.jpeg"
              // src="https://i.imgur.com/R0HAgoe.jpeg"
              // src="https://i.imgur.com/UIkxnIe.jpeg"
              // src="https://i.imgur.com/7jkKXfl.jpeg"
              src="https://i.imgur.com/dZXpf9O.jpeg"
              alt="Stadium"
              className="w-full md:w-10/12 h-full object-cover"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/40" />
            <img
              src="https://i.imgur.com/R0HAgoe.jpeg"
              alt="Stadium"
              className="w-full h-full object-cover"
            /> */}
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
                        className="w-5 h-5 text-black"
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
          {/* <SectionReliable /> */}
          < BrowseEvents />
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
