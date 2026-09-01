import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/content'
import { useLang } from '../i18n/LanguageContext'

// Jumlah artikel yang ditampilkan. Ubah ke 6 kalau mau dua baris.
const MAX_POSTS = 3

// Thumbnail Blogger default beresolusi kecil, ditandai direktif ukuran "s72-..."
// ("s72" membatasi sisi jadi 72px sehingga gambar terlihat burik). Direktif ini bisa
// muncul setelah "=" (URL /img/a/) atau sebagai segmen path "/s72-.../" (URL /img/b/).
// Ganti dengan resolusi tinggi, tetap pertahankan pemisah "="/"/" dan nama file.
function upgradeThumb(url) {
  if (!url) return ''
  return url.replace(/([=/])s\d+[\w-]*/, '$1w1000-h600-c')
}

function formatDate(iso, lang) {
  if (!iso) return ''
  try {
    return new Date(iso).toLocaleDateString(lang === 'en' ? 'en-US' : 'id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  } catch {
    return ''
  }
}

export default function Blog() {
  const { ui, lang } = useLang()
  const [posts, setPosts] = useState([])
  const [status, setStatus] = useState('loading') // loading | ready | error

  useEffect(() => {
    let active = true
    // Feed Blogger kadang lambat/gagal dimuat (script eksternal) — coba 1x lagi
    // sebelum jatuh ke tampilan fallback, biar card nggak keburu hilang gara-gara
    // hiccup jaringan sesaat.
    let attemptsLeft = 2

    const cleanupFns = []

    function load() {
      const cbName = '__blogFeed_' + Math.random().toString(36).slice(2)
      const timeout = setTimeout(() => {
        if (!active) return
        if (attemptsLeft > 1) {
          attemptsLeft -= 1
          load()
        } else {
          setStatus((s) => (s === 'loading' ? 'error' : s))
        }
      }, 8000)

      window[cbName] = (data) => {
        if (!active) return
        clearTimeout(timeout)
        try {
          const entries = data?.feed?.entry || []
          const parsed = entries.slice(0, MAX_POSTS).map((e) => ({
            title: e.title?.$t || '—',
            dateIso: e.published?.$t || '',
            url: (e.link || []).find((l) => l.rel === 'alternate')?.href || profile.blog,
            image: upgradeThumb(e['media$thumbnail']?.url),
          }))
          setPosts(parsed)
          setStatus(parsed.length ? 'ready' : 'error')
        } catch {
          setStatus('error')
        }
      }

      const base = profile.blog.replace(/\/$/, '')
      const script = document.createElement('script')
      script.src = `${base}/feeds/posts/default?alt=json-in-script&max-results=${MAX_POSTS}&callback=${cbName}`
      script.onerror = () => {
        if (!active) return
        clearTimeout(timeout)
        if (attemptsLeft > 1) {
          attemptsLeft -= 1
          load()
        } else {
          setStatus('error')
        }
      }
      document.body.appendChild(script)

      cleanupFns.push(() => {
        clearTimeout(timeout)
        // Jangan hapus callback-nya: script yang telat sampai tetap butuh fungsi ini
        // supaya tidak melempar ReferenceError. Cukup jadikan no-op.
        window[cbName] = () => {}
        if (script.parentNode) script.parentNode.removeChild(script)
      })
    }

    load()

    return () => {
      active = false
      cleanupFns.forEach((fn) => fn())
    }
  }, [])

  return (
    <section id="blog" className="px-6 py-24 bg-white dark:bg-brand-navy transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-semibold text-brand-navy dark:text-white mb-10 text-center"
        >
          {ui.blog.title}
        </motion.h3>

        {/* Skeleton saat memuat */}
        {status === 'loading' && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: MAX_POSTS }).map((_, i) => (
              <div
                key={i}
                className="rounded-2xl border border-brand-navy/10 dark:border-white/10 bg-brand-lavender dark:bg-white/5 overflow-hidden animate-pulse"
              >
                <div className="w-full h-44 bg-brand-navy/10 dark:bg-white/10" />
                <div className="p-5 space-y-3">
                  <div className="h-4 w-3/4 rounded bg-brand-navy/10 dark:bg-white/10" />
                  <div className="h-4 w-1/2 rounded bg-brand-navy/10 dark:bg-white/10" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Kartu artikel */}
        {status === 'ready' && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <motion.a
                key={post.url}
                href={post.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group flex flex-col rounded-2xl border border-brand-navy/10 dark:border-white/10 bg-brand-lavender dark:bg-white/5 overflow-hidden hover:border-brand-red/40 transition-colors"
              >
                {post.image ? (
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-44 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-44 bg-brand-red/10 flex items-center justify-center text-brand-red">
                    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path
                        d="M4 5.5A1.5 1.5 0 0 1 5.5 4H16l4 4v10.5A1.5 1.5 0 0 1 18.5 20h-13A1.5 1.5 0 0 1 4 18.5v-13Z"
                        strokeLinejoin="round"
                      />
                      <path d="M15 4v4.5h5M8 12h8M8 15.5h8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}

                <div className="p-5 flex flex-col flex-1">
                  <h4 className="text-base font-semibold text-brand-navy dark:text-white line-clamp-2 group-hover:text-brand-red transition-colors">
                    {post.title}
                  </h4>
                  {post.dateIso && (
                    <p className="mt-auto pt-3 text-xs font-mono text-brand-red">
                      {formatDate(post.dateIso, lang)}
                    </p>
                  )}
                </div>
              </motion.a>
            ))}
          </div>
        )}

        {/* Fallback kalau feed gagal dimuat */}
        {status === 'error' && (
          <div className="rounded-2xl border border-brand-navy/10 dark:border-white/10 bg-brand-lavender dark:bg-white/5 p-8 sm:p-10">
            <h4 className="text-xl font-semibold text-brand-navy dark:text-white">{ui.blog.fallbackTitle}</h4>
            <p className="text-brand-navy/70 dark:text-white/70 mt-2 leading-relaxed">{ui.blog.fallbackDesc}</p>
          </div>
        )}

        {/* Tombol ke blog */}
        <div className="mt-10 flex justify-center">
          <a
            href={profile.blog}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-medium text-white hover:bg-brand-red/90 transition-colors"
          >
            {ui.blog.more}
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
