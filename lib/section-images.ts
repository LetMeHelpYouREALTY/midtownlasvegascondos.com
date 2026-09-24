/**
 * Illustrative section images for every page.
 * These are generated scenes, not photos of a specific listing or business,
 * so alt text and captions say "illustrative" to stay accurate for buyers.
 */

export type SectionImageKey =
  | 'artsDistrictStreet'
  | 'firstFridayNight'
  | 'condoInterior'
  | 'condoBuilding'
  | 'plazaCourtyard'
  | 'restaurantDining'
  | 'boutiqueHotelLobby'
  | 'runRouteSunrise'
  | 'evCharging'
  | 'buyerPlanningDesk'
  | 'consultationOffice'
  | 'downtownSkylineDusk'
  | 'walkableStreetDay'

export type SectionImage = {
  src: string
  alt: string
  caption: string
}

export const SECTION_IMAGES: Record<SectionImageKey, SectionImage> = {
  artsDistrictStreet: {
    src: '/images/generated/arts-district-street.webp',
    alt: 'Illustrative golden-hour street in the Las Vegas Arts District with murals, galleries, and palm trees near Midtown condos',
    caption: 'Illustrative view of gallery-lined Arts District streets near Midtown Las Vegas.',
  },
  firstFridayNight: {
    src: '/images/generated/first-friday-night.webp',
    alt: 'Illustrative First Friday night in the Las Vegas Arts District with string lights, food trucks, and art booths',
    caption: 'Illustrative First Friday scene — the monthly art walk a short walk from Midtown condos.',
  },
  condoInterior: {
    src: '/images/generated/condo-interior.webp',
    alt: 'Illustrative modern Midtown Las Vegas condo living room with floor-to-ceiling windows and a downtown skyline view',
    caption: 'Illustrative condo interior — finishes and views vary by building and unit.',
  },
  condoBuilding: {
    src: '/images/generated/condo-building.webp',
    alt: 'Illustrative mid-rise condominium building with balconies and ground-floor retail in downtown Las Vegas',
    caption: 'Illustrative mid-rise condo building typical of the downtown Las Vegas and Arts District market.',
  },
  plazaCourtyard: {
    src: '/images/generated/plaza-courtyard.webp',
    alt: 'Illustrative open-air plaza courtyard with cafe seating and boutique shops in Midtown Las Vegas',
    caption: 'Illustrative plaza courtyard — shops and dining steps from Midtown residences.',
  },
  restaurantDining: {
    src: '/images/generated/restaurant-dining.webp',
    alt: 'Illustrative neighborhood restaurant interior with exposed brick and shared plates in the Las Vegas Arts District',
    caption: 'Illustrative Arts District dining room — walkable restaurants are part of Midtown daily life.',
  },
  boutiqueHotelLobby: {
    src: '/images/generated/boutique-hotel-lobby.webp',
    alt: 'Illustrative boutique hotel lobby with terrazzo floors and lounge seating in downtown Las Vegas',
    caption: 'Illustrative boutique hotel lobby — condo-hotel ownership pairs a residence with hotel services.',
  },
  runRouteSunrise: {
    src: '/images/generated/run-route-sunrise.webp',
    alt: 'Illustrative sunrise running route past murals and palm trees in the Las Vegas Arts District',
    caption: 'Illustrative sunrise run through Arts District streets near Midtown.',
  },
  evCharging: {
    src: '/images/generated/ev-charging.webp',
    alt: 'Illustrative residential garage with electric vehicle charging stations at a Midtown Las Vegas condo building',
    caption: 'Illustrative EV charging — confirm charger count and access rules with each HOA.',
  },
  buyerPlanningDesk: {
    src: '/images/generated/buyer-planning-desk.webp',
    alt: 'Illustrative condo buyer planning desk with keys, calculator, and floor plan for a Las Vegas purchase',
    caption: 'Illustrative buyer planning — review HOA budgets, reserves, and comps before you offer.',
  },
  consultationOffice: {
    src: '/images/generated/consultation-office.webp',
    alt: 'Illustrative real estate consultation office for Midtown Las Vegas condo buyers with Dr. Jan Duffy',
    caption: 'Illustrative consultation space — tours and buyer consultations are by appointment.',
  },
  downtownSkylineDusk: {
    src: '/images/generated/downtown-skyline-dusk.webp',
    alt: 'Illustrative dusk skyline of downtown Las Vegas with new development and the Spring Mountains',
    caption: 'Illustrative downtown Las Vegas skyline — new development shapes Midtown comps and demand.',
  },
  walkableStreetDay: {
    src: '/images/generated/walkable-street-day.webp',
    alt: 'Illustrative walkable Arts District street with shaded sidewalks, cafe patio, and bike racks near Midtown Las Vegas',
    caption: 'Illustrative walkable street — daily errands on foot are a key reason buyers choose Midtown.',
  },
}

/** Buyer-guide slug → image. Unmapped guides fall back to the walkable street. */
export const GUIDE_IMAGE_BY_SLUG: Record<string, SectionImageKey> = {
  'walkable-arts-district-living': 'walkableStreetDay',
  'las-vegas-condo-hoa-fees': 'buyerPlanningDesk',
  'living-in-arts-district-las-vegas': 'artsDistrictStreet',
  'arts-district-relocation-remote-work': 'condoInterior',
  'worth-buying-condo-las-vegas-now': 'buyerPlanningDesk',
  'first-friday-living-nearby': 'firstFridayNight',
  'arts-district-safety-for-residents': 'walkableStreetDay',
  'midtown-vs-strip-condo-living': 'downtownSkylineDusk',
}

/** Midtown category slug → image. */
export const MIDTOWN_IMAGE_BY_SLUG: Record<string, SectionImageKey> = {
  dine: 'restaurantDining',
  shop: 'plazaCourtyard',
  live: 'condoBuilding',
  stay: 'boutiqueHotelLobby',
  'things-to-do-in-las-vegas': 'artsDistrictStreet',
}
