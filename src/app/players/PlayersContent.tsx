'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Guitar } from 'lucide-react';
import FadeIn from '@/components/animations/FadeIn';
import StaggerChildren, { StaggerItem } from '@/components/animations/StaggerChildren';
import OptimizedImage from '@/components/ui/OptimizedImage';

interface Player {
  slug: string;
  data: {
    name?: string;
    photo?: string;
    bio?: string;
    website?: string;
    featured?: boolean;
    guitars?: (string | { model?: string; year?: number; description?: string })[];
    [key: string]: unknown;
  };
  content: string;
}

interface PlayersContentProps {
  players: Player[];
}

export default function PlayersContent({ players }: PlayersContentProps) {
  const featuredPlayers = players.filter(player => player.data.featured);
  const regularPlayers = players.filter(player => !player.data.featured);

  // Sample data if no CMS players available
  const samplePlayers = [
    {
      slug: "sample-player",
      data: {
        name: "David Russell",
        photo: "/images/players/david-russell.jpg",
        bio: "Grammy Award-winning classical guitarist known for his technical brilliance and musical sensitivity.",
        website: "https://davidrussellguitar.com",
        featured: true,
        guitars: [
          { model: "Concert Classical", year: 2023, description: "Cedar top with rosewood back" },
          { model: "Spruce Top Classical", year: 2024, description: "Spruce top with maple back" }
        ]
      },
      content: ""
    }
  ];

  const displayFeatured = featuredPlayers.length > 0 ? featuredPlayers : samplePlayers.filter(p => p.data.featured);
  const displayRegular = regularPlayers.length > 0 ? regularPlayers : samplePlayers.filter(p => !p.data.featured);

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/images/music-pattern.svg')] opacity-5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <FadeIn className="text-center mb-16">
          <h1 className="text-5xl font-cinzel font-bold text-stone-900 mb-6">
            Notable Players
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Discover the artists who have chosen Glenn Canin guitars to express their musical vision. 
            Each player brings their unique style and artistry to our instruments.
          </p>
        </FadeIn>

        {/* Featured Players */}
        {displayFeatured.length > 0 && (
          <>
            <h2 className="text-3xl font-cinzel font-bold text-stone-900 mb-8 text-center">Featured Artists</h2>
            <StaggerChildren className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16" staggerDelay={0.15}>
              {displayFeatured.map((player, index) => (
                <StaggerItem key={player.slug}>
                  <motion.div 
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                    whileHover={{ y: -2, scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="md:flex">
                      <div className="md:w-2/5">
                        <div className="aspect-square bg-stone-200 relative overflow-hidden">
                          <OptimizedImage 
                            src={player.data.photo || "/images/player-placeholder.jpg"} 
                            alt={player.data.name || "Player"}
                            className="w-full h-full object-cover"
                            priority={index === 0}
                          />
                        </div>
                      </div>
                      <div className="md:w-3/5 p-6">
                        <div className="mb-4">
                          <h2 className="text-2xl font-cinzel font-bold mb-2">{player.data.name}</h2>
                        </div>
                        
                        <p className="text-stone-600 mb-4 text-sm leading-relaxed">{player.data.bio}</p>
                        
                        {player.data.guitars && player.data.guitars.length > 0 && (
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-stone-700 mb-2 flex items-center">
                              <Guitar className="w-4 h-4 mr-1" />
                              Glenn Canin Guitars
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {player.data.guitars.map((guitar, guitarIndex) => (
                                <span 
                                  key={guitarIndex}
                                  className="px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-md"
                                >
                                  {typeof guitar === 'string' ? guitar : guitar.model || 'Glenn Canin Guitar'}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {player.data.website && (
                          <motion.a
                            href={player.data.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors text-sm font-medium"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ duration: 0.1 }}
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Visit Website
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </>
        )}

        {/* Regular Players */}
        {displayRegular.length > 0 && (
          <>
            <h2 className="text-3xl font-cinzel font-bold text-stone-900 mb-8 text-center">All Players</h2>
            <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
              {displayRegular.map((player) => (
                <StaggerItem key={player.slug}>
                  <motion.div 
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="aspect-square bg-stone-200 relative overflow-hidden">
                      <OptimizedImage 
                        src={player.data.photo || "/images/player-placeholder.jpg"} 
                        alt={player.data.name || "Player"}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-cinzel font-semibold text-stone-900 mb-2">{player.data.name}</h3>
                      <p className="text-stone-600 text-sm mb-4 line-clamp-3">{player.data.bio}</p>
                      
                      {player.data.guitars && player.data.guitars.length > 0 && (
                        <div className="mb-4">
                          <p className="text-xs text-stone-500 mb-1">Plays Glenn Canin:</p>
                          <div className="flex flex-wrap gap-1">
                            {player.data.guitars.slice(0, 2).map((guitar, guitarIndex) => (
                              <span 
                                key={guitarIndex}
                                className="px-2 py-1 bg-amber-50 text-amber-700 text-xs rounded"
                              >
                                {typeof guitar === 'string' ? guitar : guitar.model || 'Glenn Canin Guitar'}
                              </span>
                            ))}
                            {player.data.guitars.length > 2 && (
                              <span className="px-2 py-1 bg-stone-100 text-stone-600 text-xs rounded">
                                +{player.data.guitars.length - 2} more
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                      
                      {player.data.website && (
                        <motion.a
                          href={player.data.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors text-sm font-medium"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ duration: 0.1 }}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Visit Website
                        </motion.a>
                      )}
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </>
        )}

        {/* No players available message */}
        {players.length === 0 && (
          <div className="text-center py-16">
            <h2 className="text-2xl font-cinzel font-bold text-stone-900 mb-4">Player Profiles Coming Soon</h2>
            <p className="text-stone-600 mb-8">We&apos;re currently updating our player profiles. Check back soon to learn about the artists who play Glenn Canin guitars.</p>
            <motion.a
              href="/contact"
              className="inline-block bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>
          </div>
        )}

        {/* Call to Action */}
        <FadeIn delay={0.4} className="mt-16 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-cinzel mb-6 text-center">Join Our Community</h2>
          <p className="text-center text-stone-600 mb-6 max-w-2xl mx-auto">
            Are you a professional guitarist who plays a Glenn Canin guitar? We&apos;d love to feature your story and share your music with our community.
          </p>
          <div className="text-center">
            <motion.a
              href="/contact"
              className="inline-block bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}