import { motion } from 'framer-motion'
import { experience } from '../data/content'
import { useLang } from '../i18n/LanguageContext'

export default function Experience() {
  const { ui, t } = useLang()
  return (
    <section id="experience" className="px-6 py-24 bg-brand-lavender dark:bg-brand-navy/60 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-semibold text-brand-navy dark:text-white mb-10 text-center"
        >
          {ui.experience.title}
        </motion.h3>

        <div className="flex flex-col gap-6">
          {experience.map((item, i) => (
            <motion.article
              key={`${item.role}-${item.org}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl border border-brand-navy/10 dark:border-white/10 bg-white dark:bg-white/5 p-6 hover:border-brand-red/40 transition-colors"
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h4 className="text-lg font-semibold text-brand-navy dark:text-white">{item.role}</h4>
                  <p className="text-brand-navy/60 dark:text-white/60 text-sm">
                    {item.org} · {item.type}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-mono text-brand-red">{t(item.period)}</p>
                  <p className="text-xs text-brand-navy/50 dark:text-white/50">{item.location}</p>
                </div>
              </div>
              <p className="text-brand-navy/70 dark:text-white/70 text-sm mt-3">{t(item.description)}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
