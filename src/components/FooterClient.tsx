"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Facebook, Youtube, Twitter } from "lucide-react";

interface FooterContent {
  data: {
    companyName?: string;
    description?: string;
    phone?: string;
    email?: string;
    location?: string;
    locationNote?: string;
    establishedYear?: string;
    tagline?: string;
    country?: string;
    trustlineText?: string;
    socialMedia?: {
      instagram?: string;
      facebook?: string;
      youtube?: string;
      twitter?: string;
    };
    [key: string]: unknown;
  };
  content: string;
}

interface FooterClientProps {
  footerContent: FooterContent | null;
}

export default function FooterClient({ footerContent }: FooterClientProps) {
  const quickLinks = [
    { href: "/about", label: "About" },
    { href: "/for-sale", label: "For Sale" },
    { href: "/players", label: "Players" },
    { href: "/gallery", label: "Gallery" },
    { href: "/videos", label: "Videos" },
    { href: "/doubletops", label: "Doubletops" },
    { href: "/ordering", label: "Ordering" },
    { href: "/contact", label: "Contact" },
  ];

  // Show admin link in development or when ?admin=true is in URL
  const showAdminLink = process.env.NODE_ENV === 'development' || 
    (typeof window !== 'undefined' && window.location.search.includes('admin=true'));

  // Use CMS data with fallbacks
  const companyName = footerContent?.data?.companyName || "Glenn Canin Guitars";
  const description = footerContent?.data?.description || "Handcrafted concert classical guitars for professional musicians worldwide. Each instrument is meticulously crafted to inspire musical excellence.";
  const phone = footerContent?.data?.phone || "415-407-1191";
  const email = footerContent?.data?.email || "glenncanin@hotmail.com";
  const location = footerContent?.data?.location || "Mill Valley, California";
  const locationNote = footerContent?.data?.locationNote || "Visits by appointment only";
  const establishedYear = footerContent?.data?.establishedYear || "1985";
  const tagline = footerContent?.data?.tagline || "Handcrafted with passion";
  const country = footerContent?.data?.country || "Made in USA";
  const trustlineText = footerContent?.data?.trustlineText || "Trusted by professional musicians worldwide";
  
  // Social media data
  const socialMedia = footerContent?.data?.socialMedia || {};
  
  // Helper function to generate social media URL
  const getSocialMediaUrl = (platform: string, handle: string) => {
    switch (platform) {
      case 'instagram':
        return `https://instagram.com/${handle}`;
      case 'facebook':
        return handle.startsWith('http') ? handle : `https://facebook.com/${handle}`;
      case 'youtube':
        return handle.startsWith('http') ? handle : `https://youtube.com/${handle}`;
      case 'twitter':
        return `https://twitter.com/${handle}`;
      default:
        return '#';
    }
  };

  return (
    <footer className="bg-stone-900 dark:bg-stone-950 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/images/wood-grain.svg')] opacity-5" />
      
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Brand Section */}
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.h3 
              className="font-cinzel text-2xl font-bold mb-4 text-amber-400"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              {companyName}
            </motion.h3>
            <p className="text-stone-300 text-base leading-relaxed max-w-md mb-6">
              {description}
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex space-x-1 text-amber-400">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <span className="text-stone-400 text-sm leading-relaxed">{trustlineText}</span>
            </motion.div>
            
            {/* Social Media Links */}
            {(socialMedia.instagram || socialMedia.facebook || socialMedia.youtube || socialMedia.twitter) && (
              <motion.div 
                className="mt-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h4 className="font-semibold text-amber-400 mb-3 text-sm">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialMedia.instagram && (
                    <motion.a
                      href={getSocialMediaUrl('instagram', socialMedia.instagram)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-400 hover:text-amber-400 transition-colors duration-200"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      aria-label="Follow us on Instagram"
                    >
                      <Instagram className="w-6 h-6" />
                    </motion.a>
                  )}
                  {socialMedia.facebook && (
                    <motion.a
                      href={getSocialMediaUrl('facebook', socialMedia.facebook)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-400 hover:text-amber-400 transition-colors duration-200"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      aria-label="Follow us on Facebook"
                    >
                      <Facebook className="w-6 h-6" />
                    </motion.a>
                  )}
                  {socialMedia.youtube && (
                    <motion.a
                      href={getSocialMediaUrl('youtube', socialMedia.youtube)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-400 hover:text-amber-400 transition-colors duration-200"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      aria-label="Follow us on YouTube"
                    >
                      <Youtube className="w-6 h-6" />
                    </motion.a>
                  )}
                  {socialMedia.twitter && (
                    <motion.a
                      href={getSocialMediaUrl('twitter', socialMedia.twitter)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-400 hover:text-amber-400 transition-colors duration-200"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      aria-label="Follow us on Twitter"
                    >
                      <Twitter className="w-6 h-6" />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            )}
          </motion.div>
          
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-cinzel font-semibold text-lg mb-6 text-amber-400">Explore</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.href}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                >
                  <Link 
                    href={link.href} 
                    className="text-stone-300 hover:text-amber-400 transition-colors duration-200 text-sm block py-1"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              {showAdminLink && (
                <motion.li 
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + quickLinks.length * 0.05 }}
                >
                  <Link 
                    href="/studio" 
                    className="text-stone-400 hover:text-amber-400 transition-colors duration-200 text-xs block py-1 border-t border-stone-700 pt-3 mt-3"
                  >
                    ⚙️ Admin Studio
                  </Link>
                </motion.li>
              )}
            </ul>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-cinzel font-semibold text-lg mb-6 text-amber-400">Connect</h4>
            <div className="space-y-4 text-sm">
              <motion.div 
                className="text-stone-300"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="block font-medium text-white mb-1">Phone</span>
                <a href={`tel:${phone.replace(/[^\d]/g, '')}`} className="hover:text-amber-400 transition-colors">
                  {phone}
                </a>
              </motion.div>
              
              <motion.div 
                className="text-stone-300"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="block font-medium text-white mb-1">Email</span>
                <a href={`mailto:${email}`} className="hover:text-amber-400 transition-colors">
                  {email}
                </a>
              </motion.div>
              
              <motion.div 
                className="text-stone-300"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="block font-medium text-white mb-1">Workshop</span>
                <span>{location}</span>
                <span className="block text-xs text-stone-400 mt-1">
                  {locationNote}
                </span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Bottom Section */}
        <motion.div 
          className="mt-12 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.p 
            className="text-stone-400 text-sm mb-4 md:mb-0"
            whileHover={{ color: "#a8a29e" }}
            transition={{ duration: 0.2 }}
          >
            &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
          </motion.p>
          
          <motion.div 
            className="flex items-center space-x-4 text-xs text-stone-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <span>{tagline}</span>
            <span>•</span>
            <span>Since {establishedYear}</span>
            <span>•</span>
            <span>{country}</span>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}