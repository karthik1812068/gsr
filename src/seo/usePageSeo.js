import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const DEFAULT_OG_PATH = '/hero-bg.jpg'

function upsertMetaByName(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertMetaByProperty(property, content) {
  let el = document.querySelector(`meta[property="${property}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', property)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLinkRel(rel, href) {
  let el = document.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * @param {object} opts
 * @param {string} opts.title - document title (full string)
 * @param {string} opts.description
 * @param {string} [opts.ogTitle]
 * @param {string} [opts.ogDescription]
 * @param {string} [opts.ogImagePath] - path under site origin, e.g. /hero-bg.jpg
 */
export function usePageSeo({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImagePath = DEFAULT_OG_PATH,
}) {
  const location = useLocation()

  useEffect(() => {
    if (typeof window === 'undefined') return

    const origin = window.location.origin
    const pageUrl = `${origin}${location.pathname}${location.search}`
    const imageUrl = ogImagePath.startsWith('http')
      ? ogImagePath
      : `${origin}${ogImagePath.startsWith('/') ? '' : '/'}${ogImagePath}`

    document.title = title

    upsertMetaByName('description', description)
    upsertMetaByName('robots', 'index, follow')
    upsertMetaByName('author', 'GSR Interiors')

    upsertLinkRel('canonical', pageUrl)

    const oTitle = ogTitle || title
    const oDesc = ogDescription || description

    upsertMetaByProperty('og:title', oTitle)
    upsertMetaByProperty('og:description', oDesc)
    upsertMetaByProperty('og:image', imageUrl)
    upsertMetaByProperty('og:url', pageUrl)
    upsertMetaByProperty('og:type', 'website')

    upsertMetaByName('twitter:card', 'summary_large_image')
    upsertMetaByName('twitter:title', oTitle)
    upsertMetaByName('twitter:description', oDesc)
    upsertMetaByName('twitter:image', imageUrl)
  }, [title, description, ogTitle, ogDescription, ogImagePath, location.pathname, location.search])
}
