import { MIDTOWN_COMMUNITY } from './community-config'

export const AMENITIES_PAGE_FAQS = [
  {
    question: `What grocery stores are near ${MIDTOWN_COMMUNITY.name}?`,
    answer:
      'Midtown buyers typically shop along Charleston Boulevard and downtown corridors for groceries and convenience — many errands are a short drive, while dining and galleries are walkable from 921 S Main St.',
  },
  {
    question: `How far is ${MIDTOWN_COMMUNITY.name} from the Las Vegas Strip?`,
    answer:
      'The Strip is roughly a 10–15 minute drive from Midtown in typical traffic — close for entertainment, but far enough to keep a residential Arts District feel.',
  },
  {
    question: `Are there hospitals near ${MIDTOWN_COMMUNITY.name}?`,
    answer:
      'University Medical Center (UMC) on Charleston Boulevard and downtown medical campuses are among the closest major hospital options — always confirm current ER locations before an emergency.',
  },
  {
    question: 'Where do I park for First Friday near Midtown?',
    answer:
      'First Friday Park & Ride uses the city garage at 500 S Main St (shuttle 3:00 PM–midnight), with additional event parking at 1000 Commerce St and 902 S Casino Center Blvd.',
  },
  {
    question: 'Can I walk to restaurants from Midtown condos?',
    answer:
      "Yes — KJ's Restaurant, Midtown Plaza, and Arts District dining on Main Street and Charleston are walkable from The English Residences and nearby Midtown inventory.",
  },
  {
    question: 'How far is Harry Reid International Airport from Midtown?',
    answer:
      'Harry Reid International Airport is approximately 15 minutes by car from Midtown in typical off-peak traffic (approximate; allow extra time for events and rush hour).',
  },
  {
    question: 'Is there fitness and recreation walkable from Midtown?',
    answer:
      'Residents use Midtown Run Club at 921 S Main St, Arts District walks, and nearby gyms along Charleston and downtown — filter the map for Fitness and Parks for live results when Maps is enabled.',
  },
] as const

export const AMENITIES_WRITTEN_SECTIONS = [
  {
    id: 'dining',
    title: 'Dining & Nightlife',
    body: `Midtown anchors Arts District dining at ${MIDTOWN_COMMUNITY.streetAddress}: KJ's Restaurant inside The English Hotel, chef-driven concepts at Midtown Plaza, and walkable spots along South Main Street. First Friday brings food trucks and pop-ups within blocks of English Residences owners.`,
  },
  {
    id: 'attractions',
    title: 'Arts, Entertainment & Attractions',
    body:
      'The 18b Arts District galleries, First Friday, Market in the Alley at 1326 S Main St, and venues like the Majestic Repertory Theatre define the cultural calendar. Fremont East and downtown casinos are a short drive north for additional nightlife without living on the Strip.',
  },
  {
    id: 'parking',
    title: 'Parking & Garage Access',
    body:
      'Event nights use the 500 S Main St Park & Ride garage with shuttle service, plus Commerce Street and Casino Center lots documented on this site. Condo buyers should confirm deeded or assigned garage parking with each building — secured parking matters on First Friday.',
  },
  {
    id: 'grocery',
    title: 'Grocery & Daily Errands',
    body:
      'Walk Score in the Arts District is high for dining and culture; groceries are usually a quick drive to Charleston Boulevard retailers and downtown convenience options. I map your typical errand routes during a buyer consult so you know what is walkable versus a five-minute drive.',
  },
  {
    id: 'parks',
    title: 'Parks & Outdoor Recreation',
    body:
      'Symphony Park and downtown green space sit north of the Arts District, while the Midtown Run Club meets at 921 S Main St. Street murals, gallery walks, and open-air markets add daily outdoor time without leaving the neighborhood.',
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Pharmacies',
    body:
      'University Medical Center on Charleston Boulevard is a major hospital campus serving downtown Las Vegas. Pharmacies and clinics line Charleston and Main Street corridors — use the Healthcare and Pharmacies filters on the map for current nearby listings.',
  },
  {
    id: 'commute',
    title: 'Commute & Regional Access',
    body:
      'Approximate drive times from Midtown: Las Vegas Strip 10–15 minutes, Harry Reid International Airport ~15 minutes, Downtown Summerlin 20–25 minutes (traffic dependent). The I-15 and US-95 freeway network is minutes away for valley-wide commutes.',
  },
] as const
