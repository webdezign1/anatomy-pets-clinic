import React from 'react';
import { HeartPulse, Phone, MapPin, Clock, MessageCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { CLINIC_DATA } from '../data/clinicData';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-24 lg:pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div 
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-teal-700 flex items-center justify-center text-white">
                <HeartPulse className="w-6 h-6 text-teal-200" />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                Anatomy <span className="text-teal-400">Pets Clinic</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {CLINIC_DATA.shortDescription}
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-teal-400 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>Certified Veterinary Practice • Lahore, PK</span>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button 
                  onClick={() => onNavigate('home')} 
                  className="hover:text-teal-400 transition"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('about')} 
                  className="hover:text-teal-400 transition"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('services')} 
                  className="hover:text-teal-400 transition"
                >
                  Veterinary Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('doctors')} 
                  className="hover:text-teal-400 transition"
                >
                  Our Veterinarians
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('gallery')} 
                  className="hover:text-teal-400 transition"
                >
                  Clinic Gallery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contact')} 
                  className="hover:text-teal-400 transition"
                >
                  Contact & Location
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services Summary (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Key Procedures</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>• Soft-Tissue & Hernia Surgeries</li>
              <li>• Spay & Neuter Sterilization</li>
              <li>• Diagnostic Ultrasound & Lab Testing</li>
              <li>• Vaccinations & Deworming Protocols</li>
              <li>• In-House Pet Pharmacy & Diets</li>
              <li>• Medicated Baths & Hygiene Care</li>
            </ul>
          </div>

          {/* Col 4: Verified Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Contact & Hours</h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>Shop #10, Civic Center, Moon Market, Faisal Town, Lahore</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`tel:${CLINIC_DATA.phone}`} className="hover:text-white font-semibold text-teal-300">
                  {CLINIC_DATA.displayPhone}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <p>Mon - Sat: 11:00 AM – 10:00 PM</p>
                  <p>Sunday: 02:00 PM – 09:00 PM</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={`https://wa.me/${CLINIC_DATA.whatsapp}?text=Hello%20Anatomy%20Pets%20Clinic,%20I%20have%20an%20inquiry.`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-900 hover:bg-emerald-700 text-emerald-400 hover:text-white rounded-xl transition"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={CLINIC_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-900 hover:bg-teal-700 text-teal-300 hover:text-white rounded-xl transition"
                aria-label="Google Maps"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Anatomy Pets Clinic. All rights reserved.
          </p>

          <div className="flex items-center space-x-6">
            <button
              onClick={() => onNavigate('privacy')}
              className="hover:text-slate-300 transition"
            >
              Privacy Policy
            </button>
            <a
              href={CLINIC_DATA.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 transition"
            >
              Google Business Profile
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
