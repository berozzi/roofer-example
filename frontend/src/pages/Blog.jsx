import { Link } from 'react-router-dom'

const articles = [
  {
    slug: 'rodzaje-pokryc-dachowych',
    icon: '🏠',
    title: 'Rodzaje pokryć dachowych – które wybrać?',
    excerpt: 'Dachówka ceramiczna, betonowa, blachodachówka, papa – każde pokrycie ma swoje zalety. Podpowiadamy, na co zwrócić uwagę przy wyborze.',
    date: '10 czerwca 2026',
  },
  {
    slug: 'jak-wybrac-dekarza',
    icon: '🔍',
    title: 'Jak wybrać dobrego dekarza? Praktyczny poradnik',
    excerpt: 'Na co zwrócić uwagę przy wyborze ekipy dekarskiej? Sprawdź nasze wskazówki, aby uniknąć kosztownych błędów.',
    date: '2 czerwca 2026',
  },
  {
    slug: 'konserwacja-dachu',
    icon: '🛠️',
    title: 'Konserwacja dachu – o czym pamiętać każdego roku?',
    excerpt: 'Regularne przeglądy i drobne naprawy to klucz do długowieczności dachu. Przeczytaj, co warto robić sezonowo.',
    date: '20 maja 2026',
  },
  {
    slug: 'wiezba-dachowa-tradycyjna-czy-klejona',
    icon: '🪚',
    title: 'Więźba dachowa – tradycyjna czy klejona?',
    excerpt: 'Porównujemy więźbę tradycyjną i z drewna klejonego. Która sprawdzi się lepiej w Twoim projekcie?',
    date: '12 maja 2026',
  },
  {
    slug: 'blachodachowka-czy-dachowka-ceramiczna',
    icon: '⚖️',
    title: 'Blachodachówka czy dachówka ceramiczna?',
    excerpt: 'Oba materiały mają rzesze zwolenników. Przedstawiamy obiektywne porównanie kosztów, trwałości i wyglądu.',
    date: '5 maja 2026',
  },
]

export default function Blog() {
  return (
    <main className="pt-24 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-heading text-4xl md:text-5xl text-wood-700 mb-2">Blog</h1>
        <p className="text-wood-500 mb-12 max-w-lg">
          Porady, ciekawostki i praktyczne informacje o dachach – prosto od doświadczonych dekarzy.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((a) => (
            <Link
              key={a.slug}
              to={`/blog/${a.slug}`}
              className="group bg-wood-50 border border-wood-100 rounded-2xl p-6 hover:shadow-md transition"
            >
              <div className="text-3xl mb-3">{a.icon}</div>
              <p className="text-xs text-wood-400 mb-2">{a.date}</p>
              <h2 className="font-heading font-bold text-wood-700 text-lg mb-2 group-hover:text-wood-500 transition">
                {a.title}
              </h2>
              <p className="text-sm text-wood-500 leading-relaxed">{a.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
