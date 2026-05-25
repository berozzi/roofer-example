import HeroSlider from '../components/HeroSlider'
import { Link } from 'react-router-dom'

const features = [
  { icon: '🏗️', title: 'Więźby dachowe', text: 'Projektujemy i wykonujemy konstrukcje dachowe z drewna klejonego i tradycyjnego.' },
  { icon: '🏠', title: 'Pokrycia dachowe', text: 'Dachówka ceramiczna, betonowa, blachodachówka, papa – stawiamy na trwałe materiały.' },
  { icon: '🔧', title: 'Renowacje', text: 'Naprawiamy i wzmacniamy istniejące dachy, wymieniamy łatania i deskowanie.' },
  { icon: '🌧️', title: 'Obróbki i rynny', text: 'Obróbki blacharskie, rynny, podbitki – kompletny system orynnowania.' },
]

export default function Home() {
  return (
    <>
      <HeroSlider />

      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl text-wood-700 mb-3">Dachy, które chronią Twoje największe dobra</h2>
          <p className="text-wood-500 max-w-2xl mx-auto">
            Działamy w Zielonej Górze i okolicach. Pasja do drewna i wieloletnie doświadczenie sprawiają, że każdy dach to solidna robota na lata.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="text-center p-6 bg-wood-50 rounded-2xl border border-wood-100 hover:shadow-md transition">
              <div className="text-4xl mb-3">{f.icon}</div>
              <h3 className="font-heading text-lg font-bold text-wood-700 mb-2">{f.title}</h3>
              <p className="text-sm text-wood-500">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-wood-100/50 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-heading text-3xl text-wood-700 mb-4">Zrealizowaliśmy już ponad 200 dachów</h2>
          <p className="text-wood-500 mb-8 max-w-xl mx-auto">
            Każdy projekt traktujemy indywidualnie – od domu jednorodzinnego po obiekty gospodarcze.
          </p>
          <Link to="/realizacje" className="inline-block bg-wood-500 hover:bg-wood-600 text-white px-8 py-3 rounded-lg font-semibold transition">
            Zobacz nasze prace
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="font-heading text-3xl text-wood-700 text-center mb-12">Dlaczego my?</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            { num: '12+', label: 'lat doświadczenia' },
            { num: '200+', label: 'wykonanych dachów' },
            { num: '100%', label: 'zadowolonych klientów' },
          ].map((s, i) => (
            <div key={i}>
              <p className="font-heading text-4xl font-bold text-wood-400">{s.num}</p>
              <p className="text-wood-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
