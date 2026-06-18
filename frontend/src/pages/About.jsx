import companyPhoto from '../assets/company-photo.svg'

export default function About() {
  return (
    <main className="pt-24 pb-16 px-4 max-w-6xl mx-auto">
      <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h1 className="font-heading text-4xl md:text-5xl text-wood-700 mb-4">O nas</h1>
          <p className="text-wood-500 mb-4">
            Firma <strong>Dach-Rem</strong> działa nieprzerwanie od 1999 roku w branży dekarskiej w Zielonej Górze. Naszą specjalnością są usługi dekarsko-blacharskie – wykonujemy konstrukcje dachowe, pokrycia dachowe wszelkiego typu, docieplanie oraz naprawy dachów.
          </p>
          <p className="text-wood-500 mb-4">
            Nasza kadra to kompetentni i doświadczeni pracownicy, gwarantujący najwyższą jakość świadczonych usług, solidność oraz profesjonalną obsługę. Od początku działalności należymy do grupy <strong>Velux Team</strong>.
          </p>
          <p className="text-wood-500">
            Siedziba firmy znajduje się w Zielonej Górze przy ul. Przylep-Solidarności 45. Zapraszamy do kontaktu – doradzimy i pomożemy dobrać najlepsze rozwiązanie dla Twojego dachu.
          </p>
        </div>
        <div className="bg-wood-100 rounded-2xl h-56 md:h-80 flex items-center justify-center text-wood-300 text-lg">
          <img
            src={companyPhoto}
            alt="Ekipa Dach-Rem"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </section>

      <section className="bg-wood-100 border border-wood-200 rounded-2xl p-6 md:p-12">
        <h2 className="font-heading text-2xl text-wood-700 mb-6">Nasze wartości</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { icon: '🪚', title: 'Doświadczenie', text: 'Działamy od 1999 roku – kompetentna kadra, specjalistyczny sprzęt i wieloletnie doświadczenie.' },
            { icon: '📋', title: 'Profesjonalizm', text: 'Pełen profesjonalizm, solidność, rzetelność oraz dokładność przeprowadzanych prac dekarskich.' },
            { icon: '🤝', title: 'Velux Team', text: 'Członek grupy Velux Team od początku działalności – gwarancja najwyższej jakości.' },
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
