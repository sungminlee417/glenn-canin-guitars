'use client';

import { useState, useMemo } from 'react';
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

interface VideosContent {
  data: {
    pageTitle?: string;
    pageDescription?: string;
    [key: string]: unknown;
  };
  content: string;
}

interface VideosContentProps {
  videosContent: VideosContent | null;
  videos: Video[];
}

interface VideoCardProps {
  video: Video;
  videoId: string;
  onClick: () => void;
  featured?: boolean;
}

function VideoCard({ video, videoId, onClick, featured = false }: VideoCardProps) {
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
          alt={video.data.title || "Video"}
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
        {featured && (
          <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm">
            Featured
          </div>
        )}
      </div>
      <div className={featured ? "p-6" : "p-4"}>
        <h3 className={`font-cinzel font-semibold mb-2 text-stone-900 dark:text-stone-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors ${featured ? 'text-xl' : 'text-lg'}`}>
          {video.data.title}
        </h3>
        {video.data.player && (
          <p className="text-amber-600 dark:text-amber-400 font-medium text-sm mb-2">
            {video.data.player}
          </p>
        )}
        {video.data.description && (
          <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed">
            {video.data.description}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default function VideosContent({ videos }: VideosContentProps) {
  // Note: videosContent parameter temporarily unused until CMS integration is complete
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  
  const { featuredVideos, regularVideos } = useMemo(() => {
    if (!videos) return { featuredVideos: [], regularVideos: [] };
    
    return {
      featuredVideos: videos.filter(video => video.data.featured),
      regularVideos: videos.filter(video => !video.data.featured)
    };
  }, [videos]);

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
        {featuredVideos.length > 0 && (
          <FadeIn className="mb-16">
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
              {featuredVideos.map((video) => {
                const videoId = extractVideoId(video.data.youtubeUrl || '');
                
                return (
                  <VideoCard
                    key={video.slug}
                    video={video}
                    videoId={videoId}
                    onClick={() => setSelectedVideo(video.data.youtubeUrl || '')}
                    featured={true}
                  />
                );
              })}
            </div>
          </FadeIn>
        )}

        {/* All Videos Section */}
        {regularVideos.length > 0 && (
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
              {regularVideos.map((video) => {
                const videoId = extractVideoId(video.data.youtubeUrl || '');
                
                return (
                  <StaggerItem key={video.slug}>
                    <VideoCard
                      video={video}
                      videoId={videoId}
                      onClick={() => setSelectedVideo(video.data.youtubeUrl || '')}
                      featured={false}
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
              className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4" 
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