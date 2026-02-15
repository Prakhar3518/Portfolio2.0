'use client'

import { useEffect, useRef, useState } from 'react'

export default function Skills() {
  const [visibleCategories, setVisibleCategories] = useState<Set<number>>(new Set())
  const categoryRefs = useRef<Map<number, HTMLDivElement>>(new Map())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Array.from(categoryRefs.current.values()).indexOf(entry.target as HTMLDivElement)
            if (idx !== -1) {
              setVisibleCategories((prev) => new Set([...prev, idx]))
            }
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    categoryRefs.current.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Java', 'C++', 'Python', 'C', 'JavaScript', 'HTML5', 'CSS3'],
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['React', 'Spring Boot', 'Tailwind CSS', 'NumPy', 'Pandas', 'OpenCV'],
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'Docker', 'MySQL', 'MongoDB', 'AWS', 'GCP', 'Kafka'],
    },
    {
      title: 'Competitive Programming',
      skills: ['LeetCode', 'CodeChef', 'Codeforces', 'DSA', 'Problem Solving', 'Algorithms'],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">
            Skills & Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 text-balance">
            Technologies I{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              work with
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              ref={(el) => {
                if (el) categoryRefs.current.set(idx, el)
              }}
              className={`p-8 bg-card border border-border rounded-lg hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group ${
                visibleCategories.has(idx) ? 'animate-fadeInUp' : 'opacity-0'
              }`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <h3 className="text-xl font-semibold mb-6 text-primary group-hover:text-accent transition-colors">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-secondary/50 border border-border rounded-full text-sm font-medium hover:bg-primary/20 hover:border-primary hover:text-primary transition-all duration-300 cursor-default hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Competitive Programming Stats */}
        <div className="mt-16 p-8 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-lg">
          <h3 className="text-2xl font-semibold mb-8 text-center text-balance">
            Competitive Programming Journey
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <p className="text-muted-foreground">Problems Solved across platforms</p>
              <div className="mt-4 text-sm space-y-1">
                <p>LeetCode: 80+ problems</p>
                <p>CodeChef: 15+ problems</p>
                <p>Codeforces: Consistent participation</p>
              </div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">Expert</div>
              <p className="text-muted-foreground">DSA & Problem Solving</p>
              <div className="mt-4 text-sm space-y-1">
                <p>Arrays & Strings</p>
                <p>Trees & Graphs</p>
                <p>Dynamic Programming</p>
              </div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">Active</div>
              <p className="text-muted-foreground">Regular Contest Participation</p>
              <div className="mt-4 text-sm space-y-1">
                <p>Weekly problem solving</p>
                <p>Monthly competitions</p>
                <p>Skill improvement focus</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
