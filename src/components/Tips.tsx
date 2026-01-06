'use client';

import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const articles = [
  {
    title: 'The science behind radiant skin',
    category: 'Featured',
    description: 'Discover the latest breakthroughs in skincare science and how they can transform your daily routine.',
    readTime: '5 min read',
    featured: true,
  },
  {
    title: 'At-home skincare routines',
    category: 'Skincare',
    description: 'Expert-approved daily rituals to maintain results.',
    readTime: '3 min',
  },
  {
    title: 'Understanding anti-aging',
    category: 'Treatments',
    description: 'A guide to modern aesthetic procedures.',
    readTime: '4 min',
  },
];

export default function Tips() {
  const featured = articles.find(a => a.featured);
  const regular = articles.filter(a => !a.featured);
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div 
        ref={sectionRef}
        className="pl-8 md:pl-16 lg:pl-24 xl:pl-32 pr-8 md:pr-16 lg:pr-24 xl:pr-32"
        style={{
          opacity: sectionVisible ? 1 : 0,
          transform: sectionVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
        }}
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12 lg:mb-16 pb-5">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[var(--color-text-secondary)] text-lg">+</span>
              <span className="text-sm tracking-wide text-[var(--color-text)]">Insights</span>
            </div>
            <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-light leading-[1.1] tracking-[-0.02em] text-[var(--color-text)]">
              Expert knowledge
            </h2>
          </div>
          <button className="group inline-flex items-center gap-4 pl-7 pr-5 py-4 bg-[var(--color-bg-dark)] text-white rounded-full text-sm font-medium hover:shadow-xl transition-all duration-300 w-fit">
            View all
            <span className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
              <iconify-icon icon="solar:arrow-right-linear" width="16" height="16"></iconify-icon>
            </span>
          </button>
        </div>

        {/* Articles Grid */}
        <div className="grid lg:grid-cols-2 gap-5 lg:gap-6">
          
          {/* Featured Article */}
          {featured && (
            <article className="group cursor-pointer rounded-3xl overflow-hidden relative min-h-[400px] lg:min-h-[480px] card-hover">
              <Image
                src="/insights-hero.png"
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              
              {/* Content */}
              <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-between">
                <div className="flex items-center gap-3">
                  <span className="px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full text-xs font-medium text-[var(--color-text)]">
                    {featured.category}
                  </span>
                  <span className="text-white/70 text-xs">{featured.readTime}</span>
                </div>
                
                <div>
                  <h3 className="text-white text-2xl lg:text-3xl font-light leading-tight mb-4 max-w-md">
                    {featured.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-sm">
                    {featured.description}
                  </p>
                  <div className="inline-flex items-center gap-3 text-white text-sm font-medium group-hover:gap-4 transition-all">
                    Read article
                    <iconify-icon icon="solar:arrow-right-linear" width="16" height="16"></iconify-icon>
                  </div>
                </div>
              </div>
            </article>
          )}

          {/* Regular Articles Stack */}
          <div className="flex flex-col gap-5 lg:gap-6">
            {regular.map((article, index) => (
              <article 
                key={index}
                className="group cursor-pointer bg-[#F8F6F3] rounded-3xl p-6 lg:p-8 flex gap-6 items-center hover:bg-[#F0EDE8] transition-colors card-hover"
              >
                {/* Number */}
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-light text-[var(--color-text)]">0{index + 1}</span>
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-medium text-[var(--color-accent)]">{article.category}</span>
                    <span className="text-xs text-[var(--color-text-secondary)]">· {article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-medium text-[var(--color-text)] mb-1 group-hover:text-[var(--color-accent)] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] line-clamp-1">
                    {article.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-bg-dark)] group-hover:text-white transition-all">
                  <iconify-icon icon="solar:arrow-right-linear" width="16" height="16"></iconify-icon>
                </div>
              </article>
            ))}

            {/* Subscribe Card */}
            <div className="bg-[var(--color-accent)] rounded-3xl p-6 lg:p-8 flex flex-col justify-between min-h-[180px] card-hover">
              <div>
                <iconify-icon icon="solar:letter-linear" width="28" height="28" style={{ color: 'rgba(255,255,255,0.6)' }}></iconify-icon>
              </div>
              <div>
                <h3 className="text-white text-lg font-medium mb-2">Stay updated</h3>
                <p className="text-white/60 text-sm mb-4">Get skincare tips delivered to your inbox</p>
                <div className="flex gap-2 pt-5">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-full text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-white/40"
                  />
                  <button className="px-5 py-3 bg-white text-[var(--color-accent)] rounded-full text-sm font-medium hover:shadow-lg transition-all">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
