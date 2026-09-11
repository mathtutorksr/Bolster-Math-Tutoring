import React from 'react';
import { MessageCircle, PhoneCall, Calendar } from 'lucide-react';
import { getWhatsAppLink, getPhoneCallLink } from '../data/config';

interface MobileQuickBarProps {
  onOpenDemoModal: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onOpenDemoModal }) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200 px-3 py-2 shadow-2xl">
      <div className="grid grid-cols-3 gap-2">
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2 px-1 text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-xl"
        >
          <MessageCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>WhatsApp</span>
        </a>

        <a
          href={getPhoneCallLink()}
          className="flex items-center justify-center gap-1.5 py-2 px-1 text-xs font-bold text-slate-800 bg-slate-100 border border-slate-200 rounded-xl"
        >
          <PhoneCall className="w-3.5 h-3.5 text-navy-800 shrink-0" />
          <span>Call Now</span>
        </a>

        <button
          onClick={onOpenDemoModal}
          className="flex items-center justify-center gap-1.5 py-2 px-1 text-xs font-bold text-white bg-gradient-to-r from-brand-600 to-navy-800 rounded-xl shadow-sm"
        >
          <Calendar className="w-3.5 h-3.5 shrink-0" />
          <span>Connect</span>
        </button>
      </div>
    </div>
  );
};
