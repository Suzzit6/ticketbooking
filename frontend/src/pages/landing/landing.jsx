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

export default function Landing() {
  return (
    <div className="w-full">
      <div className="min-h-screen">
        <MobileHeader />
        {/* Header */}
        <Header />
        {/* Hero Section */}
        <section className="relative h-[89vh]">
          <img
            src="https://i.imgur.com/JuBUG8B.jpeg"
            alt="Concert Venue"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/40" />

          <div className="absolute inset-0 flex flex-col items-center px-4 md:px-20">
            <div className="text-center max-w-4xl mx-auto mt-32 md:mt-40 animate-fade-in-down">
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
        </section>
        {/* <section className="max-w-7xl mx-auto py-8 md:py-12 px-4">
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-bold flex items-center">
              <span className="text-red-500 mr-2">★</span>
              HOT EVENTS
            </h2>
            <div className="flex overflow-x-auto pb-2 md:pb-0 space-x-4">
              <button className="text-sm md:text-base text-red-500 whitespace-nowrap">
                ALL
              </button>
              <button className="text-sm md:text-base hover:text-red-500 whitespace-nowrap">
                CONCERTS
              </button>
              <button className="text-sm md:text-base hover:text-red-500 whitespace-nowrap">
                SHOWS
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="col-span-1 md:row-span-2">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
                alt="Adele"
                className="w-full h-64 md:h-full object-cover rounded"
              />
              <div className="mt-2">
                <h3 className="font-semibold">Adele</h3>
                <p className="text-sm text-gray-600">
                  Say Hello to Adele On Tour in 2016!
                </p>
              </div>
            </div>
            {[
              {
                src: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809",
                title: "New York Rangers",
              },
              {
                src: "https://images.unsplash.com/photo-1579546929662-711aa81148cf",
                title: "The Lion King",
              },
              {
                src: "https://images.unsplash.com/photo-1558522195-e1201b090344",
                title: "Zac Brown",
              },
              {
                src: "https://images.unsplash.com/photo-1562077772-3bd90403f7f0",
                title: "Yankees",
              },
            ].map((item, index) => (
              <div key={index}>
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded"
                />
                <div className="mt-2">
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section> */}
        <TrendingEvents />
        < ConcertSlider />
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
  );
}
