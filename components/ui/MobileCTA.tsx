export function MobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-[90] p-3"
      style={{ background: "var(--bg)", borderTop: "1px solid var(--border)", backdropFilter: "blur(16px)" }}>
      <a
        href="#contact"
        className="block w-full text-center text-[14px] font-bold py-[14px] rounded-xl text-white"
        style={{ background: "var(--accent)", fontFamily: "var(--mono)" }}
      >
        Book a free call →
      </a>
    </div>
  )
}
