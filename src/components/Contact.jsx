import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"
import { motion } from "framer-motion"

function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-16 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Get In <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">Touch</span>
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400">
            Let’s create something amazing together
          </p>
        </motion.div>

        {/* Layout */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          
          {/* LEFT SIDE */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4">
                Let’s work together
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
              </p>
            </motion.div>

            <div className="space-y-4 pt-4">
              {/* EMAIL */}
              <motion.div variants={itemVariants} className="group flex items-center gap-6 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-500/50 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xl group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Email</p>
                  <p className="font-semibold text-slate-800 dark:text-slate-200">siyajaiswal0324@gmail.com</p>
                </div>
              </motion.div>

              {/* PHONE */}
              <motion.div variants={itemVariants} className="group flex items-center gap-6 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-500/50 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-xl group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                  <FaPhone />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Phone</p>
                  <p className="font-semibold text-slate-800 dark:text-slate-200">+91 9431 954 XXX</p>
                </div>
              </motion.div>

              {/* LOCATION */}
              <motion.div variants={itemVariants} className="group flex items-center gap-6 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-500/50 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center text-xl group-hover:scale-110 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Location</p>
                  <p className="font-semibold text-slate-800 dark:text-slate-200">Punjab, India</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="space-y-6 p-8 md:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none">
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-blue-500 text-slate-900 dark:text-white outline-none transition-all placeholder:text-slate-400"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Your Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-blue-500 text-slate-900 dark:text-white outline-none transition-all placeholder:text-slate-400"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">Your Message</label>
                <textarea
                  rows="5"
                  placeholder="How can I help you?"
                  className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-blue-500 text-slate-900 dark:text-white outline-none transition-all placeholder:text-slate-400 resize-none"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 text-lg font-bold rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all mt-4"
              >
                Send Message
              </motion.button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Contact