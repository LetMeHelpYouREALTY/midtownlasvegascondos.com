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
          text: 'Midtown Las Vegas condos range from approximately $250,000 to $1,500,000 depending on size, location, and amenities. The English Residences offer condo-hotel units starting in the mid-$200s. Contact Dr. Jan at (702) 500-1955 for current availability.',
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
          text: 'You can reach Dr. Jan Duffy at (702) 500-1955 or email DrJanSells@MidtownLasVegasCondos.com. Visit www.midtownlasvegascondos.com to search available properties or schedule a personal tour of the Midtown neighborhood.',
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

