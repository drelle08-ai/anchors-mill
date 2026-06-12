export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        {/* Anchor symbol - modern geometric interpretation */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          className="text-khaki"
        >
          {/* Bold border style - neobrutalist */}
          <circle
            cx="16"
            cy="16"
            r="15"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          {/* Stylized anchor shape */}
          <path
            d="M16 6V14M12 14C12 15.1046 12.8954 16 14 16H18C19.1046 16 20 15.1046 20 14"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M14 16V22M20 16V22M14 22L16 26L20 22"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Khaki accent dot */}
          <circle cx="16" cy="26" r="1.5" fill="#C19A6B" />
        </svg>
      </div>
      <div className="flex flex-col">
        <h1 className="text-xl font-light font-serif text-primary-50 tracking-tight">
          ANCHOR'S
        </h1>
        <p className="text-xs font-light text-khaki tracking-widest">MILL</p>
      </div>
    </div>
  )
}
