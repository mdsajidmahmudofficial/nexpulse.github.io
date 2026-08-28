import React, { useState } from 'react';
import { 
  Code2, 
  ShoppingBag, 
  Palette, 
  Smartphone, 
  TrendingUp, 
  Sparkles, 
  Check, 
  ArrowRight, 
  MessageCircle, 
  Clock, 
  Zap, 
  Layers 
} from 'lucide-react';
import { SERVICES_DATA, AGENCY_INFO } from '../data/agencyData';
import { Language, ServiceItem } from '../types';

interface ServicesSectionProps {
  lang: Language;
  onSelectServiceForModal: (service: ServiceItem) => void;
  onBookServiceViaWhatsApp: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  lang,
  onSelectServiceForModal,
  onBookServiceViaWhatsApp,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', labelBn: 'সব সার্ভিস', labelEn: 'All Services' },
    { id: 'development', labelBn: 'ওয়েব ও অ্যাপ', labelEn: 'Web & App' },
    { id: 'ecommerce', labelBn: 'ই-কমার্স', labelEn: 'E-commerce' },
    { id: 'design', labelBn: 'ইউআই ও ডিজাইন', labelEn: 'UI & Design' },
    { id: 'marketing', labelBn: 'ডিজিটাল মার্কেটিং', labelEn: 'Marketing & SEO' },
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === activeCategory);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-6 h-6 text-indigo-400" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6 text-cyan-400" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-indigo-300" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-cyan-300" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-indigo-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
      default:
        return <Layers className="w-6 h-6 text-indigo-400" />;
    }
  };

  return (
    <section 
      id="services"
      className="py-24 bg-[#0F172A] relative border-t border-slate-800"
    >
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-3">
            <Zap className="w-3.5 h-3.5 text-indigo-400" />
            <span>{lang === 'bn' ? 'আমাদের দক্ষতাসমূহ' : 'Our Core Capabilities'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'bn' ? (
              <>
                আপনার বিজনেসের জন্য{' '}
                <span className="bg-gradient-to-r from-indigo-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                  কমপ্লিট সার্ভিস প্যাকেজ
                </span>
              </>
            ) : (
              <>
                Comprehensive Digital{' '}
                <span className="bg-gradient-to-r from-indigo-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                  Services & Solutions
                </span>
              </>
            )}
          </h2>

          <p className="mt-3 text-base text-slate-300">
            {lang === 'bn'
              ? 'আইডিয়া থেকে রিয়েলিটি—আমরা আপনার ব্যবসার প্রতিটি ধাপে আধুনিক প্রযুক্তি ও মার্কেটিং সহায়তা প্রদান করি।'
              : 'From conceptual design to robust software deployment, we deliver high-ROI solutions tailored to your growth goals.'}
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 scale-105'
                    : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-750 border border-slate-700'
                }`}
              >
                {lang === 'bn' ? cat.labelBn : cat.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service) => {
            const isPopular = service.popular;
            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className={`relative rounded-2xl bg-slate-850/70 backdrop-blur-sm border p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-950/30 group ${
                  isPopular 
                    ? 'border-indigo-500/60 ring-1 ring-indigo-500/40' 
                    : 'border-slate-700/80 hover:border-slate-600'
                }`}
              >
                {/* Popular Ribbon if applicable */}
                {isPopular && (
                  <div className="absolute -top-3 right-5 px-3 py-0.5 rounded-full bg-indigo-600 text-white text-[11px] font-extrabold tracking-wide uppercase shadow-sm">
                    {lang === 'bn' ? 'বেস্ট সেলিং' : 'Popular Choice'}
                  </div>
                )}

                <div>
                  {/* Icon & Category Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:border-indigo-500/40 group-hover:bg-slate-750 transition-colors">
                      {getServiceIcon(service.icon)}
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700">
                      <Clock className="w-3 h-3 text-cyan-400" />
                      <span>{lang === 'bn' ? service.deliveryTime : service.deliveryTimeEn}</span>
                    </div>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors mb-2">
                    {lang === 'bn' ? service.title : service.titleEn}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                    {lang === 'bn' ? service.shortDesc : service.shortDescEn}
                  </p>

                  {/* Feature Highlights */}
                  <div className="space-y-2.5 pb-6 border-b border-slate-700/80">
                    {(lang === 'bn' ? service.features : service.featuresEn).slice(0, 4).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <div className="w-4 h-4 rounded-full bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing & Actions */}
                <div className="pt-5 mt-auto flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[11px] text-slate-400">
                        {lang === 'bn' ? 'শুরু মাত্র:' : 'Starting at:'}
                      </span>
                      <span className="text-base font-extrabold text-indigo-400 font-['Plus_Jakarta_Sans',sans-serif]">
                        {lang === 'bn' ? service.startingPrice : service.startingPriceEn}
                      </span>
                    </div>

                    {/* View Details Modal Trigger */}
                    <button
                      onClick={() => onSelectServiceForModal(service)}
                      className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1 hover:underline underline-offset-4 transition-all"
                    >
                      <span>{lang === 'bn' ? 'বিস্তারিত দেখুন' : 'View Details'}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                    </button>
                  </div>

                  {/* WhatsApp Quick Order Button */}
                  <button
                    onClick={() => onBookServiceViaWhatsApp(lang === 'bn' ? service.title : service.titleEn)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-indigo-600 text-slate-200 hover:text-white font-bold text-xs sm:text-sm border border-slate-700 hover:border-indigo-500 transition-all duration-200 shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>
                      {lang === 'bn' ? 'হোয়াটসঅ্যাপে বুক করুন' : 'Book on WhatsApp'}
                    </span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Custom Solution Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-850 via-slate-800 to-indigo-950/40 border border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center shrink-0 hidden sm:flex">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">
                {lang === 'bn' ? 'আপনার কি কাস্টম কোন ফিচার বা আইডিয়া আছে?' : 'Have a custom idea or specific requirements?'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                {lang === 'bn'
                  ? 'আমাদের টেক এক্সপার্টদের সাথে বিনামূল্যে কথা বলে আপনার আইডিয়া বাস্তবায়নের সঠিক রোডম্যাপ তৈরি করুন।'
                  : 'Talk with our solution architects for a tailored scope of work and instant custom estimate.'}
              </p>
            </div>
          </div>

          <a
            href="#contact-whatsapp"
            className="shrink-0 flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-600/30 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white text-white" />
            <span>{lang === 'bn' ? 'কাস্টম কোটেশন চান' : 'Get Custom Quote'}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
