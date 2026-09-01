import { motion } from 'framer-motion'
import { profile } from '../data/content'
import { useLang } from '../i18n/LanguageContext'
import TypewriterRole from './TypewriterRole'

const floatingIcons = [
  {
    src: '/images/lampu1.svg',
    alt: 'Ide',
    className: 'top-0 -right-2 sm:right-0 w-20 h-20 sm:w-28 sm:h-28',
    delay: 0,
  },
  {
    src: '/images/multimeter1.svg',
    alt: 'Elektronika',
    className: 'top-1/3 -left-6 sm:-left-10 w-16 h-16 sm:w-24 sm:h-24',
    delay: 0.6,
  },
  {
    src: '/images/hard1.svg',
    alt: 'Hardware',
    className: 'bottom-2 left-0 sm:-left-4 w-16 h-16 sm:w-24 sm:h-24',
    delay: 1.2,
  },
  {
    src: '/images/iot1.svg',
    alt: 'IoT',
    className: 'bottom-4 -right-4 sm:-right-8 w-14 h-14 sm:w-20 sm:h-20',
    delay: 1.8,
  },
]

export default function Hero() {
  const { ui, t, lang } = useLang()
  return (
    <section
      id="top"
      className="flex items-center px-6 pt-32 pb-24 relative overflow-hidden bg-white dark:bg-brand-navy transition-colors duration-300"
    >
      <div aria-hidden className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-40 dark:opacity-[0.08]"
          style={{
            backgroundImage:
              'radial-gradient(currentColor 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            color: '#132440',
          }}
        />

        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] rounded-full bg-brand-red/10 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-1/4 -right-20 w-[26rem] h-[26rem] rounded-full bg-brand-lavender dark:bg-brand-lavender/10 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-0 left-0 w-[22rem] h-[22rem] rounded-full bg-brand-red/10 blur-3xl"
        />
      </div>

      <div className="max-w-5xl mx-auto w-full relative grid md:grid-cols-[1fr_auto] gap-12 items-center">
        <div>
          <span className="inline-block bg-brand-red text-white text-sm font-bold px-4 py-1.5 rounded-md mb-5">
            {profile.name}
          </span>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-brand-navy dark:text-white">
            {ui.hero.greeting}
          </h1>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-red mt-2 min-h-[1.2em]">
            <TypewriterRole roles={t(profile.roles)} />
          </h2>

          <p className="mt-6 max-w-xl text-brand-navy/70 dark:text-white/70 text-lg">{t(profile.tagline)}</p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-md bg-brand-red text-white font-bold hover:bg-brand-red/90 transition-colors"
            >
              {ui.hero.ctaProjects}
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-md bg-brand-navy text-white font-bold hover:bg-brand-navy/90 dark:bg-white/10 dark:hover:bg-white/20 transition-colors"
            >
              {ui.hero.ctaContact}
            </a>
            <a
              href={lang === 'en' ? profile.cvEn : profile.cvId}
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-brand-navy/20 dark:border-white/20 text-brand-navy dark:text-white font-bold hover:bg-brand-navy/5 dark:hover:bg-white/10 transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {ui.hero.ctaCv}
            </a>
          </div>
        </div>

        {profile.photo && (
          <div className="relative justify-self-center w-72 h-72 sm:w-96 sm:h-96 lg:w-[26rem] lg:h-[26rem]">
            {profile.photoBg && (
              <img
                src={profile.photoBg}
                alt=""
                aria-hidden
                className="absolute -inset-4 z-0 w-[calc(100%+2rem)] h-[calc(100%+2rem)] object-contain"
              />
            )}

            <img
              src={profile.photo}
              alt={profile.name}
              className="relative z-10 w-full h-full object-contain"
            />

            {floatingIcons.map((icon) => (
              <motion.img
                key={icon.alt}
                src={icon.src}
                alt={icon.alt}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, delay: icon.delay, repeat: Infinity, ease: 'easeInOut' }}
                className={`absolute ${icon.className} object-contain drop-shadow-lg`}
              />
            ))}
          </div>
        )}
      </div>

      <svg
        aria-hidden
        className="absolute bottom-0 left-0 w-full h-16 sm:h-24 text-brand-lavender dark:text-white/5"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,64L60,58.7C120,53,240,43,360,48C480,53,600,75,720,80C840,85,960,75,1080,64C1200,53,1320,43,1380,37.3L1440,32L1440,120L0,120Z"
        />
      </svg>
    </section>
  )
}
