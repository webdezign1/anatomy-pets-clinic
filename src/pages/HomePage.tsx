import React from 'react';
import { Hero } from '../components/Hero';
import { TrustHighlights } from '../components/TrustHighlights';
import { IntroSection } from '../components/IntroSection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { FaqSection } from '../components/FaqSection';
import { CLINIC_SERVICES, CLINIC_DOCTORS, CLINIC_REVIEWS, CLINIC_DATA } from '../data/clinicData';
import { ArrowRight, Star, Calendar, MessageCircle } from 'lucide-react';

interface HomePageProps {
  onOpenBooking: () => void;
  onNavigate: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenBooking, onNavigate }) => {
  return (
    <div>
      {/* 1. Hero Section */}
      <Hero
        onOpenBooking={onOpenBooking}
        onNavigateToContact={() => onNavigate('contact')}
      />

      {/* 2. Trust Highlights */}
      <TrustHighlights />

      {/* 3. Welcome / Intro */}
      <IntroSection onLearnMore={() => onNavigate('about')} />

      {/* 4. Featured Services Preview (Top 3) */}
      <section className="py-16 lg:py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3 max-w-2xl">
              <span className="text-teal-800 font-bold text-xs uppercase tracking-wider bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100">
                Core Specialties
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Veterinary Services & Surgical Care
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                From routine wellness exams to sterile soft-tissue surgeries and diagnostic ultrasound in Faisal Town, Lahore.
              </p>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 text-teal-800 hover:text-teal-950 font-bold text-sm bg-teal-50 hover:bg-teal-100 px-5 py-3 rounded-xl transition duration-150 shrink-0 self-start md:self-auto"
            >
              <span>View All 6 Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CLINIC_SERVICES.slice(0, 3).map((service) => (
              <div
                key={service.id}
                className="group bg-warm-50/50 rounded-3xl overflow-hidden border border-slate-200/80 hover:border-teal-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs text-teal-900 text-xs font-semibold px-3 py-1 rounded-full shadow-xs">
                    {service.category}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-800 transition">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                    <button
                      onClick={() => onNavigate('services')}
                      className="text-xs font-bold text-teal-800 hover:text-teal-950 inline-flex items-center gap-1"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={onOpenBooking}
                      className="text-xs font-semibold bg-teal-700 hover:bg-teal-800 text-white px-3 py-1.5 rounded-lg transition"
                    >
                      Book Visit
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us */}
      <WhyChooseUs />

      {/* 6. Doctors Spotlight Preview */}
      <section className="py-16 lg:py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3 max-w-2xl">
              <span className="text-teal-800 font-bold text-xs uppercase tracking-wider bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100">
                Medical Expertise
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Meet Our Lead Veterinary Doctors
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Certified veterinarians and surgeons committed to patient wellness and gentle pet handling.
              </p>
            </div>
            <button
              onClick={() => onNavigate('doctors')}
              className="inline-flex items-center gap-2 text-teal-800 hover:text-teal-950 font-bold text-sm bg-teal-50 hover:bg-teal-100 px-5 py-3 rounded-xl transition duration-150 shrink-0 self-start md:self-auto"
            >
              <span>View Full Profiles</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {CLINIC_DOCTORS.map((doc) => (
              <div
                key={doc.id}
                onClick={() => onNavigate('doctors')}
                className="bg-warm-50/50 rounded-3xl p-6 border border-slate-200/80 hover:border-teal-300 hover:shadow-lg transition cursor-pointer flex items-center gap-5"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0 bg-slate-100">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-teal-800 uppercase tracking-wide block">
                    {doc.role}
                  </span>
                  <h3 className="font-extrabold text-slate-900 text-base sm:text-lg leading-snug">
                    {doc.name}
                  </h3>
                  <p className="text-xs text-slate-500">{doc.qualifications}</p>
                  <p className="text-xs text-teal-700 font-semibold pt-1">
                    {doc.experience}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Quick Appointment Request Banner */}
      <section className="py-16 bg-gradient-to-r from-teal-900 to-teal-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase font-bold tracking-wider text-teal-300 bg-teal-800/80 px-3 py-1 rounded-full">
              Book in Advance
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Schedule Your Companion's Visit Today
            </h3>
            <p className="text-teal-200 text-sm max-w-xl">
              Consultations, vaccinations, surgical reviews, and grooming. Walk-ins welcome; appointments recommended.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3.5 shrink-0">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 bg-white text-teal-950 hover:bg-slate-100 px-6 py-3.5 rounded-xl font-bold text-sm shadow-md transition transform active:scale-95"
            >
              <Calendar className="w-4 h-4 text-teal-700" />
              <span>Book Appointment</span>
            </button>
            <a
              href={`https://wa.me/${CLINIC_DATA.whatsapp}?text=Hello%20Anatomy%20Pets%20Clinic,%20I%20would%20like%20to%20book%20a%20visit.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3.5 rounded-xl font-semibold text-sm transition"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* 8. Google Reviews Snippet */}
      <section className="py-16 lg:py-20 bg-warm-50/60 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
            <div className="inline-flex items-center gap-1.5 text-amber-500 font-bold text-xs bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>4.7 Rating from 85+ Pet Parents on Google</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Trusted by Local Pet Owners
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {CLINIC_REVIEWS.slice(0, 2).map((rev) => (
              <div
                key={rev.id}
                className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-teal-800 bg-teal-50 px-2 py-0.5 rounded-full">
                    {rev.serviceMentioned}
                  </span>
                </div>
                <p className="text-slate-700 text-xs sm:text-sm italic">
                  "{rev.comment}"
                </p>
                <div className="pt-2 text-xs">
                  <span className="font-bold text-slate-900">{rev.author}</span>
                  <span className="text-slate-500"> • {rev.petType}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQs */}
      <FaqSection />
    </div>
  );
};
