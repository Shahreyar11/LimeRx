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

          {/* Navigation Links - Hidden on Mobile, Flex on Desktop */}
          <div className="hidden lg:flex items-center gap-8 text-slate-600 font-medium">
            <a href="#info" className="hover:text-purple-600 transition-colors">Info</a>
            <a href="#blog" className="hover:text-purple-600 transition-colors">Blog</a>
            <a href="#contacts" className="hover:text-purple-600 transition-colors">Contacts</a>
          </div>
        </div>

        {/* Right Section: Auth Links */}
        <div className="flex items-center gap-6 font-medium">
          <a href="/login" className="text-slate-600 hover:text-purple-600 transition-colors">
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

      {/* Mobile Menu Dropdown */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden mt-4 pb-4 border-t border-slate-100`}>
        <div className="flex flex-col gap-4 pt-4 text-slate-600">
          <a href="#info" className="px-2 hover:text-purple-600">Info</a>
          <a href="#blog" className="px-2 hover:text-purple-600">Blog</a>
          <a href="#contacts" className="px-2 hover:text-purple-600">Contacts</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;