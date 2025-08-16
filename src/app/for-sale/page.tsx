'use client';

import { ShoppingCart, Info, Star, X, Mail, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import FadeIn from '@/components/animations/FadeIn';
import StaggerChildren, { StaggerItem } from '@/components/animations/StaggerChildren';
import OptimizedImage from '@/components/ui/OptimizedImage';

interface GuitarSpecifications {
  topWood: string;
  backSides: string;
  neckWood: string;
  fingerboard: string;
  scaleLength: string;
  nutWidth: string;
  finish: string;
}

interface Guitar {
  title: string;
  model: string;
  type: string;
  year: number;
  price: string;
  available: boolean;
  featured: boolean;
  mainImage: string;
  specifications: GuitarSpecifications;
  description: string;
}

export default function ForSalePage() {
  const [selectedGuitar, setSelectedGuitar] = useState<Guitar | null>(null);
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [inquiryGuitar, setInquiryGuitar] = useState<Guitar | null>(null);

  const handleInquiry = (guitar: Guitar) => {
    setInquiryGuitar(guitar);
    setShowInquiryModal(true);
  };

  const handleViewDetails = (guitar: Guitar) => {
    setSelectedGuitar(guitar);
  };

  // Sample data for demonstration
  const sampleGuitars: Guitar[] = [
    {
      title: "2024 Concert Double Top",
      model: "DT-2024-01",
      type: "Double Top",
      year: 2024,
      price: "$15,500",
      available: true,
      featured: true,
      mainImage: "/images/forsale-1.jpg",
      specifications: {
        topWood: "German Spruce",
        backSides: "Indian Rosewood",
        neckWood: "Spanish Cedar",
        fingerboard: "Ebony",
        scaleLength: "650mm",
        nutWidth: "52mm",
        finish: "French Polish"
      },
      description: "Exceptional concert instrument with powerful projection and singing trebles. This guitar features our latest double top construction refinements."
    },
    {
      title: "2023 Traditional Concert Classical",
      model: "TC-2023-08",
      type: "Traditional",
      year: 2023,
      price: "$12,000",
      available: true,
      featured: false,
      mainImage: "/images/forsale-2.jpg",
      specifications: {
        topWood: "Cedar",
        backSides: "Madagascar Rosewood",
        neckWood: "Honduran Mahogany",
        fingerboard: "Ebony",
        scaleLength: "650mm",
        nutWidth: "52mm",
        finish: "French Polish"
      },
      description: "Traditional construction with warm, romantic tone. Perfect for intimate performances and recording."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/images/wood-texture.svg')] opacity-5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <FadeIn className="text-center mb-16">
          <motion.h1 
            className="text-5xl font-cinzel font-bold text-stone-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Guitars For Sale
          </motion.h1>
          <motion.p 
            className="text-xl text-stone-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore our collection of available guitars. Each instrument is meticulously 
            crafted and ready to inspire your musical journey.
          </motion.p>
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

        <StaggerChildren className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16" staggerDelay={0.15}>
          {sampleGuitars.filter(g => g.featured).map((guitar, index) => (
            <StaggerItem key={index}>
              <motion.div 
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                whileHover={{ y: -2, scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
              <div className="md:flex">
                <div className="md:w-2/5">
                  <div className="aspect-[3/4] bg-stone-200 relative overflow-hidden">
                    <OptimizedImage 
                      src={guitar.mainImage} 
                      alt={guitar.title}
                      className="w-full h-full object-cover"
                      priority={index === 0}
                    />
                    <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm flex items-center">
                      <Star className="w-4 h-4 mr-1" fill="currentColor" />
                      Featured
                    </div>
                  </div>
                </div>
                <div className="md:w-3/5 p-6">
                  <div className="mb-4">
                    <h2 className="text-2xl font-cinzel font-bold mb-1">{guitar.title}</h2>
                    <p className="text-sm text-stone-500">Model: {guitar.model}</p>
                  </div>
                  
                  <div className="text-3xl font-bold text-stone-900 mb-4">
                    {guitar.price}
                  </div>

                  <p className="text-stone-600 mb-5 text-sm leading-relaxed">{guitar.description}</p>
                  
                  <div className="space-y-2 text-xs mb-5 bg-stone-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-stone-700">Top:</span>
                      <span className="text-stone-600 text-right">{guitar.specifications.topWood}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-stone-700">Back & Sides:</span>
                      <span className="text-stone-600 text-right">{guitar.specifications.backSides}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-stone-700">Scale Length:</span>
                      <span className="text-stone-600 text-right">{guitar.specifications.scaleLength}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-stone-700">Nut Width:</span>
                      <span className="text-stone-600 text-right">{guitar.specifications.nutWidth}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <motion.button 
                      className="flex-1 bg-stone-900 text-white px-4 py-2.5 rounded-lg hover:bg-stone-800 transition-colors flex items-center justify-center text-sm font-medium"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.1 }}
                      onClick={() => handleInquiry(guitar)}
                    >
                      <ShoppingCart className="w-4 h-4 mr-1.5" />
                      Inquire
                    </motion.button>
                    <motion.button 
                      className="px-4 py-2.5 border border-stone-300 rounded-lg hover:bg-stone-50 transition-colors text-sm font-medium"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.1 }}
                      onClick={() => handleViewDetails(guitar)}
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

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
          {sampleGuitars.filter(g => !g.featured).map((guitar, index) => (
            <StaggerItem key={index}>
              <motion.div 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="aspect-[3/4] bg-stone-200 relative overflow-hidden">
                  <OptimizedImage 
                    src={guitar.mainImage} 
                    alt={guitar.title}
                    className="w-full h-full object-cover"
                  />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                  Available
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-cinzel font-semibold mb-2">{guitar.title}</h3>
                <p className="text-sm text-stone-500 mb-3">Model: {guitar.model}</p>
                <div className="text-2xl font-bold text-stone-900 mb-4">
                  {guitar.price}
                </div>
                <div className="text-sm text-stone-600 space-y-1 mb-4">
                  <p>Top: {guitar.specifications.topWood}</p>
                  <p>Back/Sides: {guitar.specifications.backSides}</p>
                </div>
                <motion.button 
                  className="w-full bg-stone-900 text-white px-4 py-2.5 rounded-lg hover:bg-stone-800 transition-colors text-sm font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.1 }}
                  onClick={() => handleViewDetails(guitar)}
                >
                  View Details
                </motion.button>
              </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>

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

      {/* Guitar Details Modal */}
      <AnimatePresence>
        {selectedGuitar && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedGuitar(null)}
          >
            <motion.div
              className="bg-white rounded-lg max-w-2xl w-full max-h-screen overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={() => setSelectedGuitar(null)}
                  className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-stone-50 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <div className="aspect-[4/3] bg-stone-200 relative">
                  <OptimizedImage
                    src={selectedGuitar.mainImage}
                    alt={selectedGuitar.title}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                
                <div className="p-6">
                  <h2 className="text-3xl font-cinzel font-bold mb-2">{selectedGuitar.title}</h2>
                  <p className="text-stone-500 mb-4">Model: {selectedGuitar.model}</p>
                  
                  <div className="text-4xl font-bold text-stone-900 mb-6">
                    {selectedGuitar.price}
                  </div>
                  
                  <p className="text-stone-600 mb-6 leading-relaxed">{selectedGuitar.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-stone-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Specifications</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Top Wood:</span>
                          <span>{selectedGuitar.specifications.topWood}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Back & Sides:</span>
                          <span>{selectedGuitar.specifications.backSides}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Neck:</span>
                          <span>{selectedGuitar.specifications.neckWood}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Fingerboard:</span>
                          <span>{selectedGuitar.specifications.fingerboard}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-stone-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Dimensions</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Scale Length:</span>
                          <span>{selectedGuitar.specifications.scaleLength}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Nut Width:</span>
                          <span>{selectedGuitar.specifications.nutWidth}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Finish:</span>
                          <span>{selectedGuitar.specifications.finish}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Year:</span>
                          <span>{selectedGuitar.year}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <motion.button
                      className="flex-1 bg-stone-900 text-white px-6 py-3 rounded-lg hover:bg-stone-800 transition-colors flex items-center justify-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setSelectedGuitar(null);
                        handleInquiry(selectedGuitar);
                      }}
                    >
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Inquire About This Guitar
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Inquiry Modal */}
      <AnimatePresence>
        {showInquiryModal && inquiryGuitar && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowInquiryModal(false)}
          >
            <motion.div
              className="bg-white rounded-lg max-w-md w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-cinzel font-bold">Inquire About Guitar</h3>
                  <button
                    onClick={() => setShowInquiryModal(false)}
                    className="text-stone-400 hover:text-stone-600"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <p className="text-stone-600 mb-6">
                  Contact us about the <strong>{inquiryGuitar.title}</strong> (Model: {inquiryGuitar.model})
                </p>
                
                <div className="space-y-4">
                  <motion.a
                    href={`mailto:info@glenncanin.com?subject=Inquiry about ${inquiryGuitar.title}&body=I'm interested in learning more about the ${inquiryGuitar.title} (Model: ${inquiryGuitar.model}) priced at ${inquiryGuitar.price}.`}
                    className="flex items-center justify-center w-full bg-stone-900 text-white px-4 py-3 rounded-lg hover:bg-stone-800 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Send Email Inquiry
                  </motion.a>
                  
                  <motion.a
                    href="tel:+1234567890"
                    className="flex items-center justify-center w-full border border-stone-300 px-4 py-3 rounded-lg hover:bg-stone-50 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Us
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}