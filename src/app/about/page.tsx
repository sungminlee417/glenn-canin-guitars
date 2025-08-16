import AboutContent from "./AboutContent";
import { getPageContent } from "@/lib/markdown";

export default async function AboutPage() {
  // Fetch CMS content
  const aboutContent = getPageContent('about');

  return <AboutContent aboutContent={aboutContent} />;
}
