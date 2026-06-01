import HeroSlider from '../components/HeroSlider'
import { Link } from 'react-router-dom'

const features = [
  { icon: '🏗️', title: 'Konstrukcje dachowe', text: 'Projektujemy i wykonujemy wszystkie typy konstrukcji dachowych – tradycyjne i nowoczesne.' },
  { icon: '🏠', title: 'Pokrycia dachowe', text: 'Dachówka ceramiczna, betonowa, blachodachówka, papa – montaż wszelkiego typu pokryć.' },
  { icon: '🔧', title: 'Naprawa i renowacja', text: 'Kompleksowa naprawa dachów, docieplanie, wymiana łat i deskowania.' },
  { icon: '🌧️', title: 'Obróbki blacharskie', text: 'Profesjonalne obróbki blacharskie, rynny, podbitki – kompletny system orynnowania.' },
]

export default function Home() {
  return (
    <>
      <HeroSlider />

      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl text-wood-700 mb-3">Dachy, które chronią Twój dom</h2>
          <p className="text-wood-500 max-w-2xl mx-auto">
            Działamy nieprzerwanie od 1999 roku w branży dekarskiej w Zielonej Górze. Wieloletnie doświadczenie i kompetentna kadra gwarantują najwyższą jakość.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
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
          <h2 className="font-heading text-3xl text-wood-700 mb-4">Ponad 25 lat doświadczenia w branży</h2>
          <p className="text-wood-500 mb-8 max-w-xl mx-auto">
            Od 1999 roku świadczymy usługi dekarskie na najwyższym poziomie. Każdy projekt traktujemy indywidualnie.
          </p>
          <Link to="/realizacje" className="inline-block bg-wood-500 hover:bg-wood-600 text-white px-8 py-3 rounded-lg font-semibold transition">
            Zobacz nasze prace
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="font-heading text-3xl text-wood-700 text-center mb-12">Dlaczego my?</h2>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 text-center">
          {[
            { num: '25+', label: 'lat doświadczenia' },
            { num: '300+', label: 'wykonanych dachów' },
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
