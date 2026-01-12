"use client";

import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Guidelines() {
  return (
    <main
      className="relative min-h-screen md:min-h-[85vh]
                 bg-black px-4 sm:px-6 md:px-8
                 flex md:items-start items-center
                 md:pt-24 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#B12C00]/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 blur-[140px]" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto w-full
                   grid grid-cols-1 lg:grid-cols-2
                   gap-16 items-start"
      >
        {/* LEFT SIDE — TOP LEFT */}
        <motion.div
          variants={fadeUp}
          className="space-y-8 lg:self-start"
        >
          {/* Title */}
          <h1
            className="text-white text-5xl md:text-7xl
                       font-black tracking-widest
                       -mt-3 md:-mt-12"
          >
            GUIDE<span className="text-[#B12C00]">LINES</span>
          </h1>

          {/* Content */}
          <div className="md:mt-13 space-y-8">
            <p className="text-slate-300 font-montserrat text-base md:text-lg leading-relaxed max-w-xl">
              A{" "}
              <span className="text-white font-semibold">
                high-intensity 24-hour startup simulation
              </span>{" "}
              that pushes teams beyond theory into real execution—driving them to
              ideate, innovate, validate, and pitch scalable startup solutions
              while experiencing the pressure, pace, and passion of the real
              startup world.
            </p>

            {/* Timeline */}
            <div className="relative pl-6">
              <span className="absolute left-0 top-0 h-full w-[3px] bg-[#B12C00] animate-pulse" />
              <h1 className="text-white font-bold font-montserrat">
                From 09<sup>th</sup> February, 3:00 PM
              </h1>
              <h1 className="text-white font-bold font-montserrat">
                To 10<sup>th</sup> February, 3:00 PM
              </h1>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE — CARDS */}
        <motion.div
          variants={container}
          className="grid gap-6 lg:mt-20"
        >
          {/* Startup Flow */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="bg-white/5 backdrop-blur-md
                       border border-white/10
                       rounded-2xl p-6
                       hover:border-[#B12C00]/40
                       transition-all duration-300"
          >
            <h2 className="text-white tracking-wider mb-3">
              STARTUP FLOW
            </h2>
            <p className="text-slate-300 font-montserrat leading-relaxed">
              Teams will go through{" "}
              <span className="text-[#B12C00] font-semibold">
                ideation, product development,
              </span>{" "}
              and conclude with a final presentation to the jury.
            </p>
          </motion.div>

          {/* Judging Criteria */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="bg-white/5 backdrop-blur-md
                       border border-white/10
                       rounded-2xl p-6
                       hover:border-[#B12C00]/40
                       transition-all duration-300"
          >
            <h3 className="text-white tracking-wider mb-4">
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
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.08 }}
                  className="px-4 py-1.5 rounded-full
                             text-sm font-montserrat
                             bg-[#B12C00]/10 text-[#B12C00]
                             border border-[#B12C00]/30"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Eligibility */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="bg-white/5 backdrop-blur-md
                       border border-white/10
                       rounded-2xl p-6
                       hover:border-[#B12C00]/40
                       transition-all duration-300"
          >
            <h3 className="text-white tracking-wider mb-3">
              ELIGIBILITY
            </h3>
            <p className="text-slate-300 font-montserrat">
              Open to all students <br />
              Team size:
              <span className="text-[#B12C00] font-bold">
                {" "}2 - 4 members
              </span>
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </main>
  );
}
