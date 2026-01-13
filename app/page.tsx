"use client";

import React, { useState } from "react";
import Home from "../components/Home";
import About from "@/components/About";
import Guidelines from "@/components/Guidelines";
import Footer from "@/components/Footer";
import Background from "@/components/Background";
import Registration from "@/components/Registration";
import Loader from "@/components/Loader";

export default function page() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && <Loader onComplete={handleLoadingComplete} />}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Background />
          <Home />
          <About />
          <Guidelines />
          <Registration />
          <Footer />
        </div>
      </div>
    </>
  );
}
