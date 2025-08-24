import ContactContent from "./ContactContent";
import { getContactPageContent } from "@/lib/cms";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Glenn Canin",
  description: "Contact master luthier Glenn Canin in Mill Valley, CA. Commission a custom classical or double top guitar. Workshop visits by appointment. Phone: 415-407-1191",
  openGraph: {
    title: "Contact | Glenn Canin Guitars",
    description: "Get in touch with Glenn Canin to discuss your custom guitar needs. Located in Mill Valley, California. Workshop visits available by appointment.",
  },
};

// Revalidate every 60 seconds
export const revalidate = 60;

export default async function ContactPage() {
  // Fetch CMS content
  const contactContent = await getContactPageContent();

  return <ContactContent contactContent={contactContent} />;
}