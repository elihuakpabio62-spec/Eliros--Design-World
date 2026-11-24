import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeBanner } from './components/MarqueeBanner';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { FloatingWidgets } from './components/FloatingWidgets';
import { Footer } from './components/Footer';
import { AdminDashboard } from './components/AdminDashboard';
import { initialSiteContent, initialServices, initialGallery, initialAnnouncements } from './data/initialData';
import { SiteContent, ServiceItem, GalleryItem, AnnouncementItem } from './types';
import { fetchSupabaseData, saveSiteContentToSupabase, saveGalleryItemToSupabase, deleteGalleryItemFromSupabase } from './lib/supabaseSync';

export default function App() {
  const [content, setContent] = useState<SiteContent>(() => {
    const saved = localStorage.getItem('eliros_site_content');
    const parsed = saved ? JSON.parse(saved) : initialSiteContent;
    return { ...parsed, address: "Ikot Ekpene, Akwa Ibom State, Nigeria" };
  });

  const [services, setServices] = useState<ServiceItem[]>(() => {
    const saved = localStorage.getItem('eliros_services');
    return saved ? JSON.parse(saved) : initialServices;
  });

  const [gallery, setGallery] = useState<GalleryItem[]>(() => {
    const saved = localStorage.getItem('eliros_gallery');
    return saved ? JSON.parse(saved) : initialGallery;
  });

  const [announcements, setAnnouncements] = useState<AnnouncementItem[]>(() => {
    const saved = localStorage.getItem('eliros_announcements');
    return saved ? JSON.parse(saved) : initialAnnouncements;
  });

  const [activeSection, setActiveSection] = useState('hero');
  const [adminOpen, setAdminOpen] = useState(false);

  useEffect(() => {
    // Fetch data from Supabase if configured
    fetchSupabaseData().then((res) => {
      if (res) {
        setContent(res.content);
        setServices(res.services);
        setGallery(res.gallery);
        setAnnouncements(res.announcements);
      }
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('eliros_site_content', JSON.stringify(content));
    saveSiteContentToSupabase(content);
  }, [content]);

  useEffect(() => {
    localStorage.setItem('eliros_services', JSON.stringify(services));
  }, [services]);

  useEffect(() => {
    localStorage.setItem('eliros_gallery', JSON.stringify(gallery));
  }, [gallery]);

  useEffect(() => {
    localStorage.setItem('eliros_announcements', JSON.stringify(announcements));
  }, [announcements]);

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-600 selection:text-white">
      {/* Navigation */}
      <Navbar
        content={content}
        onOpenAdmin={() => setAdminOpen(true)}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main Content Sections */}
      <main>
        <Hero content={content} onExploreServices={scrollToServices} />
        <MarqueeBanner content={content} />
        <ServicesSection services={services} content={content} />
        <AboutSection content={content} />
        <GallerySection gallery={gallery} />
        <ContactSection content={content} />
      </main>

      {/* Footer */}
      <Footer content={content} onOpenAdmin={() => setAdminOpen(true)} />

      {/* Floating WhatsApp & Call Buttons */}
      <FloatingWidgets content={content} />

      {/* Admin Dashboard Modal */}
      <AdminDashboard
        isOpen={adminOpen}
        content={content}
        gallery={gallery}
        services={services}
        announcements={announcements}
        onClose={() => setAdminOpen(false)}
        onUpdateContent={setContent}
        onUpdateGallery={setGallery}
        onUpdateServices={setServices}
        onUpdateAnnouncements={setAnnouncements}
      />
    </div>
  );
}
