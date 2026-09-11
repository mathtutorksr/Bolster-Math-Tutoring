import React, { useState, useRef } from 'react';
import { 
  Wifi, 
  MapPin, 
  Globe2, 
  Clock, 
  Check, 
  Sparkles,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  X,
  FileText,
  Award,
  Send,
  PhoneCall
} from 'lucide-react';
import { CONFIG, WHATSAPP_MESSAGES } from '../data/config';

type CategoryKey = 'online' | 'offline' | 'international' | null;

export const TuitionOptions: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<CategoryKey>(null);
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const enquiryFormRef = useRef<HTMLDivElement>(null);

  /* ── Enquiry Form State ── */
  const [formCategory, setFormCategory] = useState('Online Tuition — India');
  const [studentName, setStudentName] = useState('');
  const [parentName, setParentName] = useState('');
  const [gradeClass, setGradeClass] = useState('Grade 10');
  const [boardCurriculum, setBoardCurriculum] = useState('CBSE');
  const [programExam, setProgramExam] = useState('School Mathematics');
  const [country, setCountry] = useState('');
  const [preferredTiming, setPreferredTiming] = useState('');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const toggleCategory = (key: CategoryKey) => {
    setExpandedCategory(prev => (prev === key ? null : key));
  };

  const openEnquiryForm = (category: string) => {
    setFormCategory(category);
    setShowEnquiryForm(true);
    setTimeout(() => {
      enquiryFormRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  /* ── Program/Exam options based on category ── */
  const getProgramOptions = () => {
    if (formCategory === 'International Tuition — Abroad') {
      return ['General Mathematics', 'PSAT', 'Digital SAT', 'ACT', 'AMC', 'IB', 'AP', 'IGCSE'];
    }
    return ['School Mathematics', 'Intermediate Mathematics', 'JEE Mathematics', 'EAMCET Mathematics'];
  };

  const getGradeOptions = () => {
    if (formCategory === 'International Tuition — Abroad') {
      return ['Grade 5', 'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12', 'Other'];
    }
    return ['Grade 5', 'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Class 11 / Intermediate 1st Year', 'Class 12 / Intermediate 2nd Year', 'JEE Preparation', 'EAMCET Preparation', 'Other'];
  };

  const getBoardOptions = () => {
    if (formCategory === 'International Tuition — Abroad') {
      return ['IB', 'AP', 'IGCSE', 'US High School', 'UK Curriculum', 'Other'];
    }
    return ['CBSE', 'ICSE', 'State Board', 'Other'];
  };

  /* ── Form submission → WhatsApp ── */
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim() || !gradeClass.trim()) return;

    let text = `Hello Professor, I am interested in Mathematics Tuition.\n`;
    text += `Tuition Category: ${formCategory}\n`;
    text += `Student Name: ${studentName.trim()}\n`;
    if (parentName.trim()) text += `Parent Name: ${parentName.trim()}\n`;
    text += `Grade / Class: ${gradeClass}\n`;
    text += `Board / Curriculum: ${boardCurriculum}\n`;
    text += `Program / Examination: ${programExam}\n`;
    if (country.trim()) text += `Country / Location: ${country.trim()}\n`;
    if (preferredTiming.trim()) text += `Preferred Timing: ${preferredTiming.trim()}\n`;
    if (message.trim()) text += `Message: ${message.trim()}\n`;
    text += `I would like to know about availability, schedule, and fees.`;

    const whatsappUrl = `https://wa.me/917337265154?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setFormSubmitted(true);
  };

  return (
    <section id="tuition-categories" className="py-20 md:py-28 bg-[#fafcff] relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ──────────────── Section Header ──────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-800 text-xs font-semibold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            <span>Choose Your Learning Mode</span>
          </div>
          
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy-950 tracking-tight">
            Tuition Categories
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Select a tuition category below and click "View Details" to see complete scheduling, pricing, and class information.
          </p>
        </div>

        {/* ──────────────── 3 Category Cards ──────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          
          {/* Card 1: Online Tuition — India */}
          <div 
            onClick={() => toggleCategory('online')}
            className={`p-6 rounded-3xl cursor-pointer transition-all duration-300 flex flex-col justify-between border ${
              expandedCategory === 'online'
                ? 'bg-white border-brand-500 shadow-soft-lg ring-2 ring-brand-200'
                : 'bg-white border-slate-200 shadow-soft-sm hover:border-brand-300 hover:shadow-soft-md'
            }`}
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="p-3 rounded-2xl bg-brand-50 text-brand-600 border border-brand-200">
                  <Wifi className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider bg-brand-50 text-brand-800 px-2.5 py-1 rounded-full border border-brand-200">
                  Monthly
                </span>
              </div>

              <h3 className="font-display font-bold text-lg text-navy-950 mb-1.5">
                Online Tuition — India
              </h3>
              <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                Live interactive Mathematics classes for students across India with digital screen guidance and doubt clearing.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-brand-700">
                {expandedCategory === 'online' ? 'Hide Details' : 'View Details'}
              </span>
              {expandedCategory === 'online' ? (
                <ChevronUp className="w-4 h-4 text-brand-700" />
              ) : (
                <ChevronDown className="w-4 h-4 text-brand-700" />
              )}
            </div>
          </div>

          {/* Card 2: Offline Tuition — India */}
          <div 
            onClick={() => toggleCategory('offline')}
            className={`p-6 rounded-3xl cursor-pointer transition-all duration-300 flex flex-col justify-between border ${
              expandedCategory === 'offline'
                ? 'bg-white border-navy-900 shadow-soft-lg ring-2 ring-navy-200'
                : 'bg-white border-slate-200 shadow-soft-sm hover:border-navy-300 hover:shadow-soft-md'
            }`}
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="p-3 rounded-2xl bg-navy-50 text-navy-800 border border-navy-200">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider bg-navy-50 text-navy-800 px-2.5 py-1 rounded-full border border-navy-200">
                  Monthly
                </span>
              </div>

              <h3 className="font-display font-bold text-lg text-navy-950 mb-1.5">
                Offline Tuition — India
              </h3>
              <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                In-person Mathematics tuition with personalized face-to-face instruction and focused attention.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-navy-900">
                {expandedCategory === 'offline' ? 'Hide Details' : 'View Details'}
              </span>
              {expandedCategory === 'offline' ? (
                <ChevronUp className="w-4 h-4 text-navy-900" />
              ) : (
                <ChevronDown className="w-4 h-4 text-navy-900" />
              )}
            </div>
          </div>

          {/* Card 3: International Tuition — Abroad */}
          <div 
            onClick={() => toggleCategory('international')}
            className={`p-6 rounded-3xl cursor-pointer transition-all duration-300 flex flex-col justify-between border ${
              expandedCategory === 'international'
                ? 'bg-white border-emerald-600 shadow-soft-lg ring-2 ring-emerald-200'
                : 'bg-white border-slate-200 shadow-soft-sm hover:border-emerald-300 hover:shadow-soft-md'
            }`}
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <Globe2 className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-full border border-emerald-200">
                  Hourly
                </span>
              </div>

              <h3 className="font-display font-bold text-lg text-navy-950 mb-1.5">
                International Tuition — Abroad
              </h3>
              <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                Live online Mathematics tutoring for international curricula and competitive examinations.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-700">
                {expandedCategory === 'international' ? 'Hide Details' : 'View Details'}
              </span>
              {expandedCategory === 'international' ? (
                <ChevronUp className="w-4 h-4 text-emerald-700" />
              ) : (
                <ChevronDown className="w-4 h-4 text-emerald-700" />
              )}
            </div>
          </div>

        </div>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* EXPANDED DETAIL PANELS (ONLY SHOWN AFTER CLICKING VIEW DETAILS) */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        
        {/* ──── ONLINE TUITION — INDIA ──── */}
        {expandedCategory === 'online' && (
          <div className="bg-white rounded-3xl border-2 border-brand-500 shadow-soft-xl p-6 sm:p-8 lg:p-10 transition-all animate-fadeIn relative mb-8">
            <button
              onClick={() => setExpandedCategory(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-slate-200">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
                  Pan-India Interactive Live Classes
                </span>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-navy-950 mt-2">
                  Online Tuition — India
                </h3>
                <p className="text-sm text-slate-600 mt-0.5">
                  Live interactive Mathematics classes for students across India with continuous digital screen guidance, concept explanation, problem solving, and doubt clearing.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-brand-50/80 border border-brand-200 text-left md:text-right shrink-0">
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-800 block">
                  Pricing Structure
                </span>
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-navy-950 font-mono">
                  Monthly Fee
                </div>
                <span className="text-[11px] text-slate-500 block">
                  Fee configured by grade & competitive course
                </span>
              </div>
            </div>

            {/* Detail Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-navy-900">
                  <Clock className="w-4 h-4 text-brand-600" />
                  <span>Class Frequency</span>
                </div>
                <p className="font-bold text-sm text-navy-950">
                  2 Classes per Week
                </p>
                <p className="text-xs text-slate-500">
                  Twice-weekly sessions ensure consistent learning, practice and progress monitoring.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-navy-900">
                  <Wifi className="w-4 h-4 text-brand-600" />
                  <span>Class Delivery</span>
                </div>
                <p className="font-bold text-sm text-navy-950">
                  Google Meet + OneNote Board
                </p>
                <p className="text-xs text-slate-500">
                  Interactive live classes via Google Meet with OneNote Board for a structured, classroom-like experience.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-navy-900">
                  <Sparkles className="w-4 h-4 text-brand-600" />
                  <span>Class Size</span>
                </div>
                <p className="font-bold text-sm text-navy-950">
                  1-to-1 or Max 5 Students
                </p>
                <p className="text-xs text-slate-500">
                  One-to-one teaching or small group sessions — never large impersonal batches.
                </p>
              </div>
            </div>

            {/* School Boards */}
            <div className="mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                School Boards Supported:
              </span>
              <div className="flex flex-wrap gap-2">
                {['CBSE', 'ICSE', 'State Boards'].map((board) => (
                  <span key={board} className="px-3 py-1 rounded-lg text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200">
                    {board}
                  </span>
                ))}
              </div>
            </div>

            {/* Inclusions */}
            <div className="mb-6 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Online Tuition Includes:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                {[
                  '2 live interactive classes every week',
                  'School curriculum alignment — follows student\'s textbook',
                  'Concept-based explanations (not formula memorization)',
                  '2 practice worksheets every week',
                  '1 monthly examination on covered topics',
                  'Monthly PPT progress report shared with parents',
                  'Regular doubt clearing',
                  'Preferred days & timings considered for scheduling',
                  'Board exam & competitive entrance preparation',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-3">
              <a
                href={`https://wa.me/917337265154?text=${encodeURIComponent(WHATSAPP_MESSAGES.onlineIndia)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-3 px-5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Connect with Professor</span>
              </a>

              <button
                type="button"
                onClick={() => openEnquiryForm('Online Tuition — India')}
                className="inline-flex items-center gap-2 py-3 px-5 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors"
              >
                <FileText className="w-4 h-4 text-slate-500" />
                <span>Fill Enquiry Form</span>
              </button>
            </div>
          </div>
        )}

        {/* ──── OFFLINE TUITION — INDIA ──── */}
        {expandedCategory === 'offline' && (
          <div className="bg-white rounded-3xl border-2 border-navy-900 shadow-soft-xl p-6 sm:p-8 lg:p-10 transition-all animate-fadeIn relative mb-8">
            <button
              onClick={() => setExpandedCategory(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-slate-200">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-navy-900 bg-navy-50 px-3 py-1 rounded-full border border-navy-200">
                  In-Person Local Tuition
                </span>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-navy-950 mt-2">
                  Offline Tuition — India
                </h3>
                <p className="text-sm text-slate-600 mt-0.5">
                  Offline Mathematics Tuition is available through either home-visit sessions or sessions at the professor's home, depending on location and availability.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-navy-50 border border-navy-200 text-left md:text-right shrink-0">
                <span className="text-[11px] font-bold uppercase tracking-wider text-navy-800 block">
                  Pricing Structure
                </span>
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-navy-950 font-mono">
                  Monthly Fee
                </div>
                <span className="text-[11px] text-slate-500 block">
                  Fee configured by grade/class and requirements
                </span>
              </div>
            </div>

            {/* Option A / Option B */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
              <div className="p-4 rounded-2xl bg-navy-50 border border-navy-200 space-y-1">
                <p className="text-xs font-bold text-navy-900 uppercase tracking-wider">Option A</p>
                <p className="font-bold text-sm text-navy-950">Teacher Visits Student's Home</p>
                <p className="text-xs text-navy-700">Professor travels to the student's home for in-person teaching. Subject to local area and distance.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <p className="text-xs font-bold text-navy-900 uppercase tracking-wider">Option B</p>
                <p className="font-bold text-sm text-navy-950">Student Comes to Professor's Home</p>
                <p className="text-xs text-slate-600">Sessions conducted at the professor's home in Nizampet, Hyderabad, subject to availability.</p>
              </div>
            </div>

            {/* Detail Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-950 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold">
                  <Clock className="w-4 h-4 text-amber-600" />
                  <span>Standard Timing</span>
                </div>
                <p className="font-bold text-sm text-navy-950">
                  5:00 PM – 7:00 PM
                </p>
                <p className="text-xs text-amber-900">
                  Preferred days & timings considered when scheduling.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-navy-900">
                  <Award className="w-4 h-4 text-navy-700" />
                  <span>Class Frequency</span>
                </div>
                <p className="font-bold text-sm text-navy-950">
                  2 Classes per Week
                </p>
                <p className="text-xs text-slate-500">
                  Consistent twice-weekly schedule for steady academic progress.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-navy-900">
                  <MapPin className="w-4 h-4 text-navy-700" />
                  <span>Location</span>
                </div>
                <p className="font-bold text-sm text-navy-950 leading-tight">
                  Thirumala Nagar, Nizampet<br />Hyderabad – 500090
                </p>
                <p className="text-xs text-slate-500">
                  Available for local & surrounding areas.
                </p>
              </div>
            </div>

            {/* Levels & Boards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Classes & Levels:
                </span>
                <div className="flex flex-wrap gap-2">
                  {['Grades 5–10', 'Classes 11 & 12 / Intermediate', 'JEE Mathematics', 'EAMCET Mathematics'].map((level) => (
                    <span key={level} className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200">
                      {level}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  School Boards:
                </span>
                <div className="flex flex-wrap gap-2">
                  {['CBSE', 'ICSE', 'State Boards'].map((board) => (
                    <span key={board} className="px-3 py-1 rounded-lg text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200">
                      {board}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Inclusions */}
            <div className="mb-6 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Offline Tuition Includes:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                {[
                  'Personalised face-to-face instruction',
                  'School curriculum alignment — follows student\'s textbook',
                  'Concept-based explanations (not formula memorization)',
                  '2 practice worksheets every week',
                  '1 monthly examination on covered topics',
                  'Monthly PPT progress report shared with parents',
                  'Regular doubt clearing & problem-solving practice',
                  'Preferred days & timings considered for scheduling',
                  '1-to-1 or small group (max 5 students)',
                  'Board exam & JEE/EAMCET preparation where applicable',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-3">
              <a
                href={`https://wa.me/917337265154?text=${encodeURIComponent(WHATSAPP_MESSAGES.offlineIndia)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-3 px-5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Connect with Professor</span>
              </a>

              <button
                type="button"
                onClick={() => openEnquiryForm('Offline Tuition — India')}
                className="inline-flex items-center gap-2 py-3 px-5 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors"
              >
                <FileText className="w-4 h-4 text-slate-500" />
                <span>Fill Enquiry Form</span>
              </button>
            </div>
          </div>
        )}

        {/* ──── INTERNATIONAL TUITION — ABROAD ──── */}
        {expandedCategory === 'international' && (
          <div className="bg-white rounded-3xl border-2 border-emerald-600 shadow-soft-xl p-6 sm:p-8 lg:p-10 transition-all animate-fadeIn relative mb-8">
            <button
              onClick={() => setExpandedCategory(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-slate-200">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  International Students
                </span>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-navy-950 mt-2">
                  International Tuition — Abroad
                </h3>
                <p className="text-sm text-slate-600 mt-0.5">
                  Live online Mathematics tutoring for students following international curricula and preparing for international school and competitive examinations.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-left md:text-right shrink-0">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-900 block">
                  Pricing Structure
                </span>
                <div className="text-2xl sm:text-3xl font-display font-extrabold text-navy-950 font-mono">
                  Hourly Fee
                </div>
                <span className="text-[11px] text-emerald-800 font-semibold block">
                  Rate discussed directly with the professor
                </span>
              </div>
            </div>

            {/* Detail Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-navy-900">
                  <Award className="w-4 h-4 text-emerald-600" />
                  <span>Teaching Experience</span>
                </div>
                <p className="font-bold text-sm text-navy-950">
                  8 Years of Online Teaching
                </p>
                <p className="text-xs text-slate-500">
                  Dedicated experience teaching international students across multiple countries.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-navy-900">
                  <Wifi className="w-4 h-4 text-emerald-600" />
                  <span>Class Format</span>
                </div>
                <p className="font-bold text-sm text-navy-950">
                  Live Interactive Online
                </p>
                <p className="text-xs text-slate-500">
                  Digital screen guidance, real-time derivations, problem-solving, doubt clearing & exam-oriented practice.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-navy-900">
                  <Clock className="w-4 h-4 text-emerald-600" />
                  <span>Class Frequency</span>
                </div>
                <p className="font-bold text-sm text-navy-950">
                  Flexible Scheduling
                </p>
                <p className="text-xs text-slate-500">
                  Frequency discussed based on student requirements, examination timeline, and availability.
                </p>
              </div>
            </div>

            {/* Programs & Exams — Visually Organized */}
            <div className="mb-6 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Programs & Examinations:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200">
                  <h4 className="text-[11px] font-bold text-emerald-900 uppercase tracking-wider mb-2">
                    International School Curricula
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {['IB', 'AP', 'IGCSE'].map((item) => (
                      <span key={item} className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white text-emerald-800 border border-emerald-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200">
                  <h4 className="text-[11px] font-bold text-amber-900 uppercase tracking-wider mb-2">
                    Standardized / Competitive Exams
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {['PSAT', 'Digital SAT', 'ACT', 'AMC'].map((item) => (
                      <span key={item} className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white text-amber-800 border border-amber-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200">
                  <h4 className="text-[11px] font-bold text-blue-900 uppercase tracking-wider mb-2">
                    General
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white text-blue-800 border border-blue-300">
                      General Mathematics
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Class Format Inclusions */}
            <div className="mb-6 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                International Tuition Includes:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                {[
                  'Live interactive online classes via Google Meet + OneNote Board',
                  'Curriculum-aligned concept-based teaching',
                  'Twice-weekly practice worksheets',
                  'Monthly examination on covered topics',
                  'Monthly PPT progress report shared with parents',
                  'Problem-solving & doubt clearing',
                  'Past paper practice & exam-oriented preparation',
                  'Preferred days & timings considered for scheduling',
                  '1-to-1 or small group (max 5 students)',
                  'Country & time-zone aware scheduling',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-3">
              <a
                href={`https://wa.me/917337265154?text=${encodeURIComponent(WHATSAPP_MESSAGES.international)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-3 px-5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Connect with Professor</span>
              </a>

              <button
                type="button"
                onClick={() => openEnquiryForm('International Tuition — Abroad')}
                className="inline-flex items-center gap-2 py-3 px-5 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors"
              >
                <FileText className="w-4 h-4 text-slate-500" />
                <span>Fill Enquiry Form</span>
              </button>
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* ENQUIRY FORM (INSIDE TUITION CATEGORIES SECTION)              */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        
        <div ref={enquiryFormRef} id="enquiry-form">
          {showEnquiryForm && (
            <div className="bg-[#fafcff] rounded-3xl border border-slate-200/90 shadow-soft-lg p-6 sm:p-8 md:p-10 relative overflow-hidden animate-fadeIn">
              
              {/* Subtle Top Accent */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-600 via-amber-400 to-navy-900" />

              <button
                onClick={() => { setShowEnquiryForm(false); setFormSubmitted(false); }}
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
                aria-label="Close Form"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Form Header */}
              <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-navy-950">
                  Fill Enquiry Form
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Fill out the details below. A personalized WhatsApp message will be generated automatically for you.
                </p>
              </div>

              {formSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-navy-950">
                    Enquiry Generated Successfully!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    WhatsApp has been launched with your personalized inquiry to the professor (+91 73372 65154).
                  </p>
                  <div className="pt-3 flex flex-wrap justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => setFormSubmitted(false)}
                      className="px-5 py-2.5 rounded-xl text-xs font-bold text-navy-900 bg-slate-100 hover:bg-slate-200 transition-colors"
                    >
                      Edit Enquiry Details
                    </button>
                    <a
                      href={`https://wa.me/917337265154?text=${encodeURIComponent("Hello Professor, I would like to follow up on my mathematics tuition inquiry.")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors inline-flex items-center gap-2 shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Re-open WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="max-w-3xl mx-auto space-y-5">
                  
                  {/* Row 1: Tuition Category */}
                  <div>
                    <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                      Tuition Category *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {[
                        { label: 'Online Tuition — India', value: 'Online Tuition — India' },
                        { label: 'Offline Tuition — India', value: 'Offline Tuition — India' },
                        { label: 'International — Abroad', value: 'International Tuition — Abroad' },
                      ].map((opt) => (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => {
                            setFormCategory(opt.value);
                            setProgramExam(opt.value.includes('International') ? 'General Mathematics' : 'School Mathematics');
                            setBoardCurriculum(opt.value.includes('International') ? 'IB' : 'CBSE');
                          }}
                          className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all border text-center ${
                            formCategory === opt.value
                              ? 'bg-navy-950 text-white border-navy-950 shadow-xs'
                              : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Row 2: Student Name & Parent Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                        Student Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        placeholder="Enter student's full name"
                        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all shadow-2xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                        Parent Name
                      </label>
                      <input
                        type="text"
                        value={parentName}
                        onChange={(e) => setParentName(e.target.value)}
                        placeholder="Enter parent / guardian name"
                        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all shadow-2xs"
                      />
                    </div>
                  </div>

                  {/* Row 3: Grade & Board */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                        Grade / Class *
                      </label>
                      <select
                        value={gradeClass}
                        onChange={(e) => setGradeClass(e.target.value)}
                        required
                        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all shadow-2xs"
                      >
                        {getGradeOptions().map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                        Board / Curriculum
                      </label>
                      <select
                        value={boardCurriculum}
                        onChange={(e) => setBoardCurriculum(e.target.value)}
                        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all shadow-2xs"
                      >
                        {getBoardOptions().map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Program/Exam & Country/Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                        Program / Examination
                      </label>
                      <select
                        value={programExam}
                        onChange={(e) => setProgramExam(e.target.value)}
                        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all shadow-2xs"
                      >
                        {getProgramOptions().map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                        Country / Location
                      </label>
                      <input
                        type="text"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        placeholder="e.g. Hyderabad / USA / UAE"
                        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all shadow-2xs"
                      />
                    </div>
                  </div>

                  {/* Row 5: Preferred Timing */}
                  <div>
                    <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                      Preferred Timing
                    </label>
                    <input
                      type="text"
                      value={preferredTiming}
                      onChange={(e) => setPreferredTiming(e.target.value)}
                      placeholder="e.g. 5:00 PM – 7:00 PM / Evening / Weekends"
                      className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all shadow-2xs"
                    />
                  </div>

                  {/* Row 6: Message */}
                  <div>
                    <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                      Message (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share specific topics, upcoming exams, or learning requirements..."
                      className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all shadow-2xs"
                    />
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3.5">
                    <button
                      type="submit"
                      className="w-full sm:flex-1 py-4 px-6 rounded-xl font-display font-bold text-sm uppercase tracking-wider text-white bg-gradient-to-r from-brand-600 via-brand-700 to-navy-900 hover:from-brand-500 hover:to-navy-800 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-400" />
                      <span>Connect with Professor via WhatsApp</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <a
                      href="tel:+917337265154"
                      className="w-full sm:w-auto py-4 px-6 rounded-xl text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 transition-all flex items-center justify-center gap-2 shadow-2xs"
                    >
                      <PhoneCall className="w-4 h-4 text-navy-900" />
                      <span>Call Directly (+91 73372 65154)</span>
                    </a>
                  </div>

                  <div className="pt-2 flex items-center justify-center gap-2 text-xs text-slate-500">
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Automatically prepares your message and opens WhatsApp chat with +91 73372 65154</span>
                  </div>

                </form>
              )}

            </div>
          )}
        </div>

      </div>
    </section>
  );
};
