import DoubletopsContent from './DoubletopsContent';
import { getGuitars } from '@/lib/cms';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Double Top Guitars',
  description: 'Discover Glenn Canin\'s innovative double top guitar construction. Enhanced volume, projection, and tonal clarity through revolutionary composite soundboard technology.',
  openGraph: {
    title: 'Double Top Classical Guitars | Glenn Canin Innovation',
    description: 'Experience the revolutionary double top construction technique. Exceptional volume and projection without sacrificing tonal quality.',
  },
};

export default async function DoubletopsPage() {
  // Fetch all guitars from CMS
  const allGuitars = await getGuitars();

  return <DoubletopsContent guitars={allGuitars} />;
}
