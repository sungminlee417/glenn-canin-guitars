"use client";

import { useState } from "react";

const guitars = [
  {
    id: 1,
    name: "Cedar Doubletop #127",
    year: "2024",
    image: "/images/guitar-1.jpg",
    specs: {
      top: "European Spruce",
      back: "Indian Rosewood",
      sides: "Indian Rosewood",
      scale: "650mm",
      nut: "52mm",
    },
  },
  {
    id: 2,
    name: "Spruce Doubletop #126",
    year: "2024",
    image: "/images/guitar-2.jpg",
    specs: {
      top: "Cedar",
      back: "Brazilian Rosewood",
      sides: "Brazilian Rosewood",
      scale: "650mm",
      nut: "52mm",
    },
  },
  {
    id: 3,
    name: "Custom Doubletop #125",
    year: "2023",
    image: "/images/guitar-3.jpg",
    specs: {
      top: "Redwood",
      back: "Madagascar Rosewood",
      sides: "Madagascar Rosewood",
      scale: "640mm",
      nut: "51mm",
    },
  },
  {
    id: 4,
    name: "Concert Model #124",
    year: "2023",
    image: "/images/guitar-4.jpg",
    specs: {
      top: "German Spruce",
      back: "Cocobolo",
      sides: "Cocobolo",
      scale: "650mm",
      nut: "52mm",
    },
  },
  {
    id: 5,
    name: "Special Edition #123",
    year: "2023",
    image: "/images/guitar-5.jpg",
    specs: {
      top: "Engelmann Spruce",
      back: "African Blackwood",
      sides: "African Blackwood",
      scale: "650mm",
      nut: "52mm",
    },
  },
  {
    id: 6,
    name: "Anniversary Model #122",
    year: "2023",
    image: "/images/guitar-6.jpg",
    specs: {
      top: "Cedar",
      back: "Ziricote",
      sides: "Ziricote",
      scale: "650mm",
      nut: "52mm",
    },
  },
];

export default function GalleryPage() {
  const [selectedGuitar, setSelectedGuitar] = useState<typeof guitars[0] | null>(null);

  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-cinzel text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
          Guitar Gallery
        </h1>
        
        <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
          Browse through my collection of handcrafted classical guitars. Each instrument 
          represents countless hours of meticulous work and attention to detail.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guitars.map((guitar) => (
            <div
              key={guitar.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setSelectedGuitar(guitar)}
            >
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
                <div className="text-sm text-gray-600">
                  <p>Top: {guitar.specs.top}</p>
                  <p>Back/Sides: {guitar.specs.back}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedGuitar && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedGuitar(null)}>
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="font-cinzel text-2xl font-bold text-gray-900">
                    {selectedGuitar.name}
                  </h2>
                  <button
                    onClick={() => setSelectedGuitar(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-32 h-32 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM21 16c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM7 9l12-3" />
                      </svg>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-4">Specifications</h3>
                    <dl className="space-y-2">
                      <div>
                        <dt className="font-medium text-gray-700">Year:</dt>
                        <dd className="text-gray-600">{selectedGuitar.year}</dd>
                      </div>
                      <div>
                        <dt className="font-medium text-gray-700">Top Wood:</dt>
                        <dd className="text-gray-600">{selectedGuitar.specs.top}</dd>
                      </div>
                      <div>
                        <dt className="font-medium text-gray-700">Back Wood:</dt>
                        <dd className="text-gray-600">{selectedGuitar.specs.back}</dd>
                      </div>
                      <div>
                        <dt className="font-medium text-gray-700">Side Wood:</dt>
                        <dd className="text-gray-600">{selectedGuitar.specs.sides}</dd>
                      </div>
                      <div>
                        <dt className="font-medium text-gray-700">Scale Length:</dt>
                        <dd className="text-gray-600">{selectedGuitar.specs.scale}</dd>
                      </div>
                      <div>
                        <dt className="font-medium text-gray-700">Nut Width:</dt>
                        <dd className="text-gray-600">{selectedGuitar.specs.nut}</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}