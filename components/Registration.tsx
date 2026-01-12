"use client";

import React from "react";

export default function Registration() {
  return (
    <main
      id="registration"
      className="relative min-h-screen md:min-h-[80vh]
           mt-16 md:mt-0
           bg-black px-4 sm:px-6 md:px-8
           flex items-center overflow-hidden"

    >
      {/* Background energy */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#B12C00]/10" />
      <div
        className="absolute top-1/2 left-1/2
                   w-[420px] h-[420px]
                   bg-[#B12C00]/20 blur-[150px]
                   -translate-x-1/2 -translate-y-1/2"
      />

      <div
        className="relative z-10 max-w-6xl mx-auto w-full
                   text-center
                   space-y-10 md:space-y-10"
      >
        {/* Heading */}
        <div className="space-y-3">
          <h3 className="text-neutral-400 font-orbitron tracking-widest uppercase text-sm">
            The War Room Opens For A
          </h3>

          <h1 className="text-white text-6xl md:text-8xl font-black font-orbitron">
            PRIZE POOL
          </h1>
        </div>

        {/* Total Prize */}
        <div className="md:-mt-1">
          <h2
            className="text-white text-6xl md:text-7xl font-black tracking-wider
                       transition-transform transition-colors
                       hover:scale-105 hover:text-[#B12C00]"
          >
            25,000
          </h2>
        </div>

        {/* Prize Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-10 mt-8 md:mt-6">

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
              <h1 className="text-neutral-400 font-orbitron">
                {item.title}
              </h1>
              <h2 className="text-white text-3xl font-bold mt-1">
                {item.amount}
              </h2>
            </div>
          ))}
        </div>

        {/* CTA */}
       {/*  <div className="pt-8 md:pt-8" id="register-button">
          <a
            href="https://snaptiqz.com/event/bbDyA0HmFhKgwv_qlumyR"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 text-lg
                       font-orbitron font-bold
                       text-white bg-[#B12C00] rounded-md
                       transition-all
                       hover:bg-[#d63b00]
                       hover:scale-105"
          >
           <h1>REGISTER NOW</h1> 
          </a>

          <h2 className="text-neutral-400 text-sm mt-3 font-montserrat">
            Limited slots available. Team size: 2  4 members.
          </h2>
        </div> */}
      </div>
    </main>
  );
}
