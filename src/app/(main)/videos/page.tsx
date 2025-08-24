import VideosContent from './VideosContent';
import { getVideosPageContent } from '@/lib/sanity';
import { Metadata } from 'next';

// Revalidate every 60 seconds
export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const videosContent = await getVideosPageContent();
  
  const title = videosContent?.title || 'Guitar Videos & Performances';
  const description = videosContent?.pageDescription || 'Watch performances on Glenn Canin guitars, workshop tours, and guitar making process videos. Hear the exceptional tone and projection of double top guitars.';

  return {
    title,
    description,
    openGraph: {
      title: `${title} | Glenn Canin Guitars`,
      description,
    },
  };
}

export default async function VideosPage() {
  // Fetch CMS content including videos
  const videosContent = await getVideosPageContent();

  return <VideosContent videosContent={videosContent} />;
}