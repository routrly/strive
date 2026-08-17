import { Helmet } from 'react-helmet-async'
import { FAQS } from '../constants/faqs'

export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'STRIVE',
    alternateName: 'Society for Training Resources and Instructional Value Enhancement',
    url: 'https://strivesociety.in',
    logo: {
      '@type': 'ImageObject',
      url: 'https://strivesociety.in/logo.png',
      width: 500,
      height: 500,
    },
    image: 'https://strivesociety.in/logo.png',
    description: 'A professional network connecting certified trainers with educational institutions, colleges, corporates, and CSR initiatives across India.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kochi',
      addressRegion: 'Kerala',
      addressCountry: 'IN',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-9489949872',
      contactType: 'customer support',
      email: 'info@strivesociety.in',
      areaServed: 'IN',
    },
    sameAs: [
      'https://www.facebook.com/share/163kBdRoWQ8/',
      'https://www.instagram.com/strivekochi',
      'https://www.linkedin.com/in/strive-society',
      'https://wa.me/919489949872',
    ],
    knowsAbout: [
      'Soft Skills Training',
      'Aptitude & Logical Reasoning Training',
      'Verbal Communication Training',
      'Technical & Coding Bootcamps',
      'School Empowerment Programs',
      'Faculty Development Workshops',
      'CSR Education Initiatives',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Trainer Membership Tracks',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Soft Skills Trainer',
            description: 'Interpersonal skills, communication, leadership, and corporate presentation modules.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Aptitude Trainer',
            description: 'Quantitative reasoning, logical analysis, data interpretation, and problem solving.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Verbal Skills Trainer',
            description: 'English language fluency, business communication, reading comprehension, and vocabulary.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Technical Trainer',
            description: 'Software development, programming languages, web technologies, and IT training.',
          },
        },
      ],
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'STRIVE',
    url: 'https://strivesociety.in',
    description: 'Empowering Trainers. Transforming Education.',
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://strivesociety.in/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Membership',
        item: 'https://strivesociety.in/membership',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Contact',
        item: 'https://strivesociety.in/contact',
      },
    ],
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
    </Helmet>
  )
}
