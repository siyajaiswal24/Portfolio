import { useEffect, useRef } from "react"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import { motion, useAnimation, useInView } from "framer-motion"

const projects = [
  {
    title: "AlphaLens",
    description:
      "An advanced AI-powered platform for data visualization, debugging, and deep insights.",
    image: "/images/alphalens.png",
    tech: ["React", "Node.js", "Express", "Tailwind"],
    github: "https://github.com/siyajaiswal24/Alphalens",
    live: "https://alphalens-seven.vercel.app/"
  },
  {
    title: "TradThrift",
    description:
      "A modern thrift store platform where users can buy, sell and rent outfits. Includes outfit planner chatbot and reward based games.",
    image: "/images/trad.png",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "",
    live: ""
  },
  {
    title: "Budget Planner",
    description:
      "A budgeting platform where users can track income and expenses, manage savings and organize finances easily.",
    image: "/images/budgetplanner.png",
    tech: ["PHP", "HTML", "JavaScript", "CSS", "SQL"],
    github: "https://github.com/siyajaiswal24/Budget-Planner",
    live: "https://siyaa-budget.infinityfreeapp.com/"
  },
  {
    title: "Forest Conservation",
    description:
      "A website created to spread awareness about wildlife and forest conservation.",
    image: "/images/wildlife.png",
    tech: [],
    github: "https://forestconservation.my.canva.site/wildlife",
    live: "https://forestconservation.my.canva.site/wildlife"
  },
  {
    title: "Blog Website",
    description:
      "A responsive blogging platform where users can read and publish posts with authentication and database storage.",
    image: "/images/blog.png",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/siyajaiswal24/Blogwebsite",
    live: ""
  },
  {
    title: "Portfolio Website",
    description:
      "My personal developer portfolio showcasing my projects, skills and coding profiles.",
    image: "/images/portfolio.png",
    tech: ["React", "Tailwind", "JavaScript"],
    github: "https://github.com/siyajaiswal24/Portfolio",
    live: "https://portfolio-git-main-siyajaiswal24s-projects.vercel.app/"
  },
  {
    title: "Todo App",
    description:
      "A simple task manager where users can add, update and delete daily tasks.",
    image: "/images/todo.png",
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com/siyajaiswal24/Todo-App",
    live: ""
  },
  {
    title: "Planora",
    description:
      "A modern itinerary planner that generates personalized travel plans based on user preferences and destination insights.",
    image: "/images/planora.png",
    tech: ["React", "Node.js", "Express","APIs"],
    github: "https://github.com/siyajaiswal24/Planora",
    live: "https://travelplanora.vercel.app"
  }
]

function Projects() {
  const scrollRef = useRef(null)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  useEffect(() => {
    const slider = scrollRef.current

    // Pause animation on hover functionality
    let intervalId;
    
    const startScroll = () => {
      intervalId = setInterval(() => {
        if (!slider) return
        slider.scrollBy({ left: 350, behavior: 'smooth' })
        
        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
          // Reset to start when reaching end
          setTimeout(() => {
            slider.scrollTo({ left: 0, behavior: 'smooth' })
          }, 500)
        }
      }, 3000)
    }

    startScroll()

    const handleMouseEnter = () => clearInterval(intervalId)
    const handleMouseLeave = () => startScroll()

    if (slider) {
      slider.addEventListener('mouseenter', handleMouseEnter)
      slider.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      clearInterval(intervalId)
      if (slider) {
        slider.removeEventListener('mouseenter', handleMouseEnter)
        slider.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-16 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-40 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10" ref={containerRef}>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">Projects</span>
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400">
            Some of my recent work and personal projects
          </p>
        </motion.div>

        <div className="relative">
          {/* Scroll indicators */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white dark:from-slate-900 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white dark:from-slate-900 to-transparent z-10 pointer-events-none"></div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, transition: { duration: 0.8, delay: 0.2 } }
            }}
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto pb-10 pt-4 scrollbar-hide snap-x snap-mandatory px-4 items-stretch"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="min-w-[340px] w-[340px] h-[520px] snap-center bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300 overflow-hidden border border-slate-100 dark:border-slate-700 flex flex-col group"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-indigo-900/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-3 text-slate-800 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  {project.tech.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex gap-3 mt-auto pt-4">
                    {/* Code Button */}
                    <a
                      href={project.github || "#"}
                      target={project.github ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl transition-colors shadow-sm font-medium text-sm ${
                        project.github
                          ? "bg-slate-900 dark:bg-slate-700 text-white hover:bg-slate-800 dark:hover:bg-slate-600"
                          : "bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-500 cursor-not-allowed pointer-events-none"
                      }`}
                    >
                      <FaGithub size={16} />
                      Code
                    </a>

                    {/* Live Button */}
                    <a
                      href={project.live || project.github || "#"}
                      target={(project.live || project.github) ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl transition-opacity font-medium text-sm ${
                        project.live || project.github
                          ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:opacity-90 shadow-md shadow-indigo-500/20"
                          : "bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-500 cursor-not-allowed pointer-events-none"
                      }`}
                    >
                      <FaExternalLinkAlt size={14} />
                      Live
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default Projects