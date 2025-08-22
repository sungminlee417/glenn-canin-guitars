'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';
import Image from 'next/image';
import FadeIn from '@/components/animations/FadeIn';
import StaggerChildren, { StaggerItem } from '@/components/animations/StaggerChildren';

interface Video {
  slug: string;
  data: {
    title?: string;
    youtubeUrl?: string;
    description?: string;
    player?: string;
    date?: string;
    featured?: boolean;
    [key: string]: unknown;
  };
  content: string;
}

interface VideosContentProps {
  videos: Video[];
}

export default function VideosContent({ videos }: VideosContentProps) {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  
  const featuredVideos = videos.filter(video => video.data.featured);
  const regularVideos = videos.filter(video => !video.data.featured);


  const displayFeatured = featuredVideos;
  const displayRegular = regularVideos;

  const extractVideoId = (url: string) => {
    const match = url?.match(/(?:youtube\.com\/embed\/|youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
    return match ? match[1] : '';
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white dark:from-stone-800 dark:to-stone-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/images/video-pattern.svg')] opacity-5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <FadeIn className="text-center mb-16">
          <motion.h1
            className="text-5xl font-cinzel font-bold text-stone-900 dark:text-stone-100 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Video Gallery
          </motion.h1>
          <motion.p
            className="text-xl text-stone-600 dark:text-stone-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Watch performances by world-class guitarists playing Glenn Canin instruments, 
            and get an inside look at the guitar-making process.
          </motion.p>
        </FadeIn>

        {/* Featured Videos Section */}
        {displayFeatured.length > 0 && (
          <FadeIn className="mb-12">
            <motion.h2 
              className="text-3xl font-cinzel font-bold text-center mb-8 text-amber-700 dark:text-amber-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.6 }}
            >
              Featured Videos
            </motion.h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {displayFeatured.map((video, index) => {
                const videoId = extractVideoId(video.data.youtubeUrl || '');
                const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
                
                return (
                  <motion.div 
                    key={video.slug}
                    className="group cursor-pointer bg-white dark:bg-stone-800 rounded-lg shadow-lg overflow-hidden"
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setSelectedVideo(video.data.youtubeUrl || '')}
                  >
                    <div className="aspect-video bg-stone-100 relative overflow-hidden">
                      <Image 
                        src={thumbnailUrl} 
                        alt={video.data.title || "Video"}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        onError={(e) => {
                          e.currentTarget.src = '/images/video-placeholder.jpg';
                        }}
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <motion.div
                          className="bg-white rounded-full p-4"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Play className="w-8 h-8 text-stone-900" fill="currentColor" />
                        </motion.div>
                      </div>
                      <motion.div 
                        className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        Featured
                      </motion.div>
                    </div>
                    <motion.div 
                      className="p-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.4 }}
                    >
                      <h3 className="text-xl font-cinzel font-semibold mb-2 text-stone-900 dark:text-stone-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">{video.data.title}</h3>
                      <p className="text-amber-600 dark:text-amber-400 font-medium text-sm mb-2">{video.data.player}</p>
                      <p className="text-stone-600 dark:text-stone-300 text-sm mb-3 leading-relaxed">{video.data.description}</p>
                      <p className="text-stone-400 dark:text-stone-500 text-xs">
                        {video.data.date ? new Date(video.data.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        }) : ''}
                      </p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </FadeIn>
        )}

        {/* All Videos Section */}
        {displayRegular.length > 0 && (
          <FadeIn>
            <motion.h2 
              className="text-3xl font-cinzel font-bold text-center mb-8 text-amber-700 dark:text-amber-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.6 }}
            >
              More Videos
            </motion.h2>
            <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayRegular.map((video) => {
                const videoId = extractVideoId(video.data.youtubeUrl || '');
                const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
                
                return (
                  <StaggerItem key={video.slug}>
                    <motion.div 
                      className="group bg-white dark:bg-stone-800 rounded-lg shadow-md overflow-hidden cursor-pointer"
                      whileHover={{ y: -5, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => setSelectedVideo(video.data.youtubeUrl || '')}
                    >
                      <div className="aspect-video bg-stone-100 relative overflow-hidden">
                        <Image 
                          src={thumbnailUrl} 
                          alt={video.data.title || "Video"}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          onError={(e) => {
                            e.currentTarget.src = '/images/video-placeholder.jpg';
                          }}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <motion.div
                            className="bg-white rounded-full p-3"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Play className="w-6 h-6 text-stone-900" fill="currentColor" />
                          </motion.div>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-cinzel font-semibold mb-1 text-stone-900 dark:text-stone-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors line-clamp-2">{video.data.title}</h3>
                        <p className="text-amber-600 dark:text-amber-400 text-sm font-medium mb-2">{video.data.player}</p>
                        <p className="text-stone-500 dark:text-stone-400 text-xs">
                          {video.data.date ? new Date(video.data.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          }) : ''}
                        </p>
                      </div>
                    </motion.div>
                  </StaggerItem>
                );
              })}
            </StaggerChildren>
          </FadeIn>
        )}


        <FadeIn className="mt-16">
          <motion.div 
            className="bg-white dark:bg-stone-800 rounded-lg shadow-sm p-8 text-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h2 
              className="text-2xl font-cinzel mb-4 text-stone-900 dark:text-stone-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.6 }}
            >
              Subscribe for Updates
            </motion.h2>
            <motion.p 
              className="text-stone-600 dark:text-stone-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Get notified when new videos featuring Glenn Canin guitars are available.
            </motion.p>
            <motion.button 
              className="bg-amber-600 dark:bg-amber-500 text-white px-8 py-3 rounded-lg hover:bg-amber-700 dark:hover:bg-amber-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe to Channel
            </motion.button>
          </motion.div>
        </FadeIn>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition-colors"
                onClick={closeModal}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-6 h-6" />
              </motion.button>
              <iframe
                src={selectedVideo}
                title="Video player"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}