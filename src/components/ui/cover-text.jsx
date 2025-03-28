"use client"
import { motion } from "framer-motion"

export const Cover = ({ children, className }) => {
  return (
    <span className="relative inline-block">
      <span className={`relative z-10 ${className}`}>{children}</span>
      <motion.span
        initial={{ width: "0%" }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-600 z-0"
      />
    </span>
  )
}

