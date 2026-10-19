import React from 'react';
import { ShieldCheck, Lock, FileText } from 'lucide-react';
import { CLINIC_DATA } from '../data/clinicData';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="py-12 lg:py-20 bg-[#FBFBFA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="space-y-4 text-center">
          <span className="text-teal-800 font-bold text-xs uppercase tracking-wider bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100">
            Legal & Data Transparency
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Privacy Policy & Patient Confidentiality
          </h1>
          <p className="text-sm text-slate-500">
            Last Updated: October 2026 • Anatomy Pets Clinic, Faisal Town, Lahore
          </p>
        </div>

        {/* Policy Content */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-xs space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">
          
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-teal-700" />
              <span>1. Information We Collect</span>
            </h2>
            <p>
              When you submit an appointment request or make an inquiry via this website, Anatomy Pets Clinic may collect:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600 text-sm">
              <li>Your full name and contact telephone / WhatsApp number.</li>
              <li>Your email address (if optionally provided).</li>
              <li>Information regarding your pet (name, species, breed, medical history, and observed symptoms).</li>
              <li>Preferred dates and times for clinical consultations.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Lock className="w-5 h-5 text-teal-700" />
              <span>2. How We Use Your Information</span>
            </h2>
            <p>
              Your contact details are solely utilized to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600 text-sm">
              <li>Confirm and schedule your veterinary appointments.</li>
              <li>Communicate clinical updates, surgical preparation instructions, and follow-up guidance.</li>
              <li>Send critical vaccination schedule reminders upon your consent.</li>
            </ul>
            <p className="font-semibold text-slate-800">
              We never sell, rent, or trade your personal or pet information to third-party marketing entities.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-teal-700" />
              <span>3. Medical & Surgical Record Confidentiality</span>
            </h2>
            <p>
              Diagnostic records, ultrasound reports, surgical summaries, and prescription details gathered during your visits are maintained confidentially within our clinic record management system. Copies are available upon the registered owner's request.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900">4. Third-Party Links & Messaging</h2>
            <p>
              Our website facilitates instant messaging via WhatsApp and navigation directions via Google Maps. Please review the respective privacy terms of WhatsApp and Google when interacting with their platforms.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-slate-100">
            <h2 className="text-xl font-bold text-slate-900">5. Contact Regarding Your Data</h2>
            <p>
              If you wish to review, update, or remove your contact records from our reminder list, please contact our clinic at:
            </p>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs sm:text-sm">
              <p><strong>Anatomy Pets Clinic</strong></p>
              <p>Shop No. 10, Civic Center Commercial Area, Faisal Town, Lahore, Pakistan</p>
              <p>Phone: {CLINIC_DATA.displayPhone}</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
