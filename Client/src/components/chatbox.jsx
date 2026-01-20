import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const ChatBox = () => {
  const [messages, setMessages] = useState([
    { role: 'ai', content: "I'm Limerx AI. I'm here to support you through your heartbreak or limerence journey. What's happening in your world today?" }
  ]);
  const [input, setInput] = useState('');
  const [chatCount, setChatCount] = useState(0);
  const chatEndRef = useRef(null);
  const navigate = useNavigate();

  const MAX_FREE_CHATS = 7;
  const isLoggedIn = false; 

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const savedCount = localStorage.getItem('limerx_guest_count') || 0;
    setChatCount(parseInt(savedCount));
    scrollToBottom();
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!isLoggedIn && chatCount >= MAX_FREE_CHATS) {
      alert("Guest limit reached. Please sign up to continue.");
      navigate('/signup');
      return;
    }
    if (!input.trim()) return;

    const newMsgs = [...messages, { role: 'user', content: input }];
    setMessages(newMsgs);
    setInput('');
    setChatCount(prev => {
      const updated = prev + 1;
      localStorage.setItem('limerx_guest_count', updated);
      return updated;
    });

    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'ai', content: "I hear you. Processing these feelings takes time, and you're doing great just by speaking them out loud." }]);
    }, 8000); // Slowed down slightly for "thinking" feel
  };

  return (
    <div className="flex flex-col h-full w-full max-w-4xl mx-auto">
      {/* Scrollable Message Area */}
      <div className="flex-1 overflow-y-auto px-4 md:px-0 py-10 space-y-8 scrollbar-hide">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2`}>
            <div className={`max-w-[85%] md:max-w-[70%] p-5 rounded-3xl text-[15px] leading-relaxed ${
              m.role === 'user' 
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-100' 
                : 'bg-white border border-slate-100 text-slate-700 shadow-sm'
            }`}>
              {m.content}
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* Fixed Bottom Input Area (Gemini Style) */}
      <div className="pb-8 pt-2 bg-slate-50">
        {!isLoggedIn && (
          <div className="mb-4 text-center">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Guest Session: {chatCount}/{MAX_FREE_CHATS}
            </span>
          </div>
        )}
        
        <form onSubmit={handleSend} className="relative group">
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask Limerx anything..."
            className="w-full p-5 pr-16 bg-white border border-slate-200 rounded-3xl shadow-xl focus:ring-2 focus:ring-purple-400 outline-none transition-all text-slate-700"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-pink-500 text-white p-3 rounded-2xl hover:bg-pink-600 transition-all active:scale-90">
            <svg className="w-5 h-5 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 19l9-7-9-7V19z" />
            </svg>
          </button>
        </form>
        <p className="text-center text-[10px] text-slate-400 mt-4">
          Limerx AI can make mistakes. Consider checking important info.
        </p>
      </div>
    </div>
  );
};

export default ChatBox;