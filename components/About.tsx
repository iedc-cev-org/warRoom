import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <>
      <main className="relative min-h-screen bg-amber-200 overflow-hidden">
        {/* Background Image */}
        <Image
          src="/about.png"
          alt="About background"
          fill
          className="object-cover"
          priority
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
          <div className="max-w-4xl text-center space-y-6">
            <h1 className="text-white text-4xl md:text-5xl font-black font-orbitron tracking-widest">
              AB<span className="text-red-600">OUT</span>
            </h1>

            <p className="text-slate-200 text-sm md:text-base leading-relaxed font-medium tracking-wide">
              <span className="font-bold text-white">WARROOM</span>, presented by{" "}
              <span className="text-red-500 font-bold">IEDC CEV</span>, is a
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
        </div>
      </main>

     
    </>
  );
}
