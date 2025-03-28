"use client"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export const BackgroundBeams = ({ className }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const ref = useRef(null)

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        setMousePosition({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div
      ref={ref}
      className={cn("h-full w-full bg-black flex items-center justify-center overflow-hidden rounded-md", className)}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_507_1)">
          <g opacity="0.4">
            <g opacity="0.4">
              <path d="M1443.37 800H-3.37256V0H1443.37V800Z" fill="url(#paint0_radial_507_1)" />
            </g>
            <g opacity="0.4">
              <path d="M1443.37 800H-3.37256V0H1443.37V800Z" fill="url(#paint1_radial_507_1)" />
            </g>
          </g>
        </g>
        <defs>
          <radialGradient
            id="paint0_radial_507_1"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform={`translate(${mousePosition.x} ${mousePosition.y}) rotate(90) scale(800)`}
          >
            <stop stopColor="#3B82F6" />
            <stop offset="0.79" stopColor="#3B82F6" stopOpacity="0" />
          </radialGradient>
          <radialGradient
            id="paint1_radial_507_1"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform={`translate(${mousePosition.x} ${mousePosition.y}) rotate(90) scale(800)`}
          >
            <stop stopColor="#14B8A6" />
            <stop offset="0.79" stopColor="#14B8A6" stopOpacity="0" />
          </radialGradient>
          <clipPath id="clip0_507_1">
            <rect width="1440" height="800" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

