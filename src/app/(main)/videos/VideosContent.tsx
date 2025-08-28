'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';
import Image from 'next/image';
import FadeIn from '@/components/animations/FadeIn';
import StaggerChildren, { StaggerItem } from '@/components/animations/StaggerChildren';

interface Video {
  title?: string;
  youtubeUrl?: string;
  description?: string;
  player?: string;
}

interface VideosContent {
  pageTitle?: string;
  pageDescription?: string;
  featuredVideosTitle?: string;
  moreVideosTitle?: string;
  videos?: Video[];
  [key: string]: unknown;
}

interface VideosContentProps {
  videosContent: VideosContent | null;
}

interface VideoCardProps {
  video: Video;
  videoId: string;
  onClick: () => void;
}

function VideoCard({ video, videoId, onClick }: VideoCardProps) {
  const [imageError, setImageError] = useState(false);
  
  const thumbnailUrl = imageError 
    ? '/images/video-placeholder.jpg'
    : `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <motion.div 
      className="group cursor-pointer bg-white dark:bg-stone-800 rounded-lg shadow-lg overflow-hidden"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
    >
      <div className="aspect-video bg-stone-100 relative overflow-hidden">
        <Image 
          src={thumbnailUrl} 
          alt={video.title || "Video"}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          onError={() => setImageError(true)}
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
      </div>
      <div className="p-4">
        <h3 className="font-cinzel font-semibold mb-2 text-stone-900 dark:text-stone-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors text-lg">
          {video.title}
        </h3>
        {video.player && (
          <p className="text-amber-600 dark:text-amber-400 font-medium text-sm mb-2">
            {video.player}
          </p>
        )}
        {video.description && (
          <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed">
            {video.description}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default function VideosContent({ videosContent }: VideosContentProps) {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // Extract data from CMS with fallbacks
  const pageTitle = videosContent?.pageTitle || "Video Gallery";
  const pageDescription = videosContent?.pageDescription || "Watch performances by world-class guitarists playing Glenn Canin instruments, and get an inside look at the guitar-making process.";
  const videos = videosContent?.videos || [];
  

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
            {pageTitle}
          </motion.h1>
          <motion.p
            className="text-xl text-stone-600 dark:text-stone-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {pageDescription}
          </motion.p>
        </FadeIn>

        {/* All Videos Section */}
        {videos && videos.length > 0 && (
          <FadeIn>
            <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video, index) => {
                const videoId = extractVideoId(video.youtubeUrl || '');
                
                return (
                  <StaggerItem key={`${video.title}-${index}`}>
                    <VideoCard
                      video={video}
                      videoId={videoId}
                      onClick={() => setSelectedVideo(video.youtubeUrl || '')}
                    />
                  </StaggerItem>
                );
              })}
            </StaggerChildren>
          </FadeIn>
        )}

        {/* Video Modal */}
        <AnimatePresence>
          {selectedVideo && (
            <motion.div 
              className="fixed inset-0 bg-black bg-opacity-75 z-[10000] flex items-center justify-center p-4" 
              onClick={closeModal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="bg-white dark:bg-stone-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden relative" 
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${extractVideoId(selectedVideo)}?autoplay=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}