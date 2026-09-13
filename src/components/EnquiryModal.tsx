import React, { useState } from 'react';
import { X, MessageCircle, PhoneCall, Sparkles } from 'lucide-react';
import { CONFIG, getWhatsAppLink, getPhoneCallLink } from '../data/config';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTuitionMode?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  defaultTuitionMode = 'online_india',
}) => {
  const [studentName, setStudentName] = useState('');
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [tuitionMode, setTuitionMode] = useState(defaultTuitionMode);
  const [gradeClass, setGradeClass] = useState('Grade 10');
  const [boardCurriculum, setBoardCurriculum] = useState('CBSE');
  const [subject, setSubject] = useState('Mathematics');
  const [preferredDays, setPreferredDays] = useState('Weekdays');
  const [preferredTime, setPreferredTime] = useState('Evening');
  const [country, setCountry] = useState('India');
  const [timeZone, setTimeZone] = useState('IST (UTC+5:30)');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  // Generate WhatsApp pre-filled text
  const generateWhatsAppMessage = () => {
    let modeLabel = 'Online Tuition (India)';
    if (tuitionMode === 'offline') modeLabel = `Offline Tuition (${CONFIG.offlineLocationArea})`;
    if (tuitionMode === 'international') modeLabel = `International Online Tuition (${country}, ${timeZone})`;

    const text = 
`Hello Sir, I am interested in Mathematics tuition at ${CONFIG.siteName}.

Student Name: ${studentName || '[Student Name]'}
Parent Name: ${parentName || '[Parent Name]'}
Contact: ${phone || '[Contact Number]'}
Tuition Mode: ${modeLabel}
Class / Grade: ${gradeClass}
Board / Curriculum: ${boardCurriculum}
Subject: ${subject}
Preferred Days: ${preferredDays}
Preferred Time: ${preferredTime}
${message ? `Additional Note: ${message}` : ''}

Please let me know about scheduling a free demo class.`;

    return text;
  };

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = generateWhatsAppMessage();
    const url = getWhatsAppLink(msg);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className="fixed inset-0 z-[100] overflow-y-auto bg-navy-950/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 pt-16 sm:pt-20 pb-12 animate-fadeIn cursor-pointer"
      onClick={onClose}
    >
      <div 
        className="relative bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-slate-200 overflow-hidden cursor-default my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-brand-900 p-5 sm:p-6 text-white relative pr-16">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/35 active:bg-white/50 text-white border-2 border-white/40 shadow-lg backdrop-blur-md transition-all focus:outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer"
            aria-label="Close enquiry form"
            title="Close enquiry form"
          >
            <X className="w-5 h-5 text-white stroke-[2.5]" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-brand-500/30 text-amber-300 text-xs font-semibold mb-2 border border-brand-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Schedule Diagnostic Demo Class</span>
          </div>

          <h3 className="font-display font-bold text-2xl text-white">
            Book a Free Demo Session
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Personalized 1-on-1 interaction with {CONFIG.professorName} ({CONFIG.qualification}).
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleWhatsAppSend} className="p-5 sm:p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          
          {/* Tuition Mode Selection */}
          <div>
            <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
              Choose Tuition Mode
            </label>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <button
                type="button"
                onClick={() => setTuitionMode('offline')}
                className={`py-2 px-2 rounded-xl border text-center font-medium transition-all ${
                  tuitionMode === 'offline'
                    ? 'border-brand-600 bg-brand-50 text-brand-950 font-bold ring-1 ring-brand-500'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                Offline In-Person
              </button>
              <button
                type="button"
                onClick={() => setTuitionMode('online_india')}
                className={`py-2 px-2 rounded-xl border text-center font-medium transition-all ${
                  tuitionMode === 'online_india'
                    ? 'border-brand-600 bg-brand-50 text-brand-950 font-bold ring-1 ring-brand-500'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                Online (India)
              </button>
              <button
                type="button"
                onClick={() => setTuitionMode('international')}
                className={`py-2 px-2 rounded-xl border text-center font-medium transition-all ${
                  tuitionMode === 'international'
                    ? 'border-brand-600 bg-brand-50 text-brand-950 font-bold ring-1 ring-brand-500'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                International
              </button>
            </div>
          </div>

          {/* Student & Parent Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Student Name *
              </label>
              <input
                type="text"
                required
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="e.g. Rahul / Sara"
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Parent Name
              </label>
              <input
                type="text"
                value={parentName}
                onChange={(e) => setParentName(e.target.value)}
                placeholder="Parent / Guardian"
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
          </div>

          {/* Phone / WhatsApp Number */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Phone / WhatsApp Contact *
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. +91 98765 43210"
              className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
          </div>

          {/* Class & Board Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Class / Grade
              </label>
              <select
                value={gradeClass}
                onChange={(e) => setGradeClass(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
              >
                <option value="Grade 5">Grade 5</option>
                <option value="Grade 6">Grade 6</option>
                <option value="Grade 7">Grade 7</option>
                <option value="Grade 8">Grade 8</option>
                <option value="Grade 9">Grade 9</option>
                <option value="Grade 10">Grade 10</option>
                <option value="Grade 11 / Inter 1st Year">Grade 11 / Inter 1st Year</option>
                <option value="Grade 12 / Inter 2nd Year">Grade 12 / Inter 2nd Year</option>
                <option value="JEE Preparation">JEE Preparation</option>
                <option value="EAMCET Preparation">EAMCET Preparation</option>
                <option value="Other">Other Grade</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Board / Curriculum
              </label>
              <select
                value={boardCurriculum}
                onChange={(e) => setBoardCurriculum(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
              >
                <option value="CBSE">CBSE</option>
                <option value="ICSE">ICSE</option>
                <option value="State Board">State Board</option>
                <option value="IGCSE">IGCSE</option>
                <option value="GCSE">GCSE</option>
                <option value="IB">IB (International Baccalaureate)</option>
                <option value="A-Level">A-Level</option>
                <option value="US High School / AP">US High School / AP</option>
                <option value="Other">Other Curriculum</option>
              </select>
            </div>
          </div>

          {/* If International is selected: Country & TimeZone */}
          {tuitionMode === 'international' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 bg-emerald-50/70 rounded-xl border border-emerald-200">
              <div>
                <label className="block text-xs font-semibold text-emerald-950 mb-1">
                  Country
                </label>
                <input
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder="e.g. USA, UK, UAE, Singapore"
                  className="w-full px-3 py-2 text-xs rounded-lg border border-emerald-300 bg-white focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-emerald-950 mb-1">
                  Time Zone
                </label>
                <input
                  type="text"
                  value={timeZone}
                  onChange={(e) => setTimeZone(e.target.value)}
                  placeholder="e.g. EST, PST, GMT, GST"
                  className="w-full px-3 py-2 text-xs rounded-lg border border-emerald-300 bg-white focus:outline-none"
                />
              </div>
            </div>
          )}

          {/* Subject & Preferred Days/Time */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Subject Focus
              </label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
              >
                <option value="School Mathematics">School Mathematics</option>
                <option value="Intermediate Mathematics">Intermediate Mathematics</option>
                <option value="JEE Mathematics">JEE Mathematics</option>
                <option value="EAMCET Mathematics">EAMCET Mathematics</option>
                <option value="International Mathematics">International Mathematics</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Preferred Days
              </label>
              <select
                value={preferredDays}
                onChange={(e) => setPreferredDays(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
              >
                <option value="Weekdays (Mon-Fri)">Weekdays (Mon-Fri)</option>
                <option value="Weekends (Sat-Sun)">Weekends (Sat-Sun)</option>
                <option value="Both Flexible">Both Flexible</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Preferred Time
              </label>
              <select
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
              >
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="Evening (5 PM - 7 PM)">Evening (5 PM - 7 PM)</option>
                <option value="Custom Time">Custom Time</option>
              </select>
            </div>
          </div>

          {/* Optional Message */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Specific Learning Needs / Topics of Concern (Optional)
            </label>
            <textarea
              rows={2}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="e.g. Calculus doubts, Trigonometry basics, upcoming semester exam..."
              className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="submit"
              className="w-full sm:flex-1 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-700 shadow-md flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send Enquiry on WhatsApp</span>
            </button>

            <a
              href={getPhoneCallLink()}
              className="w-full sm:w-auto py-3 px-4 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 flex items-center justify-center gap-2 transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-navy-800" />
              <span>Call Now</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto py-3 px-4 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              aria-label="Close enquiry form"
            >
              <X className="w-4 h-4 text-slate-600" />
              <span>Close</span>
            </button>
          </div>

          <p className="text-[11px] text-center text-slate-400">
            Directly contacts {CONFIG.professorName} on WhatsApp. No payment required for demo coordination.
          </p>

        </form>
      </div>
    </div>
  );
};
