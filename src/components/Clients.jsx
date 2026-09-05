import { motion } from 'framer-motion'
import { clients } from '../data/content'
import { useLang } from '../i18n/LanguageContext'

export default function Clients() {
  const { ui } = useLang()
  return (
    <section className="px-6 py-24 bg-brand-lavender dark:bg-brand-navy/60 transition-colors duration-300">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-extrabold text-brand-navy dark:text-white mb-12"
        >
          {ui.clients.title}
        </motion.h3>

        <div className="flex flex-wrap justify-center items-center gap-6">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              className="bg-white rounded-2xl px-8 py-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={client.logo}
                alt={client.name}
                loading="lazy"
                className="h-9 sm:h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
