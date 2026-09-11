import React from 'react';
import {
  BookOpen,
  Lightbulb,
  Monitor,
  FileText,
  ClipboardCheck,
  BarChart2,
  Users,
  Calendar,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

interface FeaturesProps {
  onOpenDemo?: () => void;
}

const FEATURES = [
  {
    icon: BookOpen,
    title: 'School Curriculum Aligned',
    desc: 'We follow the student\'s school curriculum to ensure classroom learning and tuition support work together.',
    tag: 'Curriculum Sync',
    color: 'text-blue-600 bg-blue-50 border-blue-200',
    accent: 'border-blue-300',
  },
  {
    icon: Lightbulb,
    title: 'Concept-Based Explanation',
    desc: 'Easy and clear explanations focused on understanding concepts rather than memorizing formulas.',
    tag: 'Core Method',
    color: 'text-amber-600 bg-amber-50 border-amber-200',
    accent: 'border-amber-300',
  },
  {
    icon: Monitor,
    title: 'Google Meet + OneNote Board',
    desc: 'Interactive online teaching using Google Meet and OneNote Board for a classroom-like learning experience.',
    tag: 'Digital Tools',
    color: 'text-indigo-600 bg-indigo-50 border-indigo-200',
    accent: 'border-indigo-300',
  },
  {
    icon: FileText,
    title: 'Twice-Weekly Practice Worksheets',
    desc: 'Students receive practice worksheets twice every week to strengthen concepts and problem-solving skills.',
    tag: 'Regular Practice',
    color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    accent: 'border-emerald-300',
  },
  {
    icon: ClipboardCheck,
    title: 'Monthly Examination',
    desc: 'A monthly examination based on covered topics helps monitor preparation and understanding.',
    tag: 'Progress Check',
    color: 'text-rose-600 bg-rose-50 border-rose-200',
    accent: 'border-rose-300',
  },
  {
    icon: BarChart2,
    title: 'Monthly Progress PPT',
    desc: 'Exam progress and areas for improvement are reviewed with parents through a monthly PPT-based progress update.',
    tag: 'Parent Visibility',
    color: 'text-violet-600 bg-violet-50 border-violet-200',
    accent: 'border-violet-300',
  },
  {
    icon: Users,
    title: 'Personalized Class Size',
    desc: 'One-to-one teaching or small-group learning with a maximum of 5 students per batch.',
    tag: '1-to-1 or Max 5',
    color: 'text-teal-600 bg-teal-50 border-teal-200',
    accent: 'border-teal-300',
  },
  {
    icon: Calendar,
    title: 'Flexible Scheduling',
    desc: 'Preferred days and timings are considered when scheduling classes, subject to availability.',
    tag: 'Your Schedule',
    color: 'text-sky-600 bg-sky-50 border-sky-200',
    accent: 'border-sky-300',
  },
];

export const Features: React.FC<FeaturesProps> = ({ onOpenDemo }) => {
  const handleConnectWithProfessor = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenDemo) {
      onOpenDemo();
    }
  };

  return (
    <section
      id="features"
      className="py-20 md:py-28 bg-white relative border-t border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-800 text-xs font-semibold tracking-wide uppercase">
            <CheckCircle2 className="w-3.5 h-3.5 text-brand-600" />
            <span>What Every Student Receives</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy-950 tracking-tight">
            More Than Just Mathematics Tuition
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Structured learning, regular practice and continuous progress tracking.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((feat, idx) => {
            return (
              <div
                key={`${idx}-highlighted`}
                className={`
                  relative p-5 rounded-2xl bg-white border border-slate-200/90 transition-all duration-300 flex flex-col gap-3 hover:bg-white hover:shadow-soft-md hover:scale-[1.015] shadow-soft-md ${feat.accent}
`}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className={`p-2.5 rounded-xl border ${feat.color}`}>
                    <feat.icon className="w-4 h-4" />
                  </div>

                  <span className="text-[10px] font-semibold text-slate-500 bg-white px-2 py-0.5 rounded-full border border-slate-200">
                    {feat.tag}
                  </span>
                </div>

                <h3 className="font-display font-bold text-sm sm:text-base text-navy-950 leading-snug">
                  {feat.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed flex-grow">
                  {feat.desc}
                </p>

                <div className="pt-2 border-t border-slate-200/70 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Included in all programs</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-6 rounded-3xl bg-gradient-to-r from-navy-950 via-navy-900 to-brand-700 text-white shadow-soft-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[11px] uppercase font-bold tracking-widest text-amber-400">
              Personalized Consultation
            </span>

            <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
              Ready to Discuss Your Student's Learning Goals?
            </h3>

            <p className="text-xs sm:text-sm text-slate-300">
              Contact Professor K. Srinivasa Rao (KSR) to review the current grade syllabus, upcoming exams, or areas needing improvement.
            </p>
          </div>

          <a
            href="#"
            onClick={handleConnectWithProfessor}
            className="shrink-0 inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-xs font-bold uppercase tracking-wider text-navy-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-sm"
          >
            <span>Connect with Professor</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};