"use client";

import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <main className="relative min-h-screen bg-black px-4 sm:px-6 md:px-8 flex items-center overflow-hidden">

      {/* Ambient glow effects */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#B12C00]/20 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 blur-[140px]" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto w-full"
      >
        <div className="max-w-3xl space-y-8">

          {/* Title */}
          <motion.h1
            variants={fadeUp}
            className="text-white text-5xl md:text-7xl font-black tracking-widest"
          >
            ABOUT <span className="text-[#B12C00]">WARROOM</span>
          </motion.h1>

          {/* Paragraph 1 */}
          <motion.p
            variants={fadeUp}
            className="text-slate-200 text-sm md:text-base
                       leading-relaxed font-montserrat tracking-wide"
          >
            <span className="font-bold text-white">WARROOM</span>, presented by{" "}
            <span className="text-[#B12C00] font-bold">IEDC CEV</span>, is a{" "}
            <span className="text-white font-semibold">
              24-hour startup simulation
            </span>{" "}
            designed to transform raw ideas into impactful real-world ventures.
          </motion.p>

          {/* Paragraph 2 */}
          <motion.p
            variants={fadeUp}
            className="text-slate-300 text-sm md:text-base
                       leading-relaxed font-montserrat tracking-wide"
          >
            Open to all aspiring entrepreneurs, this experience pushes
            participants to master the complete journey — from ideation and
            validation to execution and presentation.
          </motion.p>

          {/* Highlight block */}
          <motion.div
            variants={fadeUp}
            className="relative border-l-4 border-[#B12C00] pl-5 mt-6"
          >
            <h2 className="text-white font-semibold font-montserrat">
              WARROOM is where{" "}
              <span className="text-[#B12C00]">
                IEDC CEV shapes the future
              </span>{" "}
              of innovation and entrepreneurship.
            </h2>
          </motion.div>

        </div>
      </motion.div>
    </main>
  );
}
