"use client"

import {
  ArrowUpRight,
} from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { featuredProjects } from "@/data"
import { ProjectCard } from "@/components/project-card"
import Link from "next/link"

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

export function WorkSection() {
  const { ref: workRef, inView: workInView } = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
      <section ref={workRef} className="w-full py-20 md:py-28 bg-gradient-to-br from-amber-50 to-white" id="work">
        <MotionDiv
          className="container px-4 md:px-6"
          initial="hidden"
          animate={workInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <MotionDiv
            className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
            variants={fadeIn}
          >
            <div className="space-y-2">
              <div className="inline-block rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800">
                Our Work
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                Featured Projects
              </h2>
              <p className="max-w-[800px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
                Explore our portfolio of successful projects that have helped businesses achieve their digital
                transformation goals.
              </p>
            </div>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                category={project.category}
                description={project.description}
                imageUrl={project.imageUrl}
                index={index}
              />
            ))}
          </div>

          <MotionDiv
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors text-lg"
            >
              View All Projects <ArrowUpRight className="ml-2 h-5 w-5" />
            </Link>
          </MotionDiv>
        </MotionDiv>
      </section>
    )
}
