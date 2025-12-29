"use client"

import type React from "react"

import { useState } from "react"
import { Mail } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    project: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send data to a backend
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  if (submitted) {
    return (
      <div className="bg-primary/10 border border-primary/20 rounded-lg p-8 flex items-center justify-center h-full animate-fade-in">
        <div className="text-center">
          <Mail className="text-primary mx-auto mb-4" size={40} />
          <h3 className="text-lg font-bold text-foreground mb-2">Application Received!</h3>
          <p className="text-muted-foreground text-sm">
            Thank you for your interest. We'll review your application and get back to you soon.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in">
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
          placeholder="Your full name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Project of Interest</label>
        <select
          name="project"
          value={formData.project}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
        >
          <option value="">Select a project</option>
          <option value="it-hr">IT & HR Management Platform</option>
          <option value="ecommerce-chatbot">E-commerce Platform with Chatbot</option>
          <option value="social-media">Centralized Social Media Response Platform</option>
          <option value="mobile">Mobile Application Development</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
          placeholder="Tell us why you're interested in this project..."
        />
      </div>

      <button
        type="submit"
        className="w-full px-6 py-3 bg-primary text-primary-foreground rounded font-medium hover:bg-primary/90 transition-colors"
      >
        Submit Application
      </button>

      <p className="text-xs text-muted-foreground text-center">
        Don't forget to attach your CV when sending to internships@tarajistore.tn
      </p>
    </form>
  )
}
