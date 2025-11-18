'use client';

import { Poppins } from "next/font/google";
import { useState, useEffect } from 'react';
import { Menu, X, Plane } from 'lucide-react';
import Image from 'next/image';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const sections = ['home', 'information', 'contact', 'footer'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'information', label: 'Why we are the best?' },
    { id: 'contact', label: 'Contact' },
    { id: 'footer', label: 'About' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50 ${poppins.className}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Image
            src="/Logo.png"
            alt="Trabook Logo"
            width={120}
            height={40}
            className="cursor-pointer"
            onClick={() => scrollToSection('home')}
          />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  relative font-medium text-gray-600 transition-colors duration-300
                  after:content-[''] after:absolute after:left-0 after:bottom-[-6px]
                  after:w-0 after:h-[3px] after:bg-[#ff004f]
                  after:transition-all after:duration-500
                  hover:after:w-full
                  ${activeSection === item.id
                    ? 'text-orange-500 after:w-full'
                    : 'hover:text-orange-500'
                  }
                `}
              >
                {item.label}
              </button>
            ))}

            {/* Book Now Button */}
            <button className="px-8 py-2 bg-gradient-to-r from-orange-500 to-yellow-400 text-white rounded-md hover:scale-105 transition-all duration-300 font-medium text-base flex items-center gap-1">
              BOOK NOW <Plane className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  block w-full text-left py-2 px-4 font-medium transition-colors
                  ${activeSection === item.id
                    ? 'text-orange-500 bg-orange-50'
                    : 'text-gray-600 hover:text-orange-500'
                  }
                `}
              >
                {item.label}
              </button>
            ))}
            <button className="w-full mt-2 px-8 py-2 bg-gradient-to-r from-orange-500 to-yellow-400 text-white rounded-md font-medium text-base flex items-center justify-center gap-1">
              BOOK NOW <Plane className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}