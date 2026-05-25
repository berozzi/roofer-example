import { useState } from 'react'

const projects = [
  { id: 1, url: 'https://images.unsplash.com/photo-1632190349996-9c6e4b2e058b?w=500&q=80', title: 'Dach domku jednorodzinnego – Zielona Góra', desc: 'Więźba dachowa + dachówka ceramiczna. Pow. 180m².' },
  { id: 2, url: 'https://images.unsplash.com/photo-1590086782792-42dd2350140d?w=500&q=80', title: 'Konstrukcja dachu – Świdnica', desc: 'Drewno klejone, dach wielospadowy.' },
  { id: 3, url: 'https://images.unsplash.com/photo-1581579438747-1dc8d17b4d39?w=500&q=80', title: 'Remont dachu – ul. Wojska Polskiego', desc: 'Wymiana łat, deskowanie, nowa dachówka.' },
  { id: 4, url: 'https://images.unsplash.com/photo-1581622550553-bf9300cf9d2f?w=500&q=80', title: 'Wiata garażowa – Nowa Sól', desc: 'Słupy drewniane, dach jednospadowy, blachodachówka.' },
  { id: 5, url: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=500&q=80', title: 'Domek letniskowy – Jezioro Rudno', desc: 'Konstrukcja z bali, dach z gontu bitumicznego.' },
  { id: 6, url: 'https://images.unsplash.com/photo-1590184847800-3de11b0a60c2?w=500&q=80', title: 'Obróbki blacharskie – ZG', desc: 'Rynny, podbitki, pas nadrynnowy.' },
  { id: 7, url: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=500&q=80', title: 'Tarac dachowy – Zielona Góra', desc: 'Konstrukcja nośna + deska kompozytowa.' },
  { id: 8, url: 'https://images.unsplash.com/photo-1573033546140-c7ca2e7a88bb?w=500&q=80', title: 'Więźba tradycyjna – Sulechów', desc: 'Ciesielka na miarę, montaż na gotowo.' },
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
              <img src={p.url} alt={p.title} className="w-full h-52 object-cover group-hover:scale-105 transition duration-500" />
              <div className="p-3">
                <h3 className="font-heading font-bold text-wood-700 text-sm">{p.title}</h3>
                <p className="text-xs text-wood-400 mt-0.5">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <div className="max-w-2xl w-full bg-white rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.url} alt={lightbox.title} className="w-full h-72 md:h-96 object-cover" />
            <div className="p-6">
              <h3 className="font-heading font-bold text-wood-700 text-lg">{lightbox.title}</h3>
              <p className="text-wood-500 mt-1">{lightbox.desc}</p>
              <button onClick={() => setLightbox(null)} className="mt-4 text-sm text-wood-400 hover:text-wood-600 transition">Zamknij</button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
