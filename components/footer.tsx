import Link from "next/link"
import { Mail, ExternalLink } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-card/20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center text-background font-black text-base">
                T
              </div>
              <span className="font-black text-base text-secondary">Taraji Store</span>
            </div>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              Digital platform of Espérance Sportive de Tunis
            </p>
          </div>

          <div>
            <h4 className="font-bold text-secondary mb-3 text-sm">Links</h4>
            <ul className="space-y-1.5 text-xs md:text-sm">
              <li>
                <Link href="#home" className="text-muted-foreground hover:text-primary transition-all duration-150">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-primary transition-all duration-150">
                  About
                </Link>
              </li>
              <li>
                <Link href="#values" className="text-muted-foreground hover:text-primary transition-all duration-150">
                  Values
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-muted-foreground hover:text-primary transition-all duration-150">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-secondary mb-3 text-sm">Programs</h4>
            <ul className="space-y-1.5 text-xs md:text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-all duration-150 flex items-center gap-1.5"
                >
                  Internships <ExternalLink size={12} />
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-all duration-150 flex items-center gap-1.5"
                >
                  PFE Program <ExternalLink size={12} />
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-all duration-150 flex items-center gap-1.5"
                >
                  FAQs <ExternalLink size={12} />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-secondary mb-3 text-sm">Contact</h4>
            <div className="flex items-start gap-2">
              <Mail size={16} className="text-primary flex-shrink-0 mt-0.5" />
              <a
                href="mailto:internships@tarajistore.tn"
                className="text-muted-foreground hover:text-primary transition-all duration-150 text-xs md:text-sm break-all"
              >
                internships@tarajistore.tn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-6 md:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs md:text-sm text-muted-foreground text-center sm:text-left">
            <p className="font-semibold">&copy; 2025 Taraji Store. All rights reserved.</p>
            <p>Espérance Sportive de Tunis – Digital Excellence</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
