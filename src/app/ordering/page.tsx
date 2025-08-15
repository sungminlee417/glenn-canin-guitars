import { getPageContent } from '@/lib/markdown';
import { CheckCircle, Clock, CreditCard, Package, Palette, FileText } from 'lucide-react';

export default function OrderingPage() {
  const pageContent = getPageContent('ordering');
  
  // Use CMS content if available, otherwise use default content
  const processSteps = pageContent?.data?.processSteps || [
    {
      stepNumber: 1,
      title: "Initial Consultation",
      description: "Discuss your needs, preferences, and specifications for your custom guitar"
    },
    {
      stepNumber: 2,
      title: "Wood Selection",
      description: "Choose from our collection of premium tonewoods for your instrument"
    },
    {
      stepNumber: 3,
      title: "Design Confirmation",
      description: "Finalize all specifications and aesthetic details"
    },
    {
      stepNumber: 4,
      title: "Deposit",
      description: "50% deposit required to begin construction"
    },
    {
      stepNumber: 5,
      title: "Construction",
      description: "Your guitar is carefully crafted over 3-4 months"
    },
    {
      stepNumber: 6,
      title: "Final Payment & Delivery",
      description: "Balance due upon completion, shipping or pickup arranged"
    }
  ];

  const icons = [FileText, Palette, CheckCircle, CreditCard, Clock, Package];

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-cinzel font-bold text-stone-900 mb-6">
            Custom Guitar Ordering
          </h1>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Commission a guitar tailored to your exact specifications. 
            Each instrument is a unique collaboration between luthier and musician.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-cinzel text-center mb-12">The Ordering Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step: {stepNumber: number; title: string; description: string}, index: number) => {
              const Icon = icons[index] || CheckCircle;
              return (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 relative">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.stepNumber}
                  </div>
                  <div className="ml-4">
                    <Icon className="w-8 h-8 text-amber-700 mb-3" />
                    <h3 className="text-xl font-cinzel font-semibold mb-3">{step.title}</h3>
                    <p className="text-stone-600">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-cinzel mb-6">Wood Selection</h2>
            <p className="text-stone-600 mb-6">
              Choose from our carefully curated collection of premium tonewoods. 
              Each piece is hand-selected for its acoustic properties and visual beauty.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Soundboard Options</h3>
                <ul className="text-sm text-stone-600 space-y-1">
                  <li>• European Spruce (German, Swiss, Italian)</li>
                  <li>• Engelmann Spruce</li>
                  <li>• Western Red Cedar</li>
                  <li>• Redwood (limited availability)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Back & Sides Options</h3>
                <ul className="text-sm text-stone-600 space-y-1">
                  <li>• Indian Rosewood</li>
                  <li>• Brazilian Rosewood (CITES certified)</li>
                  <li>• Madagascar Rosewood</li>
                  <li>• Cocobolo</li>
                  <li>• Cypress</li>
                  <li>• Maple (European or North American)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-cinzel mb-6">Customization Options</h2>
            <p className="text-stone-600 mb-6">
              Every aspect of your guitar can be tailored to your preferences, 
              from practical specifications to aesthetic details.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Specifications</h3>
                <ul className="text-sm text-stone-600 space-y-1">
                  <li>• Scale length (640mm - 664mm)</li>
                  <li>• Nut width (50mm - 54mm)</li>
                  <li>• Neck profile and thickness</li>
                  <li>• String spacing at bridge</li>
                  <li>• Action height preferences</li>
                  <li>• Elevated fingerboard option</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Aesthetic Options</h3>
                <ul className="text-sm text-stone-600 space-y-1">
                  <li>• Custom rosette design</li>
                  <li>• Binding materials and patterns</li>
                  <li>• Purfling details</li>
                  <li>• Tuning machine selection</li>
                  <li>• French polish or lacquer finish</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-cinzel mb-6 text-center">Pricing & Timeline</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-semibold mb-3">Starting Prices</h3>
              <p className="text-3xl font-bold text-amber-700 mb-2">$8,000</p>
              <p className="text-sm text-stone-600">Traditional Construction</p>
              <p className="text-3xl font-bold text-amber-700 mb-2 mt-4">$12,000</p>
              <p className="text-sm text-stone-600">Double Top Construction</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Build Timeline</h3>
              <p className="text-3xl font-bold text-amber-700 mb-2">3-4 Months</p>
              <p className="text-sm text-stone-600">Standard build time</p>
              <p className="text-sm text-stone-500 mt-3">Current wait time may vary based on order backlog</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Payment Terms</h3>
              <p className="text-3xl font-bold text-amber-700 mb-2">50%</p>
              <p className="text-sm text-stone-600">Deposit to begin</p>
              <p className="text-sm text-stone-500 mt-3">Balance due upon completion</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-cinzel mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Can I visit the workshop during construction?</h3>
              <p className="text-stone-600">Yes, workshop visits can be arranged by appointment. Many clients enjoy seeing their guitar in various stages of construction.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Do you offer payment plans?</h3>
              <p className="text-stone-600">Payment plans are available for qualifying customers. Please inquire for details.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">What is included with the guitar?</h3>
              <p className="text-stone-600">Each guitar comes with a custom-fitted hardshell case, certificate of authenticity, care instructions, and lifetime support.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Can you replicate a specific guitar?</h3>
              <p className="text-stone-600">While each guitar is unique, we can work to match specific tonal goals or replicate successful design elements from previous builds.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">What is your warranty policy?</h3>
              <p className="text-stone-600">All guitars come with a limited lifetime warranty to the original owner, covering defects in materials and workmanship.</p>
            </div>
          </div>
        </div>

        <div className="text-center bg-stone-900 text-white rounded-lg p-12">
          <h2 className="text-3xl font-cinzel mb-6">Begin Your Custom Guitar Journey</h2>
          <p className="text-xl mb-8 text-stone-200 max-w-2xl mx-auto">
            Ready to commission your dream guitar? Contact us to schedule a consultation 
            and begin the exciting process of creating your perfect instrument.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-700 transition-colors"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </div>
  );
}