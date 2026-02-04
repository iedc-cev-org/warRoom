"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Loader from "@/components/Loader";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [loading, setLoading] = useState(true);
  const logoRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!loading) {
      const ctx = gsap.context(() => {
        // Logo animation
        gsap.from(logoRef.current, {
          opacity: 0,
          x: -50,
          duration: 1,
          ease: "power3.out",
          delay: 0.3,
        });

        // Title animation with split text effect
        const titleText = titleRef.current?.textContent || "";
        const titleChars = titleText.split("");
        if (titleRef.current) {
          titleRef.current.innerHTML = titleChars
            .map((char, index) => {
              const isRoom = index >= 3; // Characters after "WAR"
              return `<span style="display: inline-block; color: ${isRoom ? '#ffffff' : 'inherit'};" class="${isRoom ? 'room-char' : ''}">${char === " " ? "&nbsp;" : char}</span>`;
            })
            .join("");
          
          // Animate characters appearance
          gsap.from(titleRef.current.children, {
            opacity: 0,
            y: 50,
            rotationX: -90,
            stagger: 0.05,
            duration: 0.8,
            ease: "back.out(1.7)",
            delay: 0.5,
          });

          // Animate ROOM color from white to red
          const roomChars = titleRef.current.querySelectorAll('.room-char');
          gsap.to(roomChars, {
            color: "#a72c03",
            duration: 1.5,
            ease: "power2.inOut",
            delay: 1.2,
            stagger: 0.1,
          });
        }

        // Subtitle animation
        gsap.from(subtitleRef.current, {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: "power2.out",
          delay: 1.5,
        });
      });

      return () => ctx.revert();
    }
  }, [loading]);

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}

      <main id="home" className="relative min-h-screen text-white overflow-hidden">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Mobile Background Video */}
        <video
          src="/home.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="md:hidden absolute inset-0 h-full w-full object-cover blur-sm"
        />

        {/* Desktop Background Video */}
        <video
          src="/homiee.webm"
          autoPlay
          loop
          muted
          playsInline
          className="hidden md:block absolute inset-0 h-full w-full object-cover filter blur-md"
        />

        {/* CONTENT */}
        <div className="absolute inset-0 z-30 px-4 md:px-8 lg:px-12">
          {/* TOP BAR */}
          <div className="h-20 flex items-center justify-between">
            <div ref={logoRef} className="flex items-center">
              <Image
                src="/iedc.png"
                alt="Logo"
                width={110}
                height={100}
                className="w-16 md:w-24 h-auto"
              />
            </div>

             {/*} <div className="flex items-center">
              <a
                href="#register-button"
                onClick={(e) => {
                  try {
                    e.preventDefault();
                    const el = document.getElementById("register-button");
                    if (!el) return;
                    const nav = document.querySelector("nav");
                    const navHeight = nav ? nav.clientHeight : 0;
                    const targetY = el.getBoundingClientRect().top + window.pageYOffset - navHeight - 8;
                    window.scrollTo({ top: Math.max(0, Math.round(targetY)), behavior: "smooth" });
                  } catch (err) {
                    // ignore
                  }
                }}
                className="px-4 py-2 text-xs md:text-sm font-orbitron font-bold
                           text-white bg-[#B12C00] rounded-md
                           hover:bg-[#d63b00] hover:scale-105
                           transition-all duration-200"
              >
               <h2>REGISTER</h2>
              </a> 
            </div>*/}
          </div>

          {/* HERO CENTER */}
          <div className="flex flex-col justify-center items-center h-[calc(100vh-5rem)] text-center">
            <h1 ref={titleRef} className="text-5xl md:text-8xl font-nebula">
              WARROOM
            </h1>

            <h2
              ref={subtitleRef}
              className="mt-4 italic text-md md:text-lg text-neutral-300
                          font-orbitron tracking-widest uppercase"
            >
              STRATEGY. INNOVATION. EXECUTION
            </h2>
          </div>
        </div>
      </main>
    </>
  );
}
