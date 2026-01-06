'use client';

import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Features() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="features" className="py-20 lg:py-32 bg-[#EDE9E4]">
      <div className="pl-8 md:pl-16 lg:pl-24 xl:pl-32 pr-8 md:pr-16 lg:pr-24 xl:pr-32">
        {/* Header */}
        <div 
          ref={headerRef}
          className="grid lg:grid-cols-2 gap-10 lg:gap-20 mb-12 lg:mb-16 pb-5"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
          }}
        >
          <div>
            {/* Label */}
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[var(--color-text-secondary)] text-lg">+</span>
              <span className="text-sm tracking-wide text-[var(--color-text)]">Why Choose Us</span>
            </div>
            
            <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-light leading-[1.1] tracking-[-0.02em] text-[var(--color-text)]">
              The Lumière difference
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-[var(--color-text-secondary)] leading-[1.75] max-w-md text-[15px]">
              We combine medical expertise with a spa-like atmosphere to deliver 
              exceptional results in a relaxing, welcoming environment.
            </p>
          </div>
        </div>

        {/* Visual Bento Grid - 5 blocks */}
        <div 
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-5"
          style={{
            opacity: gridVisible ? 1 : 0,
            transform: gridVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
          }}
        >
          
          {/* Card 1 - Rating Card */}
          <div className="col-span-1 bg-white rounded-3xl p-6 lg:p-8 flex flex-col justify-between min-h-[240px] card-hover">
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <iconify-icon key={i} icon="solar:star-bold" width="18" height="18" style={{ color: '#FBBF24' }}></iconify-icon>
              ))}
            </div>
            <div>
              <div className="text-6xl lg:text-7xl font-light text-[var(--color-text)] tracking-tight">4.9</div>
              <p className="text-[var(--color-text-secondary)] text-sm mt-2">From 2,800+ reviews</p>
            </div>
          </div>

          {/* Card 2 - Stats Clients */}
          <div className="col-span-1 bg-[var(--color-bg-dark)] rounded-3xl p-6 lg:p-8 flex flex-col justify-between min-h-[240px] card-hover">
            <iconify-icon icon="solar:users-group-rounded-bold" width="28" height="28" style={{ color: 'rgba(255,255,255,0.5)' }}></iconify-icon>
            <div>
              <div className="text-6xl lg:text-7xl font-light text-white tracking-tight">15K+</div>
              <p className="text-white/50 text-sm mt-2">Happy clients</p>
            </div>
          </div>

          {/* Card 3 - Image Card (Large) */}
          <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden relative min-h-[400px] lg:min-h-[500px]">
            <Image
              src="/features-image.png"
              alt="Skincare treatment"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <span className="inline-block px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full text-xs font-medium text-[var(--color-text)] mb-4">
                Expert Care
              </span>
              <h3 className="text-white text-2xl lg:text-3xl font-light leading-tight">
                Board-Certified<br />Medical Team
              </h3>
            </div>
          </div>

          {/* Card 4 - Technology Visual */}
          <div className="col-span-2 bg-gradient-to-br from-[#D4E4ED] to-[#B8CCE0] rounded-3xl p-6 lg:p-8 flex flex-col justify-between min-h-[240px] relative overflow-hidden">
            <div className="absolute right-6 top-6 w-20 h-20 rounded-2xl bg-white/50 backdrop-blur-sm flex items-center justify-center">
              <iconify-icon icon="solar:shield-check-linear" width="36" height="36" style={{ color: 'var(--color-accent)' }}></iconify-icon>
            </div>
            <div>
              <span className="text-[var(--color-accent)] text-xs uppercase tracking-wider font-medium">Innovation</span>
            </div>
            <div>
              <h3 className="text-2xl font-medium text-[var(--color-text)] mb-2">Advanced Technology</h3>
              <p className="text-[var(--color-text-secondary)] text-sm max-w-sm">FDA-approved, state-of-the-art equipment for safe and effective treatments</p>
            </div>
          </div>

          {/* Card 5 - Wide CTA */}
          <div className="col-span-2 md:col-span-4 bg-[var(--color-bg-dark)] rounded-3xl p-8 lg:p-10 flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="text-2xl lg:text-3xl font-light text-white mb-2">Ready to transform?</h3>
              <p className="text-white/50 text-sm">Book your complimentary consultation today</p>
            </div>
            <button className="group inline-flex items-center gap-4 pl-7 pr-5 py-4 bg-white text-[var(--color-text)] rounded-full text-sm font-medium hover:shadow-xl transition-all duration-300 w-fit">
              Book now
              <span className="w-9 h-9 rounded-full bg-[#F8F6F3] flex items-center justify-center group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all">
                <iconify-icon icon="solar:arrow-right-linear" width="16" height="16"></iconify-icon>
              </span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
