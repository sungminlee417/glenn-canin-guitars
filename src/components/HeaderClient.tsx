"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
  // Fixed navigation structure with editable labels
  const navigation = [
    { label: navigationSettings?.data?.homeLabel || "Home", href: "/" },
    { label: navigationSettings?.data?.aboutLabel || "About", href: "/about" },
    { label: navigationSettings?.data?.doubletopsLabel || "Doubletops", href: "/doubletops" },
    { label: navigationSettings?.data?.videosLabel || "Videos", href: "/videos" },
    { label: navigationSettings?.data?.galleryLabel || "Gallery", href: "/gallery" },
    { label: navigationSettings?.data?.playersLabel || "Players", href: "/players" },
    { label: navigationSettings?.data?.orderingLabel || "Ordering", href: "/ordering" },
    { label: navigationSettings?.data?.contactLabel || "Contact", href: "/contact" },
    { label: navigationSettings?.data?.forSaleLabel || "For Sale", href: "/for-sale" },
  ];

  const siteTitle = navigationSettings?.data?.siteTitle || "Glenn Canin Guitars";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-stone-900/95 backdrop-blur-sm shadow-sm z-[9999] border-b border-stone-200 dark:border-stone-700"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-4">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="font-cinzel text-xl md:text-2xl font-semibold text-stone-900 dark:text-stone-100 hover:text-amber-600 transition-colors">
{siteTitle}
            </Link>
          </motion.div>
          
          <div className="hidden xl:flex xl:gap-x-8">
            {navigation.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="relative text-sm font-medium text-stone-700 dark:text-stone-100 hover:text-amber-600 dark:hover:text-amber-400 transition-all duration-300 group"
                >
                  {item.label}
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all duration-300"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2">
            <ThemeToggle />
            <div className="xl:hidden flex items-center justify-center">
              <motion.button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-stone-700 dark:text-stone-300 hover:text-amber-600 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">Open main menu</span>
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" aria-hidden="true" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" aria-hidden="true" />
                  </motion.div>
                )}
              </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="xl:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-1 pb-3">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-base font-medium text-stone-700 dark:text-stone-200 hover:bg-amber-50 dark:hover:bg-amber-900/20 hover:text-amber-600 dark:hover:text-amber-400 transition-all duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}