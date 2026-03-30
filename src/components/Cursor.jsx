import { useEffect, useState } from "react"

function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", moveCursor)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
    }
  }, [])

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
    >
      <div className="w-4 h-4 rounded-full border-2 border-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.7)]"></div>
    </div>
  )
}

export default Cursor