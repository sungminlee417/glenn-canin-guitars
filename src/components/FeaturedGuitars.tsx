'use client';

import Link from "next/link";
import { useState } from "react";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";
import FadeIn from "@/components/animations/FadeIn";

interface Guitar {
  slug: string;
  data: {
    title?: string;
    model?: string;
    year?: number;
    mainImage?: string;
    description?: string;
    featured?: boolean;
    [key: string]: unknown;
  };
  content: string;
}

interface FeaturedGuitarsProps {
  featuredGuitars: Guitar[];
  title?: string;
  description?: string;
  buttonText?: string;
}

interface GuitarCardProps {
  guitar: Guitar;
}

function GuitarCard({ guitar }: GuitarCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <StaggerItem>
      <Link
        href={`/for-sale#guitar-${guitar.slug}`}
        className="group block"
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-brand-cream-deep dark:bg-stone-800 mb-5">
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 bg-brand-cream-deep dark:bg-stone-800" />
          )}
          {imageError ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-16 h-16 text-brand-walnut/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM21 16c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM7 9l12-3" />
              </svg>
            </div>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={guitar.data.mainImage}
              alt={guitar.data.title || "Guitar"}
              className={`w-full h-full object-cover transition-all duration-[900ms] ease-out ${
                imageLoaded ? "opacity-100" : "opacity-0"
              } group-hover:scale-[1.03]`}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
              loading="lazy"
            />
          )}
        </div>

        <div className="pt-1">
          {guitar.data.year != null && (
            <p className="font-cinzel text-[10px] tracking-[0.24em] text-brand-forest dark:text-brand-forest-light uppercase mb-2">
              {guitar.data.year}
            </p>
          )}
          <h3 className="font-cinzel text-xl lg:text-2xl font-normal text-brand-ink dark:text-brand-cream leading-tight mb-3 transition-colors group-hover:text-brand-forest dark:group-hover:text-brand-forest-light">
            {guitar.data.title}
          </h3>
          {guitar.data.description && (
            <p className="text-sm text-brand-ink-soft dark:text-brand-cream/70 leading-relaxed line-clamp-3">
              {guitar.data.description}
            </p>
          )}
        </div>
      </Link>
    </StaggerItem>
  );
}

export default function FeaturedGuitars({ featuredGuitars, title, description, buttonText }: FeaturedGuitarsProps) {
  return (
    <section className="py-24 lg:py-32 bg-brand-cream-soft dark:bg-stone-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeIn className="mb-16 lg:mb-20 max-w-3xl">
          <p className="font-cinzel text-[11px] tracking-[0.28em] text-brand-forest dark:text-brand-forest-light uppercase mb-6">
            The Work
          </p>
          <h2 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-normal text-brand-ink dark:text-brand-cream leading-[1.1] tracking-tight mb-8">
            {title || "Recent Instruments"}
          </h2>
          <div className="h-px w-16 bg-brand-walnut/60 dark:bg-brand-cream/30 mb-8" />
          <p className="text-lg text-brand-ink-soft dark:text-brand-cream/80 leading-relaxed">
            {description || "A selection of recently completed instruments, each built one at a time in the Mill Valley workshop."}
          </p>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 lg:gap-y-20">
          {featuredGuitars.map((guitar) => (
            <GuitarCard key={guitar.slug} guitar={guitar} />
          ))}
        </StaggerChildren>

        {buttonText && (
          <FadeIn className="mt-20 lg:mt-24 flex justify-start">
            <Link
              href="/for-sale"
              className="group inline-flex items-center gap-3 border-b border-brand-ink dark:border-brand-cream pb-1 font-cinzel text-[11px] tracking-[0.28em] text-brand-ink dark:text-brand-cream uppercase transition-colors hover:text-brand-forest dark:hover:text-brand-forest-light hover:border-brand-forest dark:hover:border-brand-forest-light"
            >
              {buttonText}
              <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1">
                →
              </span>
            </Link>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
