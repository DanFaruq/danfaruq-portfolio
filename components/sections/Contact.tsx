"use client"

import { useState } from "react"

const SOCIAL = [
  {
    label: "GitHub",
    href: "https://github.com/DanFaruq",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/danfaruq",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
      </svg>
    ),
  },
  {
    label: "Fiverr",
    href: "https://fiverr.com",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23 0H1C.45 0 0 .45 0 1v22c0 .55.45 1 1 1h22c.55 0 1-.45 1-1V1c0-.55-.45-1-1-1zM9.61 15.67c0 1.56-1.27 2.83-2.83 2.83S3.95 17.23 3.95 15.67s1.27-2.83 2.83-2.83 2.83 1.27 2.83 2.83zm9.89-8.12h-3.09v1.93h3.09v2.58h-3.09v6.44h-2.58V7.96h-.99V5.38h.99v-.52C13.83 3.3 14.96 2 17.03 2c.82 0 1.54.12 2.47.35v2.52c-.67-.22-1.18-.32-1.67-.32-.81 0-1.33.42-1.33 1.33v.52h3.09l-.09 2.15z" />
      </svg>
    ),
  },
]

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")
  const [form, setForm] = useState({ name: "", contact: "", message: "" })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("sending")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? "sent" : "error")
    } catch {
      setStatus("error")
    }
  }

  const inputStyle: React.CSSProperties = {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 10,
    padding: "13px 16px",
    fontSize: 13,
    color: "#e6edf3",
    fontFamily: "Inter, sans-serif",
    width: "100%",
    outline: "none",
  }

  return (
    <div
      id="contact"
      className="relative overflow-hidden px-5 sm:px-12"
      style={{ background: "var(--contact-bg, #080c12)", paddingTop: 80, paddingBottom: 80 }}
    >
      <div
        className="absolute pointer-events-none"
        style={{
          top: -120,
          left: "50%",
          transform: "translateX(-50%)",
          width: 700,
          height: 400,
          background: "radial-gradient(ellipse, rgba(88,166,255,0.06), transparent 70%)",
        }}
      />

      <div className="max-w-[960px] mx-auto relative flex gap-16 flex-wrap items-start">
        {/* LEFT */}
        <div className="flex-1 min-w-[260px]">
          <p
            className="text-[10px] font-bold uppercase tracking-[2px] mb-[14px]"
            style={{ color: "var(--accent)", fontFamily: "var(--mono)" }}
          >
            // contact
          </p>
          <h2
            className="font-black text-white mb-3"
            style={{ fontSize: "clamp(26px, 5vw, 46px)", letterSpacing: "-2px" }}
          >
            Have an idea?
            <br />
            Let&apos;s talk.
          </h2>
          <p className="text-[14px] mb-8" style={{ color: "#64748b", lineHeight: 1.7 }}>
            Tell me what you&apos;re building — even a rough idea is enough to start. First call is free.
          </p>

          <div className="flex flex-col gap-4 mb-8">
            {[
              { n: 1, title: "You send a message", sub: "Describe what you need — no brief required, just the gist." },
              { n: 2, title: "I reply within 24 hours", sub: "With questions, a rough timeline, and whether I'm a good fit." },
              { n: 3, title: "Free 30-min call", sub: "No pitch. We talk through the problem and I tell you exactly what I'd build." },
            ].map((s) => (
              <div key={s.n} className="flex gap-[14px] items-start">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-[12px] font-bold"
                  style={{
                    background: "var(--glow)",
                    border: "1px solid rgba(88,166,255,0.3)",
                    color: "var(--accent)",
                    fontFamily: "var(--mono)",
                  }}
                >
                  {s.n}
                </div>
                <div>
                  <div className="text-[12px] font-bold text-white mb-[2px]">{s.title}</div>
                  <div className="text-[11px] leading-[1.6]" style={{ color: "#64748b" }}>{s.sub}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-[6px] text-[12px] px-[14px] py-2 rounded-lg transition-colors"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#94a3b8",
                  textDecoration: "none",
                  fontFamily: "var(--mono)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
              >
                {s.icon}
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT: form */}
        <div className="flex-1 min-w-[280px] max-w-[420px]">
          <div
            className="p-7 rounded-2xl"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div
              className="flex items-center gap-2 text-[11px] font-semibold mb-5"
              style={{ color: "#22c55e", fontFamily: "var(--mono)" }}
            >
              <span className="pulse-dot inline-block w-[6px] h-[6px] rounded-full bg-green-500" />
              available · replies within 24h
            </div>

            {status === "sent" ? (
              <div className="text-center py-8">
                <div className="text-[32px] mb-3">✓</div>
                <div className="font-bold text-white mb-1">Message sent!</div>
                <div className="text-[12px]" style={{ color: "#64748b" }}>I&apos;ll be in touch within 24 hours.</div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-[10px]">
                <input
                  style={inputStyle}
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  required
                />
                <input
                  style={inputStyle}
                  placeholder="Email or WhatsApp"
                  value={form.contact}
                  onChange={(e) => setForm((f) => ({ ...f, contact: e.target.value }))}
                  required
                />
                <textarea
                  style={{ ...inputStyle, height: 88, resize: "none" }}
                  placeholder="What are you building? (the messier the idea, the better)"
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  required
                />
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-[14px] rounded-[10px] text-[14px] font-bold text-white transition-all hover:-translate-y-[2px] disabled:opacity-60 mt-[2px]"
                  style={{ background: "var(--accent)", fontFamily: "var(--mono)" }}
                >
                  {status === "sending" ? "Sending..." : "Send message →"}
                </button>
                {status === "error" && (
                  <p className="text-[11px] text-center" style={{ color: "#ef4444" }}>
                    Something went wrong. Try again or reach out on GitHub.
                  </p>
                )}
                <p className="text-center text-[10px] mt-1" style={{ color: "#334155", fontFamily: "var(--mono)" }}>
                  no spam · no pressure · just a conversation
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
