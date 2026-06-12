import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Blog from './pages/Blog'
import RodzajePokryc from './pages/blog/RodzajePokryc'
import JakWybracDekarza from './pages/blog/JakWybracDekarza'
import KonserwacjaDachu from './pages/blog/KonserwacjaDachu'
import WiezbaDachowa from './pages/blog/WiezbaDachowa'
import BlachodachowkaCeramiczna from './pages/blog/BlachodachowkaCeramiczna'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-wood-50 text-wood-800 font-body">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-wood-500 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg">
        Przejdź do treści
      </a>
      <Navbar />
      <main id="main-content" className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/o-nas" element={<About />} />
          <Route path="/realizacje" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/rodzaje-pokryc-dachowych" element={<RodzajePokryc />} />
          <Route path="/blog/jak-wybrac-dekarza" element={<JakWybracDekarza />} />
          <Route path="/blog/konserwacja-dachu" element={<KonserwacjaDachu />} />
          <Route path="/blog/wiezba-dachowa-tradycyjna-czy-klejona" element={<WiezbaDachowa />} />
          <Route path="/blog/blachodachowka-czy-dachowka-ceramiczna" element={<BlachodachowkaCeramiczna />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
