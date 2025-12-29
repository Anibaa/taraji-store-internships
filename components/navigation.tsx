"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background/98 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-16">
          <div className="flex items-center">
            <img
              src="/logo-taraji-store.png"
              alt="Logo Taraji Store"
              className="w-40 h-40 object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="#home"
              className="text-sm font-semibold hover:text-primary transition-all duration-150 text-secondary"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-sm font-semibold hover:text-primary transition-all duration-150 text-secondary"
            >
              About
            </Link>
            <Link
              href="#values"
              className="text-sm font-semibold hover:text-primary transition-all duration-150 text-secondary"
            >
              Values
            </Link>
            <Link
              href="#projects"
              className="text-sm font-semibold hover:text-primary transition-all duration-150 text-secondary"
            >
              Projects
            </Link>
            <a
              href="mailto:internships@tarajistore.tn?subject=Apply%20Now"
              className="px-5 py-2 bg-primary text-background rounded-lg font-semibold hover:bg-primary/90 transition-all duration-150 text-sm"
            >
              Apply
            </a>
          </div>

          {/* Mobile menu */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-3 border-t border-border space-y-1">
            <Link href="#home" className="block px-2 py-2 text-sm font-semibold hover:text-primary text-secondary">
              Home
            </Link>
            <Link href="#about" className="block px-2 py-2 text-sm font-semibold hover:text-primary text-secondary">
              About
            </Link>
            <Link href="#values" className="block px-2 py-2 text-sm font-semibold hover:text-primary text-secondary">
              Values
            </Link>
            <Link href="#projects" className="block px-2 py-2 text-sm font-semibold hover:text-primary text-secondary">
              Projects
            </Link>
            <a
              href="mailto:internships@tarajistore.tn?subject=Apply%20Now"
              className="block mt-2 px-4 py-2 bg-primary text-background rounded-lg font-semibold text-center text-sm"
            >
              Apply Now
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
