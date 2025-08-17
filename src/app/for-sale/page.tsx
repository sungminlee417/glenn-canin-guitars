import ForSaleContent from './ForSaleContent';
import { getGuitars } from '@/lib/markdown';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Guitars For Sale',
  description: 'Browse our collection of handcrafted classical and double top guitars for sale. Each Glenn Canin guitar is a unique masterpiece built for professional musicians.',
  openGraph: {
    title: 'Classical Guitars For Sale | Glenn Canin Guitars',
    description: 'Explore available handcrafted classical and double top guitars by master luthier Glenn Canin. Concert-quality instruments for discerning musicians.',
  },
};

export default async function ForSalePage() {
  // Fetch all guitars from CMS
  const allGuitars = getGuitars();
  const availableGuitars = allGuitars.filter(guitar => guitar.data.available !== false);

  return <ForSaleContent guitars={availableGuitars} />;
}