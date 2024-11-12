import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight, Clock, MapPin } from "lucide-react";

const ConcertSlider = () => {

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
      id: 3,
      title: "Event Title",
      date: "Feb 1, 7:00 PM",
      venue: "Venue To Be Announced: Mumbai",
      price: "₹1999 onwards",
      image: "  /assets/images/trending/event4.jpg",
      month: "FEB",
      day: "1",
    },
    {
      id: 3,
      title: "Event Title",
      date: "Feb 1, 7:00 PM",
      venue: "Venue To Be Announced: Pune",
      price: "₹1999 onwards",
      image: "/assets/images/trending/event5.jpg",
      month: "FEB",
      day: "1",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
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
    <section className="py-16 bg-black/90">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8">Top Selling Concerts
        </h2>

        <Slider {...settings}>
          {events.map((event) => (
            <div key={event.id} className="px-4">
              <div className="bg-black rounded-lg overflow-hidden hover:bg-black/90 transition-all duration-300 cursor-pointer group">
                {/* Price Tag */}
                <div className="absolute top-4 left-4 bg-white/90 text-black px-3 py-1 rounded-full text-sm font-medium z-10">
                  {event.price}
                </div>

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Date Badge */}
                  <div className="absolute bottom-4 left-4 bg-white text-black px-3 py-2 rounded-lg">
                    <div className="text-xs font-medium text-red-500">
                      {event.month}
                    </div>
                    <div className="text-xl font-bold">{event.day}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 bg-white">
                  <h3 className="text-black text-xl font-bold mb-4 line-clamp-1">
                    {event.title}
                  </h3>

                  <div className="space-y-2">
                    <div className="flex items-center text-black">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center text-black">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.venue}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
    //   <section className="py-16 bg-white">
    //   <div className="max-w-7xl mx-auto px-4">
    //     <h2 className="text-3xl font-bold text-black mb-8">Trending Events</h2>

    //     <div className="relative">
    //       {/* Navigation Buttons */}
    //       <button
    //         onClick={prevSlide}
    //         className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2 backdrop-blur-sm transition-all duration-300"
    //       >
    //         <ChevronLeft className="w-6 h-6 text-black" />
    //       </button>

    //       <button
    //         onClick={nextSlide}
    //         className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2 backdrop-blur-sm transition-all duration-300"
    //       >
    //         <ChevronRight className="w-6 h-6 text-black" />
    //       </button>

    //       {/* Slider */}
    //       <div className="flex gap-6 overflow-hidden">
    //         {events.map((event, index) => {
    //           const isActive = index === currentSlide;
    //           const offset = ((index - currentSlide) + events.length) % events.length;

    //           return (
    //             <div
    //               key={event.id}
    //               className={`flex-none w-full md:w-[calc(33.333%-1rem)] transform transition-all duration-500 ease-out`}
    //               style={{
    //                 transform: `translateX(-${currentSlide * 100}%)`,
    //                 opacity: isActive ? 1 : 0.7,
    //                 scale: isActive ? '1' : '0.95'
    //               }}
    //             >
    //               <div className="bg-white/5 rounded-lg overflow-hidden hover:bg-white/10 transition-all duration-300 cursor-pointer group ">
    //                 {/* Price Tag */}
    //                 <div className="absolute top-4 left-4 bg-white/90 text-black px-3 py-1 rounded-full text-sm font-medium z-10">
    //                   {event.price}
    //                 </div>

    //                 {/* Image */}
    //                 <div className="relative h-48 overflow-hidden">
    //                   <img
    //                     src={event.image}
    //                     alt={event.title}
    //                     className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
    //                   />
    //                   {/* Date Badge */}
    //                   <div className="absolute bottom-4 left-4 bg-white text-black px-3 py-2 rounded-lg">
    //                     <div className="text-xs font-medium text-red-500">{event.month}</div>
    //                     <div className="text-xl font-bold">{event.day}</div>
    //                   </div>
    //                 </div>

    //                 {/* Content */}
    //                 <div className="p-6">
    //                   <h3 className="text-black text-xl font-bold mb-4 line-clamp-1">
    //                     {event.title}
    //                   </h3>

    //                   <div className="space-y-2">
    //                     <div className="flex items-center text-black-300">
    //                       <Clock className="w-4 h-4 mr-2" />
    //                       <span className="text-sm">{event.date}</span>
    //                     </div>
    //                     <div className="flex items-center text-black-300">
    //                       <MapPin className="w-4 h-4 mr-2" />
    //                       <span className="text-sm">{event.venue}</span>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           );
    //         })}
    //       </div>

    //       {/* Dots */}
    //       <div className="flex justify-center mt-6 space-x-2">
    //         {events.map((_, index) => (
    //           <button
    //             key={index}
    //             onClick={() => setCurrentSlide(index)}
    //             className={`w-2 h-2 rounded-full transition-all duration-300 ${
    //               index === currentSlide ? 'bg-red-500 w-6' : 'bg-gray-500'
    //             }`}
    //           />
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </section>
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
      <ChevronRight className="w-6 h-6 text-white" />
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
      <ChevronLeft className="w-6 h-6 text-white" />
    </button>
  );
};

export default ConcertSlider;
