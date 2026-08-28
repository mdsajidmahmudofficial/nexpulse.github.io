import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  ArrowUpRight, 
  TrendingUp, 
  Eye, 
  MessageCircle,
  Sparkles
} from 'lucide-react';
import { PORTFOLIO_DATA, AGENCY_INFO } from '../data/agencyData';
import { Language, PortfolioItem } from '../types';
import { openDirectWhatsAppWithSource } from '../utils/whatsappHelper';

interface PortfolioSectionProps {
  lang: Language;
  onSelectProject: (project: PortfolioItem) => void;
  onRequestSimilarProject: (projectTitle: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  lang,
  onSelectProject,
  onRequestSimilarProject,
}) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const tabs = [
    { id: 'all', labelBn: 'সব প্রজেক্ট', labelEn: 'All Projects' },
    { id: 'ecommerce', labelBn: 'ই-কমার্স', labelEn: 'E-commerce' },
    { id: 'app', labelBn: 'মোবাইল অ্যাপ', labelEn: 'Mobile Apps' },
    { id: 'web', labelBn: 'ওয়েব ও SaaS', labelEn: 'Web & SaaS' },
    { id: 'branding', labelBn: 'ব্র্যান্ডিং', labelEn: 'Branding' },
    { id: 'uiux', labelBn: 'ইউআই/ইউএক্স', labelEn: 'UI/UX' },
  ];

  const filteredProjects = activeTab === 'all'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter((p) => p.category === activeTab);

  return (
    <section 
      id="portfolio"
      className="py-24 bg-[#0B1120] relative border-t border-slate-800"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>{lang === 'bn' ? 'প্রফেশনাল পোর্টফোলিও' : 'Featured Case Studies'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'bn' ? (
              <>
                আমাদের সাম্প্রতিক{' '}
                <span className="bg-gradient-to-r from-indigo-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                  সফল প্রজেক্টসমূহ
                </span>
              </>
            ) : (
              <>
                Proven Work &{' '}
                <span className="bg-gradient-to-r from-indigo-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                  Digital Case Studies
                </span>
              </>
            )}
          </h2>

          <p className="mt-3 text-base text-slate-300">
            {lang === 'bn'
              ? 'আমরা প্রতিটি প্রজেক্টে ডেটা-ড্রিভেন টেকনোলজি এবং আকর্ষণীয় ডিজাইন নিশ্চিত করি যা ক্লায়েন্টদের ব্যবসায়িক ফলাফল এনে দেয়।'
              : 'Explore how we engineered modern digital experiences that deliver high conversions, seamless performance, and customer trust.'}
          </p>

          {/* Portfolio Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 scale-105'
                    : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-750 border border-slate-700'
                }`}
              >
                {lang === 'bn' ? tab.labelBn : tab.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const topResult = project.results[0];
            return (
              <div
                key={project.id}
                id={`portfolio-item-${project.id}`}
                className="group rounded-2xl bg-slate-850/70 border border-slate-700/80 overflow-hidden flex flex-col justify-between hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-950/30"
              >
                {/* Project Image & Overlay */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-[#0B1120]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/30 to-transparent" />
                  
                  {/* Category Pill on top-left */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-[11px] font-bold text-slate-200 border border-slate-700 shadow-sm">
                      {lang === 'bn' ? project.categoryLabel : project.categoryLabelEn}
                    </span>
                  </div>

                  {/* Impact Metric on top-right */}
                  {topResult && (
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/80 backdrop-blur-md text-[11px] font-extrabold text-cyan-300 border border-indigo-700 shadow-sm">
                        <TrendingUp className="w-3 h-3 text-cyan-400" />
                        <span>{topResult.metric}</span>
                      </div>
                    </div>
                  )}

                  {/* Quick Click View Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/60 backdrop-blur-[2px]">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="px-5 py-2.5 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-indigo-600/40 hover:bg-indigo-700 transition-all transform -translate-y-2 group-hover:translate-y-0"
                    >
                      <Eye className="w-4 h-4" />
                      <span>{lang === 'bn' ? 'কেস স্টাডি পড়ুন' : 'View Case Study'}</span>
                    </button>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                      <span>{lang === 'bn' ? `ক্লায়েন্ট: ${project.client}` : `Client: ${project.clientEn}`}</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2.5 line-clamp-1">
                      {lang === 'bn' ? project.title : project.titleEn}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 line-clamp-2">
                      {lang === 'bn' ? project.summary : project.summaryEn}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300 font-mono border border-slate-750"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Bar */}
                  <div className="pt-4 border-t border-slate-750 flex items-center justify-between gap-3">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="text-xs font-bold text-indigo-300 hover:text-white flex items-center gap-1.5 group-hover:underline underline-offset-4 transition-all"
                    >
                      <span>{lang === 'bn' ? 'বিস্তারিত কেস স্টাডি' : 'Full Case Study'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
                    </button>

                    <button
                      onClick={() => onRequestSimilarProject(lang === 'bn' ? project.title : project.titleEn)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-indigo-600 text-slate-300 hover:text-white text-xs font-semibold border border-slate-700 transition-all"
                      title={lang === 'bn' ? 'এই ধরনের প্রজেক্ট চাই' : 'Request similar project'}
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{lang === 'bn' ? 'অনুরূপ প্রজেক্ট' : 'Similar Project'}</span>
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Sajid Mahmud Behance Profile Link Showcase Bar */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-indigo-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center shrink-0 hidden sm:flex">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  Behance Official
                </span>
                <span className="text-xs text-slate-400">@sajidmahmudofficial</span>
              </div>
              <h4 className="text-lg font-bold text-white mt-1">
                {lang === 'bn' 
                  ? 'বিহেন্স প্রোফাইলে আমাদের সম্পূর্ণ ডিজাইন পোর্টফোলিও ও UI/UX প্রোটোটাইপ দেখুন' 
                  : 'Explore Complete UI/UX Prototypes & Case Studies on Behance'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                {lang === 'bn'
                  ? 'আন্তর্জাতিক মানের ডিজাইন আর্কিটেকচার, ব্র্যান্ড প্যাকেজিং ও ইন্টারফেস প্রোটোটাইপ সরাসরি অনলাইনে দেখুন।'
                  : 'Discover verified client deliverables, mobile apps, and interactive wireframes on our official profile.'}
              </p>
            </div>
          </div>

          <a
            href={AGENCY_INFO.behanceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-sm shadow-md shadow-cyan-500/30 hover:scale-105 transition-all"
          >
            <span>{lang === 'bn' ? 'বিহেন্স প্রোফাইল ওপেন করুন' : 'View on Behance'}</span>
            <ExternalLink className="w-4 h-4 text-slate-950" />
          </a>
        </div>

      </div>
    </section>
  );
};
