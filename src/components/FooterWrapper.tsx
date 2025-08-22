import { getPageContent } from "@/lib/cms";
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

export default async function FooterWrapper() {
  const footerContent = await getPageContent('footer') as FooterContent | null;
  
  return <FooterClient footerContent={footerContent} />;
}