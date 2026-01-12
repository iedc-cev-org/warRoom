"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function SmoothScroll() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      // Only left-clicks
      if (e.defaultPrevented || e.button !== 0) return;

      const target = e.target as HTMLElement;
      const anchor = target.closest("a[href^='#']") as HTMLAnchorElement | null;
      if (!anchor) return;

      // Ignore modifiers & external
      if (
        anchor.target === "_blank" ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }

      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      const id = href.slice(1);
      const section = document.getElementById(id);
      if (!section) return;

      e.preventDefault();

      const targetY = section.offsetTop;

      const isMobile = window.innerWidth < 768;

      gsap.to(window, {
        scrollTo: {
          y: targetY,
          autoKill: true,
        },
        duration: isMobile ? 0.55 : 0.9,
        ease: isMobile ? "power2.out" : "power3.out",
      });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
