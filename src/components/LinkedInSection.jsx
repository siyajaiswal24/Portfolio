function LinkedInSection() {
  return (
    <section className="px-6 md:px-12 pt-6 pb-16">
      <div className="rounded-[40px] p-10 
      bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 
      text-white">

        {/* Heading */}
        <h2 className="text-3xl font-bold mb-10">
          LINKEDIN PROFILE
        </h2>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6">

          <a
            href="https://www.linkedin.com/in/siya-jaiswal/"
            target="_blank"
            className="p-8 rounded-2xl 
            bg-white/5 border border-white/10 
            hover:bg-white/10 transition"
          >
            <h3 className="text-3xl font-bold">1k+</h3>
            <p className="text-sm text-gray-400 mt-2">
              Connections
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/siya-jaiswal/"
            target="_blank"
            className="p-8 rounded-2xl 
            bg-white/5 border border-white/10 
            hover:bg-white/10 transition"
          >
            <h3 className="text-3xl font-bold">20+</h3>
            <p className="text-sm text-gray-400 mt-2">
              Certifications
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/siya-jaiswal/"
            target="_blank"
            className="p-8 rounded-2xl 
            bg-white/5 border border-white/10 
            hover:bg-white/10 transition"
          >
            <h3 className="text-3xl font-bold">50+</h3>
            <p className="text-sm text-gray-400 mt-2">
              Skills
            </p>
          </a>

        </div>

      </div>

    </section>
  )
}

export default LinkedInSection