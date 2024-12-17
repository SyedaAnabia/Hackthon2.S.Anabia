import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-8">
        <hr />
      <div className="container mt-24 mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          <h1 className="font-bold text-xl mb-4">Funiro.</h1>
          <p className="text-gray-600">
            400 University Drive Suite 200 Coral Gables, <br /> FL 33134 USA
          </p>
        </div>

        {/* Center Links */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h2 className="font-bold mb-2">Links</h2>
            <ul className="space-y-1">
              <li>Home</li>
              <li>Shop</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-2">Help</h2>
            <ul className="space-y-1">
              <li>Payment Options</li>
              <li>Returns</li>
              <li>Privacy Policies</li>
            </ul>
          </div>
        </div>

        {/* Right Newsletter Section */}
        <div>
          <h2 className="font-bold mb-2">Newsletter</h2>
          <div className="flex items-center border-b border-black pb-1">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="w-full outline-none text-sm"
            />
            <button className="text-sm font-bold ml-2">SUBSCRIBE</button>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-8 text-center text-sm text-gray-500">
        © 2023 funiro. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;