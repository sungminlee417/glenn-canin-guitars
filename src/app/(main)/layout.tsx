import HeaderWrapper from "@/components/HeaderWrapper";
import FooterWrapper from "@/components/FooterWrapper";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeaderWrapper />
      <main className="min-h-screen pt-16">
        {children}
      </main>
      <FooterWrapper />
    </>
  );
}