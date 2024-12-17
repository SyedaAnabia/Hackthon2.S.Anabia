import React from 'react';

const Home = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/main image.png')" }}>
      
      <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
        <div className="bg-orange-100 ml-96 bg-opacity-90 p-8 rounded-lg max-w-md text-center shadow-lg">
          <p className="text-sm uppercase font-medium text-gray-500">New Arrival</p>
          <h1 className="text-2xl font-bold text-gray-800 mt-2">Discover Our New Collection</h1>
          <p className="text-gray-600 mt-4 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="mt-6 bg-yellow-600 text-white font-medium py-2 px-4 rounded hover:bg-yellow-500 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home
















