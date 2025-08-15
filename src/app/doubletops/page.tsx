import { getGuitars } from '@/lib/markdown';

export default function DoubletopsPage() {
  const guitars = getGuitars().filter(g => g.data.type === 'Double Top');

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-cinzel font-bold text-stone-900 mb-6">
            Double Top Guitars
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Glenn Canin's signature double top construction combines traditional craftsmanship 
            with innovative design, resulting in guitars with exceptional projection and tonal clarity.
          </p>
        </div>

        <div className="mb-16 prose prose-stone max-w-none">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-3xl font-cinzel mb-6">The Double Top Innovation</h2>
            <p className="text-stone-600 mb-4">
              The double top construction technique represents a significant advancement in classical 
              guitar building. By using a composite soundboard consisting of two thin plates with a 
              Nomex honeycomb core, these guitars achieve remarkable volume and projection while 
              maintaining the tonal qualities of traditional instruments.
            </p>
            <h3 className="text-2xl font-cinzel mt-8 mb-4">Benefits of Double Top Construction</h3>
            <ul className="space-y-2 text-stone-600">
              <li>• Enhanced volume and projection without sacrificing tone quality</li>
              <li>• Improved sustain and note clarity across all registers</li>
              <li>• Greater dynamic range for expressive playing</li>
              <li>• Consistent response across the entire fingerboard</li>
              <li>• Lighter weight compared to traditional construction</li>
            </ul>
            <h3 className="text-2xl font-cinzel mt-8 mb-4">Construction Process</h3>
            <p className="text-stone-600">
              Each double top guitar begins with carefully selected tonewoods. The top plates are 
              graduated to precise thicknesses, then laminated with the Nomex core using specialized 
              techniques developed over years of refinement. This process requires exceptional skill 
              and attention to detail to achieve the perfect balance of stiffness and flexibility.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guitars.length > 0 ? (
            guitars.map((guitar) => (
              <div key={guitar.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-[3/4] bg-stone-100 relative">
                  {guitar.data.mainImage && (
                    <img 
                      src={guitar.data.mainImage} 
                      alt={guitar.data.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                  {guitar.data.available && (
                    <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                      Available
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-cinzel font-semibold mb-2">{guitar.data.title}</h3>
                  <p className="text-stone-600 mb-4">Model: {guitar.data.model}</p>
                  {guitar.data.specifications && (
                    <div className="text-sm text-stone-500 space-y-1">
                      <p>Top: {guitar.data.specifications.topWood}</p>
                      <p>Back/Sides: {guitar.data.specifications.backSides}</p>
                    </div>
                  )}
                  {guitar.data.price && (
                    <p className="mt-4 text-2xl font-semibold text-stone-900">{guitar.data.price}</p>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-stone-600">Double top guitars will be displayed here once added through the CMS.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}