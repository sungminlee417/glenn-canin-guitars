import { getGuitars } from '@/lib/markdown';
import { ShoppingCart, Info, Star } from 'lucide-react';

export default function ForSalePage() {
  const guitars = getGuitars().filter(g => g.data.available);

  // Sample data for demonstration
  const sampleGuitars = [
    {
      title: "2024 Concert Double Top",
      model: "DT-2024-01",
      type: "Double Top",
      year: 2024,
      price: "$15,500",
      available: true,
      featured: true,
      mainImage: "/images/forsale-1.jpg",
      specifications: {
        topWood: "German Spruce",
        backSides: "Indian Rosewood",
        neckWood: "Spanish Cedar",
        fingerboard: "Ebony",
        scaleLength: "650mm",
        nutWidth: "52mm",
        finish: "French Polish"
      },
      description: "Exceptional concert instrument with powerful projection and singing trebles. This guitar features our latest double top construction refinements."
    },
    {
      title: "2023 Traditional Concert Classical",
      model: "TC-2023-08",
      type: "Traditional",
      year: 2023,
      price: "$12,000",
      available: true,
      featured: false,
      mainImage: "/images/forsale-2.jpg",
      specifications: {
        topWood: "Cedar",
        backSides: "Madagascar Rosewood",
        neckWood: "Honduran Mahogany",
        fingerboard: "Ebony",
        scaleLength: "650mm",
        nutWidth: "52mm",
        finish: "French Polish"
      },
      description: "Traditional construction with warm, romantic tone. Perfect for intimate performances and recording."
    },
    {
      title: "2024 Elevated Fingerboard Special",
      model: "EF-2024-03",
      type: "Double Top",
      year: 2024,
      price: "$18,000",
      available: true,
      featured: true,
      mainImage: "/images/forsale-3.jpg",
      specifications: {
        topWood: "European Spruce",
        backSides: "Brazilian Rosewood",
        neckWood: "Spanish Cedar",
        fingerboard: "Ebony with elevated extension",
        scaleLength: "650mm",
        nutWidth: "52mm",
        finish: "French Polish"
      },
      description: "Premium concert guitar with elevated fingerboard for extended range. Features rare Brazilian rosewood and exceptional craftsmanship."
    },
    {
      title: "2023 Student Concert Model",
      model: "SC-2023-12",
      type: "Traditional",
      year: 2023,
      price: "$8,500",
      available: true,
      featured: false,
      mainImage: "/images/forsale-4.jpg",
      specifications: {
        topWood: "Cedar",
        backSides: "Indian Rosewood",
        neckWood: "Spanish Cedar",
        fingerboard: "Ebony",
        scaleLength: "640mm",
        nutWidth: "50mm",
        finish: "French Polish"
      },
      description: "Excellent instrument for advancing students and professionals seeking a smaller scale length. Outstanding value."
    }
  ];

  const displayGuitars = guitars.length > 0 ? guitars : sampleGuitars;

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-cinzel font-bold text-stone-900 mb-6">
            Guitars For Sale
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Explore our collection of available guitars. Each instrument is meticulously 
            crafted and ready to inspire your musical journey.
          </p>
        </div>

        <div className="mb-8 bg-amber-50 border border-amber-200 rounded-lg p-6">
          <div className="flex items-start">
            <Info className="w-5 h-5 text-amber-600 mt-0.5 mr-3 flex-shrink-0" />
            <div className="text-sm text-amber-800">
              <p className="font-semibold mb-1">Availability Notice</p>
              <p>All guitars shown are currently available. Instruments are sold on a first-come, first-served basis. 
              Contact us to arrange a trial or to discuss purchase details.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {displayGuitars.filter(g => g.featured || g.data?.featured).map((guitar, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-2/5">
                  <div className="aspect-[3/4] bg-stone-200 relative">
                    {(guitar.mainImage || guitar.data?.mainImage) && (
                      <img 
                        src={guitar.mainImage || guitar.data?.mainImage} 
                        alt={guitar.title || guitar.data?.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                    <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm flex items-center">
                      <Star className="w-4 h-4 mr-1" fill="currentColor" />
                      Featured
                    </div>
                  </div>
                </div>
                <div className="md:w-3/5 p-8">
                  <h2 className="text-2xl font-cinzel font-bold mb-2">{guitar.title || guitar.data?.title}</h2>
                  <p className="text-sm text-stone-500 mb-4">Model: {guitar.model || guitar.data?.model}</p>
                  
                  <div className="text-3xl font-bold text-stone-900 mb-6">
                    {guitar.price || guitar.data?.price}
                  </div>

                  <p className="text-stone-600 mb-6">{guitar.description || guitar.data?.description}</p>
                  
                  {(guitar.specifications || guitar.data?.specifications) && (
                    <div className="grid grid-cols-2 gap-3 text-sm mb-6">
                      <div>
                        <span className="font-medium text-stone-700">Top:</span>
                        <span className="ml-2 text-stone-600">{guitar.specifications?.topWood || guitar.data?.specifications?.topWood}</span>
                      </div>
                      <div>
                        <span className="font-medium text-stone-700">Back/Sides:</span>
                        <span className="ml-2 text-stone-600">{guitar.specifications?.backSides || guitar.data?.specifications?.backSides}</span>
                      </div>
                      <div>
                        <span className="font-medium text-stone-700">Scale:</span>
                        <span className="ml-2 text-stone-600">{guitar.specifications?.scaleLength || guitar.data?.specifications?.scaleLength}</span>
                      </div>
                      <div>
                        <span className="font-medium text-stone-700">Nut Width:</span>
                        <span className="ml-2 text-stone-600">{guitar.specifications?.nutWidth || guitar.data?.specifications?.nutWidth}</span>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex gap-4">
                    <button className="flex-1 bg-stone-900 text-white px-6 py-3 rounded-lg hover:bg-stone-800 transition-colors flex items-center justify-center">
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Inquire About This Guitar
                    </button>
                    <button className="px-6 py-3 border border-stone-300 rounded-lg hover:bg-stone-50 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayGuitars.filter(g => !g.featured && !g.data?.featured).map((guitar, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-[3/4] bg-stone-200 relative">
                {(guitar.mainImage || guitar.data?.mainImage) && (
                  <img 
                    src={guitar.mainImage || guitar.data?.mainImage} 
                    alt={guitar.title || guitar.data?.title}
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                  Available
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-cinzel font-semibold mb-2">{guitar.title || guitar.data?.title}</h3>
                <p className="text-sm text-stone-500 mb-3">Model: {guitar.model || guitar.data?.model}</p>
                <div className="text-2xl font-bold text-stone-900 mb-4">
                  {guitar.price || guitar.data?.price}
                </div>
                {(guitar.specifications || guitar.data?.specifications) && (
                  <div className="text-sm text-stone-600 space-y-1 mb-4">
                    <p>Top: {guitar.specifications?.topWood || guitar.data?.specifications?.topWood}</p>
                    <p>Back/Sides: {guitar.specifications?.backSides || guitar.data?.specifications?.backSides}</p>
                  </div>
                )}
                <button className="w-full bg-stone-900 text-white px-4 py-2 rounded-lg hover:bg-stone-800 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-cinzel mb-6 text-center">Purchase Information</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-700">1</span>
              </div>
              <h3 className="font-semibold mb-2">Trial Period</h3>
              <p className="text-sm text-stone-600">All guitars come with a 7-day approval period in your home</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-700">2</span>
              </div>
              <h3 className="font-semibold mb-2">Worldwide Shipping</h3>
              <p className="text-sm text-stone-600">Secure, insured shipping available to any location</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-700">3</span>
              </div>
              <h3 className="font-semibold mb-2">Lifetime Support</h3>
              <p className="text-sm text-stone-600">Comprehensive warranty and ongoing support for all instruments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}