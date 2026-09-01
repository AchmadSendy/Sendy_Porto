import { useLang } from '../i18n/LanguageContext'

export default function LanguageToggle() {
  const { lang, toggle, ui } = useLang()

  return (
    <button
      onClick={toggle}
      aria-label={ui.lang.label}
      title={ui.lang.label}
      className="h-9 px-3 rounded-full bg-white/10 flex items-center gap-1.5 text-xs font-bold hover:bg-white/20 transition-colors"
    >
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.5 3.5 6 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-6-3.5-9s1-6.5 3.5-9Z" />
      </svg>
      <span className={lang === 'id' ? 'text-white' : 'text-white/40'}>ID</span>
      <span className="text-white/30">/</span>
      <span className={lang === 'en' ? 'text-white' : 'text-white/40'}>EN</span>
    </button>
  )
}
