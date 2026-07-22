import Seo from '../components/Seo'
import Hero from '../sections/Hero'
import TrustMetrics from '../sections/TrustMetrics'
import About from '../sections/About'
import WhyChooseStrive from '../sections/WhyChooseStrive'
import WhatWeDo from '../sections/WhatWeDo'
import OurApproach from '../sections/OurApproach'
import MembershipBenefits from '../sections/MembershipBenefits'
import MembershipProcess from '../sections/MembershipProcess'
import BusinessGrowth from '../sections/BusinessGrowth'
import Testimonials from '../sections/Testimonials'
import Brochure from '../sections/Brochure'
import FinalCTA from '../sections/FinalCTA'

export default function Home() {
  return (
    <>
      <Seo
        title="Building Trusted Trainers, Creating Real Opportunities"
        description="STRIVE empowers trainers through verified opportunities, professional development, and a trusted training ecosystem connecting educators with institutions and organizations."
        path="/"
      />
      <Hero />
      <TrustMetrics />
      <About />
      <WhyChooseStrive />
      <WhatWeDo />
      <OurApproach />
      <MembershipBenefits />
      <MembershipProcess />
      <BusinessGrowth />
      <Testimonials />
      <Brochure />
      <FinalCTA />
    </>
  )
}
