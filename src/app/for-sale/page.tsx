import ForSaleContent from './ForSaleContent';
import { getGuitars } from '@/lib/markdown';

export default async function ForSalePage() {
  // Fetch all guitars from CMS
  const allGuitars = getGuitars();
  const availableGuitars = allGuitars.filter(guitar => guitar.data.available !== false);

  return <ForSaleContent guitars={availableGuitars} />;
}