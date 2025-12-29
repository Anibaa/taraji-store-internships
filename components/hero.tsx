"use client"

import Link from "next/link"
import { ArrowRight, Zap } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="relative pt-16 pb-12 md:pt-28 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          <div className="animate-slide-up space-y-6 md:space-y-8">
            <div className="space-y-3 md:space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full border border-primary/20">
                <Zap size={16} className="text-primary" />
                <p className="text-xs md:text-sm font-bold text-primary tracking-wide uppercase">Digital Excellence</p>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-secondary leading-tight">
                Shape the <span className="text-primary">Future</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg font-medium">
                Join Taraji Store's internship & PFE program. Build next-generation e-commerce solutions for Tunisia's
                leading sports organization.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="mailto:internships@tarajistore.tn?subject=Apply%20Now"
                className="px-6 sm:px-8 py-3 md:py-4 bg-secondary text-background rounded-lg font-bold hover:bg-secondary/90 transition-all duration-150 inline-flex items-center justify-center gap-2 text-sm md:text-base"
              >
                Apply Now <ArrowRight size={18} />
              </a>
              <Link
                href="#projects"
                className="px-6 sm:px-8 py-3 md:py-4 border-2 border-primary text-primary rounded-lg font-bold hover:bg-primary/5 transition-all duration-150 inline-flex items-center justify-center text-sm md:text-base"
              >
                See Projects
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-6 md:pt-8 border-t border-border">
              <div>
                <p className="text-2xl md:text-3xl font-black text-primary">4</p>
                <p className="text-xs md:text-sm text-muted-foreground font-semibold">Projects</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-black text-secondary">6+</p>
                <p className="text-xs md:text-sm text-muted-foreground font-semibold">Tech Stack</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-black text-primary">∞</p>
                <p className="text-xs md:text-sm text-muted-foreground font-semibold">Growth</p>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block h-80 xl:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-secondary/15 rounded-3xl border border-border/30" />
            <div className="absolute inset-12 border border-secondary/20 rounded-2xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-7xl md:text-8xl font-black text-primary/10">T</div>
              <p className="text-muted-foreground text-xs md:text-sm mt-2">Ready to Transform?</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
