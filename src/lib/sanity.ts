import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  token: process.env.SANITY_API_TOKEN,
  useCdn: false, // Disable CDN for fresh content
  apiVersion: "2024-01-01", // Use current date
});

const builder = imageUrlBuilder(client);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const urlFor = (source: any) => {
  return builder.image(source);
};

// GROQ queries for different content types
export async function getHomePageContent() {
  try {
    const query = `*[_type == "homePage" && _id == "homePage"][0]{
      _id,
      _createdAt,
      title,
      heroTitle,
      heroSubtitle,
      heroImage{
        asset->{
          _id,
          url
        }
      }
    }`;
    
    const result = await client.fetch(query);
    return result;
  } catch (error) {
    console.log('Sanity fetch failed for home page:', error);
    return null;
  }
}

export async function getAboutPageContent() {
  try {
    const query = `*[_type == "aboutPage" && _id == "aboutPage"][0]{
      _id,
      _createdAt,
      title,
      aboutHeroImage,
      journeyTitle,
      journeyContent,
      philosophyTitle,
      philosophyContent
    }`;
    
    return await client.fetch(query);
  } catch {
    console.log('Sanity fetch failed for about page');
    return null;
  }
}

export async function getContactPageContent() {
  try {
    const query = `*[_type == "contactPage" && _id == "contactPage"][0]{
      _id,
      _createdAt,
      title,
      pageTitle,
      pageDescription,
      workshopSectionTitle,
      workshopSectionDescription,
      address,
      phone,
      email,
      hours
    }`;
    
    return await client.fetch(query);
  } catch {
    console.log('Sanity fetch failed for contact page');
    return null;
  }
}

export async function getOrderingPageContent() {
  try {
    const query = `*[_type == "orderingPage" && _id == "orderingPage"][0]{
      _id,
      _createdAt,
      title,
      pageTitle,
      pageDescription,
      optionsTitle,
      basePrice,
      baseDescription,
      options,
      pricingItems,
      pricingNote,
      includedFeaturesTitle,
      includedFeatures,
      content
    }`;
    
    return await client.fetch(query);
  } catch {
    console.log('Sanity fetch failed for ordering page');
    return null;
  }
}

export async function getFooterSettings() {
  try {
    const query = `*[_type == "footerSettings" && _id == "footerSettings"][0]{
      _id,
      _createdAt,
      companyName,
      description,
      footerPhone,
      footerEmail,
      location,
      locationNote,
      establishedYear,
      tagline,
      country,
      socialMedia,
      trustlineText
    }`;
    
    return await client.fetch(query);
  } catch {
    console.log('Sanity fetch failed for footer settings');
    return null;
  }
}

export async function getNavigationSettings() {
  try {
    const query = `*[_type == "navigationSettings" && _id == "navigationSettings"][0]{
      _id,
      _createdAt,
      siteTitle,
      homeLabel,
      aboutLabel,
      doubletopsLabel,
      videosLabel,
      galleryLabel,
      playersLabel,
      orderingLabel,
      contactLabel,
      forSaleLabel
    }`;
    
    return await client.fetch(query);
  } catch {
    console.log('Sanity fetch failed for navigation settings');
    return null;
  }
}

export async function getDoubletopsPageContent() {
  try {
    const query = `*[_type == "doubletopsPage" && _id == "doubletopsPage"][0]{
      _id,
      _createdAt,
      title,
      pageTitle,
      pageDescription,
      innovationSectionTitle,
      innovationSectionContent,
      benefitsSectionTitle,
      benefits
    }`;
    
    return await client.fetch(query);
  } catch {
    console.log('Sanity fetch failed for doubletops page');
    return null;
  }
}

export async function getVideosPageContent() {
  try {
    const query = `*[_type == "videosPage" && _id == "videosPage"][0]{
      _id,
      _createdAt,
      title,
      pageTitle,
      pageDescription,
      featuredVideosTitle,
      moreVideosTitle,
      videos
    }`;
    
    return await client.fetch(query);
  } catch {
    console.log('Sanity fetch failed for videos page');
    return null;
  }
}

export async function getGalleryPageContent() {
  try {
    const query = `*[_type == "galleryPage" && _id == "galleryPage"][0]{
      _id,
      _createdAt,
      title,
      pageTitle,
      pageDescription,
      galleryItems
    }`;
    
    return await client.fetch(query);
  } catch {
    console.log('Sanity fetch failed for gallery page');
    return null;
  }
}

export async function getPlayersPageContent() {
  try {
    const query = `*[_type == "playersPage" && _id == "playersPage"][0]{
      _id,
      _createdAt,
      title,
      pageTitle,
      pageDescription,
      featuredPlayersTitle,
      allPlayersTitle,
      players,
      ctaSectionTitle,
      ctaSectionDescription
    }`;
    
    return await client.fetch(query);
  } catch {
    console.log('Sanity fetch failed for players page');
    return null;
  }
}

export async function getForSalePageContent() {
  try {
    const query = `*[_type == "forSalePage" && _id == "forSalePage"][0]{
      _id,
      _createdAt,
      title,
      pageTitle,
      pageDescription,
      availabilityNoticeTitle,
      availabilityNoticeText,
      availableInstrumentsTitle,
      guitars,
      inquireButtonText
    }`;
    
    return await client.fetch(query);
  } catch {
    console.log('Sanity fetch failed for for sale page');
    return null;
  }
}

// Legacy function for backward compatibility - will be removed
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function getPageContent(_pageName: string) {
  console.warn(`getPageContent is deprecated. Use specific page functions instead.`);
  return null;
}



