"use client"

import { useState } from "react"
import { TAB_DATA } from "@/lib/data"

const TABS = ["overview", "problem", "build", "tech_stack", "results", "live_demo"]

export function TabPanel() {
  const [active, setActive] = useState("overview")

  return (
    <div
      className="rounded-[10px] overflow-hidden mb-[14px]"
      style={{ border: "1px solid var(--border)" }}
    >
      <div
        className="flex overflow-x-auto"
        style={{ background: "var(--bg2)", borderBottom: "1px solid var(--border)" }}
      >
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className="px-[13px] py-[9px] text-[11px] font-semibold whitespace-nowrap transition-all"
            style={{
              fontFamily: "var(--mono)",
              color: active === tab ? "var(--accent)" : "var(--text3)",
              background: active === tab ? "var(--surface)" : "transparent",
              borderBottom: active === tab ? "2px solid var(--accent)" : "2px solid transparent",
            }}
          >
            {tab}
          </button>
        ))}
      </div>
      <div
        className="p-4 text-[12px] min-h-[70px]"
        style={{ background: "var(--surface)", color: "var(--text2)", lineHeight: 1.75 }}
      >
        {TAB_DATA[active]}
      </div>
    </div>
  )
}
