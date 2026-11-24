import React from 'react';
import { Phone, MessageCircle, Sparkles } from 'lucide-react';
import { SiteContent } from '../types';

interface MarqueeBannerProps {
  content: SiteContent;
}

export const MarqueeBanner: React.FC<MarqueeBannerProps> = ({ content }) => {
  const whatsappUrl = `https://wa.me/${content.whatsappNumber}?text=Hello%20Eliros%20Design%20World,%20I%20want%20to%20book%20a%20service.`;
  const telUrl = `tel:${content.phoneNumber}`;

  return (
    <section className="py-8 bg-slate-950 px-4 sm:px-6 lg:px-8 border-y border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-2xl bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 border-2 border-amber-400/50 shadow-2xl overflow-hidden p-6 sm:p-8">
          
          {/* Top Header Badge inside box */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300">
                <Sparkles className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
                  <span>Live Service Desk:</span>
                  <a href={telUrl} className="text-amber-300 hover:underline">{content.phoneNumber}</a>
                </h3>
                <p className="text-sm text-blue-200 font-medium">
                  Now onboarding customers for professional digital and business solutions.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-600/30 transition-all hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Call/Chat with us on {content.phoneNumber}</span>
              </a>
            </div>
          </div>

          {/* Marquee Ticker */}
          <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-800 overflow-hidden relative shadow-inner">
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />
            
            <div className="overflow-hidden whitespace-nowrap flex">
              <div className="animate-marquee flex items-center gap-8 text-sm font-semibold text-blue-100 uppercase tracking-wide">
                <span>🚀 Website Development</span>
                <span className="text-amber-400">•</span>
                <span>🤖 AI Design/Training</span>
                <span className="text-amber-400">•</span>
                <span>🎨 Graphic Design</span>
                <span className="text-amber-400">•</span>
                <span>📱 Mobile App Design</span>
                <span className="text-amber-400">•</span>
                <span>🎬 Video Creating</span>
                <span className="text-amber-400">•</span>
                <span>📝 Word Processing and Editing</span>
                <span className="text-amber-400">•</span>
                <span>📋 Online Registration</span>
                <span className="text-amber-400">•</span>
                <span>📸 1 Minute Urgent Passport</span>
                <span className="text-amber-400">•</span>
                <span>💻 Computer Training</span>
                <span className="text-amber-400">•</span>
                <span>📄 Clean Photocopy</span>
                <span className="text-amber-400">•</span>
                <span>🖨️ Both Black & Color Printing</span>
              </div>
              <div className="animate-marquee flex items-center gap-8 text-sm font-semibold text-blue-100 uppercase tracking-wide" aria-hidden="true">
                <span>🚀 Website Development</span>
                <span className="text-amber-400">•</span>
                <span>🤖 AI Design/Training</span>
                <span className="text-amber-400">•</span>
                <span>🎨 Graphic Design</span>
                <span className="text-amber-400">•</span>
                <span>📱 Mobile App Design</span>
                <span className="text-amber-400">•</span>
                <span>🎬 Video Creating</span>
                <span className="text-amber-400">•</span>
                <span>📝 Word Processing and Editing</span>
                <span className="text-amber-400">•</span>
                <span>📋 Online Registration</span>
                <span className="text-amber-400">•</span>
                <span>📸 1 Minute Urgent Passport</span>
                <span className="text-amber-400">•</span>
                <span>💻 Computer Training</span>
                <span className="text-amber-400">•</span>
                <span>📄 Clean Photocopy</span>
                <span className="text-amber-400">•</span>
                <span>🖨️ Both Black & Color Printing</span>
              </div>
            </div>
          </div>

          <div className="mt-4 text-center text-xs text-slate-300 font-medium">
            Call/Chat with us on <span className="text-amber-300 font-bold">{content.phoneNumber}</span> for immediate assistance.
          </div>

        </div>
      </div>
    </section>
  );
};
