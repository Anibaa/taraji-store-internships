import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Zap, Target, Users, Shield, Heart } from "lucide-react"

export default function Values() {
  const values = [
    {
      icon: Zap,
      title: "Innovation & Technology",
      description:
        "Embracing cutting-edge solutions to drive digital transformation and create exceptional user experiences",
    },
    {
      icon: Target,
      title: "Performance & Excellence",
      description:
        "Striving for excellence in every aspect of our operations, from product quality to customer service",
    },
    {
      icon: Users,
      title: "Team Spirit",
      description: "Fostering collaboration, mutual respect, and shared success across all team members",
    },
    {
      icon: Shield,
      title: "Responsibility & Professionalism",
      description: "Upholding the highest standards of integrity, accountability, and professional conduct",
    },
    {
      icon: Heart,
      title: "Passion for Sports & Digital",
      description: "Combining our love for sports with passion for technology to create unique value",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="animate-slide-up mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Values</h1>
          <p className="text-xl text-muted-foreground">The principles that guide our decisions and shape our culture</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((value, i) => {
            const Icon = value.icon
            return (
              <div
                key={i}
                className="group p-6 bg-card rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      <Footer />
    </main>
  )
}
