
import React from 'react';

const CryptoTradingBot: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Crypto Trading Bot</h2>
      <div className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-600">Trading bot status: Active</p>
        </div>
      </div>
    </div>
  );
};

export default CryptoTradingBot;
