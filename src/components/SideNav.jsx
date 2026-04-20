"use client";

import { useEffect, useMemo, useState } from "react";

export default function SideNav({ items, scrollContainerId }) {
  const ids = useMemo(() => items.map((i) => i.id), [items]);
  const [activeId, setActiveId] = useState(ids[0] || "");

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) return;

    const root = scrollContainerId
      ? document.getElementById(scrollContainerId)
      : null;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (!visible.length) return;

        // Pick the section whose top is closest to the top of the scroll container
        // (more stable than pure intersectionRatio when sections are tall).
        visible.sort(
          (a, b) =>
            Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top)
        );
        const nextId = visible[0]?.target?.id;
        if (nextId) setActiveId(nextId);
      },
      {
        root,
        threshold: [0.1, 0.2, 0.35],
        rootMargin: "-35% 0px -55% 0px",
      }
    );

    elements.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [ids]);

  const activeIndex = Math.max(
    0,
    items.findIndex((i) => i.id === activeId)
  );

  const onNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveId(id);
  };

  return (
    <nav aria-label="Navigation des sections" className="mt-10 hidden lg:block">
      <div className="relative">
        <div className="absolute left-2 top-0 h-full w-px bg-white/10" />
        <div
          className="absolute left-2 w-px bg-white/60 transition-[transform,height] duration-200"
          style={{
            height: "1.5rem",
            transform: `translateY(${activeIndex * 2.25}rem)`,
          }}
          aria-hidden="true"
        />
        <ul className="space-y-3">
          {items.map((item) => {
            const isActive = item.id === activeId;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => onNavClick(e, item.id)}
                  className={[
                    "group inline-flex items-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase",
                    "transition-colors",
                    isActive ? "text-slate-100" : "text-slate-400 hover:text-slate-200",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "h-[2px] w-6 bg-white/20 transition-[width,background-color] duration-200",
                      isActive
                        ? "w-14 bg-slate-100"
                        : "group-hover:w-12 group-hover:bg-white/40",
                    ].join(" ")}
                    aria-hidden="true"
                  />
                  <span>{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

