
import React from 'react';

const Banner = () => {
  return (
    <section className="relative min-h-150 flex items-center bg-[#02040a] overflow-hidden py-12 md:py-20">
      {/* 1. Subtle Background Grid Overlay */}
      <div className="absolute inset-0 opacity-15" 
           style={{ backgroundImage: `linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)`, 
           backgroundSize: '45px 45px' }}>
      </div>

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content (Text & Stats) - Mobile Centered, Desktop Left */}
          <div className="space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start order-2 lg:order-1">
            
            {/* Badge - Center on mobile */}
            <div className="inline-flex items-center gap-2 bg-[#161b22] border border-blue-500/20 text-blue-400 text-xs md:text-sm font-medium px-4 py-1.5 rounded-full mx-auto lg:mx-0">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              Powering 48+ AI Models
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight max-w-lg lg:max-w-none">
              One Subscription. <br />
              <span className="bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                All the AIs You Need.
              </span>
            </h1>

            {/* Paragraph */}
            <p className="text-gray-400 text-base md:text-lg max-w-md lg:max-w-xl mx-auto lg:mx-0">
              Access every frontier AI model from a single dashboard. 
              Switch between models instantly, pay once.
            </p>

            {/* Buttons - Mobile Responsive Flex */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto items-center">
              <button className="w-full sm:w-auto bg-white text-black hover:bg-gray-200 transition-all px-8 py-3 rounded-lg font-bold flex items-center justify-center gap-2 text-sm md:text-base">
                Get Unlimited Access <span className="text-lg">→</span>
              </button>
              {/* Added consistent padding/sizing to match left button style */}
              <button className="w-full sm:w-auto bg-transparent border border-gray-700 text-white hover:bg-gray-800 transition-all px-8 py-3 rounded-lg font-bold text-sm md:text-base">
                View Models
              </button>
            </div>

            {/* Stats Section - Mobile Center Align, Desktop Left */}
            <div className="w-full max-w-lg mx-auto lg:mx-0 pt-10 border-t border-gray-800/60 mt-6">
                {/* Mobile Responsive Grid for Stats */}
                <div className="grid grid-cols-3 gap-6 sm:gap-12 text-center lg:text-left">
                  <div className="flex flex-col items-center lg:items-start">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">48+</h3>
                    <p className="text-gray-500 text-xs sm:text-sm mt-1">AI Models</p>
                  </div>
                  <div className="flex flex-col items-center lg:items-start">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">$20</h3>
                    <p className="text-gray-500 text-xs sm:text-sm mt-1">Per Month</p>
                  </div>
                  <div className="flex flex-col items-center lg:items-start">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">1M+</h3>
                    <p className="text-gray-500 text-xs sm:text-sm mt-1">Users</p>
                  </div>
                </div>
            </div>
          </div>

         {/* Right Side: Animated Graphic */}
<div className="relative flex justify-center lg:justify-end items-center order-1 lg:order-2 mt-12 lg:mt-0">
  {/* W-full thakle-o max-width control korle ota navbar button-er niche thakbe */}
  <div className="relative w-72 h-72 md:w-115 md:h-115 lg:w-115 lg:h-115 flex justify-center items-center bg-[#0d1117] rounded-full border border-gray-800/50 shadow-inner overflow-hidden">
    
    {/* Background Glows */}
    <div className="absolute w-60 h-60 bg-blue-700/15 blur-[90px] rounded-full"></div>
    <div className="absolute w-full h-full bg-purple-600/10 blur-[130px] rounded-full"></div>

    {/* Radar Animation & Circles */}
    <div className="absolute inset-0 border border-blue-500/5 rounded-full"></div>
    <div className="absolute inset-[15%] border border-blue-500/5 rounded-full"></div>

    {/* Animated Dots */}
    <div className="absolute inset-0 animate-[spin_12s_linear_infinite]">
      <div className="absolute top-[8%] left-1/2 w-2.5 h-2.5 bg-red-500 rounded-full shadow-[0_0_12px_4px_rgba(239,68,68,0.5)]"></div>
    </div>
    
    <div className="absolute inset-0 animate-[spin_18s_linear_infinite_reverse]">
      <div className="absolute bottom-[20%] left-[15%] w-2.5 h-2.5 bg-blue-500 rounded-full shadow-[0_0_12px_4px_rgba(59,130,246,0.5)]"></div>
    </div>

    {/* Center Robot */}
    <div className="relative z-10 p-4 flex justify-center items-center">
       <img src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png" 
            alt="Robot" className="w-16 h-16 md:w-30 md:h-30 object-contain" />
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default Banner;