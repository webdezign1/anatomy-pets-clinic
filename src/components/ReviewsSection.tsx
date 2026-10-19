import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { CLINIC_REVIEWS, CLINIC_DATA } from '../data/clinicData';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-warm-50/60 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Google Score */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3 max-w-2xl">
            <span className="text-teal-800 font-bold text-xs uppercase tracking-wider bg-teal-100/70 px-3 py-1 rounded-full">
              Pet Owner Experiences
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Feedback from Our Pet Family
            </h2>
            <p className="text-slate-600 text-base">
              Real reviews shared by dog and cat parents who entrust their companions to our care in Faisal Town, Lahore.
            </p>
          </div>

          {/* Google Score Summary Card */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-4 shrink-0">
            <div className="w-14 h-14 rounded-xl bg-amber-50 flex flex-col items-center justify-center text-amber-500 shrink-0">
              <span className="text-xl font-extrabold leading-none text-slate-900">4.7</span>
              <div className="flex gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <div>
              <p className="font-bold text-sm text-slate-900">Google Verified Rating</p>
              <p className="text-xs text-slate-500">Based on 85+ patient reviews</p>
              <a
                href={CLINIC_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-teal-700 hover:text-teal-900 font-semibold inline-flex items-center gap-1 mt-1"
              >
                <span>Read reviews on Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {CLINIC_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-xs hover:border-teal-300 hover:shadow-md transition duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Stars and Pet Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(review.rating)
                            ? 'fill-amber-400 text-amber-400'
                            : 'fill-amber-200 text-amber-200'
                        }`}
                      />
                    ))}
                    <span className="text-xs font-bold text-slate-700 ml-1.5">{review.rating}</span>
                  </div>

                  <span className="text-xs font-semibold text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded-full">
                    {review.serviceMentioned}
                  </span>
                </div>

                {/* Comment Text */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{review.author}</h4>
                  <p className="text-slate-500 text-xs">Pet: {review.petType}</p>
                </div>
                <div className="text-right">
                  <span className="font-medium text-slate-400 block">{review.source}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="mt-12 text-center">
          <a
            href={CLINIC_DATA.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 px-6 py-3 rounded-xl font-semibold text-sm shadow-xs transition"
          >
            <span>View All Google Reviews</span>
            <ExternalLink className="w-4 h-4 text-teal-700" />
          </a>
        </div>

      </div>
    </section>
  );
};
