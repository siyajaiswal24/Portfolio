import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaJava,
  FaBootstrap,
  FaLaravel
} from "react-icons/fa"

import {
  SiCplusplus,
  SiC,
  SiPython,
  SiPhp,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiVercel,
  SiPostman,
  SiRender,
  SiExpress
} from "react-icons/si"

import { VscVscode } from "react-icons/vsc"

const skillsData = [
  { name: "C", icon: SiC, category: "languages", color: "text-blue-500" },
  { name: "C++", icon: SiCplusplus, category: "languages", color: "text-blue-600" },
  { name: "Java", icon: FaJava, category: "languages", color: "text-red-500" },
  { name: "Python", icon: SiPython, category: "languages", color: "text-yellow-500" },
  { name: "JavaScript", icon: FaJs, category: "languages", color: "text-yellow-400" },
  { name: "PHP", icon: SiPhp, category: "backend", color: "text-indigo-500" },

  { name: "HTML", icon: FaHtml5, category: "frontend", color: "text-orange-500" },
  { name: "CSS", icon: FaCss3Alt, category: "frontend", color: "text-blue-500" },
  { name: "React", icon: FaReact, category: "frontend", color: "text-cyan-400" },
  { name: "Bootstrap", icon: FaBootstrap, category: "frontend", color: "text-indigo-600" },

  { name: "Node.js", icon: FaNodeJs, category: "backend", color: "text-green-500" },
  { name: "Express.js", icon: SiExpress, category: "backend", color: "text-gray-600 dark:text-gray-300" },
  { name: "Laravel", icon: FaLaravel, category: "backend", color: "text-red-600" },
  { name: "Tailwind CSS", icon: SiTailwindcss, category: "frontend", color: "text-teal-400" },

  { name: "SQL", icon: SiMysql, category: "database", color: "text-blue-600" },
  { name: "MongoDB", icon: SiMongodb, category: "database", color: "text-green-600" },
  { name: "DBMS", icon: FaDatabase, category: "database", color: "text-purple-500" },

  { name: "Git", icon: FaGitAlt, category: "tools", color: "text-orange-600" },
  { name: "GitHub", icon: FaGithub, category: "tools", color: "text-gray-800 dark:text-gray-200" },
  { name: "VS Code", icon: VscVscode, category: "tools", color: "text-blue-500" },
  { name: "Vercel", icon: SiVercel, category: "tools", color: "text-black dark:text-white" },
  { name: "Render", icon: SiRender, category: "tools", color: "text-purple-600" },
  { name: "Postman", icon: SiPostman, category: "tools", color: "text-orange-500" }
]

function Skills() {
  const [activeCategory, setActiveCategory] = useState("languages")

  const filteredSkills = skillsData.filter(
    skill => skill.category === activeCategory
  )

  const categories = [
    { id: "languages", label: "Languages" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "database", label: "Database" },
    { id: "tools", label: "Tools" }
  ];

  return (
    <section
      id="skills"
      className="py-24 px-6 md:px-16 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 relative"
    >
      <div className="max-w-7xl mx-auto relative z-10">

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Skills & <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500">Expertise</span>
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400">
            Technologies and tools I use to build modern applications
          </p>
        </motion.div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat.id 
                  ? "text-white shadow-lg shadow-indigo-500/30" 
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
              }`}
            >
              {activeCategory === cat.id && (
                <motion.div
                  layoutId="active-skill-tab"
                  className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                  initial={false}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <motion.div 
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="flex flex-col items-center justify-center gap-4 p-6 rounded-2xl bg-white dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-indigo-300 dark:hover:border-indigo-500/50 transition-all cursor-pointer group"
                >
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/30 transition-colors">
                    <Icon size={44} className={`${skill.color} transition-transform group-hover:scale-110 duration-300`} />
                  </div>
                  <p className="font-semibold text-slate-700 dark:text-slate-300">{skill.name}</p>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}

export default Skills