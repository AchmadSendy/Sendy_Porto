import { motion } from 'framer-motion'
import { useLang } from '../i18n/LanguageContext'

// Ikon per layanan (urutan sama dengan strings.services.items).
const icons = [
  // Web Development
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="3" y="4" width="18" height="14" rx="2" />
    <path d="M3 8h18M7 12l2 2-2 2m4 0h3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // IoT & Embedded
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="7" y="7" width="10" height="10" rx="1.5" />
    <circle cx="12" cy="12" r="1.6" />
    <path d="M10 3v3m4-3v3m-4 12v3m4-3v3M3 10h3m-3 4h3m12-4h3m-3 4h3" strokeLinecap="round" />
  </svg>,
  // Industrial Automation & SCADA
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M12 3.5a2 2 0 0 1 2 2l-.2 1.3c.5.2 1 .5 1.4.9l1.2-.5a2 2 0 0 1 2.5 1l.5 1a2 2 0 0 1-.6 2.4l-1 .8c.06.5.06 1 0 1.5l1 .8a2 2 0 0 1 .6 2.4l-.5 1a2 2 0 0 1-2.5 1l-1.2-.5c-.4.4-.9.7-1.4.9l.2 1.3a2 2 0 0 1-2 2h-.9a2 2 0 0 1-2-2l.2-1.3a5.7 5.7 0 0 1-1.4-.9l-1.2.5a2 2 0 0 1-2.5-1l-.5-1a2 2 0 0 1 .6-2.4l1-.8a6 6 0 0 1 0-1.5l-1-.8a2 2 0 0 1-.6-2.4l.5-1a2 2 0 0 1 2.5-1l1.2.5c.4-.4.9-.7 1.4-.9l-.2-1.3a2 2 0 0 1 2-2Z" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="2.6" />
  </svg>,
]

export default function Services() {
  const { ui } = useLang()
  const { title, items } = ui.services

  return (
    <section id="services" className="px-6 py-24 bg-white dark:bg-brand-navy transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-semibold text-brand-navy dark:text-white mb-10 text-center"
        >
          {title}
        </motion.h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-brand-navy/10 dark:border-white/10 bg-brand-lavender dark:bg-white/5 p-7 hover:border-brand-red/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center mb-5 [&>svg]:w-6 [&>svg]:h-6">
                {icons[i]}
              </div>
              <h4 className="text-lg font-semibold text-brand-navy dark:text-white mb-2">{item.title}</h4>
              <p className="text-brand-navy/70 dark:text-white/70 text-sm leading-relaxed">{item.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
