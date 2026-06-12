import { Link } from 'react-router-dom'

export default function JakWybracDekarza() {
  return (
    <main className="pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link to="/blog" className="text-sm text-wood-400 hover:text-wood-600 transition">&larr; Powrót do bloga</Link>

        <article className="mt-6">
          <p className="text-xs text-wood-400 mb-2">2 czerwca 2026</p>
          <h1 className="font-heading text-3xl md:text-4xl text-wood-700 mb-6">
            Jak wybrać dobrego dekarza? Praktyczny poradnik
          </h1>

          <div className="prose prose-wood max-w-none text-wood-600 space-y-4 leading-relaxed">
            <p>
              Dach to jedna z najdroższych i najważniejszych części domu. Powierzając go przypadkowej ekipie, ryzykujesz nie tylko pieniędzmi, ale i bezpieczeństwem domowników. Podpowiadamy, na co zwrócić uwagę przy wyborze dekarza.
            </p>

            <h2 className="font-heading text-xl text-wood-700 mt-8 mb-3">1. Doświadczenie i referencje</h2>
            <p>
              Szukaj firmy, która działa na rynku co najmniej kilka lat. Długoletnie doświadczenie to najlepsza gwarancja solidności. Poproś o referencje – zdjęcia realizacji, opinie w internecie, a najlepiej kontakt do poprzednich klientów. Firma, która ma się czym pochwalić, chętnie dzieli się swoim portfolio.
            </p>

            <h2 className="font-heading text-xl text-wood-700 mt-8 mb-3">2. Umowa i kosztorys</h2>
            <p>
              Zawsze żądaj pisemnej umowy i szczegółowego kosztorysu. Unikaj ekip, które podają cenę "z głowy" bez oglądania dachu. Profesjonalista przyjedzie na miejsce, oceni stan dachu i przedstawi wycenę z podziałem na materiały i robociznę. Upewnij się, że w kosztorysie uwzględniono wszystkie niezbędne prace.
            </p>

            <h2 className="font-heading text-xl text-wood-700 mt-8 mb-3">3. Ubezpieczenie i gwarancja</h2>
            <p>
              Sprawdź, czy firma posiada ubezpieczenie OC. W razie zalania czy uszkodzenia dachu podczas prac, to chroni Cię przed dodatkowymi kosztami. Dobry dekarz udziela też gwarancji na wykonaną pracę – minimum 5 lat na robociznę to standard.
            </p>

            <h2 className="font-heading text-xl text-wood-700 mt-8 mb-3">4. Kwalifikacje i certyfikaty</h2>
            <p>
              Zapytaj o uprawnienia i certyfikaty. Członkostwo w grupach takich jak Velux Team czy posiadanie certyfikatów producentów materiałów dachowych to dobry znak. Oznacza, że firma regularnie szkoli swoich pracowników i zna najnowsze technologie.
            </p>

            <h2 className="font-heading text-xl text-wood-700 mt-8 mb-3">5. Terminowość i komunikacja</h2>
            <p>
              Profesjonalna firma dotrzymuje terminów i informuje o ewentualnych opóźnieniach. Zwróć uwagę, jak przebiega pierwszy kontakt – czy dekarz odpowiada na pytania, czy jest rzeczowy i czy budzi zaufanie. To często najlepszy wyznacznik jakości współpracy.
            </p>

            <p className="mt-8 text-wood-500 border-t border-wood-100 pt-6">
              Dach-Rem działa na rynku od 1999 roku, posiada ubezpieczenie OC i należy do grupy Velux Team. Zapraszamy do kontaktu – chętnie odpowiemy na wszystkie pytania i przedstawimy wycenę bez zobowiązań.
            </p>
          </div>
        </article>
      </div>
    </main>
  )
}
