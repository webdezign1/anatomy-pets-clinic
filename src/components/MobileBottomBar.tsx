import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { CLINIC_DATA } from '../data/clinicData';

interface MobileBottomBarProps {
  onOpenBooking: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 shadow-2xl safe-area-pb">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Button */}
        <a
          href={`tel:${CLINIC_DATA.phone}`}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200 active:scale-95 transition"
        >
          <Phone className="w-4 h-4 text-teal-700" />
          <span className="text-[11px] font-bold mt-0.5">Call Us</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${CLINIC_DATA.whatsapp}?text=Hello%20Anatomy%20Pets%20Clinic,%20I%20would%20like%20to%20inquire%20about%20veterinary%20care.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 active:scale-95 transition"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600" />
          <span className="text-[11px] font-bold mt-0.5">WhatsApp</span>
        </a>

        {/* Book Button */}
        <button
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-teal-700 text-white hover:bg-teal-800 active:scale-95 shadow-xs transition"
        >
          <Calendar className="w-4 h-4 text-teal-200" />
          <span className="text-[11px] font-bold mt-0.5">Book Now</span>
        </button>
      </div>
    </div>
  );
};
