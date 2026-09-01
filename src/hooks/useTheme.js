import { useEffect, useState } from 'react'

export function useTheme() {
  const [isDark, setIsDark] = useState(
    () => typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.theme = isDark ? 'dark' : 'light'
  }, [isDark])

  return { isDark, toggleTheme: () => setIsDark((v) => !v) }
}
