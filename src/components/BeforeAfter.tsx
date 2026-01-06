'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

function ComparisonSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updateSliderPosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    updateSliderPosition(e.clientX);
  }, [updateSliderPosition]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
    updateSliderPosition(e.touches[0].clientX);
  }, [updateSliderPosition]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      updateSliderPosition(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      updateSliderPosition(e.touches[0].clientX);
    };

    const handleEnd = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleEnd);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleEnd);
      document.addEventListener('touchcancel', handleEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleEnd);
      document.removeEventListener('touchcancel', handleEnd);
    };
  }, [isDragging, updateSliderPosition]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    const step = 2;
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setSliderPosition(prev => Math.max(0, prev - step));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setSliderPosition(prev => Math.min(100, prev + step));
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[4/3] lg:aspect-[16/9] overflow-hidden cursor-ew-resize select-none"
      style={{ touchAction: 'none' }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      role="slider"
      aria-label="Image comparison slider"
      aria-valuenow={Math.round(sliderPosition)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {/* After Image (Bottom Layer) */}
      <div className="absolute inset-0">
        <Image
          src="/after-new.png"
          alt="After treatment"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>

      {/* Before Image (Top Layer - Clipped) */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src="/before-new.png"
          alt="Before treatment"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-[2px] z-10 pointer-events-none"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute inset-0 bg-white"></div>
        
        {/* Handle Knob */}
        <div 
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-2xl flex items-center justify-center transition-transform duration-150 ${isDragging ? 'scale-110' : 'hover:scale-105'}`}
        >
          <div className="flex items-center gap-2">
            <iconify-icon icon="solar:alt-arrow-left-linear" width="16" height="16" style={{ color: 'var(--color-text)' }}></iconify-icon>
            <iconify-icon icon="solar:alt-arrow-right-linear" width="16" height="16" style={{ color: 'var(--color-text)' }}></iconify-icon>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="results" className="relative">
      {/* Full-width slider */}
      <div className="relative">
        <ComparisonSlider />
        
        {/* Overlay content */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top labels */}
          <div className="absolute top-6 left-6 lg:top-10 lg:left-10">
            <span className="px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full text-sm font-medium text-[var(--color-text)]">
              Before
            </span>
          </div>
          <div className="absolute top-6 right-6 lg:top-10 lg:right-10">
            <span className="px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full text-sm font-medium text-[var(--color-text)]">
              After
            </span>
          </div>
          
          {/* Bottom content */}
          <div 
            ref={contentRef}
            className="absolute bottom-0 left-0 right-0 p-6 lg:p-10 pointer-events-auto"
            style={{
              opacity: contentVisible ? 1 : 0,
              transform: contentVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
            }}
          >
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-white/60 text-lg">+</span>
                  <span className="text-sm tracking-wide text-white/80">Real Results</span>
                </div>
                <h2 className="text-white text-[clamp(1.5rem,3vw,2.5rem)] font-light leading-[1.1] tracking-[-0.02em] mb-2">
                  Facial Rejuvenation
                </h2>
                <p className="text-white/60 text-sm">
                  6 weeks post-treatment
                </p>
              </div>
              
              <button className="group inline-flex items-center gap-4 pl-7 pr-5 py-4 bg-white text-[var(--color-text)] rounded-full text-[15px] font-medium hover:shadow-xl transition-all duration-300 w-fit">
                View all results
                <span className="w-9 h-9 rounded-full bg-[#F8F6F3] flex items-center justify-center group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all">
                  <iconify-icon icon="solar:arrow-right-linear" width="16" height="16"></iconify-icon>
                </span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Gradient overlay for text readability */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
}

