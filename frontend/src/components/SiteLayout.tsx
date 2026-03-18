import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

function SiteLayout() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#00ff89] selection:text-slate-900">
      <Navbar />

      <main className="pt-20">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default SiteLayout
