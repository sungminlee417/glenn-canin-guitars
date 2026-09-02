"use client";

import FadeIn from "@/components/animations/FadeIn";

interface AboutData {
  data: {
    title?: string;
    heroImage?: string;
    journeyTitle?: string;
    journeyContent?: string;
    philosophyTitle?: string;
    philosophyContent?: string;
    [key: string]: unknown;
  };
  content: string;
}

interface AboutContentProps {
  aboutContent: AboutData | null;
}

export default function AboutContent({ aboutContent }: AboutContentProps) {
  const title = aboutContent?.data?.title || "About Glenn Canin";
  const journeyTitle = aboutContent?.data?.journeyTitle || "The Journey";
  const philosophyTitle = aboutContent?.data?.philosophyTitle || "The Philosophy";
  const heroImage = aboutContent?.data?.heroImage;

  const journeyParagraphs = aboutContent?.data?.journeyContent
    ? aboutContent.data.journeyContent.split("\n\n").filter((p) => p.trim())
    : [
        "I began my journey as a luthier in 1985, driven by a passion for creating instruments that could truly sing. Over nearly four decades, I have refined my craft, studying under master builders and developing my own innovations in classical guitar construction.",
        "My workshop has produced over 150 instruments, each one carefully crafted to meet the unique needs and preferences of professional musicians worldwide. From concert halls in Europe to recording studios in America, my guitars have found homes with artists who demand the very best.",
      ];

  const philosophyParagraphs = aboutContent?.data?.philosophyContent
    ? aboutContent.data.philosophyContent.split("\n\n").filter((p) => p.trim())
    : [
        "A great guitar is more than wood and strings — it is a partner in musical expression. Every instrument I build is designed to inspire, to respond to the subtlest touch, and to project with clarity and power.",
        "My approach combines traditional Spanish guitar-making techniques with modern innovations like the double-top construction, which provides exceptional volume and sustain while maintaining the warmth and complexity of tone that classical guitarists cherish.",
      ];

  return (
    <div className="bg-brand-cream dark:bg-stone-950 pt-24 pb-24 lg:pt-32 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <FadeIn className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-20 lg:mb-28">
          <div className="lg:col-span-5">
            <p className="font-cinzel text-[11px] tracking-[0.28em] text-brand-forest dark:text-brand-forest-light uppercase mb-6">
              Vol. I — The Maker
            </p>
            <h1 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-normal text-brand-ink dark:text-brand-cream leading-[1.1] tracking-tight mb-8">
              {title}
            </h1>
            <div className="h-px w-16 bg-brand-walnut/60 dark:bg-brand-cream/30" />
          </div>
        </FadeIn>

        {/* Portrait */}
        {heroImage && (
          <FadeIn className="mb-24 lg:mb-32">
            <div className="relative aspect-[16/10] lg:aspect-[21/9] w-full overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={heroImage}
                alt="Glenn Canin"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </FadeIn>
        )}

        {/* Journey */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-24 lg:mb-32">
          <FadeIn className="lg:col-span-4">
            <p className="font-cinzel text-[11px] tracking-[0.28em] text-brand-forest dark:text-brand-forest-light uppercase mb-6">
              i.
            </p>
            <h2 className="font-cinzel text-3xl md:text-4xl font-normal text-brand-ink dark:text-brand-cream leading-tight tracking-tight">
              {journeyTitle}
            </h2>
          </FadeIn>
          <FadeIn className="lg:col-span-7 lg:col-start-6">
            <div className="text-lg text-brand-ink-soft dark:text-brand-cream/85 leading-[1.7] font-light space-y-6">
              {journeyParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <FadeIn className="lg:col-span-4">
            <p className="font-cinzel text-[11px] tracking-[0.28em] text-brand-forest dark:text-brand-forest-light uppercase mb-6">
              ii.
            </p>
            <h2 className="font-cinzel text-3xl md:text-4xl font-normal text-brand-ink dark:text-brand-cream leading-tight tracking-tight">
              {philosophyTitle}
            </h2>
          </FadeIn>
          <FadeIn className="lg:col-span-7 lg:col-start-6">
            <div className="text-lg text-brand-ink-soft dark:text-brand-cream/85 leading-[1.7] font-light space-y-6">
              {philosophyParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
