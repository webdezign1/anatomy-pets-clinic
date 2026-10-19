import React from 'react';
import { AppointmentForm } from '../components/AppointmentForm';
import { LocationSection } from '../components/LocationSection';
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import { CLINIC_DATA } from '../data/clinicData';

export const ContactPage: React.FC = () => {
  return (
    <div className="py-12 lg:py-20 bg-[#FBFBFA] space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-teal-800 font-bold text-xs uppercase tracking-wider bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100">
            Reach Out to Our Team
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Contact Anatomy Pets Clinic
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Schedule an appointment, inquire about a surgery or vaccination, or locate our clinic near Moon Market, Faisal Town, Lahore.
          </p>
        </div>

        {/* Quick Contact Cards Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <a
            href={`tel:${CLINIC_DATA.phone}`}
            className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs hover:border-teal-300 hover:shadow-md transition flex flex-col justify-between space-y-3"
          >
            <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm">Helpline Number</h3>
              <p className="text-base font-extrabold text-teal-800 mt-1">{CLINIC_DATA.displayPhone}</p>
              <p className="text-xs text-slate-400 mt-0.5">Direct reception desk</p>
            </div>
          </a>

          <a
            href={`https://wa.me/${CLINIC_DATA.whatsapp}?text=Hello%20Anatomy%20Pets%20Clinic,%20I%20would%20like%20to%20inquire%20about%20veterinary%20services.`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs hover:border-emerald-300 hover:shadow-md transition flex flex-col justify-between space-y-3"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm">WhatsApp Chat</h3>
              <p className="text-base font-extrabold text-emerald-700 mt-1">Instant Support</p>
              <p className="text-xs text-slate-400 mt-0.5">Quick consultation queries</p>
            </div>
          </a>

          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm">Opening Hours</h3>
              <p className="text-xs font-semibold text-slate-700 mt-1">Mon–Sat: 11 AM - 10 PM</p>
              <p className="text-xs font-semibold text-slate-700">Sun: 02 PM - 09 PM</p>
            </div>
          </div>

          <a
            href={CLINIC_DATA.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs hover:border-teal-300 hover:shadow-md transition flex flex-col justify-between space-y-3"
          >
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-700 flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm">Location</h3>
              <p className="text-xs font-semibold text-slate-700 mt-1">Faisal Town, Lahore</p>
              <p className="text-xs text-teal-700 font-bold mt-0.5">Open in Google Maps →</p>
            </div>
          </a>
        </div>

        {/* Appointment Form Component */}
        <div className="pt-4">
          <AppointmentForm />
        </div>

        {/* Map & Location Embed */}
        <div className="pt-6">
          <LocationSection />
        </div>

      </div>
    </div>
  );
};
