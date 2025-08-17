import PlayersContent from "./PlayersContent";
import { getPlayers } from "@/lib/markdown";

export default async function PlayersPage() {
  // Fetch players from CMS
  const allPlayers = getPlayers();

  return <PlayersContent players={allPlayers} />;
}