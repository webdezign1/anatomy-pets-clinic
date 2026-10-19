import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { CLINIC_FAQS, CLINIC_DATA } from '../data/clinicData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-24 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-14">
          <span className="text-teal-800 font-bold text-xs uppercase tracking-wider bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Common Questions from Pet Parents
          </h2>
          <p className="text-slate-600 text-base">
            Find quick answers regarding our appointments, clinical treatments, and visiting guidelines.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {CLINIC_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200/80 rounded-2xl overflow-hidden bg-warm-50/30 transition duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-900 hover:text-teal-800 transition"
                >
                  <span className="text-sm sm:text-base pr-4">{faq.question}</span>
                  <div className={`p-1 rounded-full bg-slate-100 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-teal-100 text-teal-800' : 'text-slate-500'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Help Card */}
        <div className="mt-12 text-center bg-teal-50/70 border border-teal-200/60 p-6 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="p-3 bg-teal-700 text-white rounded-2xl shrink-0">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Have a question not listed here?</h4>
              <p className="text-xs text-slate-600">Our medical staff is available to clarify symptoms or treatment options.</p>
            </div>
          </div>

          <a
            href={`https://wa.me/${CLINIC_DATA.whatsapp}?text=Hello%20Anatomy%20Pets%20Clinic,%20I%20have%20a%20question%20about%20my%20pet.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition shadow-xs"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask Us on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
