import React, { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#02040a]/80 backdrop-blur-md border-b border-gray-800/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* 1. Logo Section */}
        <div className="flex items-center gap-2">
          <div className="text-2xl font-black text-white tracking-tighter flex items-center">
            AI<span className="bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Hub</span>
          </div>
        </div>

        {/* 2. Desktop Menu (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-10">
          {['Home', 'Models', 'Pricing', 'Docs'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} 
               className="text-gray-400 hover:text-white text-sm font-medium transition-colors">
              {item}
            </a>
          ))}
        </div>

        {/* 3. Action Button (Desktop) + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a className="hidden md:block border border-gray-700 hover:border-white text-white px-6 py-2 rounded-lg text-sm font-bold transition-all" href="#get-started">
            Get Started →
          </a>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-400 hover:text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* 4. Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0d1117] border-b border-gray-800 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4">
          {['Home', 'Models', 'Pricing', 'Docs'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} 
               className="block text-gray-400 hover:text-white text-lg font-medium">
              {item}
            </a>
          ))}
          <a className="block w-full text-center bg-white text-black px-6 py-3 rounded-lg font-bold" href="#get-started">
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;