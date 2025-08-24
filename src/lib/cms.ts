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

// Helper function to transform images in nested arrays
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function transformImageInArray(items: any[]) {
  if (!Array.isArray(items)) return items
  
  return items.map(item => ({
    ...item,
    mainImage: item.mainImage ? urlFor(item.mainImage).url() : undefined,
    photo: item.photo ? urlFor(item.photo).url() : undefined,
    image: item.image ? urlFor(item.image).url() : undefined,
  }))
}

// Helper function to transform Sanity data for components expecting Markdown structure
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function transformSanityData(data: any) {
  if (!data) return null
  
  const transformed = {
    ...data,
    slug: data.slug?.current || data.slug,
    // Transform image URLs - handle both direct asset references and nested asset objects
    mainImage: data.mainImage ? (data.mainImage.asset ? data.mainImage.asset.url : urlFor(data.mainImage).url()) : undefined,
    photo: data.photo ? (data.photo.asset ? data.photo.asset.url : urlFor(data.photo).url()) : undefined,
    image: data.image ? (data.image.asset ? data.image.asset.url : urlFor(data.image).url()) : undefined,
    heroImage: data.heroImage ? (data.heroImage.asset ? data.heroImage.asset.url : urlFor(data.heroImage).url()) : undefined,
    aboutHeroImage: data.aboutHeroImage ? (data.aboutHeroImage.asset ? data.aboutHeroImage.asset.url : urlFor(data.aboutHeroImage).url()) : undefined,
    // Transform embedded arrays
    galleryItems: data.galleryItems ? transformImageInArray(data.galleryItems) : undefined,
    players: data.players ? transformImageInArray(data.players) : undefined,
    videos: data.videos ? data.videos : undefined, // Videos don't need image transformation
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