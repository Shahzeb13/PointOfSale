import { logoConfig } from '../logoConfig'

interface LogoProps {
  className?: string
}

export default function Logo({ className = 'w-8 h-8' }: LogoProps) {
  if (logoConfig.url) {
    return <img src={logoConfig.url} alt={logoConfig.alt} className={className} />
  }

  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="8" className="fill-brand-primary" />
      <path d="M10 16l4 4 8-8" stroke="#181818" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
