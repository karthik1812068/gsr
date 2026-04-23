import { useEffect } from 'react'
import {
  ArrowRight,
  Armchair,
  BedDouble,
  BriefcaseBusiness,
  ClipboardList,
  Handshake,
  Home,
  KeyRound,
  Lightbulb,
  Play,
  Settings,
  UtensilsCrossed,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import { useConsultation } from '../components/BookConsultationModal/ConsultationContext.jsx'
import { usePageSeo } from '../seo/usePageSeo.js'

const services = [
  {
    title: 'Residential\nInteriors',
    desc: 'Complete home interiors designed for comfort, style, and everyday living.',
    icon: Home,
    img: '/service-1.jpg',
  },
  {
    title: 'Modular\nKitchens',
    desc: 'Smart, space-efficient kitchens with modern finishes and seamless functionality.',
    icon: UtensilsCrossed,
    img: '/service-2.jpg',
  },
  {
    title: 'Living Room\nDesign',
    desc: 'Elegant and inviting spaces designed to make a lasting impression.',
    icon: Armchair,
    img: '/service-3.jpg',
    imgClass: 'scale-[1.10] object-[50%_45%]',
  },
  {
    title: 'Bedroom\nInteriors',
    desc: 'Calm, luxurious, and personalised spaces for relaxation.',
    icon: BedDouble,
    img: '/service-4.jpg',
  },
  {
    title: 'Custom Furniture\n& Decor',
    desc: 'Bespoke furniture and decor elements tailored to your space and taste.',
    icon: Settings,
    img: '/service-5.jpg',
  },
  {
    title: 'Turnkey\nProjects',
    desc: 'End-to-end interior solutions—from concept to execution—hassle-free.',
    icon: KeyRound,
    img: '/service-6.jpg',
  },
]

const steps = [
  {
    num: '01',
    title: 'Consultation',
    desc: 'We understand your vision, lifestyle, and requirements.',
    icon: Handshake,
  },
  {
    num: '02',
    title: 'Concept Design',
    desc: 'We create layouts and design concepts tailored to your space.',
    icon: Lightbulb,
  },
  {
    num: '03',
    title: 'Execution',
    desc: 'Our team brings the design to life with precision and quality.',
    icon: ClipboardList,
  },
  {
    num: '04',
    title: 'Handover',
    desc: 'We deliver a finished space, ready for you to experience.',
    icon: ArrowRight,
  },
]

function ServiceCard({ title, desc, icon: Icon, img, imgClass = '' }) {
  return (
    <article className="rounded-[22px] bg-[#EFE7DE] shadow-[0_10px_24px_rgba(0,0,0,0.06)] overflow-hidden">
      <div className="relative h-[150px]">
        <img
          src={img}
          alt={`${title.replace(/\n/g, ' ')} — interior design service by GSR Interiors, India`}
          className={[
            'absolute inset-0 h-full w-full object-cover object-center',
            imgClass,
          ].join(' ')}
        />
      </div>

      <div className="relative px-[18px] pt-[18px] pb-[18px]">
        <div className="absolute left-[18px] top-[-18px] flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[#F8F4EF] shadow-[0_10px_18px_rgba(0,0,0,0.08)] text-[#6E6257]">
          <Icon className="h-[18px] w-[18px]" />
        </div>

        <h3 className="pt-[8px] text-[14px] font-[700] leading-[1.15] text-[#1E1B18] whitespace-pre-line">
          {title}
        </h3>
        <p className="mt-[10px] text-[12px] leading-[1.65] text-[#6E6257]">
          {desc}
        </p>
      </div>
    </article>
  )
}

function StepCard({ num, title, desc, icon: Icon }) {
  return (
    <div className="relative rounded-[22px] bg-[#EFE7DE] px-[18px] pt-[22px] pb-[18px] text-center shadow-[0_10px_24px_rgba(0,0,0,0.06)]">
      <div className="absolute left-1/2 top-[-14px] -translate-x-1/2 rounded-full bg-[#C89A63] px-[10px] py-[6px] text-[11px] font-[700] tracking-[0.08em] text-[#1E1B18] shadow-[0_10px_18px_rgba(0,0,0,0.10)]">
        {num}
      </div>
      <div className="mx-auto flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[rgba(200,154,99,0.18)] text-[#5A4634]">
        <Icon className="h-[20px] w-[20px]" />
      </div>
      <div className="mt-[12px] text-[13px] font-[700] text-[#1E1B18]">
        {title}
      </div>
      <p className="mt-[8px] text-[12px] leading-[1.65] text-[#6E6257]">
        {desc}
      </p>
    </div>
  )
}

function SpecialtyBlock({ icon: Icon, title, children }) {
  return (
    <div className="rounded-[22px] bg-[#F8F4EF] px-[20px] py-[20px] shadow-[0_10px_24px_rgba(0,0,0,0.05)] ring-1 ring-[rgba(30,27,24,0.06)]">
      <div className="flex items-start gap-[12px]">
        <div className="mt-[2px] flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[rgba(200,154,99,0.16)] text-[#5A4634]">
          <Icon className="h-[18px] w-[18px]" />
        </div>
        <div className="min-w-0">
          <h3 className="text-[15px] font-[800] text-[#1E1B18]">{title}</h3>
          <p className="mt-[8px] text-[12px] leading-[1.7] text-[#6E6257]">{children}</p>
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  const consultation = useConsultation()

  usePageSeo({
    title: 'Interior Design Services | Home & Office Interiors',
    description:
      'Explore our interior design services including modular kitchens, living rooms, bedrooms, and office spaces.',
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-[#F8F4EF]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="relative h-[520px] w-full overflow-hidden">
          <img
            src="/services-hero.jpg"
            alt="Interior design services hero — modern home and office interiors, GSR Interiors India"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.62)_0%,rgba(0,0,0,0.40)_45%,rgba(0,0,0,0.18)_100%)]" />

          <Navbar variant="hero" />

          <div className="relative z-20 mx-auto w-full max-w-[1440px] px-[18px] sm:px-[48px] lg:px-[80px] pt-[calc(120px+env(safe-area-inset-top,0px))]">
            <div className="max-w-[560px]">
              <div className="text-[11px] font-[700] tracking-[0.16em] text-[rgba(247,243,238,0.72)]">
                OUR EXPERTISE
              </div>
              <h1 className="mt-[14px] font-heading text-[40px] leading-[1.06] text-[#F7F3EE] sm:text-[48px] lg:text-[52px]">
                Our Interior Design Services
              </h1>
              <p className="mt-[14px] max-w-[520px] text-[13px] leading-[1.7] text-[rgba(247,243,238,0.74)]">
                From concept to completion, we offer end-to-end interior design
                solutions tailored to your lifestyle, needs, and vision—across homes and workplaces
                throughout India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="mx-auto w-full max-w-[1440px] px-[18px] sm:px-[48px] lg:px-[80px] pt-[34px] pb-[56px]">
        <div className="text-center">
          <div className="text-[11px] font-[700] tracking-[0.16em] text-[#6E6257]">
            WHAT WE DO
          </div>
          <h2 className="mt-[10px] font-heading text-[34px] font-[500] text-[#1E1B18]">
            Signature scopes for <span className="italic text-[#C89A63]">modern living</span>
          </h2>
          <p className="mx-auto mt-[10px] max-w-[760px] text-[13px] leading-[1.65] text-[#6E6257]">
            We create elegant, functional, and timeless spaces through a wide
            range of interior design services designed to meet your unique
            requirements—whether you need a turnkey home interior, a statement modular kitchen, or a
            focused office interior design refresh.
          </p>
        </div>

        <div className="mt-[22px] grid gap-[16px] sm:grid-cols-2 lg:grid-cols-6">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>

        <div className="mx-auto mt-[40px] max-w-[980px]">
          <h2 className="text-center font-heading text-[26px] font-[500] text-[#1E1B18] sm:text-[30px]">
            Where <span className="italic text-[#C89A63]">home interior designers</span> meet
            commercial rigor
          </h2>
          <p className="mt-[12px] text-center text-[13px] leading-[1.75] text-[#6E6257]">
            Affordable interior designers do not have to mean compromise: we engineer value
            through smart layouts, durable finishes, and transparent budgets. Explore the four
            pillars most clients start with—each can stand alone or roll into a turnkey program led
            by one accountable studio team.
          </p>
        </div>

        <div className="mt-[26px] grid gap-[14px] md:grid-cols-2">
          <SpecialtyBlock icon={UtensilsCrossed} title="Modular Kitchen Design">
            Workflow-first planning, integrated appliances, and easy-maintenance surfaces come
            together in kitchens that feel as good to cook in as they look on camera. We balance
            ventilation, task lighting, and storage density so everyday use stays effortless.
          </SpecialtyBlock>
          <SpecialtyBlock icon={Armchair} title="Living Room Interiors">
            Seating plans, media walls, and layered lighting shape living rooms that feel generous
            and grounded. We design for conversation, circulation, and quiet moments—pairing modern
            interior design restraint with tactile warmth.
          </SpecialtyBlock>
          <SpecialtyBlock icon={BedDouble} title="Bedroom Interiors">
            Bedrooms should feel like a nightly retreat. From wardrobe systems to headboard
            details, we choreograph acoustics, blackout options, and soft finishes for calmer sleep
            and smarter storage.
          </SpecialtyBlock>
          <SpecialtyBlock icon={BriefcaseBusiness} title="Office Interiors">
            Hybrid workplaces demand focus zones, collaboration pockets, and brand-forward reception
            experiences. We deliver office interior design that supports productivity, client
            confidence, and long-term flexibility as teams evolve.
          </SpecialtyBlock>
        </div>
      </section>

      {/* Approach / Process */}
      <section className="bg-[#F3EEE7]">
        <div className="mx-auto w-full max-w-[1440px] px-[18px] sm:px-[48px] lg:px-[80px] py-[44px]">
          <div className="grid gap-[26px] lg:grid-cols-[1fr_2fr]">
            <div className="pt-[8px]">
              <div className="text-[11px] font-[700] tracking-[0.16em] text-[#6E6257]">
                OUR APPROACH
              </div>
              <h2 className="mt-[12px] font-heading text-[36px] font-[500] leading-[1.05] text-[#1E1B18]">
                A Seamless Design{' '}
                <span className="italic text-[#C89A63]">Process</span>
              </h2>
              <p className="mt-[12px] max-w-[520px] text-[13px] leading-[1.65] text-[#6E6257]">
                A clear, collaborative process that ensures your space is
                beautifully designed and flawlessly executed.
              </p>
            </div>

            <div className="relative">
              {/* connector line (desktop) */}
              <div className="pointer-events-none absolute left-[6%] right-[6%] top-[36px] hidden lg:block h-[1px] bg-[rgba(30,27,24,0.14)]" />
              <div className="grid gap-[16px] sm:grid-cols-2 lg:grid-cols-4">
                {steps.map((st) => (
                  <StepCard key={st.num} {...st} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA banner */}
      <section className="mx-auto w-full max-w-[1440px] px-[18px] sm:px-[48px] lg:px-[80px] pb-[84px] pt-[36px]">
        <div className="relative overflow-hidden rounded-[32px]">
          <img
            src="/services-cta.jpg"
            alt="Book interior design consultation — GSR Interiors India"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.55)]" />

          <div className="relative grid gap-[18px] px-[22px] py-[34px] sm:px-[44px] sm:py-[44px] lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-[620px]">
              <div className="text-[11px] font-[700] tracking-[0.16em] text-[rgba(247,243,238,0.74)]">
                LET'S CREATE SOMETHING BEAUTIFUL
              </div>
              <h3 className="mt-[10px] font-heading text-[36px] leading-[1.05] text-[#F7F3EE]">
                Ready to Transform
                <br />
                Your Space?
              </h3>
              <p className="mt-[10px] text-[13px] leading-[1.65] text-[rgba(247,243,238,0.74)]">
                Let's design a space that reflects your style and enhances your lifestyle.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-[12px]">
              <button
                type="button"
                onClick={() => consultation.open('services-cta')}
                className="inline-flex items-center gap-[12px] rounded-full bg-[#C89A63] px-[18px] py-[12px] text-[13px] font-[600] text-[#1E1B18] shadow-[0_12px_26px_rgba(0,0,0,0.16)] hover:bg-[#B98954] transition-colors"
              >
                Book Your Consultation
                <ArrowRight className="h-[16px] w-[16px]" />
              </button>

              <Link
                to="/projects"
                className="inline-flex items-center gap-[10px] rounded-full border border-[rgba(247,243,238,0.34)] bg-[rgba(0,0,0,0.18)] px-[16px] py-[12px] text-[13px] font-[600] text-[#F7F3EE] backdrop-blur-[10px] hover:bg-[rgba(0,0,0,0.26)] transition-colors"
              >
                <span className="inline-flex h-[30px] w-[30px] items-center justify-center rounded-full border border-[rgba(247,243,238,0.34)]">
                  <Play className="h-[14px] w-[14px]" />
                </span>
                View Our Projects
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center gap-[10px] rounded-full border border-[rgba(247,243,238,0.22)] bg-[rgba(0,0,0,0.12)] px-[16px] py-[12px] text-[13px] font-[600] text-[#F7F3EE] backdrop-blur-[10px] hover:bg-[rgba(0,0,0,0.22)] transition-colors"
              >
                Know More About Us
                <ArrowRight className="h-[14px] w-[14px]" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


