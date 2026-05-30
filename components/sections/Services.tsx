import { FadeIn } from "@/components/ui/FadeIn"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { SERVICES } from "@/lib/data"

export function Services() {
  return (
    <section id="services" className="py-20 px-6 max-w-[960px] mx-auto relative z-[1]">
      <FadeIn><SectionLabel label="// services" title="What I Build" /></FadeIn>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {SERVICES.map((s, i) => (
          <FadeIn key={s.title} delay={i * 0.06}>
            <div
              className="rounded-xl p-5 transition-all duration-300 hover:-translate-y-[3px] h-full"
              style={{ background: "var(--card)", border: "1px solid var(--border)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent)"
                e.currentTarget.style.background = "var(--glow)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)"
                e.currentTarget.style.background = "var(--card)"
              }}
            >
              <div className="text-[24px] mb-[10px]">{s.icon}</div>
              <div className="font-bold text-[13px] mb-1" style={{ color: "var(--text)" }}>{s.title}</div>
              <div className="text-[11px] leading-[1.6] mb-[6px]" style={{ color: "var(--text2)" }}>{s.desc}</div>
              <div className="text-[10px] font-semibold mt-1" style={{ color: "var(--accent)", fontFamily: "var(--mono)" }}>{s.note}</div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
