import myPhoto from "../assets/images/siya.jpg"

function About() {
  return (
    <section
      id="about"
      className="py-24 px-16 bg-white dark:bg-slate-900 text-black dark:text-white"
    >

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div>

          <h2 className="text-4xl font-bold mb-6">
            About <span className="text-indigo-500">Me</span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
            I am Siya Jaiswal, a 3rd year BTech student passionate about
            building modern web applications and solving complex problems
            using Data Structures and Algorithms. I enjoy turning creative
            ideas into real-world web solutions using technologies like
            React, Node.js and modern development tools.
          </p>

          {/* INFO CARDS */}

          <div className="grid grid-cols-2 gap-6">

            <div className="p-6 rounded-xl bg-blue-100 dark:bg-slate-800">
              <h3 className="font-semibold mb-2">Education</h3>
              <p>3rd Year BTech</p>
            </div>

            <div className="p-6 rounded-xl bg-green-100 dark:bg-slate-800">
              <h3 className="font-semibold mb-2">Focus</h3>
              <p>Web Development</p>
            </div>

            <div className="p-6 rounded-xl bg-purple-100 dark:bg-slate-800">
              <h3 className="font-semibold mb-2">Experience</h3>
              <p>Full Stack Projects</p>
            </div>

            <div className="p-6 rounded-xl bg-pink-100 dark:bg-slate-800">
              <h3 className="font-semibold mb-2">Passion</h3>
              <p>Problem Solving</p>
            </div>

          </div>

          {/* CONTACT INFO */}

          <div className="mt-10 space-y-2">

            <p>
              📧 <span className="font-semibold">Email:</span> siyajaiswal0324@gmail.com
            </p>

            <p>
              📍 <span className="font-semibold">Location:</span> Phagwara, Punjab
            </p>

          </div>

        </div>

        {/* RIGHT SIDE IMAGE */}

        <div className="flex justify-center">

          <div className="p-2 border-4 border-indigo-500 rounded-2xl">

            <img
              src={myPhoto}
              className="w-[320px] rounded-xl"
            />

          </div>

        </div>

      </div>

    </section>
  )
}

export default About