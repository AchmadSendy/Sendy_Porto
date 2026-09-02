import { motion } from 'framer-motion'
import { SiYoutube, SiTiktok } from 'react-icons/si'
import { profile } from '../data/content'
import { useLang } from '../i18n/LanguageContext'

export default function ContentCreator() {
  const { ui } = useLang()

  const cards = [
    {
      key: 'youtube',
      Icon: SiYoutube,
      name: '@SendySkot',
      desc: ui.creator.youtubeDesc,
      btn: ui.creator.youtubeBtn,
      href: profile.youtube,
      iconClass: 'text-brand-red',
      iconBg: 'bg-brand-red/10',
      btnClass: 'bg-brand-red text-white hover:bg-brand-red/90',
    },
    {
      key: 'tiktok',
      Icon: SiTiktok,
      name: '@sendyskot.my',
      desc: ui.creator.tiktokDesc,
      btn: ui.creator.tiktokBtn,
      href: profile.tiktok,
      iconClass: 'text-brand-navy dark:text-white',
      iconBg: 'bg-brand-navy/10 dark:bg-white/10',
      btnClass:
        'bg-brand-navy text-white hover:bg-brand-navy/90 dark:bg-white/10 dark:hover:bg-white/20',
    },
  ]

  return (
    <section
      id="content"
      className="px-6 py-24 bg-white dark:bg-brand-navy transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-semibold text-brand-navy dark:text-white text-center"
        >
          {ui.creator.title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-brand-navy/60 dark:text-white/60 max-w-xl mx-auto text-center"
        >
          {ui.creator.subtitle}
        </motion.p>

        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center rounded-2xl border border-brand-navy/10 dark:border-white/10 bg-brand-lavender dark:bg-white/5 p-8 hover:border-brand-red/40 transition-colors"
            >
              <div className={`w-16 h-16 rounded-full ${c.iconBg} flex items-center justify-center`}>
                <c.Icon className={`w-8 h-8 ${c.iconClass}`} />
              </div>
              <h4 className="mt-5 text-lg font-semibold text-brand-navy dark:text-white">
                {c.name}
              </h4>
              <p className="mt-2 text-sm text-brand-navy/60 dark:text-white/60 leading-relaxed">
                {c.desc}
              </p>
              <a
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className={`mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors ${c.btnClass}`}
              >
                <c.Icon className="w-4 h-4" />
                {c.btn}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
