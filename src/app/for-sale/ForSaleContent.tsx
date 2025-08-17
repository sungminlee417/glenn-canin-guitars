'use client';

import { ShoppingCart, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import FadeIn from '@/components/animations/FadeIn';
import StaggerChildren, { StaggerItem } from '@/components/animations/StaggerChildren';
import OptimizedImage from '@/components/ui/OptimizedImage';

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

interface ForSaleContentProps {
  guitars: Guitar[];
}

export default function ForSaleContent({ guitars }: ForSaleContentProps) {
  const [selectedGuitar, setSelectedGuitar] = useState<Guitar | null>(null);
  
  const featuredGuitars = guitars.filter(guitar => guitar.data.featured);
  const regularGuitars = guitars.filter(guitar => !guitar.data.featured);

  // Sample data if no CMS guitars available
  const sampleGuitars = [
    {
      slug: "sample-1",
      data: {
        title: "Cedar Double Top #127",
        model: "DT-2024-01",
        year: 2024,
        price: "$12,500",
        mainImage: "/images/guitar-1.jpg",
        description: "Exceptional projection and warmth with cedar top and Indian rosewood back and sides.",
        featured: true,
        available: true,
        specifications: {
          topWood: "Cedar",
          backSides: "Indian Rosewood",
          neckWood: "Mahogany",
          fingerboard: "Ebony",
          scaleLength: "650mm",
          nutWidth: "52mm",
          finish: "French Polish"
        }
      },
      content: ""
    }
  ];

  const displayFeatured = featuredGuitars.length > 0 ? featuredGuitars : sampleGuitars.filter(g => g.data.featured);
  const displayRegular = regularGuitars.length > 0 ? regularGuitars : sampleGuitars.filter(g => !g.data.featured);

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/images/wood-texture.svg')] opacity-5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <FadeIn className="text-center mb-16">
          <h1 className="text-5xl font-cinzel font-bold text-stone-900 mb-6">
            Guitars For Sale
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Explore our collection of available guitars. Each instrument is meticulously 
            crafted and ready to inspire your musical journey.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="mb-8 bg-amber-50 border border-amber-200 rounded-lg p-6">
          <div className="flex items-start">
            <Info className="w-5 h-5 text-amber-600 mt-0.5 mr-3 flex-shrink-0" />
            <div className="text-sm text-amber-800">
              <p className="font-semibold mb-1">Availability Notice</p>
              <p>All guitars shown are currently available. Instruments are sold on a first-come, first-served basis. 
              Contact us to arrange a trial or to discuss purchase details.</p>
            </div>
          </div>
        </FadeIn>

        {/* Featured Guitars */}
        {displayFeatured.length > 0 && (
          <>
            <h2 className="text-3xl font-cinzel font-bold text-stone-900 mb-8 text-center">Featured Instruments</h2>
            <StaggerChildren className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16" staggerDelay={0.15}>
              {displayFeatured.map((guitar, index) => (
                <StaggerItem key={guitar.slug}>
                  <motion.div 
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                    whileHover={{ y: -2, scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="md:flex">
                      <div className="md:w-2/5">
                        <div className="aspect-[3/4] bg-stone-200 relative overflow-hidden">
                          <OptimizedImage 
                            src={guitar.data.mainImage || "/images/guitar-placeholder.jpg"} 
                            alt={guitar.data.title || "Guitar"}
                            className="w-full h-full object-cover"
                            priority={index === 0}
                          />
                        </div>
                      </div>
                      <div className="md:w-3/5 p-6">
                        <div className="mb-4">
                          <h2 className="text-2xl font-cinzel font-bold mb-1">{guitar.data.title}</h2>
                          <p className="text-sm text-stone-500">Model: {guitar.data.model}</p>
                        </div>
                        
                        <div className="text-3xl font-bold text-stone-900 mb-4">
                          {guitar.data.price}
                        </div>

                        <p className="text-stone-600 mb-5 text-sm leading-relaxed">{guitar.data.description}</p>
                        
                        {guitar.data.specifications && (
                          <div className="space-y-2 text-xs mb-5 bg-stone-50 p-4 rounded-lg">
                            <div className="flex justify-between items-center">
                              <span className="font-medium text-stone-700">Top:</span>
                              <span className="text-stone-600 text-right">{guitar.data.specifications.topWood}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="font-medium text-stone-700">Back & Sides:</span>
                              <span className="text-stone-600 text-right">{guitar.data.specifications.backSides}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="font-medium text-stone-700">Scale Length:</span>
                              <span className="text-stone-600 text-right">{guitar.data.specifications.scaleLength}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="font-medium text-stone-700">Nut Width:</span>
                              <span className="text-stone-600 text-right">{guitar.data.specifications.nutWidth}</span>
                            </div>
                          </div>
                        )}
                        
                        <div className="flex gap-3">
                          <motion.button 
                            className="flex-1 bg-stone-900 text-white px-4 py-2.5 rounded-lg hover:bg-stone-800 transition-colors flex items-center justify-center text-sm font-medium"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ duration: 0.1 }}
                            onClick={() => {
                              const email = `mailto:info@glenncanin.com?subject=Inquiry about ${guitar.data.title}&body=I'm interested in learning more about the ${guitar.data.title} (Model: ${guitar.data.model}) priced at ${guitar.data.price}.`;
                              window.location.href = email;
                            }}
                          >
                            <ShoppingCart className="w-4 h-4 mr-1.5" />
                            Inquire
                          </motion.button>
                          <motion.button 
                            className="px-4 py-2.5 border border-stone-300 rounded-lg hover:bg-stone-50 transition-colors text-sm font-medium"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ duration: 0.1 }}
                            onClick={() => setSelectedGuitar(guitar)}
                          >
                            Details
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </>
        )}

        {/* Regular Guitars */}
        {displayRegular.length > 0 && (
          <>
            <h2 className="text-3xl font-cinzel font-bold text-stone-900 mb-8 text-center">Available Guitars</h2>
            <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
              {displayRegular.map((guitar) => (
                <StaggerItem key={guitar.slug}>
                  <motion.div 
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="aspect-[3/4] bg-stone-200 relative overflow-hidden">
                      <OptimizedImage 
                        src={guitar.data.mainImage || "/images/guitar-placeholder.jpg"} 
                        alt={guitar.data.title || "Guitar"}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-cinzel font-semibold text-stone-900 mb-1">{guitar.data.title}</h3>
                      <p className="text-sm text-amber-600 mb-2">{guitar.data.year}</p>
                      <p className="text-xl font-bold text-stone-900 mb-2">{guitar.data.price}</p>
                      <p className="text-stone-600 text-sm mb-4 line-clamp-2">{guitar.data.description}</p>
                      
                      <motion.button 
                        className="w-full bg-stone-900 text-white px-4 py-2.5 rounded-lg hover:bg-stone-800 transition-colors text-sm font-medium"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.1 }}
                        onClick={() => setSelectedGuitar(guitar)}
                      >
                        View Details
                      </motion.button>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </>
        )}

        {/* No guitars available message */}
        {guitars.length === 0 && (
          <div className="text-center py-16">
            <h2 className="text-2xl font-cinzel font-bold text-stone-900 mb-4">No Guitars Currently Available</h2>
            <p className="text-stone-600 mb-8">Please check back soon or contact us about custom orders.</p>
            <motion.a
              href="/contact"
              className="inline-block bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>
          </div>
        )}

        {/* Purchase Information */}
        <FadeIn delay={0.4} className="mt-16 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-cinzel mb-6 text-center">Purchase Information</h2>
          <StaggerChildren className="grid md:grid-cols-3 gap-8" staggerDelay={0.2}>
            <StaggerItem>
              <div className="text-center">
                <motion.div 
                  className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, backgroundColor: "#f59e0b" }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.span 
                    className="text-2xl font-bold text-amber-700"
                    whileHover={{ color: "#ffffff" }}
                  >
                    1
                  </motion.span>
                </motion.div>
                <h3 className="font-semibold mb-2">Trial Period</h3>
                <p className="text-sm text-stone-600">All guitars come with a 7-day approval period in your home</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="text-center">
                <motion.div 
                  className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, backgroundColor: "#f59e0b" }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.span 
                    className="text-2xl font-bold text-amber-700"
                    whileHover={{ color: "#ffffff" }}
                  >
                    2
                  </motion.span>
                </motion.div>
                <h3 className="font-semibold mb-2">Worldwide Shipping</h3>
                <p className="text-sm text-stone-600">Secure, insured shipping available to any location</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="text-center">
                <motion.div 
                  className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, backgroundColor: "#f59e0b" }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.span 
                    className="text-2xl font-bold text-amber-700"
                    whileHover={{ color: "#ffffff" }}
                  >
                    3
                  </motion.span>
                </motion.div>
                <h3 className="font-semibold mb-2">Lifetime Support</h3>
                <p className="text-sm text-stone-600">Comprehensive warranty and ongoing support for all instruments</p>
              </div>
            </StaggerItem>
          </StaggerChildren>
        </FadeIn>
      </div>

      {/* Guitar Detail Modal */}
      {selectedGuitar && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedGuitar(null)}
        >
          <motion.div
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="font-cinzel text-2xl font-bold text-stone-900">{selectedGuitar.data.title}</h2>
                  <p className="text-amber-600 font-medium">{selectedGuitar.data.model}</p>
                </div>
                <button
                  onClick={() => setSelectedGuitar(null)}
                  className="text-stone-500 hover:text-stone-700 text-2xl p-2 hover:bg-stone-100 rounded-full transition-colors"
                >
                  ✕
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
                
                <div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-amber-700">Price</h3>
                      <p className="text-2xl font-bold text-stone-900">{selectedGuitar.data.price}</p>
                    </div>
                    
                    {selectedGuitar.data.description && (
                      <div>
                        <h3 className="font-semibold text-lg mb-2 text-amber-700">Description</h3>
                        <p className="text-stone-600 leading-relaxed">{selectedGuitar.data.description}</p>
                      </div>
                    )}
                    
                    {selectedGuitar.data.specifications && (
                      <div>
                        <h3 className="font-semibold text-lg mb-2 text-amber-700">Specifications</h3>
                        <div className="space-y-2 text-sm">
                          {selectedGuitar.data.specifications.topWood && (
                            <div className="flex justify-between">
                              <span className="font-medium text-stone-700">Top:</span>
                              <span className="text-stone-600">{selectedGuitar.data.specifications.topWood}</span>
                            </div>
                          )}
                          {selectedGuitar.data.specifications.backSides && (
                            <div className="flex justify-between">
                              <span className="font-medium text-stone-700">Back & Sides:</span>
                              <span className="text-stone-600">{selectedGuitar.data.specifications.backSides}</span>
                            </div>
                          )}
                          {selectedGuitar.data.specifications.scaleLength && (
                            <div className="flex justify-between">
                              <span className="font-medium text-stone-700">Scale Length:</span>
                              <span className="text-stone-600">{selectedGuitar.data.specifications.scaleLength}</span>
                            </div>
                          )}
                          {selectedGuitar.data.specifications.nutWidth && (
                            <div className="flex justify-between">
                              <span className="font-medium text-stone-700">Nut Width:</span>
                              <span className="text-stone-600">{selectedGuitar.data.specifications.nutWidth}</span>
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
  );
}