/** Human-readable alt text from `/gallery/{section}/{section}-NN.png` paths. */
const SECTION_LABEL = {
  bedroom: 'Bedroom interior design',
  dining: 'Dining room interior design',
  divider: 'Interior partition and divider design',
  foyer: 'Home foyer and entry interior design',
  fullhome: 'Full home luxury interior design',
  kitchen: 'Modular kitchen interior design',
  living: 'Living room interior design',
}

export function galleryImageAlt(src) {
  const m = String(src).match(/^\/gallery\/([^/]+)\//)
  const section = m ? m[1] : ''
  const base = SECTION_LABEL[section] || 'Interior design portfolio'
  return `${base} — GSR Interiors, India`
}
