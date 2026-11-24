import React from 'react';
import { MessageCircle, Phone, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Laptop } from 'lucide-react';
import { SiteContent } from '../types';

interface HeroProps {
  content: SiteContent;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ content, onExploreServices }) => {
  const whatsappUrl = `https://wa.me/${content.whatsappNumber}?text=Hello%20Eliros%20Design%20World,%20I%20am%20interested%20in%20your%20services.`;
  const telUrl = `tel:${content.phoneNumber}`;

  return (
    <section id="hero" className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white overflow-hidden py-16 lg:py-24 border-b border-slate-800">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-500/30 text-blue-300 text-xs font-semibold shadow-inner">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Graphics, Website, Online Services & AI Center</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Eliros Design World <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-amber-300 bg-clip-text text-transparent">
                AI Design & Business Center
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {content.heroSubtitle}
            </p>

            {/* Feature Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Professional Website & App Development</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>AI Design & ICT Training Center</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>1 Minute Urgent Passport & Printing</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Online Registration & CAC Services</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-xl shadow-emerald-600/30 transition-all hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat / Book on WhatsApp</span>
              </a>
              <a
                href={telUrl}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-xl shadow-blue-600/30 transition-all hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now: {content.phoneNumber}</span>
              </a>
              <button
                onClick={onExploreServices}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 transition-all"
              >
                <span>View All Services</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>
            </div>

            {/* Target Audience pill */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs text-slate-400">
              <span className="font-semibold text-slate-300">Trusted By:</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700/60">Business Owners</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700/60">Organizations</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700/60">Government Personnel</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700/60">Private Enterprise</span>
            </div>
          </div>

          {/* Right Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-amber-500 rounded-2xl blur-xl opacity-30 animate-pulse" />
              <div className="relative rounded-2xl bg-slate-800 border border-slate-700 shadow-2xl p-6 sm:p-8 space-y-6">
                
                <div className="flex items-center justify-between border-b border-slate-700 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-600/30 flex items-center justify-center text-blue-400">
                      <Laptop className="w-5 h-5 text-amber-300" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">Service Desk Live</h3>
                      <p className="text-xs text-emerald-400 font-medium">● Open & Ready For Clients</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    Nigeria
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="bg-slate-900/80 rounded-xl p-4 border border-slate-700/70">
                    <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">Direct Line</div>
                    <div className="text-lg font-bold text-white flex items-center justify-between">
                      <span>{content.phoneNumber}</span>
                      <a href={telUrl} className="text-xs px-3 py-1.5 rounded bg-blue-600 hover:bg-blue-500 text-white font-medium">
                        Call Now
                      </a>
                    </div>
                  </div>

                  <div className="bg-slate-900/80 rounded-xl p-4 border border-slate-700/70">
                    <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">WhatsApp Chat</div>
                    <div className="text-sm font-semibold text-slate-200 mb-2">Instant quotes & project booking</div>
                    <a 
                      href={whatsappUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Start Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>

                <div className="text-xs text-slate-400 text-center pt-2">
                  Reliable digital creativity, office support & tech solutions for all.
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
