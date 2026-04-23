const CATEGORY_FALLBACKS = {
  living: ['/projects/living-1.png', '/projects/living-2.png'],
  kitchen: ['/projects/kitchen-1.png'],
  bedroom: [
    '/projects/bedroom-1.png',
    '/projects/bedroom-3.png',
    '/projects/bedroom-4.png',
    '/projects/bedroom-2.png',
  ],
  dining: ['/projects/dining-1.png'],
  fullhome: [
    '/projects/fullhome-1.png',
    '/projects/foyer.png',
    '/projects/divider-1.png',
  ],
}

const KEYWORD_TO_IMAGE = [
  { match: ['kitchen', 'modular'], src: '/projects/kitchen-1.png' },
  { match: ['dining'], src: '/projects/dining-1.png' },
  { match: ['tv', 'living'], src: '/projects/living-1.png' },
  { match: ['feature', 'panel', 'living'], src: '/projects/living-2.png' },
  { match: ['foyer', 'entry'], src: '/projects/foyer.png' },
  { match: ['divider', 'partition'], src: '/projects/divider-1.png' },
  { match: ['wardrobe', 'sliding'], src: '/projects/bedroom-3.png' },
  { match: ['wardrobe'], src: '/projects/bedroom-1.png' },
  { match: ['suite', 'bedroom'], src: '/projects/bedroom-4.png' },
]

function normalizeTokens(project) {
  const tokens = []
  if (project?.category) tokens.push(project.category)
  if (project?.title) tokens.push(project.title)
  if (Array.isArray(project?.keywords)) tokens.push(project.keywords.join(' '))
  return tokens
    .join(' ')
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
}

export function resolveProjectImage(project) {
  const tokens = new Set(normalizeTokens(project))

  for (const rule of KEYWORD_TO_IMAGE) {
    const ok = rule.match.every((m) => tokens.has(m))
    if (ok) return rule.src
  }

  const fallbacks = CATEGORY_FALLBACKS[project?.category] || []
  return fallbacks[0] || '/about-bg.jpg'
}

