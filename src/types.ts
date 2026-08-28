export type Language = 'bn' | 'en';

export interface ServiceItem {
  id: string;
  title: string;
  titleEn: string;
  shortDesc: string;
  shortDescEn: string;
  fullDesc: string;
  fullDescEn: string;
  icon: string;
  category: 'development' | 'design' | 'marketing' | 'ecommerce';
  features: string[];
  featuresEn: string[];
  deliverables: string[];
  deliverablesEn: string[];
  startingPrice: string;
  startingPriceEn: string;
  deliveryTime: string;
  deliveryTimeEn: string;
  popular?: boolean;
}

export interface PortfolioItem {
  id: string;
  title: string;
  titleEn: string;
  category: 'web' | 'app' | 'ecommerce' | 'branding' | 'uiux';
  categoryLabel: string;
  categoryLabelEn: string;
  image: string;
  gallery?: string[];
  client: string;
  clientEn: string;
  year: string;
  yearEn: string;
  summary: string;
  summaryEn: string;
  challenge: string;
  challengeEn: string;
  solution: string;
  solutionEn: string;
  results: {
    metric: string;
    metricEn: string;
    label: string;
    labelEn: string;
  }[];
  techStack: string[];
  liveUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  nameEn: string;
  role: string;
  roleEn: string;
  company: string;
  companyEn: string;
  avatar: string;
  comment: string;
  commentEn: string;
  rating: number;
  projectType: string;
  projectTypeEn: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  nameEn: string;
  price: string;
  priceEn: string;
  period: string;
  periodEn: string;
  description: string;
  descriptionEn: string;
  badge?: string;
  badgeEn?: string;
  popular?: boolean;
  features: string[];
  featuresEn: string[];
}

export interface AgencyInfo {
  name: string;
  taglineBn: string;
  taglineEn: string;
  whatsappNumber: string; // international format e.g. "8801782416596"
  displayPhone: string;
  email: string;
  hqAddressBn: string;
  hqAddressEn: string;
  addressBn: string;
  addressEn: string;
  officeHoursBn: string;
  officeHoursEn: string;
  googleMapEmbedUrl: string;
  googleMapDirectUrl: string;
}

export interface ContactFormData {
  name: string;
  whatsapp: string;
  email: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
}
