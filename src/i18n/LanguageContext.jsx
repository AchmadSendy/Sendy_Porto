import { createContext, useContext, useEffect, useState } from 'react'
import { strings } from './strings'

const LanguageContext = createContext(null)

function detectInitial() {
  if (typeof window === 'undefined') return 'id'
  const saved = localStorage.getItem('lang')
  if (saved === 'id' || saved === 'en') return saved
  return navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'id'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(detectInitial)

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const value = {
    lang,
    setLang,
    toggle: () => setLang((l) => (l === 'id' ? 'en' : 'id')),
    ui: strings[lang],
    // Ambil teks sesuai bahasa aktif dari field { id, en }. Kalau field bukan
    // objek dwibahasa (mis. string biasa / URL), kembalikan apa adanya.
    t: (field) =>
      field && typeof field === 'object' && !Array.isArray(field) && ('id' in field || 'en' in field)
        ? field[lang]
        : field,
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}
