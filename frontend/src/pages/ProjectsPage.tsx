import { projects } from '../data/siteData'

function ProjectsPage() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-8">Our Projects</h1>
        <p className="text-xl text-slate-600 mb-16 max-w-2xl">
          Representative project areas delivered with quality materials and expert teams across Nigeria.
        </p>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <div key={project.title} className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200 aspect-video md:aspect-[2.5/1] shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/40 to-transparent z-10" />
              <div className="absolute inset-0 bg-emerald-50 flex items-center justify-center text-emerald-100 font-bold text-9xl opacity-90">
                {index + 1}
              </div>

              <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20 w-full">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-[#00ff89] text-black text-xs font-bold mb-4">
                      {project.status}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-[#00ff89] transition-colors">{project.title}</h3>
                    <p className="text-slate-200 max-w-xl text-lg">{project.description}</p>
                  </div>
                  <div className="hidden md:block">
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-[#00ff89] group-hover:text-slate-900 transition-all">
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

export default ProjectsPage
