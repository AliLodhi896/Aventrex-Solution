"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-amber-600">Aventrex</span>
          <span className="text-xl font-medium text-gray-700">Solutions</span>
        </Link>
        <nav className="hidden md:flex gap-8">
          <Link
            href="/"
            className="text-sm font-medium text-gray-900 hover:text-amber-600 transition-colors relative group"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="#services"
            className="text-sm font-medium text-gray-900 hover:text-amber-600 transition-colors relative group"
          >
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium text-gray-900 hover:text-amber-600 transition-colors relative group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="#why-us"
            className="text-sm font-medium text-gray-900 hover:text-amber-600 transition-colors relative group"
          >
            Why Us
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all group-hover:w-full"></span>
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium text-gray-900 hover:text-amber-600 transition-colors relative group"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all group-hover:w-full"></span>
          </Link>
        </nav>
        <div className="hidden md:flex gap-4">
          <Button
            variant="outline"
            className="border-amber-600 text-amber-600 hover:bg-amber-50 transition-all duration-300"
          >
            Log In
          </Button>
          <Button className="bg-amber-600 hover:bg-amber-700 text-white shadow-md hover:shadow-lg transition-all duration-300">
            Get Started
          </Button>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="container md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col gap-4 p-6 bg-white rounded-b-xl shadow-lg">
              <Link
                href="/"
                className="text-base font-medium text-gray-900 hover:text-amber-600 transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#services"
                className="text-base font-medium text-gray-900 hover:text-amber-600 transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#about"
                className="text-base font-medium text-gray-900 hover:text-amber-600 transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#why-us"
                className="text-base font-medium text-gray-900 hover:text-amber-600 transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Why Us
              </Link>
              <Link
                href="#contact"
                className="text-base font-medium text-gray-900 hover:text-amber-600 transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col gap-3 mt-4">
                <Button variant="outline" className="w-full border-amber-600 text-amber-600 hover:bg-amber-50">
                  Log In
                </Button>
                <Button className="w-full bg-amber-600 hover:bg-amber-700">Get Started</Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
