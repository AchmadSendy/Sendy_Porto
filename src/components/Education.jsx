import { motion } from 'framer-motion'
import { education } from '../data/content'
import { useLang } from '../i18n/LanguageContext'

export default function Education() {
  const { ui, t } = useLang()
  return (
    <section id="education" className="px-6 py-24 bg-brand-lavender dark:bg-brand-navy/60 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-semibold text-brand-navy dark:text-white mb-10 text-center"
        >
          {ui.education.title}
        </motion.h3>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-brand-navy/10 dark:border-white/10 bg-white dark:bg-white/5 p-6"
        >
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <h4 className="text-lg font-semibold text-brand-navy dark:text-white">{education.school}</h4>
              <p className="text-brand-navy/60 dark:text-white/60 text-sm">{education.degree}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-mono text-brand-red">{t(education.period)}</p>
              <p className="text-xs text-brand-navy/50 dark:text-white/50">{t(education.grade)}</p>
            </div>
          </div>
          <p className="text-brand-navy/70 dark:text-white/70 text-sm mt-3">{t(education.description)}</p>
          <p className="text-xs text-brand-navy/50 dark:text-white/50 mt-3">{ui.education.activities}: {t(education.activities)}</p>
        </motion.article>
      </div>
    </section>
  )
}
