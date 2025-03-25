"use client"

import { useEffect, useState, useRef } from "react"
import { ChevronRight } from "lucide-react"

export default function TableOfContents({ sections, heroHeight }) {
  const [activeSection, setActiveSection] = useState("")
  const [containerWidth, setContainerWidth] = useState(0)
  const [containerLeft, setContainerLeft] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef(null)
  const tocRef = useRef(null)
  const activeItemRef = useRef(null)

  // Calculate and update container dimensions
  useEffect(() => {
    const updateContainerDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setContainerWidth(rect.width)
        setContainerLeft(rect.left)
      }
    }

    // Initial calculation
    updateContainerDimensions()

    // Update on resize
    window.addEventListener("resize", updateContainerDimensions)
    return () => window.removeEventListener("resize", updateContainerDimensions)
  }, [])

  // Handle scroll to show/hide table of contents
  useEffect(() => {
    const handleScroll = () => {
      // Show the fixed TOC only when scrolled past the hero section
      if (window.scrollY > heroHeight - 40) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [heroHeight])

  // Intersection observer for active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-100px 0px -100px 0px", threshold: 0.1 },
    )

    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [sections])

  // Scroll active item into view within the TOC container
  useEffect(() => {
    if (activeItemRef.current && tocRef.current && isVisible) {
      const container = tocRef.current
      const activeItem = activeItemRef.current

      // Calculate if the active item is outside the visible area
      const containerRect = container.getBoundingClientRect()
      const activeItemRect = activeItem.getBoundingClientRect()

      if (activeItemRect.bottom > containerRect.bottom || activeItemRect.top < containerRect.top) {
        // Scroll the item into view with some padding
        activeItem.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        })
      }
    }
  }, [activeSection, isVisible])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="lg:w-64 shrink-0" ref={containerRef}>
      {/* This is a placeholder div to maintain layout space */}
      <div className="w-full h-8 lg:h-[500px]"></div>

      {/* Fixed position table of contents - only visible when scrolled past hero */}
      <div
        className={`hidden lg:block fixed top-8 bg-white rounded-xl shadow-lg transition-all duration-300 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        style={{
          width: containerWidth > 0 ? `${containerWidth}px` : "250px",
          left: containerLeft > 0 ? `${containerLeft}px` : "20px",
          maxHeight: "calc(100vh - 120px)",
        }}
      >
        <div className="p-4 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800 flex items-center">
            <span className="w-1.5 h-5 bg-blue-500 rounded-sm mr-2.5"></span>
            Table of Contents
          </h2>
        </div>

        <nav
          ref={tocRef}
          className="p-2 max-h-[calc(100vh-200px)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#d1d5db transparent",
          }}
        >
          <div className="space-y-1 py-2">
            {sections.map((section) => {
              const isActive = activeSection === section.id
              return (
                <button
                  key={section.id}
                  ref={isActive ? activeItemRef : null}
                  onClick={() => scrollToSection(section.id)}
                  className={`group flex items-center w-full text-left px-3 py-2.5 rounded-lg transition-all ${
                    isActive
                      ? "bg-blue-50 text-blue-700 font-medium"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  <ChevronRight
                    className={`mr-1.5 h-3.5 w-3.5 flex-shrink-0 transition-transform ${
                      isActive ? "text-blue-500 rotate-90" : "text-gray-400 group-hover:text-gray-500"
                    }`}
                  />
                  <span className="text-sm truncate">{section.title}</span>
                </button>
              )
            })}
          </div>
        </nav>
      </div>

      {/* Mobile table of contents (non-fixed) */}
      <div className="lg:hidden bg-white rounded-xl shadow-md mb-6 overflow-hidden">
        <div className="p-4 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800 flex items-center">
            <span className="w-1.5 h-5 bg-blue-500 rounded-sm mr-2.5"></span>
            Table of Contents
          </h2>
        </div>

        <nav className="max-h-[300px] overflow-y-auto p-2">
          <div className="space-y-1 py-2">
            {sections.map((section) => {
              const isActive = activeSection === section.id
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`group flex items-center w-full text-left px-3 py-2.5 rounded-lg transition-all ${
                    isActive
                      ? "bg-blue-50 text-blue-700 font-medium"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  <ChevronRight
                    className={`mr-1.5 h-3.5 w-3.5 flex-shrink-0 transition-transform ${
                      isActive ? "text-blue-500 rotate-90" : "text-gray-400 group-hover:text-gray-500"
                    }`}
                  />
                  <span className="text-sm truncate">{section.title}</span>
                </button>
              )
            })}
          </div>
        </nav>
      </div>
    </div>
  )
}

