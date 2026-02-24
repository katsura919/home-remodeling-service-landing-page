import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[#FAFAFA]/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#B2F142] rounded-full flex items-center justify-center relative overflow-hidden">
               <div className="absolute w-4 h-8 bg-[#1B3B2E] left-0"></div>
            </div>
            <span className="font-bold text-xl text-[#1B3B2E]">RemodelPro<span className="text-[#B2F142]">.</span></span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-[#1B3B2E] font-medium border-b-2 border-[#1B3B2E]">Home</a>
            <a href="#" className="text-gray-500 hover:text-[#1B3B2E] transition-colors">Services</a>
            <a href="#" className="text-gray-500 hover:text-[#1B3B2E] transition-colors">Projects</a>
            <a href="#" className="text-gray-500 hover:text-[#1B3B2E] transition-colors">Blogs</a>
            <a href="#" className="text-gray-500 hover:text-[#1B3B2E] transition-colors">About Us</a>
            <a href="#" className="text-gray-500 hover:text-[#1B3B2E] transition-colors">Pricing</a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <button className="bg-[#1B3B2E] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#132a21] transition-colors">
              Get A Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#1B3B2E]">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-[#1B3B2E] font-medium">Home</a>
            <a href="#" className="block px-3 py-2 text-gray-500">Services</a>
            <a href="#" className="block px-3 py-2 text-gray-500">Projects</a>
            <a href="#" className="block px-3 py-2 text-gray-500">Blogs</a>
            <a href="#" className="block px-3 py-2 text-gray-500">About Us</a>
            <a href="#" className="block px-3 py-2 text-gray-500">Pricing</a>
            <button className="w-full text-left px-3 py-2 text-[#1B3B2E] font-medium">Get A Quote</button>
          </div>
        </div>
      )}
    </nav>
  );
}
