"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren, {
  StaggerItem,
} from "@/components/animations/StaggerChildren";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";

interface Guitar {
  slug: string;
  data: {
    title?: string;
    model?: string;
    year?: number;
    price?: string;
    mainImage?: string;
    description?: string;
    available?: boolean;
    featured?: boolean;
    isDoubletop?: boolean;
    specifications?: {
      topWood?: string;
      backSides?: string;
      neckWood?: string;
      fingerboard?: string;
      scaleLength?: string;
      nutWidth?: string;
      finish?: string;
    };
    [key: string]: unknown;
  };
  content: string;
}

interface DoubletopsContent {
  data: {
    pageTitle?: string;
    pageDescription?: string;
    [key: string]: unknown;
  };
  content: string;
}

interface DoubletopsContentProps {
  doubletopsContent: DoubletopsContent | null;
  guitars: Guitar[];
}

export default function DoubletopsContent({
  doubletopsContent,
  guitars,
}: DoubletopsContentProps) {
  const [selectedGuitar, setSelectedGuitar] = useState<Guitar | null>(null);

  // Filter for double top guitars
  const doubletopGuitars = guitars.filter(
    (guitar) =>
      guitar.data.isDoubletop ||
      guitar.data.title?.toLowerCase().includes("doubletop") ||
      guitar.data.title?.toLowerCase().includes("double top")
  );

  const benefits = [
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
            Double Top Guitars
          </motion.h1>
          <motion.p
            className="text-xl text-stone-600 dark:text-stone-300 max-w-3xl mx-auto"
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
              The Double Top Innovation
            </motion.h2>
            <motion.p
              className="text-stone-600 dark:text-stone-300 mb-4 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              The double top construction technique represents a significant
              advancement in classical guitar building. By using a composite
              soundboard consisting of two thin plates with a Nomex honeycomb
              core, these guitars achieve remarkable volume and projection while
              maintaining the tonal qualities of traditional instruments.
            </motion.p>

            <motion.h3
              className="text-2xl font-cinzel mt-8 mb-4 text-amber-600 dark:text-amber-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Benefits of Double Top Construction
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

        {/* Available Double Top Guitars */}
        {doubletopGuitars.length > 0 ? (
          <FadeIn>
            <motion.h2
              className="text-3xl font-cinzel font-bold text-center mb-8 text-amber-700 dark:text-amber-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Available Double Top Guitars
            </motion.h2>
            <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {doubletopGuitars.map((guitar) => (
                <StaggerItem key={guitar.slug}>
                  <motion.div
                    className="bg-white dark:bg-stone-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="aspect-[3/4] bg-stone-200 relative overflow-hidden">
                      <OptimizedImage
                        src={
                          guitar.data.mainImage ||
                          "/images/guitar-placeholder.jpg"
                        }
                        alt={guitar.data.title || "Guitar"}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-amber-600 dark:bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Double Top
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-cinzel font-semibold text-stone-900 dark:text-stone-100 mb-1">
                        {guitar.data.title}
                      </h3>
                      <p className="text-sm text-amber-600 dark:text-amber-400 mb-2">
                        {guitar.data.year}
                      </p>
                      <p className="text-xl font-bold text-stone-900 dark:text-stone-100 mb-2">
                        {guitar.data.price}
                      </p>
                      <p className="text-stone-600 dark:text-stone-300 text-sm mb-4 line-clamp-2">
                        {guitar.data.description}
                      </p>

                      <div className="flex gap-2">
                        <motion.button
                          className="flex-1 bg-amber-600 dark:bg-amber-500 text-white px-4 py-2.5 rounded-lg hover:bg-amber-700 dark:hover:bg-amber-600 transition-colors text-sm font-medium flex items-center justify-center"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ duration: 0.1 }}
                          onClick={() => {
                            const email = `mailto:glenncanin@hotmail.com?subject=Inquiry about ${guitar.data.title}&body=I'm interested in learning more about the ${guitar.data.title} double top guitar.`;
                            window.location.href = email;
                          }}
                        >
                          <ShoppingCart className="w-4 h-4 mr-1.5" />
                          Inquire
                        </motion.button>
                        <motion.button
                          className="px-4 py-2.5 border border-stone-300 dark:border-stone-600 text-stone-900 dark:text-stone-100 rounded-lg hover:bg-stone-50 dark:hover:bg-stone-700 transition-colors text-sm font-medium"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ duration: 0.1 }}
                          onClick={() => setSelectedGuitar(guitar)}
                        >
                          Details
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </FadeIn>
        ) : null}

        {/* Guitar Detail Modal */}
        {selectedGuitar && (
          <motion.div
            className="fixed inset-0 bg-black dark:bg-black bg-opacity-50 dark:bg-opacity-70 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedGuitar(null)}
          >
            <motion.div
              className="bg-white dark:bg-stone-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="font-cinzel text-2xl font-bold text-stone-900 dark:text-stone-100">
                      {selectedGuitar.data.title}
                    </h2>
                    <p className="text-amber-600 dark:text-amber-400 font-medium">
                      Double Top Construction
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedGuitar(null)}
                    className="text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 text-2xl p-2 hover:bg-stone-100 dark:hover:bg-stone-700 rounded-full transition-colors"
                  >
                    ✕
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative h-96 rounded-lg overflow-hidden">
                    <OptimizedImage
                      src={
                        selectedGuitar.data.mainImage ||
                        "/images/guitar-placeholder.jpg"
                      }
                      alt={selectedGuitar.data.title || "Guitar"}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>

                  <div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-lg mb-2 text-amber-700 dark:text-amber-400">
                          Price
                        </h3>
                        <p className="text-2xl font-bold text-stone-900 dark:text-stone-100">
                          {selectedGuitar.data.price}
                        </p>
                      </div>

                      {selectedGuitar.data.description && (
                        <div>
                          <h3 className="font-semibold text-lg mb-2 text-amber-700 dark:text-amber-400">
                            Description
                          </h3>
                          <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
                            {selectedGuitar.data.description}
                          </p>
                        </div>
                      )}

                      {selectedGuitar.data.specifications && (
                        <div>
                          <h3 className="font-semibold text-lg mb-2 text-amber-700 dark:text-amber-400">
                            Specifications
                          </h3>
                          <div className="space-y-2 text-sm">
                            {selectedGuitar.data.specifications.topWood && (
                              <div className="flex justify-between">
                                <span className="font-medium text-stone-700 dark:text-stone-300">
                                  Top:
                                </span>
                                <span className="text-stone-600 dark:text-stone-400">
                                  {selectedGuitar.data.specifications.topWood}
                                </span>
                              </div>
                            )}
                            {selectedGuitar.data.specifications.backSides && (
                              <div className="flex justify-between">
                                <span className="font-medium text-stone-700 dark:text-stone-300">
                                  Back & Sides:
                                </span>
                                <span className="text-stone-600 dark:text-stone-400">
                                  {selectedGuitar.data.specifications.backSides}
                                </span>
                              </div>
                            )}
                            {selectedGuitar.data.specifications.scaleLength && (
                              <div className="flex justify-between">
                                <span className="font-medium text-stone-700 dark:text-stone-300">
                                  Scale Length:
                                </span>
                                <span className="text-stone-600 dark:text-stone-400">
                                  {
                                    selectedGuitar.data.specifications
                                      .scaleLength
                                  }
                                </span>
                              </div>
                            )}
                            {selectedGuitar.data.specifications.nutWidth && (
                              <div className="flex justify-between">
                                <span className="font-medium text-stone-700 dark:text-stone-300">
                                  Nut Width:
                                </span>
                                <span className="text-stone-600 dark:text-stone-400">
                                  {selectedGuitar.data.specifications.nutWidth}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
