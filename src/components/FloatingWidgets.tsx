import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { SiteContent } from '../types';

interface FloatingWidgetsProps {
  content: SiteContent;
}

export const FloatingWidgets: React.FC<FloatingWidgetsProps> = ({ content }) => {
  const whatsappUrl = `https://wa.me/${content.whatsappNumber}?text=Hello%20Eliros%20Design%20World,%20I%20am%20visiting%20your%20website%20and%20need%20assistance.`;
  const telUrl = `tel:${content.phoneNumber}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
      {/* Call Button */}
      <a
        href={telUrl}
        className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white p-3.5 rounded-full shadow-2xl transition-all hover:scale-110 border border-blue-400/30"
        title={`Call Us: ${content.phoneNumber}`}
      >
        <Phone className="w-5 h-5 text-amber-300" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-semibold pr-1">
          Call {content.phoneNumber}
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 rounded-full shadow-2xl transition-all hover:scale-110 border border-emerald-400/30 animate-bounce"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-semibold pr-1">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
};
