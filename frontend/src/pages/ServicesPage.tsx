import type { IconType } from 'react-icons'
import {
  FaArrowRight,
  FaBolt,
  FaChartLine,
  FaClipboardCheck,
  FaHouse,
  FaLightbulb,
  FaPlugCircleBolt,
  FaSolarPanel,
  FaUserTie,
  FaWrench
} from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import directorImage from '../assets/director.jpg'
import electricalIntegrationImage from '../assets/electricalintegration.jpg'
import energyAuditImage from '../assets/energyaudits.jpg'
import electricalImage from '../assets/electricianconfig.jpg'
import hybridImage from '../assets/hybridsetup.jpg'
import residentialImage from '../assets/residential.jpg'
import { services } from '../data/siteData'

const serviceIcons: Record<(typeof services)[number]['title'], IconType> = {
  'Solar Street Light': FaLightbulb,
  'Residential & Commercial': FaHouse,
  'Hybrid & Off-Grid': FaSolarPanel,
  'Electrical Wiring': FaBolt,
  'Inverter Systems': FaPlugCircleBolt,
  'Energy Audits': FaChartLine
}

const serviceImages: Record<(typeof services)[number]['title'], { src: string; alt: string }> = {
  'Solar Street Light': {
    src: electricalIntegrationImage,
    alt: 'Integrated outdoor lighting and electrical installation'
  },
  'Residential & Commercial': {
    src: residentialImage,
    alt: 'Residential solar installation on a modern property'
  },
  'Hybrid & Off-Grid': {
    src: hybridImage,
    alt: 'Hybrid solar and backup power setup'
  },
  'Electrical Wiring': {
    src: electricalImage,
    alt: 'Electrical engineer configuring renewable energy systems'
  },
  'Inverter Systems': {
    src: electricalIntegrationImage,
    alt: 'Configured inverter and electrical connection infrastructure'
  },
  'Energy Audits': {
    src: energyAuditImage,
    alt: 'Energy system audit and planning review'
  }
}

const servicePromises = [
  {
    title: 'Assessment and planning',
    description: 'We evaluate energy demand, site realities, and practical system goals before recommending a direction.',
    icon: FaClipboardCheck
  },
  {
    title: 'Professional installation',
    description: 'Execution focuses on safety, neat workmanship, reliable integration, and durable component placement.',
    icon: FaWrench
  },
  {
    title: 'Ongoing support mindset',
    description: 'Our work is shaped around dependable performance after commissioning, not just the day of installation.',
    icon: FaUserTie
  }
] as const

const serviceSteps = [
  {
    title: 'Consult and define the need',
    description: 'We understand your load profile, site type, priorities, and operating concerns before scoping the work.'
  },
  {
    title: 'Design the right solution',
    description: 'System architecture is matched to your budget, available space, and desired level of energy independence.'
  },
  {
    title: 'Install and commission',
    description: 'Our team handles deployment, integration, testing, and handover with a quality-focused execution standard.'
  }
] as const

function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white pt-16 pb-24 lg:pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,255,137,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.08),transparent_34%)]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.05fr)_380px]">
            <div className="rounded-4xl border border-slate-200 bg-slate-50 p-8 shadow-sm md:p-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                End-to-end service delivery
              </div>
              <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
                A service page built around process, coverage, and client guidance.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
                Instead of mirroring the home page, this layout puts the focus on what we do, how we work, and what clients can expect from planning through handover.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <NavLink
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 font-bold text-slate-950 shadow-[0_0_20px_rgba(0,255,137,0.22)] transition-colors hover:bg-[#00cc6d]"
                >
                  Get service advice
                </NavLink>
                <NavLink
                  to="/projects"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 font-bold text-slate-900 transition-colors hover:border-emerald-300 hover:text-emerald-500"
                >
                  See project examples <FaArrowRight aria-hidden="true" />
                </NavLink>
              </div>

              <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
                {servicePromises.map((promise) => (
                  <article key={promise.title} className="rounded-3xl border border-slate-200 bg-white p-5">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                      <promise.icon aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-slate-950">{promise.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{promise.description}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-sm">
              <img
                src={directorImage}
                alt="Project lead and technical oversight representative"
                className="h-full min-h-[420px] w-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-500">Service coverage</p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Service categories presented as capability blocks, not home-page cards.
              </h2>
            </div>
            <p className="max-w-xl text-slate-600">
              Each service area is still image-led, but the layout is tighter and more operational in tone.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {services.map((service, index) => {
              const ServiceIcon = serviceIcons[service.title]
              const serviceImage = serviceImages[service.title]

              return (
                <article
                  key={service.title}
                  className={`overflow-hidden rounded-4xl border border-slate-200 bg-slate-50 shadow-sm ${index === 0 ? 'lg:col-span-2' : ''}`}
                >
                  <div className={`grid grid-cols-1 ${index === 0 ? 'lg:grid-cols-[360px_minmax(0,1fr)]' : 'md:grid-cols-[220px_minmax(0,1fr)]'}`}>
                    <div className="relative min-h-[220px] overflow-hidden">
                      <img
                        src={serviceImage.src}
                        alt={serviceImage.alt}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute left-6 top-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/90 text-2xl text-emerald-500 shadow-lg backdrop-blur">
                        <ServiceIcon aria-hidden="true" />
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-slate-950">{service.title}</h3>
                      <p className="mt-4 text-sm leading-relaxed text-slate-600">{service.description}</p>
                      <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
                        Tailored system support
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-28 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">Our approach</p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
                The service process is where trust is built.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
                This section is intentionally more process-driven: it shows how consultation, design, and delivery fit together before any equipment is installed.
              </p>
              <div className="mt-10 space-y-4">
                {serviceSteps.map((step, index) => (
                  <article key={step.title} className="rounded-4xl border border-white/10 bg-white/5 p-6">
                    <div className="flex items-start gap-4">
                      <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-400/10 text-sm font-bold text-emerald-300">
                        0{index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-300">{step.description}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5">
              <article className="overflow-hidden rounded-4xl border border-white/10 bg-white/5">
                <img
                  src={hybridImage}
                  alt="Hybrid solar and backup power setup"
                  className="h-72 w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Operational fit</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    We design around load needs, outage realities, and the practical operating pattern of the site.
                  </p>
                </div>
              </article>
              <article className="overflow-hidden rounded-4xl border border-white/10 bg-white/5">
                <img
                  src={energyAuditImage}
                  alt="Energy system audit and planning review"
                  className="h-72 w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Review and optimization</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    Audits and system reviews help clients refine sizing, reduce waste, and plan smarter future upgrades.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-500">Technical leadership</p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Oversight and communication remain part of the service experience.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                Clients need more than installation. They need clarity, guidance, and a team that treats service quality as part of the final result.
              </p>
              <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <article className="rounded-4xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-950">Clear communication</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    We aim to keep scope, expectations, and recommendations understandable throughout the project cycle.
                  </p>
                </article>
                <article className="rounded-4xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-950">Reliable oversight</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    Technical decisions are tied back to safety, long-term performance, and the realities of the installation site.
                  </p>
                </article>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-4xl border border-slate-200 bg-slate-950 shadow-[0_24px_70px_rgba(15,23,42,0.15)]">
              <img
                src={directorImage}
                alt="Project lead and technical oversight representative"
                className="h-full min-h-[520px] w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/30 to-transparent" />
              <div className="absolute left-6 right-6 bottom-6 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-md">
                <p className="text-sm uppercase tracking-[0.25em] text-emerald-100">Trusted guidance</p>
                <p className="mt-3 text-lg leading-relaxed text-slate-100">
                  Every service is backed by hands-on technical oversight, installation discipline, and a strong commitment to client confidence at every stage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="overflow-hidden rounded-4xl bg-slate-950 px-8 py-10 text-white shadow-[0_28px_80px_rgba(15,23,42,0.18)] md:px-12 md:py-14">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">Ready to move forward?</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                  Tell us the kind of power challenge you need solved.
                </h2>
                <p className="mt-4 text-slate-300">
                  Whether you are planning a new installation, an upgrade, or a site-wide review, we can help define the right next step.
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

export default ServicesPage
