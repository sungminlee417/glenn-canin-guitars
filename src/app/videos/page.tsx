import VideosContent from './VideosContent';
import { getVideos } from '@/lib/markdown';

export default async function VideosPage() {
  // Fetch videos from CMS
  const allVideos = getVideos();

  return <VideosContent videos={allVideos} />;
}