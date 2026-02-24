import { Facebook, Twitter, Instagram, Youtube, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top CTA */}
        <div className="flex flex-col md:flex-row justify-between items-center pb-16 border-b border-gray-200 gap-6">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B3B2E]">Let's Build Your Dream Home</h2>
          <button className="bg-[#1B3B2E] text-white px-8 py-4 rounded-full font-medium hover:bg-[#132a21] transition-colors whitespace-nowrap">
            Contact Us
          </button>
        </div>

        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Social */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#B2F142] rounded-full flex items-center justify-center relative overflow-hidden">
                 <div className="absolute w-4 h-8 bg-[#1B3B2E] left-0"></div>
              </div>
              <span className="font-bold text-xl text-[#1B3B2E]">RemodelPro<span className="text-[#B2F142]">.</span></span>
            </div>
            <p className="text-gray-500 leading-relaxed">
              Transforming houses into dream homes with expert craftsmanship, innovative design, and unparalleled dedication to quality.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-[#B2F142] flex items-center justify-center text-[#1B3B2E] hover:bg-[#1B3B2E] hover:text-[#B2F142] transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#B2F142] flex items-center justify-center text-[#1B3B2E] hover:bg-[#1B3B2E] hover:text-[#B2F142] transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#B2F142] flex items-center justify-center text-[#1B3B2E] hover:bg-[#1B3B2E] hover:text-[#B2F142] transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#B2F142] flex items-center justify-center text-[#1B3B2E] hover:bg-[#1B3B2E] hover:text-[#B2F142] transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-[#1B3B2E] text-lg mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-[#1B3B2E] transition-colors">Our Team</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#1B3B2E] transition-colors">Career</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#1B3B2E] transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#1B3B2E] transition-colors">Testimonial</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#1B3B2E] transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-[#1B3B2E] text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="text-gray-500">(555) 123-4567</li>
              <li className="text-gray-500">hello@remodelpro.com</li>
              <li className="text-gray-500">1234 Renovation Ave,<br />Suite 100, Design City, DC 12345</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-[#1B3B2E] text-lg mb-6">Get the latest information</h4>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-gray-50 border border-gray-200 rounded-l-full px-6 py-3 w-full focus:outline-none focus:border-[#1B3B2E] focus:ring-1 focus:ring-[#1B3B2E]"
              />
              <button 
                type="submit" 
                className="bg-[#1B3B2E] text-white px-6 py-3 rounded-r-full hover:bg-[#132a21] transition-colors flex items-center justify-center"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#1B3B2E] py-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 20px)', backgroundSize: '28px 28px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-300 text-sm">
            Copyright © 2026 RemodelPro Company. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">User Terms & Conditions</a>
            <span className="text-gray-500">|</span>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
