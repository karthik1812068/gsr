import { useEffect, useState } from 'react'

/**
 * Organization / LocalBusiness JSON-LD for India-wide interior services.
 */
export default function SeoJsonLd() {
  const [payload, setPayload] = useState(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const origin = window.location.origin
    const schema = {
      '@context': 'https://schema.org',
      '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
      '@id': `${origin}/#gsr-interiors`,
      name: 'GSR Interiors',
      description:
        'GSR Interiors offers modern, luxury, and affordable interior design services for homes and offices across India.',
      url: origin,
      image: `${origin}/hero-bg.jpg`,
      areaServed: {
        '@type': 'Country',
        name: 'India',
      },
      priceRange: '$$',
      knowsAbout: [
        'Interior design',
        'Residential interiors',
        'Modular kitchen design',
        'Office interior design',
      ],
      makesOffer: {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Interior design',
          serviceType: 'Home and office interior design',
        },
      },
    }
    setPayload(schema)
  }, [])

  if (!payload) return null

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  )
}
