import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  Menu, 
  X, 
  Globe, 
  ArrowUpRight,
  ExternalLink
} from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';
import { Language } from '../types';
import { NexPulseLogo } from './Logo';
import { openDirectWhatsAppWithSource } from '../utils/whatsappHelper';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', labelBn: 'সার্ভিসসমূহ', labelEn: 'Services' },
    { href: '#portfolio', labelBn: 'পোর্টফোলিও', labelEn: 'Portfolio' },
    { href: '#process', labelBn: 'কাজের ধাপ', labelEn: 'Process' },
    { href: '#pricing', labelBn: 'প্যাকেজ', labelEn: 'Pricing' },
    { href: '#testimonials', labelBn: 'রিভিউ', labelEn: 'Reviews' },
    { href: '#contact-whatsapp', labelBn: 'হোয়াটসঅ্যাপ ফর্ম', labelEn: 'Contact' },
    { href: '#location-map', labelBn: 'নারায়ণগঞ্জ ও ঢাকা অফিস', labelEn: 'Offices' },
  ];

  const handleWhatsAppQuickClick = () => {
    openDirectWhatsAppWithSource({
      source: 'Top Navbar WhatsApp Button',
      lang,
    });
  };

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0B1120]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl shadow-black/40' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo with Custom Geometric Pulse Emblem */}
          <a href="#" className="inline-block transition-transform hover:scale-[1.02]">
            <NexPulseLogo size="md" lang={lang} />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs tracking-wide uppercase font-semibold text-slate-300 hover:text-cyan-400 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cyan-400 hover:after:w-full after:transition-all after:duration-300"
              >
                {lang === 'bn' ? link.labelBn : link.labelEn}
              </a>
            ))}
            
            {/* Behance Link */}
            <a
              href={AGENCY_INFO.behanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs tracking-wide uppercase font-bold text-indigo-300 hover:text-white px-2.5 py-1 rounded-full bg-indigo-950/60 border border-indigo-500/30 hover:border-indigo-400 transition-all"
              title="View Sajid Mahmud's Behance Portfolio"
            >
              <span>Behance</span>
              <ExternalLink className="w-3 h-3 text-cyan-400" />
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switcher (Default English, One click toggles বাংলা) */}
            <button
              id="lang-toggle-btn"
              onClick={onToggleLang}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-slate-850/90 border border-slate-700/80 text-xs font-bold text-slate-200 hover:text-white hover:border-cyan-500/50 transition-all shadow-sm group"
              title={lang === 'en' ? 'Switch to Bengali' : 'Switch to English'}
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-45 transition-transform" />
              <span className="flex items-center gap-1">
                <span className={lang === 'en' ? 'text-cyan-400 font-extrabold' : 'text-slate-400'}>EN</span>
                <span className="text-slate-600">/</span>
                <span className={lang === 'bn' ? 'text-cyan-400 font-extrabold' : 'text-slate-400'}>বাং</span>
              </span>
            </button>

            {/* Direct WhatsApp Call-to-Action */}
            <button
              id="nav-whatsapp-cta"
              onClick={handleWhatsAppQuickClick}
              className="relative group overflow-hidden flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-lg shadow-indigo-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <div className="relative flex items-center justify-center">
                <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 animate-ping"></span>
                <MessageCircle className="w-4 h-4 fill-white text-white relative" />
              </div>
              <span>{lang === 'bn' ? 'হোয়াটসঅ্যাপে চ্যাট' : 'Chat on WhatsApp'}</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onToggleLang}
              className="px-3 py-1.5 rounded-full bg-slate-850 border border-slate-700 text-xs font-bold text-slate-200 hover:text-white"
            >
              {lang === 'bn' ? 'EN' : 'বাং'}
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-850 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-600 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-menu-drawer"
          className="lg:hidden fixed top-full left-0 right-0 bg-[#0B1120]/95 backdrop-blur-xl border-b border-slate-800 shadow-2xl p-5 animate-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-slate-200 hover:bg-slate-800 hover:text-cyan-400 font-medium transition-colors text-base"
              >
                {lang === 'bn' ? link.labelBn : link.labelEn}
              </a>
            ))}

            <a
              href={AGENCY_INFO.behanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg text-indigo-300 hover:bg-slate-800 font-medium flex items-center justify-between"
            >
              <span>{lang === 'bn' ? 'বিহেন্স পোর্টফোলিও' : 'Behance Portfolio Profile'}</span>
              <ExternalLink className="w-4 h-4 text-cyan-400" />
            </a>

            <div className="pt-3 mt-2 border-t border-slate-800 flex flex-col gap-2.5">
              <div className="flex items-center gap-2 text-xs text-indigo-300 bg-indigo-950/40 p-2.5 rounded-lg border border-indigo-900/50">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                <span>
                  {lang === 'bn' 
                    ? `হোয়াটসঅ্যাপে টিম অনলাইন: ${AGENCY_INFO.displayPhone}` 
                    : `Team online on WhatsApp: ${AGENCY_INFO.displayPhone}`}
                </span>
              </div>

              <button
                onClick={() => {
                  handleWhatsAppQuickClick();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white text-white" />
                <span>{lang === 'bn' ? 'সরাসরি হোয়াটসঅ্যাপে কথা বলুন' : 'Direct WhatsApp Chat'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
