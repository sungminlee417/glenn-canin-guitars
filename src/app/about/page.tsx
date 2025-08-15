
export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-cinzel text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
          About Glenn Canin
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="font-cinzel text-2xl font-semibold mb-4">My Journey</h2>
              <p className="text-gray-600 mb-4">
                I began my journey as a luthier in 1985, driven by a passion for creating instruments 
                that could truly sing. Over nearly four decades, I have refined my craft, studying 
                under master builders and developing my own innovations in classical guitar construction.
              </p>
              <p className="text-gray-600 mb-4">
                My workshop has produced over 150 instruments, each one carefully crafted to meet 
                the unique needs and preferences of professional musicians worldwide. From concert 
                halls in Europe to recording studios in America, my guitars have found homes with 
                artists who demand the very best.
              </p>
            </div>
            
            <div className="relative h-96 bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-32 h-32 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="font-cinzel text-2xl font-semibold mb-4">Philosophy</h2>
            <p className="text-gray-600 mb-4">
              I believe that a great guitar is more than just wood and strings – it's a partner 
              in musical expression. Every instrument I build is designed to inspire, to respond 
              to the subtlest touch, and to project with clarity and power.
            </p>
            <p className="text-gray-600 mb-4">
              My approach combines traditional Spanish guitar-making techniques with modern 
              innovations like the doubletop construction, which provides exceptional volume 
              and sustain while maintaining the warmth and complexity of tone that classical 
              guitarists cherish.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="font-cinzel text-2xl font-semibold mb-4">Awards & Recognition</h2>
            <ul className="space-y-2 text-gray-600">
              <li>• Featured in Classical Guitar Magazine</li>
              <li>• Instruments played by international competition winners</li>
              <li>• Selected for major guitar exhibitions worldwide</li>
              <li>• Endorsed by leading classical guitarists</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}