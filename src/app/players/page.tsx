"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren, {
  StaggerItem,
} from "@/components/animations/StaggerChildren";

export default function PlayersPage() {
  const samplePlayers = [
    {
      name: "David Russell",
      photo: "/images/player-1.jpg",
      bio: "Grammy Award-winning classical guitarist David Russell has been playing Glenn Canin guitars since 2015. Known for his expressive interpretations and technical mastery, Russell has performed in the world's most prestigious concert halls.",
      guitars: [
        {
          model: "Double Top Concert 2015",
          year: 2015,
          description: "Cedar top with Indian Rosewood",
        },
        {
          model: "Traditional Concert 2018",
          year: 2018,
          description: "Spruce top with Brazilian Rosewood",
        },
      ],
      website: "https://davidrussellguitar.com",
      featured: true,
    },
    {
      name: "Ana Vidovic",
      photo: "/images/player-2.jpg",
      bio: "Croatian virtuoso Ana Vidovic is renowned for her beautiful tone and musical sensitivity. She has been performing on Glenn Canin guitars for over a decade, praising their exceptional projection and tonal palette.",
      guitars: [
        {
          model: "Double Top 2012",
          year: 2012,
          description: "Spruce top with Madagascar Rosewood",
        },
      ],
      website: "https://anavidovic.com",
      featured: true,
    },
    {
      name: "Jason Vieaux",
      photo: "/images/player-3.jpg",
      bio: "Grammy-winning guitarist Jason Vieaux is acclaimed as one of the most sought-after performers of his generation. His Glenn Canin guitar has been his primary concert instrument for numerous recordings and performances.",
      guitars: [
        {
          model: "Double Top Concert 2020",
          year: 2020,
          description: "Cedar top with Indian Rosewood",
        },
      ],
      website: "https://jasonvieaux.com",
      featured: false,
    },
    {
      name: "Marcin Dylla",
      photo: "/images/player-4.jpg",
      bio: "Polish guitarist Marcin Dylla, winner of numerous international competitions, performs exclusively on Glenn Canin guitars. His virtuosic technique and musical depth have earned him recognition as one of today's leading classical guitarists.",
      guitars: [
        {
          model: "Double Top Special Edition",
          year: 2019,
          description: "Spruce top with Cocobolo",
        },
      ],
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/images/notes-pattern.svg')] opacity-5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <FadeIn className="text-center mb-16">
          <motion.h1
            className="text-5xl font-cinzel font-bold text-stone-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Artists & Players
          </motion.h1>
          <motion.p
            className="text-xl text-stone-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            World-renowned guitarists who have chosen Glenn Canin instruments
            for their exceptional tone, playability, and craftsmanship.
          </motion.p>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {samplePlayers
            .filter((p) => p.featured)
            .map((player, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="md:flex">
                    <motion.div
                      className="md:w-1/3"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="aspect-[3/4] bg-stone-200 relative overflow-hidden">
                        <Image
                          src={player.photo}
                          alt={player.name}
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-110"
                        />
                      </div>
                    </motion.div>
                    <motion.div
                      className="md:w-2/3 p-8"
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <h2 className="text-2xl font-cinzel font-bold mb-4 text-amber-700">
                        {player.name}
                      </h2>
                      <p className="text-stone-600 mb-6 leading-relaxed">
                        {player.bio}
                      </p>

                      <div className="mb-6">
                        <h3 className="font-semibold mb-2 text-stone-900">
                          Glenn Canin Guitars:
                        </h3>
                        <ul className="space-y-2">
                          {player.guitars.map((guitar, gIndex) => (
                            <motion.li
                              key={gIndex}
                              className="text-sm text-stone-600"
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: gIndex * 0.1 + 0.3 }}
                            >
                              <span className="font-medium text-amber-600">
                                {guitar.model}
                              </span>
                              {guitar.year && ` (${guitar.year})`}
                              {guitar.description && ` - ${guitar.description}`}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {player.website && (
                        <motion.a
                          href={player.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-amber-700 hover:text-amber-800 font-medium"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          Visit Website →
                        </motion.a>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
        </StaggerChildren>

        <motion.div
          className="bg-white rounded-lg shadow-sm p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.01 }}
        >
          <motion.h2
            className="text-3xl font-cinzel mb-8 text-center text-amber-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            More Artists
          </motion.h2>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {samplePlayers
              .filter((p) => !p.featured)
              .map((player, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="text-center group"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-stone-200 relative"
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={player.photo}
                        alt={player.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </motion.div>
                    <h3 className="font-cinzel font-semibold text-lg mb-2 group-hover:text-amber-600 transition-colors">
                      {player.name}
                    </h3>
                    <p className="text-sm text-stone-600 mb-3 line-clamp-3 leading-relaxed">
                      {player.bio}
                    </p>
                    {player.website && (
                      <motion.a
                        href={player.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-amber-700 hover:text-amber-800"
                        whileHover={{ scale: 1.05 }}
                      >
                        Website →
                      </motion.a>
                    )}
                  </motion.div>
                </StaggerItem>
              ))}
          </StaggerChildren>
        </motion.div>

        <FadeIn className="mt-16">
          <motion.div
            className="bg-amber-50 rounded-lg p-8 text-center border border-amber-200"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h2
              className="text-2xl font-cinzel mb-4 text-amber-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Join Our Artist Family
            </motion.h2>
            <motion.p
              className="text-stone-600 mb-6 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              If you&apos;re a professional guitarist interested in playing a
              Glenn Canin guitar, we&apos;d love to hear from you. Contact us to
              discuss artist programs and custom instruments.
            </motion.p>
            <motion.a
              href="/contact"
              className="inline-block bg-stone-900 text-white px-8 py-3 rounded-lg hover:bg-stone-800 transition-colors"
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
