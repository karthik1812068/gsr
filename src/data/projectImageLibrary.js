/**
 * All portfolio images under /public/projects/ (excluding listing-only hero art).
 * Add new filenames here when you drop more images into public/projects/.
 */
export const PROJECT_INTERIOR_IMAGES = [
  '/projects/living-1.png',
  '/projects/living-2.png',
  '/projects/kitchen-1.png',
  '/projects/dining-1.png',
  '/projects/bedroom-1.png',
  '/projects/bedroom-2.png',
  '/projects/bedroom-3.png',
  '/projects/bedroom-4.png',
  '/projects/foyer.png',
  '/projects/divider-1.png',
  '/projects/fullhome-1.png',
]

/** Used on the projects listing hero only */
export const PROJECTS_LISTING_HERO = '/projects/projects-hero-bg.png'

/** Short SEO-friendly alt for home portfolio thumbnails */
export function interiorListingImageAlt(src) {
  if (src.includes('living')) {
    return 'Modern living room interior design — GSR Interiors, India'
  }
  if (src.includes('kitchen')) {
    return 'Luxury modular kitchen interior design — GSR Interiors, India'
  }
  if (src.includes('dining')) {
    return 'Dining area interior design — GSR Interiors, India'
  }
  if (src.includes('bedroom')) {
    return 'Bedroom and wardrobe interior design — GSR Interiors, India'
  }
  if (src.includes('foyer')) {
    return 'Premium home foyer interior design — GSR Interiors, India'
  }
  if (src.includes('divider')) {
    return 'Designer space divider interior — GSR Interiors, India'
  }
  if (src.includes('fullhome')) {
    return 'Full home luxury interior design — GSR Interiors, India'
  }
  return 'Interior design portfolio — GSR Interiors, India'
}
