import {
  ClipboardCheck,
  Handshake,
  PackageSearch,
  Palette,
  Sparkles,
} from 'lucide-react'

/**
 * Content for the Interior Design Process timeline (source order: 01–05).
 */
export const PROCESS_STEPS = [
  {
    num: '01',
    label: 'Discovery',
    title: 'Initial Consultation',
    description:
      'We meet at your site or studio to understand your lifestyle, routines, and aspirations. Budget, timeline, and scope are aligned so every decision downstream feels intentional and calm.',
    card: {
      Icon: Handshake,
      title: 'Clarity from day one',
      text: 'A structured discovery session captures your brief, constraints, and inspiration—forming the foundation for a cohesive design direction.',
    },
  },
  {
    num: '02',
    label: 'Concept',
    title: 'Mood Board & Design Concept',
    description:
      'We translate your story into a visual language—palette, texture, furniture silhouettes, and lighting mood. Spatial concepts and preliminary layouts show how the home will look and flow.',
    card: {
      Icon: Palette,
      title: 'Visual direction',
      text: 'Curated references and concept boards align aesthetics with function before any material commitments are made.',
    },
  },
  {
    num: '03',
    label: 'Procurement',
    title: 'Material & Furniture Sourcing',
    description:
      'Finishes, fixtures, and furnishings are specified with samples and schedules. We coordinate vendors, approvals, and lead times so quality and delivery stay on track.',
    card: {
      Icon: PackageSearch,
      title: 'Vetted selections',
      text: 'Every surface and piece is chosen for durability, proportion, and harmony with the overall design narrative.',
    },
  },
  {
    num: '04',
    label: 'Execution',
    title: 'Project Management & Installation',
    description:
      'Site coordination, milestone reviews, and quality checks keep craftsmanship aligned with drawings. You receive transparent updates as joinery, services, and finishes take shape.',
    card: {
      Icon: ClipboardCheck,
      title: 'On-site precision',
      text: 'Dedicated project oversight bridges designers, contractors, and specialists for a seamless build-out.',
    },
  },
  {
    num: '05',
    label: 'Completion',
    title: 'Final Handover & Styling',
    description:
      'The space is dressed, lighting scenes are set, and every detail is inspected. We walk you through care, warranties, and how to live beautifully in your new interior.',
    card: {
      Icon: Sparkles,
      title: 'Move-in ready',
      text: 'Final styling layers—art, textiles, and accessories—complete the atmosphere so it feels unmistakably yours.',
    },
  },
]
