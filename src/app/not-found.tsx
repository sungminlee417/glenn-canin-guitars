import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white dark:from-stone-800 dark:to-stone-900 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-cinzel font-bold text-stone-300 dark:text-stone-600 mb-4">404</h1>
        <h2 className="text-3xl font-cinzel font-bold text-stone-900 dark:text-stone-100 mb-4">
          Page Not Found
        </h2>
        <p className="text-stone-600 dark:text-stone-300 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist. It may have been moved or deleted.
        </p>
        <Link 
          href="/"
          className="inline-block bg-amber-600 dark:bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 dark:hover:bg-amber-600 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}