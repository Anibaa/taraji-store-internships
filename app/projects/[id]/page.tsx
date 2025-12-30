"use client"

import Link from "next/link"
import { ArrowLeft, Mail } from "lucide-react"
import { useParams } from "next/navigation"

const projectData: Record<string, any> = {
  "it-hr-platform": {
    title: "Project 1 - Human Resources Management Platform (HRIS)",
    description: "Centralized platform for employee management and HR operations.",
    longDescription:
      "A comprehensive Human Resources Information System designed to digitize and optimize internal HR processes. The platform centralizes employee data, automates HR workflows such as leave management and attendance tracking, and ensures secure role-based access. Built to improve operational efficiency and scalability within modern organizations.",
    skills: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS", "Docker"],
    image: "HR Management Platform",
    duration: "6 months",
    team: "6-8 members",
    technologies: [
      { name: "Frontend", items: ["Next.js", "TypeScript", "Tailwind CSS"] },
      { name: "Backend", items: ["Node.js", "Express", "PostgreSQL"] },
      { name: "Security", items: ["JWT Authentication", "Role-Based Access Control"] },
    ],
    features: [
      "Employee Records Management",
      "Leave & Attendance Tracking",
      "HR Workflow Automation",
      "Role-based Access Control",
      "Internal Process Transparency",
      "Scalable HR Architecture",
    ],
  },

  "intelligent-web-platform": {
    title: "Project 2 - Intelligent Web Platform with Chatbot",
    description: "Modern web platform with automation and intelligent user engagement.",
    longDescription:
      "A next-generation web platform built around automation, scalability, and intelligent interaction. The system delivers a seamless user experience through responsive design and automated workflows, while remaining ready for conversational chatbots and future AI-driven modules such as recommendation or predictive services.",
    skills: ["React", "Node.js", "Automation", "UI/UX", "AI Integration"],
    image: "Intelligent Web Platform",
    duration: "5 months",
    team: "5-6 members",
    technologies: [
      { name: "Frontend", items: ["React", "TypeScript", "Tailwind CSS"] },
      { name: "Backend", items: ["Node.js", "REST APIs"] },
      { name: "Automation", items: ["Workflow Engines", "Event-based Processing"] },
    ],
    features: [
      "Responsive User Interface",
      "Automated Digital Workflows",
      "Chatbot-Ready Architecture",
      "Personalized User Experiences",
      "Secure & Reliable System Design",
      "AI-Extensible Infrastructure",
    ],
  },

  "mobile-smart-app": {
    title: "Project 3 - Cross-Platform Mobile Application",
    description: "Smart mobile application with personalized user experience.",
    longDescription:
      "A cross-platform mobile application designed to deliver a fluid and engaging user experience on portable devices. The solution emphasizes personalization, real-time communication, and secure backend integration, while maintaining flexibility for future enhancements such as AI-powered notifications or conversational assistants.",
    skills: ["React Native", "Firebase", "UX/UI Design", "API Integration"],
    image: "Mobile Application",
    duration: "5 months",
    team: "4-6 members",
    technologies: [
      { name: "Mobile", items: ["React Native", "Expo"] },
      { name: "Backend", items: ["REST APIs", "Firebase"] },
      { name: "UX/UI", items: ["User-Centered Design", "Mobile UX Patterns"] },
    ],
    features: [
      "Cross-Platform Mobile Support",
      "Real-time Notifications",
      "Personalized User Features",
      "Secure Data Synchronization",
      "Modern UX/UI Design",
      "Scalable Mobile Architecture",
    ],
  },

  "unified-interaction-platform": {
    title: "Project 4 - Unified Digital Interaction Platform",
    description: "Centralized communication platform with AI-assisted intelligence.",
    longDescription:
      "A centralized digital workspace that unifies communications from multiple channels and enhances them through AI-assisted conversational intelligence. The platform supports automated classification, prioritization, and smart response suggestions to improve interaction efficiency and reflect modern AI-driven communication systems.",
    skills: ["AI Assistance", "Automation", "Dashboard Design", "Chatbot Systems"],
    image: "Unified Interaction Platform",
    duration: "6 months",
    team: "6-7 members",
    technologies: [
      { name: "Frontend", items: ["Dashboard UI", "Data Visualization"] },
      { name: "Backend", items: ["Node.js", "Message Processing APIs"] },
      { name: "AI Layer", items: ["Conversational Intelligence", "Suggestion Engines"] },
    ],
    features: [
      "Multi-Channel Communication Centralization",
      "AI-Assisted Response Suggestions",
      "Conversation Classification & Prioritization",
      "Operator Management Dashboard",
      "Automated Interaction Processing",
      "Future-Ready AI Architecture",
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
  const emailSubject = `Full Name - Project`

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
