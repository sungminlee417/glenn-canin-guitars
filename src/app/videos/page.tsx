import VideosContent from './VideosContent';
import { getVideosPageContent, getVideos } from '@/lib/cms';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Guitar Videos & Performances',
  description: 'Watch performances on Glenn Canin guitars, workshop tours, and guitar making process videos. Hear the exceptional tone and projection of double top guitars.',
  openGraph: {
    title: 'Videos | Glenn Canin Guitars',
    description: 'Experience the sound of Glenn Canin guitars through performance videos, workshop tours, and demonstrations.',
  },
};

// Revalidate every 60 seconds
export const revalidate = 60;

export default async function VideosPage() {
  // Fetch CMS content
  const videosContent = await getVideosPageContent();
  const allVideos = await getVideos();

  return <VideosContent videosContent={videosContent} videos={allVideos} />;
}