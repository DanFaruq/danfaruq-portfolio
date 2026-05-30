"use client"

import { useState } from "react"

type Tooltip = { id: string; title: string; desc: string }

const TOOLTIPS: Tooltip[] = [
  { id: "sidebar", title: "Sidebar navigation", desc: "Persistent left nav gives every team member quick access to Grants, Tasks, Events, Stakeholders, and Notifications." },
  { id: "header", title: "Dashboard header", desc: "Shows the active team and live grant count. '+ New Grant' opens a guided form to start tracking a new grant in seconds." },
  { id: "kpis", title: "Real-time KPI strip", desc: "Overdue · Due Today · In Progress · Awarded — pulled live from Supabase Realtime. Updates across all clients with no page refresh." },
  { id: "task1", title: "Task row", desc: "Each task shows its title, status, priority, and linked grant. Click to open the full task with comments, activity history, and assignees." },
  { id: "task2", title: "Status & priority chips", desc: "Colour-coded at a glance. Status changes inline via a Server Action — the update writes to the DB and revalidates the page instantly." },
]

export function AppMockup() {
  const [active, setActive] = useState<Tooltip | null>(null)
  const [hovered, setHovered] = useState<string | null>(null)

  const show = (id: string) => { setHovered(id); setActive(TOOLTIPS.find((t) => t.id === id) ?? null) }
  const hide = () => { setHovered(null); setActive(null) }
  const ring = (id: string) => `cursor-pointer transition-all duration-150 ${hovered === id ? "outline outline-2 outline-offset-1 outline-[#58a6ff] rounded-md" : "hover:outline hover:outline-2 hover:outline-offset-1 hover:outline-[#58a6ff] hover:rounded-md"}`

  return (
    <div className="relative pb-0 pt-5 px-5" style={{ background: "var(--bg2)", borderBottom: "1px solid var(--border)" }}>

      {/* Permission badge — short text to avoid overflow */}
      <div
        className="absolute top-3 right-3 z-10 text-[9px] font-semibold px-2 py-1 rounded-full"
        style={{ fontFamily: "var(--mono)", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)", color: "#22c55e" }}
      >
        ✓ client permission
      </div>

      {/* Hint */}
      <p className="text-[9px] mb-2" style={{ fontFamily: "var(--mono)", color: "var(--text3)", opacity: 0.7 }}>
        hover any element →
      </p>

      {/* Browser chrome */}
      <div className="rounded-t-[10px] overflow-hidden shadow-lg border border-b-0" style={{ borderColor: "var(--border)" }}>

        {/* Title bar */}
        <div className="h-8 flex items-center gap-[5px] px-3" style={{ background: "var(--bg3)", borderBottom: "1px solid var(--border)" }}>
          <div className="w-[10px] h-[10px] rounded-full bg-red-400" />
          <div className="w-[10px] h-[10px] rounded-full bg-yellow-400" />
          <div className="w-[10px] h-[10px] rounded-full bg-green-400" />
          <div className="flex-1 mx-2 h-[18px] rounded flex items-center px-2 overflow-hidden" style={{ background: "var(--bg)", border: "1px solid var(--border)", fontFamily: "var(--mono)", fontSize: 9, color: "var(--text3)" }}>
            <span className="truncate">e4g-grant-tracker.vercel.app/dashboard</span>
          </div>
        </div>

        {/* App body */}
        <div className="flex" style={{ minHeight: 200, background: "var(--bg)" }}>

          {/* Sidebar — desktop only */}
          <div
            className={`hidden sm:flex w-[52px] flex-col items-center py-[10px] gap-2 shrink-0 ${ring("sidebar")}`}
            style={{ background: "#1e293b", borderRight: "1px solid #334155" }}
            onMouseEnter={() => show("sidebar")} onMouseLeave={hide}
          >
            {["📊", "📄", "✅", "👥", "🔔"].map((icon, i) => (
              <div key={icon} className="w-7 h-7 rounded-lg flex items-center justify-center text-[13px]"
                style={i === 0 ? { background: "#4f46e5" } : { opacity: 0.4 }}>
                {icon}
              </div>
            ))}
          </div>

          {/* Main content */}
          <div className="flex-1 flex flex-col gap-2 p-3 overflow-hidden" style={{ background: "var(--bg2)" }}>

            {/* Header */}
            <div className={`flex justify-between items-center ${ring("header")}`}
              onMouseEnter={() => show("header")} onMouseLeave={hide}>
              <div>
                <div className="font-extrabold text-[13px]" style={{ color: "var(--text)" }}>Dashboard</div>
                <div className="text-[9px]" style={{ color: "var(--text3)" }}>E4G Team · 5 active grants</div>
              </div>
              <div className="text-[8px] font-bold px-2 py-1 rounded-[5px] text-white" style={{ background: "#4f46e5" }}>
                + New Grant
              </div>
            </div>

            {/* KPIs */}
            <div className={`grid grid-cols-2 sm:grid-cols-4 gap-[6px] ${ring("kpis")}`}
              onMouseEnter={() => show("kpis")} onMouseLeave={hide}>
              {[
                { label: "OVERDUE", n: "2", color: "#ef4444", bg: "rgba(239,68,68,0.06)" },
                { label: "DUE TODAY", n: "1", color: "#f59e0b", bg: "rgba(245,158,11,0.06)" },
                { label: "IN PROGRESS", n: "3", color: "#4f46e5", bg: "rgba(79,70,229,0.06)" },
                { label: "AWARDED", n: "4", color: "#22c55e", bg: "rgba(34,197,94,0.06)" },
              ].map((k) => (
                <div key={k.label} className="rounded-lg p-[7px]" style={{ background: k.bg, border: `1px solid ${k.color}22` }}>
                  <div className="text-[7px] font-bold uppercase tracking-[0.5px]" style={{ color: k.color }}>{k.label}</div>
                  <div className="text-[16px] font-black" style={{ fontFamily: "var(--mono)", color: k.color }}>{k.n}</div>
                </div>
              ))}
            </div>

            {/* Task rows */}
            <div className="flex flex-col gap-[6px]">
              <div
                className={`flex items-center gap-[6px] rounded-md px-2 py-[6px] flex-wrap ${ring("task1")}`}
                style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                onMouseEnter={() => show("task1")} onMouseLeave={hide}
              >
                <div className="w-[10px] h-[10px] rounded-full shrink-0" style={{ border: "1.5px solid #94a3b8" }} />
                <div className="text-[9px] font-semibold flex-1 min-w-[60px] truncate" style={{ color: "var(--text)" }}>Submit Adult Literacy proposal</div>
                <span className="text-[7px] font-bold px-[5px] py-[2px] rounded-full shrink-0" style={{ background: "rgba(245,158,11,0.1)", color: "#d97706" }}>In progress</span>
                <span className="text-[7px] font-bold px-[5px] py-[2px] rounded-full shrink-0" style={{ background: "rgba(239,68,68,0.08)", color: "#dc2626" }}>Urgent</span>
              </div>

              <div
                className={`flex items-center gap-[6px] rounded-md px-2 py-[6px] flex-wrap ${ring("task2")}`}
                style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                onMouseEnter={() => show("task2")} onMouseLeave={hide}
              >
                <div className="w-[10px] h-[10px] rounded-full shrink-0" style={{ border: "1.5px solid #94a3b8" }} />
                <div className="text-[9px] font-semibold flex-1 min-w-[60px] truncate" style={{ color: "var(--text)" }}>Collect impact data from 2024 cohort</div>
                <span className="text-[7px] font-bold px-[5px] py-[2px] rounded-full shrink-0" style={{ background: "#f1f5f9", color: "#64748b" }}>To do</span>
                <span className="text-[7px] font-bold px-[5px] py-[2px] rounded-full shrink-0" style={{ background: "rgba(234,88,12,0.08)", color: "#ea580c" }}>High</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tooltip panel — slides in below mockup on hover */}
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: active ? 100 : 0, opacity: active ? 1 : 0 }}
      >
        <div className="px-4 py-3 flex gap-3 items-start" style={{ background: "var(--accent)" }}>
          <svg className="shrink-0 mt-[2px]" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          <div>
            <div className="text-[11px] font-bold text-white">{active?.title}</div>
            <div className="text-[10px] leading-[1.5] mt-[2px]" style={{ color: "rgba(255,255,255,0.8)" }}>{active?.desc}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
