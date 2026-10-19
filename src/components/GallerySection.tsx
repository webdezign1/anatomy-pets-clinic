import React, { useState } from 'react';
import { X, Eye } from 'lucide-react';
import { CLINIC_GALLERY, type GalleryItem } from '../data/clinicData';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'facilities' | 'care' | 'patients'>('all');
  const [lightboxImage, setLightboxImage] = useState<GalleryItem | null>(null);

  const filteredItems = activeFilter === 'all'
    ? CLINIC_GALLERY
    : CLINIC_GALLERY.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-teal-800 font-bold text-xs uppercase tracking-wider bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-100">
            Inside the Clinic
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Clinic Facilities & Patient Moments
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Explore our clinical environment, sanitized surgical suite, diagnostics area, and healthy patients.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {[
              { id: 'all', label: 'All Photos' },
              { id: 'facilities', label: 'Clinic & Suites' },
              { id: 'care', label: 'Consultations & Surgeries' },
              { id: 'patients', label: 'Recovered Patients' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                  activeFilter === tab.id
                    ? 'bg-teal-700 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxImage(item)}
              className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-slate-100 cursor-pointer shadow-xs border border-slate-200 hover:shadow-xl transition duration-300"
            >
              <img
                src={item.imageUrl}
                alt={item.altText}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-6 text-white">
                <span className="text-xs uppercase font-semibold text-teal-300">
                  {item.category}
                </span>
                <h4 className="text-base font-bold mt-1">{item.title}</h4>
                <p className="text-xs text-slate-200 line-clamp-2 mt-1">{item.caption}</p>
                <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-teal-200">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Click to expand</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn"
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800"
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white transition"
              aria-label="Close image"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/10] sm:aspect-[16/9] w-full bg-black flex items-center justify-center">
              <img
                src={lightboxImage.imageUrl}
                alt={lightboxImage.altText}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-6 bg-slate-900 text-white">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                {lightboxImage.category}
              </span>
              <h3 className="text-xl font-bold mt-1">{lightboxImage.title}</h3>
              <p className="text-sm text-slate-300 mt-2">{lightboxImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
