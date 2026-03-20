import { FaArrowRight, FaBolt, FaChartLine, FaLeaf, FaSolarPanel } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import electricalIntegrationImage from '../assets/electricalintegration.jpg'
import electricalImage from '../assets/electricianconfig.jpg'
import hybridImage from '../assets/hybridsetup.jpg'
import residentialImage from '../assets/residential.jpg'
import rooftopImage from '../assets/rooftopsolar.jpg'
import { projects } from '../data/siteData'

const projectHighlights = [
  { value: 'Residential', label: 'Home systems planned for comfort, backup, and lower energy pressure' },
  { value: 'Commercial', label: 'Operational power designed to improve uptime and installation quality' },
  { value: 'Public Use', label: 'Infrastructure work that supports visibility, access, and safer spaces' }
] as const

const featuredProjects = [
  {
    ...projects[0],
    image: residentialImage,
    alt: 'Residential solar installation on a modern property',
    summary:
      'Home energy systems designed for dependable daytime generation, cleaner backup support, and a neater installation finish.',
    deliverables: ['Load assessment and system sizing', 'Roof or ground-mounted solar integration', 'Battery and inverter configuration'],
    outcome: 'Supports uninterrupted daily power and reduces dependence on costly backup fuel.',
    accent: 'Homes and estates'
  },
  {
    ...projects[1],
    image: electricalIntegrationImage,
    alt: 'Engineer configuring integrated electrical and solar equipment',
    summary:
      'Business-focused power infrastructure that combines generation, storage, and safe distribution for facilities that need consistency.',
    deliverables: ['Commercial-grade inverter architecture', 'Electrical protection and changeover planning', 'Scalable battery-ready configurations'],
    outcome: 'Helps teams protect operations, equipment, and service delivery during unstable grid periods.',
    accent: 'Commercial facilities'
  },
  {
    ...projects[2],
    image: rooftopImage,
    alt: 'Technician working on a rooftop solar panel project',
    summary:
      'Street lighting and public environment upgrades built to improve nighttime visibility, lower running costs, and extend access to reliable illumination.',
    deliverables: ['Solar lighting layout and placement', 'Pole, fixture, and controller integration', 'Durability-focused installation for outdoor use'],
    outcome: 'Creates cleaner, safer environments with lower grid dependence and easier long-term maintenance.',
    accent: 'Roads and shared spaces'
  }
] as const

const deliveryPillars = [
  {
    title: 'Technical planning first',
    description: 'Every project begins with energy needs, site realities, and a clear execution path before installation starts.',
    icon: FaChartLine
  },
  {
    title: 'Clean and safe execution',
    description: 'Our teams focus on compliance, wiring discipline, neat installation standards, and durable component integration.',
    icon: FaBolt
  },
  {
    title: 'Systems built for real use',
    description: 'We shape each solution around daily load behavior, future expansion, and the need for reliable uptime.',
    icon: FaSolarPanel
  }
] as const

const projectGallery = [
  {
    title: 'Hybrid backup environments',
    description: 'Integrated solar and storage systems for locations where uptime matters throughout the day.',
    image: hybridImage,
    alt: 'Hybrid solar and backup power setup'
  },
  {
    title: 'Electrical finishing and configuration',
    description: 'Detailed wiring, inverter setup, and commissioning work that supports long-term performance.',
    image: electricalImage,
    alt: 'Electrical engineer configuring renewable energy systems'
  }
] as const

function ProjectsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-50 pt-16 pb-24 lg:pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,255,137,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.08),transparent_34%)]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_420px]">
              <div className="p-8 md:p-12 lg:p-14">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-slate-700">
                  <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                  Project portfolio
                </div>
                <h1 className="mt-6 max-w-3xl text-5xl font-bold tracking-tight text-slate-950 md:text-6xl">
                  Work presented like real project stories, not just image blocks.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
                  See how our residential, commercial, and public-use installations are planned, delivered, and shaped around dependable energy performance.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <NavLink
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 font-bold text-slate-950 shadow-[0_0_20px_rgba(0,255,137,0.22)] transition-colors hover:bg-[#00cc6d]"
                  >
                    Start a project
                  </NavLink>
                  <NavLink
                    to="/services"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 font-bold text-slate-900 transition-colors hover:border-emerald-300 hover:text-emerald-500"
                  >
                    View services <FaArrowRight aria-hidden="true" />
                  </NavLink>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
                  {projectHighlights.map((item) => (
                    <div key={item.value} className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-5">
                      <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">{item.value}</div>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative min-h-[420px] border-t border-slate-200 lg:border-t-0 lg:border-l">
                <img
                  src={electricalIntegrationImage}
                  alt="Integrated electrical and solar equipment"
                  className="h-full w-full object-cover"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/25 to-transparent" />
                <div className="absolute inset-x-6 bottom-6 rounded-3xl border border-white/10 bg-white/10 p-6 text-white backdrop-blur-md">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">Execution focus</p>
                  <p className="mt-3 text-base leading-relaxed text-slate-100">
                    Clear scope, clean installation, and power systems configured for actual site conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-500">Featured projects</p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                A case-study layout for the main project categories we deliver.
              </h2>
            </div>
            <p className="max-w-xl text-slate-600">
              This page now leans into project storytelling: scope, deliverables, and expected outcomes for each environment.
            </p>
          </div>

          <div className="mt-14 space-y-12">
            {featuredProjects.map((project, index) => (
              <article
                key={project.title}
                className="grid grid-cols-1 items-center gap-8 rounded-4xl border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-8 lg:grid-cols-[88px_minmax(0,1fr)]"
              >
                <div className="flex items-start justify-start lg:justify-center">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-950 text-lg font-bold text-white">
                    0{index + 1}
                  </div>
                </div>

                <div className={`grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] ${index % 2 === 1 ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''}`}>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex rounded-full bg-primary px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-950">
                        {project.status}
                      </span>
                      <span className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
                        {project.accent}
                      </span>
                    </div>
                    <h3 className="mt-5 text-3xl font-bold tracking-tight text-slate-950">{project.title}</h3>
                    <p className="mt-4 text-base leading-relaxed text-slate-600">{project.summary}</p>
                    <p className="mt-4 text-sm leading-relaxed text-slate-500">{project.description}</p>

                    <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                      {project.deliverables.map((item) => (
                        <div key={item} className="rounded-3xl border border-slate-200 bg-white px-4 py-4 text-sm font-medium text-slate-700">
                          {item}
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 rounded-3xl border border-emerald-100 bg-emerald-50/70 p-5">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Expected outcome</p>
                      <p className="mt-2 text-sm leading-relaxed text-slate-700">{project.outcome}</p>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white">
                    <img
                      src={project.image}
                      alt={project.alt}
                      className="h-[320px] w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-28 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(320px,0.95fr)_minmax(0,1.05fr)]">
            <div className="relative overflow-hidden rounded-4xl border border-white/10">
              <img
                src={hybridImage}
                alt="Hybrid solar and backup power setup"
                className="h-full min-h-[420px] w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/30 to-transparent" />
              <div className="absolute left-6 right-6 bottom-6 rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">What this means on site</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-100">
                  Projects are designed around actual usage, not generic installation templates.
                </p>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">How we deliver</p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
                A project process built around clarity, safety, and operational confidence.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
                From site review to commissioning, we keep projects aligned to real usage patterns, installation quality, and dependable long-term system behavior.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 mt-10">
              {deliveryPillars.map((pillar) => (
                <article
                  key={pillar.title}
                  className="rounded-4xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/10 text-xl text-emerald-300">
                    <pillar.icon aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{pillar.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-500">Supporting scenes</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Extra installation views to round out the project picture.
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {projectGallery.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-sm">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-80 w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="p-8">
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
                    <FaLeaf aria-hidden="true" />
                    Built for dependable use
                  </div>
                  <h3 className="mt-5 text-2xl font-bold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="overflow-hidden rounded-4xl bg-slate-950 px-8 py-10 text-white shadow-[0_28px_80px_rgba(15,23,42,0.18)] md:px-12 md:py-14">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">Start your next installation</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                  Planning a solar or electrical project that needs reliable execution?
                </h2>
                <p className="mt-4 text-slate-300">
                  Share your site goals with us and we will help you map the right system, scope, and delivery approach for your environment.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <NavLink
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-[#00d973]"
                >
                  Request a consultation
                </NavLink>
                <NavLink
                  to="/products"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition-colors hover:border-emerald-300 hover:text-emerald-300"
                >
                  Explore products
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProjectsPage
