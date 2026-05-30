"use client"

import { useState } from "react"
import Image from "next/image"
import { WALKTHROUGH_SCREENS } from "@/lib/data"

export function Walkthrough() {
  const [idx, setIdx] = useState(0)
  const screen = WALKTHROUGH_SCREENS[idx]

  return (
    <div
      className="rounded-[10px] p-[14px] mb-[14px]"
      style={{ background: "var(--bg2)", border: "1px solid var(--border)" }}
    >
      <div
        className="text-[10px] font-bold uppercase tracking-[1px] mb-[10px]"
        style={{ color: "var(--text3)", fontFamily: "var(--mono)" }}
      >
        app_walkthrough · {idx + 1}/{WALKTHROUGH_SCREENS.length}
      </div>

      <div
        className="rounded-lg mb-[10px] relative overflow-hidden flex items-center justify-center text-[11px]"
        style={{
          background: "var(--bg3)",
          minHeight: 140,
          color: "var(--text3)",
          border: "1px solid var(--border)",
        }}
      >
        <Image
          src={screen.image}
          alt={screen.label}
          fill
          className="object-cover"
        />
        <div
          className="absolute top-2 right-2 text-[9px] font-semibold px-2 py-1 rounded-md text-white z-10"
          style={{ background: "var(--accent)", fontFamily: "var(--mono)" }}
        >
          {screen.annotation}
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap gap-2">
        <div className="flex gap-[5px]">
          {WALKTHROUGH_SCREENS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className="w-[7px] h-[7px] rounded-full transition-colors"
              style={{ background: i === idx ? "var(--accent)" : "var(--border)" }}
            />
          ))}
        </div>
        <div className="text-[11px] flex-1 mx-3 truncate" style={{ color: "var(--text2)" }}>
          {screen.description}
        </div>
        <div className="flex gap-[6px]">
          <button
            onClick={() => setIdx((i) => Math.max(0, i - 1))}
            className="px-3 py-1 rounded-md text-[11px] disabled:opacity-40"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              color: "var(--text2)",
              fontFamily: "var(--mono)",
            }}
            disabled={idx === 0}
          >
            ← prev
          </button>
          <button
            onClick={() => setIdx((i) => Math.min(WALKTHROUGH_SCREENS.length - 1, i + 1))}
            className="px-3 py-1 rounded-md text-[11px] disabled:opacity-40 text-white"
            style={{ background: "var(--accent)", fontFamily: "var(--mono)" }}
            disabled={idx === WALKTHROUGH_SCREENS.length - 1}
          >
            next →
          </button>
        </div>
      </div>
    </div>
  )
}
