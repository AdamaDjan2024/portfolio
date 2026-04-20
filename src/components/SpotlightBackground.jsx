"use client";

import { useEffect, useRef } from "react";

export default function SpotlightBackground({ className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    )?.matches;

    if (prefersReducedMotion) return;

    let raf = 0;
    const onMove = (e) => {
      const { clientX, clientY } = e;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--spot-x", `${clientX}px`);
        el.style.setProperty("--spot-y", `${clientY}px`);
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={[
        "pointer-events-none fixed inset-0 -z-10",
        "bg-[#0b1224]",
        "after:absolute after:inset-0 after:content-['']",
        "after:bg-[radial-gradient(600px_circle_at_var(--spot-x,50%)_var(--spot-y,30%),rgba(56,189,248,0.12),transparent_55%)]",
        "after:transition-opacity after:duration-500",
        className,
      ].join(" ")}
    />
  );
}

