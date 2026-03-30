function Footer() {
  return (
    <footer className="py-16 flex justify-center">

      <div
        className="
        px-10 py-6 rounded-2xl
        bg-white/5 backdrop-blur-lg
        border border-white/10
        shadow-[0_0_40px_rgba(0,0,0,0.3)]
        text-center
        text-gray-300
      "
      >
        <p className="text-lg">
          © 2026 Portfolio. Built with{" "}
          <span className="text-blue-400 font-medium">
            React & Tailwind
          </span>
        </p>
      </div>

    </footer>
  )
}

export default Footer