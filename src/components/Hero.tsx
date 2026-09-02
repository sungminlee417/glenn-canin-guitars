'use client';

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";

interface HomeContent {
  data: {
    heroTitle?: string;
    heroSubtitle?: string;
    heroImage?: string;
    [key: string]: unknown;
  };
  content: string;
}

interface HeroProps {
  homeContent: HomeContent | null;
}

export default function Hero({ homeContent }: HeroProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const reduce = useReducedMotion();
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["0%", "20%"]);

  const title = homeContent?.data?.heroTitle || "Glenn Canin Guitars";
  const subtitle = homeContent?.data?.heroSubtitle || "Handcrafted classical instruments";
  const heroImage = homeContent?.data?.heroImage;

  return (
    <section
      ref={ref}
      className="relative min-h-screen -mt-16 pt-16 bg-brand-cream dark:bg-stone-950 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12 pt-16 lg:pt-24 pb-16 lg:pb-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center min-h-[calc(100vh-4rem)]">
        {/* Left: type stack */}
        <motion.div
          className="lg:col-span-5 relative z-10"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-cinzel text-[11px] tracking-[0.28em] text-brand-forest dark:text-brand-forest-light uppercase mb-6 lg:mb-8">
            Mill Valley, California · Est. 1985
          </p>
          <h1 className="font-cinzel font-normal text-brand-ink dark:text-brand-cream leading-[1.05] text-[clamp(2.5rem,6vw,4.5rem)] tracking-tight mb-8">
            {title}
          </h1>
          <div className="h-px w-16 bg-brand-walnut/60 dark:bg-brand-cream/30 mb-8" />
          <p className="text-lg lg:text-xl text-brand-ink-soft dark:text-brand-cream/80 leading-relaxed max-w-md">
            {subtitle}
          </p>
        </motion.div>

        {/* Right: image plate — full-bleed on mobile, framed on desktop */}
        <motion.div
          className="lg:col-span-7"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.1 }}
        >
          <motion.div className="relative" style={{ y }}>
            <div className="relative aspect-[4/5] lg:aspect-[3/4] w-full overflow-hidden">
              {heroImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={heroImage}
                  alt="Handcrafted classical guitar by Glenn Canin"
                  className="w-full h-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-brand-walnut/40 via-brand-walnut/20 to-brand-cream-deep" />
              )}
            </div>
            {/* Corner rule — subtle craft detail, moves with the image */}
            <div className="hidden lg:block absolute -bottom-4 -right-4 w-24 h-24 border-r border-b border-brand-walnut/40 dark:border-brand-cream/20 pointer-events-none" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
