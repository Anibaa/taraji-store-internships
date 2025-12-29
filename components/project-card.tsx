import Link from "next/link"
import { ArrowRight, Users, Clock } from "lucide-react"

interface Project {
  id: number
  title: string
  slug: string
  duration: string
  interns: string
  description: string
  technologies: string[]
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="h-full p-6 bg-card rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all duration-300 group cursor-pointer animate-fade-in">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <ArrowRight
            className="text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
            size={20}
          />
        </div>

        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>

        <div className="flex gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{project.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={16} />
            <span>
              {project.interns} intern{project.interns !== "1" ? "s" : ""}
            </span>
          </div>
        </div>

        <div className="pt-4 border-t border-border">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 2).map((tech, i) => (
              <span key={i} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                {tech}
              </span>
            ))}
            {project.technologies.length > 2 && (
              <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded">
                +{project.technologies.length - 2} more
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
