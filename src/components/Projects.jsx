import { motion } from 'framer-motion'
import { projects } from '../data/content'
import { techIcons } from '../data/techIcons'
import { useLang } from '../i18n/LanguageContext'
import ImageCarousel from './ImageCarousel'

export default function Projects() {
  const { ui, t } = useLang()
  return (
    <section id="projects" className="px-6 py-24 bg-white dark:bg-brand-navy transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-semibold text-brand-navy dark:text-white mb-10 text-center"
        >
          {ui.projects.title}
        </motion.h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-brand-navy/10 dark:border-white/10 bg-brand-navy overflow-hidden flex flex-col hover:border-brand-red/40 hover:-translate-y-1 transition-all duration-300"
            >
              <ImageCarousel images={project.images} alt={project.title} />
              <div className="p-6 flex flex-col flex-1">
                <h4 className="text-lg font-semibold text-white mb-2">{project.title}</h4>
                <p className="text-white/60 text-sm flex-1">{t(project.description)}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((techName) => {
                    const entry = techIcons[techName]
                    return (
                      <span
                        key={techName}
                        className="inline-flex items-center gap-1.5 text-xs font-mono px-2 py-1 rounded bg-white/10 text-brand-lavender"
                      >
                        {entry &&
                          (entry.src ? (
                            <img src={entry.src} alt="" className="w-3.5 h-3.5 shrink-0 object-contain" />
                          ) : (
                            <entry.Icon className="w-3.5 h-3.5 shrink-0" style={{ color: entry.color }} />
                          ))}
                        {techName}
                      </span>
                    )
                  })}
                </div>

                <div className="flex gap-4 mt-5 text-sm">
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white/80 hover:text-white underline underline-offset-4"
                    >
                      {ui.projects.code}
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white/80 hover:text-white underline underline-offset-4"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
