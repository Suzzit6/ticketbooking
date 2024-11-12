import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight, Clock, MapPin } from "lucide-react";
import { i } from "framer-motion/client";

const TrendingEvents = () => {
  const events = [
    {
      id: 1,
      title: "Sidhu Moosewala",
      date: "Nov 17, 7:00 PM",
      venue: "Venue to be announced : Ahmedabad",
      price: "₹2988 onwards",
      image: "/assets/images/trending/event1.jpg",
      month: "NOV",
      day: "17",
    },
    {
      id: 2,
      title: "Event Title",
      date: "Dec 31, 6:30 PM",
      venue: "Venue to be announced : Ahmedabad",
      price: "₹1800 onwards",
      image: "/assets/images/trending/event2.jpg",
      month: "DEC",
      day: "31",
    },
    {
      id: 3,
      title: "Event Title",
      date: "Feb 1, 7:00 PM",
      venue: "Venue To Be Announced: Pune",
      price: "₹1999 onwards",
      image: "/assets/images/trending/event3.jpg",
      month: "FEB",
      day: "1",
    },
    {
      id: 4,
      title: "Event Title",
      date: "Feb 1, 7:00 PM",
      venue: "Venue To Be Announced: Mumbai",
      price: "₹1999 onwards",
      image: "/assets/images/trending/event4.jpg",
      month: "FEB",
      day: "1",
    },
    {
      id: 5,
      title: "Event Title",
      date: "Feb 1, 7:00 PM",
      venue: "Venue To Be Announced: Pune",
      price: "₹1999 onwards",
      image: "/assets/images/trending/event5.jpg",
      month: "FEB",
      day: "1",
    },
  ];

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 8000,
  //   nextArrow: <NextArrow />,
  //   prevArrow: <PrevArrow />,
  //   appendDots: (dots) => (
  //     <div>
  //       <ul className="slick-dots">{dots}</ul>
  //     </div>
  //   ),
  //   customPaging: (i) => (
  //     <div className="w-2 h-2 rounded-full bg-gray-500 transition-all duration-300 hover:bg-red-500 hover:w-6 cursor-pointer" />
  //   ),
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    pauseOnHover: false,
    pauseOnFocus: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <div>
        <ul className="slick-dots">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-2 h-2 rounded-full bg-gray-500 transition-all duration-300 hover:bg-red-500 hover:w-6 cursor-pointer" />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    // <section className="py-8 bg-black">
    //   <div className="container mx-auto px-4">
    //     <div className="flex items-center justify-between mb-6">
    //       <h2 className="text-xl font-bold text-white">Trending Events</h2>
    //       <div className="flex items-center space-x-2">
    //         {/* <span className="text-white text-sm">1 of 4</span> */}
    //         <button className="p-1 rounded-full bg-gray-800 text-white">
    //           <svg
    //             className="w-5 h-5"
    //             fill="none"
    //             stroke="currentColor"
    //             viewBox="0 0 24 24"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth={2}
    //               d="M15 19l-7-7 7-7"
    //             />
    //           </svg>
    //         </button>
    //         <button className="p-1 rounded-full bg-gray-800 text-white">
    //           <svg
    //             className="w-5 h-5"
    //             fill="none"
    //             stroke="currentColor"
    //             viewBox="0 0 24 24"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth={2}
    //               d="M9 5l7 7-7 7"
    //             />
    //           </svg>
    //         </button>
    //       </div>
    //     </div>

    //     <Slider {...settings}>
    //       {events.map((event) => (
    //         <div key={event.id} className="px-2">
    //           <div className="relative group">
    //             <img
    //               src={event.image}
    //               alt={event.title}
    //               className="w-full aspect-[3/2] object-cover rounded-lg"
    //             />
    //             <button className="absolute top-2 right-2 p-1.5 rounded-full bg-white/10 hover:bg-white/20">
    //               <svg
    //                 className="w-5 h-5 text-white"
    //                 fill="none"
    //                 stroke="currentColor"
    //                 viewBox="0 0 24 24"
    //               >
    //                 <path
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   strokeWidth={2}
    //                   d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    //                 />
    //               </svg>
    //             </button>
    //             <div className="p-3">
    //               <h3 className="text-white text-lg font-semibold mb-1">
    //                 {event.title}
    //               </h3>
    //               <p className="text-gray-400 text-sm">{event.date}</p>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </Slider>
    //   </div>
    // </section>
    <section className="py-6 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white">Trending Events</h2>
          {/* <div className="flex items-center space-x-2">
            <span className="text-white text-xs">1 of 4</span>
            <div className="flex space-x-1">
              <button className="p-1 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="p-1 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div> */}
        </div>

        <div className=" -mx-2">
          <Slider {...settings}>
            {events.map((item) => (
              <div key={item.id} className="px-1.5">
                <div className="relative group">
                  <div className="aspect-[4/3] relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-lg"
                      width="250" // example width
                      height="150" // example height
                    />
                  </div>
                  <div className="p-2">
                    <h3 className="text-white text-base font-medium mb-0.5 line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{item.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2 backdrop-blur-sm transition-all duration-300`}
      style={{ ...style }}
      onClick={onClick}
    >
      <ChevronRight className="w-6 h-6 text-black" />
    </button>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2 backdrop-blur-sm transition-all duration-300`}
      style={{ ...style }}
      onClick={onClick}
    >
      <ChevronLeft className="w-6 h-6 text-black" />
    </button>
  );
};

export default TrendingEvents;
