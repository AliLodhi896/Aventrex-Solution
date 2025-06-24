"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import {
    ArrowRight,
} from "lucide-react"
import Image from "next/image"

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

export function HeroSection() {
    return (
        <section className="relative  w-full py-20 md:py-28 lg:py-36 overflow-hidden" >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-amber-100 z-0"></div>
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5 z-0"></div>

            <MotionDiv
                className="container relative z-10 px-4 md:px-6"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
            >
                <div className="grid gap-6 lg:grid-cols-1 lg:gap-12 xl:grid-cols-1 xl:gap-16 items-center">
                    <MotionDiv className="flex flex-col justify-center items-center space-y-6" variants={fadeIn}>
                        <div className="space-y-4 items-center text-center">
                            <div className="inline-block text-center rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800 mb-2">
                                Crafting Tomorrow’s Success: Fast and Affordable Product Development
                            </div>
                            <h1 className="text-4xl text-center font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
                                Transform Your Business With Technology
                            </h1>
                            <p className="text-center text-gray-600 md:text-xl leading-relaxed">
                                Aventrex Solutions delivers cutting-edge software development, cloud solutions, and digital
                                transformation services to help your business thrive in the digital age.
                            </p>
                        </div>
                        <div className="inline-block text-center rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800 mb-2">
                            Turning Ideas into Enjoyable Realities                            </div>
                        <div className="flex flex-col gap-3 min-[400px]:flex-row">
                            <Button className="bg-amber-600 hover:bg-amber-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-4 py-2 h-auto text-base">
                                Get Started <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                            <Button
                                variant="outline"
                                className="border-amber-600 text-amber-600 hover:bg-amber-50 transition-all duration-300 px-4 py-2 h-auto text-base"
                            >
                                Learn More
                            </Button>
                        </div>
                    </MotionDiv>
                    {/*  */}
                </div>

                {/* <MotionDiv
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 border-t border-gray-200 pt-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    <div className="flex flex-col items-center text-center">
                        <div className="text-3xl font-bold text-amber-600 mb-2">10+</div>
                        <div className="text-sm text-gray-600">Years of Experience</div>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="text-3xl font-bold text-amber-600 mb-2">200+</div>
                        <div className="text-sm text-gray-600">Projects Completed</div>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="text-3xl font-bold text-amber-600 mb-2">50+</div>
                        <div className="text-sm text-gray-600">Expert Developers</div>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="text-3xl font-bold text-amber-600 mb-2">98%</div>
                        <div className="text-sm text-gray-600">Client Satisfaction</div>
                    </div>
                </MotionDiv> */}
            </MotionDiv>
        </section >
    )
}
