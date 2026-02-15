'use client'

import { Mail, Linkedin, Github, Twitter, MessageCircle } from 'lucide-react'

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'prakharchaudhary0302@gmail.com',
      href: 'mailto:prakharchaudhary0302@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Prakhar Chaudhary',
      href: 'https://www.linkedin.com/in/prakhar-chaudhary-94a84a2b7',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@Prakhar3518',
      href: 'https://github.com/Prakhar3518',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      value: '@PrakharCha74855',
      href: 'https://x.com/PrakharCha74855',
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 text-balance">
            Let's build something{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              amazing together
            </span>
          </h2>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Whether you have a question, want to collaborate, or just want to say hi - feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Methods */}
          <div className="space-y-4 animate-slideInLeft">
            {contactMethods.map((method) => {
              const Icon = method.icon
              return (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.label !== 'Email' ? '_blank' : undefined}
                  rel={method.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary hover:bg-secondary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:translate-x-1 group"
                >
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{method.label}</div>
                    <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {method.value}
                    </div>
                  </div>
                </a>
              )
            })}
          </div>

          {/* Quick Message */}
          <div className="animate-slideInRight">
            <div className="p-8 bg-card border border-border rounded-lg hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Quick Message</h3>
              </div>

              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />
                <textarea
                  placeholder="Your message"
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-4 mb-12 animate-fadeInUp">
          <div className="p-6 bg-secondary/30 border border-border rounded-lg text-center hover:border-primary hover:bg-secondary/50 transition-all">
            <div className="text-3xl font-bold text-primary mb-2">250+</div>
            <div className="text-sm text-muted-foreground">Problems Solved</div>
          </div>
          <div className="p-6 bg-secondary/30 border border-border rounded-lg text-center hover:border-primary hover:bg-secondary/50 transition-all">
            <div className="text-3xl font-bold text-accent mb-2">6+</div>
            <div className="text-sm text-muted-foreground">Major Projects</div>
          </div>
          <div className="p-6 bg-secondary/30 border border-border rounded-lg text-center hover:border-primary hover:bg-secondary/50 transition-all">
            <div className="text-3xl font-bold text-primary mb-2">20+</div>
            <div className="text-sm text-muted-foreground">Technologies</div>
          </div>
          <div className="p-6 bg-secondary/30 border border-border rounded-lg text-center hover:border-primary hover:bg-secondary/50 transition-all">
            <div className="text-3xl font-bold text-accent mb-2">∞</div>
            <div className="text-sm text-muted-foreground">Learning Curve</div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-border/50 pt-8 text-center">
          <p className="text-muted-foreground">
            Built with <span className="text-primary">React</span> & <span className="text-accent">Next.js</span>. Hosted on Vercel.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            © 2024 Prakhar Chaudhary. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  )
}
