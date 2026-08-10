import Seo from '../components/Seo'
import SectionHeading from '../components/SectionHeading'
import MembershipCard from '../components/MembershipCard'

const TRACKS = [
  {
    title: 'Soft Skills Trainer',
    description: 'Interpersonal skills, communication, leadership, and corporate presentation modules.',
    formUrl: 'https://docs.google.com/forms/d/1lPRhpVq0SEQAxuQ-aK8w_2mibONopxEUiMcbefD4Lbo/viewform',
    category: 'Soft Skills',
  },
  {
    title: 'Aptitude Trainer',
    description: 'Quantitative reasoning, logical analysis, data interpretation, and problem solving.',
    formUrl: 'https://docs.google.com/forms/d/1fMaMXWx7NpYU5AqYE_JUPwfHjFnYi-m6RBsukwPksI0/viewform',
    category: 'Aptitude & Logic',
  },
  {
    title: 'Verbal Skills Trainer',
    description: 'English language fluency, business communication, reading comprehension, and vocabulary.',
    formUrl: 'https://docs.google.com/forms/d/1VlT32DSLPTG-Rqd7YcRdXYAkbRtkJ_isOxIZTu58nng/viewform',
    category: 'Verbal & Communication',
  },
  {
    title: 'Technical Trainer',
    description: 'Software development, programming languages, web technologies, and IT training.',
    formUrl: 'https://forms.gle/oGFWjgkmgUwrDDEB6',
    category: 'Technical & Code',
  },
]

export default function Membership() {
  return (
    <>
      <Seo
        title="Membership — Apply as a Trainer"
        description="Apply to join STRIVE as a Soft Skills, Aptitude, Verbal, or Technical Trainer."
        path="/membership"
      />
      <section className="pt-32 pb-20 px-6 bg-slate-50 min-h-screen border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Trainer Onboarding"
            title="Choose Your Training Domain"
            subtitle="Select your area of expertise below and complete the application form to join STRIVE."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRACKS.map((track) => (
              <MembershipCard key={track.title} {...track} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
