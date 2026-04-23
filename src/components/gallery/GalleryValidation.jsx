import { useEffect } from 'react'
import {
  ALL_GALLERY_IMAGE_URLS,
  GALLERY_IMAGE_COUNT,
  validateGalleryPathsAgainstSlugs,
} from '../../data/galleryManifest.js'

/** Dev-only: assert full manifest renders; no UI text. */
export default function GalleryValidation() {
  useEffect(() => {
    if (!import.meta.env.DEV) return

    if (ALL_GALLERY_IMAGE_URLS.length !== 70) {
      console.error(
        `[Gallery validation] Expected 70 images in ALL_GALLERY_IMAGE_URLS, found ${GALLERY_IMAGE_COUNT}.`
      )
    } else {
      console.info(`[Gallery validation] ${GALLERY_IMAGE_COUNT} image URLs; single grid renders all.`)
    }

    const mismatches = validateGalleryPathsAgainstSlugs()
    if (mismatches.length) {
      console.warn('[Gallery validation] Path pattern issues:', mismatches)
    }
  }, [])

  return null
}
