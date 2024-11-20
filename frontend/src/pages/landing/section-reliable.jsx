import React, { useState } from "react";
import { useEffect } from "react";
import MobileHeader from "./mobileheader";
import Header from "./header";
import TrendingEvents from "./trending-slider";
import ConcertSlider from "./concert-slider";
import ShowsSlider from "./shows-slider";
import { motion } from "framer-motion";


const SectionReliable = () => {
    return (
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
                    // onClick={setIsLoginOpen}
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
    );
};

export default SectionReliable;