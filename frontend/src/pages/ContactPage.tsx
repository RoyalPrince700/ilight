function ContactPage() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-8">Get in Touch</h1>
        <p className="text-xl text-slate-600 mb-16">
          Ready to start your solar journey? Contact us for partnerships, consultations, and project opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
              <h3 className="text-[#00ff89] font-bold mb-2">Call Us</h3>
              <p className="text-2xl font-bold">08148411691</p>
            </div>
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
              <h3 className="text-[#00ff89] font-bold mb-2">Email Us</h3>
              <p className="text-xl font-bold break-all">I.lightsolarenergy@gmail.com</p>
            </div>
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
              <h3 className="text-[#00ff89] font-bold mb-2">Visit Us</h3>
              <p className="text-lg text-slate-700">2, Adeyemi Street,<br />Olowora, Berger, Lagos.</p>
            </div>
          </div>

          <form className="space-y-6" onSubmit={(event) => event.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">Name</label>
              <input type="text" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-[#00ff89] transition-colors" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">Email</label>
              <input type="email" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-[#00ff89] transition-colors" placeholder="your@email.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">Message</label>
              <textarea rows={4} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-[#00ff89] transition-colors" placeholder="How can we help you?" />
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

export default ContactPage
