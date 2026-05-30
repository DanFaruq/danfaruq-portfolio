export function AppMockup() {
  return (
    <div
      className="relative pb-0 pt-5 px-5"
      style={{ background: "var(--bg2)", borderBottom: "1px solid var(--border)" }}
    >
      {/* Permission badge */}
      <div
        className="absolute top-3 right-3 text-[9px] font-semibold px-[10px] py-1 rounded-full z-10"
        style={{
          fontFamily: "var(--mono)",
          background: "rgba(34,197,94,0.1)",
          border: "1px solid rgba(34,197,94,0.2)",
          color: "#22c55e",
        }}
      >
        ✓ shared with client permission
      </div>

      {/* Browser chrome */}
      <div
        className="rounded-t-[10px] overflow-hidden shadow-lg border border-b-0"
        style={{ borderColor: "var(--border)" }}
      >
        {/* Title bar */}
        <div
          className="h-8 flex items-center gap-[5px] px-3"
          style={{ background: "var(--bg3)", borderBottom: "1px solid var(--border)" }}
        >
          <div className="w-[10px] h-[10px] rounded-full bg-red-400" />
          <div className="w-[10px] h-[10px] rounded-full bg-yellow-400" />
          <div className="w-[10px] h-[10px] rounded-full bg-green-400" />
          <div
            className="flex-1 mx-2 h-[18px] rounded flex items-center px-2"
            style={{
              background: "var(--bg)",
              border: "1px solid var(--border)",
              fontFamily: "var(--mono)",
              fontSize: 9,
              color: "var(--text3)",
            }}
          >
            e4g-grant-tracker.vercel.app/dashboard
          </div>
        </div>

        {/* App body */}
        <div className="flex" style={{ height: 200, background: "var(--bg)" }}>
          {/* Sidebar — hidden on mobile */}
          <div
            className="hidden sm:flex w-[52px] flex-col items-center py-[10px] gap-2 shrink-0"
            style={{ background: "#1e293b", borderRight: "1px solid #334155" }}
          >
            {["📊", "📄", "✅", "👥", "🔔"].map((icon, i) => (
              <div
                key={icon}
                className="w-7 h-7 rounded-lg flex items-center justify-center text-[13px]"
                style={i === 0 ? { background: "#4f46e5" } : { opacity: 0.4 }}
              >
                {icon}
              </div>
            ))}
          </div>

          {/* Main content */}
          <div
            className="flex-1 flex flex-col gap-2 p-3 overflow-hidden"
            style={{ background: "var(--bg2)" }}
          >
            {/* Header */}
            <div className="flex justify-between items-center">
              <div>
                <div className="font-extrabold text-[13px]" style={{ color: "var(--text)" }}>
                  Dashboard
                </div>
                <div className="text-[9px]" style={{ color: "var(--text3)" }}>
                  E4G Team · 5 active grants
                </div>
              </div>
              <div
                className="text-[8px] font-bold px-2 py-1 rounded-[5px] text-white"
                style={{ background: "#4f46e5" }}
              >
                + New Grant
              </div>
            </div>

            {/* KPIs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-[6px]">
              {[
                { label: "OVERDUE", n: "2", color: "#ef4444", bg: "rgba(239,68,68,0.06)" },
                { label: "DUE TODAY", n: "1", color: "#f59e0b", bg: "rgba(245,158,11,0.06)" },
                { label: "IN PROGRESS", n: "3", color: "#4f46e5", bg: "rgba(79,70,229,0.06)" },
                { label: "AWARDED", n: "4", color: "#22c55e", bg: "rgba(34,197,94,0.06)" },
              ].map((k) => (
                <div
                  key={k.label}
                  className="rounded-lg p-[7px]"
                  style={{ background: k.bg, border: `1px solid ${k.color}22` }}
                >
                  <div
                    className="text-[7px] font-bold uppercase tracking-[0.5px]"
                    style={{ color: k.color }}
                  >
                    {k.label}
                  </div>
                  <div
                    className="text-[16px] font-black"
                    style={{ fontFamily: "var(--mono)", color: k.color }}
                  >
                    {k.n}
                  </div>
                </div>
              ))}
            </div>

            {/* Task rows */}
            <div className="flex flex-col gap-[6px]">
              {[
                {
                  title: "Submit Adult Literacy proposal",
                  status: "In progress",
                  statusColor: "#d97706",
                  statusBg: "rgba(245,158,11,0.1)",
                  priority: "Urgent",
                  priorityColor: "#dc2626",
                  priorityBg: "rgba(239,68,68,0.08)",
                },
                {
                  title: "Collect impact data from 2024 cohort",
                  status: "To do",
                  statusColor: "#64748b",
                  statusBg: "#f1f5f9",
                  priority: "High",
                  priorityColor: "#ea580c",
                  priorityBg: "rgba(234,88,12,0.08)",
                },
              ].map((t) => (
                <div
                  key={t.title}
                  className="flex items-center gap-[6px] rounded-md px-2 py-[6px] flex-wrap"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                >
                  <div
                    className="w-[10px] h-[10px] rounded-full shrink-0"
                    style={{ border: "1.5px solid #94a3b8" }}
                  />
                  <div
                    className="text-[9px] font-semibold flex-1 min-w-[80px] truncate"
                    style={{ color: "var(--text)" }}
                  >
                    {t.title}
                  </div>
                  <span
                    className="text-[7px] font-bold px-[5px] py-[2px] rounded-full shrink-0"
                    style={{ background: t.statusBg, color: t.statusColor }}
                  >
                    {t.status}
                  </span>
                  <span
                    className="text-[7px] font-bold px-[5px] py-[2px] rounded-full shrink-0"
                    style={{ background: t.priorityBg, color: t.priorityColor }}
                  >
                    {t.priority}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
