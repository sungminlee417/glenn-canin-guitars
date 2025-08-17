import PlayersContent from "./PlayersContent";
import { getPlayers } from "@/lib/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Players",
  description: "World-renowned classical guitarists who perform on Glenn Canin guitars. Discover the artists who trust Glenn Canin instruments for their professional performances.",
  openGraph: {
    title: "Artists & Players | Glenn Canin Guitars",
    description: "Meet the professional classical guitarists who choose Glenn Canin guitars for concerts, recordings, and performances worldwide.",
  },
};

export default async function PlayersPage() {
  // Fetch players from CMS
  const allPlayers = getPlayers();

  return <PlayersContent players={allPlayers} />;
}