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
  getGuitars as getSanityGuitars,
  getPlayers as getSanityPlayers,
  getGalleryItems as getSanityGalleryItems,
  getVideos as getSanityVideos,
  getFeaturedGuitars as getSanityFeaturedGuitars,
  getAvailableGuitars as getSanityAvailableGuitars,
  urlFor
} from './sanity'

// Helper function to transform Sanity data for components expecting Markdown structure
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function transformSanityData(data: any) {
  if (!data) return null
  
  if (Array.isArray(data)) {
    return data.map(item => ({
      ...item,
      slug: item.slug?.current || item.slug,
      // Transform image URLs
      mainImage: item.mainImage ? urlFor(item.mainImage).url() : undefined,
      photo: item.photo ? urlFor(item.photo).url() : undefined,
      image: item.image ? urlFor(item.image).url() : undefined,
      heroImage: item.heroImage ? urlFor(item.heroImage).url() : undefined,
      aboutHeroImage: item.aboutHeroImage ? urlFor(item.aboutHeroImage).url() : undefined,
    }))
  }
  
  return {
    ...data,
    slug: data.slug?.current || data.slug,
    // Transform image URLs
    mainImage: data.mainImage ? urlFor(data.mainImage).url() : undefined,
    photo: data.photo ? urlFor(data.photo).url() : undefined,
    image: data.image ? urlFor(data.image).url() : undefined,
    heroImage: data.heroImage ? urlFor(data.heroImage).url() : undefined,
    aboutHeroImage: data.aboutHeroImage ? urlFor(data.aboutHeroImage).url() : undefined,
  }
}

// Helper function to transform Sanity page data to match expected structure
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function transformSanityPageData(data: any) {
  if (!data) return null
  
  return {
    data: data.data || data,
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

export async function getGuitars() {
  const data = await getSanityGuitars()
  return transformSanityData(data)
}

export async function getFeaturedGuitars() {
  const data = await getSanityFeaturedGuitars()
  return transformSanityData(data)
}

export async function getAvailableGuitars() {
  const data = await getSanityAvailableGuitars()
  return transformSanityData(data)
}

export async function getPlayers() {
  const data = await getSanityPlayers()
  return transformSanityData(data)
}

export async function getGalleryItems() {
  const data = await getSanityGalleryItems()
  return transformSanityData(data)
}

export async function getVideos() {
  const data = await getSanityVideos()
  return transformSanityData(data)
}

// Export image URL helper for Sanity
export { urlFor } from './sanity'