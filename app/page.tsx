"use client"
import { HeroSection } from "./sections/hero-section"
import { ServiceSection } from "./sections/services-section"
import { WorkSection } from "./sections/work-section"
import { AboutSection } from "./sections/about-section"
import { WhyChooseUsSection } from "./sections/why-us-section"
import { Contactection } from "./sections/contact-section"

export default function Home() {

  return (
    <div className="flex  min-h-screen flex-col">
      <HeroSection />
      <ServiceSection />
      <WorkSection />
      <AboutSection />
      <WhyChooseUsSection />
      <Contactection />
    </div>
  )
}
