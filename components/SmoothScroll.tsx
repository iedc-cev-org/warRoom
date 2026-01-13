"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger, ScrollSmoother);

export default function SmoothScroll() {
  useEffect(() => {
    // Wait for content to load
    const initTimeout = setTimeout(() => {
      // Initialize ScrollSmoother
      const smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.5,
        effects: true,
        normalizeScroll: true,
      });

      // Refresh ScrollTrigger after initialization
      ScrollTrigger.refresh();

      // Get all sections
      const sections = gsap.utils.toArray("#smooth-content > *") as HTMLElement[];

    // Create ScrollTrigger for snapping
    ScrollTrigger.create({
      trigger: "#smooth-content",
      start: "top top",
      end: "bottom bottom",
      snap: {
        snapTo: (progress: number) => {
          // Calculate which section to snap to based on progress
          const sectionIndex = Math.round(progress * (sections.length - 1));
          return sectionIndex / (sections.length - 1);
        },
        duration: { min: 0.3, max: 0.8 },
        delay: 0.1,
        ease: "power2.out",
      },
    });

    // Handle anchor clicks (existing code)
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

      gsap.to(smoother, {
        scrollTo: {
          y: targetY,
          autoKill: true,
        },
        duration: isMobile ? 0.55 : 0.9,
        ease: isMobile ? "power2.out" : "power3.out",
      });
    };

      document.addEventListener("click", onClick);

      return () => {
        document.removeEventListener("click", onClick);
        smoother.kill();
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }, 200);

    return () => clearTimeout(initTimeout);
  }, []);

  return null;
}
