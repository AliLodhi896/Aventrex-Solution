import {
    ArrowRight,
    ArrowUpRight,
    CheckCircle,
    Code,
    Database,
    Globe,
    Layers,
    MessageSquare,
    Users,
} from "lucide-react"

export const services = [
    {
        icon: <Code className="h-6 w-6 text-amber-600" />,
        title: "Custom Software Development",
        description: "Tailored software solutions designed to meet your specific business requirements.",
        features: [
            "Customized to your exact needs",
            "Scalable architecture",
            "Modern tech stack",
            "Seamless integration",
        ],
        gradient: "from-amber-600 to-amber-800",
    },
    {
        icon: <Globe className="h-6 w-6 text-amber-600" />,
        title: "Web Application Development",
        description: "Responsive and scalable web applications built with the latest technologies.",
        features: [
            "Responsive design",
            "Cross-browser compatibility",
            "Progressive web apps",
            "Performance optimization",
        ],
        gradient: "from-amber-500 to-amber-700",
    },
    {
        icon: <Database className="h-6 w-6 text-amber-600" />,
        title: "Cloud Solutions",
        description: "Secure and scalable cloud infrastructure to optimize your business operations.",
        features: ["Cloud migration", "Infrastructure as code", "Serverless architecture", "Continuous deployment"],
        gradient: "from-amber-400 to-amber-600",
    },
    {
        icon: <Layers className="h-6 w-6 text-amber-600" />,
        title: "Digital Transformation",
        description: "Strategic guidance to help your business adapt and thrive in the digital age.",
        features: [
            "Business process automation",
            "Legacy system modernization",
            "Digital strategy consulting",
            "Technology roadmapping",
        ],
        gradient: "from-amber-600 to-amber-800",
    },
    {
        icon: <MessageSquare className="h-6 w-6 text-amber-600" />,
        title: "IT Consulting",
        description: "Expert advice on technology strategy, architecture, and implementation.",
        features: ["Technology assessment", "Solution architecture", "Security consulting", "Performance optimization"],
        gradient: "from-amber-500 to-amber-700",
    },
    {
        icon: <Users className="h-6 w-6 text-amber-600" />,
        title: "Dedicated Development Teams",
        description: "Skilled developers who work as an extension of your in-house team.",
        features: ["Vetted tech talent", "Flexible team scaling", "Agile development", "Transparent communication"],
        gradient: "from-amber-400 to-amber-600",
    },
]

export const featuredProjects = [
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
]