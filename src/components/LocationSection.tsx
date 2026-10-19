import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, Navigation, AlertCircle } from 'lucide-react';
import { CLINIC_DATA } from '../data/clinicData';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-16 lg:py-24 bg-[#FBFBFA] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-teal-800 font-bold text-xs uppercase tracking-wider bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100">
            Visit Our Clinic
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Location, Hours & Easy Directions
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Located in the central Civic Center Commercial Area near Moon Market, Faisal Town, Lahore, 
            with dedicated parking and safe pet reception.
          </p>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Details Card */}
          <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              
              {/* Address Block */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-teal-50 text-teal-700 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Clinic Address</h3>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    {CLINIC_DATA.address.line1}, {CLINIC_DATA.address.landmark}<br />
                    {CLINIC_DATA.address.area}<br />
                    {CLINIC_DATA.address.city}, {CLINIC_DATA.address.country}
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-4 pt-4 border-t border-slate-100">
                <div className="p-3 rounded-2xl bg-amber-50 text-amber-700 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 text-base">Clinical Hours</h3>
                  <div className="mt-2 space-y-2 text-xs sm:text-sm">
                    {CLINIC_DATA.openingHours.map((h, i) => (
                      <div key={i} className="flex justify-between py-1 border-b border-slate-100 last:border-0">
                        <span className="font-medium text-slate-600">{h.days}:</span>
                        <span className="font-bold text-slate-900">{h.time}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 flex items-start gap-2 bg-slate-50 p-3 rounded-xl text-xs text-slate-600 border border-slate-200/60">
                    <AlertCircle className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>{CLINIC_DATA.holidayNotice}</span>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="flex items-start gap-4 pt-4 border-t border-slate-100">
                <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-700 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Helpline & WhatsApp</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Direct reception & appointment coordination</p>
                  <p className="text-lg font-extrabold text-teal-800 mt-1">
                    {CLINIC_DATA.displayPhone}
                  </p>
                </div>
              </div>

            </div>

            {/* Quick Action Buttons */}
            <div className="pt-4 space-y-2.5">
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${CLINIC_DATA.phone}`}
                  className="flex items-center justify-center gap-2 bg-teal-700 hover:bg-teal-800 text-white py-3 rounded-xl font-bold text-xs sm:text-sm shadow-xs transition"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Clinic</span>
                </a>
                <a
                  href={`https://wa.me/${CLINIC_DATA.whatsapp}?text=Hello%20Anatomy%20Pets%20Clinic,%20I%20would%20like%20to%20visit%20your%20clinic.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-bold text-xs sm:text-sm shadow-xs transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <a
                href={CLINIC_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 py-3 rounded-xl font-semibold text-xs sm:text-sm transition"
              >
                <Navigation className="w-4 h-4 text-teal-700" />
                <span>Get Directions on Google Maps</span>
              </a>
            </div>

          </div>

          {/* Right Map Embed */}
          <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm relative min-h-[380px] lg:min-h-full">
            <iframe
              title="Anatomy Pets Clinic Google Maps Location"
              src="https://maps.google.com/maps?q=Anatomy%20Pets%20Clinic%20Faisal%20Town%20Lahore&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[400px] border-0"
              loading="lazy"
              allowFullScreen
            />
            {/* Overlay tag */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-md border border-slate-200 text-xs font-bold text-slate-800 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-rose-500" />
              <span>Anatomy Pets Clinic • Faisal Town, Lahore</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
