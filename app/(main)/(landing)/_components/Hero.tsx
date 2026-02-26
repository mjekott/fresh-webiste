import Container from "@/components/Container";
import Image from "next/image";
import landingBg from "@/public/images/home/landing-bg.png";
import Glassmorphism from "../../_components/Glassmorphism";

export default function Hero() {
  return (
    <Container>
      <div className="relative flex flex-col md:flex-row items-center justify-between md:h-[623px]">
        <div className="w-full md:max-w-[511px] mt-20 md:mt-0 z-10">
          <h1 className="text-primary-500 font-bold text-[30px] md:text-[54px] leading-[1.3] tracking-normal">
            Go grocery shopping without moving an{" "}
            <span className="text-secondary-100">inch</span>
          </h1>
        </div>

        <div className="w-full md:w-auto mt-8 md:mt-[27px] flex justify-end">
          <div className="relative overflow-hidden">
            <Image
              src={landingBg}
              alt="landing-bg"
              placeholder="blur"
              className="w-[625px] h-auto object-contain hidden md:flex"
            />

            <div className="absolute top-4 left-4">
              <Glassmorphism>
                <p className="text-sm text-primary-500 font-medium">
                  Our Happy Customer
                </p>
              </Glassmorphism>
            </div>

            <div className="absolute bottom-4 right-4">
              <Glassmorphism>
                <p className="text-sm text-primary-500 font-medium">
                  Partnership
                </p>
              </Glassmorphism>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
