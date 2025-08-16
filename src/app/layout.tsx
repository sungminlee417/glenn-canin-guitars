import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Glenn Canin Concert Doubletop Classical Guitars",
  description: "Handcrafted concert classical guitars by master luthier Glenn Canin. Specializing in doubletop classical guitars for professional musicians.",
  keywords: "classical guitars, doubletop guitars, Glenn Canin, luthier, concert guitars, handmade guitars",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-raleway antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}