import { useState } from 'react'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'
import { useLang } from '../i18n/LanguageContext'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { ui } = useLang()

  const links = [
    { href: '#about', label: ui.nav.about },
    { href: '#skills', label: ui.nav.skills },
    { href: '#services', label: ui.nav.services },
    { href: '#experience', label: ui.nav.experience },
    { href: '#projects', label: ui.nav.projects },
    { href: '#education', label: ui.nav.education },
    { href: '#blog', label: ui.nav.blog },
    { href: '#contact', label: ui.nav.contact },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-brand-navy border-b border-white/10">
      <nav className="max-w-6xl mx-auto grid grid-cols-[auto_1fr_auto] items-center gap-4 px-6 py-4">
        <a href="#top" className="flex items-center">
          <img src="/images/logo.svg" alt="Sendy Skot" className="h-9 w-auto" />
        </a>

        <ul className="hidden md:flex items-center justify-center gap-8 text-sm text-white/70">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-end gap-3">
          <LanguageToggle />
          <ThemeToggle />

          <button
            className="md:hidden text-white"
            aria-label={ui.menu}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d={open ? 'M6 6l12 12M18 6L6 18' : 'M4 7h16M4 12h16M4 17h16'}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col gap-1 px-6 pb-4 text-white/70 bg-brand-navy border-b border-white/10">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
