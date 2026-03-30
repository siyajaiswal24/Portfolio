import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import CodingProfiles from "./components/CodingProfiles"
import LinkedInSection from "./components/LinkedInSection"
import Certificates from "./components/Certificates"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Cursor from "./components/cursor"

function App() {

  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-black dark:text-white">

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <CodingProfiles />
      <LinkedInSection />
      <Certificates />
      <Contact />
      <Footer />
      <Cursor />
    </div>
  )
}

export default App