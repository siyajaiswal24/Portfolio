import { useEffect, useRef } from "react"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const projects = [
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
    github: "",
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
    github: "",
    live: ""
  },
  {
    title: "Todo App",
    description:
      "A simple task manager where users can add, update and delete daily tasks.",
    image: "/images/todo.png",
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com/siyajaiswal24/Todo-App",
    live: ""
  }
]

function Projects() {
  const scrollRef = useRef(null)

  useEffect(() => {
    const slider = scrollRef.current

    const interval = setInterval(() => {
      if (!slider) return

      slider.scrollLeft += 350

      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
        slider.scrollLeft = 0
      }
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-16 bg-white dark:bg-slate-900 text-black dark:text-white"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16">
          Projects
        </h2>

        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-6 scrollbar-hide"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="min-w-[340px] bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden"
            >

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">

                <h3 className="text-xl font-bold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {project.description}
                </p>

                {project.tech.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-gray-200 dark:bg-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex gap-4 mt-4">

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition"
                    >
                      <FaExternalLinkAlt />
                      Live
                    </a>
                  )}

                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects