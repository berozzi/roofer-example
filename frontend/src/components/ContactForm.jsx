export default function ContactForm() {
  return (
    <form action="mailto:sddachy@wp.pl" method="GET" encType="text/plain" className="text-center py-6">
      <input type="hidden" name="subject" value="Zapytanie dachrem.zgora.pl" />
      <p className="text-wood-600 mb-6">
        Masz pytanie lub chcesz wycenić dach? Napisz bezpośrednio:
      </p>
      <a
        href="mailto:sddachy@wp.pl?subject=Zapytanie%20dachrem.zgora.pl"
        className="inline-flex items-center gap-3 bg-wood-500 hover:bg-wood-600 text-white px-10 py-5 rounded-2xl font-semibold transition text-xl shadow-sm hover:shadow-md"
      >
        sddachy@wp.pl
      </a>
    </form>
  )
}
