import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TeachingStrip } from './components/TeachingStrip';
import { AboutProfessor } from './components/AboutProfessor';
import { Features } from './components/Features';
import { TuitionOptions } from './components/TuitionOptions';
import { FeedbackSection } from './components/FeedbackSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';

export const App: React.FC = () => {
  const handleScrollToContact = () => {
    const elem = document.querySelector('#contact');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fafcff] text-slate-800 flex flex-col selection:bg-brand-600 selection:text-white pb-16 md:pb-0">
      {/* 1. Sticky Navigation */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="flex-grow">
        {/* 2. Hero Section (#home) */}
        <Hero onOpenDemo={handleScrollToContact} />

        {/* 2b. Teaching Promise Strip — immediately below hero */}
        <TeachingStrip />

        {/* 3. About Professor Section (#about) */}
        <AboutProfessor onOpenDemo={handleScrollToContact} />

        {/* 4. Professional Features Section (#features) */}
        <Features onOpenDemo={handleScrollToContact} />

        {/* 5. Tuition Categories Section (#tuition-categories) — with integrated enquiry form */}
        <TuitionOptions />

        {/* 6. Parent & Student Feedback (#feedback) */}
        <FeedbackSection />

        {/* 7. Contact Professor (#contact) */}
        <ContactSection onOpenDemo={handleScrollToContact} />
      </main>

      {/* 8. Footer */}
      <Footer />

      {/* 9. Mobile Sticky Action Bar */}
      <MobileQuickBar onOpenDemoModal={handleScrollToContact} />
    </div>
  );
};

export default App;
