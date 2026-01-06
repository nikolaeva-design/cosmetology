'use client';

import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface Service {
  title: string;
  color: string;
  image: string;
}

function ServiceItem({ service, index }: { service: Service; index: number }) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <div 
      ref={ref}
      className="group border-t border-[var(--color-border)]/50 hover:bg-white transition-all duration-300"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s`,
      }}
    >
      <div className="pl-8 md:pl-16 lg:pl-24 xl:pl-32 pr-8 md:pr-16 lg:pr-24 xl:pr-32 py-6 lg:py-8">
        <div className="flex items-center justify-between gap-6 lg:gap-10">
          {/* Left: Image + Title */}
          <div className="flex items-center gap-6 lg:gap-10 min-w-0">
            {/* Image */}
            <div className={`w-20 h-20 lg:w-28 lg:h-28 rounded-2xl flex-shrink-0 overflow-hidden relative ${!service.image ? `bg-gradient-to-br ${service.color} flex items-center justify-center` : ''}`}>
              {service.image ? (
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <iconify-icon 
                  icon="solar:face-scan-square-linear"
                  width="32" 
                  height="32" 
                  style={{ color: 'var(--color-text)', opacity: 0.1 }}
                ></iconify-icon>
              )}
            </div>
            
            {/* Title */}
            <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light tracking-[-0.02em] text-[var(--color-text)]">
              {service.title}
            </h3>
          </div>
          
          {/* Button */}
          <button className="hidden md:inline-flex items-center gap-3 pl-6 pr-4 py-3 bg-[var(--color-bg-dark)] text-white rounded-full text-sm font-medium hover:bg-[#2A4352] transition-all duration-300 flex-shrink-0">
            Learn more
            <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <iconify-icon icon="solar:arrow-right-linear" width="14" height="14"></iconify-icon>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

const services: Service[] = [
  {
    title: 'Facial Rejuvenation',
    color: 'from-[#F0E6DC] to-[#E0D0C0]',
    image: '/service-blonde.png',
  },
  {
    title: 'Dermal Fillers',
    color: 'from-[#E8F0F0] to-[#D0E0E0]',
    image: '/service-dermal.png',
  },
  {
    title: 'Skin Resurfacing',
    color: 'from-[#F0E8E0] to-[#E0D8D0]',
    image: '/service-resurfacing.png',
  },
  {
    title: 'Body Contouring',
    color: 'from-[#E8E8F0] to-[#D8D8E0]',
    image: '/service-body.png',
  },
  {
    title: 'Laser Treatments',
    color: 'from-[#F0F0E8] to-[#E0E0D0]',
    image: '/service-laser.png',
  },
];

export default function Services() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="services" className="bg-[#F8F6F3]">
      {/* Header */}
      <div className="py-16 lg:py-24">
        <div className="pl-8 md:pl-16 lg:pl-24 xl:pl-32 pr-8 md:pr-16 lg:pr-24 xl:pr-32">
          <div 
            ref={headerRef}
            className="grid lg:grid-cols-2 gap-10 lg:gap-20"
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
                <span className="text-sm tracking-wide text-[var(--color-text)]">Services</span>
              </div>
              
              {/* Headline */}
              <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-light leading-[1.1] tracking-[-0.02em] text-[var(--color-text)]">
                Exceptional care for every skin concern
              </h2>
            </div>
            
            <div className="flex flex-col justify-end">
              <p className="text-[var(--color-text-secondary)] leading-[1.75] max-w-md text-[15px]">
                We offer a comprehensive range of aesthetic treatments, each personalized 
                to your unique needs and delivered with precision by our expert team.
              </p>
              
              <div className="pt-[40px]">
                <button className="group inline-flex items-center gap-4 pl-7 pr-5 py-4 bg-[#C5D5E8] rounded-full text-[var(--color-text)] text-[15px] font-medium hover:bg-[var(--color-accent)] hover:text-white transition-all duration-300 w-fit">
                  View all
                  <span className="w-9 h-9 rounded-full bg-white/50 flex items-center justify-center group-hover:bg-white/20 transition-all">
                    <iconify-icon 
                      icon="solar:arrow-right-linear" 
                      width="16" 
                      height="16"
                    ></iconify-icon>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services List */}
      <div className="pb-8 lg:pb-12">
        {services.map((service, index) => (
          <ServiceItem key={index} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}
