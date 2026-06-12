export default function Contact() {
  return (
    <main className="pt-24 pb-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="font-heading text-4xl md:text-5xl text-wood-700 mb-4">Kontakt</h1>

        <p className="text-wood-600 text-lg mb-8">
          Wyślij wiadomość
        </p>

        <form action="mailto:sddachy@wp.pl" method="GET" encType="text/plain" className="mb-12">
          <input type="hidden" name="subject" value="Zapytanie dachrem.zgora.pl" />
          <a
            href="mailto:sddachy@wp.pl?subject=Zapytanie%20dachrem.zgora.pl"
            className="inline-flex items-center gap-3 bg-wood-500 hover:bg-wood-600 text-white px-10 py-5 rounded-2xl font-semibold transition text-xl shadow-sm hover:shadow-md"
          >
            sddachy@wp.pl
          </a>
        </form>

        <div className="bg-wood-50 border border-wood-100 rounded-2xl p-6 mb-6 text-center">
          <h3 className="font-heading font-bold text-wood-700 mb-4">Dane kontaktowe</h3>
          <div className="space-y-3 text-sm text-wood-600">
            <p><span className="font-semibold">Adres:</span> Kwiatowa 2, 66-016 Nietków</p>
            <p><span className="font-semibold">Telefon:</span> 502 067 187</p>
            <p><span className="font-semibold">E-mail:</span> sddachy@wp.pl</p>
          </div>
        </div>

        <div className="bg-wood-50 border border-wood-100 rounded-2xl p-6 mb-12 text-center">
          <h3 className="font-heading font-bold text-wood-700 mb-4">Godziny otwarcia</h3>
          <div className="space-y-2 text-sm text-wood-600">
            <p><span className="font-semibold">Pn–Pt:</span> 8:00 – 18:00</p>
            <p className="text-wood-400 italic mt-2">Możliwy dojazd na miejsce w uzgodnionym terminie.</p>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden border border-wood-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2323.932125661473!2d15.3557551763003!3d52.02522617274357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47063f93a2873abd%3A0xf52e64e3e95c2ec6!2sDach-Rem!5e1!3m2!1spl!2spl!4v1780298319604!5m2!1spl!2spl"
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
