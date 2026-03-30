import { useState, useEffect } from "react"
import { FaMoon, FaSun } from "react-icons/fa"

function Navbar({ darkMode, setDarkMode }) {

  const [active, setActive] = useState("home")

  useEffect(() => {

    const handleScroll = () => {

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

  return (

    <nav className="fixed w-full top-0 bg-white dark:bg-slate-950 shadow z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        <h1 className="text-3xl mb-4" style={{ fontFamily: "Pacifico" }}>
          Siya Jaiswal
        </h1>

        <ul className="flex gap-8 font-medium">

          <li>
            <a href="#home" className={`nav-link ${active === "home" ? "active-link" : ""}`}>
              Home
            </a>
          </li>

          <li>
            <a href="#about" className={`nav-link ${active === "about" ? "active-link" : ""}`}>
              About
            </a>
          </li>

          <li>
            <a href="#skills" className={`nav-link ${active === "skills" ? "active-link" : ""}`}>
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className={`nav-link ${active === "projects" ? "active-link" : ""}`}>
              Projects
            </a>
          </li>

          <li>
            <a href="#codeprofiles" className={`nav-link ${active === "codeprofiles" ? "active-link" : ""}`}>
              Code Profiles
            </a>
          </li>

          <li>
            <a href="#certificates" className={`nav-link ${active === "certificates" ? "active-link" : ""}`}>
              Certificates
            </a>
          </li>

          <li>
            <a href="#contact" className={`nav-link ${active === "contact" ? "active-link" : ""}`}>
              Contact
            </a>
          </li>

        </ul>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-xl"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

      </div>

    </nav>

  )
}

export default Navbar