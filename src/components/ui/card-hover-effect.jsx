"use client"
import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const CardHoverEffect = ({ children, className, containerClassName }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cardRef = useRef(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const updateMousePosition = (e) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      setMousePosition({ x, y })
    }

    card.addEventListener("mousemove", updateMousePosition)
    return () => {
      card.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  return (
    <div
      ref={cardRef}
      className={cn("relative overflow-hidden", containerClassName)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={cn("relative z-10 transition-all duration-500", className)}>{children}</div>
      {isHovered && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-300/20 to-teal-300/20 opacity-80 z-0 rounded-lg"
          animate={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
          }}
          transition={{ type: "spring", bounce: 0.4, duration: 0.5 }}
        />
      )}
    </div>
  )
}

