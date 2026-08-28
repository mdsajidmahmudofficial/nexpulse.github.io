import React from 'react';
import { Check, Zap, MessageCircle, ArrowRight } from 'lucide-react';
import { PRICING_PLANS } from '../data/agencyData';
import { Language, PricingPlan } from '../types';
import { openDirectWhatsAppWithSource } from '../utils/whatsappHelper';

interface PricingSectionProps {
  lang: Language;
  onSelectPlan: (planName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ lang, onSelectPlan }) => {
  const handleDirectWhatsAppPlan = (plan: PricingPlan) => {
    const planTitle = lang === 'bn' ? plan.name : plan.nameEn;
    const planPrice = lang === 'bn' ? plan.price : plan.priceEn;
    openDirectWhatsAppWithSource({
      source: `Pricing Section - ${plan.nameEn} Plan`,
      planName: `${planTitle} (${planPrice})`,
      lang: lang,
    });
  };

  return (
    <section 
      id="pricing"
      className="py-24 bg-[#0F172A] relative border-t border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-3">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>{lang === 'bn' ? 'স্বচ্ছ প্রাইসিং' : 'Transparent Pricing'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'bn' ? (
              <>
                কোন গোপন চার্জ নেই—{' '}
                <span className="bg-gradient-to-r from-indigo-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                  সাশ্রয়ী ও কাস্টম প্যাকেজ
                </span>
              </>
            ) : (
              <>
                Predictable Investment—{' '}
                <span className="bg-gradient-to-r from-indigo-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                  Affordable & Scalable Tiers
                </span>
              </>
            )}
          </h2>

          <p className="mt-3 text-base text-slate-300">
            {lang === 'bn'
              ? 'আপনার ব্যবসার সাইজ ও রিকোয়ারমেন্ট অনুযায়ী মানানসই প্যাকেজ বেছে নিন। যেকোনো প্যাকেজে রয়েছে ফ্রি সাপোর্ট।'
              : 'Choose the ideal tier that fits your development stage, with full code ownership and dedicated support.'}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isPopular = plan.popular;
            return (
              <div
                key={plan.id}
                id={`pricing-card-${plan.id}`}
                className={`relative rounded-2xl bg-slate-850/80 backdrop-blur-sm border p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl ${
                  isPopular
                    ? 'border-indigo-500 shadow-xl shadow-indigo-950/40 ring-1 ring-indigo-500/40 -translate-y-2'
                    : 'border-slate-700/80 hover:border-slate-600'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-indigo-600 text-white text-xs font-black tracking-wide uppercase shadow-md shadow-indigo-600/30">
                    {lang === 'bn' ? plan.badge : plan.badgeEn}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white">
                      {lang === 'bn' ? plan.name : plan.nameEn}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-400 min-h-[36px] mb-6">
                    {lang === 'bn' ? plan.description : plan.descriptionEn}
                  </p>

                  {/* Price */}
                  <div className="pb-6 border-b border-slate-750">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-extrabold text-cyan-400 font-['Plus_Jakarta_Sans',sans-serif]">
                        {lang === 'bn' ? plan.price : plan.priceEn}
                      </span>
                    </div>
                    <span className="text-xs text-slate-400 mt-1 block font-medium">
                      {lang === 'bn' ? plan.period : plan.periodEn}
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="py-6 space-y-3">
                    <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      {lang === 'bn' ? 'কী কী অন্তর্ভুক্ত:' : 'What is included:'}
                    </div>
                    {(lang === 'bn' ? plan.features : plan.featuresEn).map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <div className="w-4 h-4 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-cyan-400" />
                        </div>
                        <span className="leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-6 border-t border-slate-750">
                  <button
                    onClick={() => handleDirectWhatsAppPlan(plan)}
                    className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full font-bold text-sm transition-all ${
                      isPopular
                        ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-600/30 hover:scale-[1.02]'
                        : 'bg-slate-800 hover:bg-slate-750 text-white border border-slate-700'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 text-cyan-300" />
                    <span>{lang === 'bn' ? 'প্যাকেজটি হোয়াটসঅ্যাপে বুক করুন' : 'Book on WhatsApp'}</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
