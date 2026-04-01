import React from 'react';
import { FaTwitter, FaGithub, FaDiscord } from 'react-icons/fa'; // 

const Footer = () => {
  const socialLinks = [
    { icon: <FaTwitter />, link: "#", name: "Twitter" },
    { icon: <FaGithub />, link: "#", name: "GitHub" },
    { icon: <FaDiscord />, link: "#", name: "Discord" }
  ];

  return (
    <footer className="bg-[#02040a] border-t border-gray-800/50 pt-20 pb-10 relative overflow-hidden">
      {/* Top Subtle Gradient Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-purple-500/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Logo & Description */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-linear-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20">
                <span className="text-white font-black text-xl">A</span>
              </div>
              <h2 className="text-3xl font-black tracking-tighter text-white">
                AI<span className="bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Hub</span>
              </h2>
            </div>

            <p className="text-gray-400 text-lg max-w-sm leading-relaxed">
              One subscription. Access to all frontier AI models in a single
              powerful platform. Built for the future of intelligence.
            </p>

            {/* Social Icons (T, G, D fix) */}
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.link} 
                  aria-label={social.name}
                  className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-500 hover:border-purple-500/50 hover:text-purple-400 transition-all duration-300 bg-gray-900/50 hover:bg-gray-800"
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Product */}
            <div>
              <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-[0.2em]">Product</h3>
              <ul className="space-y-4 text-gray-400">
                {['Models', 'Pricing', 'Features', 'API'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-purple-400 transition-colors duration-300 flex items-center group">
                      <span className="w-0 group-hover:w-2 h-1 bg-purple-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-[0.2em]">Company</h3>
              <ul className="space-y-4 text-gray-400">
                {['About Us', 'Blog', 'Careers', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-purple-400 transition-colors duration-300 flex items-center group">
                      <span className="w-0 group-hover:w-2 h-1 bg-purple-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-[0.2em]">Legal</h3>
              <ul className="space-y-4 text-gray-400">
                {['Privacy Policy', 'Terms', 'Cookies'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-purple-400 transition-colors duration-300 flex items-center group">
                      <span className="w-0 group-hover:w-2 h-1 bg-purple-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-gray-900 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-gray-500 font-medium">
            © {new Date().getFullYear()} <span className="text-gray-300">AI Hub</span>. All rights reserved.
          </div>

          <div className="flex items-center gap-2 group cursor-default">
            <span className="text-sm text-gray-500">Made with</span>
            <span className="text-rose-500 group-hover:scale-125 transition-transform duration-300">❤️</span>
            <span className="text-sm text-gray-500">for AI enthusiasts</span>
          </div>
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-600/5 blur-[100px] rounded-full pointer-events-none"></div>
    </footer>
  );
};

export default Footer;