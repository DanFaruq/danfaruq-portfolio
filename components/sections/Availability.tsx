import { FadeIn } from "@/components/ui/FadeIn"
import { SectionLabel } from "@/components/ui/SectionLabel"

const POINTS = [
  "Async-first workflow",
  "Weekly progress updates",
  "Fixed-scope or retainer",
  "2-week post-launch support",
]

export function Availability() {
  return (
    <section className="py-20 px-6 max-w-[960px] mx-auto relative z-[1]">
      <FadeIn><SectionLabel label="// availability" title="Let's Work Together" /></FadeIn>
      <FadeIn delay={0.1}>
        <div
          className="rounded-2xl p-7 flex gap-6 flex-wrap items-center"
          style={{ background: "var(--card)", border: "1px solid var(--border)" }}
        >
          <div className="flex-1 min-w-[180px]">
            <div className="text-[18px] font-extrabold mb-2" style={{ color: "var(--text)" }}>Open for projects.</div>
            <div className="text-[12px] leading-[1.75]" style={{ color: "var(--text2)" }}>
              Works{" "}
              <span style={{ color: "var(--accent)", fontFamily: "var(--mono)", fontWeight: 600 }}>fully remote</span>
              {" "}with clients worldwide.
              <br />
              Reply time:{" "}
              <span style={{ color: "var(--accent)", fontFamily: "var(--mono)", fontWeight: 600 }}>within 24 hours</span>.
              <br />
              Projects start within{" "}
              <span style={{ color: "var(--accent)", fontFamily: "var(--mono)", fontWeight: 600 }}>1–2 weeks</span>
              {" "}of agreement.
            </div>
          </div>
          <div className="flex flex-col gap-2 min-w-[150px]">
            {POINTS.map((p) => (
              <div key={p} className="flex items-center gap-2 text-[11px]" style={{ color: "var(--text2)", fontFamily: "var(--mono)" }}>
                <span style={{ color: "var(--accent)", fontWeight: 700 }}>→</span>
                {p}
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
