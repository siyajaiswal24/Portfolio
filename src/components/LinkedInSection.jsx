import { motion } from "framer-motion"

function LinkedInSection() {
  return (
    <section className="px-6 md:px-16 pt-12 pb-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[3rem] p-10 md:p-16 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white relative overflow-hidden shadow-2xl shadow-indigo-900/20"
        >
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-12">
            
            <div className="md:w-1/3 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
                LinkedIn Profile
              </h2>
              <p className="text-indigo-100 text-lg mb-8">
                Let's connect professionally and grow together in the tech industry.
              </p>
              <a
                href="https://www.linkedin.com/in/siya-jaiswal/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-white text-indigo-700 font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                Connect with me
              </a>
            </div>

            <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 w-full">
              
              <a
                href="https://www.linkedin.com/in/siya-jaiswal/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 md:p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 text-center flex flex-col justify-center"
              >
                <h3 className="text-4xl md:text-5xl font-black mb-2 group-hover:scale-110 transition-transform">1k+</h3>
                <p className="text-sm md:text-base text-indigo-100 font-medium">Connections</p>
              </a>

              <a
                href="https://www.linkedin.com/in/siya-jaiswal/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 md:p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 text-center flex flex-col justify-center"
              >
                <h3 className="text-4xl md:text-5xl font-black mb-2 group-hover:scale-110 transition-transform">20+</h3>
                <p className="text-sm md:text-base text-indigo-100 font-medium">Certifications</p>
              </a>

              <a
                href="https://www.linkedin.com/in/siya-jaiswal/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 md:p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 text-center flex flex-col justify-center col-span-2 md:col-span-1"
              >
                <h3 className="text-4xl md:text-5xl font-black mb-2 group-hover:scale-110 transition-transform">50+</h3>
                <p className="text-sm md:text-base text-indigo-100 font-medium">Skills verified</p>
              </a>

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default LinkedInSection