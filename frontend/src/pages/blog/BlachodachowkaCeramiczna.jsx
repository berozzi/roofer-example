import { Link } from 'react-router-dom'

export default function BlachodachowkaCeramiczna() {
  return (
    <main className="pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link to="/blog" className="text-sm text-wood-400 hover:text-wood-600 transition">&larr; Powrót do bloga</Link>

        <article className="mt-6">
          <p className="text-xs text-wood-400 mb-2">5 maja 2026</p>
          <h1 className="font-heading text-3xl md:text-4xl text-wood-700 mb-6">
            Blachodachówka czy dachówka ceramiczna?
          </h1>

          <div className="prose prose-wood max-w-none text-wood-600 space-y-4 leading-relaxed">
            <p>
              Blachodachówka i dachówka ceramiczna to dwa najpopularniejsze pokrycia dachowe w Polsce. Oba materiały mają swoje mocne i słabe strony. Który wybrać? Przyjrzyjmy się najważniejszym różnicom.
            </p>

            <h2 className="font-heading text-xl text-wood-700 mt-8 mb-3">Koszty</h2>
            <p>
              Blachodachówka jest zdecydowanie tańsza – zarówno sam materiał, jak i montaż. Lżejsza konstrukcja nie wymaga tak solidnej więźby. Dachówka ceramiczna to wydatek rzędu 2–3 razy większy, ale jej trwałość rekompensuje wyższą cenę.
            </p>

            <h2 className="font-heading text-xl text-wood-700 mt-8 mb-3">Trwałość</h2>
            <p>
              Dachówka ceramiczna to materiał na pokolenia – producenci dają nawet 80–100 lat gwarancji. Blachodachówka przy dobrej jakości wytrzyma 40–50 lat. Trzeba jednak pamiętać, że blacha z czasem koroduje, zwłaszcza w miejscach uszkodzeń mechanicznych, podczas gdy ceramika pozostaje praktycznie niezniszczalna.
            </p>

            <h2 className="font-heading text-xl text-wood-700 mt-8 mb-3">Wygląd</h2>
            <p>
              Dachówka ceramiczna oferuje naturalny, elegancki wygląd, który z biegiem lat nabiera charakteru (patyna). Blachodachówka dostępna jest w wielu kolorach i profilach, ale nawet najlepsze powłoki nie oddadzą naturalnego uroku ceramiki.
            </p>

            <h2 className="font-heading text-xl text-wood-700 mt-8 mb-3">Izolacja akustyczna</h2>
            <p>
              Dachówka ceramiczna doskonale tłumi dźwięki – deszcz i grad są praktycznie niesłyszalne. Blachodachówka wymaga dobrego ocieplenia i dodatkowej izolacji akustycznej, aby hałas nie przeszkadzał domownikom.
            </p>

            <h2 className="font-heading text-xl text-wood-700 mt-8 mb-3">Konserwacja</h2>
            <p>
              Dachówka ceramiczna jest praktycznie bezobsługowa – nie wymaga malowania ani impregnacji. Blachodachówkę warto regularnie sprawdzać i w razie potrzeby odnawiać powłokę w miejscach uszkodzeń.
            </p>

            <h2 className="font-heading text-xl text-wood-700 mt-8 mb-3">Który wybrać?</h2>
            <p>
              Jeśli budżet jest ograniczony, a dach ma prostą konstrukcję – blachodachówka będzie dobrym wyborem. Jeśli stawiasz na trwałość, estetykę i nie chcesz martwić się dachem przez pokolenia – dachówka ceramiczna to inwestycja na całe życie. W Dach-Rem pomożemy Ci podjąć świadomą decyzję.
            </p>
          </div>
        </article>
      </div>
    </main>
  )
}
