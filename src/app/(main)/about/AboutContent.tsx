"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import FadeIn from "@/components/animations/FadeIn";

interface AboutData {
  data: {
    title?: string;
    heroImage?: string;
    journeyTitle?: string;
    journeyContent?: string;
    philosophyTitle?: string;
    philosophyContent?: string;
    sections?: Array<{
      title: string;
      content: string;
      image?: string;
    }>;
    [key: string]: unknown;
  };
  content: string;
}

interface AboutContentProps {
  aboutContent: AboutData | null;
}

export default function AboutContent({ aboutContent }: AboutContentProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  // Fallback data
  const title = aboutContent?.data?.title || "About Glenn Canin";
  const journeyTitle = aboutContent?.data?.journeyTitle || "My Journey";
  const philosophyTitle = aboutContent?.data?.philosophyTitle || "Philosophy";

  // Parse journey content into paragraphs
  const journeyParagraphs = aboutContent?.data?.journeyContent
    ? aboutContent.data.journeyContent.split("\n\n").filter((p) => p.trim())
    : [
        "I began my journey as a luthier in 1985, driven by a passion for creating instruments that could truly sing. Over nearly four decades, I have refined my craft, studying under master builders and developing my own innovations in classical guitar construction.",
        "My workshop has produced over 150 instruments, each one carefully crafted to meet the unique needs and preferences of professional musicians worldwide. From concert halls in Europe to recording studios in America, my guitars have found homes with artists who demand the very best.",
      ];

  // Parse philosophy content into paragraphs
  const philosophyParagraphs = aboutContent?.data?.philosophyContent
    ? aboutContent.data.philosophyContent.split("\n\n").filter((p) => p.trim())
    : [
        "I believe that a great guitar is more than just wood and strings – it's a partner in musical expression. Every instrument I build is designed to inspire, to respond to the subtlest touch, and to project with clarity and power.",
        "My approach combines traditional Spanish guitar-making techniques with modern innovations like the doubletop construction, which provides exceptional volume and sustain while maintaining the warmth and complexity of tone that classical guitarists cherish.",
      ];

  return (
    <div className="py-16 bg-gradient-to-b from-stone-50 to-white dark:from-stone-800 dark:to-stone-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/images/wood-texture.svg')] opacity-5" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12">
          <motion.h1
            className="font-cinzel text-4xl md:text-5xl font-bold text-stone-900 dark:text-stone-100 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h1>
        </FadeIn>

        <div className="prose prose-lg max-w-none">
          <div
            ref={ref}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12"
          >
            <FadeIn>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-cinzel text-2xl font-semibold mb-4 text-amber-700 dark:text-amber-400">
                  {journeyTitle}
                </h2>
                {journeyParagraphs.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    className="text-stone-600 dark:text-stone-300 mb-4 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </motion.div>
            </FadeIn>

            <motion.div
              className="relative h-96 rounded-lg overflow-hidden group"
              style={{ y: imageY }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {aboutContent?.data?.heroImage ? (
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${aboutContent.data.heroImage})`,
                  }}
                />
              ) : (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-amber-200 via-amber-300 to-amber-500"
                  whileInView={{
                    background: [
                      "linear-gradient(135deg, #fde68a, #f59e0b, #d97706)",
                      "linear-gradient(135deg, #fed7aa, #fb923c, #ea580c)",
                      "linear-gradient(135deg, #fde68a, #f59e0b, #d97706)",
                    ],
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 8, repeat: Infinity }}
                />
              )}

              {!aboutContent?.data?.heroImage && (
                <>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="text-amber-700"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
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
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 2, delay: 0.5 }}
                        />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Floating elements */}
                  <motion.div
                    className="absolute top-4 right-4 w-3 h-3 bg-amber-400 rounded-full"
                    whileInView={{ y: [0, -10, 0] }}
                    viewport={{ once: true }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  />
                  <motion.div
                    className="absolute bottom-8 left-6 w-2 h-2 bg-amber-500 rounded-full"
                    whileInView={{ y: [0, -8, 0] }}
                    viewport={{ once: true }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                  />
                </>
              )}
            </motion.div>
          </div>

          <FadeIn className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-cinzel text-2xl font-semibold mb-4 text-amber-700 dark:text-amber-400">
                {philosophyTitle}
              </h2>
              {philosophyParagraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="text-stone-600 dark:text-stone-300 mb-4 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>
          </FadeIn>

        </div>
      </div>
    </div>
  );
}
