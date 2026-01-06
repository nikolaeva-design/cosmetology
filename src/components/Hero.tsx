'use client';

import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Hero() {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation<HTMLDivElement>({ initialVisible: true });

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/hero-new.png"
          alt="Beautiful skin care"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-black/30"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex items-end pb-16 lg:pb-24">
        <div 
          ref={contentRef}
          className="w-full pl-8 md:pl-16 lg:pl-24 xl:pl-32 pr-8 md:pr-16 lg:pr-24 xl:pr-32"
          style={{
            opacity: contentVisible ? 1 : 0,
            transform: contentVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
          }}
        >
          <div className="max-w-[1400px]">
            {/* Main Headline */}
            <h1 className="text-white text-[clamp(2.75rem,6vw,5.5rem)] font-light leading-[1.05] tracking-[-0.03em] mb-10 lg:mb-14">
              Radiant skin for all
            </h1>

            {/* Bottom row - Description & CTA */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 lg:gap-20">
              <p className="text-white/70 text-[15px] lg:text-base leading-[1.8] max-w-sm">
                Personalized aesthetic treatments powered by cutting-edge technology. 
                Each visit delivers precise, attentive care designed to enhance your 
                natural beauty and skin health.
              </p>
              
              <button className="group inline-flex items-center gap-5 pl-8 pr-6 py-5 bg-white rounded-full text-[#1A2E3B] text-[15px] font-medium hover:shadow-xl transition-all duration-300 w-fit btn-animate">
                Book a consultation
                <span className="w-10 h-10 rounded-full bg-[#F8F6F3] flex items-center justify-center group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all duration-300">
                  <iconify-icon 
                    icon="solar:arrow-right-linear" 
                    width="18" 
                    height="18"
                  ></iconify-icon>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 lg:bottom-12 lg:right-20 text-white/20">
        <iconify-icon icon="solar:star-shine-linear" width="28" height="28"></iconify-icon>
      </div>
    </section>
  );
}
