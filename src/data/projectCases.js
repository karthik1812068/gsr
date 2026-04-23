/**
 * Full case-study content per project id. Each image path appears at most once
 * per project (hero, thumbs, gallery, avatar, cta use distinct assets).
 */
export const PROJECT_CASES = {
  'living-signature-wall': {
    eyebrow: 'Featured Project',
    shortDescription:
      'A layered living experience with a bespoke TV wall, warm ambient lighting, and refined material contrasts—crafted for everyday luxury.',
    stats: {
      area: '1,850 sq ft',
      timeline: '12 weeks',
      budget: 'Premium',
      year: '2025',
    },
    overview: {
      paragraphs: [
        'This residence was envisioned as a calm, luminous shell with moments of drama through texture and light. The TV wall anchors the living zone while circulation and storage stay quietly integrated.',
        'We coordinated finishes, lighting scenes, and joinery details so the space feels cohesive from entry to entertainment—premium without feeling ornate.',
      ],
      highlights: [
        'Custom TV wall with layered panels & integrated lighting',
        'Stone-inspired surfaces with warm wood accents',
        'Concealed storage & services for a clutter-free frontage',
        'Layered lighting plan: ambient, accent, and task',
      ],
      details: [
        { label: 'Scope', value: 'Living + dining joinery' },
        { label: 'Style', value: 'Modern luxury' },
        { label: 'Materials', value: 'Wood, stone-finish, metal trims' },
        { label: 'Status', value: 'Completed' },
      ],
    },
    hero: '/projects/living-1.png',
    thumbs: [
      '/projects/living-2.png',
      '/projects/divider-1.png',
      '/projects/foyer.png',
      '/projects/dining-1.png',
    ],
    gallery: [
      '/projects/kitchen-1.png',
      '/projects/bedroom-4.png',
      '/projects/bedroom-3.png',
      '/projects/bedroom-1.png',
      '/projects/bedroom-2.png',
      '/projects/fullhome-1.png',
    ],
    testimonial: {
      quote:
        'The team translated our brief into a space that feels both grand and intimate. Every detail—from lighting to joinery—was executed with care.',
      name: 'Priya & Rahul N.',
      location: 'India',
      rating: 5,
      avatar: '/about-bg.jpg',
    },
    cta: { bg: '/services-hero.jpg' },
  },

  'living-backlit-panel': {
    eyebrow: 'Featured Project',
    shortDescription:
      'Backlit feature panels and a sculpted ceiling plane create depth and warmth—perfect for evening gatherings.',
    stats: {
      area: '2,100 sq ft',
      timeline: '14 weeks',
      budget: 'Premium',
      year: '2024',
    },
    overview: {
      paragraphs: [
        'The brief called for a luminous focal wall that could shift mood from day to night. We used layered surfaces, concealed LED channels, and precise material transitions.',
      ],
      highlights: [
        'Backlit panel system with dimmable scenes',
        'False ceiling integration for seamless services',
        'Acoustic considerations for open-plan living',
      ],
      details: [
        { label: 'Scope', value: 'Living feature wall' },
        { label: 'Style', value: 'Contemporary' },
        { label: 'Lighting', value: 'Layered LED + spot' },
        { label: 'Status', value: 'Completed' },
      ],
    },
    hero: '/projects/living-2.png',
    thumbs: [
      '/projects/living-1.png',
      '/projects/divider-1.png',
      '/projects/foyer.png',
      '/projects/kitchen-1.png',
    ],
    gallery: [
      '/projects/dining-1.png',
      '/projects/bedroom-4.png',
      '/projects/bedroom-2.png',
      '/projects/bedroom-3.png',
      '/projects/bedroom-1.png',
      '/projects/fullhome-1.png',
    ],
    testimonial: {
      quote:
        'The lighting design completely transformed how we use the room after sunset.',
      name: 'Ananya K.',
      location: 'India',
      rating: 5,
      avatar: '/studio-preview.jpg',
    },
    cta: { bg: '/hero-bg.jpg' },
  },

  'kitchen-glossy-modular': {
    eyebrow: 'Kitchen Project',
    shortDescription:
      'A high-gloss modular kitchen with smart storage, integrated appliances, and a refined palette that stays effortless to maintain.',
    stats: { area: '—', timeline: '—', budget: 'Premium', year: '2025' },
    overview: {
      paragraphs: [
        'Workflow, ventilation, and lighting were planned as one system so cooking, cleaning, and entertaining feel intuitive.',
      ],
      highlights: [
        'Ergonomic work triangle and tall unit storage',
        'Easy-clean surfaces and coordinated hardware',
        'Under-cabinet and cove lighting for task + mood',
      ],
      details: [
        { label: 'Scope', value: 'Modular kitchen' },
        { label: 'Style', value: 'Contemporary' },
        { label: 'Status', value: 'Completed' },
      ],
    },
    hero: '/projects/kitchen-1.png',
    thumbs: [
      '/projects/dining-1.png',
      '/projects/living-1.png',
      '/projects/living-2.png',
      '/projects/foyer.png',
    ],
    gallery: [
      '/projects/bedroom-1.png',
      '/projects/bedroom-2.png',
      '/projects/bedroom-3.png',
      '/projects/bedroom-4.png',
      '/projects/divider-1.png',
      '/projects/fullhome-1.png',
    ],
    testimonial: {
      quote:
        'The kitchen is the heart of our home now—beautiful and genuinely practical.',
      name: 'Kiran & Meera T.',
      location: 'India',
      rating: 5,
      avatar: '/service-2.jpg',
    },
    cta: { bg: '/services-cta.jpg' },
  },

  'bedroom-wardrobe-classic': {
    eyebrow: 'Bedroom Project',
    shortDescription:
      'Classic wardrobe elevations with balanced proportions, soft lighting, and tailored internals for everyday ease.',
    stats: { area: '—', timeline: '—', budget: 'Premium', year: '2025' },
    overview: {
      paragraphs: [
        'We focused on calm materials, clear circulation, and wardrobe internals that match how you store and access clothing.',
      ],
      highlights: [
        'Floor-to-ceiling joinery with refined handles',
        'Integrated mirror and dressing zone',
        'Layered ambient lighting',
      ],
      details: [
        { label: 'Scope', value: 'Bedroom + wardrobe' },
        { label: 'Style', value: 'Classic' },
        { label: 'Status', value: 'Completed' },
      ],
    },
    hero: '/projects/bedroom-1.png',
    thumbs: [
      '/projects/bedroom-2.png',
      '/projects/bedroom-3.png',
      '/projects/bedroom-4.png',
      '/projects/living-1.png',
    ],
    gallery: [
      '/projects/living-2.png',
      '/projects/kitchen-1.png',
      '/projects/dining-1.png',
      '/projects/foyer.png',
      '/projects/divider-1.png',
      '/projects/fullhome-1.png',
    ],
    testimonial: {
      quote: 'Storage finally makes sense—everything has a place and still looks serene.',
      name: 'Sneha R.',
      location: 'India',
      rating: 5,
      avatar: '/service-4.jpg',
    },
    cta: { bg: '/hero-bg.jpg' },
  },

  'bedroom-wardrobe-pattern': {
    eyebrow: 'Bedroom Project',
    shortDescription:
      'Patterned sliding wardrobe fronts with smooth hardware and a composed palette for a restful suite.',
    stats: { area: '—', timeline: '—', budget: 'Premium', year: '2024' },
    overview: {
      paragraphs: [
        'Sliding systems were detailed for quiet operation and long-term durability, with interiors configured to your wardrobe habits.',
      ],
      highlights: [
        'Feature panel rhythm on sliding shutters',
        'Soft-close hardware',
        'Coordinated ceiling and cove lighting',
      ],
      details: [
        { label: 'Scope', value: 'Bedroom wardrobe' },
        { label: 'Style', value: 'Contemporary' },
        { label: 'Status', value: 'Completed' },
      ],
    },
    hero: '/projects/bedroom-3.png',
    thumbs: [
      '/projects/bedroom-1.png',
      '/projects/bedroom-2.png',
      '/projects/bedroom-4.png',
      '/projects/kitchen-1.png',
    ],
    gallery: [
      '/projects/living-1.png',
      '/projects/living-2.png',
      '/projects/dining-1.png',
      '/projects/foyer.png',
      '/projects/divider-1.png',
      '/projects/fullhome-1.png',
    ],
    testimonial: {
      quote: 'The sliding wardrobes look like feature walls—we love the calm vibe.',
      name: 'Arjun P.',
      location: 'India',
      rating: 5,
      avatar: '/about-bg.jpg',
    },
    cta: { bg: '/studio-preview.jpg' },
  },

  'bedroom-wardrobe-gold': {
    eyebrow: 'Bedroom Project',
    shortDescription:
      'Warm metallics and rich textures elevate the bedroom while keeping the layout restful and uncluttered.',
    stats: { area: '—', timeline: '—', budget: 'Premium', year: '2025' },
    overview: {
      paragraphs: [
        'Accent details were used sparingly so the room feels luxurious without noise—lighting and headboard rhythm do the heavy lifting.',
      ],
      highlights: [
        'Gold-accent trims coordinated with lighting',
        'Upholstered headboard integration',
        'Wardrobe internals optimised for couples',
      ],
      details: [
        { label: 'Scope', value: 'Master bedroom' },
        { label: 'Style', value: 'Modern luxury' },
        { label: 'Status', value: 'Completed' },
      ],
    },
    hero: '/projects/bedroom-2.png',
    thumbs: [
      '/projects/bedroom-1.png',
      '/projects/bedroom-3.png',
      '/projects/bedroom-4.png',
      '/projects/dining-1.png',
    ],
    gallery: [
      '/projects/living-1.png',
      '/projects/living-2.png',
      '/projects/kitchen-1.png',
      '/projects/foyer.png',
      '/projects/divider-1.png',
      '/projects/fullhome-1.png',
    ],
    testimonial: {
      quote: 'It feels like a boutique hotel suite—yet completely personal.',
      name: 'Divya & Vikram S.',
      location: 'India',
      rating: 5,
      avatar: '/service-5.jpg',
    },
    cta: { bg: '/contact-hero.jpg' },
  },

  'bedroom-warm-suite': {
    eyebrow: 'Bedroom Project',
    shortDescription:
      'A warm suite with layered lighting, soft finishes, and a cohesive ceiling detail that ties the room together.',
    stats: { area: '—', timeline: '—', budget: 'Premium', year: '2024' },
    overview: {
      paragraphs: [
        'Ceiling, walls, and furniture were composed as one story so the room reads calm at every angle.',
      ],
      highlights: [
        'False ceiling with integrated services',
        'Warm material palette',
        'Bedside and accent lighting scenes',
      ],
      details: [
        { label: 'Scope', value: 'Bedroom suite' },
        { label: 'Style', value: 'Warm contemporary' },
        { label: 'Status', value: 'Completed' },
      ],
    },
    hero: '/projects/bedroom-4.png',
    thumbs: [
      '/projects/bedroom-1.png',
      '/projects/bedroom-2.png',
      '/projects/bedroom-3.png',
      '/projects/foyer.png',
    ],
    gallery: [
      '/projects/living-1.png',
      '/projects/living-2.png',
      '/projects/kitchen-1.png',
      '/projects/dining-1.png',
      '/projects/divider-1.png',
      '/projects/fullhome-1.png',
    ],
    testimonial: {
      quote: 'We sleep better in a room that finally feels finished and cohesive.',
      name: 'Lakshmi I.',
      location: 'India',
      rating: 5,
      avatar: '/service-1.jpg',
    },
    cta: { bg: '/hero-bg.jpg' },
  },

  'dining-cove-lighting': {
    eyebrow: 'Dining Project',
    shortDescription:
      'Cove lighting and a curated dining setting create an inviting focal point for everyday meals and gatherings.',
    stats: { area: '—', timeline: '—', budget: 'Premium', year: '2025' },
    overview: {
      paragraphs: [
        'We aligned ceiling details, wall finishes, and lighting scenes so the dining zone feels intentional within an open plan.',
      ],
      highlights: [
        'Cove and accent lighting coordination',
        'Material contrast for depth',
        'Seamless connection to adjacent living/kitchen',
      ],
      details: [
        { label: 'Scope', value: 'Dining zone' },
        { label: 'Style', value: 'Modern' },
        { label: 'Status', value: 'Completed' },
      ],
    },
    hero: '/projects/dining-1.png',
    thumbs: [
      '/projects/living-1.png',
      '/projects/living-2.png',
      '/projects/kitchen-1.png',
      '/projects/foyer.png',
    ],
    gallery: [
      '/projects/bedroom-1.png',
      '/projects/bedroom-2.png',
      '/projects/bedroom-3.png',
      '/projects/bedroom-4.png',
      '/projects/divider-1.png',
      '/projects/fullhome-1.png',
    ],
    testimonial: {
      quote: 'Dinner at home feels special now—the lighting makes all the difference.',
      name: 'Rakesh M.',
      location: 'India',
      rating: 5,
      avatar: '/service-3.jpg',
    },
    cta: { bg: '/services-hero.jpg' },
  },

  'fullhome-foyer': {
    eyebrow: 'Full Home',
    shortDescription:
      'A premium foyer sequence that sets the tone—layered lighting, refined surfaces, and clear circulation from entry inward.',
    stats: { area: '—', timeline: '—', budget: 'Premium', year: '2025' },
    overview: {
      paragraphs: [
        'The entry was designed as a composed moment: storage discreetly integrated, lighting welcoming, and sightlines guided toward the living core.',
      ],
      highlights: [
        'Statement wall and ceiling detail',
        'Concealed storage for shoes and utilities',
        'Coordination with the rest of the home palette',
      ],
      details: [
        { label: 'Scope', value: 'Foyer + entry sequence' },
        { label: 'Style', value: 'Luxury residential' },
        { label: 'Status', value: 'Completed' },
      ],
    },
    hero: '/projects/foyer.png',
    thumbs: [
      '/projects/fullhome-1.png',
      '/projects/divider-1.png',
      '/projects/living-1.png',
      '/projects/dining-1.png',
    ],
    gallery: [
      '/projects/living-2.png',
      '/projects/kitchen-1.png',
      '/projects/bedroom-1.png',
      '/projects/bedroom-2.png',
      '/projects/bedroom-3.png',
      '/projects/bedroom-4.png',
    ],
    testimonial: {
      quote: 'The first impression when you walk in is exactly what we imagined.',
      name: 'Neha & Suresh N.',
      location: 'India',
      rating: 5,
      avatar: '/about-bg.jpg',
    },
    cta: { bg: '/hero-bg.jpg' },
  },

  'fullhome-divider': {
    eyebrow: 'Full Home',
    shortDescription:
      'A designer partition that defines zones without blocking light—structure, storage, and aesthetics in balance.',
    stats: { area: '—', timeline: '—', budget: 'Premium', year: '2024' },
    overview: {
      paragraphs: [
        'We used the divider as both a functional screen and a design object, coordinating finishes with adjacent living and dining areas.',
      ],
      highlights: [
        'Custom partition detailing',
        'Light-permeable composition',
        'Services and routing planned early',
      ],
      details: [
        { label: 'Scope', value: 'Partition / divider' },
        { label: 'Style', value: 'Contemporary' },
        { label: 'Status', value: 'Completed' },
      ],
    },
    hero: '/projects/divider-1.png',
    thumbs: [
      '/projects/foyer.png',
      '/projects/fullhome-1.png',
      '/projects/living-1.png',
      '/projects/kitchen-1.png',
    ],
    gallery: [
      '/projects/living-2.png',
      '/projects/dining-1.png',
      '/projects/bedroom-1.png',
      '/projects/bedroom-2.png',
      '/projects/bedroom-3.png',
      '/projects/bedroom-4.png',
    ],
    testimonial: {
      quote: 'It separates spaces without making the home feel closed off.',
      name: 'Kiran T.',
      location: 'India',
      rating: 5,
      avatar: '/studio-preview.jpg',
    },
    cta: { bg: '/services-cta.jpg' },
  },

  'fullhome-partition': {
    eyebrow: 'Full Home',
    shortDescription:
      'Open-plan luxury with a clear spatial story—living, dining, and circulation read as one refined composition.',
    stats: { area: '—', timeline: '—', budget: 'Premium', year: '2025' },
    overview: {
      paragraphs: [
        'Full-home planning allowed us to align flooring, ceiling planes, and lighting scenes so every zone feels connected yet defined.',
      ],
      highlights: [
        'Holistic palette across key zones',
        'Integrated services and storage',
        'Premium finishes with disciplined detailing',
      ],
      details: [
        { label: 'Scope', value: 'Full home interior' },
        { label: 'Style', value: 'Modern luxury' },
        { label: 'Status', value: 'Completed' },
      ],
    },
    hero: '/projects/fullhome-1.png',
    thumbs: [
      '/projects/divider-1.png',
      '/projects/foyer.png',
      '/projects/living-1.png',
      '/projects/living-2.png',
    ],
    gallery: [
      '/projects/kitchen-1.png',
      '/projects/dining-1.png',
      '/projects/bedroom-1.png',
      '/projects/bedroom-2.png',
      '/projects/bedroom-3.png',
      '/projects/bedroom-4.png',
    ],
    testimonial: {
      quote: 'Turnkey execution meant we could move in without chasing vendors—huge relief.',
      name: 'Meera & Arjun P.',
      location: 'India',
      rating: 5,
      avatar: '/service-6.jpg',
    },
    cta: { bg: '/contact-hero.jpg' },
  },
}

export function getProjectCase(projectId) {
  return PROJECT_CASES[projectId] || null
}
