# Portofolio_1

Website portofolio pribadi untuk Achmad Sendy (Freelance Web Developer & IoT Engineer).

## Tech Stack

- React 19 + Vite 6
- Tailwind CSS v4 (via `@tailwindcss/vite`, tanpa file config terpisah — theme ada di `src/index.css`)
- Framer Motion untuk animasi scroll/entrance

## Struktur

```
src/
  data/content.js     # SEMUA konten teks: profile, skills, experience, projects, education, certificates
  components/          # Satu file per section:
                        #   Navbar, Hero, About, Skills, Experience, Projects,
                        #   Education, Certificates, Contact, Footer
  App.jsx              # Merangkai semua section, urutan = urutan render
  index.css            # Import Tailwind + theme tokens (@theme)
public/images/          # Foto profil, screenshot project, foto sertifikat
```

## Edit konten

Jangan edit teks langsung di komponen. Semua data ada di
[src/data/content.js](src/data/content.js) — ubah di situ saja:

- `profile` — nama, title, bio, kontak, foto
- `skills` — daftar teknologi
- `experience` — riwayat kerja/freelance (role, org, period, description)
- `projects` — project (title, description, tech, repo, demo, image)
- `education` — riwayat akademik (objek tunggal)
- `certificates` — sertifikat (title, description, image)

Beberapa project (Automated Dough Pusher, Satinese, AgriSmart, SCADA, Barokah Gorden) belum
punya gambar — thumbnail di LinkedIn resolusinya terlalu kecil untuk dipakai. Kalau ada
file gambar resolusi asli, taruh di `public/images/projects/` dan isi field `image` di
`content.js`.

## Perintah

```bash
npm run dev       # dev server (localhost:5173)
npm run build     # build production ke dist/
npm run preview   # preview hasil build
```

## Konvensi

- Satu komponen = satu section halaman, di-import berurutan di `App.jsx`.
- Styling pakai utility class Tailwind langsung di JSX, hindari CSS file terpisah per komponen.
- Warna aksen: indigo (`indigo-400`/`indigo-500`), background dasar `slate-950`.
- Section baru: tambahkan `id` yang sesuai untuk anchor link Navbar (`#about`, `#skills`, dst).
- Judul tiap section (`motion.h3`) rata tengah (`text-center`), tanpa label eyebrow/nomor urut di atasnya
  — kecuali judul di dalam `About.jsx` yang nempel di kolom teks sebelah foto, jadi tetap rata kiri.
