"use client";

import React from "react";

export default function Registration() {
  return (
    <main id="registration" className="relative min-h-screen mt-16 md:mt-24 bg-black px-4 sm:px-6 md:px-8 flex items-center overflow-hidden">

      {/* Background energy */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#B12C00]/10" />
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-[#B12C00]/20 blur-[160px] -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-6xl mx-auto w-full text-center space-y-12">

        {/* Heading */}
        <div className="space-y-4">
          <h3 className="text-neutral-400 font-orbitron tracking-widest uppercase text-sm transition-colors hover:text-neutral-200">
            The War Room Opens For A
          </h3>
          <h1 className="text-white text-6xl md:text-8xl font-black font-orbitron transition-colors hover:text-[#B12C00] cursor-default">
            PRIZE POOL
          </h1>
        </div>

        {/* Total Prize */}
        <div>
          <h2 className="text-white text-6xl md:text-7xl font-black tracking-wider transform transition-transform transition-colors hover:scale-105 hover:text-[#B12C00] cursor-default">
            25,000
          </h2>
        </div>

        {/* Prize Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 transform transition-all hover:-translate-y-2 hover:border-[#B12C00] hover:bg-[#B12C00]/6 cursor-pointer">
            <h1 className="text-neutral-400 font-orbitron transition-colors hover:text-neutral-200">FIRST</h1>
            <h2 className="text-white text-3xl font-bold mt-2 transition-colors hover:text-[#B12C00]">12,000</h2>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 transform transition-all hover:-translate-y-2 hover:border-[#B12C00] hover:bg-[#B12C00]/6 cursor-pointer">
            <h1 className="text-neutral-400 font-orbitron transition-colors hover:text-neutral-200">SECOND</h1>
            <h2 className="text-white text-3xl font-bold mt-2 transition-colors hover:text-[#B12C00]">8,000</h2>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6 transform transition-all hover:-translate-y-2 hover:border-[#B12C00] hover:bg-[#B12C00]/6 cursor-pointer">
            <h1 className="text-neutral-400 font-orbitron transition-colors hover:text-neutral-200">THIRD</h1>
            <h2 className="text-white text-3xl font-bold mt-2 transition-colors hover:text-[#B12C00]">5,000</h2>
          </div>
        </div>

        {/* CTA */}
        <div className="pt-10" id ="register-button">
          {/* <a
            href="https://snaptiqz.com/event/bbDyA0HmFhKgwv_qlumyR"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 text-lg font-orbitron font-bold
                       text-white bg-[#B12C00] rounded-md
                       hover:bg-[#d63b00] transition-all transform hover:scale-105"
          >
            <h1>REGISTER NOW</h1>
          </a> */}

          <h1 className="text-neutral-400 text-sm mt-4 font-montserrat transition-colors hover:text-neutral-200">
            Limited slots available. Team size: 2 - 4 members.
          </h1>
          
        </div>

      </div>
    </main>
  );
}
