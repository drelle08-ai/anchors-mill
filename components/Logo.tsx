export function Logo({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  const text = tone === 'dark' ? 'text-ink' : 'text-cream'
  return (
    <div className={`flex items-center gap-3 ${text}`}>
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="1.25" />
        <path d="M16 6V14M12 14C12 15.1046 12.8954 16 14 16H18C19.1046 16 20 15.1046 20 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M14 16V22M20 16V22M14 22L16 26L20 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="16" cy="26" r="1.5" fill="#C19A6B" />
      </svg>
      <span className="font-serif text-xl tracking-[0.18em] uppercase leading-none">
        Anchor&rsquo;s <span className="text-khaki">Mill</span>
      </span>
    </div>
  )
}
