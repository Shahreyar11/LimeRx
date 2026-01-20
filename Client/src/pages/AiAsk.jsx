import React from 'react';
import ChatBox from '../components/chatbox.jsx';

const AiAsk = () => {
  return (
    // "h-screen" makes it take the full height of the browser
    <div className="h-screen bg-slate-50 flex flex-col">
      {/* Minimal Header */}
      <header className="px-6 py-4 flex justify-between items-center bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-tr from-purple-600 to-pink-500 rounded-lg shadow-lg shadow-purple-200"></div>
          <span className="font-bold text-slate-800 tracking-tight">Limerx <span className="text-purple-600">AI</span></span>
        </div>
        <div className="text-[11px] font-bold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
          SAFE SPACE ACTIVE
        </div>
      </header>

      {/* Main Chat Content - Takes up remaining space */}
      <main className="flex-1 overflow-hidden flex flex-col">
        <ChatBox />
      </main>
    </div>
  );
};

export default AiAsk;