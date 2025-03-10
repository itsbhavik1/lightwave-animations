
import React, { useState } from 'react';
import { ArrowUpCircle, ArrowDownCircle, Activity, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const CryptoTradingBot: React.FC = () => {
  const [isActive, setIsActive] = useState(true);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg border border-gray-100 p-6"
    >
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <Activity className="h-6 w-6 text-blue-500" />
          <h2 className="text-xl font-bold text-gray-800">Trading Bot</h2>
        </div>
        <div className="flex items-center">
          <span 
            className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 ${
              isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}
          >
            {isActive ? (
              <>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Active
              </>
            ) : (
              <>
                <span className="h-2 w-2 rounded-full bg-red-500"></span>
                Inactive
              </>
            )}
          </span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
        >
          <div className="flex justify-between items-center">
            <span className="text-gray-500 text-sm">Last 24h Performance</span>
            <ArrowUpCircle className="h-5 w-5 text-green-500" />
          </div>
          <p className="text-2xl font-bold text-gray-800 mt-2">+2.34%</p>
        </motion.div>
        
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
        >
          <div className="flex justify-between items-center">
            <span className="text-gray-500 text-sm">Total Profit</span>
            <ArrowUpCircle className="h-5 w-5 text-green-500" />
          </div>
          <p className="text-2xl font-bold text-gray-800 mt-2">+$1,245.89</p>
        </motion.div>
      </div>
      
      <motion.div 
        whileHover={{ scale: 1.01 }}
        className="bg-blue-50 p-4 rounded-lg border border-blue-100"
      >
        <div className="flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-blue-500 mt-0.5" />
          <div>
            <h3 className="font-medium text-blue-700">Bot Status</h3>
            <p className="text-blue-600 text-sm mt-1">
              Your trading bot is currently analyzing market patterns and making trades based on your parameters.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CryptoTradingBot;
