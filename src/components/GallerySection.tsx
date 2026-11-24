import React, { useState } from 'react';
import { Sparkles, Image as ImageIcon, Calendar, X, Eye } from 'lucide-react';
import { GalleryItem } from '../types';

interface GallerySectionProps {
  gallery: GalleryItem[];
}

export const GallerySection: React.FC<GallerySectionProps> = ({ gallery }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxImage, setLightboxImage] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Computer Training', 'Computer Operation', 'Client Session', 'Web & App Design', 'Passport & Photo', 'Printing & Photocopy'];

  const filteredGallery = selectedCategory === 'All'
    ? gallery
    : gallery.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-500/30 text-blue-300 text-xs font-semibold">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Business Facilities Gallery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Inside Our <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-amber-300 bg-clip-text text-transparent">State-of-the-Art Center</span>
          </h2>
          <p className="text-slate-300 text-base">
            High-quality imagery showcasing our computer training classes, equipment, operations, design studios, and professional client sessions.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxImage(item)}
              className="group relative rounded-2xl bg-slate-800 border border-slate-700 overflow-hidden shadow-xl cursor-pointer hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden bg-slate-950">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                
                <span className="absolute top-4 left-4 bg-slate-900/90 text-blue-300 border border-slate-700 text-[10px] uppercase font-bold px-2.5 py-1 rounded-full backdrop-blur-md">
                  {item.category}
                </span>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/40 backdrop-blur-xs">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg">
                    <Eye className="w-6 h-6" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-4xl w-full rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-2xl text-white">
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="max-h-[60vh] bg-slate-950 overflow-hidden flex items-center justify-center">
              <img
                src={lightboxImage.imageUrl}
                alt={lightboxImage.title}
                className="max-h-[60vh] w-auto object-contain"
              />
            </div>

            <div className="p-6 sm:p-8 space-y-3 bg-slate-900">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-blue-900/60 border border-blue-500/30 text-blue-300 text-xs font-semibold">
                  {lightboxImage.category}
                </span>
                <span className="text-xs text-slate-400">{lightboxImage.date}</span>
              </div>
              <h3 className="text-2xl font-bold text-white">{lightboxImage.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{lightboxImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
