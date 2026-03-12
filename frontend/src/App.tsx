import { NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import heroImage from './assets/hero.png'

const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

const services = [
  {
    title: 'Solar Street Light',
    description: 'Design and deployment of durable street lighting systems for estates, roads, and institutions.',
    icon: '💡'
  },
  {
    title: 'Residential & Commercial',
    description: 'Reliable power architecture tailored to homes, offices, retail spaces, and mixed-use buildings.',
    icon: '🏠'
  },
  {
    title: 'Hybrid & Off-Grid',
    description: 'Flexible systems that combine batteries, solar generation, and backup integration for continuity.',
    icon: '🔋'
  },
  {
    title: 'Electrical Wiring',
    description: 'Safety-first electrical works delivered to modern engineering and regulatory standards.',
    icon: '⚡'
  },
  {
    title: 'Inverter Systems',
    description: 'High-efficiency inverter and battery setup optimized for performance and uptime.',
    icon: '🔌'
  },
  {
    title: 'Energy Audits',
    description: 'Professional analysis to reduce waste, improve system sizing, and optimize energy spending.',
    icon: '📊'
  },
]

const products = [
  {
    title: 'Monocrystalline Panels',
    description: 'Premium high-output panels designed for long-term efficiency and weather resilience.',
    price: 'High Efficiency'
  },
  {
    title: 'Hybrid Inverters',
    description: 'Intelligent inverter systems for seamless switching between solar, battery, and utility sources.',
    price: 'Smart Control'
  },
  {
    title: 'Lithium Batteries',
    description: 'Energy storage options selected for safety, reliability, and scalable backup performance.',
    price: 'Long Life'
  },
  {
    title: 'All-in-One Lights',
    description: 'Compact integrated lighting products for roads, compounds, schools, and community spaces.',
    price: 'Integrated'
  },
]

const projects = [
  {
    title: 'Urban Residential',
    description: 'Clean energy solutions enabling uninterrupted home power and lower monthly energy costs.',
    status: 'Completed'
  },
  {
    title: 'Commercial Power',
    description: 'Business-grade solar systems reducing downtime and supporting continuous operations.',
    status: 'Ongoing'
  },
  {
    title: 'Public Lighting',
    description: 'Street light and public-use projects that improve safety and reduce grid dependence.',
    status: 'Completed'
  },
]

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#00ff89] selection:text-black">
      <ScrollToTop />
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-[#00ff89] rounded-lg flex items-center justify-center text-black font-bold text-xl group-hover:shadow-[0_0_15px_#00ff89] transition-all duration-300">
              I
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-lg tracking-tight group-hover:text-[#00ff89] transition-colors">I-LIGHT</span>
              <span className="text-[10px] text-gray-400 uppercase tracking-widest">Solar Energy</span>
            </div>
          </NavLink>
          
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'About', 'Projects', 'Products', 'Services', 'Contact'].map((item) => (
              <NavLink 
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={({ isActive }) => 
                  `text-sm font-medium transition-all duration-300 hover:text-[#00ff89] ${isActive ? 'text-[#00ff89]' : 'text-gray-300'}`
                }
              >
                {item}
              </NavLink>
            ))}
          </div>

          <NavLink to="/contact" className="hidden md:block px-6 py-2 bg-white/5 hover:bg-[#00ff89] hover:text-black border border-white/10 hover:border-[#00ff89] rounded-full text-sm font-medium transition-all duration-300">
            Get a Quote
          </NavLink>
        </div>
      </nav>

      <main className="pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <footer className="border-t border-white/10 bg-black py-20 mt-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-6">I-LIGHT SOLAR<span className="text-[#00ff89]">.</span></h3>
            <p className="text-gray-400 max-w-sm mb-8">
              Forward-thinking renewable energy and electrical engineering company committed to delivering reliable, sustainable, and cost-effective power solutions across Nigeria.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#00ff89] hover:text-black transition-colors cursor-pointer">
                <span className="sr-only">Facebook</span>
                f
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#00ff89] hover:text-black transition-colors cursor-pointer">
                <span className="sr-only">Twitter</span>
                t
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#00ff89] hover:text-black transition-colors cursor-pointer">
                <span className="sr-only">Instagram</span>
                i
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-[#00ff89]">Contact</h4>
            <div className="space-y-4 text-gray-400">
              <p>2, Adeyemi Street,<br/>Olowora, Berger, Lagos</p>
              <p className="hover:text-white transition-colors cursor-pointer">08148411691</p>
              <p className="hover:text-white transition-colors cursor-pointer">I.lightsolarenergy@gmail.com</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-[#00ff89]">Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><NavLink to="/about" className="hover:text-white transition-colors">About Us</NavLink></li>
              <li><NavLink to="/services" className="hover:text-white transition-colors">Services</NavLink></li>
              <li><NavLink to="/projects" className="hover:text-white transition-colors">Projects</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-white transition-colors">Contact</NavLink></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-12 mt-12 border-t border-white/5 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} I-Light Solar & Electrical Energy Nig. Ltd. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

function HomePage() {
  return (
    <>
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00ff89]/10 to-transparent opacity-20" />
        <div className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay" style={{ backgroundImage: `url(${heroImage})` }} />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full border border-[#00ff89]/30 bg-[#00ff89]/10 text-[#00ff89] text-sm font-medium mb-8 animate-fade-in-up">
            Powering The Future
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
            Sustainable <br/>
            Energy Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 font-light">
            We deliver reliable solar and electrical engineering solutions with precision, speed, and long-term support across Nigeria.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <NavLink to="/contact" className="px-8 py-4 bg-[#00ff89] text-black rounded-full font-bold hover:bg-[#00cc6d] transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(0,255,137,0.3)]">
              Start Your Project
            </NavLink>
            <NavLink to="/services" className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold hover:bg-white/10 transition-all">
              Explore Services
            </NavLink>
          </div>
        </div>
      </section>

      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Quality', desc: 'Premium materials and skilled workmanship tailored to your needs.' },
              { title: 'Efficiency', desc: 'Cost-effective solutions that maximize energy output and savings.' },
              { title: 'Support', desc: 'Comprehensive maintenance and technical support for peace of mind.' }
            ].map((item, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-[#00ff89]/30 transition-all duration-500 hover:-translate-y-2">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-[#00ff89] transition-colors">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
              <p className="text-gray-400 max-w-md">Comprehensive energy solutions for every need.</p>
            </div>
            <NavLink to="/services" className="text-[#00ff89] hover:text-white transition-colors mt-4 md:mt-0 flex items-center gap-2">
              View all services <span>→</span>
            </NavLink>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service, i) => (
              <div key={i} className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 hover:border-[#00ff89]/30 transition-all group">
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-[#00ff89] transition-colors">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function AboutPage() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-12">Driven by Innovation & Integrity</h1>
        
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Founded with a passion for sustainable development and energy independence, I-Light Solar and Electrical Energy Nig. Ltd specializes in the design, supply, installation, and maintenance of solar and electrical systems for residential, commercial, industrial, and public sector clients.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <h3 className="text-[#00ff89] font-bold text-lg mb-4 uppercase tracking-widest">Our Mission</h3>
              <p className="text-gray-300">
                To provide reliable, efficient, and sustainable solar and electrical energy solutions that empower communities, support businesses, and contribute to national development.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <h3 className="text-[#00ff89] font-bold text-lg mb-4 uppercase tracking-widest">Our Vision</h3>
              <p className="text-gray-300">
                To be a leading renewable energy and electrical engineering company in Nigeria, recognized for quality, innovation, and customer satisfaction.
              </p>
            </div>
          </div>

          <div className="border-l-4 border-[#00ff89] pl-8 py-4 mb-12">
            <h3 className="text-2xl font-bold mb-4">Director's Message</h3>
            <p className="text-gray-400 italic">
              "At I-Light Solar and Electrical Energy Nig. Ltd, we believe that access to reliable energy is fundamental to growth and development. Our commitment is to deliver innovative and sustainable solutions that not only meet the present energy demands but also secure a brighter future."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectsPage() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-8">Our Projects</h1>
        <p className="text-xl text-gray-400 mb-16 max-w-2xl">
          Representative project areas delivered with quality materials and expert teams across Nigeria.
        </p>
        
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/5 aspect-video md:aspect-[2.5/1]">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
              {/* Placeholder for project images */}
              <div className="absolute inset-0 bg-gray-800 flex items-center justify-center text-gray-700 font-bold text-9xl opacity-20">
                {i + 1}
              </div>
              
              <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20 w-full">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-[#00ff89] text-black text-xs font-bold mb-4">
                      {project.status}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-[#00ff89] transition-colors">{project.title}</h3>
                    <p className="text-gray-300 max-w-xl text-lg">{project.description}</p>
                  </div>
                  <div className="hidden md:block">
                    <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#00ff89] group-hover:text-black transition-all">
                      →
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductsPage() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-8">Products</h1>
        <p className="text-xl text-gray-400 mb-16 max-w-2xl">
          Modern solar hardware selected for long service life, safety, and performance.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-[#00ff89]/50 transition-all group">
              <div className="flex justify-between items-start mb-8">
                <div className="w-12 h-12 rounded-full bg-[#00ff89]/20 flex items-center justify-center text-[#00ff89] font-bold">
                  {i + 1}
                </div>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{product.price}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-[#00ff89] transition-colors">{product.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-8">{product.description}</p>
              <button className="text-sm font-bold text-white border-b border-[#00ff89] pb-1 hover:text-[#00ff89] transition-colors">
                View Specifications
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServicesPage() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-8">Services</h1>
        <p className="text-xl text-gray-400 mb-16 max-w-2xl">
          End-to-end execution from design and supply to installation and support.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all">
              <div className="text-4xl mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactPage() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-8">Get in Touch</h1>
        <p className="text-xl text-gray-400 mb-16">
          Ready to start your solar journey? Contact us for partnerships, consultations, and project opportunities.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/5">
              <h3 className="text-[#00ff89] font-bold mb-2">Call Us</h3>
              <p className="text-2xl font-bold">08148411691</p>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/5">
              <h3 className="text-[#00ff89] font-bold mb-2">Email Us</h3>
              <p className="text-xl font-bold break-all">I.lightsolarenergy@gmail.com</p>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/5">
              <h3 className="text-[#00ff89] font-bold mb-2">Visit Us</h3>
              <p className="text-lg text-gray-300">2, Adeyemi Street,<br/>Olowora, Berger, Lagos.</p>
            </div>
          </div>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00ff89] transition-colors" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
              <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00ff89] transition-colors" placeholder="your@email.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00ff89] transition-colors" placeholder="How can we help you?" />
            </div>
            <button className="w-full py-4 bg-[#00ff89] text-black font-bold rounded-xl hover:bg-[#00cc6d] transition-colors shadow-[0_0_20px_rgba(0,255,137,0.2)]">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default App
