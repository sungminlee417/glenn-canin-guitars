"use client";

import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";

interface HomeContent {
  data: {
    aboutPreview?: string;
    aboutPreviewTitle?: string;
    aboutPreviewLinkText?: string;
    [key: string]: unknown;
  };
  content: string;
}

interface AboutPreviewProps {
  homeContent: HomeContent | null;
}

export default function AboutPreview({ homeContent }: AboutPreviewProps) {
  const title = homeContent?.data?.aboutPreviewTitle || "On the Craft";
  const preview = homeContent?.data?.aboutPreview;
  const linkText = homeContent?.data?.aboutPreviewLinkText || "More about the workshop";

  return (
    <section className="py-24 lg:py-32 bg-brand-cream dark:bg-stone-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left: eyebrow + rule */}
        <FadeIn className="lg:col-span-4">
          <p className="font-cinzel text-[11px] tracking-[0.28em] text-brand-forest dark:text-brand-forest-light uppercase mb-6">
            The Maker
          </p>
          <h2 className="font-cinzel text-4xl md:text-5xl font-normal text-brand-ink dark:text-brand-cream leading-[1.1] tracking-tight mb-8">
            {title}
          </h2>
          <div className="h-px w-16 bg-brand-walnut/60 dark:bg-brand-cream/30" />
        </FadeIn>

        {/* Right: prose */}
        <FadeIn className="lg:col-span-7 lg:col-start-6">
          <div className="text-lg lg:text-xl text-brand-ink-soft dark:text-brand-cream/85 leading-[1.7] font-light space-y-6">
            {preview ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: preview.replace(/\n\n+/g, "</p><p>").replace(/\n/g, "<br />"),
                }}
              />
            ) : (
              <p>
                For nearly four decades I have built classical guitars, one instrument at a time, in a small
                workshop in Mill Valley. Each guitar is a conversation between traditional Spanish
                lutherie and the modern double-top construction that has quietly reshaped the concert
                repertoire.
              </p>
            )}
          </div>

          <div className="mt-12">
            <Link
              href="/about"
              className="group inline-flex items-center gap-3 border-b border-brand-ink dark:border-brand-cream pb-1 font-cinzel text-[11px] tracking-[0.28em] text-brand-ink dark:text-brand-cream uppercase transition-colors hover:text-brand-forest dark:hover:text-brand-forest-light hover:border-brand-forest dark:hover:border-brand-forest-light"
            >
              {linkText}
              <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
