'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const footerLinks = {
  services: [
    { label: 'Facial Rejuvenation', href: '#' },
    { label: 'Dermal Fillers', href: '#' },
    { label: 'Skin Resurfacing', href: '#' },
    { label: 'Body Contouring', href: '#' },
    { label: 'Laser Treatments', href: '#' },
  ],
  clinic: [
    { label: 'About Us', href: '#' },
    { label: 'Our Team', href: '#' },
    { label: 'Gallery', href: '#' },
    { label: 'Blog', href: '#' },
  ],
  support: [
    { label: 'Contact', href: '#' },
    { label: 'FAQs', href: '#' },
    { label: 'Book Online', href: '#' },
  ],
};

const socialLinks = [
  { icon: 'simple-icons:instagram', href: '#', label: 'Instagram' },
  { icon: 'simple-icons:facebook', href: '#', label: 'Facebook' },
  { icon: 'simple-icons:youtube', href: '#', label: 'YouTube' },
];

export default function Footer() {
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <footer id="contact" className="bg-white">
      {/* CTA Section */}
      <div className="relative py-20 lg:py-28 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: 'url(/insights-hero.png)' }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F8F6F3]/95 via-[#F8F6F3]/90 to-[#F8F6F3]/70"></div>
        </div>
        
        <div 
          ref={ctaRef}
          className="pl-8 md:pl-16 lg:pl-24 xl:pl-32 pr-8 md:pr-16 lg:pr-24 xl:pr-32 relative z-10"
          style={{
            opacity: ctaVisible ? 1 : 0,
            transform: ctaVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
          }}
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-[var(--color-text-secondary)] text-lg">+</span>
                <span className="text-sm tracking-wide text-[var(--color-text)]">Book Now</span>
              </div>
              
              <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-light leading-[1.1] tracking-[-0.02em] text-[var(--color-text)] mb-6 pb-2.5">
                Ready to begin your transformation?
              </h2>
              
              <p className="text-[var(--color-text-secondary)] leading-[1.8] text-[15px] max-w-md">
                Schedule your complimentary consultation and discover a personalized treatment plan.
              </p>
              
              <div className="pt-[40px]">
                <button className="group inline-flex items-center gap-5 pl-8 pr-6 py-5 bg-[var(--color-bg-dark)] text-white rounded-full text-[15px] font-medium hover:shadow-xl transition-all duration-300 w-fit">
                  Book Consultation
                  <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                    <iconify-icon icon="solar:arrow-right-linear" width="18" height="18"></iconify-icon>
                  </span>
                </button>
              </div>
            </div>
            
            {/* Right - Contact Card */}
            <div className="bg-white rounded-3xl p-8 lg:p-10">
              <div className="space-y-6">
                <a href="tel:+14155550123" className="group flex items-center gap-5 p-5 rounded-2xl bg-[#F8F6F3] hover:bg-[#F0EDE8] transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)] flex items-center justify-center flex-shrink-0">
                    <iconify-icon icon="solar:phone-linear" width="20" height="20" style={{ color: 'white' }}></iconify-icon>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-[var(--color-text-secondary)] mb-1">Call us</div>
                    <div className="text-lg font-medium text-[var(--color-text)]">+1 (415) 555-0123</div>
                  </div>
                  <iconify-icon icon="solar:arrow-right-up-linear" width="20" height="20" style={{ color: 'var(--color-text-secondary)' }} class="group-hover:text-[var(--color-accent)] transition-colors"></iconify-icon>
                </a>
                
                <div className="flex items-center gap-5 p-5 rounded-2xl bg-[#F8F6F3]">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <iconify-icon icon="solar:map-point-linear" width="20" height="20" style={{ color: 'var(--color-text)' }}></iconify-icon>
                  </div>
                  <div>
                    <div className="text-xs text-[var(--color-text-secondary)] mb-1">Visit us</div>
                    <div className="text-[var(--color-text)]">450 Sutter St, Suite 840</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-5 p-5 rounded-2xl bg-[#F8F6F3]">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <iconify-icon icon="solar:clock-circle-linear" width="20" height="20" style={{ color: 'var(--color-text)' }}></iconify-icon>
                  </div>
                  <div>
                    <div className="text-xs text-[var(--color-text-secondary)] mb-1">Hours</div>
                    <div className="text-[var(--color-text)]">Mon – Sat: 9AM – 7PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-[var(--color-bg-dark)] py-16 lg:py-20">
        <div className="pl-8 md:pl-16 lg:pl-24 xl:pl-32 pr-8 md:pr-16 lg:pr-24 xl:pr-32">
          {/* Top - Logo & Social */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-12">
            <a href="#" className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center">
                <span className="text-xl font-light text-white">L</span>
              </div>
              <span className="text-xl font-light tracking-wide text-white">Lumière</span>
            </a>
            
            <div className="flex items-center gap-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-all"
                >
                  <iconify-icon icon={link.icon} width="18" height="18"></iconify-icon>
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 pt-5">
            {/* Services */}
            <div>
              <h4 className="text-white font-medium text-sm mb-5">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-white/50 text-sm hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Clinic */}
            <div>
              <h4 className="text-white font-medium text-sm mb-5">Clinic</h4>
              <ul className="space-y-3">
                {footerLinks.clinic.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-white/50 text-sm hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-white font-medium text-sm mb-5">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-white/50 text-sm hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-medium text-sm mb-5">Contact</h4>
              <ul className="space-y-3 text-white/50 text-sm">
                <li>450 Sutter St, Suite 840</li>
                <li>San Francisco, CA</li>
                <li className="pt-2">+1 (415) 555-0123</li>
                <li>Mon–Sat: 9AM–7PM</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[var(--color-bg-dark)] border-t border-white/10">
        <div className="pl-8 md:pl-16 lg:pl-24 xl:pl-32 pr-8 md:pr-16 lg:pr-24 xl:pr-32 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
            <p>© {new Date().getFullYear()} Lumière Clinic</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
