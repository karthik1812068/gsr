import { useEffect } from 'react'
import { usePageSeo } from '../seo/usePageSeo.js'
import { ArrowRight, Play, ExternalLink, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import ClientVideoGrid from '../components/testimonials/ClientVideoGrid.jsx'
import { CLIENT_STORY_VIDEOS } from '../data/clientVideos.js'
import {
  SITE_EMAIL,
  SITE_INSTAGRAM,
  SITE_YOUTUBE,
} from '../data/siteContact.js'
import { useConsultation } from '../components/BookConsultationModal/ConsultationContext.jsx'

export default function Testimonials() {
  const consultation = useConsultation()

  usePageSeo({
    title: 'Client Testimonials | GSR Interiors Reviews',
    description:
      'Read what our clients say about GSR Interiors and our interior design services.',
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-[#080705]">
      <section className="relative">
        <div className="relative min-h-[480px] w-full overflow-hidden sm:min-h-[540px]">
          <img
            src="/studio-preview.jpg"
            alt="GSR Interiors client testimonials and interior design reviews, India"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,4,3,0.90)_0%,rgba(5,4,3,0.74)_48%,rgba(5,4,3,0.42)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,4,3,0.38)_0%,transparent_42%)]" />

          <Navbar variant="hero" />

          <div className="relative z-20 mx-auto w-full max-w-[1440px] px-[24px] sm:px-[32px] lg:px-[38px] pt-[calc(132px+env(safe-area-inset-top,0px))] pb-[64px]">
            <div className="max-w-[680px]">
              <div className="text-[11px] font-[800] tracking-[0.18em] text-[#C8A96E] drop-shadow-[0_1px_8px_rgba(0,0,0,0.85)]">
                CLIENT STORIES
              </div>
              <h1 className="mt-[14px] font-heading text-[38px] font-[500] leading-[1.05] text-white [text-shadow:0_2px_32px_rgba(0,0,0,0.55)] sm:text-[44px]">
                What Our Clients Say
              </h1>
              <h2 className="mt-[12px] font-heading text-[30px] font-[500] leading-[1.05] text-white/95 [text-shadow:0_2px_28px_rgba(0,0,0,0.5)] sm:text-[34px]">
                Hear it from our{' '}
                <span className="italic text-[#C8A96E]">clients</span>
              </h2>
              <div className="mt-[16px] h-[3px] w-[54px] rounded-full bg-[#C8A96E] shadow-[0_0_24px_rgba(200,169,110,0.45)]" />
              <p className="mt-[16px] max-w-[560px] text-[13px] leading-[1.75] text-[rgba(247,243,238,0.86)] [text-shadow:0_1px_14px_rgba(0,0,0,0.65)]">
                Real project walkthroughs and reactions — straight from the people we
                designed for across India. Follow us for more on Instagram and YouTube.
              </p>

              <div className="mt-[22px] flex flex-wrap items-center gap-[12px]">
                <a
                  href={SITE_INSTAGRAM.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-[10px] rounded-full border border-[rgba(247,243,238,0.28)] bg-[rgba(0,0,0,0.35)] px-[16px] py-[10px] text-[12px] font-[700] text-[#F7F3EE] backdrop-blur-[10px] transition-colors hover:bg-[rgba(0,0,0,0.48)]"
                >
                  <ExternalLink className="h-[16px] w-[16px]" aria-hidden />
                  Instagram @{SITE_INSTAGRAM.handle}
                </a>
                <a
                  href={SITE_YOUTUBE.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-[10px] rounded-full border border-[rgba(247,243,238,0.28)] bg-[rgba(0,0,0,0.35)] px-[16px] py-[10px] text-[12px] font-[700] text-[#F7F3EE] backdrop-blur-[10px] transition-colors hover:bg-[rgba(0,0,0,0.48)]"
                >
                  <ExternalLink className="h-[16px] w-[16px]" aria-hidden />
                  YouTube
                </a>
                <a
                  href={`mailto:${SITE_EMAIL}`}
                  className="inline-flex items-center gap-[10px] rounded-full border border-[rgba(247,243,238,0.28)] bg-[rgba(0,0,0,0.35)] px-[16px] py-[10px] text-[12px] font-[700] text-[#F7F3EE] backdrop-blur-[10px] transition-colors hover:bg-[rgba(0,0,0,0.48)]"
                >
                  <Mail className="h-[16px] w-[16px]" aria-hidden />
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F4EF] pt-[48px] pb-[28px] sm:pt-[56px] sm:pb-[36px]">
        <div className="mx-auto w-full max-w-[1440px] px-[18px] sm:px-[48px] lg:px-[80px]">
          <div className="max-w-[900px]">
            <div className="text-[11px] font-[800] tracking-[0.18em] text-[#6E6257]">
              VIDEO STORIES
            </div>
            <h2 className="mt-[12px] font-heading text-[34px] font-[500] leading-[1.08] text-[#1E1B18] sm:text-[40px]">
              On-site <span className="italic text-[#C89A63]">reactions</span> &amp; reveals
            </h2>
            <p className="mt-[12px] max-w-[720px] text-[13px] leading-[1.7] text-[#6E6257]">
              Clips play automatically while you scroll (muted so browsers allow autoplay). Use
              the video controls to pause or turn sound on. The same stories also appear on the
              home page. These testimonials reflect how we deliver modern interior design with clear
              communication—whether you are renovating a family home or commissioning luxury
              interiors India-wide with a single studio partner.
            </p>
          </div>

          <div className="mt-[28px]">
            <ClientVideoGrid videos={CLIENT_STORY_VIDEOS} />
          </div>
        </div>
      </section>

      <section className="bg-[#0D0B09]">
        <div className="mx-auto w-full max-w-[1440px] px-[18px] py-[48px] sm:px-[48px] sm:py-[56px] lg:px-[80px]">
          <div className="relative overflow-hidden rounded-[28px] ring-1 ring-[rgba(255,255,255,0.08)]">
            <img
              src="/hero-bg.jpg"
              alt="Book interior design consultation after viewing client stories"
              className="absolute inset-0 h-full w-full object-cover object-center opacity-90"
            />
            <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(5,4,3,0.94)_0%,rgba(5,4,3,0.88)_45%,rgba(5,4,3,0.62)_100%)]" />

            <div className="relative grid gap-[22px] px-[22px] py-[36px] sm:px-[40px] sm:py-[44px] lg:grid-cols-[1fr_auto] lg:items-center lg:gap-[40px] lg:px-[48px] lg:py-[48px]">
              <div className="max-w-[620px]">
                <div className="text-[11px] font-[800] tracking-[0.18em] text-[#C8A96E] drop-shadow-[0_1px_10px_rgba(0,0,0,0.8)]">
                  START YOUR STORY
                </div>
                <h2 className="mt-[12px] font-heading text-[34px] font-[500] leading-[1.05] text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.5)] sm:text-[40px]">
                  Ready for a home
                  <br />
                  <span className="italic text-[#C8A96E]">you&apos;ll love?</span>
                </h2>
                <p className="mt-[12px] text-[13px] leading-[1.7] text-[rgba(247,243,238,0.82)] [text-shadow:0_1px_12px_rgba(0,0,0,0.65)]">
                  Book a consultation and tell us about your space — we&apos;ll get back
                  within 24 hours.
                </p>
              </div>

              <div className="flex flex-col gap-[12px] sm:flex-row sm:flex-wrap sm:items-center lg:flex-col lg:items-stretch xl:flex-row xl:items-center">
                <button
                  type="button"
                  onClick={() => consultation.open('testimonials-cta')}
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
                  View Our Projects
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
