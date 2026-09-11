export interface ContactConfig {
  siteName: string;
  professorName: string;
  professorTitle: string;
  qualification: string;
  offlineExperience: string;
  onlineExperience: string;
  teachingPhilosophy: string;
  whatsappNumber: string;
  phoneNumber: string;
  emailAddress: string;
  offlineLocationArea: string;
  standardOfflineTiming: string;
}

export type TuitionCategory = 'online_india' | 'offline_india' | 'international';

export interface TuitionSubOption {
  id: string;
  title: string;
  description: string;
}

export interface TuitionOptionItem {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  pricingType: 'monthly' | 'hourly';
  pricePlaceholder: string;
  frequency: string;
  scheduleWindow: string;
  highlights: string[];
  subOptions?: TuitionSubOption[];
  supportedCurriculumsOrLevels: string[];
  ctaText: string;
  isPopular?: boolean;
}
