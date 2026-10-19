import React, { useState } from 'react';
import { Award, GraduationCap, Clock, CheckCircle2, User } from 'lucide-react';
import { CLINIC_DOCTORS } from '../data/clinicData';

export const TeamSection: React.FC = () => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="doctors" className="py-16 lg:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-teal-800 font-bold text-xs uppercase tracking-wider bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100">
            Veterinary Practitioners
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Meet Our Veterinary Specialists
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Our certified veterinary surgeons bring clinical precision, gentle animal handling, 
            and deep dedication to small animal medicine in Faisal Town, Lahore.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {CLINIC_DOCTORS.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-warm-50/50 rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:border-teal-300 hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row group"
            >
              {/* Doctor Photo */}
              <div className="sm:w-2/5 relative aspect-square sm:aspect-auto bg-slate-100 shrink-0 overflow-hidden">
                {!imageErrors[doctor.id] ? (
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
                    loading="lazy"
                    onError={() => handleImageError(doctor.id)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-teal-800 text-teal-100 p-6 text-center">
                    <User className="w-16 h-16 text-teal-300 mb-2" />
                    <span className="text-xs font-semibold">{doctor.name}</span>
                  </div>
                )}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-teal-900 text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-xs flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>Verified</span>
                </div>
              </div>

              {/* Doctor Details */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[11px] font-bold text-teal-800 uppercase tracking-wider block">
                    {doctor.role}
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1 leading-snug">
                    {doctor.name}
                  </h3>

                  <div className="mt-3 space-y-1.5 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-teal-700 shrink-0" />
                      <span>{doctor.qualifications}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-teal-700 shrink-0" />
                      <span>{doctor.specialty}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-teal-700 shrink-0" />
                      <span>{doctor.experience}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 mt-4 leading-relaxed">
                    {doctor.bio}
                  </p>
                </div>

                {/* Professional Status Bar (Replaces owner note) */}
                <div className="mt-4 pt-3.5 border-t border-slate-200/70 flex items-center justify-between text-xs">
                  <span className="inline-flex items-center gap-1.5 text-emerald-800 bg-emerald-50 border border-emerald-200/70 px-2.5 py-1 rounded-full font-semibold text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Available on Schedule
                  </span>
                  <span className="text-slate-500 font-medium text-[11px]">PVMC Registered</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
