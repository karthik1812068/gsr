import { useEffect } from 'react'
import Navbar from '../components/Navbar.jsx'
import HeroContent from '../components/HeroContent.jsx'
import StatsCard from '../components/StatsCard.jsx'
import HomeClientStoriesBand from '../components/home/HomeClientStoriesBand.jsx'
import { Link } from 'react-router-dom'
import {
  PROJECT_INTERIOR_IMAGES,
  interiorListingImageAlt,
} from '../data/projectImageLibrary.js'
import { usePageSeo } from '../seo/usePageSeo.js'

export default function Home() {
  usePageSeo({
    title: 'GSR Interiors | Modern Interior Design Services in India',
    description:
      'Transform your home with GSR Interiors. We offer modern, affordable and luxury interior design services across India.',
    ogTitle: 'GSR Interiors - Interior Design Services',
    ogDescription:
      'Transform your space with modern interior design solutions by GSR Interiors.',
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-[#F4F1EC]">
      <section className="w-full">
        <div className="relative min-h-screen w-full overflow-hidden">
          <img
            src="/hero-bg.jpg"
            alt="Modern luxury home interior — GSR Interiors design studio, India"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.42)_0%,rgba(0,0,0,0.18)_35%,rgba(0,0,0,0.04)_65%,rgba(0,0,0,0.08)_100%)]" />

          <Navbar variant="hero" />

          {/* Reserve navbar height so centered hero never sits under the header; z-20 below nav z-30 */}
          <div className="relative z-20 flex min-h-[100dvh] flex-col pt-[calc(84px+env(safe-area-inset-top,0px))]">
            <div className="flex flex-1 items-center">
              <div className="w-full px-[16px] pt-[16px] pb-[160px] sm:px-[24px] sm:pt-[20px] sm:pb-[180px] lg:pb-[200px]">
                <HeroContent />
              </div>
            </div>
          </div>

          <StatsCard />
        </div>
      </section>

      <section className="border-y border-[rgba(26,18,9,0.06)] bg-[#EFE7DE]">
        <div className="mx-auto w-full max-w-[900px] px-[18px] py-[40px] sm:px-[32px] sm:py-[48px]">
          <h2 className="text-center font-heading text-[22px] font-[500] text-[#1A1209] sm:text-[26px]">
            Interior design services trusted across{' '}
            <span className="italic text-[#C89A63]">India</span>
          </h2>
          <p className="mt-[14px] text-center text-[13px] leading-[1.75] text-[#555555]">
            From compact city apartments to expansive villas and professional workspaces, GSR
            Interiors plans every layer of the experience: circulation, storage, lighting, and
            finishes. Our team blends modern interior design discipline with a warm, livable
            aesthetic—so your home feels curated, not clinical. We coordinate vendors, timelines,
            and quality checks with transparency, whether you need a turnkey home interior, a
            statement modular kitchen, or a refined office interior design that supports focus and
            hospitality. If you are comparing home interior designers for a renovation or a new
            build, start with a conversation—we will translate your brief into a clear roadmap and
            a premium result you can feel every day.
          </p>
        </div>
      </section>

      {/* About preview */}
      <section className="mx-auto w-full max-w-[1440px] px-[18px] sm:px-[48px] lg:px-[80px] py-[44px]">
        <div className="grid gap-[18px] md:grid-cols-2 md:items-center">
          <div className="overflow-hidden rounded-[12px]">
            <img
              src="/about-bg.jpg"
              alt="GSR Interiors design studio and residential interior inspiration, India"
              className="h-[200px] w-full object-cover md:h-[280px]"
            />
          </div>

          <div>
            <div className="text-[10px] font-[700] tracking-[0.20em] text-[#C8A96E] uppercase">
              ABOUT GSR INTERIORS
            </div>
            <h2 className="mt-[10px] font-heading text-[22px] font-[500] text-[#1A1209]">
              Where Design Meets Purpose
            </h2>
            <div className="mt-[12px] h-[2px] w-[36px] bg-[#C8A96E]" />

            <p className="mt-[12px] text-[13px] leading-[1.7] text-[#555555]">
              GSR Interiors is a full-service interior design studio focused on
              creating elegant, functional, and timeless spaces. From modern
              homes to sophisticated commercial interiors, we bring a thoughtful
              approach to every project.
            </p>
            <p className="mt-[10px] text-[13px] leading-[1.7] text-[#555555]">
              Our designs are not just about how a space looks — but how it
              feels, functions, and reflects your personality.
            </p>

            <Link
              to="/about"
              className="mt-[16px] inline-flex items-center justify-center rounded-full bg-[#C8A96E] px-[18px] py-[10px] text-[12px] font-[500] text-[#1A1209] shadow-[0_10px_20px_rgba(0,0,0,0.10)] hover:bg-[#B8965C] transition-colors"
            >
              Know More About Us →
            </Link>
          </div>
        </div>
      </section>

      <HomeClientStoriesBand />

      {/* Full portfolio imagery — every shot in /public/projects */}
      <section
        id="projects"
        className="mx-auto w-full max-w-[1440px] px-[18px] sm:px-[48px] lg:px-[80px] pb-[48px]"
      >
        <div className="flex flex-col gap-[6px] sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-[10px] font-[700] tracking-[0.20em] text-[#C8A96E] uppercase">
              Portfolio
            </div>
            <h2 className="mt-[8px] font-heading text-[22px] font-[500] text-[#1A1209]">
              Spaces we&apos;ve <span className="italic text-[#C89A63]">crafted</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-x-[14px] gap-y-[6px]">
            <Link
              to="/gallery"
              className="text-[12px] font-[600] text-[#5A4634] underline-offset-4 transition-colors hover:text-[#1A1209]"
            >
              Full gallery (70 images) →
            </Link>
            <Link
              to="/projects"
              className="text-[12px] font-[600] text-[#5A4634] underline-offset-4 transition-colors hover:text-[#1A1209]"
            >
              View all projects →
            </Link>
          </div>
        </div>
        <div className="mt-[18px] grid grid-cols-2 gap-[10px] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 lg:gap-[14px]">
          {PROJECT_INTERIOR_IMAGES.map((src) => (
            <Link
              key={src}
              to="/projects"
              className="group relative aspect-[4/3] overflow-hidden rounded-[14px] ring-1 ring-[rgba(26,18,9,0.08)] shadow-[0_8px_22px_rgba(0,0,0,0.08)] transition-shadow hover:shadow-[0_14px_34px_rgba(0,0,0,0.12)]"
            >
              <img
                src={src}
                alt={interiorListingImageAlt(src)}
                className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgba(0,0,0,0.35)_100%)] opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}

