import React, { useState } from 'react';
import { X, MessageCircle, Phone, CheckCircle2, Send, Sparkles } from 'lucide-react';
import { ServiceItem, SiteContent } from '../types';

interface ServiceModalProps {
  service: ServiceItem | null;
  content: SiteContent;
  onClose: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, content, onClose }) => {
  if (!service) return null;

  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientMessage, setClientMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const whatsappUrl = `https://wa.me/${content.whatsappNumber}?text=Hello%20Eliros%20Design%20World,%20I%20am%20interested%20in%20booking%20your%20service:%20*${encodeURIComponent(service.title)}*%0A%0AMy%20Name:%20${encodeURIComponent(clientName)}%0APhone:%20${encodeURIComponent(clientPhone)}%0ANotes:%20${encodeURIComponent(clientMessage)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden text-white p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-amber-300">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">{service.category}</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">{service.title}</h2>
          </div>
        </div>

        <p className="text-slate-300 text-sm leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Service Features */}
        <div className="mb-6 bg-slate-950/60 rounded-xl p-4 border border-slate-800">
          <h4 className="text-xs font-semibold uppercase text-amber-400 tracking-wider mb-3">Service Inclusions:</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {service.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Booking Form */}
        {submitted ? (
          <div className="text-center py-6 space-y-4 bg-emerald-950/40 rounded-xl border border-emerald-500/30 p-6">
            <div className="w-12 h-12 rounded-full bg-emerald-600/30 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-white">Redirecting to WhatsApp!</h3>
            <p className="text-xs text-emerald-200">
              We have opened WhatsApp with your booking details for {service.title}. You can also call us directly at {content.phoneNumber}.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold hover:bg-slate-700"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h4 className="text-xs font-semibold uppercase text-blue-400 tracking-wider">Quick Book / Inquiry via WhatsApp</h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Your Full Name</label>
                <input
                  type="text"
                  required
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="e.g. Mr. Emmanuel"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  placeholder="e.g. 08012345678"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Project Details or Requirements</label>
              <textarea
                rows={3}
                value={clientMessage}
                onChange={(e) => setClientMessage(e.target.value)}
                placeholder="Describe what you need..."
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500 resize-none"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <a
                href={`tel:${content.phoneNumber}`}
                className="flex items-center gap-1.5 text-xs text-blue-400 hover:underline"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Or Call {content.phoneNumber}</span>
              </a>

              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-lg shadow-emerald-600/30 transition-all hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send via WhatsApp</span>
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
