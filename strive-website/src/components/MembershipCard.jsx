import { FiCheck, FiExternalLink } from 'react-icons/fi'

export default function MembershipCard({ title, description, formUrl, category }) {
  return (
    <div className="rounded-2xl p-6 sm:p-7 bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300 flex flex-col justify-between h-full group">
      <div className="space-y-4">
        {category && (
          <span className="inline-block px-3 py-1 rounded-md bg-primary/10 text-primary text-xs font-semibold tracking-wide">
            {category}
          </span>
        )}

        <div className="space-y-2">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
        </div>

        <ul className="space-y-2 pt-4 border-t border-slate-100 text-xs text-slate-700 font-medium">
          <li className="flex items-center gap-2">
            <FiCheck className="text-primary shrink-0 text-sm" /> Verified Opportunities
          </li>
          <li className="flex items-center gap-2">
            <FiCheck className="text-primary shrink-0 text-sm" /> Skill Development & TOT
          </li>
          <li className="flex items-center gap-2">
            <FiCheck className="text-primary shrink-0 text-sm" /> STRIVE Trainer Network
          </li>
        </ul>
      </div>

      <a
        href={formUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full mt-6 inline-flex items-center justify-center gap-2 text-center bg-primary hover:bg-primary-dark text-white px-5 py-3 rounded-xl font-semibold text-sm shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        Apply Now <FiExternalLink className="text-sm" />
      </a>
    </div>
  )
}
