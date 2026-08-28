import React from 'react';
import { Star, Quote, CheckCircle2, MessageSquare } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/agencyData';
import { Language } from '../types';

interface TestimonialsSectionProps {
  lang: Language;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ lang }) => {
  return (
    <section 
      id="testimonials"
      className="py-24 bg-[#0F172A] relative border-t border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-indigo-400" />
            <span>{lang === 'bn' ? 'ক্লায়েন্ট মতামত' : 'Client Testimonials'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'bn' ? (
              <>
                আমাদের ক্লায়েন্টরা{' '}
                <span className="bg-gradient-to-r from-indigo-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                  আমাদের নিয়ে যা বলছেন
                </span>
              </>
            ) : (
              <>
                Real Feedback From{' '}
                <span className="bg-gradient-to-r from-indigo-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                  Our Successful Partners
                </span>
              </>
            )}
          </h2>

          <p className="mt-3 text-base text-slate-300">
            {lang === 'bn'
              ? 'আমাদের গ্রাহকদের সন্তুষ্টিই আমাদের সবচেয়ে বড় অর্জন ও প্রেরণা।'
              : 'Discover how our digital agency empowered ambitious companies across industries.'}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-slate-850/80 backdrop-blur-sm border border-slate-700/80 p-6 sm:p-7 flex flex-col justify-between hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-950/30 transition-all duration-300 relative group"
            >
              <Quote className="w-8 h-8 text-indigo-500/20 absolute top-6 right-6 pointer-events-none group-hover:text-indigo-500/30 transition-colors" />

              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-6">
                  "{lang === 'bn' ? item.comment : item.commentEn}"
                </p>
              </div>

              {/* Author info */}
              <div className="pt-4 border-t border-slate-800 flex items-center gap-3.5">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border border-indigo-500/40"
                />
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-white">
                      {lang === 'bn' ? item.name : item.nameEn}
                    </span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                  <span className="text-[11px] text-slate-400">
                    {lang === 'bn' ? item.role : item.roleEn}, {item.company}
                  </span>
                  <span className="text-[10px] text-indigo-400/90 font-mono mt-0.5">
                    {item.projectType}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
