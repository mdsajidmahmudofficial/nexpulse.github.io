import React from 'react';
import { 
  MessageCircle, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';
import { Language } from '../types';
import { NexPulseLogo } from './Logo';
import { openDirectWhatsAppWithSource } from '../utils/whatsappHelper';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppClick = () => {
    openDirectWhatsAppWithSource({
      source: 'Footer WhatsApp Quick Contact',
      lang,
    });
  };

  return (
    <footer 
      id="main-footer"
      className="bg-[#080D1A] border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-xs sm:text-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <NexPulseLogo />

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              {lang === 'bn' ? AGENCY_INFO.taglineBn : AGENCY_INFO.taglineEn}
            </p>

            {/* Behance & WhatsApp quick actions */}
            <div className="flex flex-col sm:flex-row items-start gap-2.5 pt-2">
              <button
                onClick={handleWhatsAppClick}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600/15 hover:bg-indigo-600/25 border border-indigo-500/30 text-indigo-300 text-xs font-bold transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-cyan-400" />
                <span>WhatsApp: {AGENCY_INFO.displayPhone}</span>
              </button>

              <a
                href={AGENCY_INFO.behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-750 border border-slate-700 text-slate-300 text-xs font-semibold hover:text-white transition-colors"
              >
                <span>Behance</span>
                <ExternalLink className="w-3 h-3 text-cyan-400" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {lang === 'bn' ? 'নেভিগেশন' : 'Navigation'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-cyan-400 transition-colors">
                  {lang === 'bn' ? 'হোম' : 'Home'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  {lang === 'bn' ? 'সার্ভিসসমূহ' : 'Services'}
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-cyan-400 transition-colors">
                  {lang === 'bn' ? 'পোর্টফোলিও' : 'Portfolio'}
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-cyan-400 transition-colors">
                  {lang === 'bn' ? 'প্রাইসিং প্যাকেজ' : 'Pricing Plans'}
                </a>
              </li>
              <li>
                <a href="#contact-whatsapp" className="hover:text-cyan-400 transition-colors">
                  {lang === 'bn' ? 'হোয়াটসঅ্যাপ ফর্ম' : 'WhatsApp Form'}
                </a>
              </li>
              <li>
                <a href="#location-map" className="hover:text-cyan-400 transition-colors">
                  {lang === 'bn' ? 'ম্যাপ লোকেশন' : 'Map Location'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {lang === 'bn' ? 'সার্ভিস ক্যাটাগরি' : 'Specialized Services'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  {lang === 'bn' ? 'ফুল-স্ট্যাক ওয়েব ডেভেলপমেন্ট' : 'Full-Stack Web Development'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  {lang === 'bn' ? 'ই-কমার্স ও পেমেন্ট গেটওয়ে' : 'E-commerce & Payment Gateway'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  {lang === 'bn' ? 'ইউআই/ইউএক্স ও ফিগমা ডিজাইন' : 'UI/UX & Product Design'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  {lang === 'bn' ? 'মোবাইল অ্যাপ (Flutter/React Native)' : 'Mobile App Development'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  {lang === 'bn' ? 'ডিজিটাল মার্কেটিং ও এসইও' : 'Digital Marketing & SEO'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Office (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {lang === 'bn' ? 'অফিস ও যোগাযোগ' : 'Headquarters & Info'}
            </h4>
            
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  {lang === 'bn' ? AGENCY_INFO.hqAddressBn : AGENCY_INFO.hqAddressEn}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`mailto:${AGENCY_INFO.email}`} className="hover:text-cyan-400 text-slate-300 truncate">
                  {AGENCY_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-indigo-400 shrink-0" />
                <a href="http://wa.me/+8801782416596" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 text-slate-300 font-mono">
                  {AGENCY_INFO.displayPhone}
                </a>
              </div>

              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-md border border-emerald-800/40">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{lang === 'bn' ? 'সার্ভিস শুরু ৳২০,০০০ থেকে' : 'Projects from $200'}</span>
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} NexPulse Agency. {lang === 'bn' ? 'সর্বস্বত্ব সংরক্ষিত।' : 'All rights reserved.'}
          </div>

          <div className="flex items-center gap-6">
            <span className="text-slate-400">
              Designed with precision • <a href={AGENCY_INFO.behanceUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Sajid Mahmud</a>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
