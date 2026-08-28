import { ContactFormData } from '../types';

export const WHATSAPP_NUMBER = '8801782416596';
export const WHATSAPP_DIRECT_LINK = 'http://wa.me/+8801782416596';

export function generateWhatsAppMessage(
  data: ContactFormData,
  lang: 'bn' | 'en' = 'en',
  source: string = 'Website Contact Form'
): string {
  if (lang === 'bn') {
    let msg = `*🚀 নতুন প্রজেক্ট ইনকোয়ারি - NexPulse Agency*\n`;
    msg += `📍 *উৎস (Source):* ${source}\n\n`;
    msg += `👤 *নাম:* ${data.name || 'উল্লেখ নেই'}\n`;
    if (data.whatsapp) msg += `📱 *ফোন/হোয়াটসঅ্যাপ:* ${data.whatsapp}\n`;
    if (data.email) msg += `✉️ *ইমেইল:* ${data.email}\n`;
    if (data.service) msg += `💼 *কাঙ্ক্ষিত সার্ভিস:* ${data.service}\n`;
    if (data.budget) msg += `💰 *সম্ভাব্য বাজেট:* ${data.budget}\n`;
    if (data.timeline) msg += `⏱️ *প্রজেক্ট ডেডলাইন:* ${data.timeline}\n`;
    if (data.message) msg += `\n📝 *প্রজেক্টের বিবরণ:*\n${data.message}\n`;
    msg += `\n_এই মেসেজটি NexPulse এজেন্সির ওয়েবসাইট থেকে পাঠানো হয়েছে।_`;
    return msg;
  } else {
    let msg = `*🚀 New Project Inquiry - NexPulse Agency*\n`;
    msg += `📍 *Source:* ${source}\n\n`;
    msg += `👤 *Name:* ${data.name || 'Not provided'}\n`;
    if (data.whatsapp) msg += `📱 *WhatsApp/Phone:* ${data.whatsapp}\n`;
    if (data.email) msg += `✉️ *Email:* ${data.email}\n`;
    if (data.service) msg += `💼 *Service:* ${data.service}\n`;
    if (data.budget) msg += `💰 *Estimated Budget:* ${data.budget}\n`;
    if (data.timeline) msg += `⏱️ *Timeline:* ${data.timeline}\n`;
    if (data.message) msg += `\n📝 *Project Brief:*\n${data.message}\n`;
    msg += `\n_Sent via NexPulse Agency Official Website._`;
    return msg;
  }
}

export function openWhatsAppChat(
  phoneNumber: string = WHATSAPP_NUMBER,
  message: string
) {
  const cleanNumber = phoneNumber.replace(/[^0-9]/g, '') || WHATSAPP_NUMBER;
  const encodedText = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedText}`;
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
}

export function openDirectWhatsAppWithSource(options: {
  source: string;
  lang?: 'bn' | 'en';
  serviceTitle?: string;
  planName?: string;
  projectTitle?: string;
  customText?: string;
}) {
  const { source, lang = 'en', serviceTitle, planName, projectTitle, customText } = options;
  
  let msg = '';
  if (lang === 'bn') {
    msg = `*👋 হ্যালো NexPulse Agency!*\n📍 *উৎস:* ${source}\n\n`;
    if (customText) {
      msg += `${customText}\n\n`;
    } else if (serviceTitle) {
      msg += `আমি আপনাদের *${serviceTitle}* সার্ভিসটি নিতে আগ্রহী। বিস্তারিত খরচ ও সময় সম্পর্কে আলোচনা করতে চাচ্ছি।\n\n`;
    } else if (planName) {
      msg += `আমি আপনাদের *${planName}* প্যাকেজটি বেছে নিতে চাচ্ছি। প্রজেক্ট শুরুর প্রসেস জানতে চাই।\n\n`;
    } else if (projectTitle) {
      msg += `আমি আপনাদের পোর্টফোলিওর *"${projectTitle}"* প্রজেক্টের মতো একটি সলিউশন তৈরি করতে চাই।\n\n`;
    } else {
      msg += `আমি আমার নতুন প্রজেক্টের জন্য আপনাদের সাথে সরাসরি কথা বলতে চাই।\n\n`;
    }
    msg += `_ওয়েবসাইট থেকে স্বয়ংক্রিয়ভাবে জেনারেটকৃত মেসেজ_`;
  } else {
    msg = `*👋 Hello NexPulse Agency!*\n📍 *Source:* ${source}\n\n`;
    if (customText) {
      msg += `${customText}\n\n`;
    } else if (serviceTitle) {
      msg += `I am interested in your *${serviceTitle}* service. Would like to discuss project requirements, pricing, and timeline.\n\n`;
    } else if (planName) {
      msg += `I would like to select the *${planName}* package. Please let me know how we can get started.\n\n`;
    } else if (projectTitle) {
      msg += `I checked your case study on *"${projectTitle}"* and would like to develop a similar solution for my business.\n\n`;
    } else {
      msg += `I would like to schedule a direct consultation for an upcoming digital project.\n\n`;
    }
    msg += `_Automatically routed from NexPulse Agency Website_`;
  }

  openWhatsAppChat(WHATSAPP_NUMBER, msg);
}
