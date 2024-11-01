import React, { useState } from 'react';
import { ArrowRightLeft } from 'lucide-react';

export default function GetInsured() {
  const [isMinting, setIsMinting] = useState(true);

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white">
      <div className="flex justify-between items-center mb-2">
        <div>
          <h2 className="text-xl font-semibold">Insurance Portal</h2>
          <p className="text-sm text-purple-200 italic mt-1">
            "esUSDe" is an insured version of Ethena's sUSDe. You sacrifice some yield you get on Ethena to get insurance on ETH
          </p>
        </div>
        <button
          onClick={() => setIsMinting(!isMinting)}
          className="flex items-center space-x-2 text-purple-300 hover:text-purple-100"
        >
          <ArrowRightLeft className="w-4 h-4" />
          <span>Switch to {isMinting ? 'Redeem' : 'Mint'}</span>
        </button>
      </div>

      <div className="space-y-6 mt-6">
        <div className="space-y-2">
          <label className="block text-sm text-purple-200">Amount</label>
          <div className="relative">
            <input
              type="number"
              placeholder="0.0"
              className="w-full bg-white/5 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-purple-300 focus:outline-none focus:border-purple-500"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-purple-300">
              {isMinting ? 'sUSDe' : 'esUSDe'}
            </span>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-800/20 to-pink-800/20 rounded-lg p-4">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-purple-200">You will receive</span>
            <span className="text-white">0.0 {isMinting ? 'esUSDe' : 'sUSDe'}</span>
          </div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-purple-200">Exchange rate</span>
            <span className="text-white">1 sUSDe = 1 esUSDe</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-purple-200">Current Collateralization Level</span>
            <span className="text-white">75%</span>
          </div>
        </div>

        <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 py-4 rounded-lg font-medium text-white transition-all">
          {isMinting ? 'Mint esUSDe' : 'Redeem esUSDe'}
        </button>

        <p className="text-sm text-purple-200 italic text-center">
          Disclaimer: esUSDe does not guarantee 100% collateralization at all times, that depends on the market behavior. Please check "Current collateralization level"
        </p>
      </div>
    </div>
  );
}