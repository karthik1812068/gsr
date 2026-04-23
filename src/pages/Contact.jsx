import { useEffect } from 'react'
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Play,
  Send,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import { useConsultation } from '../components/BookConsultationModal/ConsultationContext.jsx'
import Footer from '../components/Footer.jsx'
import {
  SITE_EMAIL,
  SITE_PHONE_DISPLAY,
  SITE_STUDIO_ADDRESS,
} from '../data/siteContact.js'
import { usePageSeo } from '../seo/usePageSeo.js'

function InfoCard({ icon: Icon, title, children }) {
  return (
    <div className="flex items-start gap-[14px] rounded-[18px] bg-[#EFE7DE] px-[18px] py-[14px] shadow-[0_10px_22px_rgba(0,0,0,0.05)]">
      <div className="mt-[2px] flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[rgba(200,154,99,0.18)] text-[#5A4634]">
        <Icon className="h-[18px] w-[18px]" />
      </div>
      <div className="min-w-0">
        <div className="text-[12px] font-[700] text-[#1E1B18]">{title}</div>
        <div className="mt-[4px] text-[12px] leading-[1.6] text-[#6E6257]">
          {children}
        </div>
      </div>
    </div>
  )
}

function Benefit({ icon: Icon, title, desc }) {
  return (
    <div className="flex items-center justify-center gap-[12px] px-[14px] py-[18px]">
      <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-[rgba(255,255,255,0.28)]">
        <Icon className="h-[18px] w-[18px] text-[#F7F3EE]" />
      </div>
      <div className="leading-tight">
        <div className="text-[13px] font-[800] text-[#F7F3EE]">{title}</div>
        <div className="mt-[3px] text-[11px] text-[rgba(247,243,238,0.86)]">
          {desc}
        </div>
      </div>
    </div>
  )
}

export default function Contact() {
  const consultation = useConsultation()

  usePageSeo({
    title: 'Contact GSR Interiors | Get a Free Consultation',
    description:
      'Contact GSR Interiors for expert interior design services. Get a consultation today.',
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-[#F8F4EF]">
      {/* Hero */}
      <section className="relative">
        <div className="relative h-[760px] w-full overflow-hidden">
          <img
            src="/contact-hero.jpg"
            alt="Contact GSR Interiors for home and office interior design across India"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.66)_0%,rgba(0,0,0,0.44)_45%,rgba(0,0,0,0.18)_100%)]" />

          <Navbar variant="hero" />

          {/* Align hero content with navbar padding */}
          <div className="relative z-20 mx-auto w-full max-w-[1440px] px-[24px] sm:px-[32px] lg:px-[38px] pt-[calc(132px+env(safe-area-inset-top,0px))]">
            <div className="max-w-[660px]">
              <div className="text-[11px] font-[700] tracking-[0.16em] text-[rgba(247,243,238,0.72)]">
                LET&apos;S CREATE SOMETHING BEAUTIFUL
              </div>
              <h1 className="mt-[12px] font-heading text-[44px] leading-[1.06] text-[#F7F3EE] sm:text-[52px]">
                Contact Us
              </h1>
              <h2 className="mt-[10px] font-heading text-[28px] font-[500] leading-[1.1] text-[#F7F3EE] sm:text-[32px]">
                We&apos;d love to hear
                <br />
                about <span className="italic text-[#C89A63]">your project</span>
              </h2>
              <p className="mt-[12px] max-w-[560px] text-[13px] leading-[1.7] text-[rgba(247,243,238,0.74)]">
                Share your ideas for a home or office interior anywhere in India—we will respond
                with next steps, indicative timelines, and a consultation path that respects your
                goals and budget.
              </p>

              <div className="mt-[16px] flex flex-wrap items-center gap-[12px]">
                <button
                  type="button"
                  onClick={() => consultation.open('contact-hero')}
                  className="inline-flex items-center gap-[10px] rounded-full bg-[#C89A63] px-[18px] py-[12px] text-[13px] font-[700] text-[#1E1B18] shadow-[0_12px_26px_rgba(0,0,0,0.16)] hover:bg-[#B98954] transition-colors"
                >
                  <Phone className="h-[16px] w-[16px]" />
                  Book a Consultation
                  <ArrowRight className="h-[16px] w-[16px]" />
                </button>

                <Link
                  to="/projects"
                  className="inline-flex items-center gap-[10px] rounded-full border border-[rgba(247,243,238,0.34)] bg-[rgba(0,0,0,0.18)] px-[16px] py-[12px] text-[13px] font-[700] text-[#F7F3EE] backdrop-blur-[10px] hover:bg-[rgba(0,0,0,0.26)] transition-colors"
                >
                  <span className="inline-flex h-[30px] w-[30px] items-center justify-center rounded-full border border-[rgba(247,243,238,0.34)]">
                    <Play className="h-[14px] w-[14px]" />
                  </span>
                  See Our Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info + Form */}
      <section className="relative z-30 mx-auto w-full max-w-[1440px] px-[18px] sm:px-[48px] lg:px-[80px] -mt-[86px] pb-[34px]">
        <div className="rounded-[28px] bg-[#EFE7DE] px-[18px] py-[18px] shadow-[0_18px_40px_rgba(0,0,0,0.10)] sm:px-[22px] sm:py-[22px]">
          <div className="grid gap-[18px] lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
          {/* Left */}
          <div className="relative h-full overflow-hidden rounded-[24px] bg-[#F3EEE7] px-[22px] py-[22px] sm:px-[26px] sm:py-[26px]">
            <div className="text-[11px] font-[700] tracking-[0.16em] text-[#6E6257]">
              GET IN TOUCH
            </div>
            <h2 className="mt-[10px] font-heading text-[40px] font-[500] leading-[1.06] text-[#1E1B18]">
              Let&apos;s Start a{' '}
              <span className="italic text-[#C89A63]">Conversation</span>
            </h2>
            <p className="mt-[10px] max-w-[520px] text-[13px] leading-[1.7] text-[#6E6257]">
              Whether you&apos;re planning a full home interior or a single room
              makeover, we&apos;re here to help. Reach out to us and our team will
              get back to you within 24 hours. Ask about modular kitchens, living room layouts,
              bedroom wardrobes, or office interior design—we scope each enquiry with the same
              rigor, whether you are comparing affordable interior designers or investing in a
              luxury interiors India program.
            </p>

            <div className="mt-[18px] grid gap-[12px]">
              <InfoCard icon={Phone} title="Phone">
                {SITE_PHONE_DISPLAY}
              </InfoCard>
              <InfoCard icon={Mail} title="Email">
                <a
                  className="text-[#5A4634] underline-offset-4 hover:underline"
                  href={`mailto:${SITE_EMAIL}`}
                >
                  {SITE_EMAIL}
                </a>
              </InfoCard>
              <InfoCard icon={MapPin} title="Studio Address">
                {SITE_STUDIO_ADDRESS}
              </InfoCard>
              <InfoCard icon={Clock3} title="Working Hours">
                Monday – Saturday: 9:30 AM – 7:00 PM <br />
                (Sunday by appointment)
              </InfoCard>
            </div>
          </div>

          {/* Right */}
          <div className="h-full rounded-[24px] bg-[#0D0B09] px-[22px] py-[22px] shadow-[0_22px_54px_rgba(0,0,0,0.22)] sm:px-[30px] sm:py-[26px]">
            <div className="text-[11px] font-[700] tracking-[0.16em] text-[rgba(247,243,238,0.70)]">
              SEND US A MESSAGE
            </div>
            <h2 className="mt-[10px] font-heading text-[34px] font-[500] leading-[1.08] text-[#F7F3EE]">
              Tell Us About <span className="italic text-[#C89A63]">Your Project</span>
            </h2>

            <form className="mt-[16px]">
              <div className="grid gap-[12px] sm:grid-cols-2">
                <label className="block">
                  <span className="sr-only">Full Name</span>
                  <input
                    className="w-full rounded-[14px] bg-[rgba(255,255,255,0.06)] px-[14px] py-[12px] text-[13px] text-[#F7F3EE] placeholder:text-[rgba(247,243,238,0.46)] outline-none ring-1 ring-[rgba(255,255,255,0.10)] focus:ring-[rgba(200,154,99,0.45)]"
                    placeholder="Full Name"
                  />
                </label>
                <label className="block">
                  <span className="sr-only">Phone Number</span>
                  <input
                    className="w-full rounded-[14px] bg-[rgba(255,255,255,0.06)] px-[14px] py-[12px] text-[13px] text-[#F7F3EE] placeholder:text-[rgba(247,243,238,0.46)] outline-none ring-1 ring-[rgba(255,255,255,0.10)] focus:ring-[rgba(200,154,99,0.45)]"
                    placeholder="Phone Number"
                  />
                </label>
              </div>

              <div className="mt-[12px] grid gap-[12px] sm:grid-cols-2">
                <label className="block">
                  <span className="sr-only">Email Address</span>
                  <input
                    className="w-full rounded-[14px] bg-[rgba(255,255,255,0.06)] px-[14px] py-[12px] text-[13px] text-[#F7F3EE] placeholder:text-[rgba(247,243,238,0.46)] outline-none ring-1 ring-[rgba(255,255,255,0.10)] focus:ring-[rgba(200,154,99,0.45)]"
                    placeholder="Email Address"
                  />
                </label>
                <label className="block">
                  <span className="sr-only">Project Type</span>
                  <select className="w-full appearance-none rounded-[14px] bg-[rgba(255,255,255,0.06)] px-[14px] py-[12px] pr-[38px] text-[13px] text-[rgba(247,243,238,0.80)] outline-none ring-1 ring-[rgba(255,255,255,0.10)] focus:ring-[rgba(200,154,99,0.45)]">
                    <option>Project Type</option>
                    <option>Home Interior</option>
                    <option>Kitchen</option>
                    <option>Living Room</option>
                    <option>Bedroom</option>
                    <option>Commercial</option>
                  </select>
                </label>
              </div>

              <div className="mt-[12px]">
                <label className="block">
                  <div className="mb-[6px] text-[12px] font-[600] text-[rgba(247,243,238,0.72)]">
                    Project Details
                  </div>
                  <textarea
                    rows={5}
                    className="w-full resize-none rounded-[14px] bg-[rgba(255,255,255,0.06)] px-[14px] py-[12px] text-[13px] text-[#F7F3EE] placeholder:text-[rgba(247,243,238,0.46)] outline-none ring-1 ring-[rgba(255,255,255,0.10)] focus:ring-[rgba(200,154,99,0.45)]"
                    placeholder="Tell us about your space, your ideas, and any specific requirements..."
                  />
                </label>
              </div>

              <div className="mt-[14px] flex flex-wrap items-center justify-between gap-[12px]">
                <label className="inline-flex items-center gap-[10px] text-[12px] text-[rgba(247,243,238,0.72)]">
                  <input
                    type="checkbox"
                    className="h-[14px] w-[14px] rounded-[4px] border border-[rgba(255,255,255,0.22)] bg-[rgba(255,255,255,0.06)]"
                  />
                  I agree to the{' '}
                  <span className="underline underline-offset-4">Privacy Policy</span>
                </label>

                <button
                  type="button"
                  className="inline-flex items-center gap-[10px] rounded-full bg-[#C89A63] px-[18px] py-[12px] text-[13px] font-[700] text-[#1E1B18] shadow-[0_14px_26px_rgba(0,0,0,0.22)] hover:bg-[#B98954] transition-colors"
                >
                  Send Message
                  <Send className="h-[16px] w-[16px]" />
                </button>
              </div>
            </form>
          </div>
          </div>
        </div>
      </section>

      {/* Benefits strip */}
      <section className="bg-[#C89A63]">
        <div className="mx-auto w-full max-w-[1440px] px-[18px] sm:px-[48px] lg:px-[80px]">
          <div className="grid grid-cols-1 divide-y divide-[rgba(255,255,255,0.22)] sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
            <Benefit
              icon={CheckCircle2}
              title="Quick Response"
              desc="We get back within 24 hours"
            />
            <Benefit
              icon={CheckCircle2}
              title="Personalized Solutions"
              desc="Tailored to your needs"
            />
            <Benefit
              icon={CheckCircle2}
              title="Expert Guidance"
              desc="From concept to completion"
            />
            <Benefit
              icon={CheckCircle2}
              title="Hassle-Free Experience"
              desc="We handle everything"
            />
          </div>
        </div>
      </section>

      {/* Studio visit */}
      <section className="mx-auto w-full max-w-[1440px] px-[18px] sm:px-[48px] lg:px-[80px] py-[28px]">
        <div className="grid gap-[16px] lg:grid-cols-[1fr_1fr] lg:items-stretch">
          <div className="relative overflow-hidden rounded-[22px] bg-[#EFE7DE] h-[190px] sm:h-[250px] lg:h-[250px]">
            {/* Map image placeholder */}
            <img
              src="/contact-map.jpg"
              alt="Map and directions to GSR Interiors studio visit"
              className="absolute inset-0 h-full w-full object-cover opacity-[0.9]"
            />
            <div className="absolute inset-0 bg-[rgba(255,255,255,0.12)]" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0D0B09] px-[12px] py-[10px] text-[#F7F3EE] shadow-[0_12px_24px_rgba(0,0,0,0.16)]">
              <MapPin className="h-[18px] w-[18px]" />
            </div>
          </div>

          <div className="flex h-[190px] items-stretch gap-[14px] rounded-[22px] bg-[#EFE7DE] p-[16px] shadow-[0_10px_24px_rgba(0,0,0,0.06)] sm:h-[250px] lg:h-[250px]">
            <div className="relative h-full w-[46%] overflow-hidden rounded-[18px]">
              <img
                src="/studio-preview.jpg"
                alt="Visit GSR Interiors design studio by appointment"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between py-[6px] pr-[4px]">
              <div>
                <div className="text-[16px] font-[800] text-[#1E1B18]">
                  Visit Our Studio
                </div>
                <p className="mt-[8px] text-[12px] leading-[1.65] text-[#6E6257]">
                  Step into our design studio to explore materials, finishes, and
                  ideas in person.
                </p>
              </div>

              <a
                href="#"
                className="mt-[12px] inline-flex w-fit items-center gap-[10px] rounded-full bg-[#F8F4EF] px-[14px] py-[10px] text-[12px] font-[700] text-[#1E1B18] shadow-[0_10px_18px_rgba(0,0,0,0.08)] hover:bg-[#F3EEE7] transition-colors"
              >
                Get Directions
                <ArrowRight className="h-[14px] w-[14px]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}

