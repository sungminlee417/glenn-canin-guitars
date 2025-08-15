import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Master Luthier Since 1985
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                For nearly four decades, I have dedicated myself to the art of crafting exceptional 
                classical guitars. Each instrument represents a perfect balance between traditional 
                Spanish guitar-making techniques and innovative modern approaches.
              </p>
              <p>
                My doubletop guitars are renowned for their powerful projection, rich tonal palette, 
                and exceptional playability. Using carefully selected tonewoods and meticulous attention 
                to detail, every guitar is built to inspire musicians and enhance their artistic expression.
              </p>
              <p>
                From my workshop in the heart of the countryside, I work closely with professional 
                musicians worldwide to create instruments that meet their exacting standards and help 
                them achieve their musical goals.
              </p>
            </div>
            <Link
              href="/about"
              className="inline-block mt-6 text-blue-600 hover:text-blue-800 font-medium"
            >
              Learn More About My Craft →
            </Link>
          </div>
          
          <div className="relative h-96 lg:h-full min-h-[400px] bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-32 h-32 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}