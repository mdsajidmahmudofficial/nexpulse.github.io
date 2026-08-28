import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  Send, 
  Copy, 
  Check, 
  Sparkles, 
  Phone, 
  Mail, 
  RotateCcw,
  CheckCircle2,
  MapPin
} from 'lucide-react';
import { AGENCY_INFO, SERVICES_DATA } from '../data/agencyData';
import { ContactFormData, Language } from '../types';
import { generateWhatsAppMessage, openWhatsAppChat } from '../utils/whatsappHelper';

interface WhatsAppContactSectionProps {
  lang: Language;
  prefilledService?: string;
  onClearPrefilled?: () => void;
}

export const WhatsAppContactSection: React.FC<WhatsAppContactSectionProps> = ({
  lang,
  prefilledService,
  onClearPrefilled,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    whatsapp: '',
    email: '',
    service: prefilledService || (lang === 'bn' ? 'ফুল-স্ট্যাক ওয়েব ডেভেলপমেন্ট' : 'Full-Stack Web Development'),
    budget: lang === 'bn' ? '৳২৫,০০০ - ৳৫০,০০০' : '$250 - $500',
    timeline: lang === 'bn' ? '২ - ৩ সপ্তাহ' : '2 - 3 Weeks',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, service: prefilledService }));
    }
  }, [prefilledService]);

  const presetQueries = [
    {
      titleBn: '🛒 ই-কমার্স অনলাইন শপ',
      titleEn: '🛒 E-commerce Store',
      serviceBn: 'ই-কমার্স ও অনলাইন শপ',
      serviceEn: 'E-commerce & Online Store',
      budgetBn: '৳৩৫,০০০ - ৳৭০,০০০',
      budgetEn: '$350 - $700',
      msgBn: 'আমি বিকাশ/নগদ পেমেন্ট গেটওয়ে এবং অটোমেটেড ডেলিভারি সহ একটি ফুল ফিচারড ই-কমার্স ওয়েবসাইট তৈরি করতে চাই।',
      msgEn: 'I need a full-featured e-commerce shop with automated payment gateways and inventory tracking.',
    },
    {
      titleBn: '🌐 বিজনেস ল্যান্ডিং পেজ',
      titleEn: '🌐 Business Website',
      serviceBn: 'ফুল-স্ট্যাক ওয়েব ডেভেলপমেন্ট',
      serviceEn: 'Full-Stack Web Development',
      budgetBn: '৳২০,০০০ - ৳৪০,০০০',
      budgetEn: '$200 - $400',
      msgBn: 'আমার কোম্পানির জন্য একটি ফাস্ট ও রেসপন্সিভ ল্যান্ডিং পেজ দরকার যাতে কাস্টমার সহজেই যোগাযোগ করতে পারে।',
      msgEn: 'I need a fast, responsive company website to showcase our services and capture customer leads.',
    },
    {
      titleBn: '📱 মোবাইল অ্যাপ ডেভেলপমেন্ট',
      titleEn: '📱 Mobile Application',
      serviceBn: 'মোবাইল অ্যাপ ডেভেলপমেন্ট',
      serviceEn: 'Mobile App Development',
      budgetBn: '৳৫০,০০০ - ৳১,০০,০০০+',
      budgetEn: '$500 - $1,000+',
      msgBn: 'Android এবং iOS উভয় প্ল্যাটফর্মের জন্য একটি ক্রস-প্ল্যাটফর্ম হাই-পারফরম্যান্স মোবাইল অ্যাপ বানাতে চাই।',
      msgEn: 'Looking to build a cross-platform Flutter/React Native mobile app for Android and iOS.',
    },
    {
      titleBn: '🎨 ব্র্যান্ডিং ও ইউআই/ইউএক্স',
      titleEn: '🎨 Branding & UI/UX',
      serviceBn: 'ইউআই/ইউএক্স ও প্রোডাক্ট ডিজাইন',
      serviceEn: 'UI/UX & Product Design',
      budgetBn: '৳২০,০০০ - ৳৩৫,০০০',
      budgetEn: '$200 - $350',
      msgBn: 'আমাদের নতুন প্রোডাক্টের জন্য সম্পূর্ণ ফিগমা ডিজাইন সিস্টেম এবং লোগো ব্র্যান্ডিং প্রয়োজন।',
      msgEn: 'We need complete Figma UI/UX wireframes, prototypes, and vector logo design.',
    },
  ];

  const handleApplyPreset = (preset: typeof presetQueries[0]) => {
    setFormData((prev) => ({
      ...prev,
      service: lang === 'bn' ? preset.serviceBn : preset.serviceEn,
      budget: lang === 'bn' ? preset.budgetBn : preset.budgetEn,
      message: lang === 'bn' ? preset.msgBn : preset.msgEn,
    }));
  };

  const generatedWhatsAppMsg = generateWhatsAppMessage(formData, lang);

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    openWhatsAppChat(AGENCY_INFO.whatsappNumber, generatedWhatsAppMsg);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(generatedWhatsAppMsg);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      whatsapp: '',
      email: '',
      service: lang === 'bn' ? 'ফুল-স্ট্যাক ওয়েব ডেভেলপমেন্ট' : 'Full-Stack Web Development',
      budget: lang === 'bn' ? '৳২৫,০০০ - ৳৫০,০০০' : '$250 - $500',
      timeline: lang === 'bn' ? '২ - ৩ সপ্তাহ' : '2 - 3 Weeks',
      message: '',
    });
    if (onClearPrefilled) onClearPrefilled();
  };

  return (
    <section 
      id="contact-whatsapp"
      className="py-24 bg-[#0F172A] relative border-t border-slate-800"
    >
      {/* Background ambient accents */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800/80 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-3">
            <MessageCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>{lang === 'bn' ? 'ইনস্ট্যান্ট হোয়াটসঅ্যাপ কানেকশন' : 'Direct WhatsApp Connect'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'bn' ? (
              <>
                হোয়াটসঅ্যাপে{' '}
                <span className="bg-gradient-to-r from-indigo-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                  কন্টাক্ট ফর্ম ও ফ্রি কোটেশন
                </span>
              </>
            ) : (
              <>
                Instant{' '}
                <span className="bg-gradient-to-r from-indigo-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                  WhatsApp Inquiry Form
                </span>
              </>
            )}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl">
            {lang === 'bn'
              ? 'নিচের ফর্মটি পূরণ করে সরাসরি আমাদের এজেন্সির অফিশিয়াল হোয়াটসঅ্যাপে মেসেজ পাঠান। আমরা ৫ মিনিটের মধ্যে রিপ্লাই দিব।'
              : 'Fill out this interactive form to generate a structured project brief and connect directly to our WhatsApp specialists.'}
          </p>

          {/* Quick Preset Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <span className="text-xs text-slate-400 font-medium mr-1">
              {lang === 'bn' ? 'কুইক প্রজেক্ট টাইপ:' : 'Quick Presets:'}
            </span>
            {presetQueries.map((preset, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleApplyPreset(preset)}
                className="px-3 py-1.5 rounded-lg bg-slate-800/90 hover:bg-slate-750 border border-slate-700 hover:border-indigo-500/40 text-xs text-slate-300 hover:text-white transition-all flex items-center gap-1"
              >
                <span>{lang === 'bn' ? preset.titleBn : preset.titleEn}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Grid: Form on Left, Live WhatsApp Bubble on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: The Interactive Form (7 cols) */}
          <div className="lg:col-span-7 bg-slate-850/80 backdrop-blur-sm rounded-2xl border border-slate-700/80 p-6 sm:p-8 shadow-xl shadow-black/40">
            <div className="flex items-center justify-between pb-5 border-b border-slate-700/80 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {lang === 'bn' ? 'প্রজেক্ট ইনফরমেশন দিন' : 'Project Details Form'}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {lang === 'bn' ? '১০০% গোপনীয়তা ও কোনো স্প্যাম নেই' : '100% Confidential & No Spam'}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleResetForm}
                className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1 px-2.5 py-1 rounded bg-slate-900 border border-slate-700 transition-colors"
                title="Reset Form"
              >
                <RotateCcw className="w-3 h-3" />
                <span>{lang === 'bn' ? 'রিসেট' : 'Reset'}</span>
              </button>
            </div>

            <form onSubmit={handleSubmitWhatsApp} className="space-y-4">
              
              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {lang === 'bn' ? 'আপনার নাম *' : 'Your Full Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={lang === 'bn' ? 'যেমন: তানভীর আহমেদ' : 'e.g. Tanvir Ahmed'}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {lang === 'bn' ? 'হোয়াটসঅ্যাপ / মোবাইল নম্বর *' : 'WhatsApp / Mobile Number *'}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder={lang === 'bn' ? 'যেমন: 01700-000000' : 'e.g. +880 1700-000000'}
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Email & Service */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {lang === 'bn' ? 'ইমেইল অ্যাড্রেস (ঐচ্ছিক)' : 'Email Address (Optional)'}
                  </label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {lang === 'bn' ? 'কাঙ্ক্ষিত সার্ভিস *' : 'Select Service *'}
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                  >
                    {SERVICES_DATA.map((srv) => (
                      <option key={srv.id} value={lang === 'bn' ? srv.title : srv.titleEn}>
                        {lang === 'bn' ? srv.title : srv.titleEn}
                      </option>
                    ))}
                    <option value={lang === 'bn' ? 'কাস্টম সফটওয়্যার প্রজেক্ট' : 'Custom Software Project'}>
                      {lang === 'bn' ? 'অন্যান্য / কাস্টম সফটওয়্যার' : 'Other / Custom Software'}
                    </option>
                  </select>
                </div>
              </div>

              {/* Row 3: Budget Range & Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {lang === 'bn' ? 'সম্ভাব্য বাজেট রেঞ্জ' : 'Estimated Budget Range'}
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                  >
                    {lang === 'bn' ? (
                      <>
                        <option value="৳২০,০০০ - ৳৩৫,০০০">৳২০,০০০ - ৳৩৫,০০০ (স্টার্টার)</option>
                        <option value="৳৩৫,০০০ - ৳৭০,০০০">৳৩৫,০০০ - ৳৭০,০০০ (বিজনেস)</option>
                        <option value="৳৭০,০০০ - ৳১,৫০,০০০">৳৭০,০০০ - ৳১,৫০,০০০ (অ্যাডভান্সড)</option>
                        <option value="৳১,৫০,০০০+">৳১,৫০,০০০+ (এন্টারপ্রাইজ / কাস্টম)</option>
                      </>
                    ) : (
                      <>
                        <option value="$200 - $350">$200 - $350 (Starter)</option>
                        <option value="$350 - $700">$350 - $700 (Business Growth)</option>
                        <option value="$700 - $1,500">$700 - $1,500 (Advanced)</option>
                        <option value="$1,500+">$1,500+ (Enterprise Custom)</option>
                      </>
                    )}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {lang === 'bn' ? 'প্রজেক্ট ডেলিভারি সময়সীমা' : 'Required Project Timeline'}
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                  >
                    {lang === 'bn' ? (
                      <>
                        <option value="১ - ২ সপ্তাহ">১ - ২ সপ্তাহ (জরুরি)</option>
                        <option value="২ - ৪ সপ্তাহ">২ - ৪ সপ্তাহ (স্ট্যান্ডার্ড)</option>
                        <option value="১ - ২ মাস">১ - ২ মাস (পূর্ণাঙ্গ প্রজেক্ট)</option>
                        <option value="আলোচনা সাপেক্ষে">আলোচনা সাপেক্ষে</option>
                      </>
                    ) : (
                      <>
                        <option value="1 - 2 Weeks">1 - 2 Weeks (Urgent)</option>
                        <option value="2 - 4 Weeks">2 - 4 Weeks (Standard)</option>
                        <option value="1 - 2 Months">1 - 2 Months (Comprehensive)</option>
                        <option value="Flexible / Negotiable">Flexible / Negotiable</option>
                      </>
                    )}
                  </select>
                </div>
              </div>

              {/* Row 4: Message */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  {lang === 'bn' ? 'প্রজেক্টের বিবরণ বা বিশেষ চাহিদা (ঐচ্ছিক)' : 'Project Requirements / Brief (Optional)'}
                </label>
                <textarea
                  rows={3}
                  placeholder={
                    lang === 'bn'
                      ? 'আপনার প্রজেক্টের প্রধান ফিচার ও প্রয়োজনীয়তা সংক্ষেপে লিখুন...'
                      : 'Briefly describe key features, target goals, or reference examples...'
                  }
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-bold text-sm shadow-lg shadow-indigo-500/25 transition-all transform active:scale-95 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{lang === 'bn' ? 'সরাসরি হোয়াটসঅ্যাপে পাঠান' : 'Send Inquiry via WhatsApp'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyMessage}
                  className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white text-xs font-semibold transition-colors"
                  title="Copy formatted message"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-cyan-400" />
                      <span className="text-cyan-400">{lang === 'bn' ? 'কপি হয়েছে!' : 'Copied!'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-400" />
                      <span>{lang === 'bn' ? 'মেসেজ কপি করুন' : 'Copy Text'}</span>
                    </>
                  )}
                </button>
              </div>

              {submitted && (
                <div className="p-3 rounded-lg bg-indigo-950/80 border border-indigo-500/40 text-indigo-300 text-xs flex items-center gap-2 animate-in fade-in duration-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>
                    {lang === 'bn' 
                      ? 'হোয়াটসঅ্যাপে মেসেজ পাঠানো হচ্ছে! আমাদের টিম দ্রুত রিপ্লাই দিবে।' 
                      : 'WhatsApp chat launched! Our team will respond shortly.'}
                  </span>
                </div>
              )}

            </form>
          </div>

          {/* Right Column: Live WhatsApp Bubble Simulator (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Simulated Phone WhatsApp UI */}
            <div className="rounded-2xl bg-slate-850/90 border border-slate-700/80 overflow-hidden shadow-2xl shadow-indigo-950/40">
              
              {/* WhatsApp App Bar Header */}
              <div className="bg-slate-800 p-3.5 px-4 flex items-center justify-between border-b border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                      NP
                    </div>
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-slate-800"></span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                      NexPulse Agency Desk
                    </h4>
                    <span className="text-[11px] text-cyan-300 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      {lang === 'bn' ? 'অনলাইন | সাধারণত ৫ মিনিটে রিপ্লাই দেয়' : 'Online | Typically replies in 5m'}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-slate-400 font-mono">
                    {AGENCY_INFO.displayPhone}
                  </span>
                </div>
              </div>

              {/* Chat Canvas Body with Wallpaper Tint */}
              <div 
                className="p-4 sm:p-5 bg-slate-900/95 flex flex-col gap-4 min-h-[290px] justify-between relative"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, rgba(99,102,241,0.08) 1px, transparent 0)`,
                  backgroundSize: '20px 20px'
                }}
              >
                
                {/* Agency Greeting Bubble (Left) */}
                <div className="max-w-[85%] bg-slate-800 rounded-2xl rounded-tl-sm p-3 border border-slate-700 text-xs text-slate-200 shadow">
                  <p>
                    {lang === 'bn' 
                      ? '👋 স্বাগতম NexPulse এজেন্সিতে! আপনার প্রজেক্টের আইডিয়া ও রিকোয়ারমেন্ট বলুন, আমরা দ্রুত কোটেশন তৈরি করে দিচ্ছি।' 
                      : '👋 Welcome to NexPulse! Share your project requirements and we will send a tailored proposal immediately.'}
                  </p>
                  <span className="text-[10px] text-slate-400 block text-right mt-1 font-mono">10:00 AM</span>
                </div>

                {/* User Live Dynamic Message Bubble (Right) */}
                <div className="self-end max-w-[90%] bg-indigo-950/90 border border-indigo-500/40 rounded-2xl rounded-tr-sm p-3.5 text-xs text-indigo-100 shadow-lg">
                  <div className="whitespace-pre-line font-mono text-[11px] leading-relaxed">
                    {generatedWhatsAppMsg}
                  </div>
                  <div className="flex items-center justify-end gap-1 text-[10px] text-cyan-400/80 mt-1 font-mono">
                    <span>{lang === 'bn' ? 'লাইভ প্রিভিউ' : 'Live Preview'}</span>
                    <span>✓✓</span>
                  </div>
                </div>

                {/* Instant Send Trigger Inside Preview */}
                <button
                  type="button"
                  onClick={handleSubmitWhatsApp}
                  className="w-full py-2 px-3 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/40 text-indigo-300 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{lang === 'bn' ? 'এই মেসেজটি হোয়াটসঅ্যাপে পাঠান' : 'Send This to WhatsApp Now'}</span>
                </button>

              </div>
            </div>

            {/* Quick Contact Info Pill Box - Fully responsive and non-overflowing */}
            <div className="bg-slate-850/80 rounded-2xl border border-slate-700/80 p-4 sm:p-5 flex flex-col gap-3">
              <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                {lang === 'bn' ? 'জরুরি কল ও ইমেইল সহায়তা' : 'Direct Contacts & Hotline'}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <a
                  href={`tel:${AGENCY_INFO.displayPhone.replace(/\s+/g, '')}`}
                  className="p-3 rounded-xl bg-slate-900 border border-slate-750 hover:border-slate-650 flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors min-w-0"
                >
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-indigo-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] text-slate-400 uppercase font-semibold">
                      {lang === 'bn' ? 'হটলাইন' : 'Hotline'}
                    </div>
                    <div className="font-semibold text-xs text-white truncate">
                      {AGENCY_INFO.displayPhone}
                    </div>
                  </div>
                </a>

                <a
                  href={`mailto:${AGENCY_INFO.email}`}
                  className="p-3 rounded-xl bg-slate-900 border border-slate-750 hover:border-slate-650 flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors min-w-0"
                  title={AGENCY_INFO.email}
                >
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] text-slate-400 uppercase font-semibold">
                      {lang === 'bn' ? 'ইমেইল' : 'Email'}
                    </div>
                    <div className="font-semibold text-xs text-white truncate break-all">
                      {AGENCY_INFO.email}
                    </div>
                  </div>
                </a>
              </div>

              {/* Headquarters badge */}
              <div className="pt-1 flex items-center gap-2 text-[11px] text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span className="truncate">
                  {lang === 'bn' ? AGENCY_INFO.hqAddressBn : AGENCY_INFO.hqAddressEn}
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
