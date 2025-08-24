'use client';

import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";
import OptimizedImage from "@/components/ui/OptimizedImage";

interface Player {
  name?: string;
  photo?: string;
  bio?: string;
  website?: string;
}

interface PlayersContent {
  pageTitle?: string;
  pageDescription?: string;
  featuredPlayersTitle?: string;
  allPlayersTitle?: string;
  players?: Player[];
  ctaSectionTitle?: string;
  ctaSectionDescription?: string;
  [key: string]: unknown;
}

interface PlayersContentProps {
  playersContent: PlayersContent | null;
}

export default function PlayersContent({ playersContent }: PlayersContentProps) {
  // Extract data from CMS with fallbacks
  const pageTitle = playersContent?.pageTitle || "Professional Players";
  const pageDescription = playersContent?.pageDescription || "Meet the world-class musicians who choose Glenn Canin guitars for their professional performances and recordings.";
  const allPlayersTitle = playersContent?.allPlayersTitle || "All Artists";
  const ctaSectionTitle = playersContent?.ctaSectionTitle || "Join Our Artist Family";
  const ctaSectionDescription = playersContent?.ctaSectionDescription || "Interested in becoming a Glenn Canin artist? We work with musicians who appreciate exceptional craftsmanship and tonal excellence.";
  const players = playersContent?.players || [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white dark:from-stone-800 dark:to-stone-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/images/musical-notes.svg')] opacity-5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <FadeIn className="text-center mb-16">
          <h1 className="text-5xl font-cinzel font-bold text-stone-900 dark:text-stone-100 mb-6">
            {pageTitle}
          </h1>
          <p className="text-xl text-stone-600 dark:text-stone-300 max-w-3xl mx-auto">
            {pageDescription}
          </p>
        </FadeIn>

        {/* All Players */}
        {players.length > 0 && (
          <>
            <h2 className="text-3xl font-cinzel font-bold text-stone-900 dark:text-stone-100 mb-8 text-center">{allPlayersTitle}</h2>
            <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {players.map((player, index) => (
                <PlayerCard key={`${player.name}-${index}`} player={player} />
              ))}
            </StaggerChildren>
          </>
        )}

        <FadeIn className="mt-16">
          <motion.div 
            className="bg-stone-900 dark:bg-stone-800 text-white rounded-lg p-8 text-center"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-cinzel mb-4">{ctaSectionTitle}</h3>
            <p className="text-stone-200 dark:text-stone-300 mb-6 max-w-2xl mx-auto">
              {ctaSectionDescription}
            </p>
            <motion.a 
              href="/contact"
              className="inline-block bg-amber-600 dark:bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 dark:hover:bg-amber-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </FadeIn>
      </div>
    </div>
  );
}

interface PlayerCardProps {
  player: Player;
}

function PlayerCard({ player }: PlayerCardProps) {
  return (
    <StaggerItem>
      <motion.div
        className="group bg-white dark:bg-stone-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
        whileHover={{ y: -5, scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative h-64 overflow-hidden">
          <OptimizedImage
            src={player.photo || "/images/player-placeholder.jpg"}
            alt={player.name || "Musician"}
            className="w-full h-full object-cover"
          />
          
          
          {/* Overlay effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          />
        </div>
        
        <motion.div 
          className="p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="font-cinzel text-xl font-semibold text-stone-900 dark:text-stone-100 mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
            {player.name}
          </h3>
          
          {player.bio && (
            <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed mb-4 line-clamp-3">
              {player.bio}
            </p>
          )}
          
          {player.website && (
            <motion.a
              href={player.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 text-sm font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Visit Website →
            </motion.a>
          )}
        </motion.div>
      </motion.div>
    </StaggerItem>
  );
}