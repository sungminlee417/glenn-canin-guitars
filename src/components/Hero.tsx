import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[70vh] md:h-[80vh] lg:h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 z-10" />
      
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-gray-800" />
      
      <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Glenn Canin
        </h1>
        <p className="font-cinzel text-2xl md:text-3xl lg:text-4xl mb-6">
          Concert Doubletop Classical Guitars
        </p>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Handcrafted instruments of exceptional quality for discerning musicians worldwide
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/gallery"
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
          >
            View Gallery
          </Link>
          <Link
            href="/contact"
            className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-gray-900 transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}