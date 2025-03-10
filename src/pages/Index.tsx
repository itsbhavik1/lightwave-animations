
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChatWindow } from "@/components/ChatWindow";
import CryptoTradingBot from "@/components/CryptoTradingBot";

interface Transaction {
  token: string;
  price: string;
  transactionId: string;
}

const InfoCard = (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="p-6 md:p-8 rounded-2xl bg-white shadow-lg border border-gray-100 w-full max-h-[85%] overflow-hidden"
  >
    <h1 className="text-3xl md:text-4xl mb-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold">
      MoveAgentKit + LangChain.js 🦜🔗 + Next.js
    </h1>
    <ul className="space-y-4">
      <motion.li 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="text-l flex items-start group transition-all"
      >
        <span className="text-2xl group-hover:scale-110 transition-transform">🤝</span>
        <span className="ml-3 text-gray-700">
          This template showcases a simple agent chatbot using{" "}
          <a href="https://www.moveagentkit.xyz/" className="text-indigo-600 hover:text-indigo-800 transition-colors">
            MoveAgentKit
          </a>
          {", "}
          <a href="https://js.langchain.com/" target="_blank" className="text-indigo-600 hover:text-indigo-800 transition-colors">
            LangChain.js
          </a>{" "}
          and the Vercel{" "}
          <a href="https://sdk.vercel.ai/docs" target="_blank" className="text-indigo-600 hover:text-indigo-800 transition-colors">
            AI SDK
          </a>{" "}
          in a{" "}
          <a href="https://nextjs.org/" target="_blank" className="text-indigo-600 hover:text-indigo-800 transition-colors">
            Next.js
          </a>{" "}
          project.
        </span>
      </motion.li>
      <motion.li 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="hidden text-l md:flex items-start group transition-all"
      >
        <span className="text-2xl group-hover:scale-110 transition-transform">💻</span>
        <span className="ml-3 text-gray-700">
          You can find the prompt and model logic for this use-case in <code className="px-2 py-1 bg-gray-100 rounded text-sm">app/api/chat/route.ts</code>.
        </span>
      </motion.li>
      <motion.li 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="hidden text-l md:flex items-start group transition-all"
      >
        <span className="text-2xl group-hover:scale-110 transition-transform">🎨</span>
        <span className="ml-3 text-gray-700">
          The main frontend logic is found in <code className="px-2 py-1 bg-gray-100 rounded text-sm">app/page.tsx</code>.
        </span>
      </motion.li>
      <motion.li 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="text-l flex items-start group transition-all"
      >
        <span className="text-2xl group-hover:scale-110 transition-transform">🦙</span>
        <span className="ml-3 text-gray-700">
          This template is open source - you can see the source code and deploy your own version{" "}
          <a href="#" target="_blank" className="text-indigo-600 hover:text-indigo-800 transition-colors">
            from the GitHub repo (coming soon)
          </a>
          !
        </span>
      </motion.li>
      <motion.li 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
        className="text-l flex items-start group transition-all"
      >
        <span className="text-2xl group-hover:scale-110 transition-transform">👇</span>
        <span className="ml-3 text-gray-700">
          Try asking e.g. <code className="px-2 py-1 bg-gray-100 rounded text-sm">What is my wallet address?</code> below!
        </span>
      </motion.li>
    </ul>
  </motion.div>
);

export default function Page() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6"
    >
      <motion.div 
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-7xl mx-auto space-y-6"
      >
        <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Crypto Trading Dashboard
          </span>
          <motion.span
            animate={{ rotate: [0, 20, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
          >
            🚀
          </motion.span>
        </h1>
        
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="rounded-2xl overflow-hidden shadow-lg bg-white"
        >
          <ChatWindow
            endpoint="api/hello"
            emoji="🤖"
            titleText="Aptos agent"
            placeholder="I'm your friendly Aptos agent! Ask me anything..."
            emptyStateComponent={InfoCard}
          />
        </motion.div>

        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="rounded-2xl overflow-hidden shadow-lg bg-white"
        >
          <CryptoTradingBot />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
