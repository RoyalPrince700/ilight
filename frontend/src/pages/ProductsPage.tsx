import { products } from '../data/siteData'

function ProductsPage() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-8">Products</h1>
        <p className="text-xl text-slate-600 mb-16 max-w-2xl">
          Modern solar hardware selected for long service life, safety, and performance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div key={product.title} className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-[#00ff89]/50 transition-all group shadow-sm">
              <div className="flex justify-between items-start mb-8">
                <div className="w-12 h-12 rounded-full bg-[#00ff89]/20 flex items-center justify-center text-[#00ff89] font-bold">
                  {index + 1}
                </div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{product.price}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-[#00ff89] transition-colors">{product.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-8">{product.description}</p>
              <button className="text-sm font-bold text-slate-900 border-b border-[#00ff89] pb-1 hover:text-[#00ff89] transition-colors">
                View Specifications
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductsPage
