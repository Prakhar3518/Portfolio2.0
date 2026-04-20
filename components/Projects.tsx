'use client'

import { ExternalLink, Github } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState<Set<number>>(new Set())
  const projectRefs = useRef<Map<number, HTMLDivElement>>(new Map())
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Array.from(projectRefs.current.values()).indexOf(entry.target as HTMLDivElement)
            if (idx !== -1) {
              setVisibleProjects((prev) => new Set([...prev, idx]))
            }
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    projectRefs.current.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const projects = [
  {
    title: 'SRM Job Portal | Automated Campus Recruitment Platform',
    description: 'Full-stack job portal with AI-based student shortlisting and resume screening, automating recruitment for 500+ students across 20+ companies. Features real-time data fetching, dynamic filtering, and efficient handling of 1,000+ records.',
    tech: ['React', 'Spring Boot', 'Spring Security', 'Spring MVC', 'Hibernate/JPA', 'RESTful APIs', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Prakhar3518/SRMjobportalenhanced',
    
  },
  {
    title: 'AutoNoted | AI-Powered Notes Generation System',
    description: 'AI-based system that processes YouTube videos, detects board/scene changes using OpenCV, and generates structured notes as downloadable PDFs using NLP pipelines and a scalable Spring Boot backend.',
    tech: ['Spring Boot', 'Spring Security', 'Spring MVC', 'Hibernate/JPA', 'RESTful APIs', 'OpenCV', 'NumPy', 'Pandas', 'NLP', 'yt-dlp', 'MySQL', 'Python'],
    github: 'https://github.com/Prakhar3518/Autonotesmakerspringapi',
   
  },
  {
    title: 'Sewa | NGO–Volunteer Coordination Platform',
    description: 'Role-based web platform connecting NGOs with volunteers, featuring task management, file uploads, location-based tagging, and AI-powered document Q&A (RAG).',
    tech: ['React', 'Node.js', 'Express.js', 'REST APIs', 'Tailwind CSS', 'MySQL'],
    github: 'https://github.com/Prakhar3518/ngo-platform',
  
  },
  

  {
    title: 'Cyberdeath - Interactive Game',
    description: 'Interactive web-based game with dynamic storytelling, real-time updates, and immersive gameplay experience.',
    tech: ['React', 'Spring Boot', 'WebSocket', 'Canvas API', 'MySQL', 'JavaScript'],
    github: 'https://github.com/Prakhar3518/CyberDeath2.0',
   
  },
  {
    title: 'Portfolio Website',
    description: 'Modern responsive portfolio with animations, smooth scrolling, and optimized performance built using Next.js and TypeScript.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    github: 'https://github.com/Prakhar3518/Portfolio2.0',
   
  },
  {
    title: 'FareShare - Carpooling Platform (Under Development)',
    description: 'Carpooling platform for ride sharing with features like ride matching, real-time tracking, payments, and user ratings.',
    tech: ['React', 'Spring Boot', 'Spring Security', 'REST APIs', 'MySQL', 'Google Maps API', 'Stripe'],
    github: 'https://github.com/Prakhar3518/FareShare',
   
  }
]

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 text-balance">
            Projects that{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              showcase my skills
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              ref={(el) => {
                if (el) projectRefs.current.set(idx, el)
              }}
              className={`group relative p-6 bg-card border border-border rounded-lg hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 overflow-hidden ${
                visibleProjects.has(idx) ? 'animate-fadeInUp' : 'opacity-0'
              }`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10 space-y-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20 group-hover:bg-primary/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-border">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-foreground hover:text-primary transition-colors text-sm font-medium"
                  >
                    <Github size={16} /> Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-foreground hover:text-accent transition-colors text-sm font-medium"
                  >
                    <ExternalLink size={16} /> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 pt-8 border-t border-border/50">
          <p className="text-muted-foreground mb-6">
            Want to see more projects? Check out my GitHub for additional work and contributions.
          </p>
          <a
            href="https://github.com/Prakhar3518"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-lg hover:shadow-primary/50 hover:scale-105 transition-all duration-300"
          >
            <Github size={20} /> View All Projects
          </a>
        </div>
      </div>
    </section>
  )
}
