import companyPhoto from '../assets/company-photo.svg'

export default function About() {
  return (
    <main className="pt-24 pb-16 px-4 max-w-6xl mx-auto">
      <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h1 className="font-heading text-4xl md:text-5xl text-wood-700 mb-4">O nas</h1>
          <p className="text-wood-500 mb-4">
            Jesteśmy rodzinną firmą z Zielonej Góry. Od ponad 12 lat zajmujemy się ciesielstwem i dekarstwem – stawiamy dachy, robimy więźby, wykonujemy renowacje.
          </p>
          <p className="text-wood-500 mb-4">
            Siedziba znajduje się przy ul. Wojska Polskiego 100. To właśnie tutaj nasi klienci mogą obejrzeć próbki materiałów i omówić szczegóły zlecenia.
          </p>
          <p className="text-wood-500">
            Stawiamy na rzetelność, terminowość i dobre relacje. Każdy dach to dla nas wizytówka.
          </p>
        </div>
        <div className="bg-wood-100 rounded-2xl h-80 flex items-center justify-center text-wood-300 text-lg">
          <img
            src={companyPhoto}
            alt="Ekipa Roofer"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </section>

      <section className="bg-wood-50 border border-wood-100 rounded-2xl p-8 md:p-12">
        <h2 className="font-heading text-2xl text-wood-700 mb-6">Nasze wartości</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: '🪚', title: 'Fachowość', text: 'Wykwalifikowana ekipa, ciągłe szkolenia i znajomość nowoczesnych technologii.' },
            { icon: '📋', title: 'Rzetelność', text: 'Wyceniamy bez ukrytych kosztów. Dotrzymujemy terminów i ustaleń.' },
            { icon: '🤝', title: 'Zaufanie', text: 'Pracujemy tak, jakbyśmy robili dach dla siebie. Gwarancja na każdą usługę.' },
          ].map((v, i) => (
            <div key={i}>
              <div className="text-3xl mb-2">{v.icon}</div>
              <h3 className="font-heading font-bold text-wood-700 mb-1">{v.title}</h3>
              <p className="text-sm text-wood-500">{v.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
