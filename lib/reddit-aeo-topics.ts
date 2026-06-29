/**
 * Reddit-sourced AEO guide topics for Midtown Las Vegas buyer research.
 * Each guide maps real r/vegaslocals, r/vegas, and r/LasVegas threads to
 * citation-ready quick answers, FAQ schema, and geo-focused content.
 */

export type RedditSource = {
  url: string
  subreddit: string
  topic: string
}

export type GuideFaq = {
  question: string
  answer: string
}

export type GuideContentBlock =
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | {
      type: 'table'
      headers: [string, string, string]
      rows: [string, string, string][]
    }
  | { type: 'reddit'; before: string; subreddit: string; after: string; sourceUrl: string }

export type GuideSection = {
  heading: string
  blocks: GuideContentBlock[]
}

export type RedditAeoGuide = {
  slug: string
  title: string
  h1: string
  metaDescription: string
  ogTitle: string
  ogDescription: string
  quickAnswer: string
  datePublished: string
  redditSources: RedditSource[]
  faqs: GuideFaq[]
  sections: GuideSection[]
  relatedGuideSlugs?: string[]
  calendlyText: string
  realScoutTitle: string
  realScoutDescription: string
  realScoutPropertyTypes?: string
  /** Short label for hub cards and homepage */
  cardSummary: string
}

const REDDIT = {
  relocationArts: {
    url: 'https://www.reddit.com/r/vegaslocals/comments/1nzs0wn/relocation_arts_district_or/',
    subreddit: 'r/vegaslocals',
    topic: 'Relocation — Arts District or elsewhere for remote work',
  },
  livingArtsDistrict: {
    url: 'https://www.reddit.com/r/vegaslocals/comments/1rz2tqm/living_in_the_arts_district/',
    subreddit: 'r/vegaslocals',
    topic: 'Living in the Arts District — part-time vs full-time',
  },
  bestBuildings: {
    url: 'https://www.reddit.com/r/vegaslocals/comments/1rw0cje/best_buildings_in_the_arts_district/',
    subreddit: 'r/vegaslocals',
    topic: 'Best buildings in the Arts District',
  },
  safetyWalking: {
    url: 'https://www.reddit.com/r/vegaslocals/comments/1pgspvx/is_it_safe_to_walk_around_the_arts_district_at/',
    subreddit: 'r/vegaslocals',
    topic: 'Safety walking in the Arts District at night',
  },
  worthBuyingCondo: {
    url: 'https://www.reddit.com/r/vegaslocals/comments/x42ma7/is_it_worth_buying_a_condo_now/',
    subreddit: 'r/vegaslocals',
    topic: 'Is it worth buying a condo now in Las Vegas',
  },
  hoaFees: {
    url: 'https://www.reddit.com/r/vegaslocals/comments/1qcpekc/hoa_fees/',
    subreddit: 'r/vegaslocals',
    topic: 'HOA fee increases in Las Vegas communities',
  },
  hoaExperiences: {
    url: 'https://www.reddit.com/r/vegaslocals/comments/16nc6s9/best_and_worst_hoa_experiences/',
    subreddit: 'r/vegaslocals',
    topic: 'Best and worst HOA experiences in Las Vegas',
  },
  highRiseHoas: {
    url: 'https://www.reddit.com/r/vegas/comments/13bfawv/las_vegas_high_rise_condos/',
    subreddit: 'r/vegas',
    topic: 'Las Vegas high-rise condo HOA minimums',
  },
  firstFriday: {
    url: 'https://www.reddit.com/r/vegaslocals/comments/1lr4vak/first_friday/',
    subreddit: 'r/vegaslocals',
    topic: 'First Friday in the Arts District',
  },
  rentVsBuy: {
    url: 'https://www.reddit.com/r/vegaslocals/comments/18yjk2p/moving_to_vegas_this_year_seeking_advice_on/',
    subreddit: 'r/vegaslocals',
    topic: 'Rent vs buy — apartments and condos in Las Vegas',
  },
  downtownLiving: {
    url: 'https://www.reddit.com/r/LasVegas/comments/mjy47/where_should_i_live_if_ill_be_working_in_downtown/',
    subreddit: 'r/LasVegas',
    topic: 'Where to live when working downtown Las Vegas',
  },
  artsDistrictPartTime: {
    url: 'https://www.reddit.com/r/vegaslocals/comments/p36gw7/arts_district/',
    subreddit: 'r/vegaslocals',
    topic: 'Arts District neighborhood discussion',
  },
} as const

export const REDDIT_AEO_GUIDES: RedditAeoGuide[] = [
  {
    slug: 'walkable-arts-district-living',
    title: 'Walkable Living in Las Vegas Arts District | Midtown Guide',
    h1: 'Walkable Living in the Las Vegas Arts District',
    metaDescription:
      'Is the Las Vegas Arts District walkable? Guide for remote workers and relocators on walkable daily life, safety, condos vs rent, and Midtown at 921 S Main St. Call (702) 500-1980.',
    ogTitle: 'Walkable Arts District Living | Midtown Las Vegas',
    ogDescription:
      'Everything you need to know about walkable daily life in the Las Vegas Arts District and Midtown — dining, galleries, condos, and relocation tips.',
    quickAnswer:
      'The Las Vegas Arts District is one of the city\'s most walkable neighborhoods (Walk Score ~86). Midtown at 921 S Main Street lets you walk to galleries, restaurants, First Friday events, and Midtown Plaza — ideal for remote workers who want daily life on foot instead of Strip traffic and suburban sprawl.',
    datePublished: '2026-06-28',
    cardSummary: 'Walk Score ~86, remote-work daily life, and why buyers choose Midtown over car-dependent suburbs.',
    redditSources: [REDDIT.relocationArts, REDDIT.livingArtsDistrict],
    faqs: [
      {
        question: 'Is the Las Vegas Arts District walkable?',
        answer:
          'Yes. The Arts District has a Walk Score of approximately 86, making it one of Las Vegas\'s most walkable neighborhoods. Residents can walk to galleries, restaurants, coffee shops, First Friday events, and Midtown Plaza without relying on a car for daily errands.',
      },
      {
        question: 'Where should I live in Las Vegas if I work remotely and want walkability?',
        answer:
          'Midtown Las Vegas in the Arts District is ideal for remote workers who want walkable daily life outside the Strip. Centered at 921 S Main Street, Midtown offers condos, the English Residences condo-hotel, dining at Midtown Plaza, and cultural events within a few blocks — unlike car-dependent suburban communities.',
      },
      {
        question: 'Is it better to rent or buy a condo in the Arts District?',
        answer:
          'Buying makes sense when your total monthly cost (mortgage, HOA, taxes, insurance) is competitive with rent and you plan to stay 3+ years. Arts District condos appeal to buyers who want to build equity in an appreciating urban core. Dr. Jan Duffy can compare rent vs buy scenarios for your budget.',
      },
      {
        question: 'How far is Midtown from the Las Vegas Strip?',
        answer:
          'Midtown is about 15 minutes by car from the Las Vegas Strip. The neighborhood offers a distinctly local experience — galleries, chef-driven restaurants, and community events — while keeping Strip entertainment accessible for occasional visits.',
      },
      {
        question: 'What can I walk to from Midtown Las Vegas?',
        answer:
          'From Midtown you can walk to 30+ art galleries, locally-owned restaurants, The English Hotel, The Pepper Club, Midtown Plaza, First Friday festival routes, and downtown Las Vegas employers. The 18b Arts District spans roughly 18 blocks of creative and commercial activity.',
      },
    ],
    sections: [
      {
        heading: 'Why do remote workers choose the Arts District over the suburbs?',
        blocks: [
          {
            type: 'reddit',
            before: 'Las Vegas newcomers on forums like ',
            subreddit: REDDIT.relocationArts.subreddit,
            after: ' often ask where to live for walkable daily life. Suburban master-planned communities require driving everywhere. Midtown offers a different model: live, dine, and explore culture within a few blocks.',
            sourceUrl: REDDIT.relocationArts.url,
          },
          {
            type: 'ul',
            items: [
              'Walk Score ~86 — errands and dining on foot',
              '30+ galleries — art walks and studio openings',
              'First Friday monthly — 10,000+ visitors, live music, food trucks',
              'Local dining — chef-driven spots, not chain restaurants',
            ],
          },
        ],
      },
      {
        heading: 'Is it worth buying a condo in Las Vegas now?',
        blocks: [
          {
            type: 'p',
            text: 'Buyers weighing purchase timing should compare total monthly cost against rent, factor in [HOA fees](/guides/las-vegas-condo-hoa-fees), and consider how long they plan to stay. Arts District property values have appreciated roughly 45% since 2015 as the neighborhood transformed from industrial zone to cultural destination.',
          },
          {
            type: 'p',
            text: 'Condo-hotel units at [The English Residences](/neighborhood/english-residences) add income potential when you\'re away — a model discussed frequently by Las Vegas investors comparing pure rental vs owner-use flexibility.',
          },
        ],
      },
      {
        heading: 'What does a typical walkable day in Midtown look like?',
        blocks: [
          {
            type: 'ol',
            items: [
              'Morning coffee and breakfast at a local café near Main Street',
              'Gallery browsing or a studio visit in the 18b Arts District',
              'Lunch at [Midtown Plaza](/neighborhood/midtown-plaza) or The Pepper Club',
              'Afternoon remote work from home or a co-working-friendly café',
              'Evening dinner, live music, or a show at a neighborhood venue',
              'Monthly First Friday art walk without driving or parking hassles',
            ],
          },
          {
            type: 'p',
            text: 'Read our full [Arts District guide](/arts-district-guide) for dining, events, and neighborhood highlights.',
          },
        ],
      },
      {
        heading: 'Condos vs apartments: which offers better security in downtown?',
        blocks: [
          {
            type: 'p',
            text: 'High-rise and boutique condos in the Arts District typically offer controlled access, secure parking, and on-site management — factors Las Vegas relocators often prioritize over standard apartments. Ownership also builds equity in a neighborhood with limited walkable inventory.',
          },
          {
            type: 'p',
            text: 'Browse [available Midtown properties](/search) or explore [investment opportunities](/investment-properties) in the area.',
          },
        ],
      },
    ],
    relatedGuideSlugs: ['las-vegas-condo-hoa-fees', 'arts-district-relocation-remote-work', 'worth-buying-condo-las-vegas-now'],
    calendlyText: 'Schedule a Walkable Neighborhood Tour',
    realScoutTitle: 'Walkable Arts District Condos',
    realScoutDescription: 'Find homes you can walk to galleries, First Friday, and Midtown Plaza from your door.',
  },
  {
    slug: 'las-vegas-condo-hoa-fees',
    title: 'Las Vegas Condo HOA Fees Guide | Arts District & Midtown',
    h1: 'Las Vegas Condo HOA Fees: What You\'re Really Paying For',
    metaDescription:
      'What do HOA fees cost for Las Vegas condos? Typical Arts District and Midtown HOA ranges, what fees cover, and how to evaluate HOA health before you buy. Call (702) 500-1980.',
    ogTitle: 'Las Vegas Condo HOA Fees Guide | Midtown Arts District',
    ogDescription:
      'Typical HOA fees for Las Vegas condos, including Arts District high-rises and Midtown communities — what you pay and what to ask before buying.',
    quickAnswer:
      'Las Vegas condo HOA fees range from about $50–$150/month in low-rise communities to $400–$800+ in downtown and Arts District high-rises. Fees cover shared maintenance, insurance, amenities, and reserve funds — and they can rise if reserves are underfunded. Always review the HOA budget and reserve study before you buy in Midtown or the Arts District.',
    datePublished: '2026-06-28',
    cardSummary: 'Typical HOA ranges by building type, what fees cover, and how to spot underfunded reserves.',
    redditSources: [REDDIT.hoaFees, REDDIT.highRiseHoas, REDDIT.hoaExperiences],
    faqs: [
      {
        question: 'What are typical HOA fees for Las Vegas condos?',
        answer:
          'Las Vegas condo HOA fees vary widely by building type. Low-rise and mid-rise communities often run $50–$150 per month. Downtown and Arts District high-rise condos commonly range from $400–$800+ per month because fees cover elevators, pools, fitness centers, security, and reserve funds. Always request the current HOA disclosure before making an offer.',
      },
      {
        question: 'What do HOA fees typically cover in Las Vegas?',
        answer:
          'HOA fees usually cover exterior maintenance, landscaping, common-area insurance, amenities (pool, gym, lobby), trash, water for common areas, and contributions to reserve funds for future repairs. High-rise buildings add elevator maintenance, concierge, and structural reserve requirements. Review the HOA budget and reserve study — not just the monthly number.',
      },
      {
        question: 'Are HOA fees in the Arts District higher than other Las Vegas areas?',
        answer:
          'Arts District and downtown high-rise HOA fees are generally higher than suburban low-rise condos because buildings include resort-style amenities, 24/7 security, and expensive shared systems like elevators and rooftop decks. The tradeoff is walkable urban living, cultural amenities, and strong rental demand near downtown employers and entertainment.',
      },
      {
        question: 'How do I know if an HOA is well-managed before buying?',
        answer:
          'Request the HOA budget, reserve study, meeting minutes, and any pending special assessments. Look for healthy reserve funding (25%+ of annual budget is a common benchmark), low delinquency rates, and transparent communication. Dr. Jan Duffy can help you review HOA documents for Midtown and Arts District properties before you commit.',
      },
      {
        question: 'Can HOA fees increase after I buy?',
        answer:
          'Yes. HOA boards can raise regular assessments and levy special assessments for major repairs. Reddit buyers in Las Vegas communities report increases when reserves are underfunded or insurance costs rise. Review 3–5 years of fee history and reserve study projections to understand likely future costs.',
      },
    ],
    sections: [
      {
        heading: 'How much are HOA fees for Las Vegas condos?',
        blocks: [
          {
            type: 'p',
            text: 'HOA fees depend on building type, amenities, and how well the association funds reserves. Buyers relocating to Las Vegas — especially those comparing [walkable Arts District living](/guides/walkable-arts-district-living) to suburban homes — should budget for HOA as part of total monthly cost, not just the mortgage.',
          },
          {
            type: 'table',
            headers: ['Building type', 'Typical monthly HOA', 'Common inclusions'],
            rows: [
              ['Low-rise / garden-style condos', '$50 – $150', 'Landscaping, exterior paint, pool, basic insurance'],
              ['Mid-rise downtown condos', '$300 – $600', 'Fitness center, pool, parking, elevator, security'],
              ['Arts District high-rises (e.g. Juhl area)', '$600 – $800+', 'Resort amenities, rooftop decks, concierge, large reserves'],
              ['Condo-hotel (English Residences)', 'Varies by unit', 'Hotel operations, housekeeping pool, management fees'],
            ],
          },
        ],
      },
      {
        heading: 'What services do HOA fees typically cover?',
        blocks: [
          {
            type: 'ul',
            items: [
              'Exterior & common areas: roofing, paint, hallways, landscaping, lighting',
              'Amenities: pool, spa, fitness center, clubroom, rooftop decks',
              'Insurance: master policy for shared structure and liability',
              'Utilities: water, trash, and sometimes partial electric for common areas',
              'Reserves: savings for future roof, elevator, or facade projects',
              'Management: HOA management company fees and compliance',
            ],
          },
          {
            type: 'reddit',
            before: 'A lower HOA is not always better — underfunded reserves often lead to special assessments that can cost thousands. This is a common concern among Las Vegas buyers on ',
            subreddit: REDDIT.hoaFees.subreddit,
            after: ', where owners report fee jumps when reserves lag behind rising insurance and maintenance costs.',
            sourceUrl: REDDIT.hoaFees.url,
          },
        ],
      },
      {
        heading: 'How do Midtown and Arts District HOA fees compare?',
        blocks: [
          {
            type: 'p',
            text: 'Midtown Las Vegas at 921 S Main Street sits in the Arts District — a walkable urban core with a Walk Score around 86. High-rise inventory near downtown often carries higher HOA fees than suburban Vegas, but buyers gain gallery access, [First Friday](/neighborhood/first-fridays) events, and proximity to downtown employers without a long commute.',
          },
          {
            type: 'p',
            text: 'Explore current [Midtown real estate listings](/midtown-real-estate) or read our [buyer\'s guide](/buyers-guide-midtown) for the full purchasing process.',
          },
        ],
      },
      {
        heading: 'Is buying a Las Vegas condo worth it when HOA fees are high?',
        blocks: [
          {
            type: 'p',
            text: 'For many buyers, yes — when total monthly cost (mortgage + HOA + taxes + insurance) still beats rent and the location matches lifestyle goals. Remote workers relocating for walkable daily life often find Arts District condos justify higher HOA through reduced car dependence and stronger appreciation in cultural urban cores.',
          },
          {
            type: 'p',
            text: 'Dr. Jan Duffy specializes in Midtown and Arts District properties and can walk you through HOA documents, comparable sales, and investment scenarios. Call (702) 500-1980 or email DrJanSells@MidtownVegasCondos.com.',
          },
        ],
      },
    ],
    relatedGuideSlugs: ['walkable-arts-district-living', 'worth-buying-condo-las-vegas-now', 'midtown-vs-strip-condo-living'],
    calendlyText: 'Schedule an HOA Review Consultation',
    realScoutTitle: 'Las Vegas Arts District Condos',
    realScoutDescription: 'Compare HOA and pricing across Midtown condo listings with Dr. Jan Duffy.',
    realScoutPropertyTypes: 'Condo',
  },
  {
    slug: 'living-in-arts-district-las-vegas',
    title: 'Living in the Arts District Las Vegas | Part-Time vs Full-Time',
    h1: 'Living in the Las Vegas Arts District: What Residents Actually Say',
    metaDescription:
      'Should you live full-time or part-time in the Las Vegas Arts District? Reddit-backed guide on best buildings, lifestyle tradeoffs, and Midtown condo options. Call (702) 500-1980.',
    ogTitle: 'Living in the Arts District Las Vegas | Midtown Guide',
    ogDescription:
      'Part-time vs full-time Arts District living, best buildings, and what Las Vegas locals recommend for downtown condo buyers.',
    quickAnswer:
      'The Las Vegas Arts District works for both part-time and full-time residents. Part-timers often choose condo-hotels like The English Residences for lock-and-leave convenience; full-timers prioritize walkable blocks near Main Street and Charleston for daily dining, galleries, and community events. Midtown at 921 S Main St anchors the most buyer-friendly inventory in the 18b district.',
    datePublished: '2026-06-28',
    cardSummary: 'Part-time vs full-time living, best buildings, and what locals recommend for Arts District buyers.',
    redditSources: [REDDIT.livingArtsDistrict, REDDIT.bestBuildings, REDDIT.artsDistrictPartTime],
    faqs: [
      {
        question: 'Can you live part-time in the Las Vegas Arts District?',
        answer:
          'Yes. Part-time residents often choose condo-hotel units at The English Residences or lock-and-leave condos with strong HOA management. Professional hotel operations handle turnovers when you are away, making part-time ownership practical for second-home buyers and investors.',
      },
      {
        question: 'What are the best buildings to live in near the Arts District?',
        answer:
          'Buyers frequently compare downtown high-rises like Juhl (resort amenities, ~$600–$800+ HOA) with boutique Midtown inventory at 921 S Main Street. The best fit depends on whether you prioritize rooftop pools and concierge services or walkable ground-floor access to Midtown Plaza and local dining.',
      },
      {
        question: 'Is the Arts District good for full-time living?',
        answer:
          'Full-time residents value the Walk Score (~86), local restaurant scene, gallery culture, and First Friday events. The tradeoff is urban noise, occasional event parking, and higher HOA fees in high-rises compared to suburban Las Vegas — but many remote workers find the lifestyle worth it.',
      },
      {
        question: 'How does Midtown compare to other Arts District addresses?',
        answer:
          'Midtown Las Vegas is a curated mixed-use hub at 921 S Main Street with The English Hotel, Midtown Plaza, and English Residences condos. It offers a defined community anchor within the broader 18b Arts District, which appeals to buyers who want a recognizable address with dining and culture at their doorstep.',
      },
    ],
    sections: [
      {
        heading: 'What do Reddit locals say about Arts District living?',
        blocks: [
          {
            type: 'reddit',
            before: 'Threads on ',
            subreddit: REDDIT.livingArtsDistrict.subreddit,
            after: ' compare part-time vs full-time Arts District living, with residents noting the neighborhood feels more authentic than Strip high-rises while still keeping downtown entertainment close. Buyers often ask which blocks feel walkable year-round versus event-only busy.',
            sourceUrl: REDDIT.livingArtsDistrict.url,
          },
          {
            type: 'p',
            text: 'Dr. Jan Duffy helps buyers match building type to lifestyle — whether you need hotel-managed turnover, a primary residence near galleries, or an investment unit with rental flexibility.',
          },
        ],
      },
      {
        heading: 'Part-time vs full-time: which ownership model fits?',
        blocks: [
          {
            type: 'ul',
            items: [
              'Part-time / second home: condo-hotel income, professional management, minimal owner maintenance',
              'Full-time remote work: ground-floor walkability, home office space, stable HOA with strong reserves',
              'Hybrid investor: English Residences model — personal use plus revenue when traveling',
            ],
          },
          {
            type: 'p',
            text: 'Compare models in our [worth buying a condo](/guides/worth-buying-condo-las-vegas-now) and [HOA fees](/guides/las-vegas-condo-hoa-fees) guides before touring.',
          },
        ],
      },
      {
        heading: 'Best buildings and blocks for daily life',
        blocks: [
          {
            type: 'reddit',
            before: '',
            subreddit: REDDIT.bestBuildings.subreddit,
            after: ' buyers often debate high-rise amenities vs ground-level Arts District character. High-rises near Bonneville Avenue offer pools and fitness centers; Midtown and Main Street corridors offer immediate access to plaza dining and gallery walks.',
            sourceUrl: REDDIT.bestBuildings.url,
          },
          {
            type: 'p',
            text: 'Tour [The English Residences](/neighborhood/english-residences) and browse [Midtown listings](/midtown-real-estate) to compare floor plans, HOA structures, and walk times to your favorite spots.',
          },
        ],
      },
    ],
    relatedGuideSlugs: ['walkable-arts-district-living', 'arts-district-relocation-remote-work', 'first-friday-living-nearby'],
    calendlyText: 'Schedule an Arts District Lifestyle Tour',
    realScoutTitle: 'Arts District Residences',
    realScoutDescription: 'Compare part-time and full-time condo options across Midtown and downtown inventory.',
  },
  {
    slug: 'arts-district-relocation-remote-work',
    title: 'Arts District Relocation for Remote Workers | Las Vegas Guide',
    h1: 'Relocating to the Las Vegas Arts District for Remote Work',
    metaDescription:
      'Moving to Las Vegas and working remotely? Arts District relocation guide for walkable daily life, condo vs rent, and Midtown at 921 S Main St. Call (702) 500-1980.',
    ogTitle: 'Arts District Relocation for Remote Workers | Midtown',
    ogDescription:
      'Remote worker relocation guide for the Las Vegas Arts District — walkability, housing types, and why locals choose Midtown over the suburbs.',
    quickAnswer:
      'Remote workers relocating to Las Vegas often choose the Arts District for Walk Score ~86 daily life. Midtown at 921 S Main Street puts galleries, local restaurants, and First Friday within walking distance — without the Strip commute or suburban car dependence that r/vegaslocals relocators try to avoid.',
    datePublished: '2026-06-28',
    cardSummary: 'Remote-work relocation checklist — walkability, housing types, and Arts District vs suburbs.',
    redditSources: [REDDIT.relocationArts, REDDIT.downtownLiving],
    faqs: [
      {
        question: 'Where should remote workers live in Las Vegas for walkability?',
        answer:
          'The Arts District and downtown Las Vegas offer the strongest walkability in the valley (Walk Score ~86). Midtown Las Vegas at 921 S Main Street is a practical anchor for remote workers who want coffee shops, galleries, and dining on foot rather than 20-minute drives to every errand.',
      },
      {
        question: 'Is the Arts District better than the suburbs for work-from-home life?',
        answer:
          'If walkability and culture matter more than yard space, yes. Suburban Henderson and Summerlin require driving for most errands. Arts District residents can structure remote work days around local cafés, plaza dining, and evening events without leaving the neighborhood.',
      },
      {
        question: 'Should remote workers rent or buy in the Arts District first?',
        answer:
          'Renting 3–6 months helps you learn event noise patterns and parking rhythms before committing. If total ownership cost beats rent and you plan to stay 3+ years, buying a Midtown condo can build equity in a supply-constrained walkable core.',
      },
      {
        question: 'How far is the Arts District from McCarran airport and the Strip?',
        answer:
          'Harry Reid International Airport is roughly 15–20 minutes by car. The Strip is about 15 minutes — close enough for visitors and entertainment, but far enough that daily life feels local and residential.',
      },
    ],
    sections: [
      {
        heading: 'Why relocators on Reddit ask about the Arts District first',
        blocks: [
          {
            type: 'reddit',
            before: 'A common ',
            subreddit: REDDIT.relocationArts.subreddit,
            after: ' relocation thread asks where to move when working online and wanting walkable daily life outside generic suburbs. Respondents point to the Arts District, downtown, and emerging corridors like Midtown on Main Street.',
            sourceUrl: REDDIT.relocationArts.url,
          },
          {
            type: 'p',
            text: 'Read our [walkable living guide](/guides/walkable-arts-district-living) for day-in-the-life details and [safety guide](/guides/arts-district-safety-for-residents) for evening walk habits.',
          },
        ],
      },
      {
        heading: 'Relocation checklist for remote workers',
        blocks: [
          {
            type: 'ol',
            items: [
              'Budget total housing cost: mortgage/rent + HOA + utilities + parking',
              'Visit weekday vs First Friday weekend to compare noise and parking',
              'Test internet redundancy — most Arts District condos support remote video calls',
              'Walk your commute-to-coffee route from prospective buildings',
              'Schedule a buyer tour with Dr. Jan Duffy at (702) 500-1980',
            ],
          },
        ],
      },
      {
        heading: 'Arts District vs suburban Las Vegas for daily life',
        blocks: [
          {
            type: 'table',
            headers: ['Factor', 'Arts District / Midtown', 'Suburban Vegas'],
            rows: [
              ['Walk Score', '~86 — daily errands on foot', 'Typically car-dependent'],
              ['Culture & dining', 'Galleries, First Friday, local chefs', 'Chain retail centers'],
              ['HOA / housing', 'Condos & condo-hotels, higher HOA in high-rises', 'Single-family, lower HOA or none'],
              ['Remote work vibe', 'Urban energy, café work sessions', 'Quiet home offices, longer drives'],
            ],
          },
        ],
      },
    ],
    relatedGuideSlugs: ['walkable-arts-district-living', 'living-in-arts-district-las-vegas', 'arts-district-safety-for-residents'],
    calendlyText: 'Schedule a Remote-Worker Relocation Tour',
    realScoutTitle: 'Relocate to Midtown Las Vegas',
    realScoutDescription: 'Find walkable Arts District condos suited for remote work and lock-and-leave flexibility.',
  },
  {
    slug: 'arts-district-safety-for-residents',
    title: 'Arts District Safety for Residents | Las Vegas Walking Guide',
    h1: 'Is the Las Vegas Arts District Safe for Residents?',
    metaDescription:
      'Arts District safety for condo buyers — walking at night, building security, and what Las Vegas locals say on Reddit. Midtown buyer guide. Call (702) 500-1980.',
    ogTitle: 'Arts District Safety for Residents | Midtown Las Vegas',
    ogDescription:
      'Safety tips for living in the Las Vegas Arts District — walking at night, condo security, and resident perspectives from local forums.',
    quickAnswer:
      'Arts District safety improves on well-lit Main Street and event corridors during gallery hours and First Friday, when foot traffic is high. Condo buyers prioritize buildings with controlled access, secure parking, and on-site management — the same factors r/vegaslocals relocators cite when comparing downtown condos to apartments.',
    datePublished: '2026-06-28',
    cardSummary: 'Walking at night, building security, and practical safety tips for Arts District condo buyers.',
    redditSources: [REDDIT.safetyWalking, REDDIT.rentVsBuy],
    faqs: [
      {
        question: 'Is it safe to walk in the Arts District at night?',
        answer:
          'Main Street and active event corridors see more foot traffic during gallery hours and First Friday. Residents recommend staying on lit streets, walking with awareness, and using building secure parking rather than street parking late at night — similar to any urban core.',
      },
      {
        question: 'Do Arts District condos offer better security than apartments?',
        answer:
          'Most buyer-focused condos and high-rises offer controlled entry, secure parking garages, and cameras — features frequently requested in r/vegaslocals threads comparing rent vs buy downtown. Always verify current security staffing and access policies during your tour.',
      },
      {
        question: 'Are there areas of the Arts District to avoid?',
        answer:
          'The 18b Arts District is an evolving urban neighborhood. Blocks closer to Main Street and Midtown Plaza see the most consistent activity. Dr. Jan Duffy can walk you through block-by-block context during an in-person tour so you evaluate safety with local expertise.',
      },
      {
        question: 'Does living near First Friday affect safety or noise?',
        answer:
          'First Friday brings large crowds and increased police presence on event nights — generally positive for active streets, with tradeoffs in noise and parking. See our [First Friday living guide](/guides/first-friday-living-nearby) for buyer expectations.',
      },
    ],
    sections: [
      {
        heading: 'What locals discuss about Arts District safety',
        blocks: [
          {
            type: 'reddit',
            before: '',
            subreddit: REDDIT.safetyWalking.subreddit,
            after: ' threads on walking the Arts District at night mix practical tips — stick to lit corridors, know your route, choose buildings with garage parking — with reminders that urban cores require the same awareness as any downtown in a major city.',
            sourceUrl: REDDIT.safetyWalking.url,
          },
        ],
      },
      {
        heading: 'Security features condo buyers should verify',
        blocks: [
          {
            type: 'ul',
            items: [
              'Controlled lobby access and visitor policies',
              'Assigned or secured parking (garage preferred)',
              'On-site management or concierge hours',
              'Camera coverage in common areas and garages',
              'HOA-funded lighting and maintenance for exterior paths',
            ],
          },
          {
            type: 'p',
            text: 'Compare [Midtown condos](/search) with full security packages vs older inventory — Dr. Jan Duffy highlights these differences on every tour.',
          },
        ],
      },
      {
        heading: 'Safety and lifestyle: why buyers still choose Midtown',
        blocks: [
          {
            type: 'p',
            text: 'Buyers accept urban tradeoffs because walkable culture, remote-work convenience, and equity potential in a supply-limited district outweigh suburban isolation. Pair security features with [walkable living](/guides/walkable-arts-district-living) benefits to decide if Arts District ownership fits your comfort level.',
          },
        ],
      },
    ],
    relatedGuideSlugs: ['first-friday-living-nearby', 'walkable-arts-district-living', 'arts-district-relocation-remote-work'],
    calendlyText: 'Schedule a Safety-Focused Neighborhood Tour',
    realScoutTitle: 'Secure Arts District Condos',
    realScoutDescription: 'Browse Midtown listings with controlled access and secure parking options.',
  },
  {
    slug: 'first-friday-living-nearby',
    title: 'Living Near First Friday Las Vegas | Arts District Buyer Guide',
    h1: 'Living Near First Friday in the Las Vegas Arts District',
    metaDescription:
      'What is it like to live near First Friday Las Vegas? Noise, parking, and buyer tips for Arts District condos near 921 S Main St. Call (702) 500-1980.',
    ogTitle: 'Living Near First Friday | Midtown Arts District',
    ogDescription:
      'First Friday living guide for Arts District condo buyers — event noise, parking, and why proximity to Midtown can be a lifestyle advantage.',
    quickAnswer:
      'Living near First Friday means monthly street festivals, 10,000+ visitors, live music, and food trucks within walking distance of Midtown at 921 S Main Street. Buyers gain unmatched cultural access but should expect event-night noise and parking demand — plan for secure garage parking and visit on a First Friday before you buy.',
    datePublished: '2026-06-28',
    cardSummary: 'Event-night noise, parking, and why proximity to First Friday is a lifestyle plus for buyers.',
    redditSources: [REDDIT.firstFriday, REDDIT.livingArtsDistrict],
    faqs: [
      {
        question: 'What is First Friday in the Las Vegas Arts District?',
        answer:
          'First Friday is a monthly arts and culture festival in the 18b Arts District featuring gallery openings, live music, food trucks, and street vendors. It draws 10,000+ visitors and transforms Main Street and surrounding blocks into a walkable arts celebration.',
      },
      {
        question: 'Is it loud to live near First Friday?',
        answer:
          'Event nights are louder and busier than typical weekdays. Buildings set back from the main festival route or with upgraded windows and garage parking handle the energy better. Touring on a First Friday evening shows you exactly what to expect.',
      },
      {
        question: 'Do First Friday events hurt or help property values?',
        answer:
          'Cultural anchors generally support urban property demand by differentiating the Arts District from car-dependent suburbs. Buyers who value walkable events often pay a premium for proximity; those seeking quiet should prioritize units away from Main Street festival routes.',
      },
      {
        question: 'Can I walk to First Friday from Midtown?',
        answer:
          'Yes. Midtown Las Vegas at 921 S Main Street sits in the heart of First Friday routes. Residents can enjoy the festival on foot and return home without fighting event parking.',
      },
    ],
    sections: [
      {
        heading: 'What Reddit says about First Friday in the Arts District',
        blocks: [
          {
            type: 'reddit',
            before: '',
            subreddit: REDDIT.firstFriday.subreddit,
            after: ' discussions about First Friday mix enthusiasm for the arts scene with honest notes about crowds and parking. Residents who embrace the event treat it as a monthly block party; others choose units farther from the main corridor.',
            sourceUrl: REDDIT.firstFriday.url,
          },
        ],
      },
      {
        heading: 'Buyer pros and cons of First Friday proximity',
        blocks: [
          {
            type: 'ul',
            items: [
              'Pro: Walkable culture and entertainment without driving',
              'Pro: Strong sense of community and gallery network',
              'Pro: Appeal for short-term rental and condo-hotel guests during events',
              'Con: Event-night noise and street closures',
              'Con: Parking competition unless you have a deeded garage space',
            ],
          },
          {
            type: 'p',
            text: 'Learn more about the festival on our [First Fridays neighborhood page](/neighborhood/first-fridays) and [Arts District guide](/arts-district-guide).',
          },
        ],
      },
      {
        heading: 'How to test First Friday living before you buy',
        blocks: [
          {
            type: 'ol',
            items: [
              'Visit Midtown on a First Friday evening — walk the route from 921 S Main St',
              'Stand outside prospective buildings at peak hours for noise check',
              'Confirm deeded parking vs street-only options in HOA docs',
              'Ask Dr. Jan Duffy which units face festival corridors vs quieter facades',
            ],
          },
        ],
      },
    ],
    relatedGuideSlugs: ['living-in-arts-district-las-vegas', 'walkable-arts-district-living', 'arts-district-safety-for-residents'],
    calendlyText: 'Schedule a First Friday Area Tour',
    realScoutTitle: 'Condos Near First Friday',
    realScoutDescription: 'Find Midtown and Arts District homes steps from Las Vegas First Friday events.',
  },
  {
    slug: 'midtown-vs-strip-condo-living',
    title: 'Midtown vs Strip Condo Living | Las Vegas Buyer Comparison',
    h1: 'Midtown vs Strip Condo Living in Las Vegas',
    metaDescription:
      'Strip high-rise vs Arts District Midtown condos — HOA costs, lifestyle, and what Vegas Reddit buyers compare. Dr. Jan Duffy guide. Call (702) 500-1980.',
    ogTitle: 'Midtown vs Strip Condo Living | Las Vegas',
    ogDescription:
      'Compare Strip high-rise condos with Arts District Midtown living — HOA fees, walkability, and local vs tourist energy.',
    quickAnswer:
      'Strip high-rises like Veer offer resort pools and Strip views with tourist-zone energy and $600+ HOA floors. Midtown in the Arts District offers local gallery culture, Walk Score ~86 daily life, and a residential creative community at 921 S Main St — better for buyers who want downtown authenticity over Strip nightlife at their doorstep.',
    datePublished: '2026-06-28',
    cardSummary: 'Strip high-rise vs Arts District Midtown — HOA, vibe, and who each market fits.',
    redditSources: [REDDIT.highRiseHoas, REDDIT.livingArtsDistrict],
    faqs: [
      {
        question: 'Are Strip condos or Arts District condos better for full-time living?',
        answer:
          'Arts District and Midtown condos suit full-time residents who want local restaurants, galleries, and walkable errands. Strip towers suit buyers who prioritize Strip proximity and resort amenities and accept heavier tourist traffic and higher HOA baselines.',
      },
      {
        question: 'How do HOA fees compare between Strip and Arts District high-rises?',
        answer:
          'Both markets often start around $600+ monthly for high-rise amenities. Arts District buildings like Juhl and Strip towers both fund pools, fitness centers, and security — compare reserve studies building by building rather than assuming one district is always cheaper.',
      },
      {
        question: 'Why do Reddit buyers mention Midtown instead of Strip towers?',
        answer:
          'Local forums contrast Strip sterile or tourist-heavy feel with Arts District character. Buyers seeking community, art walks, and chef-driven dining often gravitate to Main Street and Midtown rather than Las Vegas Boulevard high-rises.',
      },
      {
        question: 'Can I still reach the Strip easily from Midtown?',
        answer:
          'Yes — Midtown is roughly 15 minutes by car from the Strip, close enough for entertainment without living in the tourist core.',
      },
    ],
    sections: [
      {
        heading: 'Strip vs Arts District: what buyers are really choosing',
        blocks: [
          {
            type: 'reddit',
            before: '',
            subreddit: REDDIT.highRiseHoas.subreddit,
            after: ' and r/vegaslocals threads comparing high-rise living often note Strip towers feel tourist-oriented while Arts District blocks feel like a neighborhood. Midtown buyers want culture and walkability; Strip buyers want views and immediate resort access.',
            sourceUrl: REDDIT.highRiseHoas.url,
          },
        ],
      },
      {
        heading: 'Side-by-side comparison',
        blocks: [
          {
            type: 'table',
            headers: ['Factor', 'Midtown / Arts District', 'Strip high-rises'],
            rows: [
              ['Daily vibe', 'Local galleries, First Friday, chef-driven dining', 'Tourist energy, casino proximity'],
              ['Walk Score', '~86 for daily errands', 'Walkable on Strip, less residential feel'],
              ['Typical HOA floor', '$400–$800+ (building dependent)', '$600+ common for high-rises'],
              ['Best for', 'Remote workers, culture-focused owners', 'Strip workers, part-time Vegas lifestyle'],
            ],
          },
        ],
      },
      {
        heading: 'Which should you tour first?',
        blocks: [
          {
            type: 'p',
            text: 'If Reddit research pointed you toward walkable local life, start at [Midtown real estate](/midtown-real-estate) and [English Residences](/neighborhood/english-residences). If Strip views are non-negotiable, compare total monthly cost including HOA using our [HOA guide](/guides/las-vegas-condo-hoa-fees).',
          },
        ],
      },
    ],
    relatedGuideSlugs: ['las-vegas-condo-hoa-fees', 'living-in-arts-district-las-vegas', 'worth-buying-condo-las-vegas-now'],
    calendlyText: 'Schedule a Midtown vs Strip Comparison Tour',
    realScoutTitle: 'Arts District vs Strip Alternatives',
    realScoutDescription: 'Explore Midtown condos with local Arts District character and walkable daily life.',
    realScoutPropertyTypes: 'Condo',
  },
  {
    slug: 'worth-buying-condo-las-vegas-now',
    title: 'Is Buying a Las Vegas Condo Worth It Now? | 2026 Buyer Guide',
    h1: 'Is Buying a Las Vegas Condo Worth It Now?',
    metaDescription:
      'Is buying a Las Vegas condo worth it in 2026? Reddit-backed analysis of rent vs buy, HOA costs, interest rates, and Arts District Midtown opportunities. Call (702) 500-1980.',
    ogTitle: 'Is Buying a Las Vegas Condo Worth It? | Midtown Guide',
    ogDescription:
      'Rent vs buy, HOA expenses, and timing considerations for Las Vegas condo buyers — with Arts District and Midtown context.',
    quickAnswer:
      'Buying a Las Vegas condo can be worth it when your all-in monthly cost (mortgage, HOA, taxes, insurance) beats rent and you plan to stay 3+ years. Arts District buyers add walkability and appreciation potential in a cultural urban core — but must budget for HOA ($400–$800+ in high-rises) and review reserves before committing.',
    datePublished: '2026-06-28',
    cardSummary: 'Rent vs buy math, timing, HOA surprises, and when Arts District ownership makes sense.',
    redditSources: [REDDIT.worthBuyingCondo, REDDIT.rentVsBuy],
    faqs: [
      {
        question: 'Is it worth buying a condo in Las Vegas now?',
        answer:
          'It depends on total monthly cost vs rent, how long you will stay, and HOA health. Buyers who saved for a down payment and find units where ownership beats renting $1,500+ apartments often build equity — especially if interest rates and inventory match their budget.',
      },
      {
        question: 'What expenses do Las Vegas condo buyers forget?',
        answer:
          'HOA assessments, special assessments, master insurance gaps, parking fees, and reserve underfunding top the list. Reddit buyers recommend reviewing 3–5 years of HOA history, not just list price.',
      },
      {
        question: 'Should I wait for Las Vegas prices to drop?',
        answer:
          'Timing the market is uncertain. Waiting may mean higher rates or lost equity in appreciating districts like the Arts District. Run rent vs buy with current rates and your planned tenure — that math matters more than headlines.',
      },
      {
        question: 'Are Arts District condos a good investment in 2026?',
        answer:
          'Arts District values have risen with cultural investment and limited walkable supply. Condo-hotel models at The English Residences add income flexibility. Dr. Jan Duffy provides comparables and investment scenarios for Midtown buyers.',
      },
    ],
    sections: [
      {
        heading: 'What Reddit buyers ask about timing and math',
        blocks: [
          {
            type: 'reddit',
            before: 'Classic ',
            subreddit: REDDIT.worthBuyingCondo.subreddit,
            after: ' threads compare $200K condos with $1,100/month ownership cost against $1,500+ rent — and debate whether to wait for prices or rates to shift. The consensus pattern: run your personal breakeven with HOA included.',
            sourceUrl: REDDIT.worthBuyingCondo.url,
          },
        ],
      },
      {
        heading: 'Rent vs buy checklist for Arts District condos',
        blocks: [
          {
            type: 'ol',
            items: [
              'Calculate PITI + HOA + insurance vs comparable rent',
              'Request HOA budget, reserve study, and special assessment history',
              'Plan minimum 3-year hold to amortize closing costs',
              'Compare [Midtown inventory](/midtown-real-estate) against suburban single-family totals',
              'Factor walkability savings — less gas, fewer rideshares for daily life',
            ],
          },
        ],
      },
      {
        heading: 'When buying beats renting in Midtown',
        blocks: [
          {
            type: 'p',
            text: 'Buying wins when you want equity in a Walk Score ~86 district, can afford healthy HOAs, and value [English Residences](/neighborhood/english-residences) income potential. Renting wins when you are new to Vegas and still choosing between [Strip vs Arts District](/guides/midtown-vs-strip-condo-living) lifestyles.',
          },
          {
            type: 'p',
            text: 'Start with our [buyer\'s guide](/buyers-guide-midtown) and [HOA fees guide](/guides/las-vegas-condo-hoa-fees) before scheduling a tour at (702) 500-1980.',
          },
        ],
      },
    ],
    relatedGuideSlugs: ['las-vegas-condo-hoa-fees', 'walkable-arts-district-living', 'midtown-vs-strip-condo-living'],
    calendlyText: 'Schedule a Rent vs Buy Consultation',
    realScoutTitle: 'Las Vegas Condos for Sale',
    realScoutDescription: 'Compare ownership costs across Midtown and Arts District listings.',
    realScoutPropertyTypes: 'Condo',
  },
]

export function getGuideBySlug(slug: string): RedditAeoGuide | undefined {
  return REDDIT_AEO_GUIDES.find((g) => g.slug === slug)
}

export function getAllGuideSlugs(): string[] {
  return REDDIT_AEO_GUIDES.map((g) => g.slug)
}

/** Top Reddit-sourced questions for homepage AEO section */
export const REDDIT_HOMEPAGE_QUESTIONS = [
  {
    question: 'Is the Arts District walkable?',
    answer: 'Yes — Walk Score ~86. Midtown at 921 S Main St puts galleries and dining on foot.',
    guideSlug: 'walkable-arts-district-living',
  },
  {
    question: 'What do Las Vegas condo HOA fees cost?',
    answer: 'Low-rise: $50–$150/mo. Arts District high-rises: $400–$800+. Review reserve studies.',
    guideSlug: 'las-vegas-condo-hoa-fees',
  },
  {
    question: 'Is buying a Vegas condo worth it now?',
    answer: 'Often yes when all-in cost beats rent and you stay 3+ years — include HOA in math.',
    guideSlug: 'worth-buying-condo-las-vegas-now',
  },
  {
    question: 'Midtown or Strip for full-time living?',
    answer: 'Midtown offers local culture and walkability; Strip towers offer resort views and tourist energy.',
    guideSlug: 'midtown-vs-strip-condo-living',
  },
  {
    question: 'Is the Arts District safe at night?',
    answer: 'Stay on lit corridors; choose condos with secure parking and controlled access.',
    guideSlug: 'arts-district-safety-for-residents',
  },
  {
    question: 'What is it like living near First Friday?',
    answer: 'Monthly festivals steps away — expect event-night energy; garage parking helps.',
    guideSlug: 'first-friday-living-nearby',
  },
] as const
