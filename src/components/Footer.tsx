import React from 'react';
import { MessageCircle, PhoneCall, Mail, ArrowUp, ArrowRight } from 'lucide-react';
import { CONFIG, getWhatsAppLink, getPhoneCallLink } from '../data/config';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-12 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 pb-12 border-b border-navy-800/80">
          
          {/* Col 1: Brand & Academy Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-navy-700 flex items-center justify-center text-white font-display font-bold text-xl shadow-md">
                <span className="text-amber-400">∑</span>
              </div>
              <div>
                <span className="font-display font-extrabold text-xl tracking-tight text-white">
                  BOLSTER
                </span>
                <span className="block text-[11px] font-medium tracking-widest text-brand-400 uppercase">
                  Math Academy
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Dedicated private Mathematics coaching by {CONFIG.professorName}, M.Sc. in Mathematics, bringing 17 years of offline and 8 years of online teaching experience to students across school, intermediate, competitive, and international programs.
            </p>
          </div>

          {/* Col 2: Tuition Categories */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Tuition Categories
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#tuition-categories" className="hover:text-brand-300 transition-colors">
                  Online Tuition — India
                </a>
              </li>
              <li>
                <a href="#tuition-categories" className="hover:text-brand-300 transition-colors">
                  Offline Tuition — India
                </a>
              </li>
              <li>
                <a href="#tuition-categories" className="hover:text-brand-300 transition-colors">
                  International Tuition — Abroad
                </a>
              </li>
              <li className="pt-2 border-t border-navy-900">
                <a href="#tuition-categories" className="hover:text-brand-300 transition-colors">
                  School Mathematics — Grades 5–10
                </a>
              </li>
              <li>
                <a href="#tuition-categories" className="hover:text-brand-300 transition-colors">
                  Intermediate — Classes 11 & 12
                </a>
              </li>
              <li>
                <a href="#tuition-categories" className="hover:text-brand-300 transition-colors">
                  JEE & EAMCET Mathematics
                </a>
              </li>
              <li>
                <a href="#tuition-categories" className="hover:text-brand-300 transition-colors">
                  PSAT, SAT, ACT, AMC, IB, AP, IGCSE
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Teaching Standards (Clean Bullet Points - No Numbers) */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Teaching Standards
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <span className="text-brand-400 font-bold leading-tight">•</span>
                <span>Concept-based teaching</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-400 font-bold leading-tight">•</span>
                <span>Personalized attention</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-400 font-bold leading-tight">•</span>
                <span>Problem-solving practice</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-400 font-bold leading-tight">•</span>
                <span>Weekly twice assignments</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-400 font-bold leading-tight">•</span>
                <span>Monthly assessment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-400 font-bold leading-tight">•</span>
                <span>School & board exam preparation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-400 font-bold leading-tight">•</span>
                <span>Doubt clearing</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Direct Tutoring Contact (Professor) */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Direct Contact
            </h4>
            
            <div className="space-y-3 text-xs text-slate-300">
              <div>
                <p className="font-display font-semibold text-sm text-white">
                  {CONFIG.professorName}
                </p>
                <p className="text-[11px] text-brand-300 font-medium">
                  Mathematics Tutor & Educator
                </p>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] text-slate-400 block">WhatsApp:</span>
                  <a 
                    href={getWhatsAppLink()} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-emerald-300 transition-colors font-mono font-semibold text-slate-200"
                  >
                    +91 73372 65154
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <PhoneCall className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] text-slate-400 block">Phone:</span>
                  <a 
                    href={getPhoneCallLink()} 
                    className="hover:text-amber-300 transition-colors font-mono font-semibold text-slate-200"
                  >
                    +91 73372 65154
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] text-slate-400 block">Email:</span>
                  <a href="mailto:mathtutorksr@gmail.com" className="hover:text-sky-300 transition-colors font-mono font-medium break-all text-slate-200">
                    mathtutorksr@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Col 5: Website Development (Separate & Distinct) */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Website Development
            </h4>

            <div className="space-y-3 text-xs text-slate-400">
              <div>
                <p className="text-slate-300 font-medium leading-relaxed">
                  Website designed & developed by
                </p>
                <p className="font-display font-semibold text-sm text-brand-300">
                  Deepika
                </p>
              </div>

              <p className="text-[11px] text-slate-400 leading-snug">
                Need a website for your business, portfolio, academy, or personal brand?
              </p>

              <div>
                <span className="text-[11px] text-slate-500 block">Contact:</span>
                <a
                  href="mailto:koppuladeepika16@gmail.com"
                  className="text-slate-300 hover:text-brand-300 transition-colors font-mono text-[11px] break-all underline decoration-slate-600 hover:decoration-brand-400"
                >
                  koppuladeepika16@gmail.com
                </a>
              </div>

              <div className="pt-1">
                <a
                  href="mailto:koppuladeepika16@gmail.com?subject=Website%20Creation%20Enquiry&body=Hello%20Deepika%2C%20I%20am%20interested%20in%20creating%20a%20website."
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-900 hover:bg-brand-600/30 text-brand-300 hover:text-white border border-navy-700 hover:border-brand-500 text-[11px] font-semibold transition-all group"
                >
                  <span>Contact for Website</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © 2026 BOLSTER Math Academy. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-900 hover:bg-navy-800 text-slate-300 border border-navy-700 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
