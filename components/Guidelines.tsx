"use client";

import React from "react";
import Image from "next/image";

export default function Guidelines() {
  return (
    <>
      <main className="relative min-h-screen overflow-hidden">
        {/* Background */}
        <Image
          src="/about.png"
          alt="Guidelines background"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
          <div className="max-w-4xl text-center space-y-8">
            <h1 className="text-white text-4xl md:text-5xl font-black font-orbitron tracking-widest">
              GUIDE<span className="text-red-600">LINES</span>
            </h1>
<div className="space-y-4 text-slate-200 text-sm md:text-base leading-relaxed tracking-wide font-montserrat">

              <p className="font-semibold">
                24 Hour Intense Startup Simulation
              </p>

              <p className="text-white font-bold">
                From 09<sup>th</sup> February, 3:00 PM <br />
                To 10<sup>th</sup> February, 3:00 PM
              </p>

              <p>
                Teams will go through{" "}
                <span className="text-red-500 font-semibold">
                  ideation, product development,
                </span>{" "}
                and a final presentation.
              </p>

              <p className="font-semibold text-white">
                Performance will be judged based on:
              </p>

              <ul className="list-disc list-inside max-w-xl mx-auto text-left text-slate-300 space-y-2">
                <li>Innovation</li>
                <li>Marketing Strategy</li>
                <li>Customer Review</li>
                <li>Product Quality</li>
                <li>Teamwork</li>
              </ul>

              <p className="font-semibold text-white">
                Open to all students <br />
                Team must consist of{" "}
                <span className="text-red-500 font-bold">2 – 4 members</span>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
