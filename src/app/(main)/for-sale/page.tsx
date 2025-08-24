import ForSaleContent from './ForSaleContent';
import { getForSalePageContent } from '@/lib/sanity';
import { Metadata } from 'next';

// Revalidate every 60 seconds
export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const forSaleContent = await getForSalePageContent();
  
  const title = forSaleContent?.title || 'Guitars For Sale';
  const description = forSaleContent?.pageDescription || 'Browse our collection of handcrafted classical and double top guitars for sale. Each Glenn Canin guitar is a unique masterpiece built for professional musicians.';

  return {
    title,
    description,
    openGraph: {
      title: `${title} | Glenn Canin Guitars`,
      description,
    },
  };
}

export default async function ForSalePage() {
  // Fetch CMS content including guitars
  const forSaleContent = await getForSalePageContent();

  return <ForSaleContent forSaleContent={forSaleContent} />;
}