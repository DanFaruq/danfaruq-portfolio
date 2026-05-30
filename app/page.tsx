import { Hero } from "@/components/sections/Hero"
import { Projects } from "@/components/sections/Projects"
import { Process } from "@/components/sections/Process"
import { Services } from "@/components/sections/Services"
import { Availability } from "@/components/sections/Availability"
import { Stack } from "@/components/sections/Stack"
import { Testimonial } from "@/components/sections/Testimonial"
import { FAQ } from "@/components/sections/FAQ"
import { Contact } from "@/components/sections/Contact"

function Divider() {
  return (
    <div
      className="h-[1px] max-w-[960px] mx-auto"
      style={{ background: "linear-gradient(90deg, transparent, var(--border), transparent)" }}
    />
  )
}

export default function Page() {
  return (
    <>
      <Hero />
      <Divider />
      <Projects />
      <Divider />
      <Process />
      <Divider />
      <Services />
      <Divider />
      <Availability />
      <Divider />
      <Stack />
      <Testimonial />
      <Divider />
      <FAQ />
      <Contact />
      <footer
        className="relative z-[1] py-5 px-6 text-center text-[11px]"
        style={{
          background: "var(--bg2)",
          borderTop: "1px solid var(--border)",
          color: "var(--text3)",
          fontFamily: "var(--mono)",
        }}
      >
        {"{danfaruq}"} · built with React & Next.js · © 2026
      </footer>
    </>
  )
}
