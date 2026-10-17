import { REAL_ESTATE_SITE, formatPostalAddress } from '@/lib/site-persona'

export const MIDTOWN_REAL_ESTATE_FAQS = [
  {
    question: 'Where is Midtown Las Vegas real estate inventory?',
    answer:
      'Active Midtown Las Vegas condos and homes are listed on this site and on Dr. Jan Duffy\'s RealScout search. Inventory clusters around 921 S Main Street — English Residences, The English Hotel, and walkable Midtown Plaza-area units.',
  },
  {
    question: 'Does Dr. Jan Duffy specialize in English Residences listings?',
    answer:
      'Yes. Dr. Jan Duffy guides buyers and sellers through English Residences condo-hotel units, HOA documents, and hotel-management rules at The English Hotel in Midtown Las Vegas.',
  },
  {
    question: 'How do I tour Midtown Las Vegas listings with Dr. Jan Duffy?',
    answer: `Call ${REAL_ESTATE_SITE.phone} or book a Calendly consultation. Dr. Jan Duffy meets many buyers at ${formatPostalAddress(REAL_ESTATE_SITE.midtownShowroom)} before touring Arts District condos.`,
  },
  {
    question: 'Can Dr. Jan Duffy help me sell a Midtown condo?',
    answer:
      'Yes. Dr. Jan Duffy lists English Residences, English Hotel, and Midtown Plaza-area condos. Start with the seller\'s guide and a listing consultation for pricing and prep steps.',
  },
] as const
