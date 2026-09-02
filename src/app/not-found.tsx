import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-cream dark:bg-stone-950 flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <p className="font-cinzel text-[11px] tracking-[0.28em] text-brand-forest dark:text-brand-forest-light uppercase mb-8">
          404
        </p>
        <h1 className="font-cinzel text-4xl md:text-5xl font-normal text-brand-ink dark:text-brand-cream leading-[1.1] tracking-tight mb-8">
          Page Not Found
        </h1>
        <div className="h-px w-16 bg-brand-walnut/60 dark:bg-brand-cream/30 mx-auto mb-8" />
        <p className="text-lg text-brand-ink-soft dark:text-brand-cream/85 leading-[1.7] font-light mb-10">
          The page you&apos;re looking for doesn&apos;t exist, or has moved elsewhere in the workshop.
        </p>
        <Link
          href="/"
          className="group inline-flex items-center gap-3 border-b border-brand-ink dark:border-brand-cream pb-1 font-cinzel text-[11px] tracking-[0.28em] uppercase text-brand-ink dark:text-brand-cream hover:text-brand-forest dark:hover:text-brand-forest-light hover:border-brand-forest dark:hover:border-brand-forest-light transition-colors"
        >
          Return home
          <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </div>
  );
}
