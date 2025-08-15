import Image from 'next/image';

export default function PlayersPage() {
  // Sample data for demonstration
  const samplePlayers = [
    {
      name: "David Russell",
      photo: "/images/player-1.jpg",
      bio: "Grammy Award-winning classical guitarist David Russell has been playing Glenn Canin guitars since 2015. Known for his expressive interpretations and technical mastery, Russell has performed in the world's most prestigious concert halls.",
      guitars: [
        { model: "Double Top Concert 2015", year: 2015, description: "Cedar top with Indian Rosewood" },
        { model: "Traditional Concert 2018", year: 2018, description: "Spruce top with Brazilian Rosewood" }
      ],
      website: "https://davidrussellguitar.com",
      featured: true
    },
    {
      name: "Ana Vidovic",
      photo: "/images/player-2.jpg",
      bio: "Croatian virtuoso Ana Vidovic is renowned for her beautiful tone and musical sensitivity. She has been performing on Glenn Canin guitars for over a decade, praising their exceptional projection and tonal palette.",
      guitars: [
        { model: "Double Top 2012", year: 2012, description: "Spruce top with Madagascar Rosewood" }
      ],
      website: "https://anavidovic.com",
      featured: true
    },
    {
      name: "Jason Vieaux",
      photo: "/images/player-3.jpg",
      bio: "Grammy-winning guitarist Jason Vieaux is acclaimed as one of the most sought-after performers of his generation. His Glenn Canin guitar has been his primary concert instrument for numerous recordings and performances.",
      guitars: [
        { model: "Double Top Concert 2020", year: 2020, description: "Cedar top with Indian Rosewood" }
      ],
      website: "https://jasonvieaux.com",
      featured: false
    },
    {
      name: "Marcin Dylla",
      photo: "/images/player-4.jpg",
      bio: "Polish guitarist Marcin Dylla, winner of numerous international competitions, performs exclusively on Glenn Canin guitars. His virtuosic technique and musical depth have earned him recognition as one of today's leading classical guitarists.",
      guitars: [
        { model: "Double Top Special Edition", year: 2019, description: "Spruce top with Cocobolo" }
      ],
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-cinzel font-bold text-stone-900 mb-6">
            Artists & Players
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            World-renowned guitarists who have chosen Glenn Canin instruments 
            for their exceptional tone, playability, and craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {samplePlayers.filter(p => p.featured).map((player, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="aspect-[3/4] bg-stone-200 relative">
                    <Image 
                      src={player.photo} 
                      alt={player.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <h2 className="text-2xl font-cinzel font-bold mb-4">{player.name}</h2>
                  <p className="text-stone-600 mb-6">{player.bio}</p>
                  
                  <div className="mb-6">
                    <h3 className="font-semibold mb-2 text-stone-900">Glenn Canin Guitars:</h3>
                    <ul className="space-y-2">
                      {player.guitars.map((guitar, gIndex) => (
                        <li key={gIndex} className="text-sm text-stone-600">
                          <span className="font-medium">{guitar.model}</span>
                          {guitar.year && ` (${guitar.year})`}
                          {guitar.description && ` - ${guitar.description}`}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {player.website && (
                    <a 
                      href={player.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-amber-700 hover:text-amber-800 font-medium"
                    >
                      Visit Website →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-3xl font-cinzel mb-8 text-center">More Artists</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {samplePlayers.filter(p => !p.featured).map((player, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-stone-200 relative">
                  <Image 
                    src={player.photo} 
                    alt={player.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-cinzel font-semibold text-lg mb-2">{player.name}</h3>
                <p className="text-sm text-stone-600 mb-3 line-clamp-3">{player.bio}</p>
                {player.website && (
                  <a 
                    href={player.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-amber-700 hover:text-amber-800"
                  >
                    Website →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-amber-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-cinzel mb-4">Join Our Artist Family</h2>
          <p className="text-stone-600 mb-6 max-w-2xl mx-auto">
            If you&apos;re a professional guitarist interested in playing a Glenn Canin guitar, 
            we&apos;d love to hear from you. Contact us to discuss artist programs and custom instruments.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-stone-900 text-white px-8 py-3 rounded-lg hover:bg-stone-800 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}