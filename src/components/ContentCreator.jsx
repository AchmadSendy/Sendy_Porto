import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { SiYoutube, SiTiktok } from 'react-icons/si'
import { profile } from '../data/content'
import { useLang } from '../i18n/LanguageContext'

export default function ContentCreator() {
  const { ui } = useLang()

  // Muat script embed resmi TikTok. Dihapus-tambah ulang tiap mount supaya
  // script memindai & merender blockquote .tiktok-embed di halaman ini
  // (iframe embed/v2 TikTok tidak reliable — sering tampil kosong).
  useEffect(() => {
    const SRC = 'https://www.tiktok.com/embed.js'
    document.querySelectorAll(`script[src="${SRC}"]`).forEach((s) => s.remove())
    const script = document.createElement('script')
    script.src = SRC
    script.async = true
    document.body.appendChild(script)
    return () => script.remove()
  }, [])

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
      embed: (
        <div className="w-full aspect-video overflow-hidden rounded-xl bg-black">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${profile.youtubeVideoId}`}
            title="YouTube video - SendySkot"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      ),
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
      embed: (
        <div className="flex w-full justify-center">
          <blockquote
            className="tiktok-embed"
            cite={`https://www.tiktok.com/@sendyskot.my/video/${profile.tiktokVideoId}`}
            data-video-id={profile.tiktokVideoId}
            style={{ maxWidth: '325px', minWidth: '260px', margin: 0 }}
          >
            <section>
              <a target="_blank" rel="noreferrer" href={profile.tiktok}>
                @sendyskot.my
              </a>
            </section>
          </blockquote>
        </div>
      ),
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

        <div className="mt-10 grid sm:grid-cols-2 gap-6 items-start">
          {cards.map((c, i) => (
            <motion.div
              key={c.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center rounded-2xl border border-brand-navy/10 dark:border-white/10 bg-brand-lavender dark:bg-white/5 p-6 hover:border-brand-red/40 transition-colors"
            >
              {c.embed}
              <div className="mt-5 flex items-center gap-2.5">
                <span className={`w-9 h-9 rounded-full ${c.iconBg} flex items-center justify-center shrink-0`}>
                  <c.Icon className={`w-4.5 h-4.5 ${c.iconClass}`} />
                </span>
                <h4 className="text-lg font-semibold text-brand-navy dark:text-white">
                  {c.name}
                </h4>
              </div>
              <p className="mt-2 text-sm text-brand-navy/60 dark:text-white/60 leading-relaxed">
                {c.desc}
              </p>
              <a
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className={`mt-5 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors ${c.btnClass}`}
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
