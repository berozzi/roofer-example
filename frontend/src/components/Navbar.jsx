import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'Strona Główna' },
  { to: '/o-nas', label: 'O Nas' },
  { to: '/realizacje', label: 'Realizacje' },
  { to: '/blog', label: 'Blog' },
  { to: '/kontakt', label: 'Kontakt' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <nav className="fixed top-0 left-0 w-full bg-wood-50/95 backdrop-blur shadow-sm z-50 border-b border-wood-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Dach-Rem" className="h-9" />
        </Link>

        <button
          className="md:hidden text-wood-700 text-2xl p-3"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
          aria-expanded={open}
        >
          {open ? '✕' : '☰'}
        </button>

        <ul className={`absolute md:static top-16 left-0 w-full md:w-auto bg-wood-50/95 md:bg-transparent md:flex gap-6 p-4 md:p-0 ${open ? 'block' : 'hidden'} md:flex`}>
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                onClick={() => setOpen(false)}
                className={`block py-3 md:py-0 text-sm font-medium transition-colors ${
                  pathname === l.to ? 'text-wood-500' : 'text-wood-700 hover:text-wood-400'
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
