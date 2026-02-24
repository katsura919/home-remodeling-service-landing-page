import { ArrowRight } from 'lucide-react';

export default function Services() {
  return (
    <section className="py-24 bg-[#1B3B2E] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                <div className="w-5 h-5 rounded-full bg-[#B2F142]"></div>
                <div className="w-5 h-5 rounded-full bg-white -ml-2"></div>
              </div>
              <span className="text-white font-medium tracking-wide uppercase text-sm">Our Services</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white max-w-xl leading-tight">
              Revitalize Your Home <br /> with Our Expertise
            </h2>
          </div>
          <button className="bg-white text-[#1B3B2E] px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors flex items-center gap-2 group whitespace-nowrap">
            View All Services
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-[#244A3A] rounded-[2rem] p-4 flex flex-col group hover:-translate-y-2 transition-transform duration-300">
            <div className="h-64 rounded-3xl overflow-hidden mb-6">
              <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Kitchen Remodeling" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
            </div>
            <div className="px-4 pb-4 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-4">Kitchen Remodeling</h3>
              <p className="text-gray-300 mb-8 line-clamp-3">
                Transform your culinary space with custom cabinets, modern countertops, and state-of-the-art appliances tailored to your lifestyle.
              </p>
              <div className="mt-auto border-t border-white/10 pt-6">
                <a href="#" className="text-[#B2F142] font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn more <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 - Highlighted */}
          <div className="bg-[#B2F142] rounded-[2rem] p-4 flex flex-col group hover:-translate-y-2 transition-transform duration-300">
            <div className="px-4 pt-4 pb-6 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-[#1B3B2E] mb-4">Bathroom Renovation</h3>
              <p className="text-[#1B3B2E]/80 mb-8 line-clamp-3">
                Create a spa-like oasis with our complete bathroom remodeling services, featuring premium fixtures, elegant tiling, and smart layouts.
              </p>
              <div className="mt-auto border-t border-[#1B3B2E]/10 pt-6 mb-6">
                <a href="#" className="text-[#1B3B2E] font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn more <ArrowRight size={18} />
                </a>
              </div>
            </div>
            <div className="h-64 rounded-3xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Bathroom Renovation" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#244A3A] rounded-[2rem] p-4 flex flex-col group hover:-translate-y-2 transition-transform duration-300">
            <div className="h-64 rounded-3xl overflow-hidden mb-6">
              <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Full Home Renovation" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
            </div>
            <div className="px-4 pb-4 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-4">Full Home Renovation</h3>
              <p className="text-gray-300 mb-8 line-clamp-3">
                Breathe new life into your entire property with our comprehensive whole-house remodeling solutions, ensuring cohesive design throughout.
              </p>
              <div className="mt-auto border-t border-white/10 pt-6">
                <a href="#" className="text-[#B2F142] font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn more <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
