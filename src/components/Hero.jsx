import { TypeAnimation } from "react-type-animation"
import Lottie from "lottie-react"
import codingAnimation from "../assets/animations/coding.json"
import { motion } from "framer-motion"

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="home" className="relative min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 overflow-hidden flex items-center pt-20">
      
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 grid md:grid-cols-2 items-center gap-16">
        
        <motion.div 
          className="flex justify-center md:order-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full blur-2xl opacity-20 animate-float"></div>
            <Lottie animationData={codingAnimation} className="w-[520px] relative z-10 drop-shadow-2xl animate-float" />
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="md:order-1"
        >
          <motion.p variants={itemVariants} className="text-3xl mb-4 font-pacifico text-indigo-600 dark:text-indigo-400">
            Hi, I'm Siya
          </motion.p>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
            I Build <br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient-x">
              Modern Web
            </span> <br/>
            Applications
          </motion.h1>

          <motion.div variants={itemVariants} className="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-400 mb-10 h-8">
            <TypeAnimation
              sequence={[
                "Aspiring Web Developer",
                2000,
                "DSA Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="block"
              repeat={Infinity}
            />
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <button
              onClick={() => {
                document.getElementById("projects").scrollIntoView({ behavior: "smooth" })
              }}
              className="px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-105 transition-all duration-300"
            >
              View Projects
            </button>

            <button
              onClick={() => window.open("/certificates/siyafinalcv.pdf")}
              className="px-8 py-3.5 bg-white dark:bg-slate-900 border-2 border-indigo-100 dark:border-slate-800 rounded-full font-semibold shadow-sm hover:border-indigo-300 dark:hover:border-indigo-500 hover:scale-105 transition-all duration-300"
            >
              Download Resume
            </button>

            <button
              onClick={() => {
                document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
              }}
              className="px-8 py-3.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-semibold shadow-lg hover:scale-105 transition-all duration-300"
            >
              Say Hello
            </button>
          </motion.div>

        </motion.div>

      </div>
    </section>
  )
}

export default Hero