"use client";

import React, { useEffect, useState } from "react";

type LoaderProps = {
  onComplete: () => void;
};

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("INITIALIZING WARROOM PROTOCOLS...");

  // Progress logic
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) =>
        Math.min(prev + Math.floor(Math.random() * 15) + 1, 100),
      );
    }, 200);

    return () => clearInterval(interval);
  }, []);

  // Status updates
  useEffect(() => {
    const updates = [
      "IDEATION...",
      "MVP...",
      "REVENUE GENERATION...",
      "CHALLENGES...",
      "READY FOR ENGAGEMENT..",
    ];

    let index = 0;
    const interval = setInterval(() => {
      if (index < updates.length) {
        setStatus(updates[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 600);

    return () => clearInterval(interval);
  }, []);

  // Notify Home safely
  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        onComplete();
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="w-full max-w-md px-6">
        <h1 className="text-center text-3xl font-orbitron text-white mb-6 tracking-widest">
          WAR<span className="text-[#B12C00]">ROOM</span>
        </h1>

        <div className="flex justify-between text-xs text-[#B12C00] mb-2 font-mono">
          <span>{status}</span>
          <span>{progress}%</span>
        </div>

        <div className="h-1.5 bg-black border border-[#B12C00]/40 overflow-hidden">
          <div
            className="h-full bg-[#B12C00] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
