"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

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

export function WhyChooseUsSection() {
    const { ref: whyUsRef, inView: whyUsInView } = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section ref={whyUsRef} className="w-full py-20 md:py-28 bg-gradient-to-br from-amber-50 to-white" id="why-us">
            <MotionDiv
                className="container px-4 md:px-6"
                initial="hidden"
                animate={whyUsInView ? "visible" : "hidden"}
                variants={staggerContainer}
            >
                <MotionDiv
                    className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
                    variants={fadeIn}
                >
                    <div className="space-y-2">
                        <div className="inline-block rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800">
                            Why Choose Us
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                            Our Approach Makes the Difference
                        </h2>
                        <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            We combine technical expertise with a deep understanding of business needs to deliver exceptional
                            results.
                        </p>
                    </div>
                </MotionDiv>

                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {[
                        {
                            title: "Client-Centric Approach",
                            description:
                                "We prioritize your business goals and work closely with you to ensure our solutions align with your vision.",
                        },
                        {
                            title: "Technical Excellence",
                            description:
                                "Our team of skilled developers stays up-to-date with the latest technologies and best practices.",
                        },
                        {
                            title: "Agile Methodology",
                            description:
                                "We follow agile development practices to ensure flexibility, transparency, and timely delivery.",
                        },
                        {
                            title: "Quality Assurance",
                            description: "Rigorous testing and quality control processes ensure reliable and robust solutions.",
                        },
                        {
                            title: "Ongoing Support",
                            description: "We provide continuous support and maintenance to ensure your solutions remain effective.",
                        },
                        {
                            title: "Cost-Effective Solutions",
                            description: "We deliver high-quality solutions that provide excellent value for your investment.",
                        },
                    ].map((item, index) => (
                        <MotionDiv
                            key={index}
                            className="flex flex-col space-y-3 rounded-xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-all"
                            variants={fadeIn}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        >
                            <div className="flex items-center space-x-2">
                                <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold">
                                    {index + 1}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                            </div>
                            <p className="text-gray-600">{item.description}</p>
                        </MotionDiv>
                    ))}
                </div>
            </MotionDiv>
        </section>
    )
}
