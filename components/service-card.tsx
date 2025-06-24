"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
  gradient: string
  delay?: number
}

export function ServiceCard({ icon, title, description, features, gradient, delay = 0 }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
    >
      {/* Background gradient */}
      <div className={cn("absolute inset-0 bg-gradient-to-br", gradient)} />

      {/* Content container */}
      <div className="absolute inset-0 p-2  flex flex-col">
        {/* Front card content */}
        <motion.div
          className="bg-white rounded-xl p-6 flex flex-col h-full"
          animate={{
            y: isHovered ? -180 : 0,
            opacity: isHovered ? 0.9 : 1,
          }}
          transition={{ duration: 0.4 }}
        >
          <div className="rounded-full bg-amber-100 p-3 w-16 h-16 flex items-center justify-center mb-4">{icon}</div>
          <h3 className="text-xl font-bold text-gray-900 mb-3 mt-3">{title}</h3>
          <p className="text-gray-600 flex-grow">{description}</p>
          <div className="mt-4 flex items-center text-amber-600 font-medium">
            <span>Learn more</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </div>
        </motion.div>

        {/* Back card content */}
        <motion.div
          className="absolute inset-0 p-4 mt-4 text-white flex flex-col justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3, delay: isHovered ? 0.2 : 0 }}
        >
          <h3 className="text-2xl font-bold mb-4 ">{title}</h3>
          <ul className="space-y-2">
            {features.map((feature, i) => (
              <motion.li
                key={i}
                className="flex items-center"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
                transition={{ duration: 0.3, delay: isHovered ? 0.3 + i * 0.1 : 0 }}
              >
                <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  )
}
