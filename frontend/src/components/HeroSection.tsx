import { NavLink } from 'react-router-dom'
import heroImage from '../assets/hero.png'

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-primary/15 via-white/20 to-white" />
      <div className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-multiply" style={{ backgroundImage: `url(${heroImage})` }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="inline-block rounded-full border border-emerald-200 bg-white/95 px-4 py-1.5 text-sm font-semibold text-slate-900 shadow-sm backdrop-blur-sm mb-8 animate-fade-in-up">
          Powering The Future
        </div>
        <h1 className="pb-2 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.08] mb-8 bg-clip-text text-transparent bg-linear-to-b from-slate-900 to-slate-500">
          Sustainable <br />
          Energy Solutions
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto mb-12 font-light">
          We deliver reliable solar and electrical engineering solutions with precision, speed, and long-term support across Nigeria.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <NavLink to="/contact" className="px-8 py-4 bg-primary text-black rounded-full font-bold hover:bg-[#00cc6d] transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(0,255,137,0.3)]">
            Start Your Project
          </NavLink>
          <NavLink to="/services" className="px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-full font-bold hover:bg-slate-100 transition-all shadow-sm">
            Explore Services
          </NavLink>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
