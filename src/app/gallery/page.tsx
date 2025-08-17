import GalleryContent from './GalleryContent';
import { getGalleryItems } from '@/lib/markdown';

export default async function GalleryPage() {
  // Fetch gallery items from CMS
  const allGalleryItems = getGalleryItems();

  return <GalleryContent galleryItems={allGalleryItems} />;
}