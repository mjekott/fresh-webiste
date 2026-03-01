import Hero from "./_components/Hero";
import NoiseBackground from "@/components/NoiseBackground";
import Partner from "./_components/Partner";

const LandingPage = () => {
  return (
    <>
      <NoiseBackground variant="paper" color="#ffffff">
        <Hero />
      </NoiseBackground>
      <Partner />
    </>
  );
};

export default LandingPage;
