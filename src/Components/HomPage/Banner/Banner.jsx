import BannerImage from "../../../assets/banner.png";

const Banner = () => {
  return (
    
    <section className="relative mt-4 flex  items-center  overflow-hidden  ">
     
      <div className="container mx-auto px-6 md:px-10 lg:px-12 w-full relative  rounded-xl bg-[#0b4a0b35] ">
        
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          
          <div className="space-y-6 order-2 lg:order-1 text-left">
            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-red-500 text-xs md:text-sm font-bold px-4 py-1.5 rounded-full w-fit">
              ✨ Frontier AI Models
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1]">
              <span className="text-red-600">One Subscription.</span>
              <br />
              <span className="bg-linear-to-r from-red-500 via-orange-400 to-amber-500 bg-clip-text text-transparent">
                All the AIs You Need
              </span>
            </h1>

            <p className="text-base md:text-lg text-slate-600 max-w-lg">
              Experience the full spectrum of frontier intelligence — all the most
              advanced AI models, unified under a single, powerful subscription.
            </p>

            <div className="pt-4">
              <button className="bg-red-600 hover:bg-red-700 text-white transition-all px-10 py-4 rounded-xl font-bold text-lg shadow-lg shadow-red-200 flex items-center gap-3 group">
                Get Unlimited Access
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>

            {/* Sub-features: Responsive Grid */}
            <div className="flex flex-wrap gap-6 text-sm font-semibold text-slate-500 pt-6">
              <span>✓ 50+ Frontier Models</span>
              <span>✓ No Usage Limits</span>
              <span>✓ Cancel Anytime</span>
            </div>
          </div>

          {/* Right Image: Mobile' */}
          <div className="relative pr-0 mr-0 flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-80 md:max-w-105 lg:max-w-full">
              {/* Image with Glow & Pulse Effect */}
              <img
                className="w-full   md:h-160 object-contain  "
                src={BannerImage}
                alt="AI Models Banner"
              />
              {/* Background soft glow to make it look premium */}
              <div className="absolute -z-10 inset-0 bg-red-400/10 blur-[80px] rounded-full"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;