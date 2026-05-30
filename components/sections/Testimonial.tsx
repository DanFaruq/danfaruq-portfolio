import { FadeIn } from "@/components/ui/FadeIn"
import { SectionLabel } from "@/components/ui/SectionLabel"

export function Testimonial() {
  return (
    <section className="py-20 px-6 max-w-[960px] mx-auto relative z-[1]">
      <FadeIn><SectionLabel label="// client_words" title="What They Say" /></FadeIn>
      <FadeIn delay={0.1}>
        <div className="rounded-2xl p-8 relative" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
          <div
            className="absolute top-4 left-6 text-[72px] leading-[0.8] opacity-20"
            style={{ color: "var(--accent)", fontFamily: "Georgia, serif" }}
          >
            &ldquo;
          </div>
          <p className="pt-7 italic leading-[1.8]" style={{ fontSize: "clamp(13px, 2vw, 16px)", color: "var(--text2)" }}>
            [Testimonial from E4G Team — to be added after outreach. A genuine quote here closes deals before the first call.]
          </p>
          <div className="flex items-center gap-3 mt-5">
            <div
              className="w-[42px] h-[42px] rounded-full flex items-center justify-center text-[13px] font-extrabold text-white shrink-0"
              style={{ background: "linear-gradient(135deg, var(--accent), var(--accent2))" }}
            >
              E4
            </div>
            <div>
              <div className="font-bold text-[13px]" style={{ color: "var(--text)" }}>E4G Team</div>
              <div className="text-[11px]" style={{ color: "var(--text3)" }}>Evidence for Good · NGO</div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
