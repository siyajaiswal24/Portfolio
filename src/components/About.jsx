import { motion } from "framer-motion"

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section
      id="about"
      className="py-24 px-8 md:px-16 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 dark:bg-indigo-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10"
      >
        {/* LEFT SIDE */}
        <div>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold mb-8">
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">Me</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg text-slate-600 dark:text-slate-300 mb-10 leading-relaxed">
            I am Siya Jaiswal, a 3rd year BTech student passionate about
            building modern web applications and solving complex problems
            using Data Structures and Algorithms. I enjoy turning creative
            ideas into real-world web solutions using technologies like
            React, Node.js and modern development tools.
          </motion.p>

          {/* INFO CARDS */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-slate-800 dark:to-indigo-900/30 border border-indigo-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-indigo-900 dark:text-indigo-300 mb-2">Education</h3>
              <p className="text-slate-700 dark:text-slate-400 font-medium">3rd Year BTech</p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-100 dark:from-slate-800 dark:to-purple-900/30 border border-purple-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-purple-900 dark:text-purple-300 mb-2">Focus</h3>
              <p className="text-slate-700 dark:text-slate-400 font-medium">Web Development</p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-teal-50 to-emerald-100 dark:from-slate-800 dark:to-teal-900/30 border border-teal-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-teal-900 dark:text-teal-300 mb-2">Experience</h3>
              <p className="text-slate-700 dark:text-slate-400 font-medium">Full Stack Projects</p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-red-100 dark:from-slate-800 dark:to-orange-900/30 border border-orange-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-orange-900 dark:text-orange-300 mb-2">Passion</h3>
              <p className="text-slate-700 dark:text-slate-400 font-medium">Problem Solving</p>
            </div>
          </motion.div>

          {/* CONTACT INFO */}
          <motion.div variants={itemVariants} className="mt-12 space-y-4">
            <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
              <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-slate-800 flex items-center justify-center text-xl">📧</div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Email</p>
                <p className="font-semibold">siyajaiswal0324@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
              <div className="w-12 h-12 rounded-full bg-pink-100 dark:bg-slate-800 flex items-center justify-center text-xl">📍</div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Location</p>
                <p className="font-semibold">Phagwara, Punjab</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div 
          variants={itemVariants}
          className="flex justify-center md:justify-end"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <img
              src="/images/siya.jpg"
              className="relative w-[340px] rounded-2xl object-cover shadow-2xl ring-1 ring-black/5 dark:ring-white/10"
              alt="Siya"
            />
          </div>
        </motion.div>

      </motion.div>
    </section>
  )
}

export default About