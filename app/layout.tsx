import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/ui/ThemeProvider"
import { Navbar } from "@/components/nav/Navbar"
import { MobileCTA } from "@/components/ui/MobileCTA"

export const metadata: Metadata = {
  title: "Dan Faruq — Full-Stack Developer",
  description:
    "I build tools teams actually use. React, Next.js & Supabase specialist. Landing pages to complex web apps — designed, built, and shipped.",
  openGraph: {
    title: "Dan Faruq — Full-Stack Developer",
    description: "React · Next.js · Supabase. From landing pages to complex web apps.",
    url: "https://danfaruq.dev",
    siteName: "Dan Faruq",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <MobileCTA />
        </ThemeProvider>
      </body>
    </html>
  )
}
