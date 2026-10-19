import React from 'react';
import { Calendar, PhoneCall, Star, ShieldCheck, MapPin, Heart } from 'lucide-react';
import { CLINIC_DATA } from '../data/clinicData';

interface HeroProps {
  onOpenBooking: () => void;
  onNavigateToContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onNavigateToContact }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-teal-50/70 via-white to-warm-50 pt-8 pb-16 lg:py-20">
      {/* Decorative background blurs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-teal-100/60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-emerald-100/50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Trust Pill / Location */}
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-xs border border-teal-200/80 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-teal-900 shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-teal-600" />
                Faisal Town, Lahore
              </span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1 text-amber-600">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                {CLINIC_DATA.googleRating} Google Rating ({CLINIC_DATA.totalReviews}+ Reviews)
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Compassionate Veterinary Care for Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-teal-800 to-emerald-700">
                Beloved Pets
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Every pet deserves thoughtful care, expert attention, and a comfortable experience. 
              Discover veterinary services designed to support your companion's health and wellbeing—from routine wellness and vaccinations to sterile soft-tissue surgeries.
            </p>

            {/* Trust Slogan */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-sm font-medium text-teal-800">
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
              <span>Caring for pets, supporting the people who love them.</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-teal-700 hover:bg-teal-800 text-white px-7 py-3.5 rounded-xl font-semibold text-base shadow-lg shadow-teal-900/15 hover:shadow-xl hover:shadow-teal-900/25 transition-all transform active:scale-98"
              >
                <Calendar className="w-5 h-5 text-teal-200" />
                <span>Book an Appointment</span>
              </button>

              <button
                onClick={onNavigateToContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 px-6 py-3.5 rounded-xl font-semibold text-base shadow-xs hover:border-slate-400 transition-all"
              >
                <PhoneCall className="w-5 h-5 text-teal-700" />
                <span>Contact the Clinic</span>
              </button>
            </div>

            {/* Reassuring Key Factors */}
            <div className="pt-4 border-t border-slate-200/70 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Sterile Surgery</h4>
                  <p className="text-[11px] text-slate-500">Soft-tissue & spay/neuter</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <ShieldCheck className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Diagnostics</h4>
                  <p className="text-[11px] text-slate-500">Ultrasound & rapid tests</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <ShieldCheck className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Gentle Care</h4>
                  <p className="text-[11px] text-slate-500">Low-stress pet handling</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Imagery with Floating Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=900&q=80"
                  alt="Veterinarian examining a healthy happy dog at Anatomy Pets Clinic"
                  className="w-full h-full object-cover object-center transform hover:scale-102 transition duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="text-xs uppercase font-semibold tracking-wider text-teal-300">Anatomy Pets Clinic</p>
                  <p className="text-sm font-medium text-slate-100">Caring veterinary medicine in Faisal Town, Lahore</p>
                </div>
              </div>

              {/* Floating Review Badge */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-slate-100 hidden sm:flex items-center gap-3 animate-bounce-slow">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <div className="flex items-center gap-1 font-bold text-slate-900 text-sm">
                    <span>4.7 / 5.0</span>
                    <span className="text-xs font-normal text-slate-500">(Google)</span>
                  </div>
                  <p className="text-[11px] text-slate-500">Verified pet parent reviews</p>
                </div>
              </div>

              {/* Floating Location Badge */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-700">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">Moon Market, Civic Center</div>
                  <p className="text-[11px] text-slate-500">Faisal Town, Lahore</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
