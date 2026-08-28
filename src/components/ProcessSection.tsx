import React from 'react';
import { Compass, Layout, Code, Rocket, ArrowRight } from 'lucide-react';
import { WORKFLOW_STEPS } from '../data/agencyData';
import { Language } from '../types';

interface ProcessSectionProps {
  lang: Language;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ lang }) => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-6 h-6 text-indigo-400" />;
      case 'Layout':
        return <Layout className="w-6 h-6 text-cyan-400" />;
      case 'Code':
        return <Code className="w-6 h-6 text-indigo-400" />;
      case 'Rocket':
        return <Rocket className="w-6 h-6 text-cyan-400" />;
      default:
        return <Code className="w-6 h-6 text-indigo-400" />;
    }
  };

  return (
    <section 
      id="process"
      className="py-24 bg-[#0F172A] relative border-t border-slate-800 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-3">
            <Rocket className="w-3.5 h-3.5 text-indigo-400" />
            <span>{lang === 'bn' ? 'আমাদের কর্মপদ্ধতি' : 'Our Streamlined Process'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'bn' ? (
              <>
                আইডিয়া থেকে সফল বাস্তবায়ন—{' '}
                <span className="bg-gradient-to-r from-indigo-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                  আমাদের ৪ ধাপের প্রসেস
                </span>
              </>
            ) : (
              <>
                From Vision to Reality—{' '}
                <span className="bg-gradient-to-r from-indigo-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                  Our 4-Step Methodology
                </span>
              </>
            )}
          </h2>

          <p className="mt-3 text-base text-slate-300">
            {lang === 'bn'
              ? 'আমরা স্বচ্ছতা ও সময়ানুবর্তিতা বজায় রেখে প্রতিটি প্রজেক্ট সুনির্দিষ্ট পরিকল্পনা অনুযায়ী সম্পন্ন করি।'
              : 'Our battle-tested workflow ensures rapid iterations, clear milestones, and predictable on-time delivery.'}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {WORKFLOW_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl bg-slate-850/80 backdrop-blur-sm border border-slate-700/80 p-6 sm:p-7 flex flex-col justify-between hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-950/30 transition-all duration-300 group"
            >
              {/* Top Step Number & Icon */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center group-hover:border-indigo-500/40 group-hover:scale-105 transition-all">
                    {getStepIcon(step.icon)}
                  </div>
                  <span className="text-3xl font-black text-slate-700 group-hover:text-indigo-500/30 font-mono transition-colors">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {lang === 'bn' ? step.titleBn : step.titleEn}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {lang === 'bn' ? step.descBn : step.descEn}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-800 flex items-center gap-1.5 text-[11px] text-slate-400 group-hover:text-cyan-400 font-medium">
                <span>{lang === 'bn' ? `ধাপ ${step.step} সম্পন্ন` : `Phase ${step.step}`}</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
