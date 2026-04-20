import Reveal from "@/components/Reveal";

export default function Section({ id, title, children }) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-b border-white/5 py-12 sm:py-14 lg:py-16"
    >
      <div className="mb-8 flex items-center gap-4">
        <h2 className="section-title">
          {title}
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-cyan-200/35 to-transparent" />
      </div>
      <Reveal as="div" className="body-md text-slate-200/82">
        {children}
      </Reveal>
    </section>
  );
}

