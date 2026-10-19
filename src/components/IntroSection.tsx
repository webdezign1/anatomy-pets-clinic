import React from 'react';
import { CheckCircle2, HeartHandshake, ArrowRight, ShieldCheck } from 'lucide-react';
import { CLINIC_DATA } from '../data/clinicData';

interface IntroSectionProps {
  onLearnMore: () => void;
}

export const IntroSection: React.FC<IntroSectionProps> = ({ onLearnMore }) => {
  return (
    <section className="py-16 lg:py-24 bg-[#FBFBFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] sm:aspect-square bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=900&q=80"
                  alt="Doctor treating a calm cat in Anatomy Pets Clinic"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Accent Floating Card */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-teal-800 text-white p-5 rounded-2xl shadow-xl max-w-xs hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-teal-700/80 rounded-xl">
                    <HeartHandshake className="w-6 h-6 text-teal-200" />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-semibold text-teal-300">Empathetic Care</p>
                    <p className="text-sm font-medium">Gentle & fear-reduced handling for every patient</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 text-teal-800 font-bold text-xs uppercase tracking-wider bg-teal-100/70 px-3 py-1 rounded-full">
              <span>About Our Practice</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Welcome to <span className="text-teal-700">{CLINIC_DATA.name}</span>
            </h2>

            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              <p>
                At Anatomy Pets Clinic, we understand that pets are cherished family members. Located conveniently in 
                the heart of Faisal Town, Lahore, our clinic was established to provide companion animals with clinical 
                excellence delivered in a gentle, compassionate manner.
              </p>
              <p className="text-base text-slate-600">
                Whether you are bringing in a playful puppy for its initial core vaccinations, managing your senior cat's 
                metabolic health, or consulting for an intricate soft-tissue surgical procedure, our medical team takes 
                the time to evaluate every symptom thoroughly and explain your options with transparent, honest counsel.
              </p>
            </div>

            {/* Core Commitments */}
            <div className="grid sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-800">Sterile surgical environment & careful post-op care</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-800">Clear diagnostic explanations with no unnecessary tests</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-800">High-potency vaccines handled with strict cold-chain integrity</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-800">Direct WhatsApp support for patient follow-ups</span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onLearnMore}
                className="inline-flex items-center gap-2 text-teal-800 hover:text-teal-900 font-bold text-sm bg-teal-50 hover:bg-teal-100 px-5 py-3 rounded-xl transition duration-150"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>PVMC Registered Veterinary Professionals</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
