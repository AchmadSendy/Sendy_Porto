import { motion } from 'framer-motion'
import { certificates } from '../data/content'
import { useLang } from '../i18n/LanguageContext'

export default function Certificates() {
  const { ui, t } = useLang()
  return (
    <section id="certificates" className="px-6 py-24 bg-white dark:bg-brand-navy transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-semibold text-brand-navy dark:text-white mb-10 text-center"
        >
          {ui.certificates.title}
        </motion.h3>

        <div className="grid sm:grid-cols-2 gap-6">
          {certificates.map((cert, i) => (
            <motion.article
              key={cert.image}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-brand-navy/10 dark:border-white/10 bg-brand-lavender dark:bg-white/5 overflow-hidden hover:border-brand-red/40 transition-colors"
            >
              {cert.image && (
                <img
                  src={cert.image}
                  alt={t(cert.title)}
                  className="w-full h-44 object-cover"
                />
              )}
              <div className="p-6">
                <h4 className="text-lg font-semibold text-brand-navy dark:text-white mb-2">{t(cert.title)}</h4>
                {t(cert.description) && (
                  <p className="text-brand-navy/70 dark:text-white/70 text-sm">{t(cert.description)}</p>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
