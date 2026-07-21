import { FaGithub } from "react-icons/fa"
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si"
import { motion } from "framer-motion"

function CodingProfiles() {

  const profiles = [
    {
      name: "GitHub",
      username: "@siyajaiswal24",
      description: "Explore my open-source projects and repositories.",
      icon: <FaGithub size={28} />,
      color: "from-gray-700 to-gray-900",
      iconColor: "text-white",
      link: "https://github.com/siyajaiswal24",
      stats: [
        { label: "Repositories", value: "10+" },
        { label: "Contributions", value: "200+" },
        { label: "Top Language", value: "Java" }
      ]
    },
    {
      name: "LeetCode",
      username: "@SiyaJaiswal",
      description: "Solving DSA problems daily and improving logic.",
      icon: <SiLeetcode size={28} />,
      color: "from-yellow-400 to-orange-500",
      iconColor: "text-white",
      link: "https://leetcode.com/u/xXAYqxrWje/",
      stats: [
        { label: "Problems", value: "150+" },
        { label: "Focus", value: "DSA" },
        { label: "Streak", value: "Daily" }
      ]
    },
    {
      name: "GeeksforGeeks",
      username: "@SiyaJaiswal",
      description: "Practicing CS fundamentals and interview prep.",
      icon: <SiGeeksforgeeks size={28} />,
      color: "from-green-500 to-emerald-700",
      iconColor: "text-white",
      link: "https://www.geeksforgeeks.org/profile/siyajais56fx?tab=activity",
      stats: [
        { label: "Score", value: "Active" },
        { label: "Focus", value: "CS Core" },
        { label: "Topics", value: "DSA, OS, DBMS" }
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section id="codeprofiles" className="py-24 px-6 md:px-16 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Coding <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">Profiles</span>
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400">
            My active presence on competitive programming platforms
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {profiles.map((p, i) => (
            <motion.a
              key={i}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:border-blue-300 dark:hover:border-blue-500/50 transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${p.color} rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`}></div>

              <div className="flex items-center justify-between mb-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div className={`p-3.5 rounded-2xl bg-gradient-to-br ${p.color} ${p.iconColor} shadow-lg shadow-black/10`}>
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      {p.username}
                    </p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                  ↗
                </div>
              </div>

              <p className="mb-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed relative z-10">
                {p.description}
              </p>

              <div className="my-6 border-t border-slate-100 dark:border-slate-800 relative z-10"></div>

              {/* Stats */}
              <div className="space-y-3 text-sm relative z-10">
                {p.stats.map((s, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <span className="text-slate-500 dark:text-slate-400">
                      {s.label}
                    </span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                      {s.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default CodingProfiles