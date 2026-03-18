function AboutPage() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-12">Driven by Innovation & Integrity</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-slate-700 mb-12 leading-relaxed">
            Founded with a passion for sustainable development and energy independence, I-Light Solar and Electrical Energy Nig. Ltd specializes in the design, supply, installation, and maintenance of solar and electrical systems for residential, commercial, industrial, and public sector clients.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
              <h3 className="text-[#00ff89] font-bold text-lg mb-4 uppercase tracking-widest">Our Mission</h3>
              <p className="text-slate-700">
                To provide reliable, efficient, and sustainable solar and electrical energy solutions that empower communities, support businesses, and contribute to national development.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
              <h3 className="text-[#00ff89] font-bold text-lg mb-4 uppercase tracking-widest">Our Vision</h3>
              <p className="text-slate-700">
                To be a leading renewable energy and electrical engineering company in Nigeria, recognized for quality, innovation, and customer satisfaction.
              </p>
            </div>
          </div>

          <div className="border-l-4 border-[#00ff89] pl-8 py-4 mb-12">
            <h3 className="text-2xl font-bold mb-4">Director's Message</h3>
            <p className="text-slate-600 italic">
              "At I-Light Solar and Electrical Energy Nig. Ltd, we believe that access to reliable energy is fundamental to growth and development. Our commitment is to deliver innovative and sustainable solutions that not only meet the present energy demands but also secure a brighter future."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPage
