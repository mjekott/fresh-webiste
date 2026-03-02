import Hero from "./_components/Hero";
import NoiseBackground from "@/components/NoiseBackground";
import Partner from "./_components/Partner";
import GrowingCommunity from "./_components/GrowingCommunity";

const LandingPage = () => {
  return (
    <>
      <NoiseBackground variant="paper" color="#ffffff">
        <Hero />
      </NoiseBackground>
      <Partner />
      <GrowingCommunity />
    </>
  );
};

export default LandingPage;
