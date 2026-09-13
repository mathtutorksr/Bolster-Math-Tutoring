import React from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';

const PROMISES = [
  'School Curriculum Aligned',
  'Concept-Based Learning',
  '2 Practice Worksheets / Week',
  'Monthly Examination',
  'Monthly Parent Progress PPT',
  '1-to-1 or Max 5 Students',
  'Preferred Days & Timings',
];

interface TeachingStripProps {
  className?: string;
}

export const TeachingStrip: React.FC<TeachingStripProps> = ({ className = '' }) => {
  return (
    <section 
      aria-label="Core Teaching Standards" 
      className={`relative bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white py-8 sm:py-10 px-4 sm:px-6 lg:px-8 border-y-2 border-brand-500/30 shadow-soft-lg overflow-hidden ${className}`}
    >
      {/* Subtle Ambient Radial Glow */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-600/20 via-transparent to-transparent pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute -top-16 left-1/2 -translate-x-1/2 w-96 h-28 bg-brand-400/20 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Visual Header / Context */}
        <div className="text-center max-w-2xl mx-auto mb-6 space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Core Teaching Standards & Guarantees</span>
          </div>
          <h3 className="font-display font-bold text-lg sm:text-xl md:text-2xl text-white tracking-tight">
            What Every Student Receives in Tutoring
          </h3>
        </div>

        {/* Responsive Grid/Flex: All 7 feature items wrap naturally on mobile so NONE are hidden or scrolled horizontally */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5">
          {PROMISES.map((promise, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2.5 px-3.5 py-2.5 sm:px-4 sm:py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border-2 border-white/20 hover:border-amber-400/60 shadow-md backdrop-blur-md transition-all duration-200 text-white hover:scale-[1.02] cursor-default"
            >
              <div className="w-5 h-5 rounded-full bg-emerald-500/25 border border-emerald-400/40 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              </div>
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-white whitespace-normal sm:whitespace-nowrap">
                {promise}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
