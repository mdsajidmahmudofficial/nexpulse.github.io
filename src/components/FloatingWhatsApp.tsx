import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles, CheckCircle2 } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';
import { Language } from '../types';

interface FloatingWhatsAppProps {
  lang: Language;
  onOpenContactForm: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  lang,
  onOpenContactForm,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const handleSendQuickWhatsApp = () => {
    const text = customMsg.trim() || (
      lang === 'bn' 
        ? 'হ্যালো NexPulse! আমি একটি নতুন প্রজেক্ট সম্পর্কে কথা বলতে চাই।' 
        : 'Hello NexPulse! I would like to inquire about a project.'
    );
    const cleanNumber = AGENCY_INFO.whatsappNumber.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`, '_blank');
    setIsOpen(false);
    setCustomMsg('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Floating Popup Card */}
      {isOpen && (
        <div 
          id="floating-whatsapp-popup"
          className="mb-3 w-80 sm:w-96 rounded-2xl bg-slate-900 border border-indigo-500/40 shadow-2xl shadow-indigo-950/60 overflow-hidden animate-in slide-in-from-bottom-5 duration-200"
        >
          {/* Header */}
          <div className="bg-indigo-900/90 p-4 flex items-center justify-between border-b border-indigo-800">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-indigo-600 text-white font-black text-sm flex items-center justify-center border border-indigo-400">
                  NP
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-cyan-400 ring-2 ring-indigo-900"></span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">
                  NexPulse WhatsApp Desk
                </h4>
                <span className="text-[11px] text-cyan-200 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                  {lang === 'bn' ? 'সরাসরি অনলাইন' : 'Online Right Now'}
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-indigo-200 hover:text-white hover:bg-indigo-800/50 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-slate-950/95 space-y-3 text-xs">
            <div className="bg-slate-900 p-3 rounded-xl rounded-tl-sm border border-slate-800 text-slate-200 leading-relaxed">
              {lang === 'bn'
                ? '👋 হ্যালো! আপনার প্রজেক্টের বাজেট, সময় অথবা যেকোনো টেকনিক্যাল জিজ্ঞাসা থাকলে সরাসরি মেসেজ পাঠান।'
                : '👋 Hello! Have questions about project scope, budget, or timeline? Send us a quick WhatsApp message!'}
            </div>

            {/* Quick Chips */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              <button
                type="button"
                onClick={() => setCustomMsg(lang === 'bn' ? 'একটি নতুন ওয়েবসাইট বানাতে চাই' : 'I need a new website')}
                className="px-2.5 py-1 rounded-md bg-slate-900 hover:bg-indigo-950 border border-slate-800 hover:border-indigo-500/40 text-[11px] text-slate-300 transition-colors"
              >
                {lang === 'bn' ? '🌐 ওয়েবসাইট চাই' : '🌐 Website'}
              </button>
              <button
                type="button"
                onClick={() => setCustomMsg(lang === 'bn' ? 'ই-কমার্স শপ বানানোর বাজেট কত?' : 'What is the cost for an E-commerce store?')}
                className="px-2.5 py-1 rounded-md bg-slate-900 hover:bg-indigo-950 border border-slate-800 hover:border-indigo-500/40 text-[11px] text-slate-300 transition-colors"
              >
                {lang === 'bn' ? '🛒 ই-কমার্স' : '🛒 E-commerce'}
              </button>
              <button
                type="button"
                onClick={() => setCustomMsg(lang === 'bn' ? 'মোবাইল অ্যাপ ডেভেলপমেন্ট' : 'Mobile App Development')}
                className="px-2.5 py-1 rounded-md bg-slate-900 hover:bg-indigo-950 border border-slate-800 hover:border-indigo-500/40 text-[11px] text-slate-300 transition-colors"
              >
                {lang === 'bn' ? '📱 মোবাইল অ্যাপ' : '📱 App'}
              </button>
            </div>

            {/* Input & Send */}
            <div className="flex items-center gap-2 pt-2">
              <input
                type="text"
                placeholder={lang === 'bn' ? 'মেসেজ লিখুন...' : 'Type a message...'}
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSendQuickWhatsApp();
                }}
                className="flex-1 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500"
              />
              <button
                type="button"
                onClick={handleSendQuickWhatsApp}
                className="p-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-all shadow-md"
                title="Send on WhatsApp"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>

            <div className="pt-2 text-center">
              <a
                href="#contact-whatsapp"
                onClick={() => setIsOpen(false)}
                className="text-[11px] text-cyan-400 hover:underline inline-block"
              >
                {lang === 'bn' ? 'বা বিস্তারিত ফর্ম পূরণ করুন →' : 'Or fill full structured form →'}
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button with Ping Animation */}
      <button
        id="floating-whatsapp-btn"
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-3 p-3.5 sm:px-5 sm:py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold shadow-2xl shadow-indigo-600/40 hover:scale-105 active:scale-95 transition-all duration-300"
        aria-label="WhatsApp Chat"
      >
        <div className="relative">
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400"></span>
          </span>
          <MessageCircle className="w-6 h-6 fill-white text-white" />
        </div>

        <span className="hidden sm:inline text-sm font-bold tracking-tight">
          {lang === 'bn' ? 'হোয়াটসঅ্যাপে চ্যাট' : 'WhatsApp Chat'}
        </span>
      </button>

    </div>
  );
};
