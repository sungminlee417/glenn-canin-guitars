import DoubletopsContent from './DoubletopsContent';
import { getGuitars } from '@/lib/markdown';

export default async function DoubletopsPage() {
  // Fetch all guitars from CMS
  const allGuitars = getGuitars();

  return <DoubletopsContent guitars={allGuitars} />;
}
