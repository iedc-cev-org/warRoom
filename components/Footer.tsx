"use client";

import React from "react";
import { Github, Youtube, Instagram } from "lucide-react";

const socialIcons = [Github, Youtube, Instagram];

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-neutral-900 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">

          {/* Brand */}
          <div className="space-y-6">
            <span className="text-2xl font-black font-orbitron tracking-tighter text-white">
              WAR<span className="text-[#B12C00]">ROOM</span>
            </span>

            <p className="text-neutral-400 text-sm leading-relaxed max-w-md">
              WHERE IEDC CEV SHAPES THE FUTURE OF INNOVATION AND ENTREPRENEURSHIP.
            </p>

            <div className="flex gap-4">
              {socialIcons.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-md bg-neutral-900 flex items-center justify-center
                             text-neutral-400 hover:text-[#B12C00] hover:bg-[#B12C00]/10
                             transition-all border border-neutral-800"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* WARROOM Side Text */}
          <div className="hidden md:flex justify-end">
            <h1 className="text-5xl lg:text-6xl font-orbitron font-black tracking-widest
                           text-neutral-600/40 select-none">
              WAR<span className="text-[#B12C00]/60">ROOM</span>
            </h1>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-[10px] font-orbitron tracking-widest uppercase">
            © 2026 WARROOM // IEDC CEV
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
