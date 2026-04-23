import ClientStoryVideo from '../ClientStoryVideo.jsx'
import { CLIENT_VIDEO_POSTER } from '../../data/clientVideos.js'

export default function ClientVideoGrid({ videos, poster = CLIENT_VIDEO_POSTER }) {
  if (!videos?.length) return null

  const [first, ...rest] = videos

  return (
    <div className="space-y-[28px]">
      <div className="mx-auto max-w-[980px]">
        <ClientStoryVideo
          src={first.src}
          poster={poster}
          label={first.label}
          live
          videoClassName="aspect-[9/16] max-h-[min(72vh,520px)] sm:aspect-video sm:max-h-none"
        />
      </div>

      {rest.length ? (
        <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-3 lg:gap-[22px]">
          {rest.map((v) => (
            <ClientStoryVideo
              key={v.id}
              src={v.src}
              poster={poster}
              label={v.label}
              live
              videoClassName="aspect-[9/16] max-h-[min(56vh,440px)] sm:aspect-video sm:max-h-none"
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}
