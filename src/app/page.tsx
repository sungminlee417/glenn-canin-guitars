import Hero from "@/components/Hero";
import FeaturedGuitars from "@/components/FeaturedGuitars";
import AboutPreview from "@/components/AboutPreview";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <FeaturedGuitars />
      <ContactSection />
    </>
  );
}