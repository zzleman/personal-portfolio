import { StrapiProject, StrapiImage } from '@/types/strapi';
import mockData from '../../mockData.json';

export async function fetchProjects(): Promise<StrapiProject[]> {
  try {
    // Simulate async behavior for consistency
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // Return projects from mockData.json
    return mockData.projects as StrapiProject[];
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error fetching projects from mockData:', error);
    }
    throw error;
  }
}

export function getStrapiImageUrl(
  image?: StrapiImage | null
): string | null {
  if (!image || !image.url) {
    return null;
  }

  const imageUrl = image.url;
  
  // If it's already a full URL, return it
  if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
    return imageUrl;
  }

  // For local images, return as-is (they're already relative paths)
  return imageUrl;
}

