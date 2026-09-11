import type { TuitionOptionItem } from '../types';

/**
 * ============================================================================
 * Three Core Tuition Programs Data & Pricing Configuration
 * ============================================================================
 * All fee values use placeholders until exact amounts are configured.
 */

export const TUITION_OPTIONS: TuitionOptionItem[] = [
  {
    id: 'offline',
    badge: 'Local In-Person',
    title: 'Offline Tuition',
    subtitle: 'Personalized Mathematics Tuition in Your Local Area',
    pricingType: 'monthly',
    pricePlaceholder: '₹____ / month',
    frequency: 'Daily or Scheduled In-Person Sessions',
    scheduleWindow: '5:00 PM – 7:00 PM (Standard Window)',
    highlights: [
      'Direct face-to-face mentorship and handwriting problem review',
      'Continuous attention to student focus and working steps',
      'Immediate clearing of doubts and homework questions',
      'Structured weekly assessments & monthly tests',
      'Direct monthly in-person progress review with parents',
    ],
    subOptions: [
      {
        id: 'option-a',
        title: "Teacher Comes to Student's Home",
        description: 'Private 1-on-1 tutoring in the comfort and focus of your home (within local area limits).',
      },
      {
        id: 'option-b',
        title: "Student Comes to Professor's Home",
        description: 'Dedicated academic study environment with complete library of math reference texts.',
      },
    ],
    supportedCurriculumsOrLevels: [
      'Local Area & Surrounding Neighborhoods',
      'School Mathematics (Grades 5 – 10)',
      'High School & Intermediate (1st & 2nd Year)',
      'Boards: CBSE, ICSE, State Board',
    ],
    ctaText: 'Enquire for Offline Tuition',
  },
  {
    id: 'online_india',
    badge: 'Pan-India Interactive Live',
    title: 'Online Tuition – India',
    subtitle: 'Live Mathematics Classes for Students Across India',
    pricingType: 'monthly',
    pricePlaceholder: '₹____ / month',
    frequency: '2 classes per week',
    scheduleWindow: 'Flexible Weekday & Weekend Slots',
    isPopular: true,
    highlights: [
      'Live interactive digital tablet sessions with real-time derivation writing',
      'Personalized pacing suited for school & competitive exams',
      'Two weekly assessments + structured monthly examination',
      'Monthly parent progress discussion with performance PPT',
      'School worksheet assistance and deep doubt clarification',
    ],
    supportedCurriculumsOrLevels: [
      'School Mathematics (Grades 5 to 10)',
      'Intermediate Mathematics (1st & 2nd Year)',
      'JEE Mathematics (Foundation & Advanced)',
      'EAMCET Mathematics Preparation',
      'CBSE • ICSE • State Board',
    ],
    ctaText: 'Enquire for Online India',
  },
  {
    id: 'international',
    badge: 'Global One-to-One',
    title: 'International Online Tuition',
    subtitle: 'Personalized Mathematics Tuition for Students Abroad',
    pricingType: 'hourly',
    pricePlaceholder: '₹____ / hour',
    frequency: '3 classes per week',
    scheduleWindow: 'Coordinated across international time zones',
    highlights: [
      'Dedicated 1-on-1 tailored instruction matching international school syllabi',
      'Coordinated scheduling taking into account time zone differences',
      'Step-by-step preparation for mock exams, past papers & assessments',
      'Detailed monthly parent performance and competency reports',
      'Targeted worksheet and school assignment support',
    ],
    supportedCurriculumsOrLevels: [
      'USA, UK, Canada, UAE, Singapore, Australia & other countries',
      'IGCSE / GCSE Mathematics (Core & Extended)',
      'IB Mathematics (Analysis & Approaches, Applications)',
      'A-Level Mathematics',
      'Middle & High School (Grades 5 – 12)',
    ],
    ctaText: 'Enquire for International Tuition',
  },
];
