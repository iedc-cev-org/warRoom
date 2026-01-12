"use client";

import React, { useState } from "react";
import Image from "next/image";
import Loader from "@/components/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}

      <main className="relative min-h-screen text-white overflow-hidden">

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Mobile Background Video */}
        <video
          src="/home.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="md:hidden absolute inset-0 h-full w-full object-cover"
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
            <div className="flex items-center">
              <Image
                src="/iedc.png"
                alt="Logo"
                width={110}
                height={100}
                className="w-16 md:w-[110px] h-auto"
              />
            </div>

            <div className="flex items-center">
              {/* <a
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
               <h2>REGISTER NOW</h2>
              </a> */}
            </div>
          </div>

          {/* HERO CENTER */}
          <div className="flex flex-col justify-center items-center h-[calc(100vh-5rem)] text-center">
            <h1 className="text-6xl md:text-8xl font-nebula">
              WAR<span className="text-[#B12C00]">ROOM</span>
            </h1>

            <h2 className="mt-4 text-sm md:text-lg text-neutral-300
                          font-orbitron tracking-widest uppercase">
              STRATEGY. INNOVATION. EXECUTION
            </h2>
          </div>

        </div>
      </main>
    </>
  );
}
