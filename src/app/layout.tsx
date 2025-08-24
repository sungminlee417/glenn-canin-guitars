import type { Metadata } from "next";
import "./globals.css";
import { cinzel, raleway } from "@/lib/fonts";
import Script from "next/script";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://glenncaninguitars.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Glenn Canin Guitars | Master Luthier Classical & Double Top Guitars",
    template: "%s | Glenn Canin Guitars"
  },
  description: "Master luthier Glenn Canin, trained under the Romero family at San Diego State, handcrafts exceptional classical and double top guitars in Mill Valley, CA. Self-taught guitar maker creating concert instruments for world-renowned performers.",
  keywords: "Glenn Canin, classical guitars, double top guitars, doubletop, concert classical guitar, handmade guitars, custom guitars, luthier, Mill Valley luthier, Bay Area guitar maker, California luthier, Romero student, San Diego State University, Adam Holzman, Charles Mokotoff, Leonardo Garcia, professional classical guitar, Spanish guitar, guitar maker, artisan guitars, concert instruments",
  authors: [{ name: "Glenn Canin" }],
  creator: "Glenn Canin",
  publisher: "Glenn Canin Guitars",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Glenn Canin Guitars | Master Luthier Classical & Double Top Guitars",
    description: "Master luthier Glenn Canin, trained under the Romero family, handcrafts exceptional classical and double top guitars in Mill Valley, CA. Concert instruments for world-renowned performers.",
    url: siteUrl,
    siteName: "Glenn Canin Guitars",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Glenn Canin handcrafted classical guitars",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Glenn Canin Guitars | Master Classical Guitar Luthier",
    description: "Handcrafted classical & double top guitars by master luthier Glenn Canin. Custom concert instruments since 1985.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": siteUrl,
    name: "Glenn Canin Guitars",
    description: "Master luthier Glenn Canin, trained under the Romero family at San Diego State University, handcrafts exceptional classical and double top guitars. Self-taught guitar maker with surfboard shaping background, creating concert instruments for world-renowned performers like Adam Holzman, Charles Mokotoff, and Leonardo Garcia.",
    url: siteUrl,
    telephone: "415-407-1191",
    email: "glenncanin@hotmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "314 Ross Drive",
      addressLocality: "Mill Valley",
      addressRegion: "CA",
      postalCode: "94941",
      addressCountry: "US"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 37.9058,
      longitude: -122.5449
    },
    image: `${siteUrl}/images/og-image.jpg`,
    priceRange: "$$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00"
    },
    sameAs: [
      "https://instagram.com/glenncaninguitars"
    ],
    founder: {
      "@type": "Person",
      name: "Glenn Canin",
      jobTitle: "Master Luthier"
    },
    foundingDate: "1985",
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Custom Classical Guitars",
      itemListElement: [
        {
          "@type": "Product",
          name: "Double Top Classical Guitar",
          description: "Innovative double top construction for enhanced projection and tonal clarity"
        },
        {
          "@type": "Product",
          name: "Traditional Classical Guitar",
          description: "Traditional Spanish guitar-making techniques with modern refinements"
        },
        {
          "@type": "Product",
          name: "Custom Concert Guitar",
          description: "Bespoke instruments tailored to professional musicians' specifications"
        }
      ]
    }
  };

  return (
    <html lang="en" className={`${cinzel.variable} ${raleway.variable}`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#d97706" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <GoogleAnalytics />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var savedTheme = localStorage.getItem('theme');
                  var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  var theme = savedTheme || systemTheme;
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="font-raleway antialiased bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}