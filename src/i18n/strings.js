// Semua teks antarmuka (bukan data konten) dwibahasa. Data konten ada di
// src/data/content.js dengan field { id, en }.

export const strings = {
  id: {
    nav: {
      about: 'Tentang',
      skills: 'Skills',
      services: 'Layanan',
      experience: 'Pengalaman',
      projects: 'Project',
      education: 'Pendidikan',
      blog: 'Blog',
      contact: 'Kontak',
    },
    hero: {
      greeting: 'Hai! Aku Sendy',
      ctaProjects: 'Lihat Project',
      ctaContact: 'Hubungi Saya',
      ctaCv: 'Download CV',
    },
    about: { title: 'Tentang Saya' },
    whyhire: {
      pre: 'Kenapa ',
      highlight: 'Pilih Saya?',
      body: 'Fokus pada komunikasi yang jelas, deadline yang ditepati, dan solusi yang benar-benar menyelesaikan masalah — baik itu project web, otomasi, maupun IoT.',
      stats: [
        { value: '3+', label: 'Tahun Pengalaman' },
        { value: '8+', label: 'Project Selesai' },
      ],
      cta: 'Hubungi Saya',
    },
    skills: { title: 'Teknologi yang saya kuasai' },
    services: {
      title: 'Apa yang bisa saya bantu',
      items: [
        {
          title: 'Pengembangan Web',
          desc: 'Website & landing page responsif, cepat, dan SEO-friendly — memakai WordPress/Elementor Pro atau custom (Laravel/CodeIgniter). Dari wireframe Figma sampai deployment.',
        },
        {
          title: 'IoT & Embedded',
          desc: 'Perangkat IoT end-to-end: sensor node ESP32/Arduino, konektivitas MQTT/Firebase, dashboard monitoring, dan aplikasi mobile Flutter.',
        },
        {
          title: 'Otomasi Industri & SCADA',
          desc: 'Sistem otomasi & kontrol industri: pemrograman mikrokontroler/PLC, desain wiring kontrol/daya, PCB custom, HMI, dan SCADA.',
        },
      ],
    },
    experience: { title: 'Riwayat pekerjaan & freelance' },
    projects: {
      title: 'Beberapa hasil kerja saya',
      code: 'Kode',
      demo: 'Demo',
    },
    education: {
      title: 'Riwayat akademik',
      activities: 'Aktivitas',
    },
    certificates: { title: 'Kumpulan sertifikat' },
    blog: {
      title: 'Tulisan & catatan teknis',
      more: 'Tampilkan selengkapnya',
      fallbackTitle: 'SendySkot Blog',
      fallbackDesc:
        'Artikel dan dokumentasi project seputar IoT, mikrokontroler, simulasi CNC, dan dasar elektronika. Baca tutorial dan catatan teknis terbaru langsung di sendyskot.my.id.',
    },
    creator: {
      title: 'Konten Edukasi Teknologi',
      subtitle:
        'Aku juga aktif berbagi ilmu elektronika, mekatronika, dan IoT lewat SendySkot. Yuk mampir, tonton, dan follow! 🚀',
      youtubeDesc: 'Tutorial & edukasi elektronika dan mekatronika.',
      youtubeBtn: 'Tonton di YouTube',
      tiktokDesc: 'Tips singkat & konten teknologi bite-size.',
      tiktokBtn: 'Lihat di TikTok',
    },
    clients: { title: 'Yang Pernah Bekerja Sama' },
    contact: {
      title: 'Mari terhubung',
      subtitle: 'Terbuka untuk kolaborasi, peluang kerja, atau sekadar ngobrol soal teknologi.',
      email: 'Email Saya',
      cvLabel: 'Unduh CV (ATS-friendly):',
      cvIdBtn: 'CV Bahasa Indonesia',
      cvEnBtn: 'CV English',
    },
    footer: {
      blurb: 'Teman terbaiku adalah orang yang membuatku mampu menunjukkan sisi terbaik dalam diriku. Jadi yuk mari berteman dan berdiskusi, silakan klik ikon di bawah ini untuk memulai pertemanan sesuai media sosial kesukaan kamu 😉🙌',
      madeWith: 'Dibuat dengan',
      by: 'oleh',
    },
    theme: { toLight: 'Ganti ke mode terang', toDark: 'Ganti ke mode gelap' },
    lang: { label: 'Ganti bahasa' },
    menu: 'Buka menu',
  },

  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      services: 'Services',
      experience: 'Experience',
      projects: 'Projects',
      education: 'Education',
      blog: 'Blog',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi! I'm Sendy",
      ctaProjects: 'View Projects',
      ctaContact: 'Get in Touch',
      ctaCv: 'Download CV',
    },
    about: { title: 'About Me' },
    whyhire: {
      pre: 'Why ',
      highlight: 'Choose Me?',
      body: "Focused on clear communication, deadlines that are met, and solutions that actually solve the problem — whether it's a web, automation, or IoT project.",
      stats: [
        { value: '3+', label: 'Years of Experience' },
        { value: '8+', label: 'Projects Completed' },
      ],
      cta: 'Get in Touch',
    },
    skills: { title: 'Technologies I work with' },
    services: {
      title: 'What I can help with',
      items: [
        {
          title: 'Web Development',
          desc: 'Responsive, fast, SEO-friendly websites & landing pages — using WordPress/Elementor Pro or a custom stack (Laravel/CodeIgniter). From Figma wireframes to deployment.',
        },
        {
          title: 'IoT & Embedded',
          desc: 'End-to-end IoT devices: ESP32/Arduino sensor nodes, MQTT/Firebase connectivity, monitoring dashboards, and Flutter mobile apps.',
        },
        {
          title: 'Industrial Automation & SCADA',
          desc: 'Industrial automation & control: microcontroller/PLC programming, control/power wiring design, custom PCBs, HMI, and SCADA.',
        },
      ],
    },
    experience: { title: 'Work & freelance history' },
    projects: {
      title: 'Some of my work',
      code: 'Code',
      demo: 'Demo',
    },
    education: {
      title: 'Academic background',
      activities: 'Activities',
    },
    certificates: { title: 'Certificate collection' },
    blog: {
      title: 'Writing & technical notes',
      more: 'View all posts',
      fallbackTitle: 'SendySkot Blog',
      fallbackDesc:
        'Articles and project documentation on IoT, microcontrollers, CNC simulation, and electronics fundamentals. Read the latest tutorials and technical notes directly at sendyskot.my.id.',
    },
    creator: {
      title: 'Tech Education Content',
      subtitle:
        'I also share electronics, mechatronics, and IoT knowledge as SendySkot. Come watch and follow along! 🚀',
      youtubeDesc: 'Tutorials & education on electronics and mechatronics.',
      youtubeBtn: 'Watch on YouTube',
      tiktokDesc: 'Quick tips & bite-size tech content.',
      tiktokBtn: 'View on TikTok',
    },
    clients: { title: 'Who I have worked with' },
    contact: {
      title: "Let's connect",
      subtitle: 'Open to collaboration, job opportunities, or just chatting about technology.',
      email: 'Email Me',
      cvLabel: 'Download CV (ATS-friendly):',
      cvIdBtn: 'CV (Bahasa Indonesia)',
      cvEnBtn: 'CV (English)',
    },
    footer: {
      blurb: "My best friend is someone who brings out the best in me. So let's connect and chat — click an icon below to start a friendship on your favorite social platform 😉🙌",
      madeWith: 'Made with',
      by: 'by',
    },
    theme: { toLight: 'Switch to light mode', toDark: 'Switch to dark mode' },
    lang: { label: 'Change language' },
    menu: 'Open menu',
  },
}
