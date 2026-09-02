"use client";

import FadeIn from "@/components/animations/FadeIn";

interface DoubletopsContent {
  data: {
    pageTitle?: string;
    pageDescription?: string;
    innovationSectionTitle?: string;
    innovationSectionContent?: string;
    benefitsSectionTitle?: string;
    benefits?: string[];
    [key: string]: unknown;
  };
  content: string;
}

interface DoubletopsContentProps {
  doubletopsContent: DoubletopsContent | null;
}

export default function DoubletopsContent({ doubletopsContent }: DoubletopsContentProps) {
  const pageTitle = doubletopsContent?.data?.pageTitle || "The Double Top";
  const pageDescription = doubletopsContent?.data?.pageDescription ||
    "A composite soundboard technique that has quietly reshaped the modern concert classical guitar.";

  const innovationTitle = doubletopsContent?.data?.innovationSectionTitle || "The Innovation";
  const innovationContent = doubletopsContent?.data?.innovationSectionContent ||
    "The double top construction technique represents a significant advancement in classical guitar building. By using a composite soundboard consisting of two thin plates with a Nomex honeycomb core, these guitars achieve remarkable volume and projection while maintaining the tonal qualities of traditional instruments.";

  const benefitsTitle = doubletopsContent?.data?.benefitsSectionTitle || "What It Delivers";
  const benefits = doubletopsContent?.data?.benefits || [
    "Enhanced volume and projection without sacrificing tone",
    "Improved sustain and note clarity across all registers",
    "Greater dynamic range for expressive playing",
    "Consistent response across the entire fingerboard",
    "Lighter weight compared to traditional construction",
  ];

  return (
    <div className="bg-brand-cream dark:bg-stone-950 pt-24 pb-24 lg:pt-32 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <FadeIn className="mb-20 lg:mb-28 max-w-3xl">
          <p className="font-cinzel text-[11px] tracking-[0.28em] text-brand-forest dark:text-brand-forest-light uppercase mb-6">
            Construction
          </p>
          <h1 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-normal text-brand-ink dark:text-brand-cream leading-[1.1] tracking-tight mb-8">
            {pageTitle}
          </h1>
          <div className="h-px w-16 bg-brand-walnut/60 dark:bg-brand-cream/30 mb-8" />
          <p className="text-lg text-brand-ink-soft dark:text-brand-cream/85 leading-[1.7] font-light">
            {pageDescription}
          </p>
        </FadeIn>

        {/* Innovation section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-24 lg:mb-32">
          <FadeIn className="lg:col-span-4">
            <p className="font-cinzel text-[11px] tracking-[0.28em] text-brand-forest dark:text-brand-forest-light uppercase mb-6">
              i.
            </p>
            <h2 className="font-cinzel text-3xl md:text-4xl font-normal text-brand-ink dark:text-brand-cream leading-tight tracking-tight">
              {innovationTitle}
            </h2>
          </FadeIn>
          <FadeIn className="lg:col-span-7 lg:col-start-6">
            <p className="text-lg text-brand-ink-soft dark:text-brand-cream/85 leading-[1.7] font-light">
              {innovationContent}
            </p>
          </FadeIn>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-24 lg:mb-32">
          <FadeIn className="lg:col-span-4">
            <p className="font-cinzel text-[11px] tracking-[0.28em] text-brand-forest dark:text-brand-forest-light uppercase mb-6">
              ii.
            </p>
            <h2 className="font-cinzel text-3xl md:text-4xl font-normal text-brand-ink dark:text-brand-cream leading-tight tracking-tight">
              {benefitsTitle}
            </h2>
          </FadeIn>
          <FadeIn className="lg:col-span-7 lg:col-start-6">
            <ol className="space-y-6">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex gap-6 pb-6 border-b border-brand-rule/50 last:border-b-0 last:pb-0">
                  <span className="font-cinzel text-[10px] tracking-[0.24em] text-brand-forest dark:text-brand-forest-light pt-1 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-brand-ink dark:text-brand-cream/90 leading-[1.7] font-light">
                    {benefit}
                  </span>
                </li>
              ))}
            </ol>
          </FadeIn>
        </div>

        {/* Construction Process */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <FadeIn className="lg:col-span-4">
            <p className="font-cinzel text-[11px] tracking-[0.28em] text-brand-forest dark:text-brand-forest-light uppercase mb-6">
              iii.
            </p>
            <h2 className="font-cinzel text-3xl md:text-4xl font-normal text-brand-ink dark:text-brand-cream leading-tight tracking-tight">
              The Process
            </h2>
          </FadeIn>
          <FadeIn className="lg:col-span-7 lg:col-start-6">
            <p className="text-lg text-brand-ink-soft dark:text-brand-cream/85 leading-[1.7] font-light">
              Each double top guitar begins with carefully selected tonewoods. The top plates
              are graduated to precise thicknesses, then laminated with the Nomex core using
              specialized techniques developed over years of refinement. This process requires
              exceptional skill and attention to detail to achieve the perfect balance of
              stiffness and flexibility.
            </p>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
