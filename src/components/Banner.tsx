import React from 'react';
import { Gift } from 'lucide-react';

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-[#00C087] to-[#00A877] text-white p-6 rounded-lg mb-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <Gift className="h-12 w-12 mr-4" />
          <div>
            <h2 className="text-2xl font-bold">New User Bonus!</h2>
            <p className="text-white/90">Get 10 USDT when you complete your first trade</p>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-end">
          <p className="text-lg mb-2">Available Discount</p>
          <span className="text-3xl font-bold">10 USDT</span>
          <button className="mt-4 px-6 py-2 bg-white text-[#00C087] rounded-md font-semibold hover:bg-gray-100 transition-colors">
            Login to Claim
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;