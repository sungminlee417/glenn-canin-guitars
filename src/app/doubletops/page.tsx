"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren, {
  StaggerItem,
} from "@/components/animations/StaggerChildren";

export default function DoubletopsPage() {
  const benefits = [
    "Enhanced volume and projection without sacrificing tone quality",
    "Improved sustain and note clarity across all registers",
    "Greater dynamic range for expressive playing",
    "Consistent response across the entire fingerboard",
    "Lighter weight compared to traditional construction",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/images/wood-grain-pattern.svg')] opacity-5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <FadeIn className="text-center mb-16">
          <motion.h1
            className="text-5xl font-cinzel font-bold text-stone-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Double Top Guitars
          </motion.h1>
          <motion.p
            className="text-xl text-stone-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Glenn Canin&apos;s signature double top construction combines
            traditional craftsmanship with innovative design, resulting in
            guitars with exceptional projection and tonal clarity.
          </motion.p>
        </FadeIn>

        <div className="mb-16 prose prose-stone max-w-none">
          <motion.div
            className="bg-white rounded-lg shadow-sm p-8 border border-amber-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.01 }}
          >
            <motion.h2
              className="text-3xl font-cinzel mb-6 text-amber-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              The Double Top Innovation
            </motion.h2>
            <motion.p
              className="text-stone-600 mb-4 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              The double top construction technique represents a significant
              advancement in classical guitar building. By using a composite
              soundboard consisting of two thin plates with a Nomex honeycomb
              core, these guitars achieve remarkable volume and projection while
              maintaining the tonal qualities of traditional instruments.
            </motion.p>

            <motion.h3
              className="text-2xl font-cinzel mt-8 mb-4 text-amber-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Benefits of Double Top Construction
            </motion.h3>

            <StaggerChildren className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="flex items-center space-x-3 text-stone-600"
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
              className="text-2xl font-cinzel mt-8 mb-4 text-amber-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Construction Process
            </motion.h3>
            <motion.p
              className="text-stone-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
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

        <FadeIn>
          <motion.div
            className="text-center py-12 bg-amber-50 rounded-lg border border-amber-200"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="flex justify-center mb-6"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <svg
                className="w-16 h-16 text-amber-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM21 16c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM7 9l12-3"
                />
              </svg>
            </motion.div>
            <motion.p
              className="text-stone-600 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Double top guitars will be displayed here once added through the
              CMS.
            </motion.p>
            <motion.p
              className="text-stone-500 text-sm mt-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Visit our Gallery to see current available instruments.
            </motion.p>
          </motion.div>
        </FadeIn>
      </div>
    </div>
  );
}
