import { getNavigationSettings } from "@/lib/cms";
import HeaderClient from "./HeaderClient";

export default async function HeaderWrapper() {
  const navigationSettings = await getNavigationSettings();
  
  return <HeaderClient navigationSettings={navigationSettings} />;
}