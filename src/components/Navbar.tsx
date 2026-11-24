import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, ShieldCheck, Sparkles } from 'lucide-react';
import { SiteContent } from '../types';

interface NavbarProps {
  content: SiteContent;
  onOpenAdmin: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ content, onOpenAdmin, activeSection, setActiveSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = `https://wa.me/${content.whatsappNumber}?text=Hello%20Eliros%20Design%20World,%20I%20would%20like%20to%20inquire%20about%20your%20services.`;
  const telUrl = `tel:${content.phoneNumber}`;

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md text-white border-b border-slate-800 shadow-lg">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-800 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 font-medium">
            <span className="bg-emerald-500 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded-full animate-pulse">
              Live Service Desk
            </span>
            <span>Nigeria's Trusted Digital & Business Center</span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href={telUrl}
              className="flex items-center gap-1.5 hover:text-amber-300 transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call: {content.phoneNumber}</span>
            </a>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-emerald-300 transition-colors font-semibold bg-emerald-600 px-2.5 py-0.5 rounded-md text-white"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand */}
          <div 
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform border border-blue-400/30">
              <Sparkles className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <div className="font-extrabold text-lg sm:text-xl tracking-tight bg-gradient-to-r from-white via-blue-100 to-amber-200 bg-clip-text text-transparent">
                Eliros Design World
              </div>
              <div className="text-xs text-blue-300 tracking-wider font-medium uppercase">
                AI Design & Business Center
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
            <button 
              onClick={() => handleNavClick('services')}
              className={`hover:text-amber-400 transition-colors ${activeSection === 'services' ? 'text-amber-400 font-semibold' : 'text-slate-200'}`}
            >
              Services
            </button>
            <button 
              onClick={() => handleNavClick('about')}
              className={`hover:text-amber-400 transition-colors ${activeSection === 'about' ? 'text-amber-400 font-semibold' : 'text-slate-200'}`}
            >
              About Us
            </button>
            <button 
              onClick={() => handleNavClick('gallery')}
              className={`hover:text-amber-400 transition-colors ${activeSection === 'gallery' ? 'text-amber-400 font-semibold' : 'text-slate-200'}`}
            >
              Facilities Gallery
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className={`hover:text-amber-400 transition-colors ${activeSection === 'contact' ? 'text-amber-400 font-semibold' : 'text-slate-200'}`}
            >
              Contact
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenAdmin}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 text-xs font-semibold transition-all"
              title="Admin Panel Login"
            >
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>Admin Portal</span>
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-lg shadow-emerald-600/20 transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Book Service</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenAdmin}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
              title="Admin Login"
            >
              <ShieldCheck className="w-5 h-5 text-blue-400" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800 text-slate-200 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
          <button
            onClick={() => handleNavClick('services')}
            className="block w-full text-left py-2 px-3 rounded-lg hover:bg-slate-800 text-slate-200 font-medium"
          >
            Services
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className="block w-full text-left py-2 px-3 rounded-lg hover:bg-slate-800 text-slate-200 font-medium"
          >
            About Us
          </button>
          <button
            onClick={() => handleNavClick('gallery')}
            className="block w-full text-left py-2 px-3 rounded-lg hover:bg-slate-800 text-slate-200 font-medium"
          >
            Facilities Gallery
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="block w-full text-left py-2 px-3 rounded-lg hover:bg-slate-800 text-slate-200 font-medium"
          >
            Contact
          </button>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-emerald-600 text-white font-semibold text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href={telUrl}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-blue-600 text-white font-semibold text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call Management: {content.phoneNumber}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
