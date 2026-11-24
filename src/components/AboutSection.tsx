import React from 'react';
import { Target, Compass, Users, CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';
import { SiteContent } from '../types';

interface AboutSectionProps {
  content: SiteContent;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ content }) => {
  return (
    <section id="about" className="py-20 bg-slate-950 text-white relative border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-500/30 text-blue-300 text-xs font-semibold">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>About Eliros Design World</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Empowering Digital Creativity & <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-amber-300 bg-clip-text text-transparent">
              Business Technology in Nigeria
            </span>
          </h2>
          <p className="text-slate-300 text-base">
            We provide reliable and suitable structure for digital creativity, individual and business technology, and excellent services for our esteemed clients.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Mission Card */}
          <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-blue-950/80 border border-slate-800 p-8 shadow-xl relative overflow-hidden group hover:border-blue-500/50 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl group-hover:bg-blue-600/20 transition-all" />
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-amber-300 mb-6">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-slate-300 text-base leading-relaxed">
              {content.mission}
            </p>
          </div>

          {/* Vision Card */}
          <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950/80 border border-slate-800 p-8 shadow-xl relative overflow-hidden group hover:border-indigo-500/50 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/10 rounded-full blur-2xl group-hover:bg-indigo-600/20 transition-all" />
            <div className="w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-amber-300 mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-slate-300 text-base leading-relaxed">
              {content.vision}
            </p>
          </div>
        </div>

        {/* Target Audience & Problem Solved */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Target Audience */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Target Audience</h3>
            </div>
            <p className="text-slate-300 text-sm mb-6">
              We cater to primary and secondary enterprise groups across Nigeria with dedicated professional support:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-sm font-semibold text-slate-200">Business Owners</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-sm font-semibold text-slate-200">Organizations</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-sm font-semibold text-slate-200">Government Personnel</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-sm font-semibold text-slate-200">Companies & Enterprises</span>
              </div>
            </div>
          </div>

          {/* Problem We Solve */}
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">The Problem We Solve</h3>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Many individuals and businesses struggle to find reliable, professional digital infrastructure, high-quality printing, and expert technical support under one roof.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-600/30 text-blue-400 flex items-center justify-center text-xs shrink-0 mt-0.5">✓</div>
                <p className="text-sm text-slate-300">Providing robust digital & web development structures that scale.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-600/30 text-blue-400 flex items-center justify-center text-xs shrink-0 mt-0.5">✓</div>
                <p className="text-sm text-slate-300">Eliminating delays in urgent passport processing and documentation.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-600/30 text-blue-400 flex items-center justify-center text-xs shrink-0 mt-0.5">✓</div>
                <p className="text-sm text-slate-300">Delivering crystal-clear color printing and computer training excellence.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
