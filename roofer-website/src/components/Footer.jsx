export default function Footer() {
  return (
    <footer className="bg-wood-800 text-wood-100 py-10 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <h4 className="font-heading text-lg font-bold text-white mb-3">Roofer</h4>
          <p>Profesjonalne usługi ciesielskie i dekarskie w Zielonej Górze i okolicach.</p>
        </div>
        <div>
          <h4 className="font-heading text-lg font-bold text-white mb-3">Kontakt</h4>
          <p>ul. Wojska Polskiego 100</p>
          <p>65-001 Zielona Góra</p>
          <p className="mt-2">tel. +48 123 456 789</p>
          <p>email: kontakt@roofer.pl</p>
        </div>
        <div>
          <h4 className="font-heading text-lg font-bold text-white mb-3">Godziny otwarcia</h4>
          <p>Pn–Pt: 7:00 – 17:00</p>
          <p>Sobota: 8:00 – 14:00</p>
          <p className="mt-2 text-wood-200 text-xs">© {new Date().getFullYear()} Roofer. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  )
}
