import { FadeIn } from "@/components/ui/FadeIn"
import { STACK } from "@/lib/data"

export function Stack() {
  return (
    <div
      className="relative z-[1] py-10 px-6"
      style={{ background: "var(--bg2)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
    >
      <div className="max-w-[960px] mx-auto">
        <FadeIn>
          <p className="text-[10px] font-bold uppercase tracking-[2px] mb-4" style={{ color: "var(--accent)", fontFamily: "var(--mono)" }}>
            // tech_stack
          </p>
          <div className="flex flex-wrap gap-2">
            {STACK.map((pill) => (
              <span
                key={pill.label}
                className="rounded-lg px-[14px] py-2 text-[12px] font-semibold transition-all duration-200 hover:-translate-y-[2px] cursor-default"
                style={{
                  background: "var(--surface)",
                  border: pill.highlight ? "1px solid var(--accent)" : "1px solid var(--border)",
                  color: pill.highlight ? "var(--accent)" : "var(--text2)",
                  fontFamily: "var(--mono)",
                }}
              >
                {pill.label}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
