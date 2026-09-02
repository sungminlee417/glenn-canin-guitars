'use client';

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";

interface Guitar {
  title?: string;
  year?: number;
  price?: string;
  mainImage?: string;
  description?: string;
  specifications?: {
    topWood?: string;
    backSides?: string;
    neckWood?: string;
    fingerboard?: string;
    scaleLength?: string;
    nutWidth?: string;
    finish?: string;
  };
}

interface ForSaleContent {
  pageTitle?: string;
  pageDescription?: string;
  availabilityNoticeTitle?: string;
  availabilityNoticeText?: string;
  availableInstrumentsTitle?: string;
  guitars?: Guitar[];
  inquireButtonText?: string;
  [key: string]: unknown;
}

interface ForSaleContentProps {
  forSaleContent: ForSaleContent | null;
}

const specLabels: Record<string, string> = {
  topWood: "Top",
  backSides: "Back & Sides",
  neckWood: "Neck",
  fingerboard: "Fingerboard",
  scaleLength: "Scale Length",
  nutWidth: "Nut Width",
  finish: "Finish",
};

export default function ForSaleContent({ forSaleContent }: ForSaleContentProps) {
  const [selectedGuitar, setSelectedGuitar] = useState<Guitar | null>(null);

  useEffect(() => {
    if (!selectedGuitar) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedGuitar(null);
    };
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [selectedGuitar]);

  const pageTitle = forSaleContent?.pageTitle || "Available Instruments";
  const pageDescription = forSaleContent?.pageDescription || "A rotating selection of guitars currently available from the workshop. Each is sold on a first-come basis.";
  const availabilityNoticeText = forSaleContent?.availabilityNoticeText;
  const inquireButtonText = forSaleContent?.inquireButtonText || "Inquire about this guitar";
  const guitars = forSaleContent?.guitars || [];

  return (
    <div className="bg-brand-cream dark:bg-stone-950 pt-24 pb-24 lg:pt-32 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeIn className="mb-20 lg:mb-28 max-w-3xl">
          <p className="font-cinzel text-[11px] tracking-[0.28em] text-brand-forest dark:text-brand-forest-light uppercase mb-6">
            Currently Available
          </p>
          <h1 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-normal text-brand-ink dark:text-brand-cream leading-[1.1] tracking-tight mb-8">
            {pageTitle}
          </h1>
          <div className="h-px w-16 bg-brand-walnut/60 dark:bg-brand-cream/30 mb-8" />
          <p className="text-lg text-brand-ink-soft dark:text-brand-cream/85 leading-[1.7] font-light">
            {pageDescription}
          </p>
          {availabilityNoticeText && (
            <p className="mt-6 text-sm text-brand-ink-soft/80 dark:text-brand-cream/60 italic border-l-2 border-brand-walnut/40 pl-4">
              {availabilityNoticeText}
            </p>
          )}
        </FadeIn>

        {guitars.length > 0 ? (
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 lg:gap-y-20">
            {guitars.map((guitar, index) => (
              <GuitarCard
                key={index}
                guitar={guitar}
                onClick={() => setSelectedGuitar(guitar)}
              />
            ))}
          </StaggerChildren>
        ) : (
          <FadeIn>
            <p className="py-16 text-center text-brand-ink-soft dark:text-brand-cream/70 text-lg">
              No instruments are currently available. Please check back soon or reach out
              for upcoming pieces.
            </p>
          </FadeIn>
        )}
      </div>

      <AnimatePresence>
        {selectedGuitar && (
          <motion.div
            className="fixed inset-0 bg-brand-ink/70 dark:bg-black/80 z-[10000] flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedGuitar(null)}
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
                    {selectedGuitar.year && (
                      <p className="font-cinzel text-[10px] tracking-[0.24em] uppercase text-brand-forest dark:text-brand-forest-light mb-2">
                        {selectedGuitar.year}
                      </p>
                    )}
                    <h2 className="font-cinzel text-3xl md:text-4xl font-normal text-brand-ink dark:text-brand-cream leading-tight">
                      {selectedGuitar.title}
                    </h2>
                  </div>
                  <button
                    onClick={() => setSelectedGuitar(null)}
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
                      src={selectedGuitar.mainImage || "/images/guitar-placeholder.jpg"}
                      alt={selectedGuitar.title || "Guitar"}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="space-y-8">
                    {selectedGuitar.price && (
                      <div>
                        <p className="font-cinzel text-[10px] tracking-[0.24em] uppercase text-brand-forest dark:text-brand-forest-light mb-2">
                          Price
                        </p>
                        <p className="font-cinzel text-2xl text-brand-ink dark:text-brand-cream">
                          {selectedGuitar.price}
                        </p>
                      </div>
                    )}

                    {selectedGuitar.description && (
                      <div>
                        <p className="font-cinzel text-[10px] tracking-[0.24em] uppercase text-brand-forest dark:text-brand-forest-light mb-3">
                          On the Instrument
                        </p>
                        <p className="text-brand-ink-soft dark:text-brand-cream/85 leading-[1.7] font-light">
                          {selectedGuitar.description}
                        </p>
                      </div>
                    )}

                    {selectedGuitar.specifications && (
                      <div>
                        <p className="font-cinzel text-[10px] tracking-[0.24em] uppercase text-brand-forest dark:text-brand-forest-light mb-4">
                          Specifications
                        </p>
                        <dl className="grid grid-cols-1 gap-y-3 text-sm">
                          {Object.entries(selectedGuitar.specifications).map(([key, value]) =>
                            value ? (
                              <div key={key} className="flex justify-between gap-4 py-2 border-b border-brand-rule/40">
                                <dt className="text-brand-ink-soft dark:text-brand-cream/60">
                                  {specLabels[key] || key}
                                </dt>
                                <dd className="text-brand-ink dark:text-brand-cream text-right">
                                  {value}
                                </dd>
                              </div>
                            ) : null
                          )}
                        </dl>
                      </div>
                    )}

                    <div className="pt-4">
                      <a
                        href="/contact"
                        className="group inline-flex items-center gap-3 border-b border-brand-ink dark:border-brand-cream pb-1 font-cinzel text-[11px] tracking-[0.28em] uppercase text-brand-ink dark:text-brand-cream hover:text-brand-forest dark:hover:text-brand-forest-light hover:border-brand-forest dark:hover:border-brand-forest-light transition-colors"
                      >
                        {inquireButtonText}
                        <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1">
                          →
                        </span>
                      </a>
                    </div>
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

interface GuitarCardProps {
  guitar: Guitar;
  onClick: () => void;
}

function GuitarCard({ guitar, onClick }: GuitarCardProps) {
  return (
    <StaggerItem>
      <button
        type="button"
        onClick={onClick}
        className="group block w-full text-left"
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-brand-cream-deep dark:bg-stone-800 mb-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={guitar.mainImage || "/images/guitar-placeholder.jpg"}
            alt={guitar.title || "Guitar"}
            className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
            loading="lazy"
          />
        </div>
        <div className="pt-1">
          {guitar.year != null && (
            <p className="font-cinzel text-[10px] tracking-[0.24em] text-brand-forest dark:text-brand-forest-light uppercase mb-2">
              {guitar.year}
            </p>
          )}
          <h3 className="font-cinzel text-xl lg:text-2xl font-normal text-brand-ink dark:text-brand-cream leading-tight mb-2 transition-colors group-hover:text-brand-forest dark:group-hover:text-brand-forest-light">
            {guitar.title}
          </h3>
          {guitar.price && (
            <p className="text-brand-walnut dark:text-brand-walnut-light text-sm mb-3 font-light italic">
              {guitar.price}
            </p>
          )}
          {guitar.description && (
            <p className="text-sm text-brand-ink-soft dark:text-brand-cream/70 leading-relaxed line-clamp-2">
              {guitar.description}
            </p>
          )}
        </div>
      </button>
    </StaggerItem>
  );
}
