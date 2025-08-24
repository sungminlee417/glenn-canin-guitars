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
      },
      aboutPreview,
      aboutPreviewTitle,
      aboutPreviewLinkText,
      featuredGuitarsTitle,
      featuredGuitarsDescription,
      featuredGuitarsButtonText
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
      philosophyContent,
      achievementsTitle,
      achievements
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
      processSteps,
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
      benefits,
      availableGuitarsTitle
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
      moreVideosTitle
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
      pageDescription
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
      featuredInstrumentsTitle,
      availableInstrumentsTitle,
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

export async function getGuitars() {
  try {
    const query = `*[_type == "guitar"] | order(_createdAt desc) {
      _id,
      _createdAt,
      title,
      slug,
      description,
      price,
      specifications,
      mainImage,
      featured,
      available,
      "data": {
        title,
        description,
        price,
        specifications,
        mainImage,
        featured,
        available
      }
    }`;
    
    return await client.fetch(query);
  } catch {
    console.log('Sanity fetch failed for guitars, falling back to markdown');
    return [];
  }
}

export async function getFeaturedGuitars() {
  try {
    const query = `*[_type == "guitar" && featured == true] | order(_createdAt desc) {
      _id,
      _createdAt,
      title,
      slug,
      description,
      price,
      specifications,
      mainImage,
      featured,
      available,
      "data": {
        title,
        description,
        price,
        specifications,
        mainImage,
        featured,
        available
      }
    }`;
    
    return await client.fetch(query);
  } catch {
    console.log('Sanity fetch failed for featured guitars, falling back to markdown');
    return [];
  }
}

export async function getAvailableGuitars() {
  try {
    const query = `*[_type == "guitar" && available != false] | order(_createdAt desc) {
      _id,
      _createdAt,
      title,
      slug,
      description,
      price,
      specifications,
      mainImage,
      featured,
      available,
      "data": {
        title,
        description,
        price,
        specifications,
        mainImage,
        featured,
        available
      }
    }`;
    
    return await client.fetch(query);
  } catch {
    console.log('Sanity fetch failed for available guitars, falling back to markdown');
    return [];
  }
}

export async function getPlayers() {
  try {
    const query = `*[_type == "player"] | order(_createdAt desc) {
      _id,
      _createdAt,
      name,
      slug,
      bio,
      photo,
      website,
      featured,
      "data": {
        name,
        bio,
        photo,
        website,
        featured
      }
    }`;
    
    return await client.fetch(query);
  } catch {
    console.log('Sanity fetch failed for players, falling back to markdown');
    return [];
  }
}

export async function getGalleryItems() {
  try {
    const query = `*[_type == "galleryItem"] | order(_createdAt desc) {
      _id,
      _createdAt,
      title,
      slug,
      description,
      image,
      category,
      featured,
      "data": {
        title,
        description,
        image,
        category,
        featured
      }
    }`;
    
    return await client.fetch(query);
  } catch {
    console.log('Sanity fetch failed for gallery items, falling back to markdown');
    return [];
  }
}

export async function getVideos() {
  try {
    const query = `*[_type == "video"] | order(_createdAt desc) {
      _id,
      _createdAt,
      title,
      slug,
      description,
      youtubeUrl,
      player,
      featured,
      "data": {
        title,
        description,
        youtubeUrl,
        player,
        featured
      }
    }`;
    
    return await client.fetch(query);
  } catch {
    console.log('Sanity fetch failed for videos, falling back to markdown');
    return [];
  }
}