
import { useState } from "react";
import { motion } from "framer-motion";
import { ChatWindow } from "@/components/ChatWindow";
import CryptoTradingBot from "@/components/CryptoTradingBot";
import { Sparkles, Moon, Sun, Rocket } from "lucide-react";

const InfoCard = (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="h-full flex flex-col"
  >
    <div className="text-center mb-4">
      <motion.div 
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ 
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 5
        }}
        className="inline-block mb-2"
      >
        <Sparkles className="h-12 w-12 text-blue-500" />
      </motion.div>
      <h3 className="text-lg font-bold text-gray-800 mb-1">AI-Powered Assistant</h3>
      <p className="text-gray-600 text-sm">Your crypto trading companion</p>
    </div>
    
    <div className="space-y-3 text-left">
      <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
        <p className="text-sm text-gray-700">Try asking <span className="font-medium">"What is my wallet address?"</span></p>
      </div>
      <div className="bg-green-50 rounded-lg p-3 border border-green-100">
        <p className="text-sm text-gray-700">Try asking <span className="font-medium">"Show me my portfolio"</span></p>
      </div>
      <div className="bg-purple-50 rounded-lg p-3 border border-purple-100">
        <p className="text-sm text-gray-700">Try asking <span className="font-medium">"What are the current market trends?"</span></p>
      </div>
    </div>
  </motion.div>
);

export default function Page() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  
  return (
    <div className={`min-h-screen bg-gradient-to-br ${
      theme === 'light' 
        ? 'from-gray-50 to-gray-100' 
        : 'from-gray-800 to-gray-900'
    } transition-colors duration-300`}>
      <div className="container mx-auto p-6">
        <div className="flex justify-between items-center mb-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <Rocket className={`h-6 w-6 ${theme === 'light' ? 'text-blue-500' : 'text-blue-400'}`} />
            <h1 className={`text-2xl font-bold ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
              CryptoTrade
            </h1>
          </motion.div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className={`p-2 rounded-full ${
              theme === 'light' 
                ? 'bg-gray-200 text-gray-800' 
                : 'bg-gray-700 text-gray-200'
            }`}
          >
            {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </motion.button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ChatWindow
              endpoint="api/hello"
              emoji="🤖"
              titleText="Trading Assistant"
              placeholder="Ask about crypto, trading, or your portfolio..."
              emptyStateComponent={InfoCard}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <CryptoTradingBot />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
