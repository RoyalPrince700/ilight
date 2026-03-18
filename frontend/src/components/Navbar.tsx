import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import logoImage from '../assets/ilightlogo.svg'

const navItems = ['Home', 'About', 'Projects', 'Products', 'Services', 'Contact'] as const

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMenu = () => setIsMobileMenuOpen((prev) => !prev)
  const closeMenu = () => setIsMobileMenuOpen(false)

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* LOGO */}
          <NavLink to="/" className="flex items-center gap-3 group relative z-50">
            <img
              src={logoImage}
              alt="I-LIGHT Solar logo"
              className="h-11 w-11 rounded-lg object-contain bg-white p-1 shadow-sm transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col leading-none">
              <span className="font-bold text-lg tracking-tight group-hover:text-[#00ff89] transition-colors">
                I-LIGHT
              </span>
              <span className="text-[10px] text-slate-500 uppercase tracking-widest">
                Solar Energy
              </span>
            </div>
          </NavLink>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `text-sm font-medium transition-all duration-300 hover:text-[#00ff89] ${
                    isActive ? 'text-[#00ff89]' : 'text-slate-600'
                  }`
                }
              >
                {item}
              </NavLink>
            ))}
          </div>

          {/* DESKTOP CTA */}
          <NavLink
            to="/contact"
            className="hidden md:block px-6 py-2 bg-white hover:bg-[#00ff89] hover:text-slate-900 border border-slate-200 hover:border-[#00ff89] rounded-full text-sm font-medium transition-all duration-300 shadow-sm"
          >
            Get a Quote
          </NavLink>

          {/* MOBILE BUTTON */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-slate-600 hover:text-[#00ff89] transition-colors z-[1000]"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 bg-white z-[999] flex flex-col transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* HEADER */}
        <div className="h-20 px-6 flex items-center justify-between border-b border-slate-100">
          <NavLink to="/" onClick={closeMenu} className="flex items-center gap-3">
            <img
              src={logoImage}
              alt="I-LIGHT Solar logo"
              className="h-10 w-10 rounded-lg object-contain bg-white p-1 shadow-sm"
            />
            <div className="flex flex-col leading-none">
              <span className="font-bold text-lg tracking-tight text-slate-800">
                I-LIGHT
              </span>
              <span className="text-[9px] text-slate-500 uppercase tracking-widest">
                Solar Energy
              </span>
            </div>
          </NavLink>

          <button
            onClick={closeMenu}
            className="p-2 text-slate-500 hover:text-red-500 hover:bg-slate-50 rounded-full transition-all duration-300"
            aria-label="Close menu"
          >
            <FiX size={32} />
          </button>
        </div>

        {/* NAV LINKS */}
        <div className="flex-1 px-6 py-8 flex flex-col gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              onClick={closeMenu}
              className={({ isActive }) =>
                `text-2xl font-bold transition-colors duration-300 ${
                  isActive
                    ? 'text-[#00ff89]'
                    : 'text-slate-800 hover:text-[#00ff89]'
                }`
              }
            >
              {item}
            </NavLink>
          ))}
        </div>

        {/* CTA */}
        <div className="p-6 border-t border-slate-100 bg-slate-50">
          <NavLink
            to="/contact"
            onClick={closeMenu}
            className="block w-full text-center px-6 py-4 bg-[#00ff89] text-slate-900 rounded-xl text-lg font-bold hover:bg-[#00cc6e] transition-colors shadow-lg"
          >
            Get a Quote
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default Navbar