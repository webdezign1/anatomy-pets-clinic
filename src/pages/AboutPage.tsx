import React from 'react';
import { ShieldCheck, Heart, Award } from 'lucide-react';

interface AboutPageProps {
  onOpenBooking: () => void;
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBooking, onNavigate }) => {
  return (
    <div className="py-12 lg:py-20 bg-[#FBFBFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Hero */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-teal-800 font-bold text-xs uppercase tracking-wider bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100">
            Our Story & Values
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Compassion, Clinical Rigor & Lifelong Pet Health
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Learn how Anatomy Pets Clinic combines experienced veterinary surgery, accurate diagnostics, 
            and stress-free handling to care for dogs and cats across Lahore.
          </p>
        </div>

        {/* Section 1: Philosophy & Approach */}
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Our Clinical Philosophy
            </h2>
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                Anatomy Pets Clinic was founded in Faisal Town, Lahore, with a clear purpose: to bridge 
                modern veterinary medicine with heartfelt, family-centered communication. We know that bringing 
                an unwell animal to a clinic can be stressful for both pet and parent.
              </p>
              <p>
                That is why we structure every consultation around calmness and clarity. From routine immunization 
                to delicate soft-tissue surgical interventions, our clinical team focuses on evidence-based 
                diagnostics, pain management, and transparent explanations before performing any treatment.
              </p>
            </div>

            {/* Core Values */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-200">
                <Heart className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Fear-Reduced Patient Handling</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Gentle, respectful restraint techniques that soothe cats and dogs during exams.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-200">
                <ShieldCheck className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Surgical Asepsis & Vital Monitoring</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Strict sterilization protocols for surgical suites, sterile packs, and anesthesia care.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-200">
                <Award className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Honest, Non-Commercial Advice</h4>
                  <p className="text-xs text-slate-500 mt-0.5">We only advise the diagnostics and medications your pet actually requires.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=1000&q=80"
                alt="Veterinary surgery and sterile examination tools"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Standards of Practice Grid */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-xs space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl font-bold text-slate-900">What You Can Expect During Your Visit</h3>
            <p className="text-sm text-slate-500">Every visit to Anatomy Pets Clinic follows our consistent standard of care.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-warm-50 border border-slate-200/60">
              <span className="text-2xl font-black text-teal-700">01</span>
              <h4 className="font-bold text-slate-900 text-sm mt-2">Comprehensive Vitals</h4>
              <p className="text-xs text-slate-600 mt-1">Temperature, pulse, respiration, weight tracking, and mucous membrane check.</p>
            </div>

            <div className="p-5 rounded-2xl bg-warm-50 border border-slate-200/60">
              <span className="text-2xl font-black text-teal-700">02</span>
              <h4 className="font-bold text-slate-900 text-sm mt-2">Diagnostic Screening</h4>
              <p className="text-xs text-slate-600 mt-1">On-site ultrasonography and blood panels when clinical symptoms require investigation.</p>
            </div>

            <div className="p-5 rounded-2xl bg-warm-50 border border-slate-200/60">
              <span className="text-2xl font-black text-teal-700">03</span>
              <h4 className="font-bold text-slate-900 text-sm mt-2">Collaborative Plan</h4>
              <p className="text-xs text-slate-600 mt-1">We discuss home-care instructions, medication administration, and diet modifications.</p>
            </div>

            <div className="p-5 rounded-2xl bg-warm-50 border border-slate-200/60">
              <span className="text-2xl font-black text-teal-700">04</span>
              <h4 className="font-bold text-slate-900 text-sm mt-2">Follow-Up Support</h4>
              <p className="text-xs text-slate-600 mt-1">Direct contact via WhatsApp to check in on recovery milestones and medication tolerance.</p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-teal-900 rounded-3xl p-8 sm:p-12 text-white text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold">Ready to Introduce Your Pet to Our Doctors?</h3>
          <p className="text-teal-200 text-sm sm:text-base max-w-xl mx-auto">
            Book an appointment online or visit us at Shop #10, Civic Center, Moon Market, Faisal Town, Lahore.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="bg-white text-teal-950 hover:bg-slate-100 px-7 py-3 rounded-xl font-bold text-sm shadow-md transition"
            >
              Book an Appointment
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-teal-800 hover:bg-teal-700 text-white px-6 py-3 rounded-xl font-semibold text-sm transition"
            >
              Contact & Location Info
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
