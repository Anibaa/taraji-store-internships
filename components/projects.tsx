"use client"

import Link from "next/link"
import { ArrowRight, Code, Zap, Users, Smartphone, Mail } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      icon: Code,
      title: "HR Management Platform",
      desc: "Digital platform for employee and HR process management",
      skills: ["Next.js", "Node.js", "DevOps"],
      id: "it-hr-platform",
    },
    {
      icon: Zap,
      title: "Intelligent Web Platform",
      desc: "Automated web platform with chatbot-ready architecture",
      skills: ["Next.js", "Node.js", "Python"],
      id: "intelligent-web-platform",
    },
    {
      icon: Smartphone,
      title: "Smart Mobile Application",
      desc: "Cross-platform mobile app with intelligent UX",
      skills: ["React Native", "Node.js", "UX/UI"],
      id: "mobile-smart-app",
    },
    {
      icon: Users,
      title: "Unified Interaction Platform",
      desc: "Centralized communication platform with AI assistance",
      skills: ["AI", "Automation", "Dashboards"],
      id: "unified-interaction-platform",
    },
  ]

  const applyEmail = "internships@taraji-store.com"
  const emailSubject = "Full Name - Project"

  return (
    <section id="projects" className="relative py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 md:space-y-16">
          <div className="space-y-4 max-w-3xl">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-secondary leading-tight">
              Our <span className="text-primary">Projects</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-medium">
              Four exciting internship opportunities in full-stack, AI, and mobile development.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {projects.map((project) => {
              const Icon = project.icon
              return (
                <div
                  key={project.id}
                  className="p-5 md:p-6 rounded-xl border border-border bg-card/40 hover:bg-card/80 hover:border-primary/40 transition-all duration-150"
                >
                  <div className="w-11 h-11 rounded-lg bg-primary/20 flex items-center justify-center mb-3.5 hover:bg-primary/30 transition-all duration-150">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-secondary mb-2">{project.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground mb-4 leading-relaxed">{project.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 font-semibold"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center gap-1.5 text-primary font-bold text-xs md:text-sm hover:text-primary/80 transition-all duration-150"
                  >
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              )
            })}
          </div>

          <div className="pt-8 md:pt-12 border-t border-border">
            <div className="max-w-2xl space-y-6">
              <div>
                <h3 className="text-3xl md:text-4xl font-black text-secondary mb-3">Ready to Apply?</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Send us an email with your details. We review applications and respond within 3-5 business days.
                </p>
              </div>

              {/* Email info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div className="p-4 md:p-5 rounded-lg bg-card/60 border border-border">
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1.5">Email</p>
                  <p className="text-primary font-mono text-sm md:text-base break-all">{applyEmail}</p>
                </div>
                <div className="p-4 md:p-5 rounded-lg bg-card/60 border border-border">
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-1.5">Subject</p>
                  <p className="text-secondary font-mono text-sm md:text-base break-all">{emailSubject}</p>
                </div>
              </div>

              {/* CTA button */}
              <a
                href={`mailto:${applyEmail}?subject=${encodeURIComponent(emailSubject)}`}
                className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-primary hover:bg-primary/90 text-background font-black rounded-lg transition-all duration-150 text-sm md:text-base shadow-lg shadow-primary/20"
              >
                <Mail size={18} />
                Send Application Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
