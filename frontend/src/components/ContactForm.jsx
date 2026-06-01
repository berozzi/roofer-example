import { useState } from 'react'

export default function ContactForm() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div className="text-center py-16 text-wood-600">
        <p className="text-3xl mb-2">✓</p>
        <p className="text-lg font-semibold">Dziękujemy za wiadomość!</p>
        <p className="text-wood-500">Odezwiemy się najszybciej jak to możliwe.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-wood-700 mb-1">Imię i nazwisko *</label>
          <input required className="w-full border border-wood-200 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-wood-300 text-wood-800" />
        </div>
        <div>
          <label className="block text-sm font-medium text-wood-700 mb-1">E-mail *</label>
          <input type="email" required className="w-full border border-wood-200 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-wood-300 text-wood-800" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-wood-700 mb-1">Telefon</label>
        <input type="tel" className="w-full border border-wood-200 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-wood-300 text-wood-800" />
      </div>
      <div>
        <label className="block text-sm font-medium text-wood-700 mb-1">Wiadomość *</label>
        <textarea required rows={5} className="w-full border border-wood-200 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-wood-300 text-wood-800 resize-y" />
      </div>
      <button type="submit" className="bg-wood-500 hover:bg-wood-600 text-white px-8 py-4 rounded-lg font-semibold transition w-full sm:w-auto">
        Wyślij wiadomość
      </button>
    </form>
  )
}
