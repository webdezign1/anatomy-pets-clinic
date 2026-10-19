import React from 'react';
import { Heart, Stethoscope, Clock, ShieldCheck, Award, MessageSquare } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: Heart,
      title: 'Low-Stress, Gentle Handling',
      description: 'We respect animal behavioral cues. We take the extra time needed to help nervous cats and dogs feel safe before physical contact.',
    },
    {
      icon: ShieldCheck,
      title: 'Dedicated Surgical Protocols',
      description: 'From routine spaying to soft-tissue hernia corrections, we adhere strictly to pre-anesthetic screening, vital monitoring, and aseptic standards.',
    },
    {
      icon: MessageSquare,
      title: 'Transparent Communication',
      description: 'We discuss diagnostics, treatment options, and cost estimates openly with you before initiating procedures—no surprise tests or hidden charges.',
    },
    {
      icon: Stethoscope,
      title: 'Evidence-Based Medicine',
      description: 'Our treatments are guided by current veterinary clinical standards, sound diagnostics, and high-quality cold-chain vaccines.',
    },
    {
      icon: Clock,
      title: 'Extended Operating Hours',
      description: 'Open 6 days a week until 10:00 PM (and Sundays until 9:00 PM), accommodating your busy work and family schedules in Lahore.',
    },
    {
      icon: Award,
      title: 'Community Trusted in Faisal Town',
      description: 'Proudly serving companion pets across Faisal Town, Model Town, Garden Town, and surrounding Lahore neighborhoods with consistent 4.7★ ratings.',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-warm-50/70 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-teal-800 font-bold text-xs uppercase tracking-wider bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100">
            Our Standard of Care
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Pet Owners Trust Anatomy Pets Clinic
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            We believe that veterinary care should combine clinical rigor with genuine empathy for every animal that walks through our doors.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border border-slate-200/70 shadow-xs hover:border-teal-300 hover:shadow-lg hover:shadow-teal-900/5 transition duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
