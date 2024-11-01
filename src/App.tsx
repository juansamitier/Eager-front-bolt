import React, { useState } from 'react';
import { Wallet, Coins, Shield, TrendingUp, Calculator, HelpCircle } from 'lucide-react';
import Header from './components/Header';
import GetInsured from './components/GetInsured';
import Earn from './components/Earn';
import RewardCalculator from './components/RewardCalculator';
import HowItWorks from './components/HowItWorks';

function App() {
  const [activeTab, setActiveTab] = useState('insured');

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <Header setActiveTab={setActiveTab} />
      
      <main className="container mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('insured')}
            className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === 'insured'
                ? 'bg-white text-purple-900 shadow-lg'
                : 'bg-purple-800/30 text-white hover:bg-purple-800/50'
            }`}
          >
            <Shield className="w-5 h-5 mr-2" />
            Get Insured
          </button>
          <button
            onClick={() => setActiveTab('earn')}
            className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === 'earn'
                ? 'bg-white text-purple-900 shadow-lg'
                : 'bg-purple-800/30 text-white hover:bg-purple-800/50'
            }`}
          >
            <TrendingUp className="w-5 h-5 mr-2" />
            Earn
          </button>
          <button
            onClick={() => setActiveTab('calculator')}
            className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === 'calculator'
                ? 'bg-white text-purple-900 shadow-lg'
                : 'bg-purple-800/30 text-white hover:bg-purple-800/50'
            }`}
          >
            <Calculator className="w-5 h-5 mr-2" />
            Calculator
          </button>
          <button
            onClick={() => setActiveTab('how-it-works')}
            className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === 'how-it-works'
                ? 'bg-white text-purple-900 shadow-lg'
                : 'bg-purple-800/30 text-white hover:bg-purple-800/50'
            }`}
          >
            <HelpCircle className="w-5 h-5 mr-2" />
            How It Works
          </button>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          {activeTab === 'insured' && <GetInsured />}
          {activeTab === 'earn' && <Earn />}
          {activeTab === 'calculator' && <RewardCalculator />}
          {activeTab === 'how-it-works' && <HowItWorks />}
        </div>
      </main>
    </div>
  );
}

export default App;