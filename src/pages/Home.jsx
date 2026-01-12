import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { WhyInvest } from "@/components/why-invest"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { usePageTitle } from "@/hooks/usePageTitle"

export default function Home() {
  usePageTitle('')

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <Services />
        <About />
        <WhyInvest />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
