import { lazy, Suspense } from 'react'
import Seo from '../components/Seo'
import StructuredData from '../components/StructuredData'
import Hero from '../sections/Hero'
import AudiencePathways from '../sections/AudiencePathways'
import About from '../sections/About'
import WhyChooseStrive from '../sections/WhyChooseStrive'
import WhatWeDo from '../sections/WhatWeDo'
import TrainingGallery from '../sections/TrainingGallery'
import MembershipBenefits from '../sections/MembershipBenefits'
import MembershipProcess from '../sections/MembershipProcess'
import BusinessGrowth from '../sections/BusinessGrowth'
import Brochure from '../sections/Brochure'
import Faq from '../sections/Faq'
import FinalCTA from '../sections/FinalCTA'

const Testimonials = lazy(() => import('../sections/Testimonials'))

export default function Home() {
  return (
    <>
      <Seo
        title="Empowering Trainers. Transforming Education."
        description="A professional educator network connecting certified trainers with colleges, schools, corporate organizations, and CSR initiatives across India."
        path="/"
      />
      <StructuredData />

      <Hero />
      <AudiencePathways />
      <About />
      <WhyChooseStrive />
      <WhatWeDo />
      <TrainingGallery />
      <MembershipBenefits />
      <MembershipProcess />
      <BusinessGrowth />
      <Suspense fallback={null}>
        <Testimonials />
      </Suspense>
      <Brochure />
      <Faq />
      <FinalCTA />
    </>
  )
}
