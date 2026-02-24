import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="flex">
            <div className="w-5 h-5 rounded-full bg-[#B2F142]"></div>
            <div className="w-5 h-5 rounded-full bg-[#1B3B2E] -ml-2"></div>
          </div>
          <span className="text-[#1B3B2E] font-medium tracking-wide uppercase text-sm">About Us</span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold text-[#1B3B2E] max-w-3xl mx-auto leading-tight">
          Crafting Dream Homes <br /> with Precision and Care
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Images */}
        <div className="relative space-y-6">
          <div className="flex gap-6">
            <div className="w-2/3 h-64 rounded-3xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Architects" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
            <div className="w-1/3 flex flex-col gap-6">
               <div className="h-1/2 border-2 border-gray-200 rounded-t-full border-b-0"></div>
               <div className="h-1/2 border-2 border-gray-200 rounded-b-full border-t-0 relative">
                  <div className="absolute -left-12 -top-12 w-24 h-24 bg-[#1B3B2E] rounded-full flex items-center justify-center text-white z-10">
                     <div className="w-8 h-8 bg-[#B2F142] rounded-full flex items-center justify-center text-[#1B3B2E]">
                        <ArrowRight size={16} className="-rotate-45" />
                     </div>
                  </div>
               </div>
            </div>
          </div>
          <div className="h-72 rounded-3xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Construction" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
          </div>
        </div>

        {/* Right Content */}
        <div>
          <p className="text-gray-500 text-lg mb-10 leading-relaxed">
            With decades of experience in the remodeling industry, our team of expert designers and builders are dedicated to transforming your current house into your forever home. We pride ourselves on transparent communication, exceptional craftsmanship, and delivering projects on time and within budget.
          </p>

          <div className="space-y-8 mb-10">
            {/* Progress Bar 1 */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-bold text-[#1B3B2E]">Kitchen Remodeling</span>
                <span className="font-bold text-[#1B3B2E]">85%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full relative">
                <div className="absolute top-0 left-0 h-full bg-[#1B3B2E] rounded-full w-[85%]"></div>
                <div className="absolute top-1/2 -translate-y-1/2 left-[85%] w-5 h-5 bg-white border-4 border-[#B2F142] rounded-full -ml-2.5"></div>
              </div>
            </div>

            {/* Progress Bar 2 */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-bold text-[#1B3B2E]">Bathroom Renovation</span>
                <span className="font-bold text-[#1B3B2E]">80%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full relative">
                <div className="absolute top-0 left-0 h-full bg-[#1B3B2E] rounded-full w-[80%]"></div>
                <div className="absolute top-1/2 -translate-y-1/2 left-[80%] w-5 h-5 bg-white border-4 border-[#B2F142] rounded-full -ml-2.5"></div>
              </div>
            </div>

            {/* Progress Bar 3 */}
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-bold text-[#1B3B2E]">Interior Design</span>
                <span className="font-bold text-[#1B3B2E]">95%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full relative">
                <div className="absolute top-0 left-0 h-full bg-[#1B3B2E] rounded-full w-[95%]"></div>
                <div className="absolute top-1/2 -translate-y-1/2 left-[95%] w-5 h-5 bg-white border-4 border-[#B2F142] rounded-full -ml-2.5"></div>
              </div>
            </div>
          </div>

          <button className="bg-[#1B3B2E] text-white px-8 py-3.5 rounded-full font-medium hover:bg-[#132a21] transition-colors flex items-center gap-2 group">
            About Us
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-[#B2F142]" />
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-12 border-t border-gray-200">
        <div className="flex items-center gap-4">
          <div>
            <h3 className="text-4xl font-bold text-[#1B3B2E] mb-1">3k+</h3>
            <p className="text-gray-500">Successful Projects</p>
          </div>
          <div className="flex ml-auto">
            <div className="w-4 h-4 rounded-full bg-[#B2F142]"></div>
            <div className="w-4 h-4 rounded-full bg-[#1B3B2E] -ml-2"></div>
          </div>
        </div>
        <div className="flex items-center gap-4 border-l border-gray-200 pl-8">
          <div>
            <h3 className="text-4xl font-bold text-[#1B3B2E] mb-1">200+</h3>
            <p className="text-gray-500">Expert Team</p>
          </div>
          <div className="flex ml-auto">
            <div className="w-4 h-4 rounded-full bg-[#B2F142]"></div>
            <div className="w-4 h-4 rounded-full bg-[#1B3B2E] -ml-2"></div>
          </div>
        </div>
        <div className="flex items-center gap-4 border-l border-gray-200 pl-8">
          <div>
            <h3 className="text-4xl font-bold text-[#1B3B2E] mb-1">350+</h3>
            <p className="text-gray-500">Happy Customers</p>
          </div>
          <div className="flex ml-auto">
            <div className="w-4 h-4 rounded-full bg-[#B2F142]"></div>
            <div className="w-4 h-4 rounded-full bg-[#1B3B2E] -ml-2"></div>
          </div>
        </div>
        <div className="flex items-center gap-4 border-l border-gray-200 pl-8">
          <div>
            <h3 className="text-4xl font-bold text-[#1B3B2E] mb-1">16+</h3>
            <p className="text-gray-500">Years of Experience</p>
          </div>
          <div className="flex ml-auto">
            <div className="w-4 h-4 rounded-full bg-[#B2F142]"></div>
            <div className="w-4 h-4 rounded-full bg-[#1B3B2E] -ml-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
