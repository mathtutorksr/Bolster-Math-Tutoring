import type { ContactConfig } from '../types';

/**
 * ============================================================================
 * BOLSTER Math Tutoring / BOLSTER Math Academy - Configuration
 * ============================================================================
 * Actual verified contact details:
 * WhatsApp: 917337265154
 * Phone: +91 73372 65154
 */

export const CONFIG: ContactConfig = {
  siteName: "BOLSTER Math Tutoring",
  
  // Professor Details
  professorName: "K. Srinivasa Rao (KSR)",
  professorTitle: "Mathematics Educator & Tutor",
  qualification: "M.Sc. in Mathematics",
  offlineExperience: "17 Years of Offline Teaching Experience",
  onlineExperience: "8 Years of Online Teaching Experience",
  teachingPhilosophy: "Fostering deep conceptual clarity, mathematical intuition, and rigorous problem-solving rather than rote memorization.",
  
  // Actual verified Contact Channels
  whatsappNumber: "917337265154",
  phoneNumber: "+91 73372 65154",
  emailAddress: "mathtutorksr@gmail.com",
  
  // Locations & Timings
  offlineLocationArea: "Thirumala Nagar, Nizampet, Hyderabad – 500090",
  standardOfflineTiming: "5:00 PM – 7:00 PM",
};

/**
 * Helper utility to generate standard WhatsApp click-to-chat links
 * Uses international format 917337265154
 */
export function getWhatsAppLink(customMessage?: string): string {
  const defaultText = "Hello Professor, I am interested in Mathematics Tuition. I would like to know more about the classes, schedule, and fees.";
  const text = customMessage ? customMessage : defaultText;
  return `https://wa.me/917337265154?text=${encodeURIComponent(text)}`;
}

/**
 * Specialized WhatsApp message generators based on user selection
 */
export const WHATSAPP_MESSAGES = {
  onlineIndia: "Hello Professor, I am interested in Online Mathematics Tuition. I would like to know more about the monthly fee, schedule, and admission process.",
  offlineIndia: "Hello Professor, I am interested in Offline Mathematics Tuition. I would like to know about availability, timing, monthly fee, and location.",
  international: "Hello Professor, I am interested in International Mathematics Tuition. I would like to know about hourly fees, availability, and class schedule.",
};

/**
 * Helper utility to generate Phone Call links
 */
export function getPhoneCallLink(): string {
  return `tel:+917337265154`;
}

/**
 * Helper utility to generate Email links
 */
export function getEmailLink(subject?: string): string {
  const email = CONFIG.emailAddress.trim();
  const sub = subject ? encodeURIComponent(subject) : encodeURIComponent(`Mathematics Tuition Inquiry – ${CONFIG.siteName}`);
  return `mailto:${email}?subject=${sub}`;
}
