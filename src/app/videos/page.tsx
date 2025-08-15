'use client';

import { useState } from 'react';
// import { getVideos } from '@/lib/markdown';
import { Play } from 'lucide-react';
import Image from 'next/image';

export default function VideosPage() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  
  // This would normally be fetched server-side, but for demo purposes we'll use sample data
  const sampleVideos = [
    {
      title: "Bach Suite No. 3 - Performed on Glenn Canin Double Top",
      youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Professional guitarist demonstrates the tonal qualities of a 2023 Glenn Canin double top guitar.",
      player: "John Williams",
      date: "2024-01-15",
      featured: true
    },
    {
      title: "Villa-Lobos Etude No. 11",
      youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Beautiful interpretation showcasing the dynamic range of Glenn Canin guitars.",
      player: "Ana Vidovic",
      date: "2024-02-20",
      featured: false
    },
    {
      title: "Guitar Construction Process - Behind the Scenes",
      youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Glenn Canin demonstrates the construction process of his double top guitars.",
      player: "Glenn Canin",
      date: "2024-03-10",
      featured: true
    }
  ];

  const extractVideoId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/embed\/|youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
    return match ? match[1] : '';
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-cinzel font-bold text-stone-900 mb-6">
            Video Gallery
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Watch performances by world-class guitarists playing Glenn Canin instruments, 
            and get an inside look at the guitar-making process.
          </p>
        </div>

        {selectedVideo && (
          <div className="mb-12">
            <div className="bg-black rounded-lg overflow-hidden shadow-2xl">
              <div className="aspect-video">
                <iframe
                  src={selectedVideo}
                  title="Video player"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleVideos.map((video, index) => {
            const videoId = extractVideoId(video.youtubeUrl);
            const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
            
            return (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedVideo(video.youtubeUrl)}
              >
                <div className="aspect-video bg-stone-100 relative group">
                  <Image 
                    src={thumbnailUrl} 
                    alt={video.title}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      e.currentTarget.src = '/images/video-placeholder.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white rounded-full p-4">
                      <Play className="w-8 h-8 text-stone-900" fill="currentColor" />
                    </div>
                  </div>
                  {video.featured && (
                    <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-cinzel font-semibold mb-2">{video.title}</h3>
                  <p className="text-stone-600 text-sm mb-2">{video.player}</p>
                  <p className="text-stone-500 text-sm">{video.description}</p>
                  <p className="text-stone-400 text-xs mt-3">
                    {new Date(video.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-sm p-8 text-center">
          <h2 className="text-2xl font-cinzel mb-4">Subscribe for Updates</h2>
          <p className="text-stone-600 mb-6">
            Get notified when new videos featuring Glenn Canin guitars are available.
          </p>
          <button className="bg-stone-900 text-white px-8 py-3 rounded-lg hover:bg-stone-800 transition-colors">
            Subscribe to Channel
          </button>
        </div>
      </div>
    </div>
  );
}