import React, { useState } from 'react';
import { Phone, Clock, MapPin, Calendar, Menu, X, MessageCircle, HeartPulse } from 'lucide-react';
import { CLINIC_DATA } from '../data/clinicData';

interface HeaderProps {
  activePage: string;
  setActivePage: (page: string) => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activePage, setActivePage, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Clean, concise labels to guarantee single-line desktop navigation
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'doctors', label: 'Veterinarians' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId: string) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-100">
      {/* Top Announcement Bar */}
      <div className="bg-teal-950 text-teal-100 text-[11px] sm:text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 overflow-hidden flex-nowrap whitespace-nowrap">
          <div className="flex items-center space-x-3 sm:space-x-4 shrink truncate">
            <span className="flex items-center gap-1.5 font-medium text-teal-300">
              <Clock className="w-3.5 h-3.5 shrink-0" />
              <span>Mon - Sat: 11 AM - 10 PM | Sun: 2 PM - 9 PM</span>
            </span>
            <span className="hidden md:flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>Faisal Town, Lahore</span>
            </span>
          </div>

          <div className="flex items-center space-x-2.5 shrink-0 ml-auto">
            <a
              href={`tel:${CLINIC_DATA.phone}`}
              className="flex items-center gap-1.5 bg-teal-800 hover:bg-teal-700 text-white px-2.5 py-0.5 rounded-lg transition font-semibold"
            >
              <Phone className="w-3 h-3 text-amber-400 shrink-0" />
              <span>{CLINIC_DATA.displayPhone}</span>
            </a>
            <a
              href={`https://wa.me/${CLINIC_DATA.whatsapp}?text=Hello%20Anatomy%20Pets%20Clinic,%20I%20would%20like%20to%20inquire%20about%20veterinary%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium"
            >
              <MessageCircle className="w-3 h-3 shrink-0" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar — Strictly 1 Line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-3 xl:gap-6 flex-nowrap">
          
          {/* Brand Logo & Name (No wrapping) */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group select-none shrink-0"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-teal-700 to-teal-900 flex items-center justify-center text-white shadow-md shadow-teal-900/10 group-hover:scale-105 transition-transform shrink-0">
              <HeartPulse className="w-6 h-6 text-teal-200" />
            </div>
            <div className="shrink-0">
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-teal-950 block leading-tight whitespace-nowrap">
                Anatomy <span className="text-teal-700 font-bold">Pets Clinic</span>
              </span>
              <span className="text-[10px] xl:text-[11px] font-medium text-slate-500 uppercase tracking-wider hidden sm:block whitespace-nowrap">
                Veterinary Hospital & Surgery
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links — Guaranteed Single Line */}
          <nav className="hidden lg:flex items-center justify-center space-x-1 xl:space-x-1.5 flex-nowrap shrink-0">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-3 py-1.5 xl:px-3.5 xl:py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all whitespace-nowrap ${
                  activePage === link.id
                    ? 'text-teal-900 bg-teal-50 border border-teal-200/60 shadow-2xs'
                    : 'text-slate-600 hover:text-teal-800 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Header Action CTA (No wrapping) */}
          <div className="hidden lg:flex items-center shrink-0">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white px-4 xl:px-5 py-2.5 rounded-xl font-bold text-xs xl:text-sm shadow-sm hover:shadow transition-all transform active:scale-95 whitespace-nowrap shrink-0"
            >
              <Calendar className="w-4 h-4 text-teal-200 shrink-0" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Actions */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-1.5 bg-teal-700 hover:bg-teal-800 text-white px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-teal-800 hover:bg-slate-100 transition focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 animate-fadeIn shadow-lg">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition ${
                  activePage === link.id
                    ? 'bg-teal-50 text-teal-900 border border-teal-200/60'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 space-y-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 bg-teal-700 hover:bg-teal-800 text-white py-3 rounded-xl font-bold text-sm shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Request an Appointment</span>
            </button>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={`tel:${CLINIC_DATA.phone}`}
                className="flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 py-2.5 rounded-xl text-xs font-bold"
              >
                <Phone className="w-3.5 h-3.5 text-teal-700" />
                <span>Call Clinic</span>
              </a>
              <a
                href={`https://wa.me/${CLINIC_DATA.whatsapp}?text=Hello%20Anatomy%20Pets%20Clinic,%20I%20would%20like%20to%20inquire%20about%20veterinary%20care.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 py-2.5 rounded-xl text-xs font-bold border border-emerald-200"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
