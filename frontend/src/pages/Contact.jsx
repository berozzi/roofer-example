import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <main className="pt-24 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-heading text-4xl md:text-5xl text-wood-700 mb-2">Kontakt</h1>
          <p className="text-wood-500 mb-12 max-w-lg">
            Masz pytanie? Chcesz wycenić dach? Zadzwoń lub napisz – doradzimy i pomożemy.
          </p>

        <div className="grid md:grid-cols-5 gap-8 md:gap-10">
          <div className="md:col-span-2 space-y-6">
            <div className="bg-wood-50 border border-wood-100 rounded-2xl p-6">
              <h3 className="font-heading font-bold text-wood-700 mb-4">Dane kontaktowe</h3>
              <div className="space-y-3 text-sm text-wood-600">
                <p><span className="font-semibold">Adres:</span> Kwiatowa 2, 66-016 Nietków</p>
                <p><span className="font-semibold">Telefon:</span> 502 067 187</p>
                <p><span className="font-semibold">E-mail:</span> sddachy@wp.pl</p>
              </div>
            </div>

            <div className="bg-wood-50 border border-wood-100 rounded-2xl p-6">
              <h3 className="font-heading font-bold text-wood-700 mb-4">Godziny otwarcia</h3>
              <div className="space-y-2 text-sm text-wood-600">
                <p><span className="font-semibold">Pn–Pt:</span> 8:00 – 18:00</p>
                <p className="text-wood-400 italic mt-2">Możliwy dojazd na miejsce w uzgodnionym terminie.</p>
              </div>
            </div>

            <div className="bg-wood-50 border border-wood-100 rounded-2xl p-6">
              <h3 className="font-heading font-bold text-wood-700 mb-2">Znajdziesz nas</h3>
              <div className="bg-wood-200 h-48 md:h-40 rounded-lg flex items-center justify-center text-wood-400 text-sm">
                <a href="https://maps.google.com/?q=Kwiatowa+2+Nietków" target="_blank" rel="noopener noreferrer" className="hover:text-wood-600 transition underline">
                  Kliknij, aby zobaczyć na mapie Google
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 bg-wood-50 border border-wood-100 rounded-2xl p-5 md:p-8">
            <h3 className="font-heading font-bold text-wood-700 text-xl mb-6">Wyślij wiadomość</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  )
}
