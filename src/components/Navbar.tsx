import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, MessageCircle, ArrowRight } from 'lucide-react';
import { CONFIG, getWhatsAppLink, getPhoneCallLink } from '../data/config';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Professor', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Tuition Categories', href: '#tuition-categories' },
    { name: 'Feedback', href: '#feedback' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-soft-sm border-b border-slate-200/80 py-3'
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleSmoothScroll(e, '#home')}
            className="flex items-center gap-3 group text-left"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-navy-900 via-navy-800 to-brand-700 flex items-center justify-center text-white font-display font-bold text-xl shadow-md group-hover:scale-105 transition-transform duration-200">
              <span className="text-amber-400">∑</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-black text-xl tracking-tight text-navy-900">
                  BOLSTER
                </span>
                <span className="font-medium text-xs tracking-widest text-brand-600 uppercase bg-brand-50 px-1.5 py-0.5 rounded border border-brand-100">
                  Math Academy
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium tracking-wide">
                M.Sc. • 17 Years Offline • 8 Years Online
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-navy-950 hover:bg-slate-100/80 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Call Now Button */}
            <a
              href={getPhoneCallLink()}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200/80 border border-slate-200 rounded-lg transition-all"
              title={`Call: ${CONFIG.phoneNumber}`}
            >
              <PhoneCall className="w-3.5 h-3.5 text-navy-700" />
              <span>Call Now</span>
            </a>

            {/* WhatsApp CTA */}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-all"
              title={`WhatsApp: ${CONFIG.whatsappNumber}`}
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp Us</span>
            </a>

            {/* Connect with Professor (Primary CTA) */}
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-bold text-white bg-gradient-to-r from-brand-600 to-navy-800 hover:from-brand-500 hover:to-navy-700 rounded-lg shadow-sm hover:shadow transition-all group"
            >
              <span>Connect with Professor</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-700 hover:text-navy-900 hover:bg-slate-100 rounded-lg focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-5 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:text-navy-900 hover:bg-slate-50"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className="w-full text-center py-2.5 text-sm font-bold text-white bg-gradient-to-r from-brand-600 to-navy-800 rounded-lg shadow-sm"
            >
              Connect with Professor
            </a>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-lg"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                WhatsApp
              </a>
              <a
                href={getPhoneCallLink()}
                className="flex items-center justify-center gap-2 py-2 text-xs font-semibold text-slate-700 bg-slate-100 border border-slate-200 rounded-lg"
              >
                <PhoneCall className="w-3.5 h-3.5 text-navy-700" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
