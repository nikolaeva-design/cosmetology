'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <iconify-icon icon="solar:heart-pulse-linear" width="24" height="24" style={{ color: 'var(--color-accent)' }}></iconify-icon>
            <div className="leading-tight">
              <span className="text-sm font-semibold tracking-tight block">Lumière</span>
              <span className="text-[10px] text-[var(--color-text-secondary)] tracking-wide">Aesthetic Clinic</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#about" className="text-[0.8125rem] text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">
              About Us
            </a>
            <a href="#services" className="text-[0.8125rem] text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">
              Services
            </a>
            <a href="#gallery" className="text-[0.8125rem] text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">
              Gallery
            </a>
            <a href="#contact" className="text-[0.8125rem] text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <span className="text-[0.8125rem] text-[var(--color-text-secondary)]">EN</span>
            <div className="w-px h-4 bg-[var(--color-border)]"></div>
            <button className="btn-primary text-[0.8125rem] py-2.5 px-5">
              <iconify-icon icon="solar:calendar-linear" width="16" height="16"></iconify-icon>
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <iconify-icon 
              icon={isMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} 
              width="24" 
              height="24"
            ></iconify-icon>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-[var(--color-border)]">
            <nav className="flex flex-col gap-4">
              <a href="#about" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors py-2">
                About Us
              </a>
              <a href="#services" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors py-2">
                Services
              </a>
              <a href="#gallery" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors py-2">
                Gallery
              </a>
              <a href="#contact" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors py-2">
                Contact
              </a>
              <div className="pt-4">
                <button className="btn-primary w-full justify-center">
                  <iconify-icon icon="solar:calendar-linear" width="16" height="16"></iconify-icon>
                  Book Now
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
