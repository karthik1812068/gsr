import { useEffect } from 'react'
import { usePageSeo } from '../seo/usePageSeo.js'
import { ArrowRight, Play } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import ProcessTimelineSection from '../components/process/ProcessTimelineSection.jsx'
import { useConsultation } from '../components/BookConsultationModal/ConsultationContext.jsx'

export default function Process() {
  const consultation = useConsultation()

  usePageSeo({
    title: 'Our Design Process | GSR Interiors',
    description:
      'Discover how GSR Interiors transforms your space step-by-step from concept to completion.',
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-[#080705]">
      {/* Hero */}
      <section className="relative">
        <div className="relative min-h-[520px] w-full overflow-hidden sm:min-h-[580px]">
          <img
            src="/services-hero.jpg"
            alt="Interior design process — GSR Interiors studio, India"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,4,3,0.88)_0%,rgba(5,4,3,0.72)_48%,rgba(5,4,3,0.45)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,4,3,0.35)_0%,transparent_45%)]" />

          <Navbar variant="hero" />

          <div className="relative z-20 mx-auto w-full max-w-[1440px] px-[24px] sm:px-[32px] lg:px-[38px] pt-[calc(132px+env(safe-area-inset-top,0px))] pb-[72px]">
            <div className="max-w-[680px]">
              <div className="text-[11px] font-[800] tracking-[0.18em] text-[#C8A96E] drop-shadow-[0_1px_8px_rgba(0,0,0,0.85)]">
                HOW WE WORK
              </div>
              <h1 className="mt-[14px] font-heading text-[36px] font-[500] leading-[1.06] text-white [text-shadow:0_2px_32px_rgba(0,0,0,0.55)] sm:text-[42px] lg:text-[46px]">
                Our Interior Design Process
              </h1>
              <h2 className="mt-[12px] font-heading text-[30px] font-[500] leading-[1.05] text-white/95 [text-shadow:0_2px_28px_rgba(0,0,0,0.5)] sm:text-[36px]">
                A refined path from
                <br />
                vision to <span className="italic text-[#C8A96E]">reality</span>
              </h2>
              <div className="mt-[16px] h-[3px] w-[54px] rounded-full bg-[#C8A96E] shadow-[0_0_24px_rgba(200,169,110,0.45)]" />
              <p className="mt-[16px] max-w-[560px] text-[13px] leading-[1.75] text-[rgba(247,243,238,0.86)] [text-shadow:0_1px_14px_rgba(0,0,0,0.65)]">
                Our interior design process is deliberate, transparent, and tailored to homes and
                offices across India—so every phase feels as considered as the finished space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro (light) — framed card */}
      <section className="relative bg-[#F8F4EF] pt-[48px] pb-[28px] sm:pt-[56px] sm:pb-[36px]">
        <div className="mx-auto w-full max-w-[1440px] px-[18px] sm:px-[48px] lg:px-[80px]">
          <div className="relative overflow-hidden rounded-[28px] bg-[#EFE7DE] px-[22px] py-[26px] shadow-[0_18px_44px_rgba(0,0,0,0.08)] ring-1 ring-[rgba(30,27,24,0.09)] sm:px-[36px] sm:py-[34px] lg:px-[42px] lg:py-[40px]">
            <div
              className="pointer-events-none absolute -right-[12%] -top-[28%] h-[220px] w-[220px] rounded-full bg-[rgba(200,154,99,0.08)] blur-2xl"
              aria-hidden
            />
            <div className="relative max-w-[720px]">
              <div className="text-[11px] font-[800] tracking-[0.18em] text-[#6E6257]">
                OUR APPROACH
              </div>
              <div className="mt-[12px] h-[3px] w-[52px] rounded-full bg-[#C89A63]" />
              <h2 className="mt-[14px] font-heading text-[36px] font-[500] leading-[1.06] text-[#1E1B18] sm:text-[42px]">
                Precision, partnership, and{' '}
                <span className="italic text-[#C89A63]">quiet luxury</span>
              </h2>
              <p className="mt-[14px] text-[13px] leading-[1.75] text-[#6E6257]">
                We believe exceptional interiors emerge when creative direction meets
                disciplined execution. From the first conversation to the final
                accessory, you stay informed, involved, and confident in the outcome.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ProcessTimelineSection />

      {/* CTA banner */}
      <section className="bg-[#0D0B09]">
        <div className="mx-auto w-full max-w-[1440px] px-[18px] py-[48px] sm:px-[48px] sm:py-[56px] lg:px-[80px]">
          <div className="relative overflow-hidden rounded-[28px] ring-1 ring-[rgba(255,255,255,0.08)]">
            <img
              src="/hero-bg.jpg"
              alt="Begin your interior design project with GSR Interiors"
              className="absolute inset-0 h-full w-full object-cover object-center opacity-90"
            />
            <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(5,4,3,0.94)_0%,rgba(5,4,3,0.88)_45%,rgba(5,4,3,0.62)_100%)]" />

            <div className="relative grid gap-[22px] px-[22px] py-[36px] sm:px-[40px] sm:py-[44px] lg:grid-cols-[1fr_auto] lg:items-center lg:gap-[40px] lg:px-[48px] lg:py-[48px]">
              <div className="max-w-[620px]">
                <div className="text-[11px] font-[800] tracking-[0.18em] text-[#C8A96E] drop-shadow-[0_1px_10px_rgba(0,0,0,0.8)]">
                  BEGIN YOUR PROJECT
                </div>
                <h2 className="mt-[12px] font-heading text-[34px] font-[500] leading-[1.05] text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.5)] sm:text-[40px]">
                  Experience the GSR
                  <br />
                  <span className="italic text-[#C8A96E]">standard of care</span>
                </h2>
                <p className="mt-[12px] text-[13px] leading-[1.7] text-[rgba(247,243,238,0.82)] [text-shadow:0_1px_12px_rgba(0,0,0,0.65)]">
                  Share your brief—our team will guide you through the next steps and
                  schedule your consultation.
                </p>
              </div>

              <div className="flex flex-col gap-[12px] sm:flex-row sm:flex-wrap sm:items-center lg:flex-col lg:items-stretch xl:flex-row xl:items-center">
                <button
                  type="button"
                  onClick={() => consultation.open('process-cta')}
                  className="inline-flex items-center justify-center gap-[10px] rounded-full bg-[#C89A63] px-[22px] py-[14px] text-[13px] font-[700] text-[#1E1B18] shadow-[0_14px_32px_rgba(0,0,0,0.28)] transition-colors hover:bg-[#B98954]"
                >
                  Book a Consultation
                  <ArrowRight className="h-[16px] w-[16px]" />
                </button>
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center gap-[10px] rounded-full border border-[rgba(247,243,238,0.32)] bg-[rgba(0,0,0,0.22)] px-[20px] py-[14px] text-[13px] font-[600] text-[#F7F3EE] backdrop-blur-[10px] transition-colors hover:border-[rgba(247,243,238,0.45)] hover:bg-[rgba(0,0,0,0.32)]"
                >
                  <span className="inline-flex h-[30px] w-[30px] items-center justify-center rounded-full border border-[rgba(247,243,238,0.28)]">
                    <Play className="h-[14px] w-[14px]" />
                  </span>
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
