import { useCallback, useState } from 'react'

/**
 * Lazy-loaded gallery image: no visible labels; preserves aspect ratio via object-contain.
 */
export default function LazyGalleryImage({ src, alt = '' }) {
  const [failed, setFailed] = useState(false)

  const onError = useCallback(() => {
    if (import.meta.env.DEV) {
      console.warn('[Gallery] Missing or broken image:', src)
    }
    setFailed(true)
  }, [src])

  if (failed) {
    return (
      <div
        className="aspect-[4/3] w-full bg-[#E5E0D8]"
        aria-hidden
      />
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className="h-auto max-h-[280px] w-full max-w-full object-contain object-center sm:max-h-[320px] lg:max-h-[380px]"
      onError={onError}
    />
  )
}
