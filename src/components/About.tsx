'use client';

import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function About() {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="about" className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2">
        {/* Content Side */}
        <div 
          ref={contentRef}
          className="flex flex-col justify-center lg:justify-between min-h-[50vh] lg:min-h-[90vh] py-12 lg:py-16 pl-8 md:pl-16 lg:pl-24 xl:pl-32 pr-8 lg:pr-16 gap-8 lg:gap-0"
          style={{
            opacity: contentVisible ? 1 : 0,
            transform: contentVisible ? 'translateX(0)' : 'translateX(-30px)',
            transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
          }}
        >
          {/* Top - Label and Headline */}
          <div className="pt-4">
            {/* Label */}
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[var(--color-text-secondary)] text-lg">+</span>
              <span className="text-sm tracking-wide text-[var(--color-text)]">About Us</span>
            </div>
            
            {/* Headline */}
            <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-light leading-[1.1] tracking-[-0.02em] text-[var(--color-text)] max-w-[540px] pb-2.5">
              A personalized approach where precision meets well-being and skin health of each patient
            </h2>
          </div>
          
          {/* Bottom - Description and CTA */}
          <div className="pb-4">
            <p className="text-[var(--color-text-secondary)] leading-[1.8] max-w-lg text-[17px]">
              Each visit combines medical expertise and attentive care, to enhance 
              the health and beauty of your skin.
            </p>
            
            <div className="pt-[40px]">
              <button className="group inline-flex items-center gap-5 pl-8 pr-6 py-5 bg-[#F0F4F8] rounded-full text-[var(--color-text)] text-[15px] font-medium hover:bg-[var(--color-bg-dark)] hover:text-white transition-all duration-300 w-fit btn-animate">
                Learn more
                <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
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

        {/* Image Side - extends to edge */}
        <div 
          ref={imageRef}
          className="relative h-[60vh] lg:h-auto lg:min-h-[90vh] order-first lg:order-last overflow-hidden"
          style={{
            opacity: imageVisible ? 1 : 0,
            transform: imageVisible ? 'scale(1)' : 'scale(1.05)',
            transition: 'opacity 0.7s ease-out 0.2s, transform 0.7s ease-out 0.2s',
          }}
        >
          <Image
            src="/about-treatment.png"
            alt="Modern clinic interior with treatment room"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
