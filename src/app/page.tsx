import Hero from "@/components/Hero";
import FeaturedGuitars from "@/components/FeaturedGuitars";
import AboutPreview from "@/components/AboutPreview";
import ContactSection from "@/components/ContactSection";
import { getPageContent, getGuitars } from "@/lib/markdown";

export default async function Home() {
  // Fetch CMS content
  const homePageContent = getPageContent('home');
  const allGuitars = getGuitars();
  const featuredGuitars = allGuitars.filter(guitar => guitar.data.featured);

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