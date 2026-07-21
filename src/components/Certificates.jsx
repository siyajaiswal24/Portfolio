import { useState } from "react"
import { FaAward, FaExternalLinkAlt } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"

function Certifications() {

  const [showAll, setShowAll] = useState(false)

  const certificates = [
    {
      title: "C++ Programming",
      org: "Lovely Professional University",
      date: "DEC 2025",
      tag: "PROGRAMMING",
      link: "/certificates/cpp.pdf"
    },
    {
      title: "Java Programming",
      org: "Lovely Professional University",
      date: "MAY 2025",
      tag: "PROGRAMMING",
      link: "/certificates/java.pdf"
    },
    {
      title: "Data Structures and Algorithm",
      org: "Lovely Professional University",
      date: "DEC 2024",
      tag: "ALGORITHMS",
      link: "/certificates/dsa.pdf"
    },
    {
      title: "C language Programming",
      org: "Lovely Professional University",
      date: "MAY 2024",
      tag: "PROGRAMMING",
      link: "/certificates/c.pdf"
    },
    {
      title: "Python Programming",
      org: "Infosys Springboard",
      date: "FEB 2024",
      tag: "PROGRAMMING",
      link: "/certificates/python.pdf"
    },
    {
      title: "Cloud Computing",
      org: "NPTEL",
      date: "APR 2025",
      tag: "CLOUD",
      link: "/certificates/CloudComputing.pdf"
    },
    {
      title: "Full Stack Web Development",
      org: "Cipher Schools",
      date: "JULY 2025",
      tag: "FULL STACK",
      link: "/certificates/ciphersscool.pdf"
    },
     {
      title: "Hackathon",
      org: "Lovely Professional University",
      date: "FEB 2024",
      tag: "HACKATHON",
      link: "/certificates/hackathon.pdf"
    },
     {
      title: "Web Development",
      org: "InternPe",
      date: "AUG 2024",
      tag: "INTERNSHIP",
      link: "/certificates/internpe.pdf"
    },
     {
      title: "Communicator",
      org: "Younity",
      date: "NOV 2023",
      tag: "INTERNSHIP",
      link: "/certificates/internship.pdf"
    },
     {
      title: "Responsive Web Design",
      org: "Free Code Camp",
      date: "NOV 2023",
      tag: "WEB DEVELOPMENT",
      link: "/certificates/webdesign.pdf"
    },
     {
      title: "Digital Marketing",
      org: "Google",
      date: "DEC 2022",
      tag: "DIGITAL MARKETING",
      link: "/certificates/digital.pdf"
    },
    {
      title: "Microsoft Excel",
      org: "infosys springboard",
      date: "OCT 2023",
      tag: "EXCEL",
      link: "/certificates/excel.pdf"
    },
    {
      title: " Computational Theory: Language Principle & Finite Automata Theory",
      org: "Infosys Springboard",
      date: "AUG 2025",
      tag: "AUTOMATA",
      link: "/certificates/automata.pdf"
    },
    {
      title: "ChatGPT-4 Prompt Engineering",
      org: "Infosys Springboard",
      date: "AUG 2025",
      tag: "PROMPT ENGINEERING",
      link: "/certificates/prompt.pdf"
    },
    {
      title: "Built Generative AI apps",
      org: "Udemy",
      date: "DEC 2025",
      tag: "GENERATIVE AI",
      link: "/certificates/buildaicertificate.pdf"
    },
    {
      title: "Master Generative AI & generative AI tools",
      org: "Udemy",
      date: "AUG 2025",
      tag: "GENERATIVE AI",
      link: "/certificates/mastergenerativeai.pdf"
    },
    {
      title: "Fundamentals of Network Communication",
      org: "Coursera",
      date: "NOV 2024",
      tag: "Network Communication",
      link: "/certificates/networkcommunication.pdf"
    },
    {
      title: "Introduction to Hardware and Operating Systems",
      org: "Coursera",
      date: "SEP 2024",
      tag: "OPERATING SYSTEM",
      link: "/certificates/hardware.pdf"
    },
    {
      title: "Computer Communication",
      org: "Coursera",
      date: "DEC 2024",
      tag: "COMPUTER COMMUNICATION",
      link: "/certificates/computercommunication.pdf"
    },
    {
      title: "TCP/IP and Advanced Topics",
      org: "Coursera",
      date: "DEC 2024",
      tag: "NETWORKING",
      link: "/certificates/tcp.pdf"
    },
    {
      title: "Bits And Bytes of Computer Networking",
      org: "Google",
      date: "SEP 2024",
      tag: "NETWORKING",
      link: "/certificates/bitsandbytes.pdf"
    },
    {
      title: "Packet Switching Networks and Algorithms",
      org: "Coursera",
      date: "DEC 2024",
      tag: "ALGORITHMS",
      link: "/certificates/packetswitching.pdf"
    },
    {
      title: "Peer to Peer Protocols and Local Area Networks",
      org: "Coursera",
      date: "NOV 2024",
      tag: "NETWORKING",
      link: "/certificates/peertopeer.pdf"
    },
  ]

  const visibleCertificates = showAll ? certificates : certificates.slice(0, 6)

  return (
    <section 
      id="certificates" 
      className="py-24 px-6 md:px-16 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">Certifications</span>
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl">
              Professional credentials from platforms like Coursera, Infosys and more.
            </p>
          </div>
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {visibleCertificates.map((c, i) => (
              <motion.div
                key={c.title + i}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-500/50 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                    <FaAward size={24} />
                  </div>
                  <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                    {c.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                  {c.title}
                </h3>

                <div className="mt-auto">
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">
                    {c.org}
                  </p>
                  <p className="text-xs text-slate-400 dark:text-slate-500 mb-6 font-semibold tracking-wider">
                    {c.date}
                  </p>

                  {c.link && (
                    <a
                      href={c.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 font-medium text-sm"
                    >
                      Show Credentials <FaExternalLinkAlt size={12} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div 
          layout
          className="flex justify-center mt-12"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3.5 rounded-full font-semibold bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-sm"
          >
            {showAll ? "Show Less" : "Show All Certifications"}
          </button>
        </motion.div>

      </div>
    </section>
  )
}

export default Certifications