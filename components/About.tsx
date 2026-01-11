import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <>
      <main className="px-4 sm:px-6 md:px-8 relative flex items-center min-h-screen justify-center md:justify-start overflow-hidden">
          <div className="max-w-7xl mx-auto space-y-6">
            <p className="text-white text-5xl md:text-7xl font-black font-orbitron tracking-widest mb-10">
              ABOUT <span className="text-[#B12C00]">WARROOM</span>
            </p>

            <p className="text-slate-200 text-sm md:text-base leading-relaxed font-medium tracking-wide">
              <span className="font-bold text-white">WARROOM</span>, presented by{" "}
              <span className="text-[#B12C00] font-bold">IEDC CEV</span>, is a
              24-hour startup simulation designed to turn raw ideas into
              real-world ventures.
            </p>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed tracking-wide">
              Open to all aspiring entrepreneurs, this event challenges
              participants to master the journey from ideation to execution.
              Join us for a transformative experience at{" "}

              IEDC CEV shapes the future of innovation and entrepreneurship.
            </p>
          </div>
      </main>

     
    </>
  );
}
