export default function Footer() {
  return (
    <footer className="bg-wood-800 text-wood-100 py-10 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 md:gap-8 text-sm">
        <div>
          <h4 className="font-heading text-lg font-bold text-white mb-3">Dach-Rem</h4>
          <p>Profesjonalne usługi dekarsko-blacharskie w Zielonej Górze i okolicach od 1999 roku.</p>
        </div>
        <div>
          <h4 className="font-heading text-lg font-bold text-white mb-3">Kontakt</h4>
          <p>Kwiatowa 2</p>
          <p>66-016 Nietków</p>
          <p className="mt-2">tel. 502 067 187</p>
          <p>email: sddachy@wp.pl</p>
        </div>
        <div>
          <h4 className="font-heading text-lg font-bold text-white mb-3">Godziny otwarcia</h4>
          <p>Pn–Pt: 8:00 – 18:00</p>
          <p className="mt-2 text-wood-200 text-xs md:text-sm">© {new Date().getFullYear()} Dach-Rem Drzewiecki Sławomir. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  )
}
