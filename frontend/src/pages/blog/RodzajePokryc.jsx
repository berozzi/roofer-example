import { Link } from 'react-router-dom'

export default function RodzajePokryc() {
  return (
    <main className="pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link to="/blog" className="text-sm text-wood-400 hover:text-wood-600 transition">&larr; Powrót do bloga</Link>

        <article className="mt-6">
          <p className="text-xs text-wood-400 mb-2">10 czerwca 2026</p>
          <h1 className="font-heading text-3xl md:text-4xl text-wood-700 mb-6">
            Rodzaje pokryć dachowych – które wybrać?
          </h1>

          <div className="prose prose-wood max-w-none text-wood-600 space-y-4 leading-relaxed">
            <p>
              Wybór odpowiedniego pokrycia dachowego to jedna z najważniejszych decyzji podczas budowy lub remontu domu. Materiał, który wybierzesz, wpłynie nie tylko na wygląd budynku, ale także na jego trwałość, izolacyjność i koszty utrzymania przez kolejne dekady.
            </p>

            <h2 className="font-heading text-xl text-wood-700 mt-8 mb-3">Dachówka ceramiczna</h2>
            <p>
              Dachówka ceramiczna to klasyk, który nigdy nie wychodzi z mody. Wykonana z wypalanej gliny, charakteryzuje się wyjątkową trwałością – nawet 100 lat. Jest odporna na mróz, promieniowanie UV i korozję. Doskonale tłumi hałas deszczu i zapewnia naturalną wentylację dachu. Minusem jest wyższa cena i większa waga, która wymaga solidniejszej więźby.
            </p>

            <h2 className="font-heading text-xl text-wood-700 mt-8 mb-3">Dachówka betonowa</h2>
            <p>
              Dachówka betonowa to tańsza alternatywa dla ceramicznej. Jest cięższa, ale przy odpowiedniej impregnacji równie trwała (żywotność 50–80 lat). Dostępna w wielu kolorach i profilach. Wymaga solidnej konstrukcji nośnej, ale dobrze sprawdza się w polskich warunkach klimatycznych.
            </p>

            <h2 className="font-heading text-xl text-wood-700 mt-8 mb-3">Blachodachówka</h2>
            <p>
              Blachodachówka to lekkie i stosunkowo tanie pokrycie. Jest łatwa w montażu i dostępna w szerokiej gamie kolorów. Nowoczesne blachodachówki z powłoką antykorozyjną mogą służyć nawet 40–50 lat. Należy jednak pamiętać o dobrej izolacji akustycznej – deszcz może być głośniejszy niż w przypadku dachówki ceramicznej.
            </p>

            <h2 className="font-heading text-xl text-wood-700 mt-8 mb-3">Papa termozgrzewalna</h2>
            <p>
              Papa to popularne pokrycie dachów płaskich oraz tarasów. Nowoczesne papy modyfikowane SBS są elastyczne, odporne na przebicia i promieniowanie UV. Przy prawidłowym montażu papa może wytrzymać 30–40 lat. To rozwiązanie ekonomiczne, ale wymaga fachowego wykonania.
            </p>

            <h2 className="font-heading text-xl text-wood-700 mt-8 mb-3">Gont bitumiczny</h2>
            <p>
              Gont bitumiczny to lekkie, elastyczne pokrycie idealne do domów o nietypowych kształtach dachu. Jest cichy, łatwy w naprawie i dostępny w wielu wzorach. Sprawdza się na dachach o dużym nachyleniu. Żywotność to około 30–50 lat w zależności od jakości.
            </p>

            <p className="mt-8 text-wood-500 border-t border-wood-100 pt-6">
              Niezależnie od wybranego pokrycia, kluczowa jest właściwie wykonana więźba dachowa i fachowy montaż. W Dach-Rem doradzimy Ci najlepsze rozwiązanie dopasowane do Twojego budżetu i oczekiwań.
            </p>
          </div>
        </article>
      </div>
    </main>
  )
}
