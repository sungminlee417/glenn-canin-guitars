import Hero from "@/components/Hero";
import FeaturedGuitars from "@/components/FeaturedGuitars";
import AboutPreview from "@/components/AboutPreview";
import ContactSection from "@/components/ContactSection";
import { getPageContent, getFeaturedGuitars } from "@/lib/cms";

// Revalidate every 60 seconds
export const revalidate = 60;

export default async function Home() {
  // Fetch CMS content
  const homePageContent = await getPageContent('home');
  const featuredGuitars = await getFeaturedGuitars();

  return (
    <>
      <Hero homeContent={homePageContent} />
      <AboutPreview homeContent={homePageContent} />
      <FeaturedGuitars 
        featuredGuitars={featuredGuitars} 
        title={homePageContent?.data?.featuredGuitarsTitle}
      />
      <ContactSection />
    </>
  );
}