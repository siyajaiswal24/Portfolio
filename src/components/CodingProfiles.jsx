import { FaGithub } from "react-icons/fa"
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si"
import { FaLinkedin } from "react-icons/fa"

function CodingProfiles() {

  const profiles = [
    {
      name: "GitHub",
      username: "@siyajaiswal24",
      description: "Explore my open-source projects and repositories.",
      icon: <FaGithub size={26} />,
      color: "bg-gray-200 dark:bg-gray-700",
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
      icon: <SiLeetcode size={26} className="text-yellow-500" />,
      color: "bg-yellow-100 dark:bg-yellow-900/30",
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
      icon: <SiGeeksforgeeks size={26} className="text-green-600" />,
      color: "bg-green-100 dark:bg-green-900/30",
      link: "https://www.geeksforgeeks.org/profile/siyajais56fx?tab=activity",
      stats: [
        { label: "Score", value: "Active" },
        { label: "Focus", value: "CS Core" },
        { label: "Topics", value: "DSA, OS, DBMS" }
      ]
    }
    
  ]

  return (
    <section id="codeprofiles" className="pt-20 pb-8 px-6 md:px-12">

      {/* Heading */}
      <h2 className="text-4xl font-bold mb-12 text-blue-500">
        Coding Profiles
      </h2>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">

        {profiles.map((p, i) => (
          <a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-6 rounded-2xl 
            bg-white dark:bg-slate-900 
            border border-gray-200 dark:border-gray-700
            shadow-sm hover:shadow-xl 
            transition-all duration-300 hover:-translate-y-2"
          >

            <div className="flex items-center justify-between mb-4">

  {/* LEFT SIDE (icon + text together) */}
  <div className="flex items-center gap-4">
    
    <div className={`p-3 rounded-xl ${p.color}`}>
      {p.icon}
    </div>

    <div>
      <h3 className="text-lg font-semibold text-black dark:text-white">
        {p.name}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        {p.username}
      </p>
      <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
  {p.description}
</p>
    </div>

  </div>

  {/* RIGHT SIDE (arrow) */}
  <span className="text-gray-500 group-hover:text-blue-500">
    ↗
  </span>

</div>
            {/* Divider */}
            <div className="my-4 border-t border-gray-200 dark:border-gray-700"></div>

            {/* Stats */}
            <div className="space-y-2 text-sm">
              {p.stats.map((s, idx) => (
                <div key={idx} className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    {s.label}
                  </span>
                  <span className="font-medium text-black dark:text-white">
                    {s.value}
                  </span>
                </div>
              ))}
            </div>

          </a>
        ))}

      </div>

    </section>
  )
}

export default CodingProfiles