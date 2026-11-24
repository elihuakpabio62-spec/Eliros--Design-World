import React from 'react';
import { Phone, MessageCircle, Sparkles, MapPin } from 'lucide-react';
import { SiteContent } from '../types';

interface FooterProps {
  content: SiteContent;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ content, onOpenAdmin }) => {
  const whatsappUrl = `https://wa.me/${content.whatsappNumber}`;
  const telUrl = `tel:${content.phoneNumber}`;

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1 */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-amber-300">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-white text-lg tracking-tight">Eliros Design World</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Your premier AI Design & Business Center offering professional graphics, website development, word processing, printing, and online services in Nigeria.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
              <span>{content.address}</span>
            </div>
          </div>

          {/* Col 2 */}
          <div className="space-y-4">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Core Services</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Website & App Development</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">AI Design & Training</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Graphic Design & Branding</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Word Processing & Editing</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Online Registration & CAC</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">1 Minute Urgent Passport</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-4">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Office & Printing</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Computer Training Center</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Clean Photocopy Services</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Black & Color Printing</a></li>
              <li><a href="#gallery" className="hover:text-amber-400 transition-colors">Facilities Gallery</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors">Mission & Vision</a></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="space-y-4">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Live Desk & Contact</h4>
            <div className="space-y-3 text-xs">
              <a href={telUrl} className="flex items-center gap-2 text-slate-300 hover:text-amber-400 font-semibold">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>Call: {content.phoneNumber}</span>
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 font-semibold">
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: +{content.whatsappNumber}</span>
              </a>
              <div className="pt-2">
                <button
                  onClick={onOpenAdmin}
                  className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-800 transition-all"
                >
                  🔒 Admin Dashboard Login
                </button>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Eliros Design World AI Design & Business Center. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Nigeria</span>
            <span>•</span>
            <span>Professional Digital Services</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
