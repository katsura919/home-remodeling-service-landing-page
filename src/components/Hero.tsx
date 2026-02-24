import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background decorative dots */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 opacity-20">
        <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" fill="#1B3B2E" />
          </pattern>
          <rect x="0" y="0" width="200" height="200" fill="url(#dots)" />
        </svg>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="flex">
              <div className="w-6 h-6 rounded-full bg-[#B2F142]"></div>
              <div className="w-6 h-6 rounded-full bg-[#1B3B2E] -ml-2"></div>
            </div>
            <span className="text-[#1B3B2E] font-medium tracking-wide uppercase text-sm">Transform Your Home With Us</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-[#1B3B2E] leading-[1.1] mb-6">
            Elevating Your <br />
            Living Space <br />
            with Expertise
          </h1>
          
          <p className="text-gray-500 text-lg mb-8 max-w-lg leading-relaxed">
            We bring your vision to life with premium remodeling services. From concept to completion, we ensure quality craftsmanship and stunning results for your dream home.
          </p>
          
          <div className="flex flex-wrap items-center gap-6">
            <button className="bg-[#1B3B2E] text-white px-8 py-4 rounded-full font-medium hover:bg-[#132a21] transition-colors flex items-center gap-2 group">
              Explore More
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="#" className="text-[#1B3B2E] font-medium underline underline-offset-4 hover:text-[#B2F142] transition-colors">
              View All Services
            </a>
          </div>
        </motion.div>

        {/* Right Images */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-[600px] w-full"
        >
          {/* Top Right Image */}
          <div className="absolute top-0 right-0 w-[60%] h-[45%] rounded-[2rem] rounded-tr-[4rem] overflow-hidden shadow-xl">
            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Modern Home Exterior" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
          </div>
          
          {/* Bottom Left Image */}
          <div className="absolute bottom-10 left-0 w-[55%] h-[45%] rounded-[2rem] rounded-bl-[4rem] overflow-hidden shadow-xl z-10">
            <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Kitchen Remodel" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
          </div>

          {/* Bottom Right Image */}
          <div className="absolute bottom-0 right-4 w-[45%] h-[40%] rounded-[2rem] rounded-br-[4rem] overflow-hidden shadow-xl">
            <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Living Room" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
          </div>

          {/* Hire Us Badge */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 z-20">
            <div className="relative w-32 h-32 bg-[#1B3B2E] rounded-full flex items-center justify-center text-white animate-[spin_10s_linear_infinite]">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path id="curve" d="M 50 50 m -35 0 a 35 35 0 1 1 70 0 a 35 35 0 1 1 -70 0" fill="transparent" />
                <text className="text-[12px] font-bold tracking-widest uppercase" fill="currentColor">
                  <textPath href="#curve" startOffset="0%">
                    • Hire Us • Hire Us • Hire Us
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 bg-[#B2F142] rounded-full flex items-center justify-center text-[#1B3B2E]">
                  <ArrowRight size={20} className="-rotate-45" />
                </div>
              </div>
            </div>
          </div>

          {/* Sparkle Decoration */}
          <div className="absolute bottom-20 right-0 text-[#B2F142]">
            <Sparkles size={48} fill="currentColor" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
