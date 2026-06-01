const reviews = [
  { name: 'Anna K.', location: 'Zielona Góra', text: 'Panowie z Dach-Rem zrobili u nas dach od podstaw. Profesjonalna wycena, terminowość i porządek na budowie. Polecam każdemu!', rating: 5 },
  { name: 'Marek W.', location: 'Świdnica', text: 'Szukałem ekipy do więźby dachowej. Trafiłem idealnie – solidna robota, drewno pierwszej klasy. Na pewno wrócę przy rozbudowie.', rating: 5 },
  { name: 'Katarzyna P.', location: 'Nowa Sól', text: 'Remont starego dachu – myślałam, że to koszmar. A tu sprawnie, czysto i bez zbędnych opóźnień. Dziękuję!', rating: 5 },
  { name: 'Tomasz R.', location: 'Zielona Góra', text: 'Rynny, podbitki, obróbki – wszystko zrobione estetycznie. Firma godna zaufania.', rating: 4 },
  { name: 'Edyta M.', location: 'Sulechów', text: 'Polecam! Zrobili wiatę na samochód – szybko, tanio i ładnie. Na pewno zamówię jeszcze taras.', rating: 5 },
  { name: 'Piotr L.', location: 'Czerwieńsk', text: 'Współpraca z Dach-Rem to przyjemność. Doradzili, zaproponowali lepsze rozwiązanie, wyszło taniej niż zakładałem.', rating: 5 },
]

function Stars({ n }) {
  return <span className="text-wood-400">{'★'.repeat(n)}{'☆'.repeat(5 - n)}</span>
}

export default function Reviews() {
  return (
    <main className="pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-heading text-4xl md:text-5xl text-wood-700 mb-2">Opinie</h1>
        <p className="text-wood-500 mb-12 max-w-lg">
          Zobacz, co mówią o nas klienci. Każda opinia to dla nas motywacja do jeszcze lepszej pracy.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-wood-50 border border-wood-100 rounded-2xl p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-1">
                <div>
                  <p className="font-heading font-bold text-wood-700">{r.name}</p>
                  <p className="text-xs text-wood-400">{r.location}</p>
                </div>
                <Stars n={r.rating} />
              </div>
              <p className="text-wood-500 text-sm leading-relaxed">„{r.text}”</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
