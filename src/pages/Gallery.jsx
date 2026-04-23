import { useEffect } from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import LazyGalleryImage from '../components/gallery/LazyGalleryImage.jsx'
import GalleryValidation from '../components/gallery/GalleryValidation.jsx'
import { ALL_GALLERY_IMAGE_URLS } from '../data/galleryManifest.js'
import { galleryImageAlt } from '../utils/galleryImageAlt.js'
import { usePageSeo } from '../seo/usePageSeo.js'

export default function Gallery() {
  usePageSeo({
    title: 'Interior Design Gallery | GSR Interiors Portfolio',
    description:
      'Browse our interior design gallery showcasing modern and luxury home and office interiors.',
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-[#F8F4EF]">
      <GalleryValidation />

      <Navbar variant="glass" />

      <header className="mx-auto w-full max-w-[900px] px-[18px] pt-[calc(100px+env(safe-area-inset-top,0px))] pb-[20px] text-center sm:pt-[calc(108px+env(safe-area-inset-top,0px))]">
        <h1 className="font-heading text-[32px] font-[500] leading-[1.1] text-[#1E1B18] sm:text-[38px]">
          Our Interior Design Gallery
        </h1>
        <p className="mt-[12px] text-[13px] leading-[1.75] text-[#6E6257]">
          This portfolio highlights the breadth of our work across residences and workspaces—
          luxury interiors India clients love for their restraint, warmth, and meticulous detailing.
          You will see modern interior design languages applied to modular kitchens, living rooms,
          bedrooms, dining zones, and full-home programs. Each photograph reflects real execution
          standards: aligned grains, integrated lighting, and joinery that feels inevitable rather
          than decorative. Save your favourites, then bring them to a consultation—we will translate
          inspiration into a measured plan with budgets, timelines, and quality benchmarks you can
          trust.
        </p>
      </header>

      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-[12px] px-[14px] pb-[28px] sm:grid-cols-2 sm:gap-[14px] sm:px-[20px] sm:pb-[32px] lg:grid-cols-3 lg:gap-[16px] lg:px-[32px] xl:grid-cols-4 xl:gap-[18px] xl:px-[40px]">
        {ALL_GALLERY_IMAGE_URLS.map((src) => (
          <div
            key={src}
            className="flex items-center justify-center overflow-hidden rounded-[12px] bg-[#EDE8E0] ring-1 ring-[rgba(30,27,24,0.06)]"
          >
            <LazyGalleryImage src={src} alt={galleryImageAlt(src)} />
          </div>
        ))}
      </div>

      <Footer />
    </main>
  )
}
