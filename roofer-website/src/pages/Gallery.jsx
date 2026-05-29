import { useState } from 'react'

const projects = [
  { id: 1, url: '', title: 'Dach domku jednorodzinnego – Zielona Góra', desc: 'Więźba dachowa + dachówka ceramiczna. Pow. 180m².' },
  { id: 2, url: '', title: 'Konstrukcja dachu – Świdnica', desc: 'Drewno klejone, dach wielospadowy.' },
  { id: 3, url: '', title: 'Remont dachu – Nietków', desc: 'Wymiana łat, deskowanie, nowa dachówka.' },
  { id: 4, url: '', title: 'Wiata garażowa – Nowa Sól', desc: 'Słupy drewniane, dach jednospadowy, blachodachówka.' },
  { id: 5, url: '', title: 'Domek letniskowy – Jezioro Rudno', desc: 'Konstrukcja z bali, dach z gontu bitumicznego.' },
  { id: 6, url: '', title: 'Obróbki blacharskie – ZG', desc: 'Rynny, podbitki, pas nadrynnowy.' },
  { id: 7, url: '', title: 'Taras dachowy – Zielona Góra', desc: 'Konstrukcja nośna + deska kompozytowa.' },
  { id: 8, url: '', title: 'Więźba tradycyjna – Sulechów', desc: 'Ciesielka na miarę, montaż na gotowo.' },
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
              className="group relative rounded-xl overflow-hidden cursor-pointer border border-wood-100 bg-wood-50"
              onClick={() => setLightbox(p)}
            >
              <div className="w-full h-52 bg-linear-to-br from-wood-100 to-wood-200 flex items-center justify-center p-4">
                <div className="text-center">
                  <span className="text-3xl">🏠</span>
                  <h3 className="font-heading font-bold text-wood-600 text-sm mt-2">{p.title}</h3>
                </div>
              </div>
              <div className="p-3">
                <p className="text-xs sm:text-sm text-wood-400">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="fixed inset-0 bg-black/70 z-60 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <div className="max-w-2xl w-full bg-white rounded-2xl overflow-hidden max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="w-full h-64 md:h-96 bg-linear-to-br from-wood-100 to-wood-200 flex items-center justify-center">
              <span className="text-6xl">🏠</span>
            </div>
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
