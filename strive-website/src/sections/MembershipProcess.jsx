import SectionHeading from '../components/SectionHeading'

const STEPS = ['Fill Profile', 'Application Review', 'Verification', 'Join STRIVE', 'Receive Opportunities']

export default function MembershipProcess() {
  return (
    <section className="py-20 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="How It Works" title="Membership Process" />
        <ol className="flex flex-col md:flex-row items-stretch md:items-start gap-6 md:gap-4">
          {STEPS.map((step, index) => (
            <li key={step} className="flex-1 flex md:flex-col items-center gap-4 text-center">
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">
                {index + 1}
              </div>
              <span className="font-medium text-text">{step}</span>
              {index < STEPS.length - 1 && (
                <span className="hidden md:block w-full border-t-2 border-dashed border-primary/30 mt-[-1.25rem]" aria-hidden="true" />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
