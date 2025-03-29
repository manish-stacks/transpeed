
"use client"
import { useEffect, useState, useRef } from "react"
import { pageContent } from "@/lib/content"
import ContentSection from "@/components/inco-terms/ContentSection"
import TableOfContents from "@/components/inco-terms/TableOfContents"
import Hero from "@/components/inco-terms/Hero"


export default function IncoTermsPage() {
  const [heroHeight, setHeroHeight] = useState(0)
  const heroRef = useRef(null)

  useEffect(() => {
    // Measure hero height
    if (heroRef.current) {
      setHeroHeight(heroRef.current.offsetHeight)
    }

    // Update on resize
    const handleResize = () => {
      if (heroRef.current) {
        setHeroHeight(heroRef.current.offsetHeight)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <div ref={heroRef}>
        <Hero title={pageContent.hero.title} subtitle={pageContent.hero.subtitle} date={pageContent.hero.date} />
      </div>

      <main className="container mx-auto px-4 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <TableOfContents sections={pageContent.sections} heroHeight={heroHeight} />

          <div className="flex-1 space-y-8">
            {pageContent.sections.map((section) => (
              <ContentSection key={section.id} {...section} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
