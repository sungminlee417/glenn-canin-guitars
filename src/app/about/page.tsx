import AboutContent from "./AboutContent";
import { getPageContent } from "@/lib/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Glenn Canin",
  description: "Master luthier Glenn Canin has been crafting exceptional classical guitars since 1985. Learn about his journey, philosophy, and innovative double top construction techniques.",
  openGraph: {
    title: "About Glenn Canin | Master Classical Guitar Luthier",
    description: "Discover the craftsmanship and innovation behind Glenn Canin's world-renowned classical and double top guitars. Four decades of excellence in guitar making.",
  },
};

export default async function AboutPage() {
  // Fetch CMS content
  const aboutContent = getPageContent('about');

  return <AboutContent aboutContent={aboutContent} />;
}
