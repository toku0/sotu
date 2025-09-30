import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Activities } from "@/components/activities"
import { Projects } from "@/components/projects"
import { Members } from "@/components/members"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Activities />
        <Projects />
        <Members />
      </main>
      <Footer />
    </div>
  )
}
