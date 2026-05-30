"use client"

import { FadeIn } from "@/components/ui/FadeIn"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { AppMockup } from "@/components/case-study/AppMockup"
import { TabPanel } from "@/components/case-study/TabPanel"
import { Walkthrough } from "@/components/case-study/Walkthrough"

export function Projects() {
  return (
    <section id="work" className="py-20 px-6 max-w-[960px] mx-auto relative z-[1]">
      <FadeIn>
        <SectionLabel label="// work" title="Selected Projects" />
      </FadeIn>

      <FadeIn delay={0.1}>
        <div
          className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
          style={{ background: "var(--card)", border: "1px solid var(--border)" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "var(--accent)"
            e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.1), 0 0 0 1px var(--accent)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--border)"
            e.currentTarget.style.boxShadow = "none"
          }}
        >
          <AppMockup />

          <div className="p-6">
            <div className="flex gap-[6px] flex-wrap mb-3">
              {["NGO", "Grant Management", "Full-Stack"].map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-semibold px-[10px] py-[3px] rounded-full"
                  style={{ background: "var(--tag-bg)", color: "var(--tag)", fontFamily: "var(--mono)" }}
                >
                  {t}
                </span>
              ))}
              <span
                className="text-[10px] font-bold px-[10px] py-[3px] rounded-full"
                style={{ background: "rgba(34,197,94,0.1)", color: "#22c55e", border: "1px solid rgba(34,197,94,0.2)" }}
              >
                ● Live
              </span>
            </div>

            <h3
              className="font-extrabold mb-[6px]"
              style={{ fontSize: "clamp(15px, 2.5vw, 20px)", letterSpacing: "-0.5px", color: "var(--text)" }}
            >
              E4G Team — Grant Tracker
            </h3>

            <p className="text-[13px] mb-5" style={{ color: "var(--text2)", lineHeight: 1.75 }}>
              A full-stack grant management platform replacing spreadsheets for an NGO. Tracks
              grants end-to-end with team tasks, real-time updates, push notifications, and a
              personal dashboard for every team member.
            </p>

            {/* Terminal block — dark mode via data-theme attribute check at runtime */}
            <div
              className="rounded-[10px] p-5 mb-5 text-[12px] leading-[1.9] dark-only-term"
              style={{ background: "#080c12", border: "1px solid #21262d", fontFamily: "var(--mono)" }}
            >
              <div style={{ color: "#484f58" }}>{"// project.json"}</div>
              <div><span style={{ color: "#79c0ff" }}>client</span>{": "}<span style={{ color: "#a5d6ff" }}>&quot;E4G Team&quot;</span>,</div>
              <div><span style={{ color: "#79c0ff" }}>stack</span>{": ["}<span style={{ color: "#a5d6ff" }}>&quot;Next.js 16&quot;</span>{", "}<span style={{ color: "#a5d6ff" }}>&quot;Supabase&quot;</span>{", "}<span style={{ color: "#a5d6ff" }}>&quot;React 19&quot;</span>{"],"}
              </div>
              <div><span style={{ color: "#79c0ff" }}>shipped_in</span>{": "}<span style={{ color: "#f2cc60" }}>4</span><span style={{ color: "#484f58" }}>{" // weeks"}</span>,</div>
              <div><span style={{ color: "#79c0ff" }}>status</span>{": "}<span style={{ color: "#3fb950" }}>live</span>,</div>
              <div><span style={{ color: "#79c0ff" }}>impact</span>{": "}<span style={{ color: "#a5d6ff" }}>&quot;team fully off spreadsheets&quot;</span></div>
            </div>

            <TabPanel />
            <Walkthrough />

            <div className="flex gap-2 flex-wrap">
              <a
                href="#contact"
                className="font-bold px-[18px] py-[10px] rounded-lg text-white text-[12px] transition-all hover:-translate-y-[2px]"
                style={{ background: "var(--accent)", fontFamily: "var(--mono)" }}
              >
                Explore case study →
              </a>
              <a
                href="https://e4g-grant-tracker.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold px-[18px] py-[10px] rounded-lg text-[12px] transition-all hover:-translate-y-[2px]"
                style={{ background: "transparent", border: "1px solid var(--border)", color: "var(--text2)", fontFamily: "var(--mono)" }}
              >
                View live app ↗
              </a>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div
          className="flex items-center gap-4 rounded-2xl p-6 mt-3 opacity-60"
          style={{ background: "var(--card)", border: "1px dashed var(--border)" }}
        >
          <div className="w-[46px] h-[46px] rounded-xl flex items-center justify-center text-[22px] shrink-0" style={{ background: "var(--bg3)" }}>
            ⚙️
          </div>
          <div>
            <div className="font-bold text-[13px]" style={{ color: "var(--text)" }}>Next Project</div>
            <div className="text-[11px] mt-[2px]" style={{ color: "var(--text3)", fontFamily: "var(--mono)" }}>
              {"// in architecture phase · coming soon"}
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
