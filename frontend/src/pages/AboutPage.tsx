import { FaArrowRight, FaBolt, FaCompass, FaLeaf, FaShieldHalved, FaUsers } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import directorImage from '../assets/director.jpg'
import electricalIntegrationImage from '../assets/electricalintegration.jpg'

const values = [
  {
    title: 'Innovation with purpose',
    description: 'We apply modern solar and electrical thinking to practical energy challenges across homes, businesses, and institutions.',
    icon: FaCompass
  },
  {
    title: 'Reliable execution',
    description: 'From planning to commissioning, we focus on workmanship, safety, and systems that perform beyond installation day.',
    icon: FaShieldHalved
  },
  {
    title: 'People and impact',
    description: 'We believe better energy infrastructure should improve how communities, teams, and families live and work.',
    icon: FaUsers
  }
] as const

const focusAreas = [
  'Residential and commercial solar solutions',
  'Hybrid and off-grid system deployment',
  'Electrical wiring and integration works',
  'Energy audits and performance planning'
] as const

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white pt-16 pb-24 lg:pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,255,137,0.12),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.08),transparent_34%)]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.05fr)_420px]">
            <div className="rounded-4xl border border-slate-200 bg-slate-50 p-8 shadow-sm md:p-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                About I-Light Solar
              </div>
              <h1 className="mt-6 max-w-3xl text-5xl font-bold tracking-tight text-slate-950 md:text-6xl">
                A modern energy company built on trust, technical care, and forward-looking solutions.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
                I-Light Solar and Electrical Energy Nig. Ltd delivers solar and electrical systems designed to improve reliability, reduce energy pressure, and support smarter long-term power use across Nigeria.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Our mission</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    To provide reliable, efficient, and sustainable solar and electrical energy solutions that empower communities, support businesses, and contribute to national development.
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Our vision</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    To be a leading renewable energy and electrical engineering company in Nigeria, recognized for quality, innovation, and customer satisfaction.
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-sm">
              <img
                src={electricalIntegrationImage}
                alt="Integrated solar and electrical installation"
                className="h-full min-h-[420px] w-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-500">Who we are</p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Driven by innovation, integrity, and practical energy thinking.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-600">
                Founded with a passion for sustainable development and energy independence, the company specializes in the design, supply, installation, and maintenance of solar and electrical systems for residential, commercial, industrial, and public sector clients.
              </p>
              <p className="mt-5 text-base leading-relaxed text-slate-600">
                Our approach combines technical planning, modern execution standards, and a strong commitment to giving every client a solution that fits real operating conditions.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {values.map((value) => (
                <article key={value.title} className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-xl text-emerald-600">
                    <value.icon aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-950">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{value.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-28 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[420px_minmax(0,1fr)]">
            <div className="overflow-hidden rounded-4xl border border-white/10 bg-white/5 shadow-[0_24px_70px_rgba(0,0,0,0.24)]">
              <img
                src={directorImage}
                alt="Agbola Oluwasegun Emmanuel, CEO"
                className="h-full min-h-[520px] w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">Leadership spotlight</p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
                Meet our CEO, Agbola Oluwasegun Emmanuel.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-300">
                The leadership vision behind I-Light Solar is grounded in the belief that dependable energy is essential to growth, productivity, and long-term development.
              </p>

              <div className="mt-8 rounded-4xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">CEO message</p>
                <p className="mt-4 text-base leading-8 text-slate-200">
                  "At I-Light Solar and Electrical Energy Nig. Ltd, we believe that access to reliable energy is fundamental to growth and development. Our commitment is to deliver innovative and sustainable solutions that not only meet present energy demands but also secure a brighter future."
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">
                    <FaBolt aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">Technical direction</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    Leadership that values practical design, quality execution, and systems that solve real energy problems.
                  </p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">
                    <FaLeaf aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">Sustainable impact</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    A commitment to cleaner, more efficient power solutions that support stronger communities and businesses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-500">What we focus on</p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Core solution areas that shape our work.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                Our team supports clients from early energy planning to installation and long-term system improvement, with a focus on practical performance and clean execution.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {focusAreas.map((item) => (
                <article key={item} className="rounded-4xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-emerald-600 shadow-sm">
                    <FaBolt aria-hidden="true" />
                  </div>
                  <p className="mt-4 text-sm font-medium leading-relaxed text-slate-700">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="overflow-hidden rounded-4xl bg-slate-950 px-8 py-10 text-white shadow-[0_28px_80px_rgba(15,23,42,0.18)] md:px-12 md:py-14">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">Work with us</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                  Ready to build with a team focused on reliable energy delivery?
                </h2>
                <p className="mt-4 text-slate-300">
                  Whether you need a new solar installation, an electrical upgrade, or expert guidance on your next energy project, we are ready to help.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <NavLink
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-[#00d973]"
                >
                  Contact us
                </NavLink>
                <NavLink
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition-colors hover:border-emerald-300 hover:text-emerald-300"
                >
                  Explore services <FaArrowRight aria-hidden="true" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage
