import React from 'react';
import { 
  PhoneCall, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  HelpCircle,
  ArrowRight
} from 'lucide-react';
import { CONFIG, getWhatsAppLink, getPhoneCallLink, getEmailLink } from '../data/config';

interface ContactSectionProps {
  onOpenDemo?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenDemo }) => {
  const consultationTopics = [
    "Grade & Learning Level Evaluation",
    "School & Board Syllabus Alignment",
    "Offline vs. Online Tuition Selection",
    "Batch Schedules & Time-Zone Planning",
    "Tuition Fee Structure (Monthly / Hourly)",
    "International Curriculum (IGCSE / IB / AP / A-Level)",
  ];

  const handleScrollToDemo = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenDemo) onOpenDemo();
    const elem = document.querySelector('#tuition-categories');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50 relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-navy-100 border border-navy-200 text-navy-900 text-xs font-semibold tracking-wide">
            <HelpCircle className="w-3.5 h-3.5 text-navy-700" />
            <span>Direct Contact</span>
          </div>
          
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy-950 tracking-tight">
            Contact Professor
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Have questions regarding curriculum, exam readiness, or schedule? Contact {CONFIG.professorName} directly to discuss your student's learning requirements.
          </p>
        </div>

        {/* 2-Column Layout: Left Consultation Scope, Right 4 Contact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Consultation Topics */}
          <div className="lg:col-span-5 bg-white p-7 sm:p-8 rounded-3xl border border-slate-200/90 shadow-soft-md space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-2.5 py-1 rounded border border-brand-100">
                Personalized Advice
              </span>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-navy-950 mt-2">
                Consult the Professor For:
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Every student has distinct learning needs. Direct consultation ensures the optimal study plan:
              </p>
            </div>

            <div className="space-y-2.5">
              {consultationTopics.map((topic, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 text-xs sm:text-sm font-medium text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{topic}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="#tuition-categories"
                onClick={handleScrollToDemo}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-brand-600 to-navy-900 hover:from-brand-500 hover:to-navy-800 transition-all shadow-sm group"
              >
                <span>Explore Tuition Categories</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: 4 Dedicated Clickable Contact Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Card 1: WhatsApp (Clickable) */}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-soft-sm hover:border-emerald-300 hover:shadow-soft-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                  WhatsApp Messaging
                </span>
                <h4 className="font-display font-bold text-lg text-navy-950 mt-1 mb-1 font-mono">
                  +91 73372 65154
                </h4>
                <p className="text-xs text-slate-500">
                  Fastest response for schedules, demo bookings, and course inquiries.
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-700">
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Card 2: Phone Call (Clickable) */}
            <a
              href={getPhoneCallLink()}
              className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-soft-sm hover:border-amber-300 hover:shadow-soft-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                  Direct Phone Call
                </span>
                <h4 className="font-display font-bold text-lg text-navy-950 mt-1 mb-1 font-mono">
                  {CONFIG.phoneNumber}
                </h4>
                <p className="text-xs text-slate-500">
                  Speak directly with the professor for urgent curriculum questions.
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-700">
                <span>Call Professor Now</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Card 3: Email (Clickable) */}
            <a
              href="mailto:mathtutorksr@gmail.com?subject=Mathematics%20Tuition%20Inquiry%20%E2%80%93%20BOLSTER%20Math%20Tutoring"
              className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-soft-sm hover:border-sky-300 hover:shadow-soft-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 text-sky-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-sky-800">
                  Email Us
                </span>
                <h4 className="font-display font-bold text-sm sm:text-base text-navy-950 mt-1 mb-1 font-mono break-all">
                  mathtutorksr@gmail.com
                </h4>
                <p className="text-xs text-slate-500">
                  Send school syllabi, exam papers, or questions. We respond within 24 hours.
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-sky-700">
                <span>Send Email</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Card 4: Offline Location & Hours */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-soft-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-navy-50 border border-navy-200 text-navy-700 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-navy-800">
                  Offline Tuition Location
                </span>
                <h4 className="font-display font-bold text-sm sm:text-base text-navy-950 mt-1 mb-1">
                  Thirumala Nagar, Nizampet<br />
                  Hyderabad – 500090
                </h4>
                <div className="flex items-center gap-1.5 text-xs text-slate-600 mt-2">
                  <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>Standard Hours: {CONFIG.standardOfflineTiming}</span>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] text-slate-400">
                Local & surrounding area. Availability subject to schedule.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
