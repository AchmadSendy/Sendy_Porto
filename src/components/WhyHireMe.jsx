import { motion } from 'framer-motion'
import { profile } from '../data/content'
import { useLang } from '../i18n/LanguageContext'

export default function WhyHireMe() {
  const { ui } = useLang()
  const { pre, highlight, body, stats, cta } = ui.whyhire
  return (
    <section className="px-6 py-16 bg-white dark:bg-brand-navy transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-brand-lavender dark:bg-white/5 p-8 sm:p-12 grid md:grid-cols-[auto_1fr] gap-10 items-center"
        >
          {profile.photo && (
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto md:mx-0">
              {profile.photoBg && (
                <img
                  src={profile.photoBg}
                  alt=""
                  aria-hidden
                  className="absolute -inset-3 z-0 w-[calc(100%+1.5rem)] h-[calc(100%+1.5rem)] object-contain"
                />
              )}
              <img
                src={profile.photo}
                alt={profile.name}
                className="relative z-10 w-full h-full object-contain"
              />
            </div>
          )}

          <div>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-brand-navy dark:text-white">
              {pre}<span className="text-brand-red">{highlight}</span>
            </h3>

            <p className="mt-4 text-brand-navy/70 dark:text-white/70 max-w-md">{body}</p>

            <div className="flex gap-10 mt-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-extrabold text-brand-navy dark:text-white">
                    {stat.value}
                  </p>
                  <p className="text-sm text-brand-navy/60 dark:text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-8 inline-block px-6 py-3 rounded-full border-2 border-brand-navy dark:border-white text-brand-navy dark:text-white font-bold hover:bg-brand-navy hover:text-white dark:hover:bg-white dark:hover:text-brand-navy transition-colors"
            >
              {cta}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
