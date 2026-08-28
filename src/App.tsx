import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessSection } from './components/ProcessSection';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { WhatsAppContactSection } from './components/WhatsAppContactSection';
import { MapLocationSection } from './components/MapLocationSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ProjectModal } from './components/ProjectModal';
import { ServiceModal } from './components/ServiceModal';
import { Language, PortfolioItem, ServiceItem } from './types';
import { openDirectWhatsAppWithSource } from './utils/whatsappHelper';

export default function App() {
  // Default to English as requested; switching to Bengali when user clicks
  const [lang, setLang] = useState<Language>('en');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [prefilledService, setPrefilledService] = useState<string>('');

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'bn' : 'en'));
  };

  const handleBookServiceViaWhatsApp = (serviceTitle: string) => {
    setPrefilledService(serviceTitle);
    openDirectWhatsAppWithSource({
      source: `Services Section - ${serviceTitle}`,
      serviceTitle: serviceTitle,
      lang: lang,
    });
  };

  const handleRequestSimilarProject = (projectTitle: string) => {
    openDirectWhatsAppWithSource({
      source: `Portfolio Case Study - ${projectTitle}`,
      projectTitle: projectTitle,
      lang: lang,
    });
  };

  const handleSelectPlan = (planName: string) => {
    setPrefilledService(planName);
    openDirectWhatsAppWithSource({
      source: `Pricing Plan Selection - ${planName}`,
      planName: planName,
      lang: lang,
    });
  };

  return (
    <div 
      className={`min-h-screen bg-[#0B1120] text-slate-100 flex flex-col ${
        lang === 'bn' ? "font-['Hind_Siliguri',sans-serif]" : "font-['Plus_Jakarta_Sans',sans-serif]"
      }`}
    >
      
      {/* Top sticky navbar with NexPulse branding & language switch */}
      <Navbar 
        lang={lang} 
        onToggleLang={toggleLanguage} 
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero 
          lang={lang} 
        />

        {/* 2. Services Section (সার্ভিসেস তালিকা - Starting ৳20,000+ / $200+) */}
        <ServicesSection 
          lang={lang} 
          onSelectServiceForModal={(service) => setSelectedService(service)}
          onBookServiceViaWhatsApp={handleBookServiceViaWhatsApp}
        />

        {/* 3. Portfolio Section (বিহেন্স ইন্টিগ্রেশন ও লাইভ কেস স্টাডি) */}
        <PortfolioSection 
          lang={lang} 
          onSelectProject={(project) => setSelectedProject(project)}
          onRequestSimilarProject={handleRequestSimilarProject}
        />

        {/* 4. Methodology / Process Section */}
        <ProcessSection 
          lang={lang} 
        />

        {/* 5. Pricing Plans (Starting ৳20,000 / $200) */}
        <PricingSection 
          lang={lang} 
          onSelectPlan={handleSelectPlan}
        />

        {/* 6. Testimonials / Reviews */}
        <TestimonialsSection 
          lang={lang} 
        />

        {/* 7. WhatsApp Contact Form Section (ফোন 01782416596 ও অটো সোর্স ট্র্যাকিং) */}
        <WhatsAppContactSection 
          lang={lang}
          prefilledService={prefilledService}
          onClearPrefilled={() => setPrefilledService('')}
        />

        {/* 8. Map Location Section (নারায়ণগঞ্জ হেডকোয়ার্টার ও ঢাকা অফিস) */}
        <MapLocationSection 
          lang={lang} 
        />

        {/* 9. FAQs Section */}
        <FAQSection 
          lang={lang} 
        />
      </main>

      {/* Footer */}
      <Footer 
        lang={lang} 
      />

      {/* Floating WhatsApp Action Widget */}
      <FloatingWhatsApp 
        lang={lang} 
        onOpenContactForm={() => {
          const el = document.getElementById('contact-whatsapp');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Case Study Detail Modal */}
      <ProjectModal 
        project={selectedProject} 
        lang={lang} 
        onClose={() => setSelectedProject(null)}
        onRequestSimilar={handleRequestSimilarProject}
      />

      {/* Service Detail Modal */}
      <ServiceModal 
        service={selectedService} 
        lang={lang} 
        onClose={() => setSelectedService(null)}
        onBookOnWhatsApp={handleBookServiceViaWhatsApp}
      />

    </div>
  );
}
