import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Reviews from './pages/Reviews'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-wood-50 text-wood-800 font-body">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/o-nas" element={<About />} />
          <Route path="/realizacje" element={<Gallery />} />
          <Route path="/opinie" element={<Reviews />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
