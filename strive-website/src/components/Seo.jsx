import { Helmet } from 'react-helmet-async'

const SITE_NAME = 'STRIVE'
const BASE_URL = 'https://strivesociety.in'
const DEFAULT_KEYWORDS = 'trainer network India, trainer network Kerala, certified trainers India, educational training programs, faculty development programs, school empowerment programs, CSR education initiatives, soft skills trainers, corporate training India'

export default function Seo({ title, description, path = '/', image = '/logo.png', keywords = DEFAULT_KEYWORDS }) {
  const fullTitle = `${title} | ${SITE_NAME}`
  const url = `${BASE_URL}${path}`
  const imageUrl = image.startsWith('http') ? image : `${BASE_URL}${image}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  )
}
