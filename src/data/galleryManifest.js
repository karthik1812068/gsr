/**
 * All gallery image paths under /public/gallery/. Built from folder specs (no UI grouping).
 * Flat list order: bedroom → dining → divider → foyer → fullhome → kitchen → living (70 total).
 */

function paths(subfolder, prefix, count, ext = 'png') {
  return Array.from({ length: count }, (_, i) => {
    const n = String(i + 1).padStart(2, '0')
    return `/gallery/${subfolder}/${prefix}-${n}.${ext}`
  })
}

const SECTION_SPECS = [
  { slug: 'bedroom', filePrefix: 'bedroom', count: 14 },
  { slug: 'dining', filePrefix: 'dining', count: 8 },
  { slug: 'divider', filePrefix: 'divider', count: 6 },
  { slug: 'foyer', filePrefix: 'foyer', count: 8 },
  { slug: 'fullhome', filePrefix: 'fullhome', count: 10 },
  { slug: 'kitchen', filePrefix: 'kitchen', count: 12 },
  { slug: 'living', filePrefix: 'living', count: 12 },
]

/** Internal: used only for path validation */
export const GALLERY_SECTIONS = SECTION_SPECS.map(({ slug, filePrefix, count }) => ({
  id: slug,
  slug,
  images: paths(slug, filePrefix, count),
}))

export const ALL_GALLERY_IMAGE_URLS = GALLERY_SECTIONS.flatMap((s) => s.images)

export const GALLERY_IMAGE_COUNT = ALL_GALLERY_IMAGE_URLS.length

export function validateGalleryPathsAgainstSlugs() {
  const issues = []
  for (const s of GALLERY_SECTIONS) {
    const re = new RegExp(`^/gallery/${s.slug}/${s.slug}-\\d{2}\\.png$`)
    for (const u of s.images) {
      if (!re.test(u)) {
        issues.push({ section: s.slug, path: u })
      }
    }
  }
  return issues
}

if (typeof import.meta !== 'undefined' && import.meta.env?.DEV && GALLERY_IMAGE_COUNT !== 70) {
  console.error(
    `[galleryManifest] Expected 70 images, got ${GALLERY_IMAGE_COUNT}. Sync SECTION_SPECS with public/gallery/.`
  )
}
