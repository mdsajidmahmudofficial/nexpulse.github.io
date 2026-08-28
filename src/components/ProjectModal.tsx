import React from 'react';
import { X, ExternalLink, TrendingUp, CheckCircle2, MessageCircle, Calendar, User, Code2 } from 'lucide-react';
import { PortfolioItem, Language } from '../types';
import { openDirectWhatsAppWithSource } from '../utils/whatsappHelper';

interface ProjectModalProps {
  project: PortfolioItem | null;
  lang: Language;
  onClose: () => void;
  onRequestSimilar: (title: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  lang,
  onClose,
  onRequestSimilar,
}) => {
  if (!project) return null;

  const handleWhatsAppConsult = () => {
    const projectTitle = lang === 'bn' ? project.title : project.titleEn;
    openDirectWhatsAppWithSource({
      source: `Portfolio Case Study Modal - ${projectTitle}`,
      projectTitle: projectTitle,
      lang: lang,
    });
  };

  return (
    <div 
      id="project-case-study-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-8"
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

        {/* Hero Image */}
        <div className="relative h-72 sm:h-96 w-full bg-slate-950 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 text-xs font-semibold">
                {lang === 'bn' ? project.categoryLabel : project.categoryLabelEn}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                {lang === 'bn' ? project.title : project.titleEn}
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1.5 rounded-lg bg-slate-950/80 border border-slate-700 text-xs text-slate-300 font-mono">
                {project.year}
              </span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[60vh] overflow-y-auto">
          
          {/* Key Metrics Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.results.map((res, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col">
                <span className="text-2xl font-black text-cyan-400 font-['Plus_Jakarta_Sans',sans-serif]">
                  {res.metric}
                </span>
                <span className="text-xs text-slate-400 mt-0.5">
                  {lang === 'bn' ? res.label : res.labelEn}
                </span>
              </div>
            ))}
          </div>

          {/* Project Summary */}
          <div>
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">
              {lang === 'bn' ? 'প্রজেক্ট ওভারভিউ' : 'Project Overview'}
            </h3>
            <p className="text-sm text-slate-200 leading-relaxed">
              {lang === 'bn' ? project.summary : project.summaryEn}
            </p>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800">
              <h4 className="text-sm font-bold text-rose-400 mb-2 flex items-center gap-1.5">
                <span>{lang === 'bn' ? '⚠️ চ্যালেঞ্জ ও সমস্যা' : '⚠️ The Challenge'}</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {lang === 'bn' ? project.challenge : project.challengeEn}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800">
              <h4 className="text-sm font-bold text-indigo-400 mb-2 flex items-center gap-1.5">
                <span>{lang === 'bn' ? '💡 আমাদের সমাধান' : '💡 Our Solution'}</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {lang === 'bn' ? project.solution : project.solutionEn}
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">
              {lang === 'bn' ? 'ব্যবহৃত টেকনোলজি ও টুলস' : 'Technologies Used'}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="p-6 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400">
            {lang === 'bn'
              ? 'আপনার ব্যবসার জন্যও এমন প্রজেক্ট চান?'
              : 'Interested in building a similar custom solution?'}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold transition-colors"
            >
              {lang === 'bn' ? 'বন্ধ করুন' : 'Close'}
            </button>

            <button
              onClick={handleWhatsAppConsult}
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm shadow-lg shadow-indigo-600/30 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white text-white" />
              <span>{lang === 'bn' ? 'হোয়াটসঅ্যাপে আলোচনা করুন' : 'Discuss on WhatsApp'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
