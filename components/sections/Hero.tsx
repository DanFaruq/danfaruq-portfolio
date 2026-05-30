"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const STATS = [
  { n: "1+", l: "Live clients" },
  { n: "4wk", l: "Avg delivery" },
  { n: "100%", l: "Ships to prod" },
  { n: "remote", l: "Works globally" },
]

export function Hero() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-[100px] pb-[80px] overflow-hidden z-[1]"
      style={{ background: "var(--hero-bg, var(--bg))" }}
    >
      {/* Available badge */}
      <div
        className="inline-flex items-center gap-2 border rounded-full text-[11px] font-semibold px-4 py-[6px] mb-7"
        style={{
          fontFamily: "var(--mono)",
          color: "var(--text2)",
          background: "var(--bg2)",
          borderColor: "var(--border)",
        }}
      >
        <span className="pulse-dot inline-block w-[6px] h-[6px] rounded-full bg-green-500" />
        available for new projects
      </div>

      {/* Terminal line — dark only */}
      {mounted && theme === "dark" && (
        <div
          className="flex items-center justify-center gap-1 text-[13px] mb-5"
          style={{ fontFamily: "var(--mono)", color: "#3fb950" }}
        >
          <span style={{ color: "var(--accent)" }}>❯</span>
          <span>
            danfaruq.build(<span style={{ color: "#a5d6ff" }}>&quot;your_idea&quot;</span>)
          </span>
          <span
            className="blink inline-block w-[8px] h-[15px] rounded-sm"
            style={{ background: "#3fb950", verticalAlign: "middle" }}
          />
        </div>
      )}

      {/* H1 */}
      <h1
        className="font-black max-w-[820px] mx-auto"
        style={{
          fontSize: "clamp(34px, 7vw, 82px)",
          lineHeight: 1.0,
          letterSpacing: "clamp(-1.5px, -0.04em, -3px)",
          color: "var(--text)",
        }}
      >
        I build things
        <br />
        <span
          style={{
            background: "linear-gradient(135deg, var(--accent), var(--accent2))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          people actually use.
        </span>
      </h1>

      {/* Subheading */}
      <p
        className="max-w-[520px] mx-auto mt-5 mb-8"
        style={{
          fontSize: "clamp(13px, 2vw, 16px)",
          color: "var(--text2)",
          lineHeight: 1.75,
        }}
      >
        Full-stack developer specialising in React, Next.js & Supabase. From landing pages to
        complex web apps — I design, build, and ship products that reach production and stay there.
      </p>

      {/* CTAs */}
      <div className="flex gap-3 justify-center flex-wrap">
        <a
          href="#contact"
          className="font-bold px-[26px] py-[13px] rounded-[10px] text-white transition-all hover:-translate-y-[3px]"
          style={{
            fontSize: 13,
            background: "var(--accent)",
            fontFamily: "var(--mono)",
            boxShadow: "0 0 24px var(--glow)",
          }}
        >
          Book a free call →
        </a>
        <a
          href="#work"
          className="font-semibold px-[26px] py-[13px] rounded-[10px] transition-all hover:-translate-y-[3px]"
          style={{
            fontSize: 13,
            background: "transparent",
            border: "1px solid var(--border)",
            color: "var(--text2)",
            fontFamily: "var(--mono)",
          }}
        >
          See my work ↓
        </a>
      </div>

      {/* Stats strip */}
      <div
        className="flex flex-wrap border rounded-xl mt-10 overflow-hidden"
        style={{ background: "var(--bg2)", borderColor: "var(--border)" }}
      >
        {STATS.map((s, i) => (
          <div
            key={s.l}
            className="flex-1 min-w-[110px] px-5 py-4 text-center"
            style={{ borderRight: i < STATS.length - 1 ? "1px solid var(--border)" : "none" }}
          >
            <div
              className="font-black tracking-tight"
              style={{ fontSize: 22, fontFamily: "var(--mono)", color: "var(--text)" }}
            >
              {s.n}
            </div>
            <div
              className="text-[9px] font-semibold uppercase tracking-[0.5px] mt-[2px]"
              style={{ color: "var(--text3)" }}
            >
              {s.l}
            </div>
          </div>
        ))}
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-[6px] text-[10px]"
        style={{ color: "var(--text3)", fontFamily: "var(--mono)" }}
      >
        <div
          className="w-[4px] h-[28px] rounded overflow-hidden"
          style={{ border: "1px solid var(--border)" }}
        >
          <div
            className="scroll-anim w-full h-[10px] rounded"
            style={{ background: "var(--accent)" }}
          />
        </div>
        scroll
      </div>
    </section>
  )
}
