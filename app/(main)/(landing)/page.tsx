import React from "react";
import Hero from "./_components/Hero";
import NoiseBackground from "@/components/NoiseBackground";

const LandingPage = () => {
  return (
    <NoiseBackground variant="paper" color="#ffffff">
      <Hero />
    </NoiseBackground>
  );
};

export default LandingPage;
