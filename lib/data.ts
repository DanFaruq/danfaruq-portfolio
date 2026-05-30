export const TAB_DATA: Record<string, string> = {
  overview:
    "E4G Team needed a single platform to track grants, assign tasks, and manage stakeholder relationships. I built a purpose-built system in 4 weeks that now runs their entire grant operation.",
  problem:
    "The team was managing 20+ grants across spreadsheets and email threads. Deadlines were missed, ownership was unclear, and there was no single source of truth for the team.",
  build:
    "Built with Next.js 16 App Router + Server Actions, Supabase for auth, Postgres + RLS, and real-time subscriptions. Service Worker handles Web Push notifications. Deployed on Vercel with daily cron jobs.",
  tech_stack:
    "React 19 · Next.js 16 · TypeScript · Supabase (Postgres + RLS + Realtime) · Tailwind CSS v4 · Framer Motion · shadcn/ui · Vercel · Web Push (VAPID) · Zod · React Hook Form · Resend",
  results:
    "The team went from spreadsheets to a fully live production platform. Every member has a personal My Work dashboard. Push notifications track deadlines. Admin can view any team member's workload in one click.",
  live_demo: "Opening live app — e4g-grant-tracker.vercel.app",
}

export const WALKTHROUGH_SCREENS = [
  {
    label: "Dashboard",
    annotation: "← Grant overview",
    description: "Real-time KPIs — overdue, due today, in progress, awarded",
    image: "/screenshots/e4g-dashboard.png",
  },
  {
    label: "My Work",
    annotation: "← Personal dashboard",
    description: "Per-user view of assigned tasks, events, and grants",
    image: "/screenshots/e4g-mywork.png",
  },
  {
    label: "Grants",
    annotation: "← Full grant list",
    description: "Kanban or list view with stage filters and deadline tracking",
    image: "/screenshots/e4g-grants.png",
  },
  {
    label: "Mobile",
    annotation: "← PWA-ready",
    description: "Fully responsive with mobile tab bar and push notifications",
    image: "/screenshots/e4g-mobile.png",
  },
]

export const SERVICES = [
  { icon: "🚀", title: "Landing Pages", desc: "High-converting marketing pages, product launches, and startup landing pages that look great on every screen.", note: "→ from idea to live in days" },
  { icon: "🌐", title: "Business Websites", desc: "Portfolios, agency sites, NGO websites, and service pages — fast, SEO-friendly, and easy to update.", note: "→ Next.js or custom HTML/CSS" },
  { icon: "⚡", title: "Web Applications", desc: "Full-stack apps with auth, database, real-time data, file uploads, and role-based access control.", note: "→ React · Next.js · Supabase" },
  { icon: "🛠", title: "Internal Tools", desc: "Custom dashboards, admin panels, and workflow apps that replace spreadsheets and cut manual work.", note: "→ your team's new favourite tool" },
  { icon: "📊", title: "Dashboards & Reports", desc: "Live data visualisation with filters, role-based views, and charts that update in real time.", note: "→ connected to your data source" },
  { icon: "🎨", title: "UI/UX Design + Build", desc: "I design the interface and build it — no separate designer needed. Clean, usable, and on-brand.", note: "→ Figma → code, or design-as-I-build" },
]

export const STACK = [
  { label: "React 19", highlight: true },
  { label: "Next.js 16", highlight: true },
  { label: "TypeScript", highlight: true },
  { label: "Supabase" },
  { label: "PostgreSQL" },
  { label: "Tailwind CSS v4" },
  { label: "Framer Motion" },
  { label: "shadcn/ui" },
  { label: "Zod" },
  { label: "Vercel" },
  { label: "Web Push" },
  { label: "Resend" },
  { label: "HTML / CSS" },
  { label: "Node.js" },
]

export const FAQ_ITEMS = [
  { q: "How long does a project take?", a: "Landing pages and simple sites: 3–7 days. Internal tools and web apps: 3–6 weeks. Complex platforms: 8–12 weeks. I give you a fixed timeline after our first call." },
  { q: "Do you do design too, or just development?", a: "Both. I design the interface and build it. You don't need a separate designer — I work from your brief, a rough sketch, or from scratch. For larger projects I use Figma to align before building." },
  { q: "What do you need from me to get started?", a: "A description of the problem you want solved, who uses it, and any existing tools or data to work with. I handle everything else — design, architecture, build, and deployment." },
  { q: "Do you do ongoing maintenance?", a: "Yes. After the 2-week post-launch support period I offer monthly retainers for ongoing development and maintenance. Rates depend on scope." },
  { q: "I'm not technical — will I understand what's being built?", a: "Absolutely. I write in plain English, send weekly Loom updates, and give you a live preview link from day one. You stay in the loop without needing to understand code." },
]

export const PROCESS_STEPS = [
  { n: "01", icon: "🔍", title: "Discover", desc: "I ask the hard questions first — what problem are we solving, who uses it, what does success look like?" },
  { n: "02", icon: "📐", title: "Design", desc: "Architecture before code. Data model, auth flow, and component structure agreed before a line is written." },
  { n: "03", icon: "⚡", title: "Build", desc: "Weekly check-ins and live preview links throughout. You see progress, not just a final reveal." },
  { n: "04", icon: "🚀", title: "Ship", desc: "Deployed, tested, and documented. I stay on for 2 weeks post-launch to catch anything unexpected." },
]
