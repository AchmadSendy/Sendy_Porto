import { useTheme } from '../hooks/useTheme'
import { useLang } from '../i18n/LanguageContext'

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme()
  const { ui } = useLang()

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? ui.theme.toLight : ui.theme.toDark}
      className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
    >
      {isDark ? (
        <svg viewBox="0 0 24 24" className="w-4.5 h-4.5" fill="currentColor">
          <path d="M12 4V2m0 20v-2M4 12H2m20 0h-2M5.64 5.64 4.22 4.22m15.56 15.56-1.42-1.42M5.64 18.36 4.22 19.78M19.78 4.22l-1.42 1.42M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="w-4.5 h-4.5" fill="currentColor">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
        </svg>
      )}
    </button>
  )
}
