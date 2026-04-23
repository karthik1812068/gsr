import { ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function SuccessScreen({ onBackHome }) {
  return (
    <div className="min-h-screen bg-[#F8F4EF]">
      <div className="mx-auto flex min-h-screen w-full max-w-[980px] items-center justify-center px-[18px] py-[48px]">
        <div className="w-full max-w-[560px] rounded-[24px] bg-white px-[22px] py-[26px] shadow-[0_18px_50px_rgba(0,0,0,0.10)] sm:px-[30px] sm:py-[32px]">
          <div className="mx-auto flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#F0EBE0]">
            <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#0D0B09]">
              <Check className="h-[20px] w-[20px] text-[#C8A96E]" />
            </div>
          </div>

          <div className="mt-[16px] text-center font-heading text-[20px] font-[500] text-[#1E1B18]">
            Consultation Booked!
          </div>
          <p className="mt-[10px] text-center text-[13px] leading-[1.7] text-[#888888]">
            Thank you! Our team will reach out within 24 hours to confirm your
            appointment and discuss your project.
          </p>

          <div className="mt-[18px] flex justify-center">
            {onBackHome ? (
              <button
                type="button"
                onClick={onBackHome}
                className="inline-flex items-center gap-[10px] rounded-full bg-[#C8A96E] px-[18px] py-[12px] text-[13px] font-[700] text-[#1A1209] shadow-[0_14px_26px_rgba(0,0,0,0.12)] hover:bg-[#B8965C] transition-colors"
              >
                Back to Home <ArrowRight className="h-[16px] w-[16px]" />
              </button>
            ) : (
              <Link
                to="/"
                className="inline-flex items-center gap-[10px] rounded-full bg-[#C8A96E] px-[18px] py-[12px] text-[13px] font-[700] text-[#1A1209] shadow-[0_14px_26px_rgba(0,0,0,0.12)] hover:bg-[#B8965C] transition-colors"
              >
                Back to Home <ArrowRight className="h-[16px] w-[16px]" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

