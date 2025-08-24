"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren, {
  StaggerItem,
} from "@/components/animations/StaggerChildren";


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

export default function DoubletopsContent({
  doubletopsContent,
}: DoubletopsContentProps) {

  // Use CMS benefits or fallback to default
  const benefits = doubletopsContent?.data?.benefits || [
    "Enhanced volume and projection without sacrificing tone quality",
    "Improved sustain and note clarity across all registers",
    "Greater dynamic range for expressive playing",
    "Consistent response across the entire fingerboard",
    "Lighter weight compared to traditional construction",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white dark:from-stone-800 dark:to-stone-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/images/wood-grain-pattern.svg')] opacity-5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <FadeIn className="text-center mb-16">
          <motion.h1
            className="text-5xl font-cinzel font-bold text-stone-900 dark:text-stone-100 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {doubletopsContent?.data?.pageTitle || "Double Top Guitars"}
          </motion.h1>
          <motion.p
            className="text-xl text-stone-600 dark:text-stone-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {doubletopsContent?.data?.pageDescription ||
              "Glenn Canin's signature double top construction combines traditional craftsmanship with innovative design, resulting in guitars with exceptional projection and tonal clarity."}
          </motion.p>
        </FadeIn>

        <div className="mb-16 prose prose-stone max-w-none">
          <motion.div
            className="bg-white dark:bg-stone-800 rounded-lg shadow-sm p-8 border border-amber-100 dark:border-amber-600"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.01 }}
          >
            <motion.h2
              className="text-3xl font-cinzel mb-6 text-amber-700 dark:text-amber-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {doubletopsContent?.data?.innovationSectionTitle ||
                "The Double Top Innovation"}
            </motion.h2>
            <motion.p
              className="text-stone-600 dark:text-stone-300 mb-4 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {doubletopsContent?.data?.innovationSectionContent ||
                "The double top construction technique represents a significant advancement in classical guitar building. By using a composite soundboard consisting of two thin plates with a Nomex honeycomb core, these guitars achieve remarkable volume and projection while maintaining the tonal qualities of traditional instruments."}
            </motion.p>

            <motion.h3
              className="text-2xl font-cinzel mt-8 mb-4 text-amber-600 dark:text-amber-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {doubletopsContent?.data?.benefitsSectionTitle ||
                "Benefits of Double Top Construction"}
            </motion.h3>

            <StaggerChildren className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="flex items-center space-x-3 text-stone-600 dark:text-stone-300"
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-amber-500 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    />
                    <span className="leading-relaxed">{benefit}</span>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerChildren>

            <motion.h3
              className="text-2xl font-cinzel mt-8 mb-4 text-amber-600 dark:text-amber-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Construction Process
            </motion.h3>
            <motion.p
              className="text-stone-600 dark:text-stone-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Each double top guitar begins with carefully selected tonewoods.
              The top plates are graduated to precise thicknesses, then
              laminated with the Nomex core using specialized techniques
              developed over years of refinement. This process requires
              exceptional skill and attention to detail to achieve the perfect
              balance of stiffness and flexibility.
            </motion.p>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
