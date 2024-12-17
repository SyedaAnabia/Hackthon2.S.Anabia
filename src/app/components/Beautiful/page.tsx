import Image from "next/image";
import React from "react";

const Beautiful = () => {
  return (
    <div className="bg-[#fcf9f3] py-10">
      {/* Container */}
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-6">
        {/* Text Section */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
            <span className="border-b-4 border-gray-300 pb-1">
              50+ Beautiful rooms inspiration
            </span>
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Our designer already made a lot of beautiful prototypes of rooms
            that inspire you.
          </p>
          <button className="bg-yellow-500 text-white font-bold px-6 py-2 rounded hover:bg-yellow-600 transition">
            Explore More
          </button>
        </div>

        {/* Image Carousel Section */}
        <div className="md:w-1/2 flex gap-4 overflow-hidden">
          {/* Main Image Card */}
          <div className="relative w-full h-[350px] rounded-lg overflow-hidden shadow-md">
            <Image width={1000} height={1000}
              src="/s1.png"
              alt="Room Inspiration"
              className="w-full h-full object-cover"
            />
            {/* Text Overlay */}
            <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded shadow">
              <p className="text-sm text-gray-500">01 &mdash; Bed Room</p>
              <h3 className="font-bold text-gray-800 text-lg">Inner Peace</h3>
            </div>
            {/* Arrow Icon */}
            <div className="absolute bottom-4 right-4">
              <button className="bg-yellow-500 text-white p-2 rounded-full hover:bg-yellow-600 transition">
                &#8594;
              </button>
            </div>
          </div>

          {/* Secondary Image (Right Side) */}
          <div className="hidden md:block w-full h-[350px] rounded-lg overflow-hidden shadow-md">
            <Image width={1000} height={1000}
              src="/s2.png"
              alt="Dining Room"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        <span className="h-3 w-3 bg-yellow-500 rounded-full"></span>
        <span className="h-3 w-3 bg-gray-300 rounded-full"></span>
        <span className="h-3 w-3 bg-gray-300 rounded-full"></span>
        <span className="h-3 w-3 bg-gray-300 rounded-full"></span>
      </div>
    </div>
  );
};

export default Beautiful;