import React from 'react';
import { Star, Shield, Activity, MapPin, Sparkles } from 'lucide-react';
import { CLINIC_DATA } from '../data/clinicData';

export const TrustHighlights: React.FC = () => {
  const highlights = [
    {
      title: `${CLINIC_DATA.googleRating}★ Google Rating`,
      description: `Based on ${CLINIC_DATA.totalReviews}+ genuine reviews from local Lahore pet parents.`,
      icon: Star,
      iconColor: 'text-amber-500 bg-amber-50',
    },
    {
      title: 'Soft-Tissue & Pet Surgery',
      description: 'Sterilization, hernia repair, and surgical care with strict aseptic standards.',
      icon: Shield,
      iconColor: 'text-teal-700 bg-teal-50',
    },
    {
      title: 'Modern Ultrasound & Labs',
      description: 'Accurate diagnostic imaging and rapid blood tests for precise treatments.',
      icon: Activity,
      iconColor: 'text-emerald-700 bg-emerald-50',
    },
    {
      title: 'Faisal Town Location',
      description: 'Shop #10, Civic Center near Moon Market with easy access and pet-safe entry.',
      icon: MapPin,
      iconColor: 'text-sky-700 bg-sky-50',
    },
  ];

  return (
    <section className="bg-white border-y border-slate-100 py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-2xl bg-warm-50/60 border border-slate-200/60 hover:border-teal-300 hover:shadow-xs transition duration-200"
              >
                <div className={`p-3 rounded-xl shrink-0 ${item.iconColor}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassuring note */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-2 text-xs text-slate-500 text-center">
          <Sparkles className="w-3.5 h-3.5 text-teal-600" />
          <span>Every treatment protocol at Anatomy Pets Clinic is tailored to your pet's age, species, and medical history.</span>
        </div>
      </div>
    </section>
  );
};
