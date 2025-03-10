
import React from 'react';

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
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">{emoji}</span>
        <h2 className="text-xl font-semibold">{titleText}</h2>
      </div>
      <div className="mb-4">
        {emptyStateComponent}
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder={placeholder}
          className="w-full p-4 border rounded-lg bg-gray-50"
        />
      </div>
    </div>
  );
};
