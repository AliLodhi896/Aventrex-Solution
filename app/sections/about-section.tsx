"use client"

import {
  CheckCircle,
} from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"

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

export function AboutSection() {
  const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
           <section ref={aboutRef} className="w-full py-20 md:py-28 bg-white" id="about">
        <MotionDiv
          className="container px-4 md:px-6"
          initial="hidden"
          animate={aboutInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <MotionDiv className="flex flex-col justify-center space-y-6" variants={fadeIn}>
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800">
                  About Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                  Who We Are
                </h2>
                <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Aventrex Solutions is a leading software development company dedicated to delivering innovative and
                  reliable solutions to businesses of all sizes.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  "10+ years of industry experience",
                  "Team of expert developers and engineers",
                  "Commitment to quality and client satisfaction",
                  "Innovative approach to problem-solving",
                ].map((item, index) => (
                  <MotionDiv
                    key={index}
                    className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm"
                    variants={fadeIn}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <p className="text-gray-700 font-medium">{item}</p>
                  </MotionDiv>
                ))}
              </div>
              <div>
                <Button className="bg-amber-600 hover:bg-amber-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  Learn More About Us
                </Button>
              </div>
            </MotionDiv>
            <MotionDiv className="flex items-center justify-center" variants={fadeIn}>
              <div className="relative h-[400px] w-full overflow-hidden rounded-2xl shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-amber-600/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full bg-[url('/placeholder.svg?height=800&width=600')] bg-cover bg-center"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
                    <p className="text-white/90">To empower businesses through innovative technology solutions</p>
                  </div>
                </div>
              </div>
            </MotionDiv>
          </div>
        </MotionDiv>
      </section>
    )
}
