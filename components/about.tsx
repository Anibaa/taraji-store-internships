"use client"

import { Award, Rocket, Users, BookOpen, Code, Target } from "lucide-react"

export default function About() {
  const highlights = [
    { icon: Award, label: "Official Platform" },
    { icon: Rocket, label: "E-commerce Solutions" },
    { icon: Users, label: "Industry Mentorship" },
    { icon: BookOpen, label: "Real Projects" },
    { icon: Code, label: "Tech Training" },
    { icon: Target, label: "Career Growth" },
  ]

  return (
    <section id="about" className="relative py-16 md:py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 md:space-y-16">
          <div className="space-y-4 max-w-3xl">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-secondary leading-tight">
              About <span className="text-primary">Us</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-medium">
              Taraji Store is the innovation hub of Espérance Sportive de Tunis, creating transformative internship and
              PFE opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
            <div className="space-y-4 md:space-y-5">
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                We provide hands-on internship and PFE programs in e-commerce, web development, mobile apps, and digital
                marketing. Our mission is to develop next-generation digital professionals.
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Through mentorship, innovation, and real-world projects, we create pathways for exceptional talent to
                shape the future of digital commerce in Tunisia.
              </p>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-all duration-150 text-sm md:text-base"
              >
                Explore Projects →
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 md:gap-4">
              {highlights.map((item, idx) => {
                const Icon = item.icon
                return (
                  <div
                    key={idx}
                    className="p-4 md:p-5 rounded-xl border border-border bg-card/50 hover:border-primary/40 hover:bg-card transition-all duration-150"
                  >
                    <Icon size={20} className="text-primary mb-2.5" />
                    <p className="text-xs md:text-sm font-bold text-secondary">{item.label}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
