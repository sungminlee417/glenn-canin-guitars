'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";
import OptimizedImage from "@/components/ui/OptimizedImage";

interface GalleryItem {
  title?: string;
  category?: string;
  image?: string;
  description?: string;
  date?: string;
}

interface GalleryContent {
  pageTitle?: string;
  pageDescription?: string;
  galleryItems?: GalleryItem[];
  [key: string]: unknown;
}

interface GalleryContentProps {
  galleryContent: GalleryContent | null;
}

interface GalleryCardProps {
  item: GalleryItem;
  onClick: () => void;
}

function GalleryCard({ item, onClick }: GalleryCardProps) {
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
            src={item.image || "/images/gallery-placeholder.jpg"}
            alt={item.title || "Gallery item"}
            className="w-full h-full object-cover"
          />
          
          {/* Category badge */}
          {item.category && (
            <motion.div
              className="absolute top-4 left-4 bg-amber-600 dark:bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              {item.category}
            </motion.div>
          )}

          
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
          <h3 className="font-cinzel text-xl font-semibold text-stone-900 dark:text-stone-100 mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
            {item.title}
          </h3>
          {item.date && (
            <p className="text-sm text-amber-600 dark:text-amber-400 mb-3 font-medium">
              {new Date(item.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          )}
          <p className="text-sm text-stone-600 dark:text-stone-300 line-clamp-2">{item.description}</p>
        </motion.div>
      </motion.div>
    </StaggerItem>
  );
}

export default function GalleryContent({ galleryContent }: GalleryContentProps) {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Extract data from CMS with fallbacks
  const pageTitle = galleryContent?.pageTitle || "Guitar Gallery";
  const pageDescription = galleryContent?.pageDescription || "Explore the artistry behind Glenn Canin guitars - from finished instruments to workshop moments that capture the craftsmanship process.";
  const galleryItems = galleryContent?.galleryItems || [];

  // Filter items based on selected category
  const displayItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  // Get unique categories for filtering
  const categories = ['All', ...Array.from(new Set(galleryItems.map(item => item.category).filter(Boolean)))];

  return (
    <div className="py-16 bg-gradient-to-b from-stone-50 to-white dark:from-stone-800 dark:to-stone-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/images/wood-grain.png')] opacity-5" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12">
          <motion.h1 
            className="font-cinzel text-4xl md:text-5xl font-bold text-stone-900 dark:text-stone-100 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {pageTitle}
          </motion.h1>
          
          <motion.p 
            className="text-lg text-stone-600 dark:text-stone-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {pageDescription}
          </motion.p>
        </FadeIn>


        {/* Category Filter */}
        {categories.length > 1 && (
          <motion.div 
            className="mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg font-cinzel font-semibold text-stone-900 dark:text-stone-100 mb-4">Filter by Category</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category || 'All')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-amber-600 dark:bg-amber-500 text-white shadow-lg'
                      : 'bg-amber-100 dark:bg-amber-800 text-amber-800 dark:text-amber-200 hover:bg-amber-200 dark:hover:bg-amber-700'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
            
            {/* Results count */}
            <motion.p 
              className="mt-4 text-sm text-stone-600 dark:text-stone-400"
              key={selectedCategory} // Re-animate when category changes
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {selectedCategory === 'All' 
                ? `Showing all ${displayItems.length} items`
                : `Showing ${displayItems.length} items in "${selectedCategory}"`
              }
            </motion.p>
          </motion.div>
        )}

        {/* All Items */}
        {displayItems.length > 0 ? (
          <StaggerChildren 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            key={selectedCategory} // Re-animate when category changes
          >
            {displayItems.map((item, index) => (
              <GalleryCard
                key={`${item.title}-${index}`}
                item={item}
                onClick={() => setSelectedItem(item)}
              />
            ))}
          </StaggerChildren>
        ) : (
          selectedCategory !== 'All' && (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-stone-600 dark:text-stone-400 text-lg">
                No items found in the &quot;{selectedCategory}&quot; category.
              </p>
            </motion.div>
          )
        )}


        {/* Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div 
              className="fixed inset-0 bg-black dark:bg-black bg-opacity-50 dark:bg-opacity-70 z-50 flex items-center justify-center p-4" 
              onClick={() => setSelectedItem(null)}
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
                      <motion.h2 
                        className="font-cinzel text-2xl font-bold text-stone-900 dark:text-stone-100"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        {selectedItem.title}
                      </motion.h2>
                      {selectedItem.category && (
                        <motion.p
                          className="text-amber-600 dark:text-amber-400 font-medium mt-1"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.15 }}
                        >
                          {selectedItem.category}
                        </motion.p>
                      )}
                    </div>
                    <motion.button
                      onClick={() => setSelectedItem(null)}
                      className="text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 text-2xl p-2 hover:bg-stone-100 dark:hover:bg-stone-700 rounded-full transition-colors"
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
                        src={selectedItem.image || "/images/gallery-placeholder.jpg"}
                        alt={selectedItem.title || "Gallery item"}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="space-y-4">
                        {selectedItem.date && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                          >
                            <h3 className="font-semibold text-lg mb-2 text-amber-700 dark:text-amber-400">Date</h3>
                            <p className="text-stone-600 dark:text-stone-300">
                              {new Date(selectedItem.date).toLocaleDateString('en-US', { 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                              })}
                            </p>
                          </motion.div>
                        )}
                        
                        {selectedItem.description && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                          >
                            <h3 className="font-semibold text-lg mb-2 text-amber-700 dark:text-amber-400">Description</h3>
                            <p className="text-stone-600 dark:text-stone-300 leading-relaxed">{selectedItem.description}</p>
                          </motion.div>
                        )}
                        
                      </div>
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