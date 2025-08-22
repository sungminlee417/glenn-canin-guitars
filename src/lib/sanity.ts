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
export async function getPageContent(pageName: string) {
  try {
    const query = `*[_type == "page" && slug.current == $pageName][0]{
      _id,
      _createdAt,
      title,
      slug,
      content,
      heroImage,
      aboutHeroImage,
      metaDescription,
      "data": {
        title,
        description: metaDescription,
        heroImage,
        aboutHeroImage,
        featuredGuitarsTitle,
        featuredGuitarsDescription
      }
    }`;
    
    return await client.fetch(query, { pageName });
  } catch {
    console.log(`Sanity fetch failed for page ${pageName}, falling back to markdown`);
    return null;
  }
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
      images,
      featured,
      available,
      doubletop,
      category,
      "data": {
        title,
        description,
        price,
        specifications,
        mainImage,
        images,
        featured,
        available,
        doubletop,
        category
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
      images,
      featured,
      available,
      doubletop,
      category,
      "data": {
        title,
        description,
        price,
        specifications,
        mainImage,
        images,
        featured,
        available,
        doubletop,
        category
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
      images,
      featured,
      available,
      doubletop,
      category,
      "data": {
        title,
        description,
        price,
        specifications,
        mainImage,
        images,
        featured,
        available,
        doubletop,
        category
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
      instruments,
      featured,
      "data": {
        name,
        bio,
        photo,
        website,
        instruments,
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
    const query = `*[_type == "gallery"] | order(_createdAt desc) {
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
      youtubeId,
      thumbnail,
      category,
      featured,
      "data": {
        title,
        description,
        youtubeId,
        thumbnail,
        category,
        featured
      }
    }`;
    
    return await client.fetch(query);
  } catch {
    console.log('Sanity fetch failed for videos, falling back to markdown');
    return [];
  }
}