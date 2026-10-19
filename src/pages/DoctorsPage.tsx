import React, { useState } from 'react';
import { Award, GraduationCap, Clock, CheckCircle2, User, Calendar } from 'lucide-react';
import { CLINIC_DOCTORS } from '../data/clinicData';

interface DoctorsPageProps {
  onOpenBooking: () => void;
}

export const DoctorsPage: React.FC<DoctorsPageProps> = ({ onOpenBooking }) => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="py-12 lg:py-20 bg-[#FBFBFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-teal-800 font-bold text-xs uppercase tracking-wider bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100">
            Our Certified Doctors
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Meet Our Veterinary Doctors & Surgeons
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Our practitioners are registered veterinary doctors dedicated to patient safety, diagnostic clarity, and humane animal welfare.
          </p>
        </div>

        {/* Doctors Detailed Cards */}
        <div className="space-y-10 max-w-5xl mx-auto">
          {CLINIC_DOCTORS.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:border-teal-300 hover:shadow-xl transition-all duration-300 grid md:grid-cols-12 gap-6 items-center p-6 sm:p-8"
            >
              {/* Doctor Image */}
              <div className="md:col-span-5 rounded-2xl overflow-hidden aspect-[4/5] bg-slate-100 relative">
                {!imageErrors[doctor.id] ? (
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                    onError={() => handleImageError(doctor.id)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-teal-800 text-teal-100 p-6 text-center">
                    <User className="w-20 h-20 text-teal-300 mb-2" />
                    <span className="text-sm font-semibold">{doctor.name}</span>
                  </div>
                )}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-teal-900 text-xs font-bold px-3 py-1 rounded-full shadow-xs flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>PVMC Registered</span>
                </div>
              </div>

              {/* Bio & Credentials */}
              <div className="md:col-span-7 space-y-4">
                <div>
                  <span className="text-xs font-bold text-teal-800 uppercase tracking-wide">
                    {doctor.role}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                    {doctor.name}
                  </h2>
                </div>

                <div className="space-y-2 text-xs sm:text-sm text-slate-700 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <GraduationCap className="w-4 h-4 text-teal-700 shrink-0" />
                    <span><strong>Qualifications:</strong> {doctor.qualifications}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Award className="w-4 h-4 text-teal-700 shrink-0" />
                    <span><strong>Clinical Focus:</strong> {doctor.specialty}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-teal-700 shrink-0" />
                    <span><strong>Clinical Experience:</strong> {doctor.experience}</span>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {doctor.bio}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={onOpenBooking}
                    className="inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-xs transition"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Request Consultation with Doctor</span>
                  </button>

                  <span className="inline-flex items-center gap-1.5 text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-xl font-semibold text-xs border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Available on Schedule
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
