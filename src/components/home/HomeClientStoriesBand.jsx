import { Link } from 'react-router-dom'
import { Volume2 } from 'lucide-react'
import ClientStoryVideo from '../ClientStoryVideo.jsx'
import { CLIENT_STORY_VIDEOS, CLIENT_VIDEO_POSTER } from '../../data/clientVideos.js'

export default function HomeClientStoriesBand() {
  if (!CLIENT_STORY_VIDEOS.length) return null

  return (
    <section
      className="relative overflow-hidden bg-[#14110E] py-[32px] sm:py-[48px]"
      aria-label="Client story videos"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(200,154,99,0.12),transparent)]" />

      <div className="relative mx-auto w-full max-w-[1440px] px-[14px] sm:px-[48px] lg:px-[80px]">
        <div className="flex flex-col gap-[10px] sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-[10px] font-[800] tracking-[0.20em] text-[#C8A96E]">
              REAL HOMES
            </div>
            <h2 className="mt-[8px] font-heading text-[22px] font-[500] text-[#F7F3EE] sm:text-[26px]">
              Client stories, <span className="italic text-[#C89A63]">playing live</span>
            </h2>
            <p className="mt-[8px] max-w-[520px] text-[12px] leading-[1.65] text-[rgba(247,243,238,0.62)]">
              Videos start automatically (muted) as you scroll — use the player controls to
              turn sound on.
            </p>
          </div>
          <div className="flex items-center gap-[8px] text-[11px] text-[rgba(247,243,238,0.55)]">
            <Volume2 className="h-[14px] w-[14px] shrink-0" aria-hidden />
            <span>Tap controls for audio</span>
          </div>
        </div>

        <div className="mt-[20px] flex gap-[12px] overflow-x-auto overscroll-x-contain pb-[10px] pt-[2px] [-webkit-overflow-scrolling:touch] [scrollbar-width:thin] snap-x snap-mandatory sm:mt-[22px] sm:grid sm:grid-cols-2 sm:gap-[14px] sm:overflow-visible sm:pb-[6px] lg:grid-cols-3">
          {CLIENT_STORY_VIDEOS.map((v) => (
            <div
              key={v.id}
              className="w-[min(82vw,280px)] shrink-0 snap-center sm:w-auto sm:min-w-0"
            >
              <ClientStoryVideo
                src={v.src}
                poster={CLIENT_VIDEO_POSTER}
                label={v.label}
                live
              />
            </div>
          ))}
        </div>

        <div className="mt-[18px] text-center sm:text-left">
          <Link
            to="/testimonials"
            className="text-[12px] font-[600] text-[#C89A63] underline-offset-4 transition-colors hover:text-[#E0B77A]"
          >
            Full testimonials page →
          </Link>
        </div>
      </div>
    </section>
  )
}
