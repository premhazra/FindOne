import { Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

/* ─────────────────────────────────────────────
   Navigation Data
   ───────────────────────────────────────────── */

export const NAV_LINKS = [
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#categories', label: 'Categories' },
  { href: '#for-workers', label: 'For Workers' },
  { href: '#for-clients', label: 'For Clients' },
];

export const FOOTER_LINKS = [
  {
    title: 'Product',
    links: [
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Categories', href: '#categories' },
      { label: 'For Workers', href: '#for-workers' },
      { label: 'For Clients', href: '#for-clients' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Blog', href: '/blog' },
      { label: 'Press', href: '/press' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center', href: '/help' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Safety', href: '/safety' },
      { label: 'Trust & Safety', href: '/trust' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
    ],
  },
];

export const SOCIAL_LINKS = [
  { label: 'Twitter', href: 'https://twitter.com/findone', icon: Twitter },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/findone', icon: Linkedin },
  { label: 'Instagram', href: 'https://instagram.com/findone', icon: Instagram },
  { label: 'YouTube', href: 'https://youtube.com/@findone', icon: Youtube },
];
