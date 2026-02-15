'use client'

import { Code2, Zap, Target } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-secondary/20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-6 animate-slideInLeft">
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              Crafting code with{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                purpose and precision
              </span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a Pre-Final Year Computer Science Engineering student at{' '}
              <span className="text-foreground font-semibold">SRM Institute of Science and Technology</span>.
              My journey has been defined by a strong foundation in Data Structures & Algorithms and Web Development.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm passionate about solving complex problems, understanding system design patterns, and building scalable applications.
              Currently, I'm refining my problem-solving skills and diving deep into backend architecture.
              I love startups, clean code, and coffee ☕
            </p>

            <div className="grid grid-cols-3 gap-4 pt-8 animate-fadeInUp">
              <div className="p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors">
                <div className="text-2xl font-bold text-primary">250+</div>
                <div className="text-sm text-muted-foreground">Problems Solved</div>
              </div>
              <div className="p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors">
                <div className="text-2xl font-bold text-primary">6+</div>
                <div className="text-sm text-muted-foreground">Full Projects</div>
              </div>
              <div className="p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors">
                <div className="text-2xl font-bold text-primary">20+</div>
                <div className="text-sm text-muted-foreground">Tech Skills</div>
              </div>
            </div>
          </div>

          {/* Right side - Features */}
          <div className="space-y-4 animate-slideInRight">
            <div className="p-6 bg-card border border-border rounded-lg hover:border-primary hover:bg-secondary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <div className="flex items-start gap-4">
                <Code2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Problem Solving</h3>
                  <p className="text-muted-foreground">
                    Strong DSA foundation with consistent practice on LeetCode, CodeChef, and Codeforces
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-card border border-border rounded-lg hover:border-primary hover:bg-secondary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <div className="flex items-start gap-4">
                <Zap className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Full Stack Development</h3>
                  <p className="text-muted-foreground">
                    Building responsive web applications with React, Node.js, and modern tooling
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-card border border-border rounded-lg hover:border-primary hover:bg-secondary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <div className="flex items-start gap-4">
                <Target className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">System Design</h3>
                  <p className="text-muted-foreground">
                    Understanding scalable architecture and building production-ready systems
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
