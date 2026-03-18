import { NavLink } from 'react-router-dom'
import logoImage from '../assets/ilightlogo.svg'

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-20 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <img
              src={logoImage}
              alt="I-LIGHT Solar logo"
              className="h-14 w-14 rounded-xl object-contain bg-white p-1.5 shadow-sm"
            />
            <h3 className="text-2xl font-bold">I-LIGHT SOLAR<span className="text-[#00ff89]">.</span></h3>
          </div>
          <p className="text-slate-600 max-w-sm mb-8">
            Forward-thinking renewable energy and electrical engineering company committed to delivering reliable, sustainable, and cost-effective power solutions across Nigeria.
          </p>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-[#00ff89] hover:text-slate-900 transition-colors cursor-pointer">
              <span className="sr-only">Facebook</span>
              f
            </div>
            <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-[#00ff89] hover:text-slate-900 transition-colors cursor-pointer">
              <span className="sr-only">Twitter</span>
              t
            </div>
            <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-[#00ff89] hover:text-slate-900 transition-colors cursor-pointer">
              <span className="sr-only">Instagram</span>
              i
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-[#00ff89]">Contact</h4>
          <div className="space-y-4 text-slate-600">
            <p>2, Adeyemi Street,<br />Olowora, Berger, Lagos</p>
            <p className="hover:text-slate-900 transition-colors cursor-pointer">08148411691</p>
            <p className="hover:text-slate-900 transition-colors cursor-pointer">I.lightsolarenergy@gmail.com</p>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-[#00ff89]">Links</h4>
          <ul className="space-y-4 text-slate-600">
            <li><NavLink to="/about" className="hover:text-slate-900 transition-colors">About Us</NavLink></li>
            <li><NavLink to="/services" className="hover:text-slate-900 transition-colors">Services</NavLink></li>
            <li><NavLink to="/projects" className="hover:text-slate-900 transition-colors">Projects</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-slate-900 transition-colors">Contact</NavLink></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-12 mt-12 border-t border-slate-200 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} I-Light Solar & Electrical Energy Nig. Ltd. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
