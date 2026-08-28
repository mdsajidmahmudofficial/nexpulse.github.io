import React from 'react';
import { 
  MessageCircle, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  ExternalLink,
  Phone,
  Mail
} from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';
import { Language } from '../types';
import { openDirectWhatsAppWithSource } from '../utils/whatsappHelper';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const handleDirectWhatsApp = () => {
    openDirectWhatsAppWithSource({
      source: 'Hero Main CTA - Free Consultation Button',
      lang,
    });
  };

  return (
    <section 
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Grid Pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Call To Actions */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
            
            {/* Status chip with Behance & WhatsApp badge */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-850/90 border border-indigo-500/30 text-indigo-300 text-xs font-semibold shadow-inner">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                <span>
                  {lang === 'bn' 
                    ? '✨ ডিজিটাল সলিউশন, ওয়েব ও অ্যাপ ডেভেলপমেন্ট' 
                    : '✨ Digital Solutions, Web & Mobile App Development'}
                </span>
              </div>

              <a
                href={AGENCY_INFO.behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-semibold hover:border-cyan-400 transition-colors"
              >
                <span>Behance: sajidmahmudofficial</span>
                <ExternalLink className="w-3 h-3 text-cyan-400" />
              </a>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.2]">
              {lang === 'bn' ? (
                <>
                  আপনার ব্যবসাকে দিন <br className="hidden sm:block" />
                  <span className="bg-gradient-to-r from-indigo-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                    স্মার্ট ডিজিটাল রূপান্তর
                  </span> ও উচ্চ বিক্রির নিশ্চয়তা
                </>
              ) : (
                <>
                  Scale Your Business With <br className="hidden sm:block" />
                  <span className="bg-gradient-to-r from-indigo-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                    High-Impact Software
                  </span> & Premium Design
                </>
              )}
            </h1>

            {/* Sub-headline / Description */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {lang === 'bn' 
                ? 'আমরা তৈরি করি আল্ট্রা-ফাস্ট ওয়েবসাইট, কাস্টম ই-কমার্স শপ, হাই-পারফরম্যান্স মোবাইল অ্যাপ এবং কনভার্সন-ফোকাসড ইউআই/ইউএক্স ও ব্র্যান্ড ডিজাইন।' 
                : 'We engineer ultra-fast custom websites, automated e-commerce stores, native-grade mobile applications, and conversion-focused UI/UX & branding.'}
            </p>

            {/* Key Value Points */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-5 text-xs sm:text-sm text-slate-300 pt-1">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>{lang === 'bn' ? 'অন-টাইম প্রজেক্ট ডেলিভারি' : 'On-time Project Delivery'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>{lang === 'bn' ? '১০০% মোবাইল অপ্টিমাইজড' : '100% Mobile Optimized'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{lang === 'bn' ? 'সার্ভিস শুরু ৳২০,০০০ থেকে' : 'Services Starting from $200'}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 pt-2">
              {/* WhatsApp direct button with auto source */}
              <button
                id="hero-whatsapp-btn"
                onClick={handleDirectWhatsApp}
                className="flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-base shadow-xl shadow-indigo-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all group"
              >
                <MessageCircle className="w-5 h-5 fill-white text-white group-hover:rotate-12 transition-transform" />
                <span>{lang === 'bn' ? 'হোয়াটসঅ্যাপে ফ্রি পরামর্শ নিন' : 'Free Quote on WhatsApp'}</span>
              </button>

              {/* Browse portfolio button */}
              <a
                href="#portfolio"
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-800/90 hover:bg-slate-750 border border-slate-700 text-slate-200 font-semibold text-base transition-all hover:border-cyan-500/40"
              >
                <span>{lang === 'bn' ? 'পোর্টফোলিও দেখুন' : 'Explore Portfolio'}</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </a>
            </div>

            {/* Direct Phone & Email Quick Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="http://wa.me/+8801782416596"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-cyan-400 bg-slate-850/80 px-3 py-1.5 rounded-lg border border-slate-700/60 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>WhatsApp: {AGENCY_INFO.displayPhone}</span>
              </a>

              <a
                href={`mailto:${AGENCY_INFO.email}?subject=Project%20Inquiry%20-%20NexPulse%20Agency`}
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-indigo-400 bg-slate-850/80 px-3 py-1.5 rounded-lg border border-slate-700/60 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                <span>{AGENCY_INFO.email}</span>
              </a>
            </div>

            {/* Micro Stats Bar */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-800/80 mt-2">
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans',sans-serif]">
                  {lang === 'bn' ? '১৫০+' : '150+'}
                </span>
                <span className="text-xs text-slate-400">
                  {lang === 'bn' ? 'সফল প্রজেক্ট' : 'Completed Projects'}
                </span>
              </div>

              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl sm:text-3xl font-extrabold text-indigo-400 font-['Plus_Jakarta_Sans',sans-serif]">
                  {lang === 'bn' ? '৯৯.৪%' : '99.4%'}
                </span>
                <span className="text-xs text-slate-400">
                  {lang === 'bn' ? 'সন্তুষ্ট ক্লায়েন্ট' : 'Client Satisfaction'}
                </span>
              </div>

              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-['Plus_Jakarta_Sans',sans-serif]">
                  {lang === 'bn' ? '৫+ বছর' : '5+ Years'}
                </span>
                <span className="text-xs text-slate-400">
                  {lang === 'bn' ? 'অভিজ্ঞতা' : 'Industry Experience'}
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Agency Interactive Showcase Card */}
          <div className="lg:col-span-5 relative">
            
            {/* Decorative background glow frame */}
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-800 via-slate-850 to-slate-900 p-1 border border-slate-700 shadow-2xl shadow-indigo-950/40">
              
              {/* Inner Window Container */}
              <div className="bg-[#0B1120] rounded-xl p-5 sm:p-6 flex flex-col gap-5">
                
                {/* Window header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="text-xs text-slate-400 ml-2 font-mono">nexpulse.agency/hub</span>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 flex items-center gap-1 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
                    HQ: Narayanganj
                  </span>
                </div>

                {/* Simulated Project Card Preview */}
                <div className="relative rounded-xl overflow-hidden border border-slate-800 group">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" 
                    alt="Agency Showcase" 
                    className="w-full h-44 sm:h-52 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/60 to-transparent flex flex-col justify-end p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider">
                          {lang === 'bn' ? 'বিহেন্স ও লাইভ প্রজেক্ট' : 'Behance & Live Case Study'}
                        </span>
                        <h2 className="text-base font-bold text-white">
                          {lang === 'bn' ? 'শপার্স পয়েন্ট ই-কমার্স প্ল্যাটফর্ম' : 'Shoppers Point E-Commerce'}
                        </h2>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-bold text-indigo-300 bg-indigo-950/80 px-2 py-1 rounded border border-indigo-800/60">
                          {lang === 'bn' ? '+৩২০% সেলস' : '+320% Sales'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Fast Action WhatsApp Card Inside Widget */}
                <div className="bg-slate-850 rounded-xl p-4 border border-indigo-500/20 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-white">
                        {lang === 'bn' ? 'সরাসরি প্রজেক্ট আলোচনা' : 'Direct Project Consultation'}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        {lang === 'bn' ? 'হোয়াটসঅ্যাপ: 01782416596' : 'WhatsApp: +880 17824-16596'}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 bg-[#0B1120] p-2.5 rounded-lg border border-slate-800 font-mono">
                    {lang === 'bn'
                      ? '💬 "আপনার রিকোয়ারমেন্ট অনুযায়ী ইনস্ট্যান্ট কাস্টম প্রজেক্ট বাজেট ও সময় জেনে নিন।"'
                      : '💬 "Get an instant project budget estimate and delivery timeline on WhatsApp."'}
                  </p>

                  <button
                    onClick={handleDirectWhatsApp}
                    className="w-full py-2.5 px-3 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/40 text-cyan-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>{lang === 'bn' ? 'সরাসরি হোয়াটসঅ্যাপ মেসেজ পাঠান' : 'Send WhatsApp Message'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Tech & Design Pills */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  <span className="text-[11px] text-slate-400 mr-1 font-medium">
                    {lang === 'bn' ? 'স্কিলস:' : 'Expertise:'}
                  </span>
                  {['React', 'Next.js', 'Flutter', 'UI/UX (Figma)', 'Tailwind', 'Behance', 'bKash API'].map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-0.5 rounded-md bg-slate-800 border border-slate-700 text-[11px] text-slate-300 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>

            {/* Floating verified badge */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-slate-850/95 backdrop-blur-md p-3.5 rounded-xl border border-slate-700 shadow-xl shadow-black/40 items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-indigo-500/20 text-cyan-400 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white">
                  {lang === 'bn' ? '১০০% বিশ্বস্ত সার্ভিস' : '100% Verified Quality'}
                </span>
                <span className="text-[11px] text-slate-400">
                  {lang === 'bn' ? 'নারায়ণগঞ্জ সদর ও ঢাকা অফিস' : 'Narayanganj HQ & Dhaka Office'}
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
