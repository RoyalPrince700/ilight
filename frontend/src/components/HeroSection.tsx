import { NavLink } from 'react-router-dom'
import electricalImage from '../assets/electricianconfig.jpg'
import hybridImage from '../assets/hybridsetup.jpg'
import residentialImage from '../assets/residential.jpg'
import rooftopImage from '../assets/rooftopsolar.jpg'

const mobileHeroImages = [residentialImage, hybridImage, electricalImage, rooftopImage] as const

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white lg:min-h-[90vh] lg:py-0">
      <style>
        {`
          @keyframes mobileHeroSlide {
            0% { opacity: 0; transform: scale(1.05); }
            6% { opacity: 1; transform: scale(1); }
            24% { opacity: 1; transform: scale(1); }
            30% { opacity: 0; transform: scale(1.04); }
            100% { opacity: 0; transform: scale(1.04); }
          }
        `}
      </style>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,255,137,0.16),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.08),transparent_34%)]" />
      <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-linear-to-l from-slate-100/80 via-transparent to-transparent lg:block" />

      <div className="relative z-10 mx-auto hidden max-w-7xl items-center gap-14 px-6 lg:grid lg:min-h-[90vh] lg:grid-cols-[minmax(0,1fr)_minmax(420px,540px)] lg:gap-16">
        <div className="max-w-2xl text-left">
          <div className="mb-4 inline-flex rounded-full border border-emerald-200 bg-white/95 px-4 py-1.5 text-sm font-semibold text-slate-900 shadow-sm backdrop-blur-sm animate-fade-in-up">
            Powering The Future
          </div>
          <h1 className="pb-2 text-5xl font-bold leading-[1.08] tracking-tight text-slate-950 md:text-7xl lg:text-8xl">
            Sustainable <br />
            Energy
          </h1>
          <p className="mt-8 max-w-xl text-xl font-light text-slate-600 md:text-2xl">
            We deliver reliable solar and electrical engineering solutions with precision and speed across Nigeria.
          </p>
          <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row">
            <NavLink to="/contact" className="rounded-full bg-primary px-8 py-4 font-bold text-black shadow-[0_0_20px_rgba(0,255,137,0.3)] transition-all hover:scale-105 hover:bg-[#00cc6d]">
              Start Your Project
            </NavLink>
            <NavLink to="/services" className="rounded-full border border-slate-200 bg-white px-8 py-4 font-bold text-slate-900 shadow-sm transition-all hover:bg-slate-100">
              Explore Services
            </NavLink>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[560px] lg:max-w-none">
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative grid grid-cols-12 grid-rows-[120px_120px_120px_120px] gap-4 md:grid-rows-[140px_140px_140px_140px]">
            <article className="group col-span-7 row-span-2 overflow-hidden rounded-4xl border border-white/60 bg-white p-2 shadow-[0_24px_70px_rgba(15,23,42,0.14)] backdrop-blur-sm">
              <img
                src={residentialImage}
                alt="Residential solar installation on a modern property"
                className="h-full w-full rounded-3xl object-cover transition-transform duration-700 group-hover:scale-105"
                loading="eager"
                decoding="async"
              />
            </article>

            <article className="group col-span-5 row-span-1 translate-y-6 overflow-hidden rounded-[1.75rem] border border-white/60 bg-white p-2 shadow-[0_18px_55px_rgba(15,23,42,0.12)] backdrop-blur-sm">
              <img
                src={hybridImage}
                alt="Hybrid solar and backup power setup"
                className="h-full w-full rounded-[1.25rem] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="eager"
                decoding="async"
              />
            </article>

            <article className="group col-span-5 row-span-2 -translate-y-2 overflow-hidden rounded-4xl border border-white/60 bg-white p-2 shadow-[0_22px_65px_rgba(15,23,42,0.13)] backdrop-blur-sm">
              <img
                src={electricalImage}
                alt="Electrical engineer configuring renewable energy systems"
                className="h-full w-full rounded-3xl object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </article>

            <article className="group col-span-7 row-span-2 -translate-y-6 overflow-hidden rounded-4xl border border-white/60 bg-white p-2 shadow-[0_26px_75px_rgba(15,23,42,0.15)] backdrop-blur-sm">
              <img
                src={rooftopImage}
                alt="Rooftop solar panel installation in progress"
                className="h-full w-full rounded-3xl object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </article>
          </div>
        </div>
      </div>

      <div className="relative min-h-screen lg:hidden">
        <div className="absolute inset-0">
          {mobileHeroImages.map((image, index) => (
            <img
              key={image}
              src={image}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover opacity-0"
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
              style={{
                animation: 'mobileHeroSlide 24s infinite',
                animationDelay: `${index * 6}s`
              }}
            />
          ))}
          <div className="absolute inset-0 bg-linear-to-b from-slate-950/35 via-slate-950/30 to-slate-950/80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,137,0.18),transparent_30%)]" />
        </div>

        <div className="relative z-10 flex min-h-screen items-center px-6 pb-12 pt-6">
          <div className="max-w-sm text-white">
            <div className="inline-flex rounded-full border border-white/30 bg-white/12 px-4 py-1.5 text-sm font-semibold text-white shadow-sm backdrop-blur-md">
              Powering The Future
            </div>
            <h1 className="mt-6 max-w-xs text-5xl font-bold leading-tight tracking-tight">
              Sustainable Energy Solutions
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-100">
              We deliver reliable solar and electrical engineering solutions with precision, speed, and long-term support across Nigeria.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <NavLink to="/contact" className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3.5 font-bold text-black shadow-[0_0_20px_rgba(0,255,137,0.28)] transition-all hover:bg-[#00cc6d]">
                Start Your Project
              </NavLink>
              <NavLink to="/services" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3.5 font-bold text-white backdrop-blur-sm transition-all hover:bg-white/15">
                Explore Services
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
