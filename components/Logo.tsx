export function Logo({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  const text = tone === 'dark' ? 'text-charcoal' : 'text-white'
  return (
    <div className={`flex items-center gap-4 ${text}`}>
      <svg width="44" height="44" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="1.25" />
        <path d="M16 6V14M12 14C12 15.1046 12.8954 16 14 16H18C19.1046 16 20 15.1046 20 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M14 16V22M20 16V22M14 22L16 26L20 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="16" cy="26" r="1.5" fill="#0047AB" />
      </svg>
      <span className="font-script text-4xl md:text-5xl leading-none [-webkit-text-stroke:1px_currentColor] [text-shadow:0_1px_0_currentColor]">
        Anchor&rsquo;s <span className={tone === 'dark' ? 'text-cobalt' : 'text-cobalt-light'}>Mill</span>
      </span>
    </div>
  )
}
