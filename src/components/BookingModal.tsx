import React from 'react';
import { X } from 'lucide-react';
import { AppointmentForm } from './AppointmentForm';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, serviceId }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs animate-fadeIn overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl my-8 bg-transparent"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating close button */}
        <button
          onClick={onClose}
          className="absolute -top-3 -right-2 sm:-top-4 sm:-right-4 z-20 p-2.5 rounded-full bg-slate-900 text-white hover:bg-slate-800 shadow-xl border border-slate-700 transition"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        <AppointmentForm 
          initialServiceId={serviceId} 
          onSuccessClose={onClose} 
        />
      </div>
    </div>
  );
};
