import ContactContent from "./ContactContent";
import { getPageContent } from "@/lib/markdown";

export default async function ContactPage() {
  // Fetch CMS content
  const contactContent = getPageContent('contact');

  return <ContactContent contactContent={contactContent} />;
}