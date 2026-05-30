export function SectionLabel({ label, title }: { label: string; title: string }) {
  return (
    <>
      <p
        className="text-[10px] font-bold uppercase tracking-[2px] mb-[10px]"
        style={{ color: "var(--accent)", fontFamily: "var(--mono)" }}
      >
        {label}
      </p>
      <h2
        className="font-black tracking-tight mb-10"
        style={{
          fontSize: "clamp(22px, 4vw, 34px)",
          letterSpacing: "-1px",
          color: "var(--text)",
        }}
      >
        {title}
      </h2>
    </>
  )
}
