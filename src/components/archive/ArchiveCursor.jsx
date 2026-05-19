"use client";

import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ACTIVE_SELECTOR = "[data-archive-hover='true']";

export default function ArchiveCursor() {
  const cursorRef = useRef(null);
  const frameRef = useRef(null);
  const stateRef = useRef({
    x: 0,
    y: 0,
    tx: 0,
    ty: 0,
    visible: false,
    active: false,
  });

  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const canUseFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setEnabled(canUseFinePointer);

    if (!canUseFinePointer) {
      return;
    }

    const animate = () => {
      const state = stateRef.current;
      state.x += (state.tx - state.x) * 0.17;
      state.y += (state.ty - state.y) * 0.17;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${state.x}px, ${state.y}px, 0)`;
      }

      frameRef.current = window.requestAnimationFrame(animate);
    };

    const onMove = (event) => {
      const state = stateRef.current;
      state.tx = event.clientX;
      state.ty = event.clientY;

      if (!state.visible && cursorRef.current) {
        state.visible = true;
        cursorRef.current.dataset.visible = "true";
      }
    };

    const onPointerOver = (event) => {
      const target = event.target instanceof Element ? event.target.closest(ACTIVE_SELECTOR) : null;
      stateRef.current.active = Boolean(target);

      if (cursorRef.current) {
        cursorRef.current.dataset.active = target ? "true" : "false";
      }
    };

    const onLeave = () => {
      stateRef.current.visible = false;
      if (cursorRef.current) {
        cursorRef.current.dataset.visible = "false";
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("pointerover", onPointerOver, { passive: true });
    document.addEventListener("mouseleave", onLeave, { passive: true });
    frameRef.current = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("pointerover", onPointerOver);
      document.removeEventListener("mouseleave", onLeave);
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      className="archive-cursor"
      data-visible="false"
      data-active="false"
      aria-hidden="true"
    >
      <ArrowUpRight className="h-4 w-4" />
    </div>
  );
}
