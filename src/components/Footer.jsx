function Footer() {
  return (
    <footer className="py-12 bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center border-t border-slate-200 dark:border-slate-800">

      <div className="px-8 py-5 rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-sm text-center">
        <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 font-medium">
          © {new Date().getFullYear()} Siya Jaiswal. Built with{" "}
          <span className="text-blue-500 font-bold tracking-wide">
            React & Tailwind
          </span>
        </p>
      </div>

    </footer>
  )
}

export default Footer