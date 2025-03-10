
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChatWindow } from "@/components/ChatWindow";
import CryptoTradingBot from "@/components/CryptoTradingBot";
import { Sparkles, Moon, Sun, Rocket } from "lucide-react";

const InfoCard = (
  <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
    <h1 className="text-3xl md:text-4xl mb-4">MoveAgentKit + LangChain.js 🦜🔗 + Next.js</h1>
    <ul>
      <li className="text-l">
        🤝
        <span className="ml-2">
          This template showcases a simple agent chatbot using{" "}
          <a href="https://www.moveagentkit.xyz/">MoveAgentKit</a>
          {", "}
          <a href="https://js.langchain.com/" target="_blank">
            LangChain.js
          </a>{" "}
          and the Vercel{" "}
          <a href="https://sdk.vercel.ai/docs" target="_blank">
            AI SDK
          </a>{" "}
          in a{" "}
          <a href="https://nextjs.org/" target="_blank">
            Next.js
          </a>{" "}
          project.
        </span>
      </li>
      <li className="hidden text-l md:block">
        💻
        <span className="ml-2">
          You can find the prompt and model logic for this use-case in <code>app/api/chat/route.ts</code>.
        </span>
      </li>
      <li className="hidden text-l md:block">
        🎨
        <span className="ml-2">
          The main frontend logic is found in <code>app/page.tsx</code>.
        </span>
      </li>
      <li className="text-l">
        🦙
        <span className="ml-2">
          This template is open source - you can see the source code and deploy your own version{" "}
          <a href="#" target="_blank">
            from the GitHub repo (coming soon)
          </a>
          !
        </span>
      </li>
      <li className="text-l">
        👇
        <span className="ml-2">
          Try asking e.g. <code>What is my wallet address?</code> below!
        </span>
      </li>
    </ul>
  </div>
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
