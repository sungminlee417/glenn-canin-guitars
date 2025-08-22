import { getFooterSettings } from "@/lib/cms";
import FooterClient from "./FooterClient";

export default async function FooterWrapper() {
  const footerContent = await getFooterSettings();
  
  return <FooterClient footerContent={footerContent} />;
}