"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import FadeIn from "@/components/animations/FadeIn";

interface HomeContent {
  data: {
    aboutPreview?: string;
    [key: string]: unknown;
  };
  content: string;
}

interface AboutPreviewProps {
  homeContent: HomeContent | null;
}

export default function AboutPreview({ homeContent }: AboutPreviewProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={ref}
      className="py-16 bg-gradient-to-b from-white to-stone-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/images/wood-pattern.svg')] opacity-5" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div style={{ y: textY }}>
            <FadeIn>
              <motion.h2
                className="font-cinzel text-3xl md:text-4xl font-bold text-stone-900 mb-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 0.6 }}
              >
                Master Luthier Since 1985
              </motion.h2>
            </FadeIn>

            <motion.div
              className="space-y-4 text-stone-600 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {homeContent?.data?.aboutPreview ? (
                <motion.div
                  className="prose prose-stone max-w-none"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px" }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  dangerouslySetInnerHTML={{ 
                    __html: homeContent.data.aboutPreview.replace(/\n/g, '<br />') 
                  }}
                />
              ) : (
                <>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "0px" }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    For nearly four decades, I have dedicated myself to the art of
                    crafting exceptional classical guitars. Each instrument
                    represents a perfect balance between traditional Spanish
                    guitar-making techniques and innovative modern approaches.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "0px" }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    My doubletop guitars are renowned for their powerful projection,
                    rich tonal palette, and exceptional playability. Using carefully
                    selected tonewoods and meticulous attention to detail, every
                    guitar is built to inspire musicians and enhance their artistic
                    expression.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "0px" }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    From my workshop in the heart of the countryside, I work closely
                    with professional musicians worldwide to create instruments that
                    meet their exacting standards and help them achieve their
                    musical goals.
                  </motion.p>
                </>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ x: 10 }}
              className="mt-6"
            >
              <Link
                href="/about"
                className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium transition-colors group"
              >
                Learn More About My Craft
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative h-96 lg:h-full min-h-[400px] rounded-lg overflow-hidden group"
            style={{ y: imageY }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Gradient background with animation */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-amber-200 via-amber-300 to-amber-500"
              animate={{
                background: [
                  "linear-gradient(135deg, #fde68a, #f59e0b, #d97706)",
                  "linear-gradient(135deg, #fed7aa, #fb923c, #ea580c)",
                  "linear-gradient(135deg, #fde68a, #f59e0b, #d97706)",
                ],
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />

            {/* Decorative overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent" />

            {/* Workshop icon with animation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="text-amber-700"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <svg
                  className="w-32 h-32"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true, margin: "0px" }}
                    transition={{ duration: 2, delay: 0.5 }}
                  />
                </svg>
              </motion.div>
            </div>

            {/* Floating elements */}
            <motion.div
              className="absolute top-4 right-4 w-3 h-3 bg-amber-400 rounded-full"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div
              className="absolute bottom-8 left-6 w-2 h-2 bg-amber-500 rounded-full"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
            />
            <motion.div
              className="absolute top-12 left-8 w-1.5 h-1.5 bg-amber-300 rounded-full"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
