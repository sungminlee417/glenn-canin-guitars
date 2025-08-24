'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Info, X } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";
import OptimizedImage from "@/components/ui/OptimizedImage";

interface Guitar {
  title?: string;
  year?: number;
  price?: string;
  mainImage?: string;
  description?: string;
  specifications?: {
    topWood?: string;
    backSides?: string;
    neckWood?: string;
    fingerboard?: string;
    scaleLength?: string;
    nutWidth?: string;
    finish?: string;
  };
}

interface ForSaleContent {
  pageTitle?: string;
  pageDescription?: string;
  availabilityNoticeTitle?: string;
  availabilityNoticeText?: string;
  availableInstrumentsTitle?: string;
  guitars?: Guitar[];
  inquireButtonText?: string;
  [key: string]: unknown;
}

interface ForSaleContentProps {
  forSaleContent: ForSaleContent | null;
}

export default function ForSaleContent({ forSaleContent }: ForSaleContentProps) {
  const [selectedGuitar, setSelectedGuitar] = useState<Guitar | null>(null);
  
  // Extract data from CMS with fallbacks
  const pageTitle = forSaleContent?.pageTitle || "Guitars For Sale";
  const pageDescription = forSaleContent?.pageDescription || "Explore our collection of available guitars. Each instrument is meticulously crafted and ready to inspire your musical journey.";
  const availabilityNoticeTitle = forSaleContent?.availabilityNoticeTitle || "Availability Notice";
  const availabilityNoticeText = forSaleContent?.availabilityNoticeText || "All guitars shown are currently available. Instruments are sold on a first-come, first-served basis. Contact us to arrange a trial or to discuss purchase details.";
  const availableInstrumentsTitle = forSaleContent?.availableInstrumentsTitle || "Available Instruments";
  const inquireButtonText = forSaleContent?.inquireButtonText || "Inquire About This Guitar";
  const guitars = forSaleContent?.guitars || [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white dark:from-stone-800 dark:to-stone-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/images/wood-texture.svg')] opacity-5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <FadeIn className="text-center mb-16">
          <h1 className="text-5xl font-cinzel font-bold text-stone-900 dark:text-stone-100 mb-6">
            {pageTitle}
          </h1>
          <p className="text-xl text-stone-600 dark:text-stone-300 max-w-3xl mx-auto">
            {pageDescription}
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="mb-8 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-600 rounded-lg p-6">
          <div className="flex items-start">
            <Info className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 mr-3 flex-shrink-0" />
            <div className="text-sm text-amber-800 dark:text-amber-200">
              <p className="font-semibold mb-1">{availabilityNoticeTitle}</p>
              <p>{availabilityNoticeText}</p>
            </div>
          </div>
        </FadeIn>

        {/* Available Guitars */}
        {guitars.length > 0 ? (
          <>
            <h2 className="text-3xl font-cinzel font-bold text-stone-900 dark:text-stone-100 mb-8 text-center">{availableInstrumentsTitle}</h2>
            <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {guitars.map((guitar, index) => (
                <GuitarCard
                  key={index}
                  guitar={guitar}
                  onClick={() => setSelectedGuitar(guitar)}
                />
              ))}
            </StaggerChildren>
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-stone-600 dark:text-stone-400 text-lg">
              No guitars are currently available. Please check back soon or contact us for upcoming instruments.
            </p>
          </div>
        )}

        {/* Modal */}
        <AnimatePresence>
          {selectedGuitar && (
            <motion.div 
              className="fixed inset-0 bg-black dark:bg-black bg-opacity-50 dark:bg-opacity-70 z-50 flex items-center justify-center p-4" 
              onClick={() => setSelectedGuitar(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="bg-white dark:bg-stone-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto" 
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="font-cinzel text-2xl font-bold text-stone-900 dark:text-stone-100">
                        {selectedGuitar.title}
                      </h2>
                    </div>
                    <button
                      onClick={() => setSelectedGuitar(null)}
                      className="text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 text-2xl p-2 hover:bg-stone-100 dark:hover:bg-stone-700 rounded-full transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative h-96 rounded-lg overflow-hidden">
                      <OptimizedImage
                        src={selectedGuitar.mainImage || "/images/guitar-placeholder.jpg"}
                        alt={selectedGuitar.title || "Guitar"}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>
                    
                    <div className="space-y-4">
                      {selectedGuitar.price && (
                        <div>
                          <h3 className="font-semibold text-lg mb-2 text-amber-700 dark:text-amber-400">Price</h3>
                          <p className="text-2xl font-bold text-stone-900 dark:text-stone-100">{selectedGuitar.price}</p>
                        </div>
                      )}
                      
                      {selectedGuitar.year && (
                        <div>
                          <h3 className="font-semibold text-lg mb-2 text-amber-700 dark:text-amber-400">Year</h3>
                          <p className="text-stone-600 dark:text-stone-300">{selectedGuitar.year}</p>
                        </div>
                      )}
                      
                      {selectedGuitar.description && (
                        <div>
                          <h3 className="font-semibold text-lg mb-2 text-amber-700 dark:text-amber-400">Description</h3>
                          <p className="text-stone-600 dark:text-stone-300 leading-relaxed">{selectedGuitar.description}</p>
                        </div>
                      )}
                      
                      {selectedGuitar.specifications && (
                        <div>
                          <h3 className="font-semibold text-lg mb-2 text-amber-700 dark:text-amber-400">Specifications</h3>
                          <div className="grid grid-cols-2 gap-3 text-sm">
                            {Object.entries(selectedGuitar.specifications).map(([key, value]) => (
                              value && (
                                <div key={key}>
                                  <span className="font-medium text-stone-700 dark:text-stone-300 capitalize">
                                    {key.replace(/([A-Z])/g, ' $1').trim()}:
                                  </span>
                                  <br />
                                  <span className="text-stone-600 dark:text-stone-400">{value}</span>
                                </div>
                              )
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-stone-200 dark:border-stone-600 text-center">
                    <a
                      href="/contact"
                      className="inline-block bg-amber-600 dark:bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 dark:hover:bg-amber-600 transition-colors"
                    >
                      {inquireButtonText}
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

interface GuitarCardProps {
  guitar: Guitar;
  onClick: () => void;
}

function GuitarCard({ guitar, onClick }: GuitarCardProps) {
  return (
    <StaggerItem>
      <motion.div
        className="group bg-white dark:bg-stone-800 rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
        onClick={onClick}
        whileHover={{ y: -8, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative h-64 overflow-hidden">
          <OptimizedImage
            src={guitar.mainImage || "/images/guitar-placeholder.jpg"}
            alt={guitar.title || "Guitar"}
            className="w-full h-full object-cover"
          />
          
          
          {/* Price badge */}
          {guitar.price && (
            <div className="absolute top-4 left-4 bg-stone-900 dark:bg-stone-700 text-white px-3 py-2 rounded-lg font-bold">
              {guitar.price}
            </div>
          )}
          
          {/* Overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4 text-white">
              <span className="text-sm font-medium">Click to view details</span>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="font-cinzel text-xl font-semibold text-stone-900 dark:text-stone-100 mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
            {guitar.title}
          </h3>
          {guitar.year && (
            <p className="text-sm text-stone-500 dark:text-stone-400 mb-3">
              {guitar.year}
            </p>
          )}
          <p className="text-sm text-stone-600 dark:text-stone-300 line-clamp-2">{guitar.description}</p>
        </div>
      </motion.div>
    </StaggerItem>
  );
}