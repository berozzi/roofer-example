# Roofer – Strona ciesielsko-dekarska

Strona wizytówkowa dla firmy zajmującej się ciesielstwem i dekarstwem, z siedzibą w Zielonej Górze.

## Uruchomienie

```bash
cd roofer-website
npm install
npm run dev        # dewelopersko
npm run build      # build produkcyjny → /dist
```

## Struktura projektu

```
src/
├── main.jsx              # entry point + BrowserRouter
├── App.jsx               # layout: Navbar → Routes → Footer
├── index.css             # Tailwind v4 + custom wood colors
├── components/
│   ├── Navbar.jsx        # nawigacja (fixed top, mobile hamburger)
│   ├── Footer.jsx        # stopka z danymi kontaktowymi
│   ├── HeroSlider.jsx    # slider zdjęć na stronie głównej (auto-odświeżanie co 5s)
│   └── ContactForm.jsx   # formularz kontaktowy (imię, email, telefon, wiadomość)
└── pages/
    ├── Home.jsx          # strona główna: slider + usługi + statystyki + CTA
    ├── About.jsx         # o nas: opis firmy + wartości
    ├── Gallery.jsx       # realizacje: siatka zdjęć z lightboxem
    ├── Reviews.jsx       # opinie: karty z cytatami klientów
    └── Contact.jsx       # kontakt: dane + formularz + mapa
```

## Technologie

- **Vite 8** + **React 19**
- **Tailwind CSS v4** (konfiguracja kolorów w `index.css` przez `@theme`)
- **react-router-dom** (routing na podstrony)
- **Unsplash** jako źródło zdjęć (placeholderowe URL-e)

## Paleta kolorów (wood)

| Nazwa         | Hex       | Zastosowanie                |
|---------------|-----------|-----------------------------|
| wood-50       | #FDF8F3   | tło strony                  |
| wood-100      | #F5E6D3   | tła sekcji, bordery         |
| wood-200      | #E8CDA8   | elementy dekoracyjne        |
| wood-300      | #D4A574   | akcenty, hover              |
| wood-400      | #C67B3D   | przyciski, linki aktywne    |
| wood-500      | #A85D1E   | główny kolor przycisków     |
| wood-600      | #8B4513   | tekst pomniejszy            |
| wood-700      | #6B3410   | nagłówki                    |
| wood-800      | #4A2510   | footer                      |

## Podstrony

| Ścieżka      | Strona       | Opis                                    |
|--------------|--------------|-----------------------------------------|
| `/`          | Strona główna| Hero slider + usługi + statystyki       |
| `/o-nas`     | O Nas        | O firmie + wartości                     |
| `/realizacje`| Realizacje   | Galeria zdjęć z lightboxem              |
| `/opinie`    | Opinie       | Opinie klientów z gwiazdkami            |
| `/kontakt`   | Kontakt      | Dane + formularz + link do Google Maps  |

## Modyfikacja treści / zdjęć

- **Zdjęcia w HeroSlider** – edytuj tablicę `slides` w `src/components/HeroSlider.jsx`
- **Zdjęcia w galerii** – edytuj tablicę `projects` w `src/pages/Gallery.jsx`
- **Opinie** – edytuj tablicę `reviews` w `src/pages/Reviews.jsx`
- **Adres/dane** – zmień w `Footer.jsx` i `Contact.jsx`

Wszystkie zdjęcia pochodzą z Unsplash. Przed wdrożeniem produkcyjnym zastąp je własnymi zdjęciami.
