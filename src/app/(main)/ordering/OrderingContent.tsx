"use client";

import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";

interface Option {
  category: string;
  title: string;
  description: string;
  price: string;
  required: boolean;
}

interface PricingItem {
  label: string;
  value: string;
}

interface OrderingData {
  data: {
    title?: string;
    pageTitle?: string;
    pageDescription?: string;
    optionsTitle?: string;
    basePrice?: string;
    baseDescription?: string;
    options?: Option[];
    pricingItems?: PricingItem[];
    pricingNote?: string;
    includedFeaturesTitle?: string;
    includedFeatures?: string[];
    [key: string]: unknown;
  };
  content: string;
}

interface OrderingContentProps {
  orderingContent: OrderingData | null;
}

export default function OrderingContent({ orderingContent }: OrderingContentProps) {
  const title = orderingContent?.data?.pageTitle || orderingContent?.data?.title || "Commissions";
  const description = orderingContent?.data?.pageDescription || "Every guitar begins as a conversation. Here is how one takes shape.";
  const optionsTitle = orderingContent?.data?.optionsTitle || "Options & Upgrades";
  const basePrice = orderingContent?.data?.basePrice || "$14,000";
  const baseDescription = orderingContent?.data?.baseDescription ||
    "Includes balsa-core double top with cedar/cedar or spruce/cedar skins, Indian rosewood back and sides, elevated fingerboard, 20th fret, optional soundport, Barnett tuners, arched TKL case.";

  const defaultOptions: Option[] = [
    { category: "Scale Length", title: "650mm (Standard)", description: "Traditional classical guitar scale length", price: "Included", required: false },
    { category: "Scale Length", title: "640mm (Short Scale)", description: "Shorter scale length for easier playing", price: "Included", required: false },
    { category: "Scale Length", title: "665mm (Long Scale)", description: "Extended scale for increased tension and projection", price: "Included", required: false },
    { category: "Wood Upgrades", title: "40-year-old Madagascar Rosewood", description: "Premium aged Madagascar rosewood for back and sides", price: "+$3,000", required: false },
    { category: "Wood Upgrades", title: "Brazilian Rosewood", description: "Rare Brazilian rosewood for back and sides", price: "+$5,000", required: false },
    { category: "Hardware", title: "Alessi Tuners", description: "Premium tuning machines for superior stability", price: "+$500", required: false },
    { category: "Case", title: "Bam or Visesnut Case", description: "Upgrade to premium hardshell case", price: "+$500", required: false },
  ];
  const options = orderingContent?.data?.options || defaultOptions;

  const groupedOptions = options.reduce((groups, option) => {
    (groups[option.category] ??= []).push(option);
    return groups;
  }, {} as Record<string, Option[]>);

  const defaultPricingItems: PricingItem[] = [
    { label: "Waitlist", value: "Contact for current wait time" },
    { label: "Deposit", value: "$500" },
    { label: "Balance", value: "Due upon completion" },
  ];
  const pricingItems = orderingContent?.data?.pricingItems || defaultPricingItems;
  const pricingNote = orderingContent?.data?.pricingNote ||
    "Please call or email to be added to the waitlist. Final pricing varies with wood selection and optional upgrades.";

  const defaultIncludedFeatures = [
    "Balsa-core double top construction",
    "Cedar or spruce soundboard options",
    "Indian rosewood back and sides (standard)",
    "Elevated fingerboard with 20th-fret access",
    "Optional soundport",
    "Barnett tuning machines (standard)",
    "Arched TKL case",
  ];
  const includedFeatures = orderingContent?.data?.includedFeatures || defaultIncludedFeatures;
  const includedFeaturesTitle = orderingContent?.data?.includedFeaturesTitle || "What's Included";

  return (
    <div className="bg-brand-cream dark:bg-stone-950 pt-24 pb-24 lg:pt-32 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <FadeIn className="mb-20 lg:mb-28 max-w-3xl">
          <p className="font-cinzel text-[11px] tracking-[0.28em] text-brand-forest dark:text-brand-forest-light uppercase mb-6">
            Commissions
          </p>
          <h1 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-normal text-brand-ink dark:text-brand-cream leading-[1.1] tracking-tight mb-8">
            {title}
          </h1>
          <div className="h-px w-16 bg-brand-walnut/60 dark:bg-brand-cream/30 mb-8" />
          <p className="text-lg text-brand-ink-soft dark:text-brand-cream/85 leading-[1.7] font-light">
            {description}
          </p>
        </FadeIn>

        {/* Base Price */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-24 lg:mb-32 items-baseline">
          <FadeIn className="lg:col-span-4">
            <p className="font-cinzel text-[11px] tracking-[0.28em] text-brand-forest dark:text-brand-forest-light uppercase mb-6">
              i. Base Price
            </p>
            <p className="font-cinzel text-5xl md:text-6xl font-normal text-brand-ink dark:text-brand-cream leading-none">
              {basePrice}
            </p>
          </FadeIn>
          <FadeIn className="lg:col-span-7 lg:col-start-6">
            <p className="text-lg text-brand-ink-soft dark:text-brand-cream/85 leading-[1.7] font-light">
              {baseDescription}
            </p>
          </FadeIn>
        </div>

        {/* What's Included */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-24 lg:mb-32">
          <FadeIn className="lg:col-span-4">
            <p className="font-cinzel text-[11px] tracking-[0.28em] text-brand-forest dark:text-brand-forest-light uppercase mb-6">
              ii.
            </p>
            <h2 className="font-cinzel text-3xl md:text-4xl font-normal text-brand-ink dark:text-brand-cream leading-tight tracking-tight">
              {includedFeaturesTitle}
            </h2>
          </FadeIn>
          <FadeIn className="lg:col-span-7 lg:col-start-6">
            <ul className="space-y-4">
              {includedFeatures.map((item, i) => (
                <li key={i} className="flex gap-4 pb-4 border-b border-brand-rule/50 last:border-b-0">
                  <span className="font-cinzel text-[10px] tracking-[0.24em] text-brand-forest dark:text-brand-forest-light pt-1 tabular-nums w-8 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-brand-ink dark:text-brand-cream/90 leading-[1.7] font-light">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        {/* Options */}
        <div className="mb-24 lg:mb-32">
          <FadeIn className="mb-12 lg:mb-16">
            <p className="font-cinzel text-[11px] tracking-[0.28em] text-brand-forest dark:text-brand-forest-light uppercase mb-6">
              iii.
            </p>
            <h2 className="font-cinzel text-3xl md:text-4xl font-normal text-brand-ink dark:text-brand-cream leading-tight tracking-tight">
              {optionsTitle}
            </h2>
          </FadeIn>

          <div className="space-y-16">
            {Object.entries(groupedOptions).map(([category, categoryOptions]) => (
              <FadeIn key={category}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                  <div className="lg:col-span-3">
                    <p className="font-cinzel text-[11px] tracking-[0.24em] uppercase text-brand-walnut dark:text-brand-walnut-light">
                      {category}
                    </p>
                  </div>
                  <div className="lg:col-span-9">
                    <StaggerChildren className="space-y-4">
                      {categoryOptions.map((option, i) => (
                        <StaggerItem key={i}>
                          <div className="flex justify-between items-baseline gap-6 py-4 border-b border-brand-rule/50">
                            <div className="flex-1">
                              <h3 className="font-cinzel text-lg text-brand-ink dark:text-brand-cream mb-1">
                                {option.title}
                              </h3>
                              <p className="text-sm text-brand-ink-soft dark:text-brand-cream/70 leading-relaxed">
                                {option.description}
                              </p>
                            </div>
                            <span className={`font-cinzel text-sm tabular-nums whitespace-nowrap ${
                              option.price === "Included"
                                ? "text-brand-forest dark:text-brand-forest-light"
                                : "text-brand-walnut dark:text-brand-walnut-light"
                            }`}>
                              {option.price}
                            </span>
                          </div>
                        </StaggerItem>
                      ))}
                    </StaggerChildren>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Pricing & Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-24 lg:mb-32">
          <FadeIn className="lg:col-span-4">
            <p className="font-cinzel text-[11px] tracking-[0.28em] text-brand-forest dark:text-brand-forest-light uppercase mb-6">
              iv.
            </p>
            <h2 className="font-cinzel text-3xl md:text-4xl font-normal text-brand-ink dark:text-brand-cream leading-tight tracking-tight">
              Pricing & Timeline
            </h2>
          </FadeIn>
          <FadeIn className="lg:col-span-7 lg:col-start-6">
            <dl className="space-y-4 mb-8">
              {pricingItems.map((item, i) => (
                <div key={i} className="flex justify-between items-baseline gap-6 py-4 border-b border-brand-rule/50">
                  <dt className="font-cinzel text-[11px] tracking-[0.24em] uppercase text-brand-forest dark:text-brand-forest-light">
                    {item.label}
                  </dt>
                  <dd className="text-brand-ink dark:text-brand-cream font-cinzel text-lg">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="text-sm text-brand-ink-soft dark:text-brand-cream/70 italic leading-relaxed">
              {pricingNote}
            </p>
          </FadeIn>
        </div>

        {/* CTA */}
        <FadeIn className="mt-24 pt-16 border-t border-brand-rule/50">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5">
              <p className="font-cinzel text-[11px] tracking-[0.28em] text-brand-forest dark:text-brand-forest-light uppercase mb-6">
                Get In Touch
              </p>
              <h2 className="font-cinzel text-3xl md:text-4xl font-normal text-brand-ink dark:text-brand-cream leading-tight tracking-tight">
                Ready to begin?
              </h2>
            </div>
            <div className="lg:col-span-7 flex flex-col justify-between">
              <p className="text-lg text-brand-ink-soft dark:text-brand-cream/85 leading-[1.7] font-light mb-8">
                Get in touch to start the conversation about your commission.
              </p>
              <a
                href="/contact"
                className="group inline-flex items-center gap-3 border-b border-brand-ink dark:border-brand-cream pb-1 font-cinzel text-[11px] tracking-[0.28em] uppercase text-brand-ink dark:text-brand-cream hover:text-brand-forest dark:hover:text-brand-forest-light hover:border-brand-forest dark:hover:border-brand-forest-light transition-colors self-start"
              >
                Contact Glenn
                <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
