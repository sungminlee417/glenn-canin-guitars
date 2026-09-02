"use client";

import Link from "next/link";
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

const socialUrl = (platform: string, handle: string) => {
  if (handle.startsWith("http")) return handle;
  switch (platform) {
    case "instagram": return `https://instagram.com/${handle}`;
    case "facebook": return `https://facebook.com/${handle}`;
    case "youtube": return `https://youtube.com/${handle}`;
    case "twitter": return `https://twitter.com/${handle}`;
    default: return "#";
  }
};

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

  const showAdminLink = process.env.NODE_ENV === "development" ||
    (typeof window !== "undefined" && window.location.search.includes("admin=true"));

  const companyName = footerContent?.data?.companyName || "Glenn Canin Guitars";
  const description = footerContent?.data?.description || "Handcrafted concert classical guitars, built one at a time in Mill Valley, California.";
  const phone = footerContent?.data?.phone || "415-407-1191";
  const email = footerContent?.data?.email || "glenncanin@hotmail.com";
  const location = footerContent?.data?.location || "Mill Valley, California";
  const locationNote = footerContent?.data?.locationNote || "Workshop visits by appointment";
  const establishedYear = footerContent?.data?.establishedYear || "1985";
  const country = footerContent?.data?.country || "Made in USA";
  const socialMedia = footerContent?.data?.socialMedia || {};

  return (
    <footer className="bg-brand-cream-deep dark:bg-stone-950 text-brand-ink dark:text-brand-cream border-t border-brand-rule/50 dark:border-stone-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          <div className="md:col-span-5">
            <Link
              href="/"
              className="font-cinzel text-base tracking-[0.16em] uppercase text-brand-ink dark:text-brand-cream hover:text-brand-forest dark:hover:text-brand-forest-light transition-colors"
            >
              {companyName}
            </Link>
            <p className="mt-6 text-brand-ink-soft dark:text-brand-cream/75 text-base leading-[1.7] max-w-md">
              {description}
            </p>

            {(socialMedia.instagram || socialMedia.facebook || socialMedia.youtube || socialMedia.twitter) && (
              <div className="mt-8 flex items-center gap-5">
                {socialMedia.instagram && (
                  <a
                    href={socialUrl("instagram", socialMedia.instagram)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-ink-soft dark:text-brand-cream/70 hover:text-brand-forest dark:hover:text-brand-forest-light transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                )}
                {socialMedia.facebook && (
                  <a
                    href={socialUrl("facebook", socialMedia.facebook)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-ink-soft dark:text-brand-cream/70 hover:text-brand-forest dark:hover:text-brand-forest-light transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                )}
                {socialMedia.youtube && (
                  <a
                    href={socialUrl("youtube", socialMedia.youtube)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-ink-soft dark:text-brand-cream/70 hover:text-brand-forest dark:hover:text-brand-forest-light transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                )}
                {socialMedia.twitter && (
                  <a
                    href={socialUrl("twitter", socialMedia.twitter)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-ink-soft dark:text-brand-cream/70 hover:text-brand-forest dark:hover:text-brand-forest-light transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                )}
              </div>
            )}
          </div>

          <div className="md:col-span-3">
            <p className="font-cinzel text-[10px] tracking-[0.24em] uppercase text-brand-forest dark:text-brand-forest-light mb-5">
              Explore
            </p>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brand-ink-soft dark:text-brand-cream/75 hover:text-brand-forest dark:hover:text-brand-forest-light transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {showAdminLink && (
                <li className="pt-3 mt-3 border-t border-brand-rule/50 dark:border-stone-800">
                  <Link
                    href="/studio"
                    className="text-brand-ink-soft/70 dark:text-brand-cream/60 hover:text-brand-forest dark:hover:text-brand-forest-light transition-colors text-xs"
                  >
                    Admin Studio
                  </Link>
                </li>
              )}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="font-cinzel text-[10px] tracking-[0.24em] uppercase text-brand-forest dark:text-brand-forest-light mb-5">
              Connect
            </p>
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="text-brand-ink-soft/60 dark:text-brand-cream/50 text-[11px] uppercase tracking-wider mb-1">Phone</dt>
                <dd>
                  <a
                    href={`tel:${phone.replace(/[^\d]/g, "")}`}
                    className="text-brand-ink dark:text-brand-cream hover:text-brand-forest dark:hover:text-brand-forest-light transition-colors"
                  >
                    {phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-brand-ink-soft/60 dark:text-brand-cream/50 text-[11px] uppercase tracking-wider mb-1">Email</dt>
                <dd>
                  <a
                    href={`mailto:${email}`}
                    className="text-brand-ink dark:text-brand-cream hover:text-brand-forest dark:hover:text-brand-forest-light transition-colors break-all"
                  >
                    {email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-brand-ink-soft/60 dark:text-brand-cream/50 text-[11px] uppercase tracking-wider mb-1">Workshop</dt>
                <dd className="text-brand-ink dark:text-brand-cream">{location}</dd>
                <dd className="text-brand-ink-soft/70 dark:text-brand-cream/60 text-xs mt-1">{locationNote}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-brand-rule/50 dark:border-stone-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-brand-ink-soft/70 dark:text-brand-cream/60 text-xs">
            &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
          </p>
          <p className="font-cinzel text-[10px] tracking-[0.24em] uppercase text-brand-ink-soft/70 dark:text-brand-cream/60">
            Est. {establishedYear} · {country}
          </p>
        </div>
      </div>
    </footer>
  );
}
