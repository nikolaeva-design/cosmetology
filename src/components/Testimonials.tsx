'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const testimonials = [
  {
    name: 'Sophia Martinez',
    role: 'Facial Rejuvenation',
    content: 'The team at Lumière transformed my skin completely. After years of struggling with hyperpigmentation, I finally have clear, glowing skin.',
    initials: 'SM',
  },
  {
    name: 'Emma Richardson',
    role: 'Dermal Fillers',
    content: 'I was nervous about my first treatment, but Dr. Chen made me feel so comfortable. The results are incredibly natural!',
    initials: 'ER',
  },
  {
    name: 'Isabella Wong',
    role: 'Skin Resurfacing',
    content: 'Five stars isn\'t enough! The facial rejuvenation package was worth every penny. Pristine clinic and wonderful staff.',
    initials: 'IW',
  },
  {
    name: 'Charlotte Davis',
    role: 'Laser Treatment',
    content: 'I\'ve been to many clinics but Lumière is truly exceptional. The attention to detail and personalized care is unmatched.',
    initials: 'CD',
  },
  {
    name: 'Olivia Chen',
    role: 'Body Contouring',
    content: 'The results exceeded my expectations. The team took the time to understand my goals and delivered beautifully.',
    initials: 'OC',
  },
  {
    name: 'Ava Thompson',
    role: 'Anti-Aging',
    content: 'Professional, caring, and excellent results. I recommend Lumière to everyone looking for quality aesthetic treatments.',
    initials: 'AT',
  },
];

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="flex-shrink-0 w-[360px] h-[280px] bg-white rounded-2xl p-7 shadow-sm flex flex-col">
      {/* Stars */}
      <div className="flex gap-1 mb-5 pb-5">
        {[...Array(5)].map((_, i) => (
          <iconify-icon key={i} icon="solar:star-bold" width="14" height="14" style={{ color: '#FBBF24' }}></iconify-icon>
        ))}
      </div>
      
      {/* Content */}
      <p className="text-[var(--color-text)] text-[15px] leading-[1.7] flex-1">
        &ldquo;{testimonial.content}&rdquo;
      </p>
      
      {/* Author */}
      <div className="flex items-center gap-3 mt-auto pt-5">
        <div className="w-10 h-10 rounded-full bg-[var(--color-bg-dark)] flex items-center justify-center flex-shrink-0">
          <span className="text-white font-medium text-xs">{testimonial.initials}</span>
        </div>
        <div>
          <div className="font-medium text-[var(--color-text)] text-sm">{testimonial.name}</div>
          <div className="text-xs text-[var(--color-text-secondary)]">{testimonial.role}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-[#F8F6F3] overflow-hidden">
      {/* Header */}
      <div 
        ref={headerRef}
        className="pl-8 md:pl-16 lg:pl-24 xl:pl-32 pr-8 md:pr-16 lg:pr-24 xl:pr-32 mb-12 lg:mb-16"
        style={{
          opacity: headerVisible ? 1 : 0,
          transform: headerVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
        }}
      >
        <div className="pb-5">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-[var(--color-text-secondary)] text-lg">+</span>
            <span className="text-sm tracking-wide text-[var(--color-text)]">Testimonials</span>
          </div>
          <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-light leading-[1.1] tracking-[-0.02em] text-[var(--color-text)]">
            Client stories
          </h2>
        </div>
      </div>

      {/* Scrolling Row 1 - Left to Right */}
      <div className="relative mb-6 pb-5">
        <div className="flex gap-6 animate-scroll-left">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>

      {/* Scrolling Row 2 - Right to Left */}
      <div className="relative">
        <div className="flex gap-6 animate-scroll-right">
          {[...testimonials.slice(3), ...testimonials.slice(0, 3), ...testimonials.slice(3), ...testimonials.slice(0, 3)].map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>

    </section>
  );
}
