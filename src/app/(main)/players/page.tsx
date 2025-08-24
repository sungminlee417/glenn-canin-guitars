import PlayersContent from "./PlayersContent";
import { getPlayersPageContent } from "@/lib/sanity";
import { Metadata } from "next";

// Revalidate every 60 seconds
export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const playersContent = await getPlayersPageContent();
  
  const title = playersContent?.title || 'Professional Players';
  const description = playersContent?.pageDescription || 'World-renowned classical guitarists who perform on Glenn Canin guitars. Discover the artists who trust Glenn Canin instruments for their professional performances.';

  return {
    title,
    description,
    openGraph: {
      title: `${title} | Glenn Canin Guitars`,
      description,
    },
  };
}

export default async function PlayersPage() {
  // Fetch CMS content including players
  const playersContent = await getPlayersPageContent();

  return <PlayersContent playersContent={playersContent} />;
}