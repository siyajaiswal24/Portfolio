import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"

function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-12 bg-gray-50 text-black dark:bg-[#020617] dark:text-white"
    >

      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold">
          Get In <span className="text-blue-500">Touch</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-3">
          Let’s create something amazing together
        </p>
      </div>

      {/* Layout */}
      <div className="grid md:grid-cols-2 gap-12">

        {/* LEFT SIDE */}
        <div className="space-y-6">

          <div>
            <h3 className="text-2xl font-semibold text-blue-500 mb-4">
              Let’s work together
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
            </p>
          </div>

          {/* EMAIL */}
          <div className="flex items-center gap-5 p-6 rounded-2xl bg-white border border-gray-200 dark:bg-slate-900 dark:border-slate-700 transition hover:scale-[1.02]">
            <div className="p-4 rounded-xl bg-gray-100 dark:bg-slate-800 text-blue-500">
              <FaEnvelope />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
              <p className="font-medium">siyajaiswal0324@gmail.com</p>
            </div>
          </div>

          {/* PHONE */}
          <div className="flex items-center gap-5 p-6 rounded-2xl bg-white border border-gray-200 dark:bg-slate-900 dark:border-slate-700 transition hover:scale-[1.02]">
            <div className="p-4 rounded-xl bg-gray-100 dark:bg-slate-800 text-blue-500">
              <FaPhone />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
              <p className="font-medium">+91 9431 954 XXX</p>
            </div>
          </div>

          {/* LOCATION */}
          <div className="flex items-center gap-5 p-6 rounded-2xl bg-white border border-gray-200 dark:bg-slate-900 dark:border-slate-700 transition hover:scale-[1.02]">
            <div className="p-4 rounded-xl bg-gray-100 dark:bg-slate-800 text-blue-500">
              <FaMapMarkerAlt />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Punjab</p>
              <p className="font-medium">India</p>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <form className="space-y-6">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-5 rounded-xl bg-white border border-gray-300 text-black 
            dark:bg-slate-900 dark:border-slate-700 dark:text-white 
            focus:outline-none focus:border-blue-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-5 rounded-xl bg-white border border-gray-300 text-black 
            dark:bg-slate-900 dark:border-slate-700 dark:text-white 
            focus:outline-none focus:border-blue-500"
          />

          <textarea
            rows="8"
            placeholder="Your Message"
            className="w-full p-5 rounded-xl bg-white border border-gray-300 text-black 
            dark:bg-slate-900 dark:border-slate-700 dark:text-white 
            focus:outline-none focus:border-blue-500"
          ></textarea>

          <button
            type="submit"
            className="w-full py-5 text-lg rounded-xl bg-blue-600 hover:bg-blue-700 transition hover:scale-[1.02]"
          >
            Send Message
          </button>

        </form>

      </div>

    </section>
  )
}

export default Contact