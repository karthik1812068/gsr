export const PROJECT_CATEGORIES = [
  { key: 'all', label: 'All Projects' },
  { key: 'living', label: 'Living Rooms' },
  { key: 'kitchen', label: 'Kitchens' },
  { key: 'bedroom', label: 'Bedrooms' },
  { key: 'dining', label: 'Dining Areas' },
  { key: 'fullhome', label: 'Full Homes' },
]

// Note: images are resolved automatically by `resolveProjectImage()`.
export const PROJECTS = [
  {
    id: 'living-signature-wall',
    title: 'Signature TV Wall',
    category: 'living',
    keywords: ['living', 'tv', 'wall', 'entertainment'],
  },
  {
    id: 'living-backlit-panel',
    title: 'Backlit Feature Panel',
    category: 'living',
    keywords: ['living', 'feature', 'panel', 'backlit'],
  },
  {
    id: 'kitchen-glossy-modular',
    title: 'Glossy Modular Kitchen',
    category: 'kitchen',
    keywords: ['kitchen', 'modular', 'glossy'],
  },
  {
    id: 'bedroom-wardrobe-classic',
    title: 'Classic Wardrobe Elevation',
    category: 'bedroom',
    keywords: ['bedroom', 'wardrobe', 'storage'],
  },
  {
    id: 'bedroom-wardrobe-pattern',
    title: 'Patterned Sliding Wardrobe',
    category: 'bedroom',
    keywords: ['bedroom', 'wardrobe', 'sliding'],
  },
  {
    id: 'bedroom-wardrobe-gold',
    title: 'Gold Accent Wardrobe',
    category: 'bedroom',
    keywords: ['bedroom', 'wardrobe', 'accent'],
  },
  {
    id: 'bedroom-warm-suite',
    title: 'Warm Bedroom Suite',
    category: 'bedroom',
    keywords: ['bedroom', 'suite', 'ceiling'],
  },
  {
    id: 'dining-cove-lighting',
    title: 'Dining With Cove Lighting',
    category: 'dining',
    keywords: ['dining', 'cove', 'lighting'],
  },
  {
    id: 'fullhome-foyer',
    title: 'Premium Foyer Entry',
    category: 'fullhome',
    keywords: ['foyer', 'entry', 'fullhome'],
  },
  {
    id: 'fullhome-divider',
    title: 'Designer Space Divider',
    category: 'fullhome',
    keywords: ['divider', 'partition', 'fullhome'],
  },
  {
    id: 'fullhome-partition',
    title: 'Modern Partition Feature',
    category: 'fullhome',
    keywords: ['partition', 'fullhome'],
  },
]

export function getProjectCategoryLabel(categoryKey) {
  const row = PROJECT_CATEGORIES.find((c) => c.key === categoryKey)
  return row?.label || 'Interior design'
}

