import { motion } from 'framer-motion'
import { FaLinkedin } from 'react-icons/fa'
import { SiGithub, SiYoutube } from 'react-icons/si'
import { profile } from '../data/content'
import { useLang } from '../i18n/LanguageContext'

const socials = [
  { label: 'LinkedIn', href: profile.linkedin, Icon: FaLinkedin },
  { label: 'YouTube', href: profile.youtube, Icon: SiYoutube },
  { label: 'GitHub', href: profile.github, Icon: SiGithub },
]

export default function About() {
  const { ui, t } = useLang()
  return (
    <section id="about" className="relative overflow-hidden px-6 py-24 bg-brand-navy">
      <svg
        aria-hidden
        className="absolute top-0 left-0 w-full h-16 sm:h-24 text-brand-lavender dark:text-white/5 -scale-y-100"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,64L60,58.7C120,53,240,43,360,48C480,53,600,75,720,80C840,85,960,75,1080,64C1200,53,1320,43,1380,37.3L1440,32L1440,120L0,120Z"
        />
      </svg>

      <div aria-hidden className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            color: '#ffffff',
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-brand-red/20 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-0 -right-16 w-[22rem] h-[22rem] rounded-full bg-brand-lavender/30 blur-3xl"
        />
      </div>

      <div className="max-w-5xl mx-auto relative">
        <div className="grid md:grid-cols-[auto_1fr] gap-10 items-start">
          {profile.photoAbout && (
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              src={profile.photoAbout}
              alt={profile.name}
              loading="lazy"
              className="w-full max-w-[280px] mx-auto md:mx-0 aspect-square rounded-3xl object-cover shadow-2xl"
            />
          )}

          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-2xl sm:text-3xl font-extrabold text-brand-red uppercase mb-5"
            >
              {ui.about.title}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white font-semibold leading-relaxed text-justify"
            >
              {t(profile.bio)}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex gap-3 mt-6"
            >
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-red transition-colors"
                >
                  <Icon className="w-4.5 h-4.5" />
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
