import { useEffect, useRef, useState } from 'react'
import { Film } from 'lucide-react'

/**
 * Client story clip. When `live`, autoplays muted in a loop while the block
 * is on screen (pauses off-screen). Native controls let visitors unmute.
 */
export default function ClientStoryVideo({
  src,
  poster,
  label,
  live = false,
  className = '',
  videoClassName = '',
}) {
  const videoRef = useRef(null)
  const wrapRef = useRef(null)
  const [failed, setFailed] = useState(false)
  /** After user unmutes via controls, stop forcing muted so React doesn’t mute again on re-render */
  const [allowSound, setAllowSound] = useState(false)

  useEffect(() => {
    setAllowSound(false)
  }, [src])

  useEffect(() => {
    const v = videoRef.current
    const root = wrapRef.current
    if (!v || !root || !live) return

    const obs = new IntersectionObserver(
      ([e]) => {
        if (!v) return
        if (e.isIntersecting) {
          v.play().catch(() => {})
        } else {
          v.pause()
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -12% 0px' }
    )
    obs.observe(root)
    return () => obs.disconnect()
  }, [live, src])

  if (failed) {
    return (
      <figure
        className={[
          'flex flex-col overflow-hidden rounded-[18px] bg-[#EFE7DE] ring-1 ring-[rgba(30,27,24,0.10)]',
          className,
        ].join(' ')}
      >
        <div className="flex aspect-video w-full flex-col items-center justify-center gap-[10px] bg-[#E8DFD4] px-[14px] py-[24px] text-center">
          <Film className="h-[24px] w-[24px] text-[#8A7A6A]" aria-hidden />
          <p className="text-[11px] leading-[1.55] text-[#6E6257]">
            Missing <span className="font-[700] text-[#5A4634]">{src}</span>
          </p>
        </div>
      </figure>
    )
  }

  return (
    <figure
      ref={wrapRef}
      className={[
        'overflow-hidden rounded-[18px] bg-[#0D0B09] shadow-[0_12px_32px_rgba(0,0,0,0.14)] ring-1 ring-[rgba(255,255,255,0.08)]',
        className,
      ].join(' ')}
    >
      <video
        ref={videoRef}
        className={[
          'aspect-video w-full object-cover object-center',
          videoClassName,
        ].join(' ')}
        src={src}
        poster={poster}
        controls
        playsInline
        preload="metadata"
        muted={live ? !allowSound : undefined}
        loop={live}
        autoPlay={live}
        onVolumeChange={(e) => {
          if (live && !e.currentTarget.muted) setAllowSound(true)
        }}
        onError={() => setFailed(true)}
      />
      {label ? (
        <figcaption className="px-[12px] py-[8px] text-[10px] font-[700] uppercase tracking-[0.12em] text-[rgba(247,243,238,0.5)]">
          {label}
        </figcaption>
      ) : null}
    </figure>
  )
}
