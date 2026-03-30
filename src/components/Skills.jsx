import { useState } from "react"

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaJava
} from "react-icons/fa"

import {
  SiCplusplus,
  SiC,
  SiPython,
  SiPhp,
  SiMongodb,
  SiMysql
} from "react-icons/si"

import { VscVscode } from "react-icons/vsc"

const skillsData = [
  { name: "C", icon: SiC, category: "languages", color: "text-blue-400" },
  { name: "C++", icon: SiCplusplus, category: "languages", color: "text-blue-500" },
  { name: "Java", icon: FaJava, category: "languages", color: "text-red-500" },
  { name: "Python", icon: SiPython, category: "languages", color: "text-yellow-400" },
  { name: "JavaScript", icon: FaJs, category: "languages", color: "text-yellow-300" },

  { name: "HTML", icon: FaHtml5, category: "frontend", color: "text-orange-500" },
  { name: "CSS", icon: FaCss3Alt, category: "frontend", color: "text-blue-400" },
  { name: "React", icon: FaReact, category: "frontend", color: "text-cyan-400" },

  { name: "Node.js", icon: FaNodeJs, category: "backend", color: "text-green-500" },
  { name: "PHP", icon: SiPhp, category: "backend", color: "text-indigo-400" },

  { name: "SQL", icon: SiMysql, category: "database", color: "text-blue-600" },
  { name: "MongoDB", icon: SiMongodb, category: "database", color: "text-green-600" },
  { name: "DBMS", icon: FaDatabase, category: "database", color: "text-purple-500" },

  { name: "Git", icon: FaGitAlt, category: "tools", color: "text-orange-500" },
  { name: "GitHub", icon: FaGithub, category: "tools", color: "text-gray-300" },
  { name: "VS Code", icon: VscVscode, category: "tools", color: "text-blue-500" }
]
function Skills() {
  const [activeCategory, setActiveCategory] = useState("languages")

  const filteredSkills = skillsData.filter(
    skill => skill.category === activeCategory
  )

  return (
    <section
      id="skills"
      className="py-24 px-6 md:px-16 bg-slate-100 dark:bg-slate-950 text-black dark:text-white"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-6">
          Skills & Expertise
        </h2>

        <p className="text-center text-gray-400 mb-12">
          Technologies and tools I use to build modern applications
        </p>

        {/* Category Buttons */}

        <div className="flex flex-wrap justify-center gap-4 mb-16">

          <button
            onClick={() => setActiveCategory("languages")}
            className={`skill-tab ${activeCategory === "languages" ? "active-tab" : ""}`}
          >
            Programming Languages
          </button>

          <button
            onClick={() => setActiveCategory("frontend")}
            className={`skill-tab ${activeCategory === "frontend" ? "active-tab" : ""}`}
          >
            Frontend
          </button>

          <button
            onClick={() => setActiveCategory("backend")}
            className={`skill-tab ${activeCategory === "backend" ? "active-tab" : ""}`}
          >
            Backend
          </button>

          <button
            onClick={() => setActiveCategory("database")}
            className={`skill-tab ${activeCategory === "database" ? "active-tab" : ""}`}
          >
            Database
          </button>

          <button
            onClick={() => setActiveCategory("tools")}
            className={`skill-tab ${activeCategory === "tools" ? "active-tab" : ""}`}
          >
            Tools & Technologies
          </button>

        </div>

        {/* Skills Grid */}

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">

          {filteredSkills.map((skill, index) => {
            const Icon = skill.icon

            return (
              <div key={index} className="skill-card">
                <Icon size={40} className={skill.color} />
                <p className="text-black dark:text-white">{skill.name}</p>
              </div>
            )
          })}

        </div>

      </div>
    </section>
  )
}

export default Skills