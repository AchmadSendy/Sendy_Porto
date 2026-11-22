import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Lightbox from './Lightbox'

export default function ImageCarousel({ images, alt }) {
  const [index, setIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  // Gambar yang sudah selesai diunduh browser. Carousel hanya berpindah ke
  // gambar berikutnya kalau gambar itu sudah siap, jadi tidak pernah kosong.
  const loaded = useRef(new Set())

  useEffect(() => {
    if (images.length < 2) return
    let cancelled = false
    const next = images[(index + 1) % images.length]
    if (!loaded.current.has(next)) {
      const img = new Image()
      img.onload = () => {
        if (!cancelled) loaded.current.add(next)
      }
      img.src = next
    }
    return () => {
      cancelled = true
    }
  }, [index, images])

  useEffect(() => {
    if (images.length < 2) return
    const id = setInterval(() => {
      setIndex((i) => {
        const n = (i + 1) % images.length
        return loaded.current.has(images[n]) ? n : i
      })
    }, 3000)
    return () => clearInterval(id)
  }, [images])

  if (images.length === 0) return null

  return (
    <>
      <div
        className="relative h-48 overflow-hidden cursor-zoom-in bg-black/30"
        onClick={() => setLightboxOpen(true)}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={images[index]}
            src={images[index]}
            alt={alt}
            loading="lazy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full object-contain"
          />
        </AnimatePresence>

        {images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((src, i) => (
              <span
                key={src}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  i === index ? 'bg-white' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {lightboxOpen && (
        <Lightbox
          images={images}
          startIndex={index}
          alt={alt}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  )
}
