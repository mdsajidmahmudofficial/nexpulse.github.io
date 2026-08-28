import React from 'react';
import { X, Check, MessageCircle, Clock, ShieldCheck, Zap } from 'lucide-react';
import { ServiceItem, Language } from '../types';
import { openDirectWhatsAppWithSource } from '../utils/whatsappHelper';

interface ServiceModalProps {
  service: ServiceItem | null;
  lang: Language;
  onClose: () => void;
  onBookOnWhatsApp: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  lang,
  onClose,
  onBookOnWhatsApp,
}) => {
  if (!service) return null;

  const handleDirectWhatsApp = () => {
    const title = lang === 'bn' ? service.title : service.titleEn;
    const price = lang === 'bn' ? service.startingPrice : service.startingPriceEn;
    openDirectWhatsAppWithSource({
      source: `Service Modal Dialog - ${title}`,
      serviceTitle: `${title} (${price})`,
      lang: lang,
    });
  };

  return (
    <div 
      id="service-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-950/80 text-slate-300 hover:text-white flex items-center justify-center border border-slate-700 backdrop-blur-md transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="p-6 sm:p-8 bg-slate-850 border-b border-slate-750">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 text-xs font-semibold">
              {lang === 'bn' ? 'সার্ভিস স্পেসিফিকেশন' : 'Service Specification'}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {lang === 'bn' ? service.title : service.titleEn}
          </h2>

          <div className="flex flex-wrap items-center gap-4 mt-4 text-xs text-slate-300">
            <div className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-750">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              <span>{lang === 'bn' ? `ডেলিভারি: ${service.deliveryTime}` : `Timeline: ${service.deliveryTimeEn}`}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-750">
              <span className="text-slate-400">{lang === 'bn' ? 'শুরু মূল্য:' : 'Starting:'}</span>
              <span className="text-cyan-400 font-bold">{lang === 'bn' ? service.startingPrice : service.startingPriceEn}</span>
            </div>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[50vh] overflow-y-auto">
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              {lang === 'bn' ? 'সার্ভিস বর্ণনা' : 'Description'}
            </h3>
            <p className="text-sm text-slate-200 leading-relaxed">
              {lang === 'bn' ? service.fullDesc : service.fullDescEn}
            </p>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              {lang === 'bn' ? 'যা যা অন্তর্ভুক্ত থাকবে' : 'Included Features'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {(lang === 'bn' ? service.features : service.featuresEn).map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                  <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              {lang === 'bn' ? 'ডেলিভারেবলস (আপনি যা পাবেন)' : 'Deliverables You Receive'}
            </h3>
            <div className="space-y-2">
              {(lang === 'bn' ? service.deliverables : service.deliverablesEn).map((deliv, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-indigo-300 bg-indigo-950/40 p-2 rounded-lg border border-indigo-800/40">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold transition-colors"
          >
            {lang === 'bn' ? 'বন্ধ করুন' : 'Close'}
          </button>

          <button
            onClick={handleDirectWhatsApp}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-lg shadow-indigo-600/30 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white text-white" />
            <span>{lang === 'bn' ? 'সার্ভিসটি হোয়াটসঅ্যাপে বুক করুন' : 'Book on WhatsApp'}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
