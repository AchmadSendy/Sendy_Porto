import { motion } from 'framer-motion'
import { profile } from '../data/content'
import { useLang } from '../i18n/LanguageContext'

export default function Contact() {
  const { ui } = useLang()
  return (
    <section id="contact" className="px-6 py-24 bg-brand-navy">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-semibold text-white"
        >
          {ui.contact.title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-white/60 max-w-md mx-auto"
        >
          {ui.contact.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <a
            href={`mailto:${profile.email}`}
            className="px-6 py-3 rounded-full bg-brand-red text-white font-medium hover:bg-brand-red/90 transition-colors"
          >
            {ui.contact.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition-colors"
          >
            GitHub
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8"
        >
          <p className="text-white/50 text-sm mb-3">{ui.contact.cvLabel}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={profile.cvId}
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white font-medium hover:bg-brand-red transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {ui.contact.cvIdBtn}
            </a>
            <a
              href={profile.cvEn}
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white font-medium hover:bg-brand-red transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {ui.contact.cvEnBtn}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
