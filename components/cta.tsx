import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-12 md:py-16 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link
            href="/projects"
            className="group p-6 md:p-8 rounded-lg border border-border hover:border-primary bg-background transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-foreground">Explore Projects</h3>
              <ArrowRight size={24} className="text-primary group-hover:translate-x-1 transition-transform" />
            </div>
            <p className="text-muted-foreground">
              Discover 4 exciting internship and PFE projects across IT, e-commerce, social media, and mobile
              development.
            </p>
          </Link>

          <Link
            href="/contact"
            className="group p-6 md:p-8 rounded-lg border border-border hover:border-primary bg-background transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-foreground">Apply Now</h3>
              <ArrowRight size={24} className="text-primary group-hover:translate-x-1 transition-transform" />
            </div>
            <p className="text-muted-foreground">
              Ready to join Taraji Store? Submit your CV and apply for your dream internship or PFE project.
            </p>
          </Link>
        </div>
      </div>
    </section>
  )
}
