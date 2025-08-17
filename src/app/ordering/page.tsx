import OrderingContent from "./OrderingContent";
import { getPageContent } from "@/lib/markdown";

export default async function OrderingPage() {
  // Fetch CMS content
  const orderingContent = getPageContent('ordering');

  return <OrderingContent orderingContent={orderingContent} />;
}