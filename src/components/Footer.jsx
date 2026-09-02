import { SiYoutube } from 'react-icons/si'
import { profile } from '../data/content'
import { useLang } from '../i18n/LanguageContext'

const socials = [
  {
    label: 'LinkedIn',
    href: profile.linkedin,
    path: 'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21h-4V9Z',
  },
  {
    label: 'GitHub',
    href: profile.github,
    path: 'M12 2C6.48 2 2 6.58 2 12.19c0 4.5 2.87 8.31 6.84 9.66.5.1.68-.22.68-.49v-1.9c-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.1-1.52-1.1-1.52-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05a9.4 9.4 0 0 1 5 0c1.9-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.19C22 6.58 17.52 2 12 2Z',
  },
  {
    label: 'WhatsApp',
    href: `https://wa.me/${profile.whatsapp}`,
    path: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.695.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413',
  },
  {
    label: 'YouTube',
    href: profile.youtube,
    Icon: SiYoutube,
  },
  {
    label: 'Email',
    href: `mailto:${profile.email}`,
    path: 'M2 5.5A1.5 1.5 0 0 1 3.5 4h17A1.5 1.5 0 0 1 22 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 18.5v-13Zm2.2.5 7.3 5.47a.8.8 0 0 0 .96 0L19.8 6H4.2ZM20 8.1l-6.85 5.13a2.8 2.8 0 0 1-3.3 0L4 8.1V18h16V8.1Z',
  },
]

export default function Footer() {
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
    <footer className="px-6 py-16 text-center bg-brand-navy border-t border-white/10">
      <div className="mx-auto max-w-2xl">
        <p className="text-brand-red font-bold italic text-sm tracking-wide">SENDY</p>
        <p className="text-white font-black text-3xl -mt-1 tracking-tight">SKOT</p>

        <p className="text-white/60 mt-8 leading-relaxed">{ui.footer.blurb}</p>

        <div className="flex justify-center gap-5 mt-6">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('mailto:') ? undefined : '_blank'}
              rel="noreferrer"
              aria-label={s.label}
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-brand-red transition-colors"
            >
              {s.Icon ? (
                <s.Icon className="w-4.5 h-4.5" />
              ) : (
                <svg viewBox="0 0 24 24" className="w-4.5 h-4.5" fill="currentColor">
                  <path d={s.path} />
                </svg>
              )}
            </a>
          ))}
        </div>

        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 text-sm text-white/60">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="text-white/50 text-sm mt-8">
          {ui.footer.madeWith} <span className="text-brand-red">❤️</span> {ui.footer.by} {profile.name}
        </p>
      </div>
    </footer>
  )
}
