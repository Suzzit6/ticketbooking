import React from "react";
import { ChevronLeft, ChevronRight, Clock, MapPin } from "lucide-react";


const CustomArrow = ({ direction, onClick,top }) => {
    return (
      <button
        onClick={onClick}
        className={`absolute ${top} -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-2 transition-all duration-300 shadow-md ${
          direction === 'next' ? 'right-4' : 'left-4'
        }`}
      >
        {direction === 'next' ? (
          <ChevronRight className="w-4 h-4 text-black" />
        ) : (
          <ChevronLeft className="w-4 h-4 text-black" />
        )}
      </button>
    );
  };

export default CustomArrow;