import React from "react";
import Image from "next/image";

export default function Background() {
  return (
    <div className="fixed inset-0 w-full min-h-screen bg-center -z-10">
      <Image
        src="/about.png"
        alt="Guidelines background"
        fill
        priority
        className=" display md:hidden object-cover brightness-30"
      />
    </div>
  );
}
