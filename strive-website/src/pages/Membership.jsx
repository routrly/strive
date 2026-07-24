import Seo from '../components/Seo'
import SectionHeading from '../components/SectionHeading'
import MembershipCard from '../components/MembershipCard'

const TRACKS = [
  {
    title: 'Soft Skills Trainer',
    description: 'Apply to become a certified Soft Skills Trainer under STRIVE.',
    formUrl: 'https://docs.google.com/forms/d/1lPRhpVq0SEQAxuQ-aK8w_2mibONopxEUiMcbefD4Lbo/viewform',
  },
  {
    title: 'Aptitude Skills Trainer',
    description: 'Apply to join STRIVE as an Aptitude Skills Trainer.',
    formUrl: 'https://docs.google.com/forms/d/1fMaMXWx7NpYU5AqYE_JUPwfHjFnYi-m6RBsukwPksI0/viewform',
  },
  {
    title: 'Verbal Skills Trainer',
    description: 'Apply to become a Verbal Skills Trainer in the STRIVE professional network.',
    formUrl: 'https://docs.google.com/forms/d/1VlT32DSLPTG-Rqd7YcRdXYAkbRtkJ_isOxIZTu58nng/viewform',
  },
  {
    title: 'Technical Trainer',
    description: 'Apply to become a certified Technical Trainer under STRIVE.',
    formUrl: 'https://forms.gle/oGFWjgkmgUwrDDEB6',
  },
]

export default function Membership() {
  return (
    <>
      <Seo
        title="Membership — Apply as a Trainer"
        description="Apply to become a certified Soft Skills, Aptitude Skills, Verbal Skills, or Technical Trainer in the STRIVE professional network."
        path="/membership"
      />
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-primary/10 to-transparent min-h-screen">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="Join STRIVE"
            title="Choose Your Training Track"
            subtitle="Select the trainer category that matches your expertise and apply directly."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TRACKS.map((track) => (
              <MembershipCard key={track.title} {...track} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
