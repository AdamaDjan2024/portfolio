"use client";

import { useEffect, useState } from "react";

export default function SideNav({ items }) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -80% 0px",
      threshold: 0,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {items.map((item) => (
          <li key={item.id}>
            <a
              className={`group flex items-center py-3 ${
                activeId === item.id ? "active" : ""
              }`}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(item.id)?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              <span className={`nav-indicator ${activeId === item.id ? "w-16 bg-lightest" : "w-8 bg-darkslate group-hover:w-16 group-hover:bg-lightest"}`}></span>
              <span className={`nav-text ${activeId === item.id ? "text-lightest" : "text-darkslate group-hover:text-lightest"}`}>
                {item.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
