import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Projects | Aventrex Solutions",
  description: "Explore our portfolio of successful projects that have helped businesses achieve their goals.",
}

export default function ProjectsPage() {
  const allProjects = [
    {
      id: "fintech-dashboard",
      title: "FinTech Dashboard",
      category: "Web Application",
      description:
        "A comprehensive financial dashboard for a leading FinTech company, providing real-time analytics and transaction monitoring.",
      imageUrl: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "healthcare-platform",
      title: "Healthcare Management Platform",
      category: "Custom Software",
      description:
        "An integrated healthcare management system that streamlines patient care, appointment scheduling, and medical record management.",
      imageUrl: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "ecommerce-solution",
      title: "E-Commerce Solution",
      category: "Web Application",
      description:
        "A scalable e-commerce platform with advanced inventory management, payment processing, and customer analytics.",
      imageUrl: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "logistics-tracking",
      title: "Logistics Tracking System",
      category: "Mobile Application",
      description:
        "A real-time logistics tracking system that provides end-to-end visibility of shipments and optimizes delivery routes.",
      imageUrl: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "crm-system",
      title: "Enterprise CRM System",
      category: "Custom Software",
      description:
        "A customized customer relationship management system that integrates with existing business processes and enhances customer engagement.",
      imageUrl: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "iot-monitoring",
      title: "IoT Monitoring Dashboard",
      category: "IoT Solution",
      description:
        "An IoT monitoring dashboard that collects and analyzes data from connected devices to provide actionable insights.",
      imageUrl: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "ai-recommendation",
      title: "AI-Powered Recommendation Engine",
      category: "Artificial Intelligence",
      description:
        "A machine learning-based recommendation engine that analyzes user behavior to provide personalized product suggestions.",
      imageUrl: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "blockchain-platform",
      title: "Blockchain Supply Chain Platform",
      category: "Blockchain",
      description:
        "A blockchain-based supply chain platform that ensures transparency, traceability, and security in the supply chain process.",
      imageUrl: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "mobile-banking",
      title: "Mobile Banking Application",
      category: "Mobile Application",
      description:
        "A secure and user-friendly mobile banking application that enables customers to manage their finances on the go.",
      imageUrl: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "hr-management",
      title: "HR Management System",
      category: "Custom Software",
      description:
        "A comprehensive HR management system that streamlines recruitment, onboarding, performance evaluation, and payroll processes.",
      imageUrl: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "real-estate-platform",
      title: "Real Estate Platform",
      category: "Web Application",
      description:
        "A feature-rich real estate platform that connects buyers, sellers, and agents, providing property listings, virtual tours, and market analytics.",
      imageUrl: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "education-lms",
      title: "Education Learning Management System",
      category: "EdTech",
      description:
        "A learning management system for educational institutions that facilitates online learning, course management, and student assessment.",
      imageUrl: "/placeholder.svg?height=600&width=800",
    },
  ]

  const categories = [
    "All",
    "Web Application",
    "Mobile Application",
    "Custom Software",
    "IoT Solution",
    "Artificial Intelligence",
    "Blockchain",
    "EdTech",
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <div className="bg-gradient-to-br from-amber-50 to-white py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-amber-600 hover:text-amber-700 mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 mb-4">Our Projects</h1>
            <p className="max-w-[800px] text-gray-600 md:text-xl">
              Explore our portfolio of successful projects that have helped businesses achieve their digital
              transformation goals.
            </p>
          </div>

          <div className="mb-10 overflow-x-auto">
            <div className="flex space-x-2 pb-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  className={
                    category === "All"
                      ? "bg-amber-600 hover:bg-amber-700 text-white"
                      : "border-amber-200 text-gray-700 hover:bg-amber-50 hover:text-amber-700 hover:border-amber-300"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="mb-2 text-sm font-medium text-amber-600">{project.category}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors"
                  >
                    View Details
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-1 h-4 w-4"
                    >
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
