import { getPageContent } from "@/lib/markdown";
import FooterClient from "./FooterClient";

interface FooterContent {
  data: {
    companyName?: string;
    description?: string;
    phone?: string;
    email?: string;
    location?: string;
    locationNote?: string;
    establishedYear?: string;
    tagline?: string;
    country?: string;
    [key: string]: unknown;
  };
  content: string;
}

export default function FooterWrapper() {
  const footerContent = getPageContent('footer') as FooterContent | null;
  
  return <FooterClient footerContent={footerContent} />;
}