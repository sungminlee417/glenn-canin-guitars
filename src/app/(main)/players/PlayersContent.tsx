'use client';

import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";

interface Player {
  name?: string;
  photo?: string;
  testimonial?: string;
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

function PlayerCard({ player }: { player: Player }) {
  return (
    <StaggerItem>
      <article className="grid grid-cols-12 gap-6 lg:gap-8 pb-16 border-b border-brand-rule/50 last:border-b-0">
        <div className="col-span-4 md:col-span-3">
          <div className="relative aspect-[3/4] w-full overflow-hidden bg-brand-cream-deep dark:bg-stone-800">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={player.photo || "/images/player-placeholder.jpg"}
              alt={player.name || "Musician"}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="col-span-8 md:col-span-9 flex flex-col justify-center">
          <h3 className="font-cinzel text-2xl md:text-3xl font-normal text-brand-ink dark:text-brand-cream leading-tight mb-4">
            {player.name}
          </h3>

          {player.testimonial && (
            <blockquote className="text-lg text-brand-ink-soft dark:text-brand-cream/85 leading-[1.7] font-light italic mb-6 border-l-2 border-brand-walnut/60 pl-6">
              &ldquo;{player.testimonial}&rdquo;
            </blockquote>
          )}

          {player.website && (
            <a
              href={player.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 font-cinzel text-[10px] tracking-[0.24em] uppercase text-brand-forest dark:text-brand-forest-light hover:text-brand-ink dark:hover:text-brand-cream transition-colors self-start"
            >
              Visit Website
              <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1">
                →
              </span>
            </a>
          )}
        </div>
      </article>
    </StaggerItem>
  );
}

export default function PlayersContent({ playersContent }: PlayersContentProps) {
  const pageTitle = playersContent?.pageTitle || "The Musicians";
  const pageDescription = playersContent?.pageDescription || "Artists around the world who play a Glenn Canin instrument on stage and in the studio.";
  const ctaSectionTitle = playersContent?.ctaSectionTitle || "Considering a Commission?";
  const ctaSectionDescription = playersContent?.ctaSectionDescription || "I welcome conversations with musicians who value handcrafted instruments and tonal excellence.";
  const players = playersContent?.players || [];

  return (
    <div className="bg-brand-cream dark:bg-stone-950 pt-24 pb-24 lg:pt-32 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeIn className="mb-20 lg:mb-28 max-w-3xl">
          <p className="font-cinzel text-[11px] tracking-[0.28em] text-brand-forest dark:text-brand-forest-light uppercase mb-6">
            Artists
          </p>
          <h1 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-normal text-brand-ink dark:text-brand-cream leading-[1.1] tracking-tight mb-8">
            {pageTitle}
          </h1>
          <div className="h-px w-16 bg-brand-walnut/60 dark:bg-brand-cream/30 mb-8" />
          <p className="text-lg text-brand-ink-soft dark:text-brand-cream/85 leading-[1.7] font-light">
            {pageDescription}
          </p>
        </FadeIn>

        {players.length > 0 && (
          <StaggerChildren className="space-y-16 mb-24">
            {players.map((player, index) => (
              <PlayerCard key={`${player.name}-${index}`} player={player} />
            ))}
          </StaggerChildren>
        )}

        <FadeIn className="mt-24 pt-16 border-t border-brand-rule/50">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5">
              <p className="font-cinzel text-[11px] tracking-[0.28em] text-brand-forest dark:text-brand-forest-light uppercase mb-6">
                Get In Touch
              </p>
              <h2 className="font-cinzel text-3xl md:text-4xl font-normal text-brand-ink dark:text-brand-cream leading-tight tracking-tight">
                {ctaSectionTitle}
              </h2>
            </div>
            <div className="lg:col-span-7 flex flex-col justify-between">
              <p className="text-lg text-brand-ink-soft dark:text-brand-cream/85 leading-[1.7] font-light mb-8">
                {ctaSectionDescription}
              </p>
              <a
                href="/contact"
                className="group inline-flex items-center gap-3 border-b border-brand-ink dark:border-brand-cream pb-1 font-cinzel text-[11px] tracking-[0.28em] uppercase text-brand-ink dark:text-brand-cream hover:text-brand-forest dark:hover:text-brand-forest-light hover:border-brand-forest dark:hover:border-brand-forest-light transition-colors self-start"
              >
                Get in touch
                <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
