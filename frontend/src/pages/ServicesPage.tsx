import type { IconType } from 'react-icons'
import { FaBolt, FaChartLine, FaHouse, FaLightbulb, FaPlugCircleBolt, FaSolarPanel } from 'react-icons/fa6'
import { services } from '../data/siteData'

const serviceIcons: Record<(typeof services)[number]['title'], IconType> = {
  'Solar Street Light': FaLightbulb,
  'Residential & Commercial': FaHouse,
  'Hybrid & Off-Grid': FaSolarPanel,
  'Electrical Wiring': FaBolt,
  'Inverter Systems': FaPlugCircleBolt,
  'Energy Audits': FaChartLine
}

function ServicesPage() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-8">Services</h1>
        <p className="text-xl text-slate-600 mb-16 max-w-2xl">
          End-to-end execution from design and supply to installation and support.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const ServiceIcon = serviceIcons[service.title]

            return (
              <div key={service.title} className="p-8 rounded-3xl bg-white border border-slate-200 hover:bg-slate-50 transition-all shadow-sm">
                <div className="text-4xl mb-6 text-primary">
                  <ServiceIcon aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesPage
