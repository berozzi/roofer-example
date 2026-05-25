import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'

const slides = [
  {
    url: 'https://images.unsplash.com/photo-1632190349996-9c6e4b2e058b?w=1400&q=80',
    title: 'Profesjonalne Dekarstwo',
    subtitle: 'Solidne dachy na lata – doświadczenie, precyzja, jakość',
  },
  {
    url: 'https://images.unsplash.com/photo-1590086782792-42dd2350140d?w=1400&q=80',
    title: 'Ciesielstwo z Pasją',
    subtitle: 'Konstrukcje dachowe, więźby, drewniane elementy',
  },
  {
    url: 'https://images.unsplash.com/photo-1581579438747-1dc8d17b4d39?w=1400&q=80',
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
    <section className="relative h-[75vh] min-h-[400px] overflow-hidden">
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${i === idx ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={s.url} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-wood-900/70 via-wood-900/30 to-transparent" />
        </div>
      ))}

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center text-white px-4 z-10">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-3 drop-shadow-lg">
          {slides[idx].title}
        </h1>
        <p className="text-lg md:text-xl mb-6 text-wood-100 drop-shadow">
          {slides[idx].subtitle}
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link to="/realizacje" className="bg-wood-400 hover:bg-wood-500 text-white px-6 py-3 rounded font-semibold transition">
            Zobacz realizacje
          </Link>
          <Link to="/kontakt" className="bg-white/20 hover:bg-white/30 backdrop-blur text-white px-6 py-3 rounded font-semibold border border-white/40 transition">
            Kontakt
          </Link>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`w-2.5 h-2.5 rounded-full transition ${i === idx ? 'bg-white' : 'bg-white/40'}`}
          />
        ))}
      </div>
    </section>
  )
}
