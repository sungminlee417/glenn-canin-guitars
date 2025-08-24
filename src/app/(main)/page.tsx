import Hero from "@/components/Hero";
import { getHomePageContent } from "@/lib/cms";

// Revalidate every 60 seconds
export const revalidate = 60;

export default async function Home() {
  // Fetch CMS content
  const homePageContent = await getHomePageContent();

  return (
    <>
      <Hero homeContent={homePageContent} />
    </>
  );
}