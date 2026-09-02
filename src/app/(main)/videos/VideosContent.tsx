'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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
  videos?: Video[];
  [key: string]: unknown;
}

interface VideosContentProps {
  videosContent: VideosContent | null;
}

function VideoCard({ video, videoId, onClick }: { video: Video; videoId: string; onClick: () => void }) {
  const [imageError, setImageError] = useState(false);
  const thumbnailUrl = imageError
    ? '/images/video-placeholder.jpg'
    : `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <button type="button" onClick={onClick} className="group block w-full text-left">
      <div className="relative aspect-video bg-brand-cream-deep dark:bg-stone-800 overflow-hidden mb-4">
        <Image
          src={thumbnailUrl}
          alt={video.title || "Video"}
          fill
          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
          onError={() => setImageError(true)}
        />
        <div className="absolute inset-0 bg-brand-ink/0 group-hover:bg-brand-ink/30 transition-colors duration-500 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 w-14 h-14 rounded-full bg-brand-cream/95 flex items-center justify-center">
            <Play className="w-5 h-5 text-brand-ink ml-0.5" fill="currentColor" />
          </div>
        </div>
      </div>
      <div>
        {video.player && (
          <p className="font-cinzel text-[10px] tracking-[0.24em] text-brand-forest dark:text-brand-forest-light uppercase mb-2">
            {video.player}
          </p>
        )}
        <h3 className="font-cinzel text-lg lg:text-xl font-normal text-brand-ink dark:text-brand-cream leading-tight mb-2 transition-colors group-hover:text-brand-forest dark:group-hover:text-brand-forest-light">
          {video.title}
        </h3>
        {video.description && (
          <p className="text-sm text-brand-ink-soft dark:text-brand-cream/70 leading-relaxed line-clamp-2">
            {video.description}
          </p>
        )}
      </div>
    </button>
  );
}

export default function VideosContent({ videosContent }: VideosContentProps) {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedVideo) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedVideo(null);
    };
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [selectedVideo]);

  const pageTitle = videosContent?.pageTitle || "Recordings";
  const pageDescription = videosContent?.pageDescription || "Performances and workshop moments captured on video.";
  const videos = videosContent?.videos || [];

  const extractVideoId = (url: string) => {
    const match = url?.match(/(?:youtube\.com\/embed\/|youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
    return match ? match[1] : '';
  };

  return (
    <div className="bg-brand-cream dark:bg-stone-950 pt-24 pb-24 lg:pt-32 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeIn className="mb-20 lg:mb-28 max-w-3xl">
          <p className="font-cinzel text-[11px] tracking-[0.28em] text-brand-forest dark:text-brand-forest-light uppercase mb-6">
            In Motion
          </p>
          <h1 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-normal text-brand-ink dark:text-brand-cream leading-[1.1] tracking-tight mb-8">
            {pageTitle}
          </h1>
          <div className="h-px w-16 bg-brand-walnut/60 dark:bg-brand-cream/30 mb-8" />
          <p className="text-lg text-brand-ink-soft dark:text-brand-cream/85 leading-[1.7] font-light">
            {pageDescription}
          </p>
        </FadeIn>

        {videos.length > 0 && (
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {videos.map((video, index) => (
              <StaggerItem key={`${video.title}-${index}`}>
                <VideoCard
                  video={video}
                  videoId={extractVideoId(video.youtubeUrl || '')}
                  onClick={() => setSelectedVideo(video.youtubeUrl || '')}
                />
              </StaggerItem>
            ))}
          </StaggerChildren>
        )}
      </div>

      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 bg-brand-ink/80 dark:bg-black/90 z-[10000] flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedVideo(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="bg-brand-cream dark:bg-stone-900 max-w-5xl w-full overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                aria-label="Close"
                className="absolute top-4 right-4 z-10 text-brand-cream bg-brand-ink/60 hover:bg-brand-ink/80 rounded-full p-2 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${extractVideoId(selectedVideo)}?autoplay=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
