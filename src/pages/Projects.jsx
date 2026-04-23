import { useEffect, useMemo, useState } from 'react'
import {
  ArrowRight,
  BedDouble,
  ChefHat,
  Home,
  Monitor,
  Salad,
  Sparkles,
  Tag,
  Users,
  BriefcaseBusiness,
  Clock3,
  Menu,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { useConsultation } from '../components/BookConsultationModal/ConsultationContext.jsx'
import {
  PROJECTS,
  PROJECT_CATEGORIES,
  getProjectCategoryLabel,
} from '../data/projects.js'
import { usePageSeo } from '../seo/usePageSeo.js'

function projectPhotoAlt(project) {
  const cat = getProjectCategoryLabel(project.category)
  return `${project.title} — ${cat} interior design by GSR Interiors, India`
}
import { PROJECTS_LISTING_HERO } from '../data/projectImageLibrary.js'
import { resolveProjectImage } from '../utils/resolveProjectImage.js'

const CATEGORY_ICONS = {
  all: Sparkles,
  living: Monitor,
  kitchen: ChefHat,
  bedroom: BedDouble,
  dining: Salad,
  fullhome: Home,
}

function classNames(...xs) {
  return xs.filter(Boolean).join(' ')
}

function FilterPill({ active, icon: Icon, label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(
        'inline-flex items-center gap-[10px] rounded-full px-[14px] py-[10px] text-[12px] font-[700] backdrop-blur-[10px] transition-colors',
        active
          ? 'bg-[#C8A96E] text-[#1A1209]'
          : 'bg-[rgba(10,10,10,0.55)] text-white ring-1 ring-[rgba(255,255,255,0.16)] hover:bg-[rgba(10,10,10,0.62)]'
      )}
      aria-pressed={active ? 'true' : 'false'}
    >
      <Icon className={classNames('h-[16px] w-[16px]', active ? '' : '')} />
      {label}
    </button>
  )
}

function ProjectCard({ project }) {
  const img = resolveProjectImage(project)
  const categoryLabel = getProjectCategoryLabel(project.category)

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[22px] bg-[rgba(20,18,16,0.72)] shadow-[0_22px_60px_rgba(0,0,0,0.35)] ring-1 ring-[rgba(255,255,255,0.08)]">
      <Link
        to={`/projects/${project.id}`}
        className="flex h-full min-h-0 flex-1 flex-col outline-none"
        aria-label={`View project: ${project.title}`}
      >
        <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden">
          <img
            src={img}
            alt={projectPhotoAlt(project)}
            className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.18)_0%,rgba(0,0,0,0.45)_55%,rgba(0,0,0,0.78)_100%)]" />
        </div>

        <div className="flex min-h-0 flex-1 flex-col px-[18px] pb-[18px] pt-[14px]">
          <div className="flex min-h-0 flex-1 items-start justify-between gap-[12px]">
            <div className="min-w-0 flex-1">
              <h3 className="line-clamp-2 text-[14px] font-[800] leading-[1.25] tracking-[0.01em] text-white">
                {project.title}
              </h3>
              <div className="mt-[8px] inline-flex max-w-full items-center gap-[6px] text-[11px] font-[600] text-[rgba(255,255,255,0.78)]">
                <Tag className="h-[13px] w-[13px] shrink-0 text-[#C8A96E]" aria-hidden />
                <span className="truncate text-[#C8A96E]">{categoryLabel}</span>
              </div>
            </div>

            <span
              className="inline-flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#C8A96E] text-[#1A1209] shadow-[0_16px_30px_rgba(0,0,0,0.26)] transition-transform duration-300 ease-out group-hover:translate-x-[2px]"
              aria-hidden
            >
              <ArrowRight className="h-[18px] w-[18px]" />
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}

function Stat({ icon: Icon, value, label }) {
  return (
    <div className="flex items-center gap-[12px] px-[14px] py-[14px]">
      <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[rgba(200,169,110,0.18)] text-[#C8A96E] ring-1 ring-[rgba(255,255,255,0.10)]">
        <Icon className="h-[18px] w-[18px]" />
      </div>
      <div className="leading-tight">
        <div className="text-[18px] font-[800] text-white">{value}</div>
        <div className="mt-[3px] text-[12px] text-[rgba(255,255,255,0.72)]">
          {label}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const consultation = useConsultation()
  const [active, setActive] = useState('all')

  const filtered = useMemo(() => {
    if (active === 'all') return PROJECTS
    return PROJECTS.filter((p) => p.category === active)
  }, [active])

  usePageSeo({
    title: 'Our Interior Design Projects | GSR Interiors',
    description:
      'Explore completed interior design projects by GSR Interiors with modern and stylish designs.',
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-[#050403]">
      {/* Hero */}
      <section className="relative">
        <div className="relative h-[560px] w-full overflow-hidden">
          <img
            src={PROJECTS_LISTING_HERO}
            alt="Luxury residential interior showcase by GSR Interiors, India"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,4,3,0.88)_0%,rgba(5,4,3,0.72)_45%,rgba(5,4,3,0.42)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,4,3,0.25)_0%,transparent_50%)]" />

          {/* Keep existing header layout; overlay feel */}
          <Navbar variant="hero" />

          {/* Match navbar horizontal padding for perfect alignment */}
          <div className="relative z-20 mx-auto w-full max-w-[1440px] px-[24px] sm:px-[48px] lg:px-[38px] pt-[calc(132px+env(safe-area-inset-top,0px))]">
            <div className="max-w-[660px]">
              <div className="text-[11px] font-[800] tracking-[0.18em] text-[#C8A96E] drop-shadow-[0_1px_8px_rgba(0,0,0,0.85)]">
                PROJECTS SHOWCASE
              </div>
              <h2 className="mt-[14px] font-heading text-[58px] leading-[1.02] text-white [text-shadow:0_2px_32px_rgba(0,0,0,0.55),0_1px_4px_rgba(0,0,0,0.85)]">
                Crafted Spaces,
                <br />
                Designed to{' '}
                <span className="italic text-[#C8A96E] [text-shadow:0_2px_24px_rgba(0,0,0,0.5)]">
                  Inspire
                </span>
              </h2>
              <p className="mt-[14px] max-w-[560px] text-[13px] leading-[1.7] text-[rgba(255,255,255,0.88)] [text-shadow:0_1px_12px_rgba(0,0,0,0.65)]">
                Explore a curated collection of residential and commercial
                interiors—where every detail is intentional, premium, and
                timeless.
              </p>

              <div className="mt-[18px] flex flex-wrap items-center gap-[12px]">
                <button
                  type="button"
                  onClick={() => consultation.open('projects-hero')}
                  className="inline-flex items-center gap-[10px] rounded-full bg-[#C8A96E] px-[18px] py-[12px] text-[13px] font-[800] text-[#1A1209] shadow-[0_14px_26px_rgba(0,0,0,0.22)] hover:bg-[#B8965C] transition-colors"
                >
                  Book a Consultation <ArrowRight className="h-[16px] w-[16px]" />
                </button>
                <a
                  href="#grid"
                  className="inline-flex items-center gap-[10px] rounded-full border border-[rgba(255,255,255,0.18)] bg-[rgba(0,0,0,0.22)] px-[18px] py-[12px] text-[13px] font-[800] text-white backdrop-blur-[10px] hover:bg-[rgba(0,0,0,0.30)] transition-colors"
                >
                  View Projects <ArrowRight className="h-[16px] w-[16px]" />
                </a>
              </div>
            </div>
          </div>

          {/* Floating filter bar */}
          <div className="absolute bottom-[-22px] left-1/2 z-30 w-[min(1120px,calc(100%-36px))] -translate-x-1/2">
            <div className="flex max-w-full flex-nowrap items-center justify-start gap-[10px] overflow-x-auto rounded-full bg-[rgba(12,10,9,0.72)] px-[12px] py-[10px] shadow-[0_22px_60px_rgba(0,0,0,0.45)] ring-1 ring-[rgba(255,255,255,0.10)] backdrop-blur-[12px] sm:flex-wrap sm:justify-center [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {PROJECT_CATEGORIES.map((c) => {
                const Icon = CATEGORY_ICONS[c.key] || Sparkles
                return (
                  <FilterPill
                    key={c.key}
                    active={active === c.key}
                    icon={Icon}
                    label={c.label}
                    onClick={() => setActive(c.key)}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section
        id="grid"
        className="mx-auto w-full max-w-[1440px] px-[18px] sm:px-[48px] lg:px-[80px] pt-[88px] pb-[54px] sm:pt-[96px]"
      >
        <div className="flex flex-col gap-[14px] sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-[11px] font-[800] tracking-[0.18em] text-[#C8A96E]">
              CURATED PROJECTS
            </div>
            <h1 className="mt-[10px] font-heading text-[34px] font-[500] text-white">
              Our Projects
            </h1>
            <h2 className="mt-[8px] font-heading text-[22px] font-[500] leading-[1.15] text-[rgba(255,255,255,0.88)] sm:text-[26px]">
              Luxury Interiors, <span className="italic text-[#C8A96E]">Real Homes</span>
            </h2>
          </div>

          <div className="inline-flex shrink-0 items-center gap-[10px] text-[12px] text-[rgba(255,255,255,0.72)]">
            <Menu className="h-[16px] w-[16px] text-[#C8A96E]" aria-hidden />
            {active === 'all'
              ? `${PROJECTS.length} projects`
              : `${filtered.length} in ${PROJECT_CATEGORIES.find((c) => c.key === active)?.label || active}`}
          </div>
        </div>

        <p className="mt-[18px] max-w-[820px] text-[13px] leading-[1.75] text-[rgba(255,255,255,0.72)]">
          Browse a curated set of residential and commercial interiors delivered with the same
          rigor we bring to projects across India: clear planning, premium materials, and
          meticulous execution. Whether you are envisioning a{' '}
          <span className="text-[rgba(255,255,255,0.88)]">modern living room</span>, a{' '}
          <span className="text-[rgba(255,255,255,0.88)]">modular kitchen</span>, or a{' '}
          <span className="text-[rgba(255,255,255,0.88)]">full-home transformation</span>, these
          spaces illustrate how thoughtful interior design elevates everyday life—calm, functional,
          and unmistakably refined.
        </p>

        <div className="mt-[22px] grid auto-rows-fr gap-[14px] sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[rgba(255,255,255,0.04)]">
        <div className="mx-auto w-full max-w-[1440px] px-[18px] sm:px-[48px] lg:px-[80px]">
          <div className="grid grid-cols-1 divide-y divide-[rgba(255,255,255,0.10)] sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
            <Stat icon={BriefcaseBusiness} value="800+" label="Projects Completed" />
            <Stat icon={Users} value="750+" label="Happy Clients" />
            <Stat icon={Clock3} value="15+" label="Years of Experience" />
            <Stat icon={Sparkles} value="12+" label="Design Experts" />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative min-h-[280px] overflow-hidden sm:min-h-[300px]">
        <img
          src="/projects/fullhome-1.png"
          alt="Full home luxury interior design by GSR Interiors, India"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        {/* Stronger left-to-right scrim so headline stays readable on bright areas of the photo */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,4,3,0.94)_0%,rgba(5,4,3,0.88)_42%,rgba(5,4,3,0.72)_72%,rgba(5,4,3,0.55)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,4,3,0.35)_0%,transparent_45%,rgba(5,4,3,0.5)_100%)]" />
        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-[18px] sm:px-[48px] lg:px-[80px] py-[54px]">
          <div className="max-w-[720px]">
            <div className="text-[11px] font-[800] tracking-[0.18em] text-[#C8A96E] drop-shadow-[0_1px_8px_rgba(0,0,0,0.85)]">
              READY TO START?
            </div>
            <h3 className="mt-[12px] font-heading text-[40px] font-[500] leading-[1.08] text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.65),0_1px_4px_rgba(0,0,0,0.9)]">
              Let&apos;s Create a Space That Feels{' '}
              <span className="italic text-[#C8A96E] [text-shadow:0_2px_20px_rgba(0,0,0,0.6),0_1px_3px_rgba(0,0,0,0.85)]">
                Uniquely Yours
              </span>
            </h3>
            <p className="mt-[12px] text-[13px] leading-[1.7] text-[rgba(255,255,255,0.88)] [text-shadow:0_1px_14px_rgba(0,0,0,0.7)]">
              Share your vision—our team will guide you from concept to completion
              with premium craftsmanship and clear timelines.
            </p>

            <div className="mt-[16px] flex flex-wrap items-center gap-[12px]">
              <button
                type="button"
                onClick={() => consultation.open('projects-cta')}
                className="inline-flex items-center gap-[10px] rounded-full bg-[#C8A96E] px-[18px] py-[12px] text-[13px] font-[800] text-[#1A1209] shadow-[0_14px_26px_rgba(0,0,0,0.22)] hover:bg-[#B8965C] transition-colors"
              >
                Book a Consultation <ArrowRight className="h-[16px] w-[16px]" />
              </button>
              <a
                href="#grid"
                className="inline-flex items-center gap-[10px] rounded-full border border-[rgba(255,255,255,0.18)] bg-[rgba(0,0,0,0.22)] px-[18px] py-[12px] text-[13px] font-[800] text-white backdrop-blur-[10px] hover:bg-[rgba(0,0,0,0.30)] transition-colors"
              >
                Explore Projects <ArrowRight className="h-[16px] w-[16px]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

