"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Reveal({
  as: Component = "div",
  children,
  className = "",
  delay = 0,
  y = 18,
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <Component className={className}>{children}</Component>;
  }

  const MotionComponent = motion(Component);

  return (
    <MotionComponent
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px -10% 0px" }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </MotionComponent>
  );
}
