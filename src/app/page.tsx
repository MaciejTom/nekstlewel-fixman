import dynamic from "next/dynamic"
import { Header } from "@/components/sections/Header"
import { HeroSection } from "@/components/sections/HeroSection"
import { WhyUsSection } from "@/components/sections/WhyUsSection"

// Lazy load below-fold sections for better performance
const ForWhomSection = dynamic(() => import("@/components/sections/ForWhomSection").then(mod => ({ default: mod.ForWhomSection })))
const HowWeWorkSection = dynamic(() => import("@/components/sections/HowWeWorkSection").then(mod => ({ default: mod.HowWeWorkSection })))
const PortfolioSection = dynamic(() => import("@/components/sections/PortfolioSection").then(mod => ({ default: mod.PortfolioSection })))
const ReviewsSection = dynamic(() => import("@/components/sections/ReviewsSection").then(mod => ({ default: mod.ReviewsSection })))
const CtaBannerSection = dynamic(() => import("@/components/sections/CtaBannerSection").then(mod => ({ default: mod.CtaBannerSection })))
const FaqSection = dynamic(() => import("@/components/sections/FaqSection").then(mod => ({ default: mod.FaqSection })))
const ContactSection = dynamic(() => import("@/components/sections/ContactSection").then(mod => ({ default: mod.ContactSection })))
const Footer = dynamic(() => import("@/components/sections/Footer").then(mod => ({ default: mod.Footer })))

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <WhyUsSection />
        <ForWhomSection />
        <HowWeWorkSection />
        <PortfolioSection />
        <ReviewsSection />
        <CtaBannerSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
