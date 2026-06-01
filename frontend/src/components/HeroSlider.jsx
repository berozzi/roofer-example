import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'

const slides = [
  {
    url: '',
    title: 'Profesjonalne Dekarstwo',
    subtitle: 'Solidne dachy na lata – doświadczenie, precyzja, jakość',
  },
  {
    url: '',
    title: 'Ciesielstwo z Pasją',
    subtitle: 'Konstrukcje dachowe, więźby, drewniane elementy',
  },
  {
    url: '',
    title: 'Renowacje i Naprawy',
    subtitle: 'Przywracamy blask starym dachom – od deszczułki po dachówkę',
  },
]

export default function HeroSlider() {
  const [idx, setIdx] = useState(0)

  const next = useCallback(() => setIdx((i) => (i + 1) % slides.length), [])

  useEffect(() => {
    const t = setInterval(next, 5000)
    return () => clearInterval(t)
  }, [next])

  return (
    <section className="relative h-[60vh] md:h-[75vh] min-h-80 overflow-hidden bg-wood-200">
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${i === idx ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="absolute inset-0 bg-linear-to-t from-wood-900/80 via-wood-900/40 to-wood-900/10" />
        </div>
      ))}

      <div className="absolute inset-0 flex items-center justify-center px-4 z-10">
        <div className="text-center text-white max-w-2xl">
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-3 drop-shadow-lg wrap-break-word">
            {slides[idx].title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 text-wood-100 drop-shadow">
            {slides[idx].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/realizacje" className="bg-wood-400 hover:bg-wood-500 text-white px-6 py-3 rounded font-semibold transition text-center">
              Zobacz realizacje
            </Link>
            <Link to="/kontakt" className="bg-white/20 hover:bg-white/30 backdrop-blur text-white px-6 py-3 rounded font-semibold border border-white/40 transition text-center">
              Kontakt
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`w-2.5 h-2.5 rounded-full transition ${i === idx ? 'bg-white' : 'bg-white/40'}`}
            aria-label={`Slajd ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
