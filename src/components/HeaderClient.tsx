"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

interface NavigationSettings {
  data: {
    siteTitle?: string;
    homeLabel?: string;
    aboutLabel?: string;
    doubletopsLabel?: string;
    videosLabel?: string;
    galleryLabel?: string;
    playersLabel?: string;
    orderingLabel?: string;
    contactLabel?: string;
    forSaleLabel?: string;
    [key: string]: unknown;
  };
  content: string;
}

interface HeaderClientProps {
  navigationSettings: NavigationSettings | null;
}

export default function HeaderClient({ navigationSettings }: HeaderClientProps) {
  // Desktop nav: primary items only. Home is reached via the logo.
  // Full list (including Home) appears in the mobile drawer.
  const primaryNav = [
    { label: navigationSettings?.data?.aboutLabel || "About", href: "/about" },
    { label: navigationSettings?.data?.forSaleLabel || "For Sale", href: "/for-sale" },
    { label: navigationSettings?.data?.galleryLabel || "Gallery", href: "/gallery" },
    { label: navigationSettings?.data?.playersLabel || "Players", href: "/players" },
    { label: navigationSettings?.data?.videosLabel || "Videos", href: "/videos" },
    { label: navigationSettings?.data?.doubletopsLabel || "Doubletops", href: "/doubletops" },
    { label: navigationSettings?.data?.orderingLabel || "Ordering", href: "/ordering" },
    { label: navigationSettings?.data?.contactLabel || "Contact", href: "/contact" },
  ];
  const mobileNav = [
    { label: navigationSettings?.data?.homeLabel || "Home", href: "/" },
    ...primaryNav,
  ];

  const siteTitle = navigationSettings?.data?.siteTitle || "Glenn Canin Guitars";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-brand-cream/90 dark:bg-stone-950/90 backdrop-blur-md z-[9999] border-b border-brand-rule/50 dark:border-stone-800">
      <nav className="mx-auto max-w-7xl px-6 lg:px-12" aria-label="Top">
        <div className="flex w-full items-center justify-between py-5">
          <Link
            href="/"
            className="font-cinzel text-base md:text-lg tracking-[0.16em] uppercase text-brand-ink dark:text-brand-cream hover:text-brand-forest dark:hover:text-brand-forest-light transition-colors"
          >
            {siteTitle}
          </Link>

          <div className="hidden lg:flex items-center gap-x-6 xl:gap-x-8">
            {primaryNav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative font-cinzel text-[10px] tracking-[0.22em] uppercase text-brand-ink-soft dark:text-brand-cream/70 hover:text-brand-forest dark:hover:text-brand-forest-light transition-colors group whitespace-nowrap"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-brand-forest dark:bg-brand-forest-light transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="lg:hidden">
              <button
                type="button"
                className="p-2 text-brand-ink dark:text-brand-cream hover:text-brand-forest dark:hover:text-brand-forest-light transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <Menu className="h-5 w-5" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="lg:hidden overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="space-y-1 py-4 border-t border-brand-rule/50 dark:border-stone-800">
                {mobileNav.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block px-2 py-3 font-cinzel text-[11px] tracking-[0.24em] uppercase text-brand-ink-soft dark:text-brand-cream/70 hover:text-brand-forest dark:hover:text-brand-forest-light transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
