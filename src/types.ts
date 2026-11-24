export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: string;
  features: string[];
  popular?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Computer Training' | 'Computer Operation' | 'Client Session' | 'Web & App Design' | 'Passport & Photo' | 'Printing & Photocopy';
  imageUrl: string;
  videoUrl?: string;
  description: string;
  date: string;
}

export interface AnnouncementItem {
  id: string;
  text: string;
  active: boolean;
  date: string;
}

export interface SiteContent {
  heroTitle: string;
  heroSubtitle: string;
  mission: string;
  vision: string;
  phoneNumber: string;
  whatsappNumber: string;
  email: string;
  address: string;
  marqueeText: string;
}
