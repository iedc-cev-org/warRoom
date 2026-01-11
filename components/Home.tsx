"use client";

import React, { useState } from "react";
import Image from "next/image";
import Loader from "@/components/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}

      <main className="relative min-h-screen text-white overflow-hidden">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Mobile Video */}
        <video
          src="/home.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="md:hidden absolute inset-0 h-full w-full object-cover"
        />

        {/* Desktop Image */}
        <Image
          src="/homi.jpg"
          alt="Background"
          fill
          priority
          className="md:block hidden object-cover"
        />

        {/* Content */}
        <div className="absolute inset-0 z-30 px-2 md:px-4 lg:px-8">
          <div className="h-20 flex items-center">
            <Image src="/iedc.png" alt="Logo" width={120} height={100} />
          </div>

          <div className="flex justify-center items-center h-[calc(100vh-5rem)]">
            <p className="text-6xl md:text-7xl font-nebula">WAR<span className="text-red-600">ROOM</span></p>
          </div>
        </div>
      </main>

      {/* Footer BELOW hero */}
     
    </>
  );
}
