"use client";

import React from "react";
import Image from "next/image";

export default function Guidelines() {
  return (
    <>
      <main className="px-4 sm:px-6 md:px-8 relative  flex items-center min-h-screen overflow-hidden">
          <div className="max-w-7xl w-full mx-auto space-y-6">
            <h1 className="text-white text-5xl md:text-7xl font-black font-orbitron tracking-widest mb-10">
              GUIDE<span className="text-[#B12C00]">LINES</span>
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
                <span className="text-[#B12C00] font-semibold">
                  ideation, product development,
                </span>{" "}
                and a final presentation.
              </p>

              <p className="font-semibold text-white">
                Performance will be judged based on:
              </p>

              <ul className="list-disc list-inside text-slate-300 space-y-2">
                <li>Innovation</li>
                <li>Marketing Strategy</li>
                <li>Customer Review</li>
                <li>Product Quality</li>
                <li>Teamwork</li>
              </ul>

              <p className="font-semibold text-white">
                Open to all students <br />
                Team must consist of{" "}
                <span className="text-[#B12C00] font-bold">2 – 4 members</span>
              </p>
            </div>
          </div>
      </main>
    </>
  );
}
