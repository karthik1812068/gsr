import { useEffect } from 'react'
import {
  Award,
  Building2,
  Lightbulb,
  Sparkles,
  Timer,
  Users,
  ArrowRight,
  Quote,
} from 'lucide-react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { usePageSeo } from '../seo/usePageSeo.js'

function Stat({ icon: Icon, value, label }) {
  return (
    <div className="flex flex-1 items-center justify-center gap-[10px] px-[14px] py-[16px] text-center">
      <div className="flex h-[26px] w-[26px] items-center justify-center text-[#C8A96E]">
        <Icon className="h-[18px] w-[18px]" />
      </div>
      <div className="leading-tight">
        <div className="text-[22px] font-[500] text-[#C8A96E]">{value}</div>
        <div className="mt-[4px] text-[11px] tracking-[0.02em] text-[#888888]">
          {label}
        </div>
      </div>
    </div>
  )
}

function PhilosophyCard({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-[24px] bg-[#EFE7DE] px-[18px] py-[18px] shadow-[0_10px_24px_rgba(0,0,0,0.06)]">
      <div className="flex items-start gap-[12px]">
        <div className="mt-[2px] flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[rgba(200,154,99,0.16)] text-[#5A4634]">
          <Icon className="h-[20px] w-[20px]" />
        </div>
        <div className="min-w-0">
          <div className="text-[14px] font-[800] text-[#1E1B18]">{title}</div>
          <p className="mt-[8px] text-[12px] leading-[1.65] text-[#6E6257]">
            {desc}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function About() {
  usePageSeo({
    title: 'About GSR Interiors | Expert Interior Designers',
    description:
      'Learn about GSR Interiors, our design philosophy, and how we create stylish and functional living spaces.',
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-[#F8F4EF]">
      <Navbar variant="glass" />

      {/* Hero / About section */}
      <section className="mx-auto w-full max-w-[1440px] px-[18px] sm:px-[48px] lg:px-[80px] pt-[calc(110px+env(safe-area-inset-top,0px))] pb-[36px]">
        <div className="grid gap-[22px] lg:grid-cols-[1fr_1.05fr] lg:items-center">
          {/* Left */}
          <div className="max-w-[620px]">
            <div className="text-[11px] font-[800] tracking-[0.18em] text-[#6E6257]">
              ABOUT GSR INTERIORS
            </div>

            <h1 className="mt-[14px] font-heading text-[40px] leading-[1.02] text-[#1E1B18] sm:text-[48px]">
              About GSR Interiors
            </h1>

            <h2 className="mt-[12px] font-heading text-[34px] leading-[1.05] text-[#1E1B18] sm:text-[40px]">
              Where Design
              <br />
              Meets <span className="italic text-[#C89A63]">Purpose</span>
            </h2>

            <div className="mt-[14px] h-[3px] w-[54px] rounded-full bg-[#C89A63]" />

            <p className="mt-[14px] max-w-[560px] text-[13px] leading-[1.75] text-[#6E6257]">
              GSR Interiors is a full-service interior design studio focused on
              creating elegant, functional, and timeless spaces for clients across India.
            </p>
            <p className="mt-[10px] max-w-[560px] text-[13px] leading-[1.75] text-[#6E6257]">
              Our designs are not just about how a space looks — but how it
              feels, functions, and reflects your personality.
            </p>
            <p className="mt-[10px] max-w-[560px] text-[13px] leading-[1.75] text-[#6E6257]">
              Whether you are comparing home interior designers for a new apartment or planning a
              full-scale luxury interiors India engagement for a villa, we bring the same standards
              of documentation, material integrity, and on-site supervision—so the finished space
              feels cohesive, calm, and unmistakably yours.
            </p>

            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('philosophy')
                el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              className="mt-[18px] inline-flex items-center gap-[10px] rounded-full bg-[#C89A63] px-[18px] py-[12px] text-[13px] font-[800] text-[#1E1B18] shadow-[0_12px_26px_rgba(0,0,0,0.12)] hover:bg-[#B98954] transition-colors"
            >
              Know More About Us
              <span className="inline-flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[rgba(255,255,255,0.22)]">
                <ArrowRight className="h-[16px] w-[16px]" />
              </span>
            </button>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="overflow-hidden rounded-[28px] rounded-tl-[120px] bg-[#EFE7DE] shadow-[0_18px_44px_rgba(0,0,0,0.10)]">
              <img
                src="/about-bg.jpg"
                alt="GSR Interiors residential interior design project, India"
                className="h-[340px] w-full object-cover sm:h-[420px] lg:h-[520px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="mx-auto w-full max-w-[1440px] px-[18px] sm:px-[48px] lg:px-[80px] pb-[42px]">
        <div className="rounded-[28px] bg-[#EFE7DE] shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
          <div className="flex flex-col divide-y divide-[rgba(30,27,24,0.14)] md:flex-row md:divide-y-0 md:divide-x">
            <Stat icon={Award} value="15+" label="Years of Experience" />
            <Stat icon={Users} value="750+" label="Happy Clients" />
            <Stat icon={Building2} value="800+" label="Projects Completed" />
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section id="philosophy" className="bg-[#F8F4EF]">
        <div className="mx-auto w-full max-w-[1440px] px-[18px] py-[52px] sm:px-[48px] lg:px-[80px]">
          <div className="grid gap-[24px] lg:grid-cols-[1fr_1.15fr] lg:items-start">
            <div>
              <div className="text-[11px] font-[800] tracking-[0.18em] text-[#6E6257]">
                OUR PHILOSOPHY
              </div>
              <h2 className="mt-[14px] font-heading text-[36px] font-[500] leading-[1.05] text-[#1E1B18]">
                Designing Spaces,
                <br />
                <span className="italic text-[#C8A96E]">Elevating Lives</span>
              </h2>
              <p className="mt-[12px] max-w-[520px] text-[13px] leading-[1.75] text-[#6E6257]">
                We believe great design has the power to transform everyday
                living. Our philosophy is built on a foundation of creativity,
                collaboration, and craftsmanship — delivering spaces that are as
                functional as they are beautiful.
              </p>
            </div>

            <div className="grid gap-[16px] sm:grid-cols-2">
              <PhilosophyCard
                icon={Lightbulb}
                title="Thoughtful Design"
                desc="Spaces designed with purpose, tailored to your lifestyle."
              />
              <PhilosophyCard
                icon={Sparkles}
                title="Quality & Detail"
                desc="We use premium materials and focus on every little detail."
              />
              <PhilosophyCard
                icon={Users}
                title="Client-Centric Approach"
                desc="Your vision is our priority — from day one to project handover."
              />
              <PhilosophyCard
                icon={Timer}
                title="Timely Delivery"
                desc="We value your time and ensure every project is completed on schedule."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="mx-auto w-full max-w-[1440px] px-[18px] pb-[56px] sm:px-[48px] lg:px-[80px]">
        <div className="relative overflow-hidden rounded-[32px]">
          <img
            src="/about-bg.jpg"
            alt="Interior design philosophy — GSR Interiors, India"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.78)]" />

          <div className="relative px-[18px] py-[40px] sm:px-[44px] sm:py-[56px]">
            <div className="max-w-[720px]">
              <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[rgba(200,154,99,0.18)] text-[#C89A63]">
                <Quote className="h-[20px] w-[20px]" />
              </div>
              <p className="mt-[14px] text-[18px] leading-[1.65] text-white sm:text-[20px]">
                A well-designed space is more than just beautiful — it&apos;s a
                reflection of the people who live and work in it.
              </p>
              <div className="mt-[18px] text-[13px] font-[700] text-[#C89A63]">
                — GSR Interiors
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

