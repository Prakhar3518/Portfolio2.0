'use client'

import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden" id="home">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20"
          style={{
            left: `${mousePosition.x * 100}%`,
            top: `${mousePosition.y * 100}%`,
            transition: 'all 0.3s ease-out',
          }}
        />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="max-w-4xl mx-auto z-10">
        {/* Main heading */}
        <div className="text-center space-y-8 animate-fadeInUp">
          <div className="inline-block">
            <span className="px-4 py-2 bg-secondary/50 border border-border rounded-full text-sm font-medium text-primary hover:bg-secondary/70 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
              Welcome to my portfolio
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-balance">
            <span className="inline-block">
              <span className="animate-typing">Hi, I'm Prakhar</span>
              <span className="animate-cursor text-primary">|</span>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Pre-Final Year CSE Student building scalable solutions with{' '}
            <span className="text-primary font-semibold">Data Structures</span>, {' '}
            <span className="text-primary font-semibold">Web Development</span>, and a passion for{' '}
            <span className="text-primary font-semibold">System Design</span>
          </p>

          <div className="flex gap-4 justify-center flex-wrap pt-8">
            <a
              href="#about"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-primary/50 hover:scale-105 transition-all duration-300"
            >
              Explore my work <ArrowRight size={20} />
            </a>
            <a
              href="mailto:prakharchaudhary0302@gmail.com"
              className="px-8 py-3 border border-primary text-primary rounded-full font-semibold hover:bg-primary/10 hover:scale-105 transition-all duration-300"
            >
              Get in touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center pt-12">
            <a
              href="https://github.com/Prakhar3518"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-secondary/30 border border-border rounded-full hover:bg-primary/20 hover:border-primary transition-all duration-300 hover:scale-110 group"
            >
              <Github size={24} className="group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/prakhar-chaudhary-94a84a2b7"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-secondary/30 border border-border rounded-full hover:bg-primary/20 hover:border-primary transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin size={24} className="group-hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:prakharchaudhary0302@gmail.com"
              className="p-4 bg-secondary/30 border border-border rounded-full hover:bg-primary/20 hover:border-primary transition-all duration-300 hover:scale-110 group"
            >
              <Mail size={24} className="group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center pt-20 animate-float">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-muted-foreground">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-muted rounded-full flex justify-center">
              <div className="w-1 h-2 bg-muted rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
