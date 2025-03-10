
import { useState } from "react";
import { motion } from "framer-motion";
import { ChatWindow } from "@/components/ChatWindow";
import CryptoTradingBot from "@/components/CryptoTradingBot";

const InfoCard = (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="flex flex-col h-full p-6 space-y-4"
  >
    <div className="text-center">
      <h3 className="text-xl font-bold text-gray-800 mb-2">Crypto Trading Assistant</h3>
      <p className="text-gray-600">Your AI-powered crypto trading companion</p>
    </div>
    
    <div className="space-y-3">
      <div className="bg-blue-50 rounded-lg p-3">
        <p className="text-sm text-gray-700">Try asking <span className="font-medium">"What's my portfolio value?"</span></p>
      </div>
      <div className="bg-green-50 rounded-lg p-3">
        <p className="text-sm text-gray-700">Try asking <span className="font-medium">"Show my recent trades"</span></p>
      </div>
      <div className="bg-purple-50 rounded-lg p-3">
        <p className="text-sm text-gray-700">Try asking <span className="font-medium">"What are the market trends?"</span></p>
      </div>
    </div>
  </motion.div>
);

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <CryptoTradingBot />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <ChatWindow
              endpoint="/api/chat"
              emoji="🤖"
              titleText="Trading Assistant"
              placeholder="Ask about your portfolio, trades, or market trends..."
              emptyStateComponent={InfoCard}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
