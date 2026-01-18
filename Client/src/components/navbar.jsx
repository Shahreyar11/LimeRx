import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white px-6 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left Section: Mobile Menu Toggle & Links */}
        <div className="flex items-center gap-8">
          {/* Hamburger Icon for Mobile */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-600 lg:hidden hover:text-purple-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Navigation Links - Updated Labels */}
          <div className="hidden lg:flex items-center gap-8 text-slate-600 font-medium">
            <a href="/" className="hover:text-purple-600 transition-colors">Home</a>
            <a href="#about" className="hover:text-purple-600 transition-colors">About Us</a>
            <a href="#blog" className="hover:text-purple-600 transition-colors">Blog</a>
          </div>
        </div>

        {/* Right Section: LimerxAI & Auth Links */}
        <div className="flex items-center gap-6 font-medium">
          {/* Main Feature Highlight Button */}
          <a 
            href="/ai-ask" 
            className="bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition-all shadow-md active:scale-95 flex items-center gap-2"
          >
            <span className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></span>
            LimerxAI
          </a>

          <a href="/login" className="text-slate-600 hover:text-purple-600 transition-colors hidden sm:block">
            Log in
          </a>
          <a 
            href="/signup" 
            className="text-pink-500 border border-pink-500 px-5 py-2 rounded-full hover:bg-pink-50 transition-all active:scale-95"
          >
            Sign up
          </a>
        </div>
      </div>

      {/* Mobile Menu Dropdown - Updated Labels */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden mt-4 pb-4 border-t border-slate-100`}>
        <div className="flex flex-col gap-4 pt-4 text-slate-600 font-medium">
          <a href="/" className="px-2 hover:text-purple-600">Home</a>
          <a href="#about" className="px-2 hover:text-purple-600">About Us</a>
          <a href="#blog" className="px-2 hover:text-purple-600">Blog</a>
          <a href="/login" className="px-2 hover:text-purple-600 sm:hidden">Log in</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;