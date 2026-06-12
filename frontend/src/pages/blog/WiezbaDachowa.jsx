import { Link } from 'react-router-dom'

export default function WiezbaDachowa() {
  return (
    <main className="pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link to="/blog" className="text-sm text-wood-400 hover:text-wood-600 transition">&larr; Powrót do bloga</Link>

        <article className="mt-6">
          <p className="text-xs text-wood-400 mb-2">12 maja 2026</p>
          <h1 className="font-heading text-3xl md:text-4xl text-wood-700 mb-6">
            Więźba dachowa – tradycyjna czy klejona?
          </h1>

          <div className="prose prose-wood max-w-none text-wood-600 space-y-4 leading-relaxed">
            <p>
              Wybór rodzaju więźby dachowej to decyzja, która wpływa na całą konstrukcję budynku. Coraz popularniejszym rozwiązaniem staje się drewno klejone, które konkuruje z tradycyjną ciesielką. Które rozwiązanie wybrać?
            </p>

            <h2 className="font-heading text-xl text-wood-700 mt-8 mb-3">Więźba tradycyjna</h2>
            <p>
              Więźba tradycyjna wykonywana jest z litego drewna (najczęściej sosny lub świerku) na budowie przez ciesielkę. Każdy element jest przycinany i dopasowywany ręcznie. To rozwiązanie sprawdzone od wieków – elastyczne i łatwe w naprawie. Doskonale sprawdza się w domach o nietypowych kształtach dachu.
            </p>
            <p>
              <strong>Zalety:</strong> niższy koszt materiału, łatwość napraw, sprawdzona technologia, możliwość wykonywania na mokro.
            </p>
            <p>
              <strong>Wady:</strong> dłuższy czas wykonania, ograniczona rozpiętość, ryzyko skręcania się drewna, większe zużycie surowca.
            </p>

            <h2 className="font-heading text-xl text-wood-700 mt-8 mb-3">Więźba z drewna klejonego</h2>
            <p>
              Drewno klejone (glulam) powstaje z warstw suszonego drewna sklejonych pod ciśnieniem. Efektem jest materiał o wyższej wytrzymałości i stabilności wymiarowej niż lite drewno. Pozwala na przekrycie większych rozpiętości bez podpór środkowych.
            </p>
            <p>
              <strong>Zalety:</strong> większa wytrzymałość, stabilność wymiarowa, możliwość długich przęseł, szybszy montaż, estetyczny wygląd.
            </p>
            <p>
              <strong>Wady:</strong> wyższa cena, konieczność precyzyjnego projektu, dłuższy czas produkcji, trudniejsza naprawa.
            </p>

            <h2 className="font-heading text-xl text-wood-700 mt-8 mb-3">Kiedy wybrać które rozwiązanie?</h2>
            <p>
              Więźba tradycyjna sprawdzi się w standardowych domach jednorodzinnych o rozpiętości do 10 metrów. Drewno klejone to wybór do domów z otwartymi przestrzeniami, dużymi salonami, wysokimi sufitami i nowoczesną architekturą.
            </p>

            <p className="mt-8 text-wood-500 border-t border-wood-100 pt-6">
              W Dach-Rem wykonujemy oba typy więźby. Nasi ciesle mają wieloletnie doświadczenie zarówno w tradycyjnej ciesielce, jak i montażu drewna klejonego. Doradzimy, które rozwiązanie będzie dla Ciebie optymalne.
            </p>
          </div>
        </article>
      </div>
    </main>
  )
}
