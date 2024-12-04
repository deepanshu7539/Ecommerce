import React from "react";

const Crouser= () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white py-10 px-5">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold mb-4">
          Mega Deals on Our Best Products!
        </h1>
        <p className="text-lg mb-6">
          Grab up to <span className="font-bold">50% off</span> on selected items. Limited time offer!
        </p>
        <a
          href="/deals"
          className="bg-white text-purple-600 py-3 px-8 rounded-full font-semibold hover:bg-gray-100 transition duration-300 ease-in-out"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default Crouser;
