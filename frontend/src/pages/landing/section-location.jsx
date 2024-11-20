import React from "react";

const BrowseEvents = () => {
  return (
    <div className="w-full py-10 px-4 bg-white border-b mt-10">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-base font-medium text-gray-500">Browse Events</h3>
        <h1 className="text-4xl font-bold text-gray-900 mt-3">Ghatkopar, IN</h1>
        <div className="mt-6 flex space-x-4">
          <button className="px-5 py-3 border border-gray-300 text-gray-700 text-base rounded-full shadow-sm hover:bg-gray-100 focus:outline-none">
            Change Location
          </button>
          <button className="px-5 py-3 border border-gray-300 text-gray-700 text-base rounded-full shadow-sm hover:bg-gray-100 focus:outline-none">
            Filter by Date
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrowseEvents;
