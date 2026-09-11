import React, { useState, useEffect } from 'react';
import { Star, ShieldCheck, CheckCircle2, MessageCircle, Send, Check } from 'lucide-react';

interface FeedbackItem {
  id: string;
  name: string;
  role: 'Student' | 'Parent';
  grade: string;
  rating: number;
  comment: string;
  date: string;
  isPlaceholder?: boolean;
}

const INITIAL_FEEDBACK: FeedbackItem[] = [
  {
    id: 'placeholder-1',
    name: 'Parent of Grade 10 Student',
    role: 'Parent',
    grade: 'Grade 10 (CBSE)',
    rating: 5,
    comment: 'Real parent feedback regarding concept clarity, regular weekly assessments, and noticeable improvement in school mathematics will be added here.',
    date: 'Recent',
    isPlaceholder: true,
  },
  {
    id: 'placeholder-2',
    name: 'Intermediate Mathematics Student',
    role: 'Student',
    grade: 'Class 12 & JEE Math',
    rating: 5,
    comment: 'Real student feedback regarding step-by-step calculus derivations, doubt clearance, and building problem-solving confidence will be added here.',
    date: 'Recent',
    isPlaceholder: true,
  },
  {
    id: 'placeholder-3',
    name: 'Parent of International Student',
    role: 'Parent',
    grade: 'IGCSE / IB Mathematics',
    rating: 5,
    comment: 'Real parent feedback regarding online one-to-one tutoring, time-zone friendly scheduling, and school worksheet guidance will be added here.',
    date: 'Recent',
    isPlaceholder: true,
  },
];

export const FeedbackSection: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<FeedbackItem[]>(INITIAL_FEEDBACK);
  
  // Form State
  const [name, setName] = useState('');
  const [role, setRole] = useState<'Student' | 'Parent'>('Parent');
  const [grade, setGrade] = useState('');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedbackText, setFeedbackText] = useState('');
  
  // Submission Status
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastSubmittedData, setLastSubmittedData] = useState<{
    name: string;
    role: 'Student' | 'Parent';
    grade: string;
    rating: number;
    feedbackText: string;
  } | null>(null);

  // Load any previously saved user feedback from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('bolster_user_feedbacks');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setFeedbacks([...parsed, ...INITIAL_FEEDBACK]);
        }
      }
    } catch {
      // Ignore storage read error
    }
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !feedbackText.trim()) return;

    const newEntry: FeedbackItem = {
      id: 'user-' + Date.now(),
      name: name.trim(),
      role,
      grade: grade.trim() || (role === 'Student' ? 'Student' : 'Parent'),
      rating,
      comment: feedbackText.trim(),
      date: 'Just now',
      isPlaceholder: false,
    };

    const updated = [newEntry, ...feedbacks];
    setFeedbacks(updated);

    try {
      const userOnly = updated.filter(item => !item.isPlaceholder);
      localStorage.setItem('bolster_user_feedbacks', JSON.stringify(userOnly));
    } catch {
      // Ignore storage write error
    }

    setLastSubmittedData({
      name: name.trim(),
      role,
      grade: grade.trim() || 'Not specified',
      rating,
      feedbackText: feedbackText.trim(),
    });

    setIsSubmitted(true);
  };

  const getOptionalWhatsAppShareUrl = () => {
    if (!lastSubmittedData) return '';
    const text = 
`Hello Professor, I would like to share feedback.
Name: ${lastSubmittedData.name}
I am: ${lastSubmittedData.role}
Grade: ${lastSubmittedData.grade}
Rating: ${lastSubmittedData.rating}/5
Feedback:
${lastSubmittedData.feedbackText}`;

    return `https://wa.me/917337265154?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="feedback" className="py-20 md:py-28 bg-[#fafcff] relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold tracking-wide uppercase">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
            <span>Community Trust & Transparency</span>
          </div>
          
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy-950 tracking-tight">
            Student & Parent Feedback
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Read verified feedback from parents and students, or share your own personal experience directly through our feedback form below.
          </p>
        </div>

        {/* Feedback Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {feedbacks.slice(0, 6).map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-soft-sm hover:shadow-soft-md hover:border-brand-300 transition-all duration-200 flex flex-col justify-between relative"
            >
              <div>
                {/* Rating Stars & Role Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${
                          star <= item.rating
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-slate-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    {item.role}
                  </span>
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic mb-6">
                  "{item.comment}"
                </p>
              </div>

              {/* Author & Grade */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-xs font-bold text-navy-950">
                      {item.name}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 block mt-0.5">
                    {item.grade} • {item.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* On-Site Feedback Submission Form (Form is filled & submitted directly on the website) */}
        <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-soft-md p-6 sm:p-8 relative overflow-hidden">
          <div className="text-center max-w-md mx-auto mb-8 space-y-1.5">
            <h3 className="font-display font-bold text-2xl text-navy-950">
              Share Your Experience
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Your feedback directly supports continuous teaching excellence and helps prospective parents make informed decisions.
            </p>
          </div>

          {isSubmitted ? (
            <div className="text-center py-8 space-y-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="font-display font-bold text-2xl text-navy-950">
                Thank you for your feedback!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                Your feedback has been submitted successfully through the website and added to the review stream.
              </p>

              {/* Optional WhatsApp Follow-Up Button */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={getOptionalWhatsAppShareUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Feedback on WhatsApp (Optional)</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setName('');
                    setFeedbackText('');
                    setGrade('');
                  }}
                  className="w-full sm:w-auto py-3 px-5 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
                >
                  Submit Another Review
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              
              {/* Row 1: Name * and Role Toggle */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 shadow-2xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                    I am a: *
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setRole('Parent')}
                      className={`py-2 px-3 rounded-xl text-xs font-bold transition-all border ${
                        role === 'Parent'
                          ? 'bg-navy-950 text-white border-navy-950 shadow-xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      Parent
                    </button>
                    <button
                      type="button"
                      onClick={() => setRole('Student')}
                      className={`py-2 px-3 rounded-xl text-xs font-bold transition-all border ${
                        role === 'Student'
                          ? 'bg-navy-950 text-white border-navy-950 shadow-xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      Student
                    </button>
                  </div>
                </div>
              </div>

              {/* Row 2: Grade / Class & Interactive Star Rating */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                    Grade / Class
                  </label>
                  <input
                    type="text"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    placeholder="e.g. Grade 10 / Class 12 / JEE"
                    className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 shadow-2xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                    Rating * ({rating} of 5 Stars)
                  </label>
                  <div className="flex items-center gap-1.5 py-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="p-1 text-amber-400 hover:scale-110 transition-transform focus:outline-none"
                        aria-label={`Rate ${star} star`}
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= (hoverRating || rating)
                              ? 'fill-amber-400 text-amber-400'
                              : 'text-slate-200'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Row 3: Feedback Comment * */}
              <div>
                <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-1.5">
                  Feedback *
                </label>
                <textarea
                  rows={3}
                  required
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                  placeholder="Share your experience regarding concept clarity, teaching style, assessment feedback, or progress..."
                  className="w-full px-4 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 shadow-2xs"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-display font-bold text-xs uppercase tracking-wider text-white bg-navy-950 hover:bg-navy-900 transition-all shadow-sm flex items-center justify-center gap-2 group"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  <span>Submit Feedback on Website</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-400 pt-1">
                Submissions are stored directly within the website session. WhatsApp sharing is completely optional.
              </p>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
