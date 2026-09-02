// Sanity CMS integration

import {
  getHomePageContent as getSanityHomePageContent,
  getAboutPageContent as getSanityAboutPageContent,
  getContactPageContent as getSanityContactPageContent,
  getOrderingPageContent as getSanityOrderingPageContent,
  getDoubletopsPageContent as getSanityDoubletopsPageContent,
  getVideosPageContent as getSanityVideosPageContent,
  getGalleryPageContent as getSanityGalleryPageContent,
  getPlayersPageContent as getSanityPlayersPageContent,
  getForSalePageContent as getSanityForSalePageContent,
  getFooterSettings as getSanityFooterSettings,
  getNavigationSettings as getSanityNavigationSettings,
  urlFor
} from './sanity'

// Sanity CDN sizing helpers — request appropriately-sized images with
// modern format (avif/webp) and reasonable quality instead of full-res originals.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function cardUrl(image: any): string | undefined {
  if (!image) return undefined
  return urlFor(image).width(1200).auto('format').quality(78).url()
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function heroUrl(image: any): string | undefined {
  if (!image) return undefined
  return urlFor(image).width(2400).auto('format').quality(82).url()
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function transformImageInArray(items: any[]) {
  if (!Array.isArray(items)) return items

  return items.map(item => ({
    ...item,
    mainImage: cardUrl(item.mainImage),
    photo: cardUrl(item.photo),
    image: cardUrl(item.image),
  }))
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function transformSanityData(data: any) {
  if (!data) return null

  const transformed = {
    ...data,
    slug: data.slug?.current || data.slug,
    mainImage: cardUrl(data.mainImage),
    photo: cardUrl(data.photo),
    image: cardUrl(data.image),
    heroImage: heroUrl(data.heroImage),
    aboutHeroImage: heroUrl(data.aboutHeroImage),
    galleryItems: data.galleryItems ? transformImageInArray(data.galleryItems) : undefined,
    players: data.players ? transformImageInArray(data.players) : undefined,
    videos: data.videos ? data.videos : undefined,
    guitars: data.guitars ? transformImageInArray(data.guitars) : undefined,
  }

  return transformed
}

// Helper function to transform Sanity page data to match expected structure
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function transformSanityPageData(data: any) {
  if (!data) return null
  
  // First transform any images in the data
  const transformedData = transformSanityData(data)
  
  return {
    data: transformedData || data,
    content: data.content || '',
  }
}

// API functions for specific page types
export async function getHomePageContent() {
  const data = await getSanityHomePageContent()
  return transformSanityPageData(data)
}

export async function getAboutPageContent() {
  const data = await getSanityAboutPageContent()
  return transformSanityPageData(data)
}

export async function getContactPageContent() {
  const data = await getSanityContactPageContent()
  return transformSanityPageData(data)
}

export async function getOrderingPageContent() {
  const data = await getSanityOrderingPageContent()
  return transformSanityPageData(data)
}

export async function getFooterSettings() {
  const data = await getSanityFooterSettings()
  return transformSanityPageData(data)
}

export async function getNavigationSettings() {
  const data = await getSanityNavigationSettings()
  return transformSanityPageData(data)
}

export async function getDoubletopsPageContent() {
  const data = await getSanityDoubletopsPageContent()
  return transformSanityPageData(data)
}

export async function getVideosPageContent() {
  const data = await getSanityVideosPageContent()
  return transformSanityPageData(data)
}

export async function getGalleryPageContent() {
  const data = await getSanityGalleryPageContent()
  return transformSanityPageData(data)
}

export async function getPlayersPageContent() {
  const data = await getSanityPlayersPageContent()
  return transformSanityPageData(data)
}

export async function getForSalePageContent() {
  const data = await getSanityForSalePageContent()
  return transformSanityPageData(data)
}

// Legacy function for backward compatibility
export async function getPageContent(pageName: string) {
  console.warn(`getPageContent('${pageName}') is deprecated. Use specific page functions instead.`);
  switch(pageName) {
    case 'home': return getHomePageContent();
    case 'about': return getAboutPageContent();
    case 'contact': return getContactPageContent();
    case 'ordering': return getOrderingPageContent();
    default: return null;
  }
}


// Export image URL helper for Sanity
export { urlFor } from './sanity'