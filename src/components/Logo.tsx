import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showTag?: boolean;
  lang?: 'bn' | 'en';
}

export const NexPulseLogo: React.FC<LogoProps> = ({ 
  size = 'md', 
  showTag = true,
  lang = 'en' 
}) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <div className="flex items-center gap-2.5 sm:gap-3 group select-none">
      {/* Brand Icon SVG: Geometric Pulsing N-P emblem */}
      <div 
        className={`${iconSizes[size]} relative rounded-xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-slate-900 p-[1.5px] shadow-lg shadow-indigo-600/25 group-hover:shadow-indigo-500/40 transition-all duration-300 flex items-center justify-center`}
      >
        <div className="w-full h-full bg-slate-950/90 rounded-[10px] flex items-center justify-center overflow-hidden relative">
          {/* Subtle glowing pulse grid backdrop */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-500/20 via-indigo-500/10 to-transparent"></div>
          
          <svg 
            viewBox="0 0 40 40" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 sm:w-7 sm:h-7 relative z-10"
          >
            {/* Pulsing Signal Wave */}
            <path 
              d="M6 21H11L14 12L19 28L24 16L27 24L30 21H34" 
              stroke="url(#pulse_grad)" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
            {/* Glowing nodes */}
            <circle cx="14" cy="12" r="1.8" fill="#38BDF8" className="animate-pulse" />
            <circle cx="19" cy="28" r="1.8" fill="#818CF8" />
            <circle cx="24" cy="16" r="1.8" fill="#38BDF8" />
            
            <defs>
              <linearGradient id="pulse_grad" x1="6" y1="20" x2="34" y2="20" gradientUnits="userSpaceOnUse">
                <stop stopColor="#6366F1" />
                <stop offset="0.5" stopColor="#38BDF8" />
                <stop offset="1" stopColor="#818CF8" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span className={`${textSizes[size]} font-extrabold tracking-tight text-white font-['Plus_Jakarta_Sans',sans-serif]`}>
            Nex<span className="text-cyan-400">Pulse</span>
          </span>
          <span className="px-1.5 py-0.5 rounded text-[9px] font-bold tracking-wider uppercase bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 hidden sm:inline-block">
            Agency
          </span>
        </div>
        {showTag && (
          <span className="text-[10px] text-slate-400 font-medium tracking-wide">
            {lang === 'bn' ? 'ডিজিটাল সলিউশন' : 'Digital Innovations'}
          </span>
        )}
      </div>
    </div>
  );
};
