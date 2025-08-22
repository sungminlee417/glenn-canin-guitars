import OrderingContent from "./OrderingContent";
import { getOrderingPageContent } from "@/lib/cms";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Guitar Ordering",
  description: "Commission a custom classical or double top guitar from Glenn Canin. Learn about the ordering process, timeline, pricing, and how to create your dream instrument.",
  openGraph: {
    title: "Custom Guitar Orders | Glenn Canin Guitars",
    description: "Begin your journey to owning a custom Glenn Canin guitar. Personalized consultation, meticulous craftsmanship, and lifetime support.",
  },
};

// Revalidate every 60 seconds
export const revalidate = 60;

export default async function OrderingPage() {
  // Fetch CMS content
  const orderingContent = await getOrderingPageContent();

  return <OrderingContent orderingContent={orderingContent} />;
}