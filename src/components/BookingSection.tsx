import React, { useState, useEffect } from 'react';
import { MessageCircle, PhoneCall, CheckCircle2, Send, UserCheck, HelpCircle } from 'lucide-react';
import { getPhoneCallLink } from '../data/config';

interface BookingSectionProps {
  selectedMode?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ selectedMode = 'Online — India' }) => {
  const [studentName, setStudentName] = useState('');
  const [parentName, setParentName] = useState('');
  const [gradeClass, setGradeClass] = useState('Grade 10');
  const [tuitionMode, setTuitionMode] = useState('Online — India');
  const [location, setLocation] = useState('');
  const [preferredTiming, setPreferredTiming] = useState('5:00 PM – 7:00 PM');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedMode) {
      setTuitionMode(selectedMode);
    }
  }, [selectedMode]);

  // Contextual dynamic helper banner based on selected mode or grade
  const getContextualAdvice = () => {
    if (gradeClass.includes('JEE')) {
      return "Preparing for JEE Mathematics? Discuss your preparation needs, current level, and preferred schedule directly with the professor.";
    }
    if (tuitionMode === 'International / Abroad') {
      return "International students can enquire about flexible hourly Mathematics sessions based on their requirements and availability.";
    }
    if (tuitionMode.includes('Professor visits')) {
      return "Looking for personalized in-home Mathematics tuition? Check local area feasibility and 5 PM – 7 PM slot availability with the professor.";
    }
    return "Looking for personalized Mathematics support for your child? Connect with the professor to discuss the student's current level, syllabus, and learning requirements.";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!studentName.trim() || !gradeClass.trim() || !tuitionMode.trim()) {
      return;
    }

    // Build the clean, personalized WhatsApp message
    let text = `Hello Professor, I am interested in Mathematics Tuition.\n`;
    text += `Student Name: ${studentName.trim()}\n`;
    if (parentName.trim()) {
      text += `Parent Name: ${parentName.trim()}\n`;
    }
    text += `Grade / Class: ${gradeClass.trim()}\n`;
    text += `Preferred Mode: ${tuitionMode.trim()}\n`;
    if (location.trim()) {
      text += `Location: ${location.trim()}\n`;
    }
    if (preferredTiming.trim()) {
      text += `Preferred Timing: ${preferredTiming.trim()}\n`;
    }
    if (message.trim()) {
      text += `Message: ${message.trim()}\n`;
    }
    text += `I would like to know about availability, schedule, and fees.`;

    const whatsappUrl = `https://wa.me/917337265154?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <section id="book-demo" className="py-20 md:py-28 bg-white relative border-t border-slate-200/80">
      <span id="connect" className="absolute -top-20" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-800 text-xs font-semibold tracking-wide uppercase">
            <UserCheck className="w-3.5 h-3.5 text-brand-600" />
            <span>Direct Academic Advisory</span>
          </div>
          
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy-950 tracking-tight">
            Connect with Professor
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Fill out the inquiry form below to discuss syllabus needs, timing availability, and receive a direct response.
          </p>
        </div>

        {/* Dynamic Contextual Advice Box */}
        <div className="mb-6 p-4 rounded-2xl bg-brand-50/70 border border-brand-200 text-brand-950 flex items-start gap-3 shadow-2xs">
          <HelpCircle className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm font-medium leading-relaxed">
            {getContextualAdvice()}
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-[#fafcff] rounded-3xl border border-slate-200/90 shadow-soft-lg p-6 sm:p-8 md:p-10 relative overflow-hidden">
          
          {/* Subtle Top Accent */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-600 via-amber-400 to-navy-900" />

          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
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
                  onClick={() => setSubmitted(false)}
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
                  <span>Re-open WhatsApp (+91 73372 65154)</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Row 1: Student Name * & Parent Name */}
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

              {/* Row 2: Grade / Class * & Tuition Mode * */}
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
                    <option value="Grade 5">Grade 5</option>
                    <option value="Grade 6">Grade 6</option>
                    <option value="Grade 7">Grade 7</option>
                    <option value="Grade 8">Grade 8</option>
                    <option value="Grade 9">Grade 9</option>
                    <option value="Grade 10">Grade 10</option>
                    <option value="Class 11 / Intermediate 1st Year">Class 11 / Intermediate 1st Year</option>
                    <option value="Class 12 / Intermediate 2nd Year">Class 12 / Intermediate 2nd Year</option>
                    <option value="JEE Mathematics">JEE Mathematics</option>
                    <option value="EAMCET Mathematics">EAMCET Mathematics</option>
                    <option value="International (IGCSE / IB / AP / A-Level)">International (IGCSE / IB / AP / A-Level)</option>
                    <option value="Other Grade">Other Grade</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                    Tuition Mode *
                  </label>
                  <select
                    value={tuitionMode}
                    onChange={(e) => setTuitionMode(e.target.value)}
                    required
                    className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all shadow-2xs"
                  >
                    <option value="Online — India">Online — India (3 classes/week)</option>
                    <option value="Offline — Professor visits student's home">Offline — Professor visits student's home (5 PM – 7 PM)</option>
                    <option value="Offline — Student visits professor's home">Offline — Student visits professor's home (5 PM – 7 PM)</option>
                    <option value="International / Abroad">International / Abroad (1-on-1 Hourly)</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Location & Preferred Timing */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                    Location / City / Country
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Hyderabad / Local Area / Abroad"
                    className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all shadow-2xs"
                  />
                </div>

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
              </div>

              {/* Row 4: Message */}
              <div>
                <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                  Message / Learning Needs (Optional)
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share specific topics, upcoming exams, or curriculum syllabus..."
                  className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all shadow-2xs"
                />
              </div>

              {/* Submit CTA Button */}
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
                  href={getPhoneCallLink()}
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

      </div>
    </section>
  );
};
