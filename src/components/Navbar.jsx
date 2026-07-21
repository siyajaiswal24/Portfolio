import { useState, useEffect } from "react"
import { FaMoon, FaSun } from "react-icons/fa"
import { motion } from "framer-motion"

function Navbar({ darkMode, setDarkMode }) {

  const [active, setActive] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "profiles",
        "codeprofiles",
        "certificates",
        "contact"
      ]

      sections.forEach(section => {

        const element = document.getElementById(section)

        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(section)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "codeprofiles", label: "Code Profiles" },
    { id: "certificates", label: "Certificates" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/70 dark:bg-slate-950/70 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8">
        
        <motion.h1 
          whileHover={{ scale: 1.05 }}
          className="text-3xl font-pacifico bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 cursor-pointer"
          onClick={() => {
            document.getElementById("home").scrollIntoView({ behavior: "smooth" })
          }}
        >
          Siya Jaiswal
        </motion.h1>

        <ul className="flex gap-8 font-medium">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a 
                href={`#${link.id}`} 
                className={`relative px-1 py-2 transition-colors duration-300 ${
                  active === link.id ? "text-indigo-600 dark:text-indigo-400" : "text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-300"
                }`}
              >
                {link.label}
                {active === link.id && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute left-0 bottom-0 w-full h-[2px] bg-indigo-600 dark:bg-indigo-400"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <motion.button
          whileHover={{ scale: 1.1, rotate: 15 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-indigo-50 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-slate-700"
        >
          {darkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
        </motion.button>

      </div>
    </motion.nav>
  )
}

export default Navbar