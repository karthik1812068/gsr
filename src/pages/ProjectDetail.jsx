import { useEffect, useMemo, useState } from 'react'
import {
  ArrowRight,
  Calendar,
  ChevronRight,
  Home,
  MapPin,
  Maximize2,
  Star,
  Timer,
  Wallet,
} from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { useConsultation } from '../components/BookConsultationModal/ConsultationContext.jsx'
import { PROJECTS, getProjectCategoryLabel } from '../data/projects.js'
import { getProjectCase } from '../data/projectCases.js'
import { PROJECT_INTERIOR_IMAGES } from '../data/projectImageLibrary.js'
import { resolveProjectImage } from '../utils/resolveProjectImage.js'
import { usePageSeo } from '../seo/usePageSeo.js'

function projectPhotoAlt(project) {
  const cat = getProjectCategoryLabel(project.category)
  return `${project.title} — ${cat} interior design by GSR Interiors, India`
}

/** Dedupe while preserving order; drops duplicate paths. */
function uniqImages(urls) {
  const seen = new Set()
  const out = []
  for (const u of urls) {
    if (u && !seen.has(u)) {
      seen.add(u)
      out.push(u)
    }
  }
  return out
}

function buildFallbackCaseStudy(project, primaryImg) {
  const restInteriors = PROJECT_INTERIOR_IMAGES.filter((u) => u !== primaryImg)
  const pool = uniqImages([
    primaryImg,
    ...restInteriors,
    '/about-bg.jpg',
    '/hero-bg.jpg',
    '/studio-preview.jpg',
    '/services-hero.jpg',
    '/service-1.jpg',
    '/service-2.jpg',
    '/service-3.jpg',
    '/service-4.jpg',
    '/service-5.jpg',
    '/service-6.jpg',
    '/contact-hero.jpg',
    '/contact-map.jpg',
  ])
  const hero = pool[0] || primaryImg
  const thumbs = pool.slice(1, 5)
  const gallery = pool.slice(5, 11)
  const avatar = pool[11] || '/studio-preview.jpg'
  const ctaBg = pool[12] || '/services-hero.jpg'

  return {
    eyebrow: 'Featured Project',
    shortDescription:
      'A thoughtfully detailed interior crafted with premium materials, layered lighting, and bespoke joinery tailored to the client’s lifestyle.',
    stats: {
      area: '—',
      timeline: '—',
      budget: '—',
      year: '—',
    },
    overview: {
      paragraphs: [
        'This project reflects our studio’s approach: clarity of planning, refined materiality, and meticulous execution—from concept sketches to final handover.',
      ],
      highlights: [
        'Tailored layouts for flow and function',
        'Premium finishes with coordinated lighting',
        'End-to-end project coordination',
      ],
      details: [
        { label: 'Service area', value: 'India' },
        { label: 'Category', value: getProjectCategoryLabel(project.category) },
        { label: 'Studio', value: 'GSR Interiors' },
        { label: 'Status', value: 'Completed' },
      ],
    },
    hero,
    thumbs: thumbs.length ? thumbs : [hero],
    gallery: gallery.length ? gallery : [hero],
    testimonial: {
      quote:
        'Professional, detail-oriented, and truly collaborative. Our home feels elevated in every sense.',
      name: 'Client',
      location: 'India',
      rating: 5,
      avatar,
    },
    cta: { bg: ctaBg },
  }
}

function Breadcrumb({ title }) {
  return (
    <nav aria-label="Breadcrumb" className="text-[12px] text-[rgba(255,255,255,0.62)]">
      <ol className="flex flex-wrap items-center gap-[8px]">
        <li>
          <Link to="/" className="transition-colors hover:text-white">
            Home
          </Link>
        </li>
        <ChevronRight className="h-[14px] w-[14px] text-[rgba(255,255,255,0.35)]" aria-hidden />
        <li>
          <Link to="/projects" className="transition-colors hover:text-white">
            Projects
          </Link>
        </li>
        <ChevronRight className="h-[14px] w-[14px] text-[rgba(255,255,255,0.35)]" aria-hidden />
        <li className="font-[700] text-white">{title}</li>
      </ol>
    </nav>
  )
}

function StatCard({ icon: Icon, label, value }) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-[10px] rounded-[16px] bg-[rgba(255,255,255,0.04)] px-[16px] py-[20px] ring-1 ring-[rgba(255,255,255,0.08)] sm:flex-row sm:items-center sm:justify-start">
      <div className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[rgba(200,169,110,0.16)] text-[#C8A96E]">
        <Icon className="h-[20px] w-[20px]" />
      </div>
      <div>
        <div className="text-[11px] font-[700] tracking-[0.12em] text-[rgba(255,255,255,0.55)] uppercase">
          {label}
        </div>
        <div className="mt-[4px] text-[15px] font-[800]">{value}</div>
      </div>
    </div>
  )
}

function Stars({ count = 5 }) {
  return (
    <div className="flex items-center gap-[4px]" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-[14px] w-[14px] fill-[#C8A96E] text-[#C8A96E]" />
      ))}
    </div>
  )
}

export default function ProjectDetail() {
  const consultation = useConsultation()
  const { projectId } = useParams()
  const project = useMemo(
    () => PROJECTS.find((p) => p.id === projectId) || null,
    [projectId]
  )
  const caseStudy = project ? getProjectCase(project.id) : null

  const [heroIndex, setHeroIndex] = useState(0)

  const fallbackImg = useMemo(
    () => (project ? resolveProjectImage(project) : '/hero-bg.jpg'),
    [project]
  )

  const cs = useMemo(() => {
    if (!project) return null
    return caseStudy || buildFallbackCaseStudy(project, fallbackImg)
  }, [project, caseStudy, fallbackImg])

  useEffect(() => {
    window.scrollTo(0, 0)
    setHeroIndex(0)
  }, [projectId])

  usePageSeo({
    title: project ? `${project.title} | GSR Interiors` : 'Projects | GSR Interiors',
    description:
      cs?.shortDescription ||
      (project
        ? `${project.title}: completed interior design by GSR Interiors — modern, luxury home and office interiors delivered across India.`
        : 'Explore interior design projects by GSR Interiors.'),
    ogImagePath: fallbackImg,
  })

  if (!project || !cs) {
    return <Navigate to="/projects" replace />
  }

  const heroMain = cs.hero
  const thumbSet = cs.thumbs?.length ? cs.thumbs : [heroMain]
  const activeHero = thumbSet[heroIndex] || heroMain

  return (
    <main className="min-h-screen bg-[#080705]">
      {/* Top bar area: dark + navbar */}
      <div className="relative border-b border-[rgba(255,255,255,0.06)] bg-[rgba(6,5,4,0.92)]">
        <Navbar variant="hero" />
        <div className="mx-auto w-full max-w-[1440px] px-[18px] pb-[18px] pt-[8px] sm:px-[48px] lg:px-[80px]">
          <Breadcrumb title={project.title} />
        </div>
      </div>

      {/* Hero project */}
      <section className="mx-auto w-full max-w-[1440px] px-[18px] py-[28px] sm:px-[48px] lg:px-[80px]">
        <div className="grid gap-[28px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-start">
          <div>
            <div className="text-[11px] font-[800] tracking-[0.2em] text-[#C8A96E] uppercase">
              {cs.eyebrow}
            </div>
            <h1 className="mt-[12px] font-heading text-[40px] font-[500] leading-[1.08] sm:text-[48px]">
              {project.title}
            </h1>
            <div className="mt-[12px] inline-flex items-center gap-[8px] text-[13px] text-[rgba(255,255,255,0.78)]">
              <MapPin className="h-[16px] w-[16px] text-[#C8A96E]" aria-hidden />
              <span>{getProjectCategoryLabel(project.category)}</span>
              <span className="text-[rgba(255,255,255,0.45)]">·</span>
              <span className="text-[#C8A96E]">India</span>
            </div>
            <p className="mt-[16px] max-w-[520px] text-[13px] leading-[1.75] text-[rgba(255,255,255,0.72)]">
              {cs.shortDescription}
            </p>
            <div className="mt-[20px] flex flex-wrap items-center gap-[12px]">
              <button
                type="button"
                onClick={() => consultation.open('project-detail-hero')}
                className="inline-flex items-center gap-[10px] rounded-full bg-[#C8A96E] px-[18px] py-[12px] text-[13px] font-[800] text-[#1A1209] shadow-[0_14px_26px_rgba(0,0,0,0.22)] transition-colors hover:bg-[#B8965C]"
              >
                Book a Consultation <ArrowRight className="h-[16px] w-[16px]" />
              </button>
              <a
                href="#gallery"
                className="inline-flex items-center gap-[10px] rounded-full border border-[rgba(255,255,255,0.18)] bg-[rgba(255,255,255,0.04)] px-[18px] py-[12px] text-[13px] font-[800] text-white backdrop-blur-[8px] transition-colors hover:bg-[rgba(255,255,255,0.07)]"
              >
                View Gallery <ArrowRight className="h-[16px] w-[16px]" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-[12px] sm:flex-row sm:items-stretch">
            <div className="relative min-h-[280px] flex-1 overflow-hidden rounded-[20px] ring-1 ring-[rgba(255,255,255,0.10)] sm:min-h-[380px]">
              <img
                src={activeHero}
                alt={projectPhotoAlt(project)}
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12)_0%,rgba(0,0,0,0.35)_100%)]" />
            </div>

            <div className="flex flex-row gap-[10px] sm:w-[112px] sm:flex-col">
              {thumbSet.slice(0, 4).map((src, i) => (
                <button
                  key={src + i}
                  type="button"
                  onClick={() => {
                    if (i === 3) {
                      document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })
                      return
                    }
                    setHeroIndex(i)
                  }}
                  className={[
                    'relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-[14px] ring-2 transition-shadow sm:h-[88px] sm:w-full',
                    heroIndex === i && i !== 3
                      ? 'ring-[#C8A96E] shadow-[0_12px_30px_rgba(0,0,0,0.35)]'
                      : 'ring-transparent opacity-90 hover:opacity-100',
                  ].join(' ')}
                >
                  <img
                    src={src}
                    alt={`${project.title} gallery preview ${i + 1}`}
                    className="h-full w-full object-cover object-center"
                  />
                  {i === 3 ? (
                    <span className="absolute inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.55)] px-[6px] text-center text-[9px] font-[800] leading-tight tracking-[0.06em]">
                      View All Photos
                    </span>
                  ) : null}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)]">
        <div className="mx-auto w-full max-w-[1440px] px-[18px] py-[22px] sm:px-[48px] lg:px-[80px]">
          <div className="grid grid-cols-2 gap-[12px] lg:grid-cols-4">
            <StatCard icon={Maximize2} label="Area" value={cs.stats.area} />
            <StatCard icon={Timer} label="Timeline" value={cs.stats.timeline} />
            <StatCard icon={Wallet} label="Budget" value={cs.stats.budget} />
            <StatCard icon={Calendar} label="Year" value={cs.stats.year} />
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="mx-auto w-full max-w-[1440px] px-[18px] py-[44px] sm:px-[48px] lg:px-[80px]">
        <div className="grid gap-[22px] lg:grid-cols-[1.1fr_0.9fr_0.95fr] lg:items-start">
          <div>
            <div className="text-[11px] font-[800] tracking-[0.18em] text-[#C8A96E] uppercase">
              Project Overview
            </div>
            <h2 className="mt-[10px] font-heading text-[28px] font-[500] leading-[1.15]">
              Thoughtful design,{' '}
              <span className="italic text-[#C8A96E]">flawless execution</span>
            </h2>
            <div className="mt-[14px] space-y-[12px] text-[13px] leading-[1.75] text-[rgba(255,255,255,0.72)]">
              {cs.overview.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <div className="rounded-[18px] bg-[rgba(255,255,255,0.03)] p-[20px] ring-1 ring-[rgba(255,255,255,0.08)]">
            <div className="text-[12px] font-[800] tracking-[0.12em] text-[rgba(255,255,255,0.55)] uppercase">
              Key highlights
            </div>
            <ul className="mt-[12px] space-y-[10px] text-[13px] leading-[1.6] text-[rgba(255,255,255,0.78)]">
              {cs.overview.highlights.map((h, i) => (
                <li key={i} className="flex gap-[10px]">
                  <span className="mt-[6px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#C8A96E]" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[18px] bg-[#0D0B09] p-[20px] shadow-[0_24px_60px_rgba(0,0,0,0.45)] ring-1 ring-[rgba(255,255,255,0.10)]">
            <div className="text-[12px] font-[800] tracking-[0.12em] text-[#C8A96E] uppercase">
              Project details
            </div>
            <dl className="mt-[14px] space-y-[12px]">
              {cs.overview.details.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between gap-[12px] border-b border-[rgba(255,255,255,0.08)] pb-[12px] last:border-b-0 last:pb-0"
                >
                  <dt className="text-[12px] text-[rgba(255,255,255,0.55)]">{row.label}</dt>
                  <dd className="text-right text-[13px] font-[700]">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="bg-[rgba(255,255,255,0.02)]">
        <div className="mx-auto w-full max-w-[1440px] px-[18px] py-[44px] sm:px-[48px] lg:px-[80px]">
          <div className="flex items-end justify-between gap-[16px]">
            <div>
              <div className="text-[11px] font-[800] tracking-[0.18em] text-[#C8A96E] uppercase">
                Gallery
              </div>
              <h2 className="mt-[10px] font-heading text-[28px] font-[500]">Project gallery</h2>
            </div>
          </div>
          <div className="mt-[20px] grid gap-[12px] sm:grid-cols-2 lg:grid-cols-3">
            {cs.gallery.map((src, i) => (
              <div
                key={src + i}
                className="group relative aspect-[4/3] overflow-hidden rounded-[16px] ring-1 ring-[rgba(255,255,255,0.08)]"
              >
                <img
                  src={src}
                  alt={`${project.title} interior design detail ${i + 1}`}
                  className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.0)_40%,rgba(0,0,0,0.35)_100%)] opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="border-y border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)]">
        <div className="mx-auto w-full max-w-[900px] px-[18px] py-[44px] sm:px-[48px]">
          <div className="rounded-[22px] bg-[rgba(13,11,9,0.85)] px-[22px] py-[26px] shadow-[0_24px_70px_rgba(0,0,0,0.45)] ring-1 ring-[rgba(255,255,255,0.10)] sm:px-[32px] sm:py-[32px]">
            <div className="text-[48px] leading-none text-[#C8A96E]">“</div>
            <p className="mt-[6px] text-[16px] leading-[1.65] text-[rgba(255,255,255,0.88)]">
              {cs.testimonial.quote}
            </p>
            <div className="mt-[20px] flex flex-col gap-[16px] sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-[14px]">
                <div className="h-[52px] w-[52px] overflow-hidden rounded-full ring-2 ring-[#C8A96E]">
                  <img
                    src={cs.testimonial.avatar}
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div>
                  <div className="text-[14px] font-[800]">{cs.testimonial.name}</div>
                  <div className="mt-[2px] text-[12px] text-[rgba(255,255,255,0.55)]">
                    {cs.testimonial.location}
                  </div>
                </div>
              </div>
              <Stars count={cs.testimonial.rating} />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden">
        <img
          src={cs.cta.bg}
          alt={`${project.title} — interior design by GSR Interiors`}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.72)_55%,rgba(0,0,0,0.35)_100%)]" />
        <div className="relative mx-auto w-full max-w-[1440px] px-[18px] py-[54px] sm:px-[48px] lg:px-[80px]">
          <div className="max-w-[720px]">
            <div className="text-[11px] font-[800] tracking-[0.18em] text-[#C8A96E] uppercase">
              Start your project
            </div>
            <h3 className="mt-[12px] font-heading text-[36px] font-[500] leading-[1.1] sm:text-[40px]">
              Ready for a home that feels{' '}
              <span className="italic text-[#C8A96E]">effortlessly yours</span>?
            </h3>
            <p className="mt-[12px] text-[13px] leading-[1.7] text-[rgba(255,255,255,0.76)]">
              Tell us about your space—we’ll respond within 24 hours with next steps and a
              tailored consultation.
            </p>
            <div className="mt-[18px] flex flex-wrap items-center gap-[12px]">
              <button
                type="button"
                onClick={() => consultation.open('project-detail-cta')}
                className="inline-flex items-center gap-[10px] rounded-full bg-[#C8A96E] px-[18px] py-[12px] text-[13px] font-[800] text-[#1A1209] shadow-[0_14px_26px_rgba(0,0,0,0.22)] transition-colors hover:bg-[#B8965C]"
              >
                Book a Consultation <ArrowRight className="h-[16px] w-[16px]" />
              </button>
              <Link
                to="/projects"
                className="inline-flex items-center gap-[10px] rounded-full border border-[rgba(255,255,255,0.18)] bg-[rgba(0,0,0,0.30)] px-[18px] py-[12px] text-[13px] font-[800] text-white backdrop-blur-[10px] transition-colors hover:bg-[rgba(0,0,0,0.42)]"
              >
                <Home className="h-[16px] w-[16px]" /> Back to projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
