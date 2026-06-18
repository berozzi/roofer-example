import { useState } from 'react'
import img1 from '../assets/dachrem1.webp'
import img2 from '../assets/dachrem2.webp'
import img3 from '../assets/dachrem3.webp'
import img4 from '../assets/dachrem4.webp'

const images = [img1, img2, img3, img4]

const projects = [
  { id: 1, img: img1, title: 'Dach domku jednorodzinnego – Zielona Góra', desc: 'Więźba dachowa + dachówka ceramiczna. Pow. 180m².', alt: 'Dach domku jednorodzinnego z dachówki ceramicznej w Zielonej Górze' },
  { id: 2, img: img2, title: 'Konstrukcja dachu – Świdnica', desc: 'Drewno klejone, dach wielospadowy.', alt: 'Konstrukcja więźby dachowej z drewna klejonego w Świdnicy' },
  { id: 3, img: img3, title: 'Remont dachu – Nietków', desc: 'Wymiana łat, deskowanie, nowa dachówka.', alt: 'Remont dachu z wymianą łat i deskowania w Nietkowie' },
  { id: 4, img: img4, title: 'Wiata garażowa – Nowa Sól', desc: 'Słupy drewniane, dach jednospadowy, blachodachówka.', alt: 'Wiata garażowa z blachodachówki w Nowej Soli' },
  { id: 5, img: img1, title: 'Domek letniskowy – Jezioro Rudno', desc: 'Konstrukcja z bali, dach z gontu bitumicznego.', alt: 'Domek letniskowy z dachem z gontu bitumicznego nad Jeziorem Rudno' },
  { id: 6, img: img2, title: 'Obróbki blacharskie – ZG', desc: 'Rynny, podbitki, pas nadrynnowy.', alt: 'Obróbki blacharskie – montaż rynien i podbitek w Zielonej Górze' },
  { id: 7, img: img3, title: 'Taras dachowy – Zielona Góra', desc: 'Konstrukcja nośna + deska kompozytowa.', alt: 'Taras dachowy z deski kompozytowej w Zielonej Górze' },
  { id: 8, img: img4, title: 'Więźba tradycyjna – Sulechów', desc: 'Ciesielka na miarę, montaż na gotowo.', alt: 'Tradycyjna więźba dachowa wykonana w Sulechowie' },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <main className="pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-heading text-4xl md:text-5xl text-wood-700 mb-2">Realizacje</h1>
        <p className="text-wood-500 mb-12 max-w-xl">
          Każdy projekt to dla nas nowe wyzwanie. Zobacz, co robimy – od małych napraw po kompleksowe więźby dachowe.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {projects.map((p) => (
            <div
              key={p.id}
              className="group relative rounded-xl overflow-hidden cursor-pointer border border-wood-200 bg-wood-100"
              onClick={() => setLightbox(p)}
            >
              <img
                src={p.img}
                alt={p.alt}
                loading="lazy"
                className="w-full h-52 object-cover"
              />
              <div className="p-3">
                <h3 className="font-heading font-bold text-wood-700 text-sm">{p.title}</h3>
                <p className="text-xs sm:text-sm text-wood-500 mt-1">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="fixed inset-0 bg-black/70 z-60 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <div className="max-w-2xl w-full bg-white rounded-2xl overflow-hidden max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightbox.img}
              alt={lightbox.alt}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="p-6">
              <h3 className="font-heading font-bold text-wood-700 text-lg">{lightbox.title}</h3>
              <p className="text-wood-500 mt-1">{lightbox.desc}</p>
              <button onClick={() => setLightbox(null)} className="mt-4 px-4 py-2 text-sm text-wood-400 hover:text-wood-600 transition border border-wood-200 rounded-lg">Zamknij</button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
