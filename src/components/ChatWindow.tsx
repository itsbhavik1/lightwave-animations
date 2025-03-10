
import React, { useState } from 'react';
import { Send, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

interface ChatWindowProps {
  endpoint: string;
  emoji: string;
  titleText: string;
  placeholder: string;
  emptyStateComponent: React.ReactNode;
}

export const ChatWindow: React.FC<ChatWindowProps> = ({
  endpoint,
  emoji,
  titleText,
  placeholder,
  emptyStateComponent
}) => {
  const [inputValue, setInputValue] = useState('');
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg border border-gray-100 p-6"
    >
      <div className="flex items-center gap-3 mb-6">
        <motion.div 
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center text-xl"
        >
          {emoji}
        </motion.div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">{titleText}</h2>
          <p className="text-sm text-gray-500">Ask me anything about crypto</p>
        </div>
      </div>
      
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm mb-6 p-5 min-h-[320px] overflow-auto">
        {emptyStateComponent}
      </div>
      
      <div className="relative">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={placeholder}
          className="w-full p-4 pr-12 border border-gray-200 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
        >
          <Send className="h-4 w-4" />
        </motion.button>
      </div>
    </motion.div>
  );
};
