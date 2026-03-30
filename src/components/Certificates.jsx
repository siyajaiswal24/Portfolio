import { useState } from "react"
import { FaAward } from "react-icons/fa"

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
      className="py-20 px-6 md:px-12 bg-gray-50 dark:bg-slate-900"
    >

      <div className="flex justify-between items-start mb-12">
        <h2 className="text-5xl font-bold text-black dark:text-white">
          CERTIFICATIONS
        </h2>

        <p className="text-gray-500 dark:text-gray-400 max-w-md">
          Professional credentials from platforms like Coursera, Infosys and more.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {visibleCertificates.map((c, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl 
            bg-white dark:bg-slate-900 
            border border-gray-200 dark:border-gray-700
            shadow-sm hover:shadow-xl 
            transition-all duration-300 hover:-translate-y-2"
          >

            <div className="flex items-center justify-between mb-6">

              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-black text-white">
                <FaAward />
              </div>

              <span className="text-xs px-3 py-1 rounded-full border text-blue-500 border-blue-500">
                {c.tag}
              </span>

            </div>

            <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">
              {c.title}
            </h3>

            <div className="border-t border-gray-200 dark:border-gray-700 mb-4"></div>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              {c.org}
            </p>

            <p className="text-xs text-gray-400 mb-6">
              {c.date}
            </p>

            {c.link && (
              <a
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition"
              >
                Show Credentials ↗
              </a>
            )}

          </div>
        ))}

      </div>

      <div className="flex justify-center mt-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-3 rounded-full border border-gray-400 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition"
        >
          {showAll ? "Show Less" : "Show All Certifications"}
        </button>
      </div>

    </section>
  )
}

export default Certifications