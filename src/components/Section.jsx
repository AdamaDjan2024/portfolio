export default function Section({ id, title, children }) {
  return (
    <section
      id={id}
      className="scroll-mt-24 py-10 sm:py-14 border-b border-white/5"
    >
      <div className="flex items-center gap-4 mb-6">
        <h2 className="text-sm font-semibold tracking-[0.18em] text-slate-200/70 uppercase">
          {title}
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
      </div>
      <div className="text-slate-200/80 leading-relaxed">{children}</div>
    </section>
  );
}

