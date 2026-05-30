"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

const LINKS = ["work", "services", "process", "contact"]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollPct, setScrollPct] = useState(0)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    const onScroll = () => {
      const el = document.documentElement
      setScrollPct((el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const isDark = theme === "dark"

  return (
    <>
      {/* Scroll progress */}
      <div
        className="fixed top-0 left-0 h-[2px] z-[999] transition-all"
        style={{
          width: `${scrollPct}%`,
          background: "linear-gradient(90deg, var(--accent), var(--accent2))",
        }}
      />

      {/* Nav bar */}
      <nav
        className="fixed top-0 left-0 right-0 z-[100] border-b"
        style={{
          background: "var(--nav-bg, rgba(8,12,18,0.88))",
          borderColor: "var(--border)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <div className="max-w-[1100px] mx-auto flex items-center h-[60px] px-6 gap-2">
          {/* Logo */}
          <div
            className="flex items-center gap-1 mr-auto text-[14px] font-bold tracking-tight"
            style={{ fontFamily: "var(--mono)", color: "var(--text)" }}
          >
            <span style={{ color: "var(--accent)", fontSize: 17 }}>{`{`}</span>
            danfaruq
            <span style={{ color: "var(--accent)", fontSize: 17 }}>{`}`}</span>
            <span
              className="blink inline-block w-[2px] h-[14px] ml-[2px] rounded-sm"
              style={{ background: "var(--accent)", verticalAlign: "middle" }}
            />
          </div>

          {/* Available pill — desktop */}
          <div
            className="hidden md:flex items-center gap-[5px] text-[10px] font-semibold px-[10px] py-1 rounded-full mr-2"
            style={{
              fontFamily: "var(--mono)",
              color: "#22c55e",
              background: "rgba(34,197,94,0.08)",
              border: "1px solid rgba(34,197,94,0.2)",
            }}
          >
            <span className="pulse-dot inline-block w-[6px] h-[6px] rounded-full bg-green-500" />
            available
          </div>

          {/* Nav links — desktop */}
          <div className="hidden md:flex gap-[2px]">
            {LINKS.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className="text-[12px] font-medium px-3 py-[6px] rounded-md transition-colors cursor-pointer"
                style={{ fontFamily: "var(--mono)", color: "var(--text2)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text2)")}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Hire me CTA — desktop */}
          <a
            href="#contact"
            className="hidden md:block text-[12px] font-bold px-[18px] py-2 rounded-lg text-white ml-1 transition-all hover:-translate-y-px"
            style={{
              background: "var(--accent)",
              fontFamily: "var(--mono)",
              boxShadow: "0 0 20px var(--glow)",
            }}
          >
            $ hire_me →
          </a>

          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="w-[34px] h-[34px] rounded-lg flex items-center justify-center ml-2 transition-transform hover:rotate-12 hover:scale-110"
              style={{ border: "1px solid var(--border)", background: "var(--bg3)" }}
              aria-label="Toggle theme"
            >
              <span className="w-full text-center text-sm">{isDark ? "☀️" : "🌙"}</span>
            </button>
          )}

          {/* Hamburger — mobile */}
          <button
            className="flex md:hidden flex-col gap-[5px] p-[6px] ml-2"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block w-[20px] h-[2px] rounded-sm transition-all"
                style={{ background: "var(--text)" }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 top-[60px] z-[99] flex flex-col items-center justify-center gap-8"
          style={{
            background: "var(--nav-bg, rgba(8,12,18,0.95))",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid var(--border)",
          }}
        >
          {LINKS.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              onClick={() => setMenuOpen(false)}
              className="text-[20px] font-medium px-6 py-3 transition-colors"
              style={{ fontFamily: "var(--mono)", color: "var(--text2)" }}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-[16px] font-bold px-8 py-[14px] rounded-xl text-white"
            style={{ background: "var(--accent)", fontFamily: "var(--mono)" }}
          >
            $ hire_me →
          </a>
        </div>
      )}
    </>
  )
}
