import React, { useState } from 'react';
import { 
  Stethoscope, Activity, Microscope, ShieldCheck, Pill, Sparkles, 
  Check, Info, MessageCircle, Calendar 
} from 'lucide-react';
import { CLINIC_SERVICES, CLINIC_DATA } from '../data/clinicData';

interface ServicesPageProps {
  onOpenBooking: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'General Practice', label: 'General Practice' },
    { id: 'Surgical Procedures', label: 'Surgeries' },
    { id: 'Diagnostics', label: 'Diagnostics & Labs' },
    { id: 'Preventative Healthcare', label: 'Vaccinations & Prevention' },
    { id: 'Pharmacy & Nutrition', label: 'Pharmacy & Food' },
    { id: 'Hygiene & Grooming', label: 'Grooming' },
  ];

  const filteredServices = activeCategory === 'all'
    ? CLINIC_SERVICES
    : CLINIC_SERVICES.filter((s) => s.category === activeCategory);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Stethoscope': return Stethoscope;
      case 'Activity': return Activity;
      case 'Microscope': return Microscope;
      case 'ShieldCheck': return ShieldCheck;
      case 'Pill': return Pill;
      case 'Sparkles': return Sparkles;
      default: return Stethoscope;
    }
  };

  const handleWhatsAppEnquiry = (serviceTitle: string) => {
    const text = encodeURIComponent(`Hello Anatomy Pets Clinic, I would like to inquire about "${serviceTitle}".`);
    window.open(`https://wa.me/${CLINIC_DATA.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="py-12 lg:py-20 bg-[#FBFBFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-teal-800 font-bold text-xs uppercase tracking-wider bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100">
            Medical Treatments & Wellness
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Our Veterinary Services & Surgical Procedures
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Detailed information on our clinical services, medical equipment, and guidelines on how to prepare your pet for appointments.
          </p>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition ${
                  activeCategory === cat.id
                    ? 'bg-teal-700 text-white shadow-xs'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Service Cards */}
        <div className="space-y-8">
          {filteredServices.map((service) => {
            const Icon = getIcon(service.iconName);
            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-xs hover:border-teal-300 transition duration-300 grid lg:grid-cols-12 gap-8 items-center"
              >
                {/* Visual */}
                <div className="lg:col-span-5 rounded-2xl overflow-hidden aspect-[16/10] bg-slate-100 relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 p-2 bg-teal-700 text-white rounded-xl shadow-md">
                    <Icon className="w-5 h-5 text-teal-100" />
                  </div>
                  <span className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-xs text-teal-900 text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                    {service.category}
                  </span>
                </div>

                {/* Details */}
                <div className="lg:col-span-7 space-y-4">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">{service.title}</h2>
                    <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
                      {service.fullDesc}
                    </p>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid sm:grid-cols-2 gap-2 pt-2">
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Preparation Tip Box */}
                  <div className="flex items-start gap-3 bg-amber-50/70 border border-amber-200/80 p-3.5 rounded-2xl text-xs text-amber-900">
                    <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-semibold block">Preparation Guidance:</strong>
                      <span>{service.preparationTip}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <button
                      onClick={onOpenBooking}
                      className="inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-xs transition"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book for This Service</span>
                    </button>

                    <button
                      onClick={() => handleWhatsAppEnquiry(service.title)}
                      className="inline-flex items-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-600" />
                      <span>Inquire via WhatsApp</span>
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
