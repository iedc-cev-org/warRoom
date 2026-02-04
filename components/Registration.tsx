"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Registration() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const prizeCardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animations
      if (headingRef.current) {
        const headings = headingRef.current.children;
        gsap.from(headings, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 50,
          stagger: 0.2,
          duration: 0.8,
          ease: "power3.out",
        });
      }

      // Prize cards animation
      if (prizeCardsRef.current) {
        const cards = Array.from(prizeCardsRef.current.children);
        gsap.fromTo(cards,
          {
            autoAlpha: 0,
            scale: 0.8,
            y: 80,
          },
          {
            scrollTrigger: {
              trigger: prizeCardsRef.current,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play none none none",
            },
            autoAlpha: 1,
            scale: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.8,
            ease: "back.out(1.4)",
            immediateRender: false,
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={sectionRef}
      id="registration"
      className="relative min-h-screen md:min-h-[85vh]
           bg-black px-4 sm:px-6 md:px-8
           flex items-center overflow-hidden"
    >
      {/* Background energy */}
      <div className="absolute inset-0 bg-linear-to-b from-black via-black to-[#B12C00]/10" />
      <div
        className="absolute top-1/2 left-1/2
                   w-105 h-105
                   bg-[#B12C00]/15 blur-[200px]
                   -translate-x-1/2 -translate-y-1/2"
      />

      <div
        className="relative z-10 max-w-7xl mx-auto w-full
                   text-center
                   space-y-10 md:space-y-10"
      >
        {/* Heading */}
        <div ref={headingRef} className="space-y-2 flex flex-col">
          <h1 className="text-neutral-400 tracking-widest uppercase text-md md:text-lg">
            The War Room Opens For A
          </h1>
          <h1 className="text-white/90 text-4xl md:text-8xl font-bold font-orbitron">
            PRIZE POOL
          </h1>
          <h1 className="text-white/90 text-5xl md:text-8xl font-bold font-orbitron hover:text-[#B12C00]">
            25,000
          </h1>
        </div>

        {/* Prize Breakdown */}
        <div ref={prizeCardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-10 mt-8 md:mt-6">
          {[
            { title: "FIRST", amount: "12,000" },
            { title: "SECOND", amount: "8,000" },
            { title: "THIRD", amount: "5,000" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-xl p-5
                         transition-all
                         hover:-translate-y-2
                         hover:border-[#B12C00]
                         hover:bg-[#B12C00]/6"
            >
              <h1 className="text-neutral-400 font-orbitron">{item.title}</h1>
              <h2 className="text-white text-3xl font-bold mt-1">
                {item.amount}
              </h2>
            </div>
          ))}
        </div>

{/* CTA – Registration Closed */}
<div className="md:mt-10 py-2 md:py-4 text-center" id="register-button">
  <div className="inline-block px-8 py-3
  border border-[#B12C00]/40
  bg-[#B12C00]/10
  rounded-md cursor-not-allowed select-none">
  <h1 className="text-[#E5B3A4] font-orbitron tracking-widest uppercase">
    Registration Closed
  </h1>
</div>


  <h2 className="text-neutral-500 text-sm mt-3 font-montserrat">
    All slots have been filled. Stay tuned for future events.
  </h2>
</div>

      </div>
    </main>
  );
}
