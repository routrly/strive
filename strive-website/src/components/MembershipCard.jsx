export default function MembershipCard({ title, description, formUrl }) {
  return (
    <div className="rounded-card p-8 bg-white/60 backdrop-blur-lg border border-white/40 shadow-lg flex flex-col gap-4 h-full">
      <h3 className="text-2xl font-bold text-primary">{title}</h3>
      <p className="text-text/80 flex-1">{description}</p>
      <a
        href={formUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-center bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-secondary transition-colors"
      >
        Apply Now
      </a>
    </div>
  )
}
