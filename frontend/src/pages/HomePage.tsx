import type { IconType } from 'react-icons'
import {
  FaArrowRight,
  FaBatteryFull,
  FaBolt,
  FaChartLine,
  FaClock,
  FaHouse,
  FaLeaf,
  FaLightbulb,
  FaPlugCircleBolt,
  FaQuoteLeft,
  FaSolarPanel,
  FaSun
} from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import residentialImage from '../assets/residential.jpg'
// import hybridImage from '../assets/hybridsetup.jpg'
import electricalImage from '../assets/electricianconfig.jpg'
import rooftopImage from '../assets/rooftopsolar.jpg'
import energyAuditImage from '../assets/energyaudits.jpg'
// import electricalIntegrationImage from '../assets/electricalintegration.jpg'
import offgridImage from '../assets/offgrid.jpg'
import inverterImage from '../assets/invertersystem.jpg'
import solarBenefit from '../assets/solarbenefit.jpg'
import electricianImage from '../assets/electrician.jpg'
import { services } from '../data/siteData'

const serviceIcons: Record<(typeof services)[number]['title'], IconType> = {
  'Solar Street Light': FaLightbulb,
  'Residential & Commercial': FaHouse,
  'Hybrid & Off-Grid': FaSolarPanel,
  'Electrical Wiring': FaBolt,
  'Inverter Systems': FaPlugCircleBolt,
  'Energy Audits': FaChartLine
}

const trustStats = [
  { value: '50+', label: 'Installations and energy upgrades delivered' },
  { value: '24/7', label: 'Support mindset for mission-critical power' },
  { value: '100%', label: 'Focus on safe, standards-compliant execution' }
] as const

const quickOverviewServices = services.filter(
  (service) =>
    service.title === 'Residential & Commercial' ||
    service.title === 'Hybrid & Off-Grid' ||
    service.title === 'Electrical Wiring'
)

const additionalServices = services.filter(
  (service) =>
    service.title !== 'Residential & Commercial' &&
    service.title !== 'Hybrid & Off-Grid' &&
    service.title !== 'Electrical Wiring'
)

const serviceImages: Record<(typeof services)[number]['title'], { src: string; alt: string }> = {
  'Solar Street Light': {
    src: 'https://unsplash.com/photos/QyvRyDs17Rs/download?force=true&w=1200',
    alt: 'Solar-powered street light against a blue sky'
  },
  'Residential & Commercial': {
    src: residentialImage,
    alt: 'Technician installing solar panels on a roof'
  },
  'Hybrid & Off-Grid': {
    src: offgridImage,
    alt: 'Engineer working on solar power electrical equipment'
  },
  'Electrical Wiring': {
    src: electricalImage,
    alt: 'Electrical engineer inspecting renewable energy equipment'
  },
  'Inverter Systems': {
    src: inverterImage,
    alt: 'Electrical technician configuring inverter and power systems'
  },
  'Energy Audits': {
    src: energyAuditImage,
    alt: 'Solar installation being reviewed for performance and planning'
  }
}

const solarBenefits = [
  {
    title: 'Lower running costs',
    desc: 'Solar reduces monthly energy spend and helps businesses and homes plan power costs with more confidence.',
    stat: 'Save more',
    icon: FaSun
  },
  {
    title: 'Reliable backup power',
    desc: 'Pairing panels, batteries, and inverters gives you continuity during outages and unstable grid periods.',
    stat: 'Stay on',
    icon: FaBatteryFull
  },
  {
    title: 'Cleaner energy footprint',
    desc: 'Modern solar systems cut generator dependence, reduce noise, and support more sustainable operations.',
    stat: 'Go cleaner',
    icon: FaLeaf
  },
  {
    title: 'Long-term durability',
    desc: 'Quality components and proper installation create dependable systems built for daily use and harsh weather.',
    stat: 'Built to last',
    icon: FaClock
  }
] as const

const projectShowcase = [
  {
    title: 'Residential rooftops',
    desc: 'Clean power systems designed for stable home energy, efficient storage, and everyday comfort.',
    image: rooftopImage,
    alt: 'Worker installing rooftop solar panels'
  },
  {
    title: 'Public lighting projects',
    desc: 'Solar street light installations that improve visibility, safety, and energy independence in shared spaces.',
    image: 'https://unsplash.com/photos/QyvRyDs17Rs/download?force=true&w=1400',
    alt: 'Solar street lighting installation'
  },
  {
    title: 'Electrical integration',
    desc: 'Inverter, battery, and wiring setups that connect renewable energy into dependable real-world systems.',
    image: electricianImage,
    alt: 'Engineer configuring solar and electrical systems'
  }
] as const

const testimonials = [
  {
    quote: 'The team delivered a clean solar setup for our facility with clear communication, fast turnaround, and dependable after-installation support.',
    name: 'Operations Lead',
    company: 'Commercial Client'
  },
  {
    quote: 'Our home now has stable power for daily use, and the installation process felt organized, professional, and safety-focused from start to finish.',
    name: 'Homeowner',
    company: 'Residential Project'
  },
  {
    quote: 'Their street lighting solution improved nighttime visibility in our environment and gave us confidence in the durability of the system.',
    name: 'Project Coordinator',
    company: 'Community Infrastructure'
  }
] as const

function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="relative py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                What we do at a glance
              </div>
              <div className="mt-6 max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-950">
                  See our core energy solutions immediately.
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-slate-600">
                  From rooftop solar to hybrid backup and electrical integration.
                </p>
              </div>
            </div>
            <NavLink to="/services" className="inline-flex items-center gap-2 self-start rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-colors hover:border-emerald-300 hover:text-emerald-500">
              Explore services <FaArrowRight aria-hidden="true" />
            </NavLink>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickOverviewServices.map((service) => {
              const ServiceIcon = serviceIcons[service.title]
              const serviceImage = serviceImages[service.title]

              return (
                <article key={service.title} className="group overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_24px_60px_rgba(15,23,42,0.1)]">
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={serviceImage.src}
                      alt={serviceImage.alt}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/15 to-transparent" />
                    <div className="absolute left-6 top-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/90 text-2xl text-emerald-500 shadow-lg backdrop-blur">
                      <ServiceIcon aria-hidden="true" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                      <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-200">{service.description}</p>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {trustStats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-slate-200 bg-white px-6 py-6 shadow-sm">
                <div className="text-3xl font-bold text-emerald-500">{stat.value}</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-14">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-500">More solutions</p>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">More ways we support your power needs.</h2>
              <p className="mt-4 max-w-2xl text-slate-600">
                From public lighting to inverter setup and energy audits, our work combines technical planning with a modern installation experience.
              </p>
            </div>
            <NavLink to="/services" className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-900 transition-colors hover:border-emerald-300 hover:text-emerald-500">
              View all services <FaArrowRight aria-hidden="true" />
            </NavLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service) => {
              const ServiceIcon = serviceIcons[service.title]
              const serviceImage = serviceImages[service.title]

              return (
                <article key={service.title} className="group overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-emerald-300 hover:shadow-[0_24px_60px_rgba(15,23,42,0.1)]">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={serviceImage.src}
                      alt={serviceImage.alt}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                    <div className="absolute left-6 top-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/90 text-2xl text-emerald-500 shadow-lg backdrop-blur">
                      <ServiceIcon aria-hidden="true" />
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-slate-950 transition-colors group-hover:text-emerald-500">{service.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-slate-600">{service.description}</p>
                    <NavLink to="/services" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition-colors hover:text-emerald-500">
                      Learn more <FaArrowRight aria-hidden="true" />
                    </NavLink>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-28 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
            <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-slate-900">
              <img
                src={solarBenefit}
                alt="Solar technician working on a rooftop installation"
                className="h-full min-h-[420px] w-full object-cover"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute left-6 right-6 bottom-6 rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                <p className="text-sm uppercase tracking-[0.25em] text-emerald-100">Benefits of solar</p>
                <p className="mt-3 text-lg text-slate-100">
                  A well-designed system gives you more control over power availability, energy spending, and long-term operating efficiency.
                </p>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">Why switch</p>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">Why using solar makes sense for modern spaces.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
                Solar is more than an alternative source of power. It is a practical way to improve uptime, reduce operating pressure, and build a smarter energy foundation for homes and organizations.
              </p>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {solarBenefits.map((benefit) => (
                  <div key={benefit.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
                    <div className="flex items-center justify-between gap-4">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/10 text-xl text-emerald-300">
                        <benefit.icon aria-hidden="true" />
                      </div>
                      <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
                        {benefit.stat}
                      </span>
                    </div>
                    <h3 className="mt-5 text-xl font-semibold">{benefit.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-500">Project focus</p>
              <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-slate-950">Images that reflect the work we deliver.</h2>
            </div>
            <p className="max-w-xl text-slate-600">
              Modern installations, safer infrastructure, and cleaner energy systems across residential, commercial, and public environments.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projectShowcase.map((project) => (
              <article key={project.title} className="overflow-hidden rounded-4xl bg-white shadow-sm ring-1 ring-slate-200">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="h-72 w-full object-cover"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                <div className="p-7">
                  <h3 className="text-2xl font-bold text-slate-950">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{project.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-500">Testimonials</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-slate-950">What clients value about working with us.</h2>
            <p className="mt-4 text-slate-600">
              A strong project experience comes from technical clarity, dependable execution, and support that continues after installation.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name + testimonial.company} className="rounded-4xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-xl text-emerald-500 shadow-sm">
                  <FaQuoteLeft aria-hidden="true" />
                </div>
                <p className="mt-6 text-base leading-8 text-slate-700">"{testimonial.quote}"</p>
                <div className="mt-8">
                  <p className="font-semibold text-slate-950">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.company}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="overflow-hidden rounded-4xl bg-slate-950 px-8 py-10 md:px-12 md:py-14 text-white shadow-[0_28px_80px_rgba(15,23,42,0.18)]">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">Start your project</p>
                <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">Ready to build a cleaner and more reliable power system?</h2>
                <p className="mt-4 text-slate-300">
                  Tell us what you need and we will help you plan a solar or electrical solution that fits your space, usage, and long-term goals.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <NavLink to="/contact" className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-[#00d973]">
                  Get a quote
                </NavLink>
                <NavLink to="/projects" className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition-colors hover:border-emerald-300 hover:text-emerald-300">
                  View projects
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
