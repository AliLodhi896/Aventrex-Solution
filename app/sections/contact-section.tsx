"use client"

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

export function Contactection() {
    const { ref: contactRef, inView: contactInView } = useInView({ triggerOnce: true, threshold: 0.1 })

    return (
        <section ref={contactRef} className="w-full py-20 md:py-28 bg-white" id="contact">
            <MotionDiv
                className="container px-4 md:px-6"
                initial="hidden"
                animate={contactInView ? "visible" : "hidden"}
                variants={staggerContainer}
            >
                <MotionDiv
                    className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
                    variants={fadeIn}
                >
                    <div className="space-y-2">
                        <div className="inline-block rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800">
                            Contact Us
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                            Get in Touch
                        </h2>
                        <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Ready to transform your business with innovative software solutions? Contact us today.
                        </p>
                    </div>
                </MotionDiv>

                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
                    <MotionDiv className="flex flex-col space-y-4" variants={fadeIn}>
                        <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-gray-700">
                                            Name
                                        </label>
                                        <input
                                            id="name"
                                            className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-gray-700">
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                                            placeholder="Your email"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                                        Subject
                                    </label>
                                    <input
                                        id="subject"
                                        className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                                        placeholder="Subject"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        className="h-32 w-full rounded-lg border border-gray-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                                        placeholder="Your message"
                                    />
                                </div>
                                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 py-6 h-auto text-base">
                                    Send Message
                                </Button>
                            </form>
                        </div>
                    </MotionDiv>

                    <MotionDiv className="flex flex-col space-y-6" variants={fadeIn}>
                        <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="rounded-full bg-amber-100 p-3 text-amber-600">
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
                                            className="h-5 w-5"
                                        >
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Phone</p>
                                        <p className="text-lg text-gray-700 mt-1">+1 (123) 456-7890</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="rounded-full bg-amber-100 p-3 text-amber-600">
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
                                            className="h-5 w-5"
                                        >
                                            <rect width="20" height="16" x="2" y="4" rx="2" />
                                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Email</p>
                                        <p className="text-lg text-gray-700 mt-1">info@aventrexsolutions.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="rounded-full bg-amber-100 p-3 text-amber-600">
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
                                            className="h-5 w-5"
                                        >
                                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Address</p>
                                        <p className="text-lg text-gray-700 mt-1">
                                            123 Business Avenue, Suite 456
                                            <br />
                                            Tech City, CA 98765
                                            <br />
                                            United States
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Business Hours</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                                    <p className="text-gray-600">Monday - Friday</p>
                                    <p className="text-lg font-medium text-gray-900">9:00 AM - 6:00 PM</p>
                                </div>
                                <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                                    <p className="text-gray-600">Saturday</p>
                                    <p className="text-lg font-medium text-gray-900">10:00 AM - 4:00 PM</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className="text-gray-600">Sunday</p>
                                    <p className="text-lg font-medium text-gray-900">Closed</p>
                                </div>
                            </div>
                        </div>
                    </MotionDiv>
                </div>
            </MotionDiv>
        </section>
    )
}
