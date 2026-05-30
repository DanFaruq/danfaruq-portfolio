import { FadeIn } from "@/components/ui/FadeIn"
import { SectionLabel } from "@/components/ui/SectionLabel"
import { PROCESS_STEPS } from "@/lib/data"

export function Process() {
  return (
    <section id="process" className="py-20 px-6 max-w-[960px] mx-auto relative z-[1]">
      <FadeIn><SectionLabel label="// how_i_work" title="My Process" /></FadeIn>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {PROCESS_STEPS.map((s, i) => (
          <FadeIn key={s.n} delay={i * 0.08}>
            <div
              className="relative rounded-xl p-5 transition-all duration-300 hover:-translate-y-[3px] overflow-hidden group"
              style={{ background: "var(--card)", border: "1px solid var(--border)" }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                style={{ background: "var(--accent)" }}
              />
              <div className="text-[11px] font-bold mb-[10px]" style={{ color: "var(--accent)", fontFamily: "var(--mono)" }}>{s.n}</div>
              <div className="text-[22px] mb-2">{s.icon}</div>
              <div className="font-bold text-[13px] mb-1" style={{ color: "var(--text)" }}>{s.title}</div>
              <div className="text-[11px] leading-[1.6]" style={{ color: "var(--text2)" }}>{s.desc}</div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
