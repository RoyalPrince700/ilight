import { FaArrowRight, FaBatteryFull, FaBolt, FaLeaf, FaPlugCircleBolt, FaShieldHalved, FaSolarPanel } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import energyAuditImage from '../assets/energyaudits.jpg'
import electricalImage from '../assets/electricianconfig.jpg'
import hybridImage from '../assets/hybridsetup.jpg'
import rooftopImage from '../assets/rooftopsolar.jpg'
import { products } from '../data/siteData'

const productCatalog = [
  {
    ...products[0],
    image: rooftopImage,
    alt: 'Rooftop solar panel installation in progress',
    specs: ['High-output panel selection', 'Weather-resilient performance', 'Designed for long-term energy yield'],
    useCase: 'Best for homes, offices, and facilities that want dependable daytime generation and a clean roofline finish.',
    icon: FaSolarPanel
  },
  {
    ...products[1],
    image: electricalImage,
    alt: 'Electrical engineer configuring renewable energy systems',
    specs: ['Solar, battery, and utility coordination', 'Smart changeover behavior', 'Scalable integration for growing loads'],
    useCase: 'Best for environments that need seamless switching, better uptime, and stronger control over energy flow.',
    icon: FaPlugCircleBolt
  },
  {
    ...products[2],
    image: hybridImage,
    alt: 'Hybrid solar and backup power setup',
    specs: ['Long-cycle storage capability', 'Reliable backup support', 'Expandable for evolving demand'],
    useCase: 'Best for users who need power continuity after sunset or during unstable grid conditions.',
    icon: FaBatteryFull
  },
  {
    ...products[3],
    image: energyAuditImage,
    alt: 'Energy system review and planning in progress',
    specs: ['Compact integrated lighting design', 'Low-maintenance outdoor deployment', 'Suitable for roads and shared spaces'],
    useCase: 'Best for compounds, schools, institutions, and public access areas that need efficient standalone lighting.',
    icon: FaBolt
  }
] as const

const productBenefits = [
  {
    title: 'Curated for durability',
    description: 'We prioritize components with dependable service life, practical warranties, and proven fit for local operating conditions.',
    icon: FaShieldHalved
  },
  {
    title: 'Matched to your system',
    description: 'Each product recommendation supports a complete energy strategy instead of a disconnected equipment purchase.',
    icon: FaPlugCircleBolt
  },
  {
    title: 'Focused on better efficiency',
    description: 'Panels, storage, and control hardware are selected to help improve output, uptime, and day-to-day energy use.',
    icon: FaLeaf
  }
] as const

const applicationFlow = [
  {
    title: 'Generate',
    description: 'Capture solar energy efficiently with well-matched panel layouts and dependable mounting design.',
    image: rooftopImage,
    alt: 'Solar panels installed on a rooftop'
  },
  {
    title: 'Store',
    description: 'Hold backup energy in battery systems sized to support practical overnight and outage use.',
    image: hybridImage,
    alt: 'Hybrid storage and power components'
  },
  {
    title: 'Control',
    description: 'Manage power flow safely through inverters, wiring, and protection components configured for your site.',
    image: electricalImage,
    alt: 'Engineer working on system control components'
  }
] as const

function ProductsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white pt-16 pb-24 lg:pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,255,137,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.08),transparent_34%)]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.1fr)_340px]">
            <div className="overflow-hidden rounded-4xl border border-slate-200 bg-slate-50 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_300px]">
                <div className="p-8 md:p-12">
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                    <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                    Product catalog
                  </div>
                  <h1 className="mt-6 max-w-3xl text-5xl font-bold tracking-tight text-slate-950 md:text-6xl">
                    A more catalog-style view of the equipment behind our systems.
                  </h1>
                  <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
                    Browse the core product categories we use to build dependable solar and electrical solutions, with each item explained by fit, performance role, and application.
                  </p>
                  <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                    <NavLink
                      to="/contact"
                      className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 font-bold text-slate-950 shadow-[0_0_20px_rgba(0,255,137,0.22)] transition-colors hover:bg-[#00cc6d]"
                    >
                      Request product guidance
                    </NavLink>
                    <NavLink
                      to="/projects"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 font-bold text-slate-900 transition-colors hover:border-emerald-300 hover:text-emerald-500"
                    >
                      See installed results <FaArrowRight aria-hidden="true" />
                    </NavLink>
                  </div>
                </div>

                <div className="relative border-t border-slate-200 lg:border-t-0 lg:border-l">
                  <img
                    src={rooftopImage}
                    alt="Rooftop solar panel installation in progress"
                    className="h-full min-h-[280px] w-full object-cover"
                    loading="eager"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/75 via-slate-950/15 to-transparent" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Core categories</p>
                <p className="mt-3 text-4xl font-bold text-slate-950">{productCatalog.length}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Panels, inverters, storage, and integrated lighting.
                </p>
              </div>
              <div className="rounded-4xl border border-slate-200 bg-slate-950 p-6 text-white shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Selection principle</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  We recommend hardware as part of a system strategy, not as isolated product pieces.
                </p>
              </div>
              <div className="rounded-4xl border border-slate-200 bg-emerald-50 p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Best outcome</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  Better matching between energy demand, uptime goals, and future expansion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-500">Product categories</p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                A showroom-style layout for the major product groups we supply and recommend.
              </h2>
            </div>
            <p className="max-w-xl text-slate-600">
              Each row focuses on one category, what it contributes to a system, and where it fits best.
            </p>
          </div>

          <div className="mt-14 space-y-8">
            {productCatalog.map((product, index) => (
              <article
                key={product.title}
                className={`overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-sm ${index % 2 === 1 ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''}`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-[320px_minmax(0,1fr)]">
                  <div className="relative min-h-[280px] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.alt}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute left-6 top-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/90 text-2xl text-emerald-500 shadow-lg backdrop-blur">
                      <product.icon aria-hidden="true" />
                    </div>
                    <div className="absolute right-6 top-6 rounded-full bg-slate-950 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                      {product.price}
                    </div>
                  </div>

                  <div className="p-8 md:p-10">
                    <h3 className="text-3xl font-bold tracking-tight text-slate-950">{product.title}</h3>
                    <p className="mt-4 text-base leading-relaxed text-slate-600">{product.description}</p>

                    <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-3">
                      {product.specs.map((spec) => (
                        <div key={spec} className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-medium text-slate-700">
                          {spec}
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 rounded-3xl border border-emerald-100 bg-emerald-50/70 p-5">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">Best fit</p>
                      <p className="mt-2 text-sm leading-relaxed text-slate-700">{product.useCase}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-28 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[320px_minmax(0,1fr)]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">Why these products</p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
                Product selection standards that protect system quality.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
                Product quality matters most when it is paired with the right design, system balance, and technical execution. That is how we approach every recommendation.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {productBenefits.map((benefit) => (
                <article
                  key={benefit.title}
                  className="rounded-4xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/10 text-xl text-emerald-300">
                    <benefit.icon aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{benefit.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{benefit.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-500">How products fit together</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              A simple system chain from generation to storage to control.
            </h2>
            <p className="mt-4 text-slate-600">
              Most successful systems are built by combining the right categories in the right proportion for the space, load profile, and budget.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {applicationFlow.map((item, index) => (
              <article key={item.title} className="rounded-4xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white">
                  0{index + 1}
                </div>
                <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-56 w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
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
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">Need the right product mix?</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                  Let us recommend a configuration that fits your energy goals.
                </h2>
                <p className="mt-4 text-slate-300">
                  We can help you match panels, storage, inverters, and supporting components to the needs of your home, business, or project site.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <NavLink
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-[#00d973]"
                >
                  Talk to our team
                </NavLink>
                <NavLink
                  to="/services"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition-colors hover:border-emerald-300 hover:text-emerald-300"
                >
                  View services
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductsPage
