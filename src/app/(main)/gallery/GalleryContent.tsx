'use client';

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";

interface GalleryItem {
  title?: string;
  category?: string;
  image?: string;
  description?: string;
  date?: string;
}

interface GalleryContent {
  pageTitle?: string;
  pageDescription?: string;
  galleryItems?: GalleryItem[];
  [key: string]: unknown;
}

interface GalleryContentProps {
  galleryContent: GalleryContent | null;
}

function GalleryCard({ item, onClick }: { item: GalleryItem; onClick: () => void }) {
  return (
    <StaggerItem>
      <button
        type="button"
        onClick={onClick}
        className="group block w-full text-left"
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-brand-cream-deep dark:bg-stone-800 mb-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.image || "/images/gallery-placeholder.jpg"}
            alt={item.title || "Gallery item"}
            className="w-full h-full object-cover transition-all duration-[900ms] ease-out group-hover:scale-[1.03]"
            loading="lazy"
          />
        </div>
        <div className="pt-1">
          {item.category && (
            <p className="font-cinzel text-[10px] tracking-[0.24em] text-brand-forest dark:text-brand-forest-light uppercase mb-2">
              {item.category}
            </p>
          )}
          <h3 className="font-cinzel text-lg lg:text-xl font-normal text-brand-ink dark:text-brand-cream leading-tight transition-colors group-hover:text-brand-forest dark:group-hover:text-brand-forest-light">
            {item.title}
          </h3>
        </div>
      </button>
    </StaggerItem>
  );
}

export default function GalleryContent({ galleryContent }: GalleryContentProps) {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    if (!selectedItem) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedItem(null);
    };
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [selectedItem]);

  const pageTitle = galleryContent?.pageTitle || "Gallery";
  const pageDescription = galleryContent?.pageDescription || "Finished instruments and moments from the workshop.";
  const galleryItems = galleryContent?.galleryItems || [];

  const displayItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const categories = ['All', ...Array.from(new Set(galleryItems.map(item => item.category).filter(Boolean)))] as string[];

  return (
    <div className="bg-brand-cream dark:bg-stone-950 pt-24 pb-24 lg:pt-32 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeIn className="mb-16 lg:mb-20 max-w-3xl">
          <p className="font-cinzel text-[11px] tracking-[0.28em] text-brand-forest dark:text-brand-forest-light uppercase mb-6">
            Portfolio
          </p>
          <h1 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-normal text-brand-ink dark:text-brand-cream leading-[1.1] tracking-tight mb-8">
            {pageTitle}
          </h1>
          <div className="h-px w-16 bg-brand-walnut/60 dark:bg-brand-cream/30 mb-8" />
          <p className="text-lg text-brand-ink-soft dark:text-brand-cream/85 leading-[1.7] font-light">
            {pageDescription}
          </p>
        </FadeIn>

        {categories.length > 1 && (
          <FadeIn className="mb-16 lg:mb-20">
            <div className="flex flex-wrap gap-x-8 gap-y-3 border-b border-brand-rule/50 pb-6">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`font-cinzel text-[11px] tracking-[0.24em] uppercase transition-colors ${
                    selectedCategory === category
                      ? "text-brand-forest dark:text-brand-forest-light"
                      : "text-brand-ink-soft/70 dark:text-brand-cream/50 hover:text-brand-forest dark:hover:text-brand-forest-light"
                  }`}
                >
                  {category}
                  {selectedCategory === category && (
                    <span className="ml-2 text-brand-walnut dark:text-brand-walnut-light">·</span>
                  )}
                </button>
              ))}
            </div>
          </FadeIn>
        )}

        {displayItems.length > 0 ? (
          <StaggerChildren
            key={selectedCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 lg:gap-y-20"
          >
            {displayItems.map((item, index) => (
              <GalleryCard
                key={`${item.title}-${index}`}
                item={item}
                onClick={() => setSelectedItem(item)}
              />
            ))}
          </StaggerChildren>
        ) : (
          <FadeIn>
            <p className="py-16 text-center text-brand-ink-soft dark:text-brand-cream/70">
              No items in this category yet.
            </p>
          </FadeIn>
        )}
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 bg-brand-ink/70 dark:bg-black/80 z-[10000] flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedItem(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-brand-cream dark:bg-stone-900 max-w-5xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="p-8 lg:p-12">
                <div className="flex justify-between items-start mb-8 gap-4">
                  <div>
                    {selectedItem.category && (
                      <p className="font-cinzel text-[10px] tracking-[0.24em] uppercase text-brand-forest dark:text-brand-forest-light mb-2">
                        {selectedItem.category}
                      </p>
                    )}
                    <h2 className="font-cinzel text-3xl md:text-4xl font-normal text-brand-ink dark:text-brand-cream leading-tight">
                      {selectedItem.title}
                    </h2>
                  </div>
                  <button
                    onClick={() => setSelectedItem(null)}
                    aria-label="Close"
                    className="text-brand-ink-soft dark:text-brand-cream/70 hover:text-brand-forest dark:hover:text-brand-forest-light transition-colors p-2 -m-2"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                  <div className="relative aspect-[4/5] bg-brand-cream-deep dark:bg-stone-800 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={selectedItem.image || "/images/gallery-placeholder.jpg"}
                      alt={selectedItem.title || "Gallery item"}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="space-y-6">
                    {selectedItem.date && (
                      <div>
                        <p className="font-cinzel text-[10px] tracking-[0.24em] uppercase text-brand-forest dark:text-brand-forest-light mb-2">
                          Date
                        </p>
                        <p className="text-brand-ink dark:text-brand-cream">
                          {new Date(selectedItem.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </p>
                      </div>
                    )}
                    {selectedItem.description && (
                      <div>
                        <p className="font-cinzel text-[10px] tracking-[0.24em] uppercase text-brand-forest dark:text-brand-forest-light mb-3">
                          Notes
                        </p>
                        <p className="text-brand-ink-soft dark:text-brand-cream/85 leading-[1.7] font-light">
                          {selectedItem.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
