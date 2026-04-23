import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useConsultation } from './BookConsultationModal/ConsultationContext.jsx'

export default function HeroContent() {
  const consultation = useConsultation()
  return (
    <div className="w-full max-w-[540px] px-0 sm:px-[20px] md:px-[38px]">
      <div className="text-[11px] font-[600] tracking-[0.12em] text-[rgba(247,243,238,0.78)] uppercase sm:text-[13px] lg:text-[14px]">
        BEAUTIFULLY CRAFTED. PERFECTLY YOURS.
      </div>

      <h1 className="mt-[14px] font-heading text-[#F7F3EE] font-[400] leading-[1.05] text-[28px] sm:mt-[18px] sm:text-[36px] md:text-[42px] lg:text-[48px]">
        Modern Interior Design Services for Homes &amp; Offices
      </h1>

      <p className="mt-[14px] max-w-[520px] text-[16px] font-[400] leading-[1.55] text-[rgba(247,243,238,0.78)] sm:mt-[18px] sm:text-[18px] lg:text-[21px]">
        GSR Interiors brings affordable luxury and meticulous execution to residential and
        commercial spaces across India—pairing modern interior design with warm, timeless
        materiality.
        <br className="hidden sm:block" />{' '}
        Book a consultation to explore layouts, lighting, and joinery crafted around the way you
        live and work.
      </p>

      <div className="mt-[24px] flex w-full max-w-[400px] flex-col gap-[12px] sm:mt-[32px] sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:gap-[20px]">
        <button
          type="button"
          onClick={() => consultation.open('home-hero')}
          className="inline-flex min-h-[48px] w-full items-center justify-center gap-[10px] rounded-full bg-[#CDA87A] px-[24px] py-[14px] text-[13px] font-[600] text-[#2B2118] shadow-[0_12px_26px_rgba(0,0,0,0.18)] hover:bg-[#BC9466] transition-colors sm:w-auto sm:px-[32px] sm:py-[16px]"
        >
          Book a Consultation
          <ArrowRight className="h-[16px] w-[16px]" />
        </button>

        <Link
          to="/projects"
          className="inline-flex min-h-[48px] w-full items-center justify-center gap-[10px] rounded-full border border-[rgba(247,243,238,0.34)] bg-[rgba(0,0,0,0.10)] px-[24px] py-[14px] text-[13px] font-[600] text-[#F7F3EE] backdrop-blur-[6px] hover:bg-[rgba(0,0,0,0.16)] transition-colors sm:w-auto sm:px-[32px] sm:py-[16px]"
        >
          View Our Projects
          <ArrowRight className="h-[16px] w-[16px]" />
        </Link>
      </div>
    </div>
  )
}

