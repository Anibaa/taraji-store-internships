import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ProjectCard from "@/components/project-card"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "IT & HR Management Platform",
      slug: "it-hr",
      duration: "4-6 Months",
      interns: "1",
      description:
        "Design and development of an internal IT & HR platform for managing employees, interns, tasks, requests, and performance tracking.",
      technologies: ["Web platform", "Dashboards", "Databases", "Automation tools"],
    },
    {
      id: 2,
      title: "E-commerce Platform with Chatbot",
      slug: "ecommerce-chatbot",
      duration: "46 Months",
      interns: "2",
      description:
        "Enhancement of the Taraji Store e-commerce ecosystem with an AI-powered chatbot for customer assistance, order support, and automated engagement.",
      technologies: ["E-commerce", "Chatbot", "AI automation", "Web technologies"],
    },
    {
      id: 3,
      title: "Centralized Social Media Response Platform",
      slug: "social-media",
      duration: "4-6 Months",
      interns: "1",
      description:
        "Build a centralized platform to manage, analyze, and respond to customer messages and comments from multiple social media channels.",
      technologies: ["APIs", "Dashboards", "Automation", "Messaging systems"],
    },
    {
      id: 4,
      title: "Mobile Application Development",
      slug: "mobile",
      duration: "4-6 Months",
      interns: "1",
      description:
        "Development of a mobile application connected to Taraji Store services, focusing on user experience, notifications, and digital engagement.",
      technologies: ["Mobile development", "Backend integration", "APIs"],
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="animate-slide-up mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Internship & PFE Projects</h1>
          <p className="text-xl text-muted-foreground">
            Explore our exciting project opportunities for students and professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
