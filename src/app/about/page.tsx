import AboutContent from "./AboutContent";
import { getAboutPageContent } from "@/lib/cms";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Glenn Canin",
  description: "Master luthier Glenn Canin has been crafting exceptional classical guitars since 1985. Learn about his journey, philosophy, and innovative double top construction techniques.",
  openGraph: {
    title: "About Glenn Canin | Master Classical Guitar Luthier",
    description: "Discover the craftsmanship and innovation behind Glenn Canin's world-renowned classical and double top guitars. Four decades of excellence in guitar making.",
  },
};

// Revalidate every 60 seconds
export const revalidate = 60;

export default async function AboutPage() {
  // Fetch CMS content
  const aboutContent = await getAboutPageContent();

  return <AboutContent aboutContent={aboutContent} />;
}
