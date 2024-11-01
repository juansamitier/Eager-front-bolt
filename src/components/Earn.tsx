import React, { useState } from 'react';
import { ArrowRightLeft, TrendingUp } from 'lucide-react';

export default function Earn() {
  const [isDepositing, setIsDepositing] = useState(true);

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Yield Portal</h2>
        <button
          onClick={() => setIsDepositing(!isDepositing)}
          className="flex items-center space-x-2 text-purple-300 hover:text-purple-100"
        >
          <ArrowRightLeft className="w-4 h-4" />
          <span>Switch to {isDepositing ? 'Withdraw' : 'Deposit'}</span>
        </button>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-800/20 to-pink-800/20 rounded-lg mb-6">
          <div>
            <p className="text-purple-200 text-sm">Current APY</p>
            <p className="text-2xl font-bold text-white">12.5%</p>
          </div>
          <TrendingUp className="w-8 h-8 text-purple-400" />
        </div>

        <div className="space-y-2">
          <label className="block text-sm text-purple-200">Amount</label>
          <div className="relative">
            <input
              type="number"
              placeholder="0.0"
              className="w-full bg-white/5 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-purple-300 focus:outline-none focus:border-purple-500"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-purple-300">eETH</span>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-800/20 to-pink-800/20 rounded-lg p-4">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-purple-200">Your balance</span>
            <span className="text-white">0.0 eETH</span>
          </div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-purple-200">Current Collateralization Level</span>
            <span className="text-white">75%</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-purple-200">Estimated earnings</span>
            <span className="text-white">0.0 USD / day</span>
          </div>
        </div>

        <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 py-4 rounded-lg font-medium text-white transition-all">
          {isDepositing ? 'Deposit eETH' : 'Withdraw eETH'}
        </button>
      </div>
    </div>
  );
}