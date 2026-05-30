"use client"

import { useState } from "react"
import { FadeIn } from "@/components/ui/FadeIn"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { FAQ_ITEMS } from "@/lib/data"

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-20 px-6 max-w-[960px] mx-auto relative z-[1]">
      <FadeIn><SectionLabel label="// faq" title="Common Questions" /></FadeIn>
      <div className="flex flex-col gap-2">
        {FAQ_ITEMS.map((item, i) => (
          <FadeIn key={i} delay={i * 0.05}>
            <div className="rounded-[10px] overflow-hidden" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
              <button
                className="w-full flex justify-between items-center px-5 py-4 text-left transition-colors text-[13px] font-bold"
                style={{ color: open === i ? "var(--accent)" : "var(--text)" }}
                onClick={() => setOpen(open === i ? null : i)}
              >
                {item.q}
                <span
                  className="text-[16px] ml-4 shrink-0"
                  style={{
                    color: "var(--text3)",
                    fontFamily: "var(--mono)",
                    display: "inline-block",
                    transition: "transform 0.3s",
                    transform: open === i ? "rotate(45deg)" : "none",
                  }}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-5 pb-4 text-[12px] leading-[1.75]" style={{ color: "var(--text2)" }}>
                  {item.a}
                </div>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
