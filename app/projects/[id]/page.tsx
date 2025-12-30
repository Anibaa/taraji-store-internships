"use client"

import Link from "next/link"
import { ArrowLeft, Mail } from "lucide-react"
import { useParams } from "next/navigation"

const projectData: Record<string, any> = {
  "it-hr-platform": {
    title: "IT & HR Platform",
    description: "Build a comprehensive platform for employee management, recruitment, and HR operations.",
    longDescription:
      "An enterprise-level HR and IT management system designed to streamline recruitment, employee onboarding, and performance tracking. This platform integrates with modern tech stacks to provide real-time analytics and automated workflows.",
    skills: ["React", "Node.js", "PostgreSQL", "Tailwind CSS", "Docker", "AWS"],
    image: "IT & HR Platform",
    duration: "6 months",
    team: "8-10 members",
    technologies: [
      { name: "Frontend", items: ["React 18", "TypeScript", "Redux", "Tailwind CSS"] },
      { name: "Backend", items: ["Node.js", "Express", "PostgreSQL", "Redis"] },
      { name: "DevOps", items: ["Docker", "AWS EC2", "GitHub Actions"] },
    ],
    features: [
      "Employee Management Dashboard",
      "Recruitment Workflow Automation",
      "Performance Analytics",
      "Real-time Notifications",
      "Role-based Access Control",
      "Advanced Reporting",
    ],
  },
  "e-commerce-chatbot": {
    title: "E-commerce Chatbot",
    description: "Develop an intelligent chatbot to enhance customer support and boost sales conversion.",
    longDescription:
      "An AI-powered customer service chatbot that uses natural language processing to handle inquiries, provide product recommendations, and process transactions in real-time.",
    skills: ["Python", "NLP", "React", "APIs", "Machine Learning"],
    image: "E-commerce Chatbot",
    duration: "4 months",
    team: "5-6 members",
    technologies: [
      { name: "ML/AI", items: ["Python", "spaCy", "TensorFlow", "NLP Libraries"] },
      { name: "Frontend", items: ["React", "Socket.io", "Tailwind CSS"] },
      { name: "Backend", items: ["FastAPI", "MongoDB", "Redis"] },
    ],
    features: [
      "Natural Language Understanding",
      "Product Recommendation Engine",
      "Multi-language Support",
      "Sentiment Analysis",
      "Order Processing Integration",
      "Analytics Dashboard",
    ],
  },
  "social-media-platform": {
    title: "Social Media Platform",
    description: "Create a feature-rich social platform for sports fans and community engagement.",
    longDescription:
      "A community-driven social network built for sports enthusiasts, featuring real-time interactions, live updates, and user-generated content with advanced moderation tools.",
    skills: ["Next.js", "GraphQL", "MongoDB", "Real-time Features"],
    image: "Social Media Platform",
    duration: "5 months",
    team: "7-8 members",
    technologies: [
      { name: "Frontend", items: ["Next.js 14", "TypeScript", "TailwindCSS"] },
      { name: "Backend", items: ["GraphQL", "Apollo Server", "MongoDB"] },
      { name: "Real-time", items: ["WebSocket", "Redis Pub/Sub"] },
    ],
    features: [
      "User Profiles & Following System",
      "Live Feed & Activity Timeline",
      "Comments & Reactions",
      "Direct Messaging",
      "Trending Topics",
      "Content Moderation",
    ],
  },
  "mobile-app": {
    title: "Mobile App",
    description: "Design and develop a mobile application for sports merchandise and e-commerce.",
    longDescription:
      "A native mobile application for iOS and Android platforms, delivering a seamless shopping experience with push notifications, offline support, and secure payment processing.",
    skills: ["React Native", "Firebase", "UI/UX", "App Deployment"],
    image: "Mobile App",
    duration: "5 months",
    team: "6-7 members",
    technologies: [
      { name: "Mobile", items: ["React Native", "Expo", "TypeScript"] },
      { name: "Backend", items: ["Firebase", "Cloud Functions", "Firestore"] },
      { name: "DevOps", items: ["App Store Connect", "Google Play", "TestFlight"] },
    ],
    features: [
      "Product Catalog",
      "Shopping Cart & Checkout",
      "Push Notifications",
      "Offline Mode",
      "Payment Integration",
      "User Analytics",
    ],
  },
}

export default function ProjectDetail() {
  const params = useParams()
  const projectId = params.id as string
  const project = projectData[projectId]

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Link href="/" className="text-primary hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    )
  }

  const applyEmail = "internships@taraji-store.com"
  const emailSubject = `Apply Now - ${project.title}`

  return (
    <main className="min-h-screen bg-background">
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Header Section */}
        <div className="space-y-6 mb-12">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground">{project.title}</h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">{project.longDescription}</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-card/50 border border-border">
              <p className="text-sm text-muted-foreground">Duration</p>
              <p className="text-lg font-semibold text-foreground">{project.duration}</p>
            </div>
            <div className="p-4 rounded-lg bg-card/50 border border-border">
              <p className="text-sm text-muted-foreground">Team Size</p>
              <p className="text-lg font-semibold text-foreground">{project.team}</p>
            </div>
            <div className="p-4 rounded-lg bg-card/50 border border-border col-span-2 sm:col-span-1">
              <p className="text-sm text-muted-foreground">Status</p>
              <p className="text-lg font-semibold text-secondary">Open Now</p>
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="space-y-8 mb-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Tech Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.technologies.map((tech: any, idx: number) => (
                <div
                  key={idx}
                  className="p-6 rounded-lg bg-card/50 border border-border hover:border-primary/30 transition-colors"
                >
                  <h3 className="font-semibold text-secondary mb-3">{tech.name}</h3>
                  <ul className="space-y-2">
                    {tech.items.map((item: string, i: number) => (
                      <li key={i} className="text-sm text-muted-foreground">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="space-y-8 mb-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features.map((feature: string, idx: number) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-lg bg-card/30 border border-border hover:bg-card/50 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <p className="text-foreground">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="space-y-6 mb-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Required Skills</h2>
            <div className="flex flex-wrap gap-3">
              {project.skills.map((skill: string, idx: number) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-sm font-medium hover:bg-secondary/15 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section - Email format */}
        <div className="border-t border-border pt-12 space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Ready to Join?</h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
              Send an email to apply for this {project.title} position. Include your full name and portfolio link in
              your message.
            </p>
            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-lg bg-card/50 border border-border">
                <p className="text-sm text-muted-foreground mb-2">Email Address:</p>
                <p className="text-primary font-mono text-base md:text-lg break-all">{applyEmail}</p>
              </div>
              <div className="p-4 rounded-lg bg-card/50 border border-border">
                <p className="text-sm text-muted-foreground mb-2">Email Subject:</p>
                <p className="text-secondary font-mono text-base md:text-lg break-all">{emailSubject}</p>
              </div>
            </div>
          </div>
          <a
            href={`mailto:${applyEmail}?subject=${encodeURIComponent(emailSubject)}`}
            className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-primary hover:bg-primary/90 text-background font-bold rounded-lg transition-all duration-300 text-sm md:text-base hover:shadow-lg hover:shadow-primary/30"
          >
            <Mail size={20} />
            Send Application Email
          </a>
        </div>
      </div>
    </main>
  )
}
