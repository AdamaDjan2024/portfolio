"use client";

import { useEffect, useMemo, useState } from "react";

export default function SideNav({ items, scrollContainerId }) {
  const ids = useMemo(() => items.map((i) => i.id), [items]);
  const [activeId, setActiveId] = useState(ids[0] || "");

  useEffect(() => {
    const hash = window.location.hash?.replace("#", "");
    if (hash && ids.includes(hash)) {
      setActiveId(hash);
    }
  }, [ids]);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) return;

    const scrollContainer = scrollContainerId
      ? document.getElementById(scrollContainerId)
      : null;
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    const root = isDesktop ? scrollContainer : null;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (!visible.length) return;

        // Prefer the section with strongest intersection; tie-break by top proximity.
        visible.sort((a, b) => {
          if (b.intersectionRatio !== a.intersectionRatio) {
            return b.intersectionRatio - a.intersectionRatio;
          }
          return Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top);
        });

        const nextId = visible[0]?.target?.id;
        if (nextId) {
          setActiveId(nextId);
        }
      },
      {
        root,
        threshold: [0.35, 0.55, 0.75],
        rootMargin: "-18% 0px -48% 0px",
      }
    );

    elements.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [ids, scrollContainerId]);

  const onNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    setActiveId(id);
  };

  return (
    <>
      <nav
        aria-label="Navigation des sections"
        className="mt-9 hidden lg:block"
      >
        <ul className="space-y-2.5">
          {items.map((item) => {
            const isActive = item.id === activeId;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => onNavClick(e, item.id)}
                  className={[
                    "group relative inline-flex items-center gap-3 rounded-full px-2 py-2 text-[0.72rem] font-semibold tracking-[0.22em] uppercase",
                    "transition-all duration-300 ease-out",
                    isActive
                      ? "translate-x-0.5 bg-white/[0.04] text-slate-100"
                      : "text-slate-400/85 hover:translate-x-[2px] hover:bg-white/[0.03] hover:text-slate-200",
                  ].join(" ")}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span
                    className={[
                      "h-[2px] transition-[width,opacity,background-color] duration-[320ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                      isActive
                        ? "w-[44px] bg-cyan-200/95 opacity-100"
                        : "w-[12px] bg-white/40 opacity-65 group-hover:w-[28px] group-hover:bg-white/60",
                    ].join(" ")}
                    aria-hidden="true"
                  />
                  <span
                    className={[
                      "transition-[color,opacity,transform,letter-spacing] duration-[300ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                      isActive
                        ? "translate-x-0.5 tracking-[0.24em] text-slate-100 opacity-100"
                        : "opacity-80 group-hover:translate-x-0.5 group-hover:opacity-100",
                    ].join(" ")}
                  >
                    {item.label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <nav
        aria-label="Navigation mobile des sections"
        className="mt-8 lg:hidden"
      >
        <ul className="sticky top-3 z-20 flex flex-wrap gap-2 rounded-2xl border border-white/10 bg-slate-950/70 p-2 backdrop-blur">
          {items.map((item) => {
            const isActive = item.id === activeId;
            return (
              <li key={item.id} className="flex-1 min-w-[110px]">
                <a
                  href={`#${item.id}`}
                  onClick={(e) => onNavClick(e, item.id)}
                  className={[
                    "inline-flex w-full items-center justify-center rounded-xl px-3 py-2.5 text-[0.7rem] font-semibold tracking-[0.16em] uppercase transition duration-300",
                    isActive
                      ? "bg-white/10 text-slate-100"
                      : "bg-white/[0.02] text-slate-300/85 hover:bg-white/[0.06] hover:text-slate-100",
                  ].join(" ")}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

