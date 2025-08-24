import Header from "@/components/Header";
import FooterWrapper from "@/components/FooterWrapper";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <FooterWrapper />
    </>
  );
}