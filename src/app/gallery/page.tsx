'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";
import OptimizedImage from "@/components/ui/OptimizedImage";

const guitars = [
  {
    id: 1,
    name: "Cedar Doubletop #127",
    year: "2024",
    image: "/images/guitar-1.jpg",
    specs: {
      top: "European Spruce",
      back: "Indian Rosewood",
      sides: "Indian Rosewood",
      scale: "650mm",
      nut: "52mm",
    },
  },
  {
    id: 2,
    name: "Spruce Doubletop #126",
    year: "2024",
    image: "/images/guitar-2.jpg",
    specs: {
      top: "Cedar",
      back: "Brazilian Rosewood",
      sides: "Brazilian Rosewood",
      scale: "650mm",
      nut: "52mm",
    },
  },
  {
    id: 3,
    name: "Custom Doubletop #125",
    year: "2023",
    image: "/images/guitar-3.jpg",
    specs: {
      top: "Redwood",
      back: "Madagascar Rosewood",
      sides: "Madagascar Rosewood",
      scale: "640mm",
      nut: "51mm",
    },
  },
  {
    id: 4,
    name: "Concert Model #124",
    year: "2023",
    image: "/images/guitar-4.jpg",
    specs: {
      top: "German Spruce",
      back: "Cocobolo",
      sides: "Cocobolo",
      scale: "650mm",
      nut: "52mm",
    },
  },
  {
    id: 5,
    name: "Special Edition #123",
    year: "2023",
    image: "/images/guitar-5.jpg",
    specs: {
      top: "Engelmann Spruce",
      back: "African Blackwood",
      sides: "African Blackwood",
      scale: "650mm",
      nut: "52mm",
    },
  },
  {
    id: 6,
    name: "Anniversary Model #122",
    year: "2023",
    image: "/images/guitar-6.jpg",
    specs: {
      top: "Cedar",
      back: "Ziricote",
      sides: "Ziricote",
      scale: "650mm",
      nut: "52mm",
    },
  },
];

interface GuitarCardProps {
  guitar: typeof guitars[0];
  onClick: () => void;
}

function GuitarCard({ guitar, onClick }: GuitarCardProps) {
  return (
    <StaggerItem>
      <motion.div
        className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
        onClick={onClick}
        whileHover={{ y: -8, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative h-64 overflow-hidden">
          <OptimizedImage
            src={guitar.image}
            alt={guitar.name}
            className="w-full h-full"
          />
          
          {/* Overlay effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <div className="absolute bottom-4 left-4 text-white">
              <motion.span
                className="text-sm font-medium"
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                Click to view details
              </motion.span>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="font-cinzel text-xl font-semibold text-stone-900 mb-2 group-hover:text-amber-600 transition-colors">
            {guitar.name}
          </h3>
          <p className="text-sm text-amber-600 mb-3 font-medium">{guitar.year}</p>
          <div className="text-sm text-stone-600 space-y-1">
            <p>Top: <span className="font-medium">{guitar.specs.top}</span></p>
            <p>Back/Sides: <span className="font-medium">{guitar.specs.back}</span></p>
          </div>
        </motion.div>
      </motion.div>
    </StaggerItem>
  );
}

export default function GalleryPage() {
  const [selectedGuitar, setSelectedGuitar] = useState<typeof guitars[0] | null>(null);

  return (
    <div className="py-16 bg-gradient-to-b from-stone-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/images/wood-grain.png')] opacity-5" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12">
          <motion.h1 
            className="font-cinzel text-4xl md:text-5xl font-bold text-stone-900 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Guitar Gallery
          </motion.h1>
          
          <motion.p 
            className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Browse through my collection of handcrafted classical guitars. Each instrument 
            represents countless hours of meticulous work and attention to detail.
          </motion.p>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guitars.map((guitar) => (
            <GuitarCard
              key={guitar.id}
              guitar={guitar}
              onClick={() => setSelectedGuitar(guitar)}
            />
          ))}
        </StaggerChildren>

        {/* Modal */}
        <AnimatePresence>
          {selectedGuitar && (
            <motion.div 
              className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" 
              onClick={() => setSelectedGuitar(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto" 
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <motion.h2 
                      className="font-cinzel text-2xl font-bold text-stone-900"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      {selectedGuitar.name}
                    </motion.h2>
                    <motion.button
                      onClick={() => setSelectedGuitar(null)}
                      className="text-stone-500 hover:text-stone-700 text-2xl p-2 hover:bg-stone-100 rounded-full transition-colors"
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      ✕
                    </motion.button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div 
                      className="relative h-96 rounded-lg overflow-hidden"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <OptimizedImage
                        src={selectedGuitar.image}
                        alt={selectedGuitar.name}
                        className="w-full h-full"
                        priority
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h3 className="font-semibold text-lg mb-4 text-amber-700">Specifications</h3>
                      <motion.dl className="space-y-3">
                        {[
                          { label: "Year", value: selectedGuitar.year },
                          { label: "Top Wood", value: selectedGuitar.specs.top },
                          { label: "Back Wood", value: selectedGuitar.specs.back },
                          { label: "Side Wood", value: selectedGuitar.specs.sides },
                          { label: "Scale Length", value: selectedGuitar.specs.scale },
                          { label: "Nut Width", value: selectedGuitar.specs.nut },
                        ].map((spec, index) => (
                          <motion.div
                            key={spec.label}
                            className="border-b border-stone-200 pb-2"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + index * 0.1 }}
                          >
                            <dt className="font-medium text-stone-700">{spec.label}:</dt>
                            <dd className="text-stone-600 mt-1">{spec.value}</dd>
                          </motion.div>
                        ))}
                      </motion.dl>
                      
                      <motion.div
                        className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                      >
                        <p className="text-sm text-stone-600 leading-relaxed">
                          This instrument represents the pinnacle of classical guitar craftsmanship, 
                          combining traditional techniques with modern innovations for exceptional 
                          sound quality and playability.
                        </p>
                      </motion.div>
                    </motion.div>
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