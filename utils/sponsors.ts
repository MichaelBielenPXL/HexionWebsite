export interface Sponsor {
  name: string
  // Path under /public. Sponsors without a logo show their name instead.
  logo?: string
  description?: string
  website?: string
}

export const sponsors: Sponsor[] = [
  { name: 'Cegeka', logo: '/sponsors/logocegeka.png' },
  { name: 'PXL Stuvo', logo: '/sponsors/stuvo.png' },
  {
    name: 'Zakenkantoor Vanrusselt',
    logo: '/sponsors/vanrusselt.png',
    description:
      'Onafhankelijk verzekeringsmakelaar voor Hasselt, Herk-de-Stad en omgeving met een goede persoonlijke service en prijs/kwaliteit.',
  },
]
