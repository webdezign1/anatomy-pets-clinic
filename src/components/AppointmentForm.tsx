import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle2, AlertCircle, MessageCircle, Send } from 'lucide-react';
import { CLINIC_DATA, CLINIC_SERVICES } from '../data/clinicData';

interface AppointmentFormProps {
  initialServiceId?: string;
  onSuccessClose?: () => void;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({ initialServiceId }) => {
  const [formData, setFormData] = useState({
    ownerName: '',
    phone: '',
    email: '',
    petName: '',
    petType: 'Dog',
    serviceId: initialServiceId || 'consultations',
    preferredDate: '',
    preferredTime: 'Morning (11:00 AM - 02:00 PM)',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedSummary, setSubmittedSummary] = useState<typeof formData | null>(null);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.ownerName.trim()) newErrors.ownerName = 'Please enter your full name.';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a valid contact number.';
    } else if (formData.phone.trim().length < 10) {
      newErrors.phone = 'Please enter a valid phone number with area code.';
    }
    if (!formData.petName.trim()) newErrors.petName = "Please enter your pet's name.";
    if (!formData.preferredDate) newErrors.preferredDate = 'Please select a preferred date.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real asynchronous submission to clinic booking system
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setSubmittedSummary(formData);
    }, 900);
  };

  // Direct WhatsApp instant send handler
  const handleDirectWhatsAppSend = () => {
    if (!validate()) return;

    const selectedService = CLINIC_SERVICES.find((s) => s.id === formData.serviceId)?.title || formData.serviceId;
    const text = encodeURIComponent(
      `🐾 *New Appointment Request - Anatomy Pets Clinic*\n\n` +
      `👤 *Owner:* ${formData.ownerName}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `📧 *Email:* ${formData.email || 'Not provided'}\n` +
      `🐶 *Pet Name:* ${formData.petName} (${formData.petType})\n` +
      `🩺 *Service:* ${selectedService}\n` +
      `📅 *Preferred Date:* ${formData.preferredDate}\n` +
      `⏰ *Preferred Time:* ${formData.preferredTime}\n` +
      `📝 *Notes/Symptoms:* ${formData.notes || 'None'}\n\n` +
      `_Please confirm slot availability. Thank you!_`
    );

    window.open(`https://wa.me/${CLINIC_DATA.whatsapp}?text=${text}`, '_blank');
    setIsSuccess(true);
    setSubmittedSummary(formData);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setSubmittedSummary(null);
    setFormData({
      ownerName: '',
      phone: '',
      email: '',
      petName: '',
      petType: 'Dog',
      serviceId: 'consultations',
      preferredDate: '',
      preferredTime: 'Morning (11:00 AM - 02:00 PM)',
      notes: '',
    });
  };

  return (
    <div id="booking-section" className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xl max-w-3xl mx-auto">
      {isSuccess && submittedSummary ? (
        <div className="text-center py-8 space-y-6 animate-fadeIn">
          <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-extrabold text-slate-900">
              Appointment Request Received!
            </h3>
            <p className="text-slate-600 text-sm max-w-md mx-auto">
              Thank you, <span className="font-semibold text-slate-900">{submittedSummary.ownerName}</span>. 
              Our team at Anatomy Pets Clinic will review your request for{' '}
              <span className="font-semibold text-slate-900">{submittedSummary.petName}</span> and contact you at{' '}
              <span className="font-semibold text-teal-800">{submittedSummary.phone}</span> to confirm your time slot.
            </p>
          </div>

          {/* Booking Summary Box */}
          <div className="bg-slate-50 p-5 rounded-2xl text-left border border-slate-200 text-xs sm:text-sm space-y-2 max-w-md mx-auto">
            <div className="flex justify-between border-b border-slate-200 pb-2">
              <span className="text-slate-500">Service:</span>
              <span className="font-semibold text-slate-800">
                {CLINIC_SERVICES.find((s) => s.id === submittedSummary.serviceId)?.title}
              </span>
            </div>
            <div className="flex justify-between border-b border-slate-200 pb-2">
              <span className="text-slate-500">Preferred Date:</span>
              <span className="font-semibold text-slate-800">{submittedSummary.preferredDate}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Time Window:</span>
              <span className="font-semibold text-slate-800">{submittedSummary.preferredTime}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleDirectWhatsAppSend}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-sm transition"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send via WhatsApp for Instant Response</span>
            </button>

            <button
              onClick={handleReset}
              className="w-full sm:w-auto text-xs font-semibold text-slate-600 hover:text-slate-900 px-4 py-2"
            >
              Submit Another Request
            </button>
          </div>

          <p className="text-[11px] text-slate-400 italic">
            * Please note: Online requests do not constitute a confirmed medical appointment until acknowledged by our staff.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-center space-y-2 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-3 py-1 rounded-full">
              Appointment Scheduling
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Let's Take Care of Your Pet
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-lg mx-auto">
              Fill in your details below to request a convenient time. For urgent situations, please call our clinic directly at{' '}
              <a href={`tel:${CLINIC_DATA.phone}`} className="font-bold text-teal-800 underline">
                {CLINIC_DATA.displayPhone}
              </a>.
            </p>
          </div>

          {/* Owner Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Owner Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-teal-700" />
                <span>Pet Owner's Full Name *</span>
              </label>
              <input
                type="text"
                name="ownerName"
                value={formData.ownerName}
                onChange={handleInputChange}
                placeholder="e.g. Ahmad Khan"
                className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-700/20 transition ${
                  errors.ownerName ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                }`}
              />
              {errors.ownerName && <p className="text-rose-600 text-xs mt-1">{errors.ownerName}</p>}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-teal-700" />
                <span>Contact Number (WhatsApp enabled) *</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="e.g. 0300 1234567"
                className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-700/20 transition ${
                  errors.phone ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                }`}
              />
              {errors.phone && <p className="text-rose-600 text-xs mt-1">{errors.phone}</p>}
            </div>
          </div>

          {/* Email (Optional) */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span>Email Address (Optional)</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="e.g. ahmad@example.com"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-700/20 transition"
            />
          </div>

          {/* Pet Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1">
            {/* Pet Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Pet's Name *
              </label>
              <input
                type="text"
                name="petName"
                value={formData.petName}
                onChange={handleInputChange}
                placeholder="e.g. Leo, Bella, Milo"
                className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-700/20 transition ${
                  errors.petName ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                }`}
              />
              {errors.petName && <p className="text-rose-600 text-xs mt-1">{errors.petName}</p>}
            </div>

            {/* Pet Type */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Pet Species / Type *
              </label>
              <select
                name="petType"
                value={formData.petType}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-teal-700/20 transition"
              >
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
                <option value="Rabbit / Small Pet">Rabbit / Small Mammal</option>
                <option value="Bird">Companion Bird</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* Service Required */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Service Required *
            </label>
            <select
              name="serviceId"
              value={formData.serviceId}
              onChange={handleInputChange}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-teal-700/20 transition"
            >
              {CLINIC_SERVICES.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.title} ({s.category})
                </option>
              ))}
              <option value="General Checkup">General Pet Checkup & Consultation</option>
            </select>
          </div>

          {/* Date & Time Preferences */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-teal-700" />
                <span>Preferred Date *</span>
              </label>
              <input
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleInputChange}
                className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-teal-700/20 transition ${
                  errors.preferredDate ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                }`}
              />
              {errors.preferredDate && <p className="text-rose-600 text-xs mt-1">{errors.preferredDate}</p>}
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-teal-700" />
                <span>Preferred Time Slot</span>
              </label>
              <select
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-teal-700/20 transition"
              >
                <option value="Morning (11:00 AM - 02:00 PM)">Morning (11:00 AM - 02:00 PM)</option>
                <option value="Afternoon (02:00 PM - 06:00 PM)">Afternoon (02:00 PM - 06:00 PM)</option>
                <option value="Evening (06:00 PM - 10:00 PM)">Evening (06:00 PM - 10:00 PM)</option>
              </select>
            </div>
          </div>

          {/* Notes / Symptoms */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-slate-400" />
              <span>Notes or Observed Symptoms (Optional)</span>
            </label>
            <textarea
              name="notes"
              rows={3}
              value={formData.notes}
              onChange={handleInputChange}
              placeholder="Describe your pet's current symptoms, behavioral changes, or previous medical history..."
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-700/20 transition"
            />
          </div>

          {/* Disclaimer Banner */}
          <div className="flex items-start gap-3 bg-teal-50/80 border border-teal-200/60 p-4 rounded-2xl text-xs text-teal-950">
            <AlertCircle className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
            <p>
              <strong className="font-semibold">Notice:</strong> Submitting this form sends an appointment request to our clinic. 
              Your booking is confirmed once our reception team contacts you via phone or WhatsApp.
            </p>
          </div>

          {/* Submission Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center gap-2 bg-teal-700 hover:bg-teal-800 disabled:bg-teal-400 text-white py-3.5 rounded-xl font-bold text-sm shadow-md transition transform active:scale-98"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Processing Request...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Request an Appointment</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleDirectWhatsAppSend}
              className="w-full inline-flex items-center justify-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 py-3.5 rounded-xl font-bold text-sm transition"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Book Instantly on WhatsApp</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
