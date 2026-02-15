'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

interface NavigationProps {
  scrollY: number
}

export default function Navigation({ scrollY }: NavigationProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50
          ? 'bg-background/80 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Prakhar
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-foreground hover:text-primary transition-colors duration-200 text-sm font-medium"
            >
              {item.label}
            </a>
          ))}
          <a
            href="mailto:prakharchaudhary0302@gmail.com"
            className="px-6 py-2 bg-primary text-primary-foreground rounded-full hover:shadow-lg hover:shadow-primary/50 transition-all duration-200 text-sm font-medium"
          >
            Email
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground hover:text-primary transition-colors"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border animate-fadeInDown">
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-foreground hover:text-primary transition-colors duration-200 font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="mailto:prakharchaudhary0302@gmail.com"
              className="block px-6 py-2 bg-primary text-primary-foreground rounded-full hover:shadow-lg hover:shadow-primary/50 transition-all duration-200 font-medium text-center"
              onClick={() => setMobileOpen(false)}
            >
              Email
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
