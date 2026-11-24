import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Mail, Clock, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { SiteContent } from '../types';

interface ContactSectionProps {
  content: SiteContent;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ content }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceNeeded, setServiceNeeded] = useState('Website Development');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const whatsappUrl = `https://wa.me/${content.whatsappNumber}?text=Hello%20Eliros%20Design%20World,%20my%20name%20is%20${encodeURIComponent(name)}.%20I%20am%20inquiring%20about%20${encodeURIComponent(serviceNeeded)}.%20Message:%20${encodeURIComponent(message)}`;
  const telUrl = `tel:${content.phoneNumber}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-500/30 text-blue-300 text-xs font-semibold">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Get In Touch With Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Contact <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-amber-300 bg-clip-text text-transparent">Eliros Design World</span>
          </h2>
          <p className="text-slate-300 text-base">
            Reach out to our Live Service Desk for immediate consultation, project booking, or business support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Information & Quick Action Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-8 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-white border-b border-slate-800 pb-4">
                Center Information
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/30">
                    <Phone className="w-5 h-5 text-amber-300" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Direct Phone & WhatsApp</div>
                    <a href={telUrl} className="text-lg font-bold text-white hover:text-amber-300 transition-colors">
                      {content.phoneNumber}
                    </a>
                    <div className="text-xs text-emerald-400 font-medium">Available for calls & chats</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                    <MessageCircle className="w-5 h-5 text-emerald-300" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">WhatsApp Chat Line</div>
                    <a href={`https://wa.me/${content.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-white hover:text-emerald-300 transition-colors">
                      +{content.whatsappNumber}
                    </a>
                    <div className="text-xs text-slate-300">Instant response guaranteed</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center shrink-0 border border-indigo-500/30">
                    <MapPin className="w-5 h-5 text-indigo-300" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Location</div>
                    <div className="text-sm font-semibold text-white">{content.address}</div>
                    <div className="text-xs text-slate-300">Serving clients nationwide across Nigeria</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-600/20 text-purple-400 flex items-center justify-center shrink-0 border border-purple-500/30">
                    <Clock className="w-5 h-5 text-purple-300" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Working Hours</div>
                    <div className="text-sm font-semibold text-white">Monday - Saturday: 8:00 AM - 6:00 PM</div>
                    <div className="text-xs text-slate-300">Sunday: By Appointment</div>
                  </div>
                </div>
              </div>

              {/* Direct Call & WhatsApp Buttons */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
                <a
                  href={telUrl}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs shadow-lg transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Management</span>
                </a>
                <a
                  href={`https://wa.me/${content.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-8 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-2">Send Us a Message</h3>
              <p className="text-slate-300 text-xs mb-6">
                Fill out the form below and we will instantly connect with you via WhatsApp or phone.
              </p>

              {submitted ? (
                <div className="text-center py-12 space-y-4 bg-emerald-950/40 rounded-xl border border-emerald-500/30 p-8">
                  <div className="w-14 h-14 rounded-full bg-emerald-600/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-xl text-white">Message Ready for WhatsApp!</h3>
                  <p className="text-sm text-emerald-200">
                    We have launched WhatsApp with your inquiry. Thank you for choosing Eliros Design World!
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold hover:bg-slate-700"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">Your Full Name</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Dr. Chioma Okoro"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 09027481035"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">Select Service Needed</label>
                    <select
                      value={serviceNeeded}
                      onChange={(e) => setServiceNeeded(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500"
                    >
                      <option value="Website Development">Website Development</option>
                      <option value="AI Design / Training">AI Design / Training</option>
                      <option value="Graphic Design">Graphic Design</option>
                      <option value="Mobile App Design">Mobile App Design</option>
                      <option value="Video Creating">Video Creating</option>
                      <option value="Word Processing and Editing">Word Processing and Editing</option>
                      <option value="Online Registration">Online Registration</option>
                      <option value="1 Minute Urgent Passport">1 Minute Urgent Passport</option>
                      <option value="Computer Training">Computer Training</option>
                      <option value="Clean Photocopy">Clean Photocopy</option>
                      <option value="Both Black & Color Printing">Both Black & Color Printing</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">Your Message / Project Details</label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us what you would like to achieve..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-xl shadow-emerald-600/30 transition-all hover:scale-[1.01]"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Send Inquiry via WhatsApp ({content.phoneNumber})</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
