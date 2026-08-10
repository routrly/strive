import { Link } from 'react-router-dom'

const VARIANTS = {
  primary:
    'bg-primary text-white hover:bg-primary-dark shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]',
  secondary:
    'bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-white shadow-xs hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]',
  outline:
    'border border-white/80 text-white hover:bg-white hover:text-slate-900 shadow-xs hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]',
  outlineDark:
    'border border-slate-300 text-slate-800 hover:border-primary hover:text-primary bg-white shadow-xs hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]',
  accent:
    'bg-accent text-slate-900 font-semibold hover:bg-accent/90 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]',
}

export default function Button({
  as = 'link',
  to,
  href,
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold tracking-wide transition-all duration-200 ease-out cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
    VARIANTS[variant] || VARIANTS.primary
  } ${className}`

  if (as === 'link') {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (as === 'a') {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
