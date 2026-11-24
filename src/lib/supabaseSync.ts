import { supabase } from './supabase';
import { ServiceItem, GalleryItem, AnnouncementItem, SiteContent } from '../types';

export async function fetchSupabaseData(): Promise<{
  content: SiteContent;
  services: ServiceItem[];
  gallery: GalleryItem[];
  announcements: AnnouncementItem[];
} | null> {
  if (!supabase) return null;

  try {
    const [servicesRes, galleryRes, contentRes, announcementsRes] = await Promise.all([
      supabase.from('services').select('*'),
      supabase.from('gallery').select('*'),
      supabase.from('site_content').select('*').single(),
      supabase.from('announcements').select('*')
    ]);

    if (servicesRes.error || galleryRes.error || contentRes.error) {
      return null; // Tables might not be created yet, fallback to localStorage
    }

    return {
      content: contentRes.data ? {
        heroTitle: contentRes.data.hero_title,
        heroSubtitle: contentRes.data.hero_subtitle,
        mission: contentRes.data.mission,
        vision: contentRes.data.vision,
        phoneNumber: contentRes.data.phone_number,
        whatsappNumber: contentRes.data.whatsapp_number,
        email: contentRes.data.email,
        address: contentRes.data.address,
        marqueeText: contentRes.data.marquee_text,
      } as SiteContent : null as any,
      services: servicesRes.data ? servicesRes.data.map((s: any) => ({
        id: s.id,
        title: s.title,
        category: s.category,
        description: s.description,
        icon: s.icon,
        features: s.features || [],
        popular: s.popular
      })) : [],
      gallery: galleryRes.data ? galleryRes.data.map((g: any) => ({
        id: g.id,
        title: g.title,
        category: g.category,
        imageUrl: g.image_url,
        description: g.description,
        date: g.date
      })) : [],
      announcements: announcementsRes.data ? announcementsRes.data.map((a: any) => ({
        id: a.id,
        text: a.text,
        active: a.active,
        date: a.date
      })) : [],
    };
  } catch (error) {
    // Supabase tables not found or network error, fallback gracefully to localStorage
    return null;
  }
}

export async function saveSiteContentToSupabase(content: SiteContent) {
  if (!supabase) return;
  try {
    await supabase.from('site_content').upsert({
      id: 1,
      hero_title: content.heroTitle,
      hero_subtitle: content.heroSubtitle,
      mission: content.mission,
      vision: content.vision,
      phone_number: content.phoneNumber,
      whatsapp_number: content.whatsappNumber,
      email: content.email,
      address: content.address,
      marquee_text: content.marqueeText,
    });
  } catch (err) {
    // Silent fail if tables not set up yet
  }
}

export async function saveGalleryItemToSupabase(item: GalleryItem) {
  if (!supabase) return;
  try {
    await supabase.from('gallery').upsert({
      id: item.id,
      title: item.title,
      category: item.category,
      image_url: item.imageUrl,
      description: item.description,
      date: item.date,
    });
  } catch (err) {
    // Silent fail if tables not set up yet
  }
}

export async function deleteGalleryItemFromSupabase(id: string) {
  if (!supabase) return;
  try {
    await supabase.from('gallery').delete().eq('id', id);
  } catch (err) {
    // Silent fail if tables not set up yet
  }
}
