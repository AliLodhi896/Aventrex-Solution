"use client"

import { ServiceCard } from "@/components/service-card"
import { Button } from "@/components/ui/button"
import { services } from "@/data"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

import {
    ArrowRight,
} from "lucide-react"

const MotionDiv = motion.div
const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
}

export function ServiceSection() {
  const { ref: servicesRef, inView: servicesInView } = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section ref={servicesRef} className="relative w-full py-20 md:py-28 bg-white overflow-hidden" id="services">
            {/* Animated background blobs */}
            <div className="absolute top-0 -left-4 w-72 h-72 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-amber-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>

            <MotionDiv
                className="container relative z-10 px-4 md:px-6"
                initial="hidden"
                animate={servicesInView ? "visible" : "hidden"}
                variants={staggerContainer}
            >
                <MotionDiv
                    className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
                    variants={fadeIn}
                >
                    <div className="space-y-2">
                        <div className="inline-block rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800">
                            Our Services
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                            Comprehensive Software Solutions
                        </h2>
                        <p className="max-w-[800px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
                            We offer a wide range of services to help your business grow and succeed in the digital landscape.
                            Explore our offerings to find the perfect solution for your needs.
                        </p>
                    </div>
                </MotionDiv>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            features={service.features}
                            gradient={service.gradient}
                            delay={index}
                        />
                    ))}
                </div>

                <MotionDiv
                    className="mt-16 bg-gradient-to-r from-amber-50 to-white rounded-2xl p-8 md:p-12 shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-4">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Ready to transform your business?</h3>
                            <p className="text-gray-600">
                                Our team of experts is ready to help you implement the perfect software solution for your business
                                needs.
                            </p>
                            <Button className="bg-amber-600 hover:bg-amber-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 mt-4">
                                Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                        <div className="flex justify-center">
                            <div className="relative w-48 h-48">
                                <div className="absolute inset-0 bg-amber-100 rounded-full opacity-50"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-amber-600 float-animation">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="80"
                                            height="80"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5v14"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </MotionDiv>
            </MotionDiv>
        </section>
    )
}
