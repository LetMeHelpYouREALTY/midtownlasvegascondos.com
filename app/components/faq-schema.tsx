// FAQ Structured Data for SEO

export function FAQSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are The English Residences?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The English Residences are luxury condo-hotel units within The English Hotel in Midtown Las Vegas. Owners can use their residence when they want and earn income when they\'re away through professional hotel management.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where is Midtown Las Vegas located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Midtown is located just north of Charleston Boulevard in the heart of the Las Vegas Arts District at 921 S Main St, Las Vegas, NV 89101. It\'s a walkable neighborhood with galleries, restaurants, and entertainment.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is First Friday in Las Vegas?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'First Friday is Las Vegas\'s largest monthly art event, held on the first Friday of every month from 5 PM to 11 PM. The Arts District transforms into a vibrant street festival with gallery openings, live music, food trucks, and artisan markets.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much do condos in Midtown Las Vegas cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Midtown Las Vegas condos in our featured listings range from $450,000 to $1,000,000 depending on size, location, and amenities. The English Residences offer condo-hotel units with various price points. Contact Dr. Jan at (702) 500-1980 for current availability.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Midtown Las Vegas a good investment?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Midtown has been recognized as one of the fastest-growing neighborhoods in Las Vegas. The English Residences offer unique income potential through hotel management, and the area continues to attract new businesses, galleries, and residents. CNN called the Arts District "the most exciting neighborhood" in Las Vegas.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I contact Dr. Jan Duffy about Midtown properties?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can reach Dr. Jan Duffy at (702) 500-1980 or email DrJanSells@MidtownVegasCondos.com. Visit www.midtownvegascondos.com to search available properties or schedule a personal tour of the Midtown neighborhood.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why should I buy in Midtown Las Vegas?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'CNN called the Arts District "the most exciting neighborhood" in Las Vegas. You get walkable urban living, monthly First Friday events, 30+ art galleries, locally-owned restaurants, and a vibrant creative community - all while being close to the Strip and downtown. Property values have appreciated 45% since 2015.',
        },
      },
      {
        '@type': 'Question',
        name: 'What types of properties are available in Midtown?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Midtown offers luxury condos, condo-hotels (The English Residences), townhouses, and single-family homes. Our featured properties range from $450,000 to $1,000,000. Browse available properties at drjanduffy.realscout.com or call Dr. Jan at (702) 500-1980.',
        },
      },
      {
        '@type': 'Question',
        name: 'What makes the Arts District unique for real estate?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Arts District offers authentic urban living with walkable access to galleries, restaurants, and cultural events. Unlike typical Las Vegas developments, Midtown provides a genuine community experience with 18 blocks of creative energy, monthly First Friday events, and proximity to downtown Las Vegas.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are Midtown condos good for investment?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Midtown offers strong investment potential. The English Residences condo-hotel model allows owners to generate rental income when not using their units. The area has seen 45% property appreciation since 2015 and continues to attract new businesses and residents. The neighborhood\'s cultural appeal and proximity to downtown make it attractive for both long-term rentals and short-term stays.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I get started buying in Midtown?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Contact Dr. Jan Duffy at (702) 500-1980 or DrJanSells@MidtownVegasCondos.com. She specializes in Midtown properties and can schedule a personal tour, show you available homes, help with financing options, and guide you through the entire buying process from search to closing.',
        },
      },
      {
        '@type': 'Question',
        name: 'What amenities are available in Midtown?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Midtown offers walkable access to over 30 art galleries, locally-owned restaurants, The English Hotel, Midtown Plaza, First Friday events, and cultural venues like the Majestic Repertory Theatre. The neighborhood features converted warehouses, street art, pop-up markets, and regular community events.',
        },
      },
      {
        '@type': 'Question',
        name: 'How far is Midtown from the Las Vegas Strip?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Midtown is approximately 15 minutes by car from the Las Vegas Strip, offering easy access to Strip attractions while maintaining its distinct neighborhood character. The area is also minutes from downtown Las Vegas and about 15 minutes from McCarran International Airport.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are typical HOA fees for Las Vegas condos?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Las Vegas condo HOA fees range from about $50–$150 per month in low-rise communities to $400–$800+ in downtown and Arts District high-rises. Fees cover shared maintenance, amenities, insurance, and reserve funds. Review the HOA budget and reserve study before buying in Midtown.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is the Las Vegas Arts District walkable?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The Arts District has a Walk Score of approximately 86. Midtown residents can walk to 30+ galleries, locally-owned restaurants, Midtown Plaza, First Friday events, and The English Hotel without relying on a car for daily life.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is it worth buying a condo in Las Vegas now?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Buying can make sense when your total monthly cost (mortgage, HOA, taxes, insurance) beats rent and you plan to stay 3+ years. Midtown and the Arts District have seen roughly 45% appreciation since 2015. Contact Dr. Jan at (702) 500-1980 for a personalized rent vs buy analysis.',
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

