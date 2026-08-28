import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import { FAQS, AGENCY_INFO } from '../data/agencyData';
import { Language } from '../types';

interface FAQSectionProps {
  lang: Language;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ lang }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const handleAskOnWhatsApp = () => {
    const text = lang === 'bn'
      ? 'হ্যালো NexPulse Agency! আমার একটি নির্দিষ্ট প্রশ্ন আছে।'
      : 'Hello NexPulse Agency! I have a specific question about your agency services.';
    const cleanNumber = AGENCY_INFO.whatsappNumber.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section 
      id="faq"
      className="py-24 bg-[#0F172A] relative border-t border-slate-800"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-indigo-400" />
            <span>{lang === 'bn' ? 'সাধারণ জিজ্ঞাসা' : 'Frequently Asked Questions'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'bn' ? (
              <>
                প্রজেক্ট শুরুর পূর্বে{' '}
                <span className="bg-gradient-to-r from-indigo-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                  জরুরি প্রশ্নোত্তর
                </span>
              </>
            ) : (
              <>
                Got Questions?{' '}
                <span className="bg-gradient-to-r from-indigo-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                  We Have Answers
                </span>
              </>
            )}
          </h2>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-slate-850/80 backdrop-blur-sm border border-slate-700/80 overflow-hidden transition-all duration-200 hover:border-slate-600"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 text-sm sm:text-base font-bold text-white hover:text-cyan-300 transition-colors"
                >
                  <span>{lang === 'bn' ? faq.questionBn : faq.questionEn}</span>
                  <div className="w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center shrink-0 text-cyan-400">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-750 pt-4 animate-in fade-in-50 duration-200">
                    {lang === 'bn' ? faq.answerBn : faq.answerEn}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Ask on WhatsApp CTA */}
        <div className="mt-10 p-5 rounded-2xl bg-slate-850 border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-lg">
          <span className="text-xs sm:text-sm text-slate-300">
            {lang === 'bn'
              ? 'আপনার প্রশ্নের উত্তর খুঁজে পাননি? সরাসরি আমাদের হোয়াটসঅ্যাপে জিজ্ঞেস করুন।'
              : 'Still have questions? Chat directly with our technical lead on WhatsApp.'}
          </span>
          <button
            onClick={handleAskOnWhatsApp}
            className="shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-600/30 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white text-white" />
            <span>{lang === 'bn' ? 'হোয়াটসঅ্যাপে প্রশ্ন করুন' : 'Ask on WhatsApp'}</span>
          </button>
        </div>

      </div>
    </section>
  );
};
