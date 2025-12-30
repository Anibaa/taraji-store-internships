"use client"

import { Zap, Users, Target, Lightbulb } from "lucide-react"

export default function Values() {
  const values = [
    { icon: Zap, title: "Innovation", desc: "Pushing technological boundaries." },
    { icon: Users, title: "Collaboration", desc: "Teamwork drives success." },
    { icon: Target, title: "Excellence", desc: "Quality & professional standards." },
    { icon: Lightbulb, title: "Learning", desc: "Continuous development." },
  ]

  return (
    <section id="values" className="relative py-16 md:py-24 bg-card/20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 md:space-y-16">
          <div className="space-y-4 max-w-3xl">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-secondary leading-tight">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-medium">
              Guiding principles that define our culture and mission.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon
              return (
                <div
                  key={idx}
                  className="p-5 md:p-6 rounded-xl border border-border bg-background hover:border-primary/50 hover:bg-card/60 transition-all duration-150"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-3.5 hover:bg-primary/30 transition-all duration-150">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-secondary mb-2">{value.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
