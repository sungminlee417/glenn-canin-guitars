import GalleryContent from './GalleryContent';
import { getGalleryPageContent } from '@/lib/sanity';
import { Metadata } from 'next';

// Revalidate every 60 seconds
export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const galleryContent = await getGalleryPageContent();
  
  const title = galleryContent?.title || 'Guitar Gallery';
  const description = galleryContent?.pageDescription || 'Browse the gallery of Glenn Canin handcrafted classical and double top guitars. View detailed photos of finished instruments, workshop process, and craftsmanship details.';

  return {
    title,
    description,
    openGraph: {
      title: `${title} | Glenn Canin Guitars`,
      description,
    },
  };
}

export default async function GalleryPage() {
  // Fetch CMS content including gallery items
  const galleryContent = await getGalleryPageContent();

  return <GalleryContent galleryContent={galleryContent} />;
}