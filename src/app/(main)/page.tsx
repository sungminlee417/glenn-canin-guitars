import Hero from "@/components/Hero";
import FeaturedGuitars from "@/components/FeaturedGuitars";
import AboutPreview from "@/components/AboutPreview";
import { getHomePageContent, getForSalePageContent } from "@/lib/cms";

export const revalidate = 60;

export default async function Home() {
  const homePageContent = await getHomePageContent();
  const forSaleContent = await getForSalePageContent();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const rawGuitars: any[] = forSaleContent?.data?.guitars ?? [];
  const featuredGuitars = rawGuitars.slice(0, 3).map((g, i) => ({
    slug: g.slug?.current ?? g.slug ?? `guitar-${i}`,
    data: {
      title: g.title,
      year: g.year,
      mainImage: g.mainImage,
      description: g.description,
    },
    content: "",
  }));

  return (
    <>
      <Hero homeContent={homePageContent} />
      {featuredGuitars.length > 0 && (
        <FeaturedGuitars
          featuredGuitars={featuredGuitars}
          title={homePageContent?.data?.featuredTitle as string | undefined}
          description={homePageContent?.data?.featuredDescription as string | undefined}
          buttonText="View all instruments"
        />
      )}
      <AboutPreview homeContent={homePageContent} />
    </>
  );
}
