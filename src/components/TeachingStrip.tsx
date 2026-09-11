import React from 'react';
import { CheckCircle2 } from 'lucide-react';

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
    <div className={`bg-gradient-to-r from-navy-950 via-navy-900 to-brand-800 py-3 px-4 overflow-x-auto ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-nowrap sm:flex-wrap items-center justify-start sm:justify-center gap-x-4 gap-y-2 min-w-max sm:min-w-0">
          {PROMISES.map((promise, idx) => (
            <React.Fragment key={idx}>
              <div className="inline-flex items-center gap-1.5 text-white whitespace-nowrap">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="text-xs font-semibold tracking-wide">{promise}</span>
              </div>
              {idx < PROMISES.length - 1 && (
                <span className="text-slate-600 text-xs hidden sm:inline" aria-hidden>•</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
