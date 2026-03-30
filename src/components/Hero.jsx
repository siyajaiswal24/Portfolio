import { TypeAnimation } from "react-type-animation"
import Lottie from "lottie-react"
import codingAnimation from "../assets/animations/coding.json"
import { motion } from "framer-motion"

function Hero() {

  const particlesInit = async (engine) => {
  await loadSlim(engine)
}

  return (
  <section className="relative min-h-screen bg-white dark:bg-slate-950 text-black dark:text-white">

     <div className="relative z-10 grid md:grid-cols-2 items-center min-h-screen gap-20 px-16">

        <div className="flex justify-center">
          <Lottie animationData={codingAnimation} className="w-[520px]" />
        </div>

        <div>

          <p className="text-3xl mb-4" style={{ fontFamily: "Pacifico" }}>
            Hi, I'm Siya
          </p>

          <h1 className="text-6xl font-bold leading-tight mb-6">
            I Build Modern Web Applications
          </h1>

          <TypeAnimation
            sequence={[
              "Aspiring Web Developer | DSA Enthusiast",
              2000,
            ]}
            wrapper="span"
            speed={50}
            className="text-2xl font-semibold text-indigo-400 mb-10 block"
            repeat={Infinity}
          />

          <div className="flex gap-6">

            <button
    onClick={() => {
      document.getElementById("projects").scrollIntoView({ behavior: "smooth" })
    }}
    className="px-7 py-3 bg-indigo-600 rounded-lg text-lg hover:bg-indigo-500 transition"
  >
    View Projects
  </button>

            <button
    onClick={() => window.open("/certificates/siyafinalcv.docx")}
    className="px-7 py-3 border border-black dark:border-white rounded-lg text-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
  >
    Download Resume
  </button>

            <button
    onClick={() => {
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
    }}
    className="px-7 py-3 bg-green-500 rounded-lg text-lg hover:bg-green-400 transition"
  >
    Say Hello
  </button>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero