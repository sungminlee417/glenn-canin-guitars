import Link from "next/link";

const guitars = [
  {
    id: 1,
    name: "Cedar Doubletop #127",
    year: "2024",
    image: "/images/guitar-1.jpg",
    description: "European spruce top with Indian rosewood back and sides",
  },
  {
    id: 2,
    name: "Spruce Doubletop #126",
    year: "2024",
    image: "/images/guitar-2.jpg",
    description: "Cedar top with Brazilian rosewood back and sides",
  },
  {
    id: 3,
    name: "Custom Doubletop #125",
    year: "2023",
    image: "/images/guitar-3.jpg",
    description: "Redwood top with Madagascar rosewood back and sides",
  },
];

export default function FeaturedGuitars() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Instruments
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Each guitar is meticulously crafted using the finest tonewoods and traditional techniques combined with modern innovations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guitars.map((guitar) => (
            <div key={guitar.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64 bg-gradient-to-br from-gray-200 to-gray-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM21 16c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM7 9l12-3" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-cinzel text-xl font-semibold text-gray-900 mb-2">
                  {guitar.name}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{guitar.year}</p>
                <p className="text-gray-600 mb-4">{guitar.description}</p>
                <Link
                  href={`/gallery#guitar-${guitar.id}`}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            href="/gallery"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}