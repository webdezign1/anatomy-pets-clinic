import React, { useState } from 'react';
import { 
  Stethoscope, Activity, Microscope, ShieldCheck, Pill, Sparkles, 
  ArrowRight, X, Calendar, Check, Info, MessageCircle 
} from 'lucide-react';
import { CLINIC_SERVICES, CLINIC_DATA, type ServiceItem } from '../data/clinicData';

interface ServicesSectionProps {
  onOpenBooking: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Map icon strings to Lucide components
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
    const message = encodeURIComponent(`Hello Anatomy Pets Clinic, I would like to inquire about your "${serviceTitle}" service.`);
    window.open(`https://wa.me/${CLINIC_DATA.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-teal-800 font-bold text-xs uppercase tracking-wider bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100">
            Clinical Scope & Care
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Veterinary Services
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Every service at Anatomy Pets Clinic is conducted with modern standards of safety, hygiene, 
            and compassionate animal handling.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CLINIC_SERVICES.map((service) => {
            const IconComponent = getIcon(service.iconName);
            return (
              <div
                key={service.id}
                className="group flex flex-col bg-warm-50/50 rounded-3xl overflow-hidden border border-slate-200/80 hover:border-teal-300 hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300"
              >
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                  
                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs text-teal-900 text-xs font-semibold px-3 py-1 rounded-full shadow-xs">
                    {service.category}
                  </span>

                  {/* Icon Floating */}
                  <div className="absolute bottom-4 left-4 p-2.5 rounded-xl bg-teal-700 text-white shadow-md">
                    <IconComponent className="w-5 h-5 text-teal-100" />
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-800 transition">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Feature preview */}
                  <div className="pt-2 border-t border-slate-100 space-y-1.5">
                    {service.features.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Card Actions */}
                  <div className="pt-4 flex items-center justify-between gap-3 border-t border-slate-200/60">
                    <button
                      onClick={() => setSelectedService(service)}
                      className="text-xs font-bold text-teal-800 hover:text-teal-950 inline-flex items-center gap-1 py-1"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => handleWhatsAppEnquiry(service.title)}
                      className="text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-lg border border-emerald-200 inline-flex items-center gap-1.5 transition"
                    >
                      <MessageCircle className="w-3 h-3 text-emerald-600" />
                      <span>WhatsApp</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 bg-gradient-to-r from-teal-800 to-teal-950 rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">Need Guidance on Your Pet's Condition?</h3>
            <p className="text-teal-200 text-sm max-w-xl">
              Unsure which consultation or test is right for your companion? Speak with our team or schedule a thorough in-person assessment.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="shrink-0 inline-flex items-center gap-2 bg-white text-teal-950 hover:bg-warm-100 px-6 py-3.5 rounded-xl font-bold text-sm shadow-md transition transform active:scale-95"
          >
            <Calendar className="w-4 h-4 text-teal-700" />
            <span>Book a Visit Now</span>
          </button>
        </div>

      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3 py-1 rounded-full">
              {selectedService.category}
            </span>

            <h3 className="text-2xl font-bold text-slate-900 mt-2 mb-3">
              {selectedService.title}
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {selectedService.fullDesc}
            </p>

            {/* Key features */}
            <div className="space-y-3 mb-6 bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">Service Highlights:</h4>
              <ul className="space-y-2">
                {selectedService.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Preparation Tip */}
            <div className="flex items-start gap-3 bg-amber-50/70 border border-amber-200/80 p-4 rounded-2xl text-xs text-amber-900 mb-6">
              <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block mb-0.5">Pet Owner Tip:</span>
                <span>{selectedService.preparationTip}</span>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <button
                onClick={() => {
                  setSelectedService(null);
                  onOpenBooking();
                }}
                className="w-full inline-flex items-center justify-center gap-2 bg-teal-700 hover:bg-teal-800 text-white py-3 rounded-xl font-bold text-sm shadow-xs transition"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>

              <button
                onClick={() => handleWhatsAppEnquiry(selectedService.title)}
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 py-3 rounded-xl font-semibold text-sm transition"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Inquire on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
