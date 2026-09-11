import React from 'react';
import { 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  BookOpen, 
  MessageCircle,
  ArrowRight,
  Briefcase,
  Globe2
} from 'lucide-react';
import { CONFIG, getWhatsAppLink } from '../data/config';

interface AboutProfessorProps {
  onOpenDemo?: () => void;
}

export const AboutProfessor: React.FC<AboutProfessorProps> = ({ onOpenDemo }) => {
  const handleScrollToConnect = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenDemo) onOpenDemo();
    const elem = document.querySelector('#contact');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  /* Classes Handled & Subjects Taught - organized by category */
  const classCategories = [
    {
      category: "School Mathematics",
      items: ["Grades 5 – 10"],
      subGroups: null,
      color: "bg-blue-50 border-blue-200 text-blue-900",
    },
    {
      category: "Intermediate / Senior Secondary",
      items: ["Classes 11 & 12"],
      subGroups: null,
      color: "bg-indigo-50 border-indigo-200 text-indigo-900",
    },
    {
      category: "India Curriculum & Competitive Preparation",
      items: [],
      subGroups: [
        {
          label: "Indian Curriculum",
          items: [
            "State Board Mathematics",
            "CBSE Mathematics",
            "ICSE Mathematics",
            "IGCSE Mathematics",
            "IPE / Intermediate Mathematics",
          ],
        },
        {
          label: "Competitive / Aptitude",
          items: [
            "JEE Mathematics",
            "EAMCET Mathematics",
            "CAT Aptitude",
            "Govt. Job Exam Aptitude",
          ],
        },
      ],
      color: "bg-amber-50 border-amber-200 text-amber-900",
    },
    {
      category: "International Mathematics",
      items: ["General Mathematics", "PSAT", "Digital SAT", "ACT", "AMC", "IB", "AP", "IGCSE"],
      subGroups: null,
      color: "bg-emerald-50 border-emerald-200 text-emerald-900",
    },
  ];


  const indianBoards = ["CBSE", "ICSE", "State Boards"];
  const internationalCurricula = ["IB", "AP", "IGCSE"];
  const internationalExams = ["PSAT", "Digital SAT", "ACT", "AMC"];

  return (
    <section id="about" className="py-20 md:py-28 bg-slate-50 relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-navy-100/80 border border-navy-200 text-navy-900 text-xs font-semibold tracking-wide uppercase">
            <GraduationCap className="w-3.5 h-3.5 text-navy-700" />
            <span>About the Professor</span>
          </div>
          
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy-950 tracking-tight uppercase">
            About the Professor
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            {CONFIG.professorTitle} — Dedicated to helping students build strong mathematical understanding through personalized teaching.
          </p>
        </div>

        {/* Profile Grid: Left Faculty Card, Right Academic Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
          
          {/* Left Column: Tutor Profile Card */}
          <div className="lg:col-span-4 bg-white rounded-3xl border border-slate-200 shadow-soft-sm p-6 sm:p-7 space-y-5">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-navy-950 via-navy-900 to-slate-900 text-white space-y-4 shadow-sm">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-semibold border border-amber-400/30">
                <Award className="w-3.5 h-3.5" />
                <span>{CONFIG.professorTitle}</span>
              </div>

              <div>
                <h3 className="font-display font-bold text-2xl text-white tracking-tight">
                  {CONFIG.professorName}
                </h3>
                <p className="text-sm font-semibold text-brand-300 mt-1">
                  {CONFIG.professorTitle}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 space-y-2 text-xs text-slate-300">
                <div className="flex items-center justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Qualification:</span>
                  <span className="font-bold text-white">{CONFIG.qualification}</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Offline Experience:</span>
                  <span className="font-bold text-white">17 Years</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Online Experience:</span>
                  <span className="font-bold text-white">8 Years</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-slate-400">Tuition Modes:</span>
                  <span className="font-bold text-white">Online & Offline</span>
                </div>
              </div>
            </div>

            {/* Direct Connect Buttons */}
            <div className="flex flex-col gap-2 pt-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-emerald-950 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="#contact"
                onClick={handleScrollToConnect}
                className="w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-navy-950 hover:bg-navy-900 transition-colors flex items-center justify-center gap-2"
              >
                <span>Connect with Professor</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Qualification, Experience & Classes Handled */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* 1. Qualification & Teaching Experience */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-soft-sm p-6 sm:p-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-700">
                <Briefcase className="w-4 h-4 text-brand-600" />
                <span>Qualification & Teaching Experience</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-700">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <span className="text-[11px] font-bold text-slate-500 uppercase block mb-1">
                    Qualification
                  </span>
                  <p className="font-semibold text-navy-950 text-sm">
                    {CONFIG.qualification}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <span className="text-[11px] font-bold text-slate-500 uppercase block mb-1">
                    Offline Teaching
                  </span>
                  <p className="font-semibold text-navy-950 text-sm">
                    17 Years
                  </p>
                  <p className="text-[11px] text-slate-500 mt-1">
                    In-person classroom & home tuition
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <span className="text-[11px] font-bold text-slate-500 uppercase block mb-1">
                    Online Teaching
                  </span>
                  <p className="font-semibold text-navy-950 text-sm">
                    8 Years
                  </p>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Live digital instruction for India & abroad
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Classes Handled & Subjects Taught */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-soft-sm p-6 sm:p-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-700">
                <BookOpen className="w-4 h-4 text-brand-600" />
                <span>Classes Handled & Subjects Taught</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {classCategories.map((cat, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl border ${cat.color}`}
                  >
                    <h4 className="font-bold text-xs uppercase tracking-wider mb-2">
                      {cat.category}
                    </h4>
                    {cat.subGroups ? (
                      /* Render sub-grouped layout for Card 3 */
                      <div className="space-y-2.5">
                        {cat.subGroups.map((group, gi) => (
                          <div key={gi}>
                            <p className="text-[10px] font-bold uppercase tracking-wider opacity-60 mb-1">
                              {group.label}
                            </p>
                            <div className="space-y-1">
                              {group.items.map((item, i) => (
                                <div key={i} className="flex items-center gap-2">
                                  <CheckCircle2 className="w-3 h-3 shrink-0 opacity-70" />
                                  <span className="text-xs font-medium">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      /* Flat item list */
                      <div className="space-y-1">
                        {cat.items.map((item, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 shrink-0 opacity-70" />
                            <span className="text-xs font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Board & Curriculum Support */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-soft-sm p-6 sm:p-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-700">
                <Globe2 className="w-4 h-4 text-brand-600" />
                <span>Board & Curriculum Support</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Indian School Curriculum */}
                <div>
                  <p className="text-[11px] font-bold text-slate-500 uppercase mb-2">
                    Indian School Curriculum
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {indianBoards.map((board, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200"
                      >
                        {board}
                      </span>
                    ))}
                  </div>
                </div>

                {/* International Curriculum */}
                <div>
                  <p className="text-[11px] font-bold text-slate-500 uppercase mb-2">
                    International Curriculum
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {internationalCurricula.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* International Exams */}
                <div>
                  <p className="text-[11px] font-bold text-slate-500 uppercase mb-2">
                    International Exams
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {internationalExams.map((exam, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200"
                      >
                        {exam}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
