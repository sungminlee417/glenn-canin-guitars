import OrderingContent from "./OrderingContent";
import { getPageContent } from "@/lib/cms";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Guitar Ordering",
  description: "Commission a custom classical or double top guitar from Glenn Canin. Learn about the ordering process, timeline, pricing, and how to create your dream instrument.",
  openGraph: {
    title: "Custom Guitar Orders | Glenn Canin Guitars",
    description: "Begin your journey to owning a custom Glenn Canin guitar. Personalized consultation, meticulous craftsmanship, and lifetime support.",
  },
};

export default async function OrderingPage() {
  // Fetch CMS content
  const orderingContent = await getPageContent('ordering');

  return <OrderingContent orderingContent={orderingContent} />;
}