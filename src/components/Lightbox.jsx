import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'

export default function Lightbox({ images, startIndex = 0, alt, onClose }) {
  const [index, setIndex] = useState(startIndex)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % images.length)
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [images.length, onClose])

  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-6"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          aria-label="Tutup"
          className="absolute top-4 right-4 text-white/70 hover:text-white text-3xl leading-none cursor-pointer"
        >
          &times;
        </button>

        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation()
              setIndex((i) => (i - 1 + images.length) % images.length)
            }}
            aria-label="Sebelumnya"
            className="absolute left-4 text-white/70 hover:text-white text-4xl leading-none px-2 cursor-pointer"
          >
            ‹
          </button>
        )}

        <motion.img
          key={images[index]}
          src={images[index]}
          alt={alt}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="max-w-full max-h-[85vh] rounded-lg object-contain"
        />

        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation()
              setIndex((i) => (i + 1) % images.length)
            }}
            aria-label="Selanjutnya"
            className="absolute right-4 text-white/70 hover:text-white text-4xl leading-none px-2 cursor-pointer"
          >
            ›
          </button>
        )}

        {images.length > 1 && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((src, i) => (
              <span
                key={src}
                className={`w-2 h-2 rounded-full ${i === index ? 'bg-white' : 'bg-white/40'}`}
              />
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>,
    document.body
  )
}
