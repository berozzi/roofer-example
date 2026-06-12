import { Link } from 'react-router-dom'

export default function KonserwacjaDachu() {
  return (
    <main className="pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link to="/blog" className="text-sm text-wood-400 hover:text-wood-600 transition">&larr; Powrót do bloga</Link>

        <article className="mt-6">
          <p className="text-xs text-wood-400 mb-2">20 maja 2026</p>
          <h1 className="font-heading text-3xl md:text-4xl text-wood-700 mb-6">
            Konserwacja dachu – o czym pamiętać każdego roku?
          </h1>

          <div className="prose prose-wood max-w-none text-wood-600 space-y-4 leading-relaxed">
            <p>
              Dach narażony jest na działanie deszczu, śniegu, wiatru i mrozu przez cały rok. Regularna konserwacja pozwala uniknąć kosztownych napraw i znacząco wydłuża żywotność pokrycia. Oto lista czynności, które warto wykonać przynajmniej raz w roku.
            </p>

            <h2 className="font-heading text-xl text-wood-700 mt-8 mb-3">Przegląd wiosenny</h2>
            <p>
              Po zimie warto dokładnie obejrzeć dach. Sprawdź, czy nie ma uszkodzonych lub przesuniętych dachówek, pęknięć w obróbkach blacharskich czy oberwanych rynien. Zwróć uwagę na miejsca wokół kominów i okien dachowych – to newralgiczne punkty, w których najczęściej dochodzi do przecieków.
            </p>

            <h2 className="font-heading text-xl text-wood-700 mt-8 mb-3">Czyszczenie rynien</h2>
            <p>
              Zatkane rynny to jedna z głównych przyczyn zawilgocenia ścian i fundamentów. Przynajmniej dwa razy w roku (wiosną i jesienią) oczyść rynny z liści, mchu i piasku. Sprawdź, czy woda swobodnie odpływa, a łączenia rynien są szczelne.
            </p>

            <h2 className="font-heading text-xl text-wood-700 mt-8 mb-3">Kontrola strychu i więźby</h2>
            <p>
              Wejdź na strych i sprawdź, czy nie ma śladów wilgoci, pleśni lub gryzoni. Przewietrz pomieszczenie – prawidłowa wentylacja to podstawa zdrowego dachu. Upewnij się, że ocieplenie jest suche i nie ma przemieszczeń.
            </p>

            <h2 className="font-heading text-xl text-wood-700 mt-8 mb-3">Usuwanie mchu i porostów</h2>
            <p>
              Mech na dachu nie tylko źle wygląda, ale też zatrzymuje wilgoć i przyspiesza degradację pokrycia. Do usuwania mchu używaj miękkiej szczotki i dedykowanych preparatów. Unikaj myjek ciśnieniowych – mogą uszkodzić dachówki.
            </p>

            <h2 className="font-heading text-xl text-wood-700 mt-8 mb-3">Przygotowanie do zimy</h2>
            <p>
              Jesienią sprawdź stan uszczelek w oknach dachowych, zabezpiecz kruche elementy przed śniegiem i upewnij się, że instalacja odgromowa jest sprawna. W regionach o dużych opadach warto zamontować płotki przeciwśniegowe, które zapobiegną gwałtownemu zsuwaniu się śniegu.
            </p>

            <p className="mt-8 text-wood-500 border-t border-wood-100 pt-6">
              Nie masz czasu lub ochoty na samodzielny przegląd? Dach-Rem oferuje profesjonalne przeglądy dachów z pisemnym raportem. Skontaktuj się z nami i umów termin.
            </p>
          </div>
        </article>
      </div>
    </main>
  )
}
