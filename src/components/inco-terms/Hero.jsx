"use client"

import { Share2, Twitter, Facebook, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Hero({ title, subtitle, date }) {
  return (
    <div className="relative bg-blue-950 text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 to-blue-900/90" />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <div className="max-w-3xl">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8 text-blue-200">
            <time>{date}</time>
            <div className="flex items-center gap-3">
              <button className="hover:text-white transition-colors" aria-label="Share on Twitter">
                <Twitter size={20} />
              </button>
              <button className="hover:text-white transition-colors" aria-label="Share on Facebook">
                <Facebook size={20} />
              </button>
              <button className="hover:text-white transition-colors" aria-label="Share on LinkedIn">
                <Linkedin size={20} />
              </button>
              <button className="hover:text-white transition-colors" aria-label="Share">
                <Share2 size={20} />
              </button>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">{title}</h1>

          <p className="text-lg sm:text-xl text-blue-100 mb-8">{subtitle}</p>

          <Link href={'/get-quote'} className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            Get Free Quotes
          </Link >
        </div>
      </div>
    </div>
  )
}

