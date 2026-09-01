import { motion } from 'framer-motion'
import { skills } from '../data/content'
import { techIcons } from '../data/techIcons'
import { useLang } from '../i18n/LanguageContext'

export default function Skills() {
  const { ui } = useLang()
  return (
    <section id="skills" className="px-6 py-24 bg-white dark:bg-brand-navy transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-semibold text-brand-navy dark:text-white mb-10 text-center"
        >
          {ui.skills.title}
        </motion.h3>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill, i) => {
            const entry = techIcons[skill]
            return (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-navy/10 dark:border-white/10 bg-brand-lavender dark:bg-white/10 text-brand-navy dark:text-white text-sm font-mono hover:border-brand-red/50 hover:text-brand-red transition-colors"
              >
                {entry &&
                  (entry.src ? (
                    <img src={entry.src} alt="" className="w-4 h-4 shrink-0 object-contain" />
                  ) : (
                    <entry.Icon className="w-4 h-4 shrink-0" style={{ color: entry.color }} />
                  ))}
                {skill}
              </motion.span>
            )
          })}
        </div>
      </div>
    </section>
  )
}
