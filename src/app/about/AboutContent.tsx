"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren, {
  StaggerItem,
} from "@/components/animations/StaggerChildren";

interface AboutData {
  data: {
    title?: string;
    heroImage?: string;
    journeyTitle?: string;
    journeyContent?: string;
    philosophyTitle?: string;
    philosophyContent?: string;
    achievementsTitle?: string;
    achievements?: string[];
    sections?: Array<{
      title: string;
      content: string;
      image?: string;
    }>;
    [key: string]: any;
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
  const defaultAchievements = [
    "Featured in Classical Guitar Magazine",
    "Instruments played by international competition winners",
    "Selected for major guitar exhibitions worldwide",
    "Endorsed by leading classical guitarists",
  ];

  const achievements = aboutContent?.data?.achievements || defaultAchievements;
  const title = aboutContent?.data?.title || "About Glenn Canin";
  const journeyTitle = aboutContent?.data?.journeyTitle || "My Journey";
  const philosophyTitle = aboutContent?.data?.philosophyTitle || "Philosophy";
  const achievementsTitle = aboutContent?.data?.achievementsTitle || "Awards & Recognition";

  // Parse journey content into paragraphs
  const journeyParagraphs = aboutContent?.data?.journeyContent 
    ? aboutContent.data.journeyContent.split('\n\n').filter(p => p.trim())
    : [
        "I began my journey as a luthier in 1985, driven by a passion for creating instruments that could truly sing. Over nearly four decades, I have refined my craft, studying under master builders and developing my own innovations in classical guitar construction.",
        "My workshop has produced over 150 instruments, each one carefully crafted to meet the unique needs and preferences of professional musicians worldwide. From concert halls in Europe to recording studios in America, my guitars have found homes with artists who demand the very best."
      ];

  // Parse philosophy content into paragraphs
  const philosophyParagraphs = aboutContent?.data?.philosophyContent
    ? aboutContent.data.philosophyContent.split('\n\n').filter(p => p.trim())
    : [
        "I believe that a great guitar is more than just wood and strings – it's a partner in musical expression. Every instrument I build is designed to inspire, to respond to the subtlest touch, and to project with clarity and power.",
        "My approach combines traditional Spanish guitar-making techniques with modern innovations like the doubletop construction, which provides exceptional volume and sustain while maintaining the warmth and complexity of tone that classical guitarists cherish."
      ];

  return (
    <div className="py-16 bg-gradient-to-b from-stone-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/images/wood-texture.svg')] opacity-5" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12">
          <motion.h1
            className="font-cinzel text-4xl md:text-5xl font-bold text-stone-900 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
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
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-cinzel text-2xl font-semibold mb-4 text-amber-700">
                  {journeyTitle}
                </h2>
                {journeyParagraphs.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    className="text-stone-600 mb-4 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
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
                  style={{ backgroundImage: `url(${aboutContent.data.heroImage})` }}
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
                          transition={{ duration: 2, delay: 0.5 }}
                        />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Floating elements */}
                  <motion.div
                    className="absolute top-4 right-4 w-3 h-3 bg-amber-400 rounded-full"
                    whileInView={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  />
                  <motion.div
                    className="absolute bottom-8 left-6 w-2 h-2 bg-amber-500 rounded-full"
                    whileInView={{ y: [0, -8, 0] }}
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
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-cinzel text-2xl font-semibold mb-4 text-amber-700">
                {philosophyTitle}
              </h2>
              {philosophyParagraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="text-stone-600 mb-4 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>
          </FadeIn>

          <motion.div
            className="bg-gradient-to-br from-stone-100 to-amber-50 p-8 rounded-lg border border-amber-200 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[url('/images/musical-notes.svg')] opacity-5" />

            <div className="relative">
              <motion.h2
                className="font-cinzel text-2xl font-semibold mb-6 text-amber-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {achievementsTitle}
              </motion.h2>

              <StaggerChildren className="space-y-3">
                {achievements.map((achievement, index) => (
                  <StaggerItem key={index}>
                    <motion.div
                      className="flex items-center space-x-3 text-stone-700"
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        className="w-2 h-2 bg-amber-500 rounded-full"
                        whileInView={{ scale: [1, 1.2, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3,
                        }}
                      />
                      <span className="leading-relaxed">{achievement}</span>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}