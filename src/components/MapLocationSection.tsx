import React from 'react';
import { 
  MapPin, 
  Navigation, 
  Clock, 
  Phone, 
  Mail, 
  Building2, 
  ExternalLink, 
  MessageCircle,
  CheckCircle2
} from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';
import { Language } from '../types';
import { openDirectWhatsAppWithSource } from '../utils/whatsappHelper';

interface MapLocationSectionProps {
  lang: Language;
}

export const MapLocationSection: React.FC<MapLocationSectionProps> = ({ lang }) => {
  const hqOffice = {
    nameBn: 'নারায়ণগঞ্জ হেডকোয়ার্টার (HQ)',
    nameEn: 'Narayanganj Agency Headquarters (HQ)',
    badgeBn: 'প্রধান কার্যালয় ও স্টুডিও',
    badgeEn: 'Principal Headquarters & Studio',
    addressBn: AGENCY_INFO.hqAddressBn,
    addressEn: AGENCY_INFO.hqAddressEn,
    hoursBn: AGENCY_INFO.officeHoursBn,
    hoursEn: AGENCY_INFO.officeHoursEn,
    phone: AGENCY_INFO.displayPhone,
    email: AGENCY_INFO.email,
    mapEmbed: AGENCY_INFO.googleMapEmbedUrl,
    directMapUrl: AGENCY_INFO.googleMapDirectUrl,
    facilitiesBn: [
      'ডিজিটাল ডিজাইন ও ডেভ ল্যাব',
      'সরাসরি ক্লায়েন্ট কনসাল্টেশন লাউঞ্জ',
      'হাই-স্পিড অপটিক্যাল ফাইবার নেটওয়ার্ক',
      'প্রজেক্ট প্রেজেন্টেশন ও স্ক্রিনিং'
    ],
    facilitiesEn: [
      'Digital Design & Dev Studio',
      'Client Consultation Lounge',
      'High-Speed Optical Fiber Network',
      'Project Demo & Strategy Screening'
    ],
  };

  const handleScheduleVisitWhatsApp = () => {
    openDirectWhatsAppWithSource({
      source: 'Map Location Section - Meeting at Narayanganj HQ',
      lang,
    });
  };

  return (
    <section 
      id="location-map"
      className="py-24 bg-[#0B1120] relative border-t border-slate-800"
    >
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/3 w-[600px] h-[300px] bg-indigo-900/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800/80 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-3">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>{lang === 'bn' ? 'হেডকোয়ার্টার লোকেশন ও ম্যাপ' : 'Headquarters Location & Map'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {lang === 'bn' ? (
              <>
                আমাদের হেডকোয়ার্টারে সরাসরি আসুন অথবা{' '}
                <span className="bg-gradient-to-r from-indigo-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                  গুগল ম্যাপে লোকেশন দেখুন
                </span>
              </>
            ) : (
              <>
                Visit Our Headquarters or{' '}
                <span className="bg-gradient-to-r from-indigo-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                  Find Us on Google Maps
                </span>
              </>
            )}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl">
            {lang === 'bn'
              ? 'আমাদের নারায়ণগঞ্জ হেডকোয়ার্টারে এসে এক কাপ কফি সহ সরাসরি প্রজেক্ট ব্রিফ ও স্ট্র্যাটেজি আলোচনা করতে পারেন।'
              : 'Visit our Narayanganj Sadar Headquarters for an in-person project discovery consultation over coffee.'}
          </p>
        </div>

        {/* Main Grid: Details on Left (5 cols), Embedded Map on Right (7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Office Details Card */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6 bg-slate-850/80 backdrop-blur-sm rounded-2xl border border-slate-700/80 p-6 sm:p-8 shadow-xl">
            
            <div className="space-y-6">
              {/* Header Info */}
              <div className="flex items-start gap-3.5 pb-5 border-b border-slate-750">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-indigo-400">
                    {lang === 'bn' ? hqOffice.badgeBn : hqOffice.badgeEn}
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {lang === 'bn' ? hqOffice.nameBn : hqOffice.nameEn}
                  </h3>
                </div>
              </div>

              {/* Address detail */}
              <div className="flex items-start gap-3 text-sm text-slate-300">
                <MapPin className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-white mb-0.5">
                    {lang === 'bn' ? 'অফিস ঠিকানা' : 'HQ Address'}
                  </div>
                  <div className="leading-relaxed">
                    {lang === 'bn' ? hqOffice.addressBn : hqOffice.addressEn}
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start gap-3 text-sm text-slate-300">
                <Clock className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-white mb-0.5">
                    {lang === 'bn' ? 'অফিস খোলা থাকার সময়' : 'Working Hours'}
                  </div>
                  <div>
                    {lang === 'bn' ? hqOffice.hoursBn : hqOffice.hoursEn}
                  </div>
                </div>
              </div>

              {/* Contacts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-750 flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-indigo-400 shrink-0" />
                  <div className="min-w-0">
                    <div className="text-[10px] text-slate-400 uppercase font-semibold">
                      {lang === 'bn' ? 'ফোন' : 'Phone'}
                    </div>
                    <div className="text-xs font-semibold text-white font-mono truncate">
                      {hqOffice.phone}
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900 border border-slate-750 flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <div className="min-w-0">
                    <div className="text-[10px] text-slate-400 uppercase font-semibold">
                      {lang === 'bn' ? 'ইমেইল' : 'Email'}
                    </div>
                    <div className="text-xs font-semibold text-white truncate" title={hqOffice.email}>
                      {hqOffice.email}
                    </div>
                  </div>
                </div>
              </div>

              {/* Facilities / Amenities */}
              <div className="pt-2">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                  {lang === 'bn' ? 'সুবিধাসমূহ' : 'HQ Facilities'}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {(lang === 'bn' ? hqOffice.facilitiesBn : hqOffice.facilitiesEn).map((fac, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate">{fac}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 border-t border-slate-750 flex flex-col sm:flex-row gap-3">
              <a
                href={hqOffice.directMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/40 text-indigo-300 hover:text-white text-xs font-bold transition-colors text-center"
              >
                <Navigation className="w-4 h-4 text-cyan-400" />
                <span>{lang === 'bn' ? 'গুগল ম্যাপে ডিরেকশন' : 'Get Directions'}</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              <button
                onClick={handleScheduleVisitWhatsApp}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white text-xs font-bold shadow-lg shadow-indigo-600/20 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{lang === 'bn' ? 'সাক্ষাতের সময় বুক করুন' : 'Schedule Visit'}</span>
              </button>
            </div>

          </div>

          {/* Right Column: Google Maps Iframe */}
          <div className="lg:col-span-7 rounded-2xl bg-slate-850/80 border border-slate-700/80 overflow-hidden shadow-xl min-h-[420px] flex flex-col relative">
            
            {/* Map Top Bar */}
            <div className="bg-slate-800/90 px-4 py-3 flex items-center justify-between border-b border-slate-700 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="font-semibold text-white">
                  {lang === 'bn' ? 'লাইভ গুগল ম্যাপস ভিউ' : 'Live Google Maps View'}
                </span>
                <span className="text-slate-400">|</span>
                <span className="text-slate-400 text-[11px]">
                  {lang === 'bn' ? 'ফতুল্লা, নারায়ণগঞ্জ' : 'Fatullah, Narayanganj'}
                </span>
              </div>

              <a
                href={hqOffice.directMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center gap-1 text-[11px]"
              >
                <span>{lang === 'bn' ? 'বড় ম্যাপ খুলুন' : 'Open Full Map'}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Embedded Responsive Map */}
            <div className="w-full flex-1 min-h-[380px] bg-slate-900">
              <iframe
                title="NexPulse Agency Narayanganj Headquarters Map"
                src={hqOffice.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter grayscale-[15%] contrast-105"
              />
            </div>

            {/* Map bottom note */}
            <div className="bg-slate-900/95 px-4 py-2.5 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
              <div className="flex items-center gap-1.5 truncate">
                <MapPin className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span className="truncate">
                  {lang === 'bn' ? 'হেডকোয়ার্টার: ফতুল্লা - ১৪২১, নারায়ণগঞ্জ সদর' : 'Headquarters: Fatullah - 1421, Narayanganj Sadar'}
                </span>
              </div>
              <span className="text-emerald-400 font-medium shrink-0 ml-2">
                {lang === 'bn' ? 'অনলাইন / সরাসরি সাক্ষাত' : 'In-Person & Online'}
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
