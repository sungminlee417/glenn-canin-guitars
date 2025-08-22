'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Info, X } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";
import OptimizedImage from "@/components/ui/OptimizedImage";

interface Guitar {
  slug: string;
  data: {
    title?: string;
    model?: string;
    year?: number;
    price?: string;
    mainImage?: string;
    description?: string;
    featured?: boolean;
    available?: boolean;
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

interface ForSaleContent {
  data: {
    pageTitle?: string;
    pageDescription?: string;
    [key: string]: unknown;
  };
  content: string;
}

interface ForSaleContentProps {
  forSaleContent: ForSaleContent | null;
  guitars: Guitar[];
}

export default function ForSaleContent({ guitars }: ForSaleContentProps) {
  // Note: forSaleContent parameter temporarily unused until CMS integration is complete
  const [selectedGuitar, setSelectedGuitar] = useState<Guitar | null>(null);
  
  const featuredGuitars = guitars.filter(guitar => guitar.data.featured);
  const regularGuitars = guitars.filter(guitar => !guitar.data.featured);
  
  const displayFeatured = featuredGuitars;
  const displayRegular = regularGuitars;

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white dark:from-stone-800 dark:to-stone-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/images/wood-texture.svg')] opacity-5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <FadeIn className="text-center mb-16">
          <h1 className="text-5xl font-cinzel font-bold text-stone-900 dark:text-stone-100 mb-6">
            Guitars For Sale
          </h1>
          <p className="text-xl text-stone-600 dark:text-stone-300 max-w-3xl mx-auto">
            Explore our collection of available guitars. Each instrument is meticulously 
            crafted and ready to inspire your musical journey.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="mb-8 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-600 rounded-lg p-6">
          <div className="flex items-start">
            <Info className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 mr-3 flex-shrink-0" />
            <div className="text-sm text-amber-800 dark:text-amber-200">
              <p className="font-semibold mb-1">Availability Notice</p>
              <p>All guitars shown are currently available. Instruments are sold on a first-come, first-served basis. 
              Contact us to arrange a trial or to discuss purchase details.</p>
            </div>
          </div>
        </FadeIn>

        {/* Featured Guitars */}
        {displayFeatured.length > 0 && (
          <>
            <h2 className="text-3xl font-cinzel font-bold text-stone-900 dark:text-stone-100 mb-8 text-center">Featured Instruments</h2>
            <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {displayFeatured.map((guitar) => (
                <GuitarCard
                  key={guitar.slug}
                  guitar={guitar}
                  onClick={() => setSelectedGuitar(guitar)}
                />
              ))}
            </StaggerChildren>
          </>
        )}

        {/* Regular Guitars */}
        {displayRegular.length > 0 && (
          <>
            <h2 className="text-3xl font-cinzel font-bold text-stone-900 dark:text-stone-100 mb-8 text-center">Available Instruments</h2>
            <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayRegular.map((guitar) => (
                <GuitarCard
                  key={guitar.slug}
                  guitar={guitar}
                  onClick={() => setSelectedGuitar(guitar)}
                />
              ))}
            </StaggerChildren>
          </>
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
                        {selectedGuitar.data.title}
                      </h2>
                      {selectedGuitar.data.model && (
                        <p className="text-amber-600 dark:text-amber-400 font-medium mt-1">
                          Model: {selectedGuitar.data.model}
                        </p>
                      )}
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
                        src={selectedGuitar.data.mainImage || "/images/guitar-placeholder.jpg"}
                        alt={selectedGuitar.data.title || "Guitar"}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>
                    
                    <div className="space-y-4">
                      {selectedGuitar.data.price && (
                        <div>
                          <h3 className="font-semibold text-lg mb-2 text-amber-700 dark:text-amber-400">Price</h3>
                          <p className="text-2xl font-bold text-stone-900 dark:text-stone-100">{selectedGuitar.data.price}</p>
                        </div>
                      )}
                      
                      {selectedGuitar.data.year && (
                        <div>
                          <h3 className="font-semibold text-lg mb-2 text-amber-700 dark:text-amber-400">Year</h3>
                          <p className="text-stone-600 dark:text-stone-300">{selectedGuitar.data.year}</p>
                        </div>
                      )}
                      
                      {selectedGuitar.data.description && (
                        <div>
                          <h3 className="font-semibold text-lg mb-2 text-amber-700 dark:text-amber-400">Description</h3>
                          <p className="text-stone-600 dark:text-stone-300 leading-relaxed">{selectedGuitar.data.description}</p>
                        </div>
                      )}
                      
                      {selectedGuitar.data.specifications && (
                        <div>
                          <h3 className="font-semibold text-lg mb-2 text-amber-700 dark:text-amber-400">Specifications</h3>
                          <div className="grid grid-cols-2 gap-3 text-sm">
                            {Object.entries(selectedGuitar.data.specifications).map(([key, value]) => (
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
                      Inquire About This Guitar
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
            src={guitar.data.mainImage || "/images/guitar-placeholder.jpg"}
            alt={guitar.data.title || "Guitar"}
            className="w-full h-full object-cover"
          />
          
          {/* Featured badge */}
          {guitar.data.featured && (
            <div className="absolute top-4 right-4 bg-amber-600 dark:bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Featured
            </div>
          )}
          
          {/* Price badge */}
          {guitar.data.price && (
            <div className="absolute top-4 left-4 bg-stone-900 dark:bg-stone-700 text-white px-3 py-2 rounded-lg font-bold">
              {guitar.data.price}
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
            {guitar.data.title}
          </h3>
          {guitar.data.model && (
            <p className="text-sm text-amber-600 dark:text-amber-400 mb-2 font-medium">
              Model: {guitar.data.model}
            </p>
          )}
          {guitar.data.year && (
            <p className="text-sm text-stone-500 dark:text-stone-400 mb-3">
              {guitar.data.year}
            </p>
          )}
          <p className="text-sm text-stone-600 dark:text-stone-300 line-clamp-2">{guitar.data.description}</p>
        </div>
      </motion.div>
    </StaggerItem>
  );
}