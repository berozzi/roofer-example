export default function Contact() {
  return (
    <main className="pt-24 pb-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="font-heading text-4xl md:text-5xl text-wood-700 mb-4">Kontakt</h1>

          <p className="text-wood-700 text-lg mb-8">
          Wyślij wiadomość lub zadzwoń
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <form action="mailto:sddachy@wp.pl" method="GET" encType="text/plain" className="w-full sm:w-auto">
            <input type="hidden" name="subject" value="Zapytanie dachrem.zgora.pl" />
            <a
              href="mailto:sddachy@wp.pl?subject=Zapytanie%20dachrem.zgora.pl"
              className="flex items-center justify-center gap-3 bg-wood-500 hover:bg-wood-600 text-white px-8 py-4 rounded-2xl font-semibold transition text-lg shadow-sm hover:shadow-md"
            >
              sddachy@wp.pl
            </a>
          </form>
          <a
            href="tel:502067187"
            className="flex items-center justify-center gap-3 bg-wood-500 hover:bg-wood-600 text-white px-8 py-4 rounded-2xl font-semibold transition text-lg shadow-sm hover:shadow-md w-full sm:w-auto"
          >
            502 067 187
          </a>
        </div>

        <div className="bg-wood-100 border border-wood-200 rounded-2xl p-5 sm:p-6 mb-4 sm:mb-6">
          <h3 className="font-heading font-bold text-wood-700 mb-4">Dane kontaktowe</h3>
          <div className="space-y-3 text-sm text-wood-600">
            <p><span className="font-semibold">Adres:</span> ul. Przylep-Solidarności 45, Zielona Góra, 65-001</p>
            <p><span className="font-semibold">Telefon:</span> 502 067 187</p>
            <p><span className="font-semibold">E-mail:</span> sddachy@wp.pl</p>
          </div>
        </div>

        <div className="bg-wood-100 border border-wood-200 rounded-2xl p-5 sm:p-6 mb-10 sm:mb-12">
          <h3 className="font-heading font-bold text-wood-700 mb-4">Godziny otwarcia</h3>
          <div className="space-y-2 text-sm text-wood-600">
            <p><span className="font-semibold">Pn–Pt:</span> 8:00 – 18:00</p>
            <p className="text-wood-400 italic mt-2">Możliwy dojazd na miejsce w uzgodnionym terminie.</p>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden border border-wood-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d345.91240191266536!2d15.453727007982469!3d51.96593063906141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47061441c6e09c6d%3A0xcedb84a26eeb37c3!2sSolidarno%C5%9Bci%2045%2C%2066-015%20Zielona%20G%C3%B3ra!5e1!3m2!1spl!2spl!4v1781694927063!5m2!1spl!2spl"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Dach-Rem mapa"
            className="w-full h-72"
          />
        </div>
      </div>
    </main>
  )
}
