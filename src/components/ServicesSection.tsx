import React, { useState } from 'react';
import { Globe, Cpu, Palette, Smartphone, Video, FileText, CheckCircle2, Camera, Laptop, Copy, Printer, ArrowRight, Sparkles } from 'lucide-react';
import { ServiceItem, SiteContent } from '../types';
import { ServiceModal } from './ServiceModal';

interface ServicesSectionProps {
  services: ServiceItem[];
  content: SiteContent;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ services, content }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);

  const categories = ['All', 'Digital & Tech', 'Creatives', 'Office Services', 'Education'];

  const filteredServices = selectedCategory === 'All' 
    ? services 
    : services.filter(s => s.category === selectedCategory);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe className="w-6 h-6 text-blue-400" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-indigo-400" />;
      case 'Palette': return <Palette className="w-6 h-6 text-amber-400" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6 text-emerald-400" />;
      case 'Video': return <Video className="w-6 h-6 text-rose-400" />;
      case 'FileText': return <FileText className="w-6 h-6 text-cyan-400" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-6 h-6 text-emerald-400" />;
      case 'Camera': return <Camera className="w-6 h-6 text-purple-400" />;
      case 'Laptop': return <Laptop className="w-6 h-6 text-blue-400" />;
      case 'Copy': return <Copy className="w-6 h-6 text-teal-400" />;
      case 'Printer': return <Printer className="w-6 h-6 text-amber-400" />;
      default: return <Sparkles className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-500/30 text-blue-300 text-xs font-semibold">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Comprehensive Business & Creative Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            What We Do At <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-amber-300 bg-clip-text text-transparent">Eliros Design World</span>
          </h2>
          <p className="text-slate-300 text-base">
            We offer professional Graphic Design, Website Development, Word Processing, AI Design & Training, and online services to our esteemed clients across Nigeria.
          </p>
        </div>

        {/* Category Filter Tabs */}
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-2xl bg-slate-800/85 hover:bg-slate-800 border border-slate-700 hover:border-blue-500/50 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between"
            >
              {service.popular && (
                <span className="absolute top-4 right-4 bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] uppercase font-extrabold px-2.5 py-1 rounded-full">
                  Popular
                </span>
              )}

              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {getServiceIcon(service.icon)}
                </div>

                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">{service.category}</span>
                <h3 className="text-xl font-bold text-white mt-1 mb-3 group-hover:text-blue-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setActiveService(service)}
                className="w-full mt-auto flex items-center justify-between px-4 py-3 rounded-xl bg-slate-900 hover:bg-blue-600 text-slate-200 hover:text-white text-xs font-semibold border border-slate-700 hover:border-blue-500 transition-all group/btn"
              >
                <span>Book / Inquire Now</span>
                <ArrowRight className="w-4 h-4 text-amber-400 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

      </div>

      {/* Service Modal */}
      <ServiceModal
        service={activeService}
        content={content}
        onClose={() => setActiveService(null)}
      />
    </section>
  );
};
