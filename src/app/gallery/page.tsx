import GalleryContent from './GalleryContent';
import { getGalleryPageContent, getGalleryItems } from '@/lib/cms';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Guitar Gallery',
  description: 'Browse the gallery of Glenn Canin handcrafted classical and double top guitars. View detailed photos of finished instruments, workshop process, and craftsmanship details.',
  openGraph: {
    title: 'Guitar Gallery | Glenn Canin Guitars',
    description: 'Explore stunning photographs of Glenn Canin guitars, from completed masterpieces to detailed craftsmanship shots.',
  },
};

// Revalidate every 60 seconds
export const revalidate = 60;

export default async function GalleryPage() {
  // Fetch CMS content
  const galleryContent = await getGalleryPageContent();
  const allGalleryItems = await getGalleryItems();

  return <GalleryContent galleryContent={galleryContent} galleryItems={allGalleryItems} />;
}