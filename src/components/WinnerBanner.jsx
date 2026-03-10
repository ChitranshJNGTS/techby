import React from "react";
import { Link } from "react-router-dom";
import winnerImage from "../assets/logo/become winner.png";

const WinnerBanner = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="bg-gradient-to-r from-green-50 via-white to-green-50 shadow-2xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 items-center gap-6">

        {/* Left Image */}
        <div className="h-72 md:h-full">
          <img
            src={winnerImage}
            alt="Winner"
            className="w-full h-full object-cover rounded-l-2xl"
          />
        </div>

        {/* Right Content */}
        <div className="p-8 flex flex-col justify-center text-center md:text-left space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Come & Check the Winners!
          </h2>

          <p className="text-gray-700 text-lg">
            On <span className="font-semibold text-green-600">22nd April</span>, 
            we will announce the lucky winners! 🎉
          </p>

          <p className="text-green-700 font-semibold text-lg">
            Get a chance to win <span className="underline">iPhone, PS Console, or other tech gadgets</span>!
          </p>

          <p className="text-gray-600">
            <span className="font-semibold">Participation Rules:</span> 
            Simply buy anything from our website and receive a 
            <span className="text-green-600 font-semibold"> Prize Pool Code</span>. 
            On 22nd April, come back and see if you're a winner!
          </p>

          <Link
            to="/winner-check"
            className="self-center md:self-start px-8 py-3 bg-green-600 text-white font-semibold rounded-full shadow-lg hover:bg-green-700 transition transform hover:scale-105 active:scale-95"
          >
            Check Now
          </Link>

          <p className="text-sm text-gray-500 mt-2">
            Terms & conditions apply. One purchase = one prize code.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WinnerBanner;