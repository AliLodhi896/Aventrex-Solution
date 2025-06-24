import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, CheckCircle, Clock, Code, ExternalLink, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"

interface ProjectPageProps {
  params: {
    id: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  // This would typically come from a database or API
  const projects = {
    "fintech-dashboard": {
      title: "FinTech Dashboard",
      category: "Web Application",
      client: "Global Finance Corp",
      duration: "4 months",
      completedDate: "June 2023",
      teamSize: "6 developers",
      description:
        "A comprehensive financial dashboard for a leading FinTech company, providing real-time analytics and transaction monitoring.",
      challenge:
        "The client needed a robust, secure, and user-friendly dashboard that could handle large volumes of financial data in real-time. The system needed to integrate with multiple data sources and provide actionable insights to users with varying levels of technical expertise.",
      solution:
        "We developed a responsive web application using React and Next.js for the frontend, with a Node.js backend and MongoDB for data storage. The dashboard features real-time data visualization, customizable widgets, and role-based access control. We implemented WebSocket connections for live updates and used advanced charting libraries for data visualization.",
      results: [
        "50% reduction in time spent analyzing financial data",
        "30% increase in detection of fraudulent transactions",
        "Improved user satisfaction with intuitive interface",
        "Seamless integration with existing financial systems",
      ],
      technologies: ["React", "Next.js", "Node.js", "MongoDB", "WebSockets", "D3.js", "Docker", "AWS"],
      imageUrl: "/placeholder.svg?height=600&width=800",
      galleryImages: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
    },
    "healthcare-platform": {
      title: "Healthcare Management Platform",
      category: "Custom Software",
      client: "MediCare Solutions",
      duration: "6 months",
      completedDate: "March 2023",
      teamSize: "8 developers",
      description:
        "An integrated healthcare management system that streamlines patient care, appointment scheduling, and medical record management.",
      challenge:
        "The client was struggling with fragmented systems for patient management, appointment scheduling, and medical records. They needed a unified platform that could improve operational efficiency while ensuring compliance with healthcare regulations and data privacy standards.",
      solution:
        "We developed a comprehensive healthcare management platform using a microservices architecture. The system includes modules for patient registration, appointment scheduling, electronic medical records, billing, and reporting. We implemented strict access controls and encryption to ensure HIPAA compliance and data security.",
      results: [
        "40% reduction in administrative workload",
        "60% faster access to patient records",
        "25% decrease in appointment no-shows",
        "Improved patient satisfaction with online scheduling",
      ],
      technologies: ["Angular", "Java Spring Boot", "PostgreSQL", "Redis", "Kubernetes", "OAuth 2.0", "Azure Cloud"],
      imageUrl: "/placeholder.svg?height=600&width=800",
      galleryImages: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
    },
    "ecommerce-solution": {
      title: "E-Commerce Solution",
      category: "Web Application",
      client: "RetailPro Inc.",
      duration: "5 months",
      completedDate: "November 2023",
      teamSize: "7 developers",
      description:
        "A scalable e-commerce platform with advanced inventory management, payment processing, and customer analytics.",
      challenge:
        "The client needed to transition from a brick-and-mortar retail model to an online e-commerce platform. They required a solution that could handle their extensive product catalog, integrate with their existing inventory system, and provide a seamless shopping experience for customers.",
      solution:
        "We developed a custom e-commerce platform using Next.js for the frontend and a headless CMS for content management. The platform features advanced search functionality, personalized product recommendations, secure payment processing, and real-time inventory tracking. We also implemented a comprehensive analytics dashboard to track customer behavior and sales performance.",
      results: [
        "200% increase in online sales within the first quarter",
        "35% reduction in inventory management time",
        "45% improvement in customer retention",
        "Seamless integration with existing ERP system",
      ],
      technologies: ["Next.js", "GraphQL", "Strapi CMS", "Stripe", "Elasticsearch", "Redis", "Docker", "Google Cloud"],
      imageUrl: "/placeholder.svg?height=600&width=800",
      galleryImages: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
    },
    "logistics-tracking": {
      title: "Logistics Tracking System",
      category: "Mobile Application",
      client: "Global Logistics Ltd.",
      duration: "4 months",
      completedDate: "August 2023",
      teamSize: "5 developers",
      description:
        "A real-time logistics tracking system that provides end-to-end visibility of shipments and optimizes delivery routes.",
      challenge:
        "The client was facing challenges with tracking shipments across different transportation modes and geographical regions. They needed a solution that could provide real-time visibility of shipments, optimize delivery routes, and improve communication with customers.",
      solution:
        "We developed a mobile application for both iOS and Android platforms using React Native. The application integrates with GPS tracking devices and provides real-time updates on shipment location and status. We implemented an algorithm for route optimization and automated notifications for customers. The backend is built with Node.js and uses MongoDB for data storage.",
      results: [
        "30% reduction in delivery time",
        "25% decrease in fuel consumption",
        "60% improvement in customer satisfaction",
        "Real-time visibility of all shipments",
      ],
      technologies: ["React Native", "Node.js", "MongoDB", "Google Maps API", "Socket.io", "AWS", "Firebase"],
      imageUrl: "/placeholder.svg?height=600&width=800",
      galleryImages: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
    },
    "crm-system": {
      title: "Enterprise CRM System",
      category: "Custom Software",
      client: "Business Solutions Corp",
      duration: "7 months",
      completedDate: "January 2023",
      teamSize: "9 developers",
      description:
        "A customized customer relationship management system that integrates with existing business processes and enhances customer engagement.",
      challenge:
        "The client had outgrown their off-the-shelf CRM solution and needed a customized system that could integrate with their existing business processes and provide advanced analytics for customer engagement. They also required a solution that could scale with their growing business.",
      solution:
        "We developed a custom CRM system using a microservices architecture. The system includes modules for contact management, sales pipeline, marketing automation, customer service, and analytics. We implemented a RESTful API for integration with other business systems and used Elasticsearch for advanced search capabilities.",
      results: [
        "40% increase in sales team productivity",
        "50% improvement in lead conversion rate",
        "35% reduction in customer service response time",
        "Comprehensive view of customer interactions across all channels",
      ],
      technologies: [
        "Vue.js",
        "Python Django",
        "PostgreSQL",
        "Elasticsearch",
        "RabbitMQ",
        "Docker",
        "Kubernetes",
        "Azure",
      ],
      imageUrl: "/placeholder.svg?height=600&width=800",
      galleryImages: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
    },
    "iot-monitoring": {
      title: "IoT Monitoring Dashboard",
      category: "IoT Solution",
      client: "Smart Manufacturing Inc.",
      duration: "5 months",
      completedDate: "October 2023",
      teamSize: "6 developers",
      description:
        "An IoT monitoring dashboard that collects and analyzes data from connected devices to provide actionable insights.",
      challenge:
        "The client needed a solution to monitor and analyze data from thousands of IoT devices in their manufacturing facilities. They required real-time alerts for anomalies, predictive maintenance capabilities, and insights to optimize production processes.",
      solution:
        "We developed an IoT monitoring dashboard using React for the frontend and a serverless architecture for the backend. The system collects data from IoT devices using MQTT protocol, processes it using AWS Lambda functions, and stores it in a time-series database. We implemented machine learning algorithms for anomaly detection and predictive maintenance.",
      results: [
        "45% reduction in equipment downtime",
        "30% decrease in maintenance costs",
        "20% improvement in production efficiency",
        "Real-time visibility of all connected devices",
      ],
      technologies: ["React", "AWS Lambda", "AWS IoT Core", "MQTT", "InfluxDB", "Grafana", "TensorFlow", "Docker"],
      imageUrl: "/placeholder.svg?height=600&width=800",
      galleryImages: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
    },
  }

  const project = projects[params.id as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-amber-50 to-white py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mb-8">
            <Link href="/projects" className="inline-flex items-center text-amber-600 hover:text-amber-700 mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 mb-4">{project.title}</h1>
            <p className="max-w-[800px] text-gray-600 md:text-xl mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800">
                {project.category}
              </span>
              <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800">
                <Calendar className="mr-1 h-4 w-4" />
                {project.completedDate}
              </span>
              <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800">
                <Clock className="mr-1 h-4 w-4" />
                {project.duration}
              </span>
              <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800">
                <Users className="mr-1 h-4 w-4" />
                {project.teamSize}
              </span>
            </div>
          </div>

          <div className="relative h-[400px] w-full overflow-hidden rounded-2xl shadow-xl mb-16">
            <Image src={project.imageUrl || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h2>
                <p className="text-gray-600">{project.challenge}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Solution</h2>
                <p className="text-gray-600">{project.solution}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Results</h2>
                <ul className="space-y-3">
                  {project.results.map((result, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-600">{result}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {project.galleryImages.map((image, index) => (
                    <div key={index} className="relative h-48 overflow-hidden rounded-lg shadow-md">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${project.title} screenshot ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Client</h3>
                <p className="text-gray-600">{project.client}</p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800"
                    >
                      <Code className="mr-1 h-3 w-3" />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Interested in a similar project?</h3>
                <p className="text-gray-600 mb-4">
                  We can help you implement a similar solution tailored to your business needs.
                </p>
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                  Contact Us <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-gray-200 pt-8">
            <div className="flex justify-between items-center">
              <Link href="/projects" className="inline-flex items-center text-amber-600 hover:text-amber-700">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All Projects
              </Link>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                Next Project <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
