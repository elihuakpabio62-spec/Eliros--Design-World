import { ServiceItem, GalleryItem, AnnouncementItem, SiteContent } from '../types';

export const initialSiteContent: SiteContent = {
  heroTitle: "Eliros Design World AI Design & Business Center",
  heroSubtitle: "Your Premier Destination for Cutting-Edge Digital Creativity, Professional Website Development, AI Design & Training, Graphic Design, and Office Support Services in Nigeria.",
  mission: "To provide reliable, affordable, and high-quality digital and office solutions through professional website development, graphic design, online registration and word processing that meet our client needs.",
  vision: "To become a trusted leader in digital and business support service, empowering individuals, businesses and organizations through innovative technology, creativity, and excellent services.",
  phoneNumber: "09027481035",
  whatsappNumber: "2349027481035",
  email: "info@elirosdesignworld.ng",
  address: "Ikot Ekpene, Akwa Ibom State, Nigeria",
  marqueeText: "Live Service Desk 09027481035 - Now onboarding customers for Website Development, AI Design/Training, Graphic Design, Mobile App Design, Video Creating, Word Processing and Editing, Online Registration, 1 Minute Urgent Passport, Computer Training, Clean Photocopy, Both Black & Color Printing. Call/Chat with us on 09027481035!"
};

export const initialServices: ServiceItem[] = [
  {
    id: 'srv-1',
    title: 'Website Development',
    category: 'Digital & Tech',
    description: 'Custom, responsive, lightning-fast websites and e-commerce portals tailored for businesses, organizations, and enterprises.',
    icon: 'Globe',
    features: ['Responsive Mobile Design', 'E-Commerce & Payment Integration', 'SEO Optimized', 'Secure & Fast Hosting'],
    popular: true
  },
  {
    id: 'srv-2',
    title: 'AI Design & Training',
    category: 'Digital & Tech',
    description: 'State-of-the-art AI-powered design workflows and comprehensive training programs for individuals and corporate teams.',
    icon: 'Cpu',
    features: ['Generative AI Art & Graphics', 'Prompt Engineering Training', 'AI Workflow Automation', 'Corporate Masterclasses'],
    popular: true
  },
  {
    id: 'srv-3',
    title: 'Graphic Design',
    category: 'Creatives',
    description: 'Stunning visual branding, logos, flyers, banners, corporate identity, and promotional marketing materials.',
    icon: 'Palette',
    features: ['Brand Identity & Logos', 'Flyers & Banners', 'Social Media Graphics', 'Print-Ready Formats'],
    popular: true
  },
  {
    id: 'srv-4',
    title: 'Mobile App Design',
    category: 'Digital & Tech',
    description: 'User-centric UI/UX design and mobile application prototyping for iOS and Android platforms.',
    icon: 'Smartphone',
    features: ['Figma UI/UX Prototyping', 'User Journey Mapping', 'Cross-Platform App Design', 'Interactive Mockups'],
    popular: false
  },
  {
    id: 'srv-5',
    title: 'Video Creating & Editing',
    category: 'Creatives',
    description: 'Professional video production, motion graphics, promotional adverts, and social media video editing.',
    icon: 'Video',
    features: ['Promo & Commercial Videos', 'Motion Graphics & VFX', 'Social Media Reels', 'Audio & Color Grading'],
    popular: false
  },
  {
    id: 'srv-6',
    title: 'Word Processing and Editing',
    category: 'Office Services',
    description: 'Professional typing, document formatting, resume/CV crafting, thesis editing, and transcription services.',
    icon: 'FileText',
    features: ['Fast Accurate Typing', 'Academic & Business Formatting', 'CV & Cover Letter Revamp', 'Proofreading & Editing'],
    popular: false
  },
  {
    id: 'srv-7',
    title: 'Online Registration',
    category: 'Office Services',
    description: 'Seamless processing for government portals, university admissions, NIN, JAMB, corporate CAC registration, and visas.',
    icon: 'CheckCircle2',
    features: ['CAC Business Incorporation', 'University & Exam Registrations', 'Visa & Travel Applications', 'Portal Assistance'],
    popular: true
  },
  {
    id: 'srv-8',
    title: '1 Minute Urgent Passport',
    category: 'Office Services',
    description: 'Instant passport photograph capture, background removal, precise sizing, and rapid print delivery.',
    icon: 'Camera',
    features: ['Instant Studio Capture', 'Visa Photo Specifications', 'Immediate High-Res Prints', 'Digital Copy Included'],
    popular: true
  },
  {
    id: 'srv-9',
    title: 'Computer Training',
    category: 'Education',
    description: 'Hands-on practical computer literacy, software mastery, programming, and digital skills acquisition.',
    icon: 'Laptop',
    features: ['Beginner to Advanced ICT', 'Microsoft Office Suite Mastery', 'Coding & Tech Basics', 'Certificate Awarded'],
    popular: false
  },
  {
    id: 'srv-10',
    title: 'Clean Photocopy',
    category: 'Office Services',
    description: 'High-clarity document duplication using state-of-the-art heavy-duty digital photocopy machines.',
    icon: 'Copy',
    features: ['Crystal Clear Duplication', 'Bulk Document Photocopying', 'A4 & A3 Support', 'Fast Turnaround'],
    popular: false
  },
  {
    id: 'srv-11',
    title: 'Both Black & Color Printing',
    category: 'Office Services',
    description: 'Vibrant color printing and crisp monochrome laser printing for documents, flyers, certificates, and reports.',
    icon: 'Printer',
    features: ['High-Definition Color Printing', 'Sharp Monochrome Laser', 'Glossy & Matte Stock', 'Large Volume Discounts'],
    popular: true
  }
];

export const initialGallery: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Computer Training Class in Session',
    category: 'Computer Training',
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
    description: 'Students actively learning practical computer skills in our fully air-conditioned, well-equipped training lab.',
    date: '2026-03-10'
  },
  {
    id: 'gal-2',
    title: 'Operating on Computer Systems',
    category: 'Computer Operation',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
    description: 'Our expert operators handling complex digital tasks and client document processing with speed and accuracy.',
    date: '2026-03-12'
  },
  {
    id: 'gal-3',
    title: 'Collaborative Client Session',
    category: 'Client Session',
    imageUrl: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80',
    description: 'Working side-by-side with a client on their business website and digital strategy design.',
    date: '2026-03-15'
  },
  {
    id: 'gal-4',
    title: 'Modern Web & App Design Studio',
    category: 'Web & App Design',
    imageUrl: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1200&q=80',
    description: 'Designing intuitive user interfaces and immersive mobile applications for corporate clients.',
    date: '2026-03-18'
  },
  {
    id: 'gal-5',
    title: 'Urgent Passport Photo Studio',
    category: 'Passport & Photo',
    imageUrl: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&w=1200&q=80',
    description: 'Professional photographer operating high-end camera equipment for instant 1-minute passport prints.',
    date: '2026-03-20'
  },
  {
    id: 'gal-6',
    title: 'High-Speed Printing & Photocopy Center',
    category: 'Printing & Photocopy',
    imageUrl: 'https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&w=1200&q=80',
    description: 'Heavy-duty black & white and full-color commercial printers delivering flawless copies.',
    date: '2026-03-22'
  }
];

export const initialAnnouncements: AnnouncementItem[] = [
  {
    id: 'ann-1',
    text: '📢 Special Promo: 20% off all Website Development and Mobile App design packages for new businesses this month!',
    active: true,
    date: '2026-03-20'
  },
  {
    id: 'ann-2',
    text: '🎓 Enroll now for our weekend Computer Training Masterclass. Limited seats available! Call 09027481035.',
    active: true,
    date: '2026-03-18'
  }
];
