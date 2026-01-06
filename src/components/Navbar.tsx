'use client';

import { useState, useEffect } from 'react';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Enable smooth scrolling for anchor links
  useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="pl-8 md:pl-16 lg:pl-24 xl:pl-32 pr-8 md:pr-16 lg:pr-24 xl:pr-32">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-4 group">
            {/* Logo Mark */}
            <div className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300 ${
              isScrolled 
                ? 'bg-[var(--color-bg-dark)]' 
                : 'bg-white/10 backdrop-blur-sm border border-white/20'
            }`}>
              <span className={`text-xl font-light tracking-tight ${isScrolled ? 'text-white' : 'text-white'}`}>
                L
              </span>
            </div>
            {/* Logo Text */}
            <div className="hidden sm:block">
              <span className={`text-lg font-light tracking-wide block transition-colors ${isScrolled ? 'text-[var(--color-text)]' : 'text-white'}`}>
                Lumière
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className={`hidden lg:flex items-center gap-8 ${isScrolled ? 'text-[var(--color-text-secondary)]' : 'text-white/80'}`}>
            <a href="#about" className="text-sm hover:opacity-100 transition-opacity">About</a>
            <a href="#services" className="text-sm hover:opacity-100 transition-opacity">Services</a>
            <a href="#features" className="text-sm hover:opacity-100 transition-opacity">Why Us</a>
            <a href="#testimonials" className="text-sm hover:opacity-100 transition-opacity">Testimonials</a>
            <a href="#contact" className="text-sm hover:opacity-100 transition-opacity">Contact</a>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                isScrolled 
                  ? 'bg-white border-[var(--color-border)] text-[var(--color-text)] hover:bg-gray-50' 
                  : 'bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20'
              }`}
            >
              Menu
            </button>
            <button className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
              isScrolled 
                ? 'bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent)]/90' 
                : 'bg-white text-[var(--color-text)] hover:bg-white/90'
            }`}>
              <iconify-icon icon="solar:calendar-linear" width="18" height="18"></iconify-icon>
            </button>
          </div>
        </div>

      </div>
      
      {/* Mobile Menu - Full Width */}
      {isMenuOpen && (
        <div className={`lg:hidden absolute top-full left-0 right-0 border-t ${
          isScrolled 
            ? 'border-[var(--color-border)] bg-white' 
            : 'border-white/10 bg-[var(--color-bg-dark)]'
        }`}>
          <nav className="flex flex-col px-8 py-6">
            <a 
              href="#about" 
              onClick={() => setIsMenuOpen(false)}
              className={`text-lg py-4 border-b ${isScrolled ? 'text-[var(--color-text)] border-[var(--color-border)]' : 'text-white border-white/10'}`}
            >
              About
            </a>
            <a 
              href="#services" 
              onClick={() => setIsMenuOpen(false)}
              className={`text-lg py-4 border-b ${isScrolled ? 'text-[var(--color-text)] border-[var(--color-border)]' : 'text-white border-white/10'}`}
            >
              Services
            </a>
            <a 
              href="#features" 
              onClick={() => setIsMenuOpen(false)}
              className={`text-lg py-4 border-b ${isScrolled ? 'text-[var(--color-text)] border-[var(--color-border)]' : 'text-white border-white/10'}`}
            >
              Why Us
            </a>
            <a 
              href="#testimonials" 
              onClick={() => setIsMenuOpen(false)}
              className={`text-lg py-4 border-b ${isScrolled ? 'text-[var(--color-text)] border-[var(--color-border)]' : 'text-white border-white/10'}`}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsMenuOpen(false)}
              className={`text-lg py-4 ${isScrolled ? 'text-[var(--color-text)]' : 'text-white'}`}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </nav>
  );
}
