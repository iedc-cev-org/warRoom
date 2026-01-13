"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const para1Ref = useRef<HTMLParagraphElement>(null);
  const para2Ref = useRef<HTMLParagraphElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation with char reveal
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: -100,
        duration: 1,
        ease: "power3.out",
      });

      // Paragraph 1 animation
      gsap.from(para1Ref.current, {
        scrollTrigger: {
          trigger: para1Ref.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power2.out",
      });

      // Paragraph 2 animation
      gsap.from(para2Ref.current, {
        scrollTrigger: {
          trigger: para2Ref.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out",
      });

      // Highlight block animation
      gsap.from(highlightRef.current, {
        scrollTrigger: {
          trigger: highlightRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={sectionRef} id="about" className="relative min-h-screen bg-black px-4 sm:px-6 md:px-8 flex items-center overflow-hidden">
      {/* Ambient glow effects */}
      {/* <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#B12C00]/20 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 blur-[140px]" /> */}

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-4xl space-y-8">
          {/* Title */}
          <h1 ref={titleRef} className="text-white/90 text-[3rem] md:text-[5rem] font-bold leading-12 sm:leading-14 md:leading-16 tracking-wider">
            ABOUT <span className="text-[#B12C00]">WARROOM</span>
          </h1>

          {/* Paragraph 1 */}
          <p
            ref={para1Ref}
            className="text-slate-200 text-md md:text-lg
                       leading-relaxed font-montserrat tracking-wide"
          >
            <span className="font-bold text-slate-200 inline text-xl">WARROOM</span>,
            presented by
            <span className="text-[#B12C00] font-bold inline text-xl">
              {" "}
              IEDC CEV
            </span>
            , is a 24-hour startup simulation designed to transform raw ideas
            into impactful real-world ventures.
          </p>

          {/* Paragraph 2 */}
          <p
            ref={para2Ref}
            className="text-slate-200 text-md md:text-lg
                       leading-relaxed font-montserrat tracking-wide"
          >
            Open to all aspiring entrepreneurs, this experience pushes
            participants to master the complete journey — from ideation and
            validation to execution and presentation.
          </p>

          {/* Highlight block */}
          <div ref={highlightRef} className="relative border-l-4 border-[#B12C00] pl-5 mt-6">
            <h2 className="text-white/80 font-semibold text-md md:text-xl font-montserrat">
              WARROOM is where{" "}
              <span className="text-[#B12C00]">IEDC CEV shapes the future</span>{" "}
              of innovation and entrepreneurship.
            </h2>
          </div>
        </div>
      </div>
    </main>
  );
}
