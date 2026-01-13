"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Guidelines() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const para1Ref = useRef<HTMLParagraphElement>(null);
  const para2Ref = useRef<HTMLParagraphElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: -100,
        duration: 1,
        ease: "power3.out",
      });

      // Paragraphs animation
      gsap.from([para1Ref.current, para2Ref.current], {
        scrollTrigger: {
          trigger: para1Ref.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
      });

      // Timeline animation
      gsap.from(timelineRef.current, {
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: "power2.out",
      });

      // Cards animation
      if (cardsRef.current) {
        const cards = Array.from(cardsRef.current.children);
        gsap.fromTo(cards, 
          {
            autoAlpha: 0,
            y: 60,
          },
          {
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play none none none",
            },
            autoAlpha: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.8,
            ease: "back.out(1.2)",
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
      id="guidelines"
      className="relative min-h-screen md:min-h-[85vh] px-4 sm:px-6 md:px-8
                 flex md:items-start items-center bg-black
                 md:pt-24 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="space-y-8 flex flex-col md:flex-row md:gap-12">
          <div className="w-full md:max-w-[70%]">
            <h1 ref={titleRef} className="text-white/90 text-[3rem] md:text-[5rem] font-black mb-2 tracking-wide">
              GUIDE<span className="text-[#B12C00]">LINES</span>
            </h1>
            <p ref={para1Ref} className="text-slate-200 font-montserrat text-md md:text-lg tracking-wide">
              A high-intensity 24-hour startup simulation where teams move
              beyond theory into real execution—ideating, validating, and
              pitching scalable solutions under real-world pressure.
            </p>

            <p ref={para2Ref} className="text-slate-200 font-montserrat mt-4 md:mt-8 text-md md:text-lg tracking-wide">
              With mentor support and rapid collaboration, participants build
              confidence, creativity, and essential entrepreneurial skills.
            </p>

            {/* Timeline */}
            <div ref={timelineRef} className="relative border-l-4 border-[#B12C00] pl-5 mt-6">
              <h1 className="text-white/90 font-bold text-md md:text-xl font-montserrat">
                From 09<sup>th</sup> February, 3:00 PM
              </h1>
              <h1 className="text-white/90 font-bold text-md md:text-xl font-montserrat">
                To 10<sup>th</sup> February, 3:00 PM
              </h1>
            </div>
          </div>

          <div ref={cardsRef} className="flex flex-col gap-4 md:gap-8 mt-2">
            {/* Startup Flow */}
            <div
              className="bg-white/5 backdrop-blur-md
                       border border-white/10
                       rounded-2xl p-5
                       hover:border-[#B12C00]/40
                       transition-all duration-300"
            >
              <h2 className="text-white tracking-wider text-md mb-2">
                STARTUP FLOW
              </h2>
              <p className="text-slate-300 font-montserrat leading-relaxed">
                Teams will go through{" "}
                <span className="text-[#B12C00] font-semibold">
                  ideation, product development,
                </span>{" "}
                and conclude with a final presentation to the jury.
              </p>
            </div>

            {/* Judging Criteria */}
            <div
              className="bg-white/5 backdrop-blur-sm
                       border border-white/10
                       rounded-2xl p-5
                       hover:border-[#B12C00]/40
                       transition-all duration-300"
            >
              <h3 className="text-white tracking-wider text-md mb-2">
                JUDGING CRITERIA
              </h3>

              <div className="flex flex-wrap gap-3">
                {[
                  "Innovation",
                  "Marketing Strategy",
                  "Customer Review",
                  "Product Quality",
                  "Teamwork",
                ].map((item, i) => (
                  <span
                    key={i}
                    className="px-4 py-1.5 rounded-full
                             text-sm font-montserrat text-[#fefefe] bg-[#B12C00]/5
                             border border-[#B12C00]/30"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Eligibility */}
            <div
              className="bg-white/5 backdrop-blur-sm
                       border border-white/10
                       rounded-2xl p-5
                       hover:border-[#B12C00]/40
                       transition-all duration-300"
            >
              <h3 className="text-white tracking-wider text-md mb-2">
                ELIGIBILITY
              </h3>
              <p className="text-slate-300 font-montserrat">
                Open to all students <br />
                Team size:
                <span className="text-[#B12C00] font-bold"> 2 - 4 members</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
