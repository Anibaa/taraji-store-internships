import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { CheckCircle2 } from "lucide-react"

export default function About() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About Taraji Store</h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Taraji Store is the official merchandising, e-commerce, and digital platform of Espérance Sportive de
              Tunis. We represent the convergence of sports passion, retail innovation, and cutting-edge digital
              transformation.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Our Presence</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { title: "Physical Stores", desc: "Modern retail locations offering premium EST merchandise" },
                { title: "E-commerce Platform", desc: "Seamless online shopping experience available 24/7" },
                { title: "Mobile Application", desc: "Dedicated app for enhanced customer engagement" },
              ].map((item, i) => (
                <div key={i} className="p-6 bg-card rounded-lg border border-border">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Our Commitment</h2>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 mb-12">
              <p className="text-muted-foreground leading-relaxed mb-4">
                At Taraji Store, we are committed to innovation, digitalization, and youth empowerment. We believe in
                leveraging technology to create meaningful experiences for our customers and opportunities for talented
                professionals.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our internship and PFE programs are designed to bridge academic learning with real-world application,
                allowing students to contribute to significant projects while developing professional skills in a
                dynamic environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
