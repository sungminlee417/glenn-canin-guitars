import ForSaleContent from './ForSaleContent';
import { getAvailableGuitars } from '@/lib/cms';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Guitars For Sale',
  description: 'Browse our collection of handcrafted classical and double top guitars for sale. Each Glenn Canin guitar is a unique masterpiece built for professional musicians.',
  openGraph: {
    title: 'Classical Guitars For Sale | Glenn Canin Guitars',
    description: 'Explore available handcrafted classical and double top guitars by master luthier Glenn Canin. Concert-quality instruments for discerning musicians.',
  },
};

// Revalidate every 60 seconds
export const revalidate = 60;

export default async function ForSalePage() {
  // Fetch available guitars from CMS
  const availableGuitars = await getAvailableGuitars();

  return <ForSaleContent guitars={availableGuitars} />;
}