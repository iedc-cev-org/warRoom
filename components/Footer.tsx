"use client";

import React from "react";
import { Mail, Linkedin, Instagram, Phone } from "lucide-react";

const socialLinks = [
  {
    Icon: Mail,
    href: "mailto:iedc@cev.ac.in",
    label: "Email",
  },
  {
    Icon: Linkedin,
    href: "https://www.linkedin.com/company/iedc-cev",
    label: "LinkedIn",
  },
  {
    Icon: Instagram,
    href: "https://www.instagram.com/iedc.cev",
    label: "Instagram",
  },
];

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-black pt-20 pb-10 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 mb-16 items-center">
          {/* LEFT – BRAND */}
          <div className="space-y-6 text-center md:text-left">
            <span className="text-2xl font-black font-orbitron tracking-tighter text-white">
              <h1>
                WAR<span className="text-[#B12C00]">ROOM</span>
              </h1>
            </span>

            <h2 className="text-neutral-400 text-sm leading-relaxed max-w-md mx-auto md:mx-0">
              WHERE IEDC CEV SHAPES THE FUTURE OF INNOVATION AND
              ENTREPRENEURSHIP.
            </h2>

            <div className="flex justify-center md:justify-start gap-4">
              {socialLinks.map(({ Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-md bg-neutral-900 flex items-center justify-center
                             text-neutral-400 hover:text-[#B12C00] hover:bg-[#B12C00]/10
                             transition-all border border-neutral-800"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT – CONTACT (ALWAYS) + WARROOM TEXT (DESKTOP ONLY) */}
          <div className="flex flex-col items-center md:items-end justify-end space-y-5">
            {/* WARROOM TEXT → DESKTOP ONLY */}
            <div className="hidden md:block text-right">
              <h1
                className="text-5xl lg:text-6xl font-orbitron font-black tracking-widest
                           text-neutral-600/40 select-none"
              >
                WAR<span className="text-[#B12C00]/60">ROOM</span>
              </h1>
              <h3 className="mt-2 text-sm text-neutral-400 uppercase tracking-widest">
                STRATEGY. INNOVATION. EXECUTION
              </h3>
            </div>

            {/* PHONE CONTACT → MOBILE + DESKTOP */}
            <a
              href="tel:+919876543210"
              className="flex items-center gap-3 text-neutral-400
                         hover:text-[#B12C00] transition-all"
            >
              <span
                className="w-9 h-9 flex items-center justify-center
                           rounded-md bg-neutral-900 border border-neutral-800"
              >
                <Phone size={16} />
              </span>

              <div className="text-center md:text-right text-sm font-montserrat">
                <h2 className="font-semibold text-white">Ananthu Ashok</h2>
                <h2 className="tracking-wide">+91 9567377351</h2>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-900 flex justify-center md:justify-between items-center">
          <h2 className="text-neutral-500 text-[10px] font-orbitron tracking-widest uppercase">
            © 2026 WARROOM // IEDC CEV
          </h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
