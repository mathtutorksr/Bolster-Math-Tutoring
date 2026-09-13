import React from 'react';
import { MessageCircle, ArrowRight, Award, GraduationCap, Laptop, Globe2, Sparkles, CheckCircle2 } from 'lucide-react';
import { CONFIG, getWhatsAppLink } from '../data/config';
import professorImg from '../assets/professor-ksrinivasa-rao.jpg';

interface HeroProps {
  onOpenDemo?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo }) => {
  const trustBadges = [
    {
      icon: GraduationCap,
      title: "M.Sc. in Mathematics",
      desc: "Qualified Mathematics Educator",
      badgeColor: "text-amber-700 bg-amber-50 border-amber-200",
      cardBorder: "hover:border-amber-300",
    },
    {
      icon: Award,
      title: "17 Years Offline",
      desc: "In-Person Teaching Experience",
      badgeColor: "text-blue-700 bg-blue-50 border-blue-200",
      cardBorder: "hover:border-blue-300",
    },
    {
      icon: Laptop,
      title: "8 Years Online",
      desc: "Live Digital Teaching",
      badgeColor: "text-indigo-700 bg-indigo-50 border-indigo-200",
      cardBorder: "hover:border-indigo-300",
    },
    {
      icon: Globe2,
      title: "India & International",
      desc: "Online, Offline & Abroad",
      badgeColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
      cardBorder: "hover:border-emerald-300",
    },
  ];

  const handleScrollToTuition = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.querySelector('#tuition-categories');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToConnect = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenDemo) {
      onOpenDemo();
    } else {
      const elem = document.querySelector('#contact');
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden math-grid-bg">
      {/* Decorative Subtle Background Gradients */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-brand-100/50 via-sky-50/40 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-10 right-0 w-80 h-80 bg-amber-50/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Tutoring Service Value & CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Top Value Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white shadow-soft-sm border border-slate-200/80">
              <span className="flex h-2 w-2 rounded-full bg-brand-600 animate-pulse" />
              <span className="text-xs font-semibold text-slate-700 tracking-wide">
                Personalized Mathematics Mentorship
              </span>
              <Sparkles className="w-3.5 h-3.5 text-amber-500 ml-1" />
            </div>

            {/* Main Service Value Headline */}
            <div className="space-y-3">
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-navy-950 tracking-tight leading-[1.15]">
                Build Strong Mathematical Foundations
              </h1>
              <p className="font-display text-lg sm:text-xl font-medium text-brand-700">
                Personalized Mathematics Tutoring for School, Intermediate, Competitive and International Programs
              </p>
            </div>

            {/* Tutoring Scope Tags */}
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-sm font-medium text-slate-700 bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-slate-200/70 shadow-soft-sm">
              <span className="text-navy-900 font-semibold">Covers:</span>
              <span className="inline-flex items-center gap-1 text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-brand-600" /> Grades 5–12
              </span>
              <span className="text-slate-300">•</span>
              <span className="inline-flex items-center gap-1 text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-brand-600" /> JEE & EAMCET
              </span>
              <span className="text-slate-300">•</span>
              <span className="inline-flex items-center gap-1 text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-brand-600" /> IB, AP, IGCSE
              </span>
              <span className="text-slate-300">•</span>
              <span className="inline-flex items-center gap-1 text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-brand-600" /> SAT, ACT, AMC
              </span>
            </div>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              Mathematics tutoring centered on deep conceptual clarity, rigorous problem-solving skills, and personalized attention. 
              Comprehensive support for school curriculum, board examinations, competitive entrance preparation, and international programs.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#tuition-categories"
                onClick={handleScrollToTuition}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-brand-600 via-brand-700 to-navy-900 hover:from-brand-500 hover:to-navy-800 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 group"
              >
                <span>Explore Tuition Categories</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                onClick={handleScrollToConnect}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl shadow-soft-sm transition-all"
              >
                <span>Connect with Professor</span>
              </a>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold text-emerald-900 bg-emerald-50/80 hover:bg-emerald-100 border border-emerald-300 rounded-xl shadow-soft-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Trust Indicators: 4 Credibility Cards */}
            <div className="pt-6 border-t border-slate-200/80">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {trustBadges.map((badge, idx) => (
                  <div
                    key={idx}
                    className={`p-3.5 bg-white/95 backdrop-blur-sm rounded-xl border border-slate-200/90 shadow-soft-sm transition-all duration-200 flex flex-col items-start gap-1.5 ${badge.cardBorder} hover:shadow-soft-md`}
                  >
                    <div className={`p-2 rounded-lg border ${badge.badgeColor}`}>
                      <badge.icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-navy-950 mt-1">
                      {badge.title}
                    </span>
                    <span className="text-[11px] text-slate-500 leading-tight">
                      {badge.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Visual with Subtle Floating Math Symbols */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-br from-brand-400/30 via-slate-200 to-amber-300/30 rounded-3xl blur-lg opacity-70 -z-10" />

              {/* Tutor Main Image Card */}
              <div className="relative bg-white p-2.5 sm:p-3 rounded-2xl shadow-soft-xl border border-slate-200/90 overflow-hidden">
                <img
                  src={professorImg}
                  alt={`Professor ${CONFIG.professorName} teaching Mathematics`}
                  className="w-full h-auto object-cover rounded-xl aspect-[4/3] shadow-inner"
                  loading="eager"
                />

                {/* Overlay Badge at Bottom of Image */}
                <div className="mt-3 p-3 bg-gradient-to-r from-navy-950 via-navy-900 to-slate-900 text-white rounded-xl flex items-center justify-between shadow-sm">
                  <div>
                    <p className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider">
                      Academic Excellence
                    </p>
                    <p className="text-xs sm:text-sm font-medium text-slate-100">
                      Concept Clarity & Problem Solving
                    </p>
                  </div>
                  <span className="text-lg font-mono text-brand-300 px-2.5 py-1 bg-white/10 rounded-lg border border-white/10">
                    f(x)
                  </span>
                </div>
              </div>

              {/* Floating Mathematical Decorative Glyphs */}
              <div
                className="hidden sm:flex absolute -top-4 -left-4 w-12 h-12 bg-white/95 backdrop-blur-md rounded-2xl shadow-soft-md border border-slate-200 items-center justify-center font-mono font-bold text-xl text-brand-600 animate-float-slow select-none pointer-events-none"
                title="Pi"
              >
                π
              </div>

              <div
                className="hidden sm:flex absolute top-1/4 -right-5 w-14 h-14 bg-white/95 backdrop-blur-md rounded-2xl shadow-soft-md border border-slate-200 items-center justify-center font-mono font-bold text-2xl text-navy-800 animate-float-reverse select-none pointer-events-none"
                title="Integral"
              >
                ∫
              </div>

              <div
                className="hidden sm:flex absolute -bottom-4 -left-3 w-12 h-12 bg-white/95 backdrop-blur-md rounded-2xl shadow-soft-md border border-slate-200 items-center justify-center font-mono font-bold text-lg text-amber-600 animate-float-slow select-none pointer-events-none"
                title="Square Root"
              >
                √x
              </div>

              <div
                className="hidden sm:flex absolute bottom-1/3 -left-6 w-11 h-11 bg-white/95 backdrop-blur-md rounded-xl shadow-soft-md border border-slate-200 items-center justify-center font-mono font-semibold text-sm text-slate-700 animate-float-reverse select-none pointer-events-none"
                title="Exponent"
              >
                x²
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
