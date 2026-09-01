import { techIcons } from '../data/techIcons'

const marqueeNames = [
  'Fusion 360',
  'Siemens',
  'VS Code',
  'C++',
  'Python',
  'MATLAB',
  'KiCad',
  'AutoCAD',
  'WordPress',
  'Elementor Pro',
  'Laravel',
  'Flutter',
  'PHP',
  'CodeIgniter 3',
  'JavaScript',
  'jQuery',
  'Bootstrap',
  'MySQL',
  'XAMPP',
  'Laragon',
  'HTML5 & CSS3',
  'Tailwind CSS',
  'Arduino / ESP32 / STM32',
  'MQTT',
  'Firebase',
  'Figma',
  'Git',
]

function LogoItem({ name }) {
  const tech = techIcons[name]

  return (
    <div className="flex items-center gap-2.5 shrink-0 px-4 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300">
      {tech.src ? (
        <img src={tech.src} alt={name} className="h-8 w-8 object-contain" />
      ) : (
        <tech.Icon className="h-8 w-8" style={{ color: tech.color }} />
      )}
      <span className="text-sm font-semibold text-brand-navy dark:text-white whitespace-nowrap">
        {name}
      </span>
    </div>
  )
}

export default function TechLogos() {
  return (
    <section className="py-8 bg-brand-lavender dark:bg-white/5 border-y border-brand-navy/5 dark:border-white/10 overflow-hidden transition-colors duration-300">
      <div className="marquee-track flex items-center w-max">
        {[...marqueeNames, ...marqueeNames].map((name, i) => (
          <div key={`${name}-${i}`} className="flex items-center shrink-0">
            <LogoItem name={name} />
            <span className="text-brand-navy/15 dark:text-white/15 select-none" aria-hidden>
              •
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
