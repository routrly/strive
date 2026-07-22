import { Link } from 'react-router-dom'

const VARIANTS = {
  primary: 'bg-primary text-white hover:bg-secondary',
  outline: 'border-2 border-white text-white hover:bg-white hover:text-primary',
  accent: 'bg-accent text-primary hover:bg-accent/90',
}

export default function Button({ as = 'link', to, href, variant = 'primary', className = '', children, ...props }) {
  const classes = `inline-block px-7 py-3 rounded-full font-semibold transition-colors duration-200 ${VARIANTS[variant]} ${className}`

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
