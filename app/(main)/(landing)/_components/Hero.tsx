import Container from "@/components/Container";
import Image from "next/image";
import landingBg from "@/public/images/home/landing-bg.png";
import Glassmorphism from "../../_components/Glassmorphism";
import { Overley } from "@/components/overley";
import { Star, AlarmClock } from "lucide-react";
import smileEmoji from "@/public/images/ya.png";
import { leafDark, leafLight } from "@/components/index";
import NoiseBackground from "@/components/NoiseBackground";

export default function Hero() {
  return (
    <NoiseBackground variant="paper" color="#ffffff">
      <div className="relative w-full overflow-hidden">
        {/* Background Leaves */}
        <div className="absolute top-8 left-20 rotate-180 -z-20 pointer-events-none">
          <Image
            src={leafLight}
            alt="leaf decoration"
            className="w-[50px] md:w-[200px] h-auto object-contain"
          />
        </div>

        <div className="absolute left-1/2 -bottom-10 -translate-x-1/2 -z-20 pointer-events-none">
          <Image
            src={leafDark}
            alt="leaf"
            className="w-[80px] md:w-[400px] h-auto object-contain"
          />
        </div>

        {/* Overlay (behind content) */}
        <div className="absolute inset-0 -z-10">{Overley}</div>

        {/* Main Content */}
        <Container>
          <div className="relative flex flex-col md:flex-row items-center justify-between md:h-[623px] z-10">
            <div className="w-full md:max-w-[511px] mt-20 md:mt-0">
              <h1 className="text-tertiary-D-900 font-bold text-[30px] md:text-[54px] leading-[1.3]">
                Go grocery shopping without moving an{" "}
                <span className="text-secondary-100">inch</span>
              </h1>
              <p className="text-tertiary-900 mt-3 font-medium text-[15px] md:text-[20px]">
                Save up to 100% off on your first order
              </p>
            </div>
          </div>
        </Container>

        {/* Right Pinned Image */}
        <div className="mt-[23px] lg:absolute md:top-[50px] lg:top-[97px] right-10 z-20 w-full max-w-[625px] flex justify-end">
          <div className="relative w-full">
            <Image
              src={landingBg}
              alt="landing"
              placeholder="blur"
              className="w-full h-auto object-contain"
            />

            {/* Glass Card 1 */}
            <div className="absolute top-6 left-3 md:top-[76px] md:-left-14">
              <Glassmorphism>
                <div className="flex items-center gap-2 md:gap-3 w-[50vw] md:w-[70vw] max-w-[288px]">
                  <Image
                    src={smileEmoji}
                    alt="smile"
                    placeholder="blur"
                    loading="lazy"
                    className="w-8 h-8 md:w-14 md:h-14 object-contain"
                  />
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-tertiary-D-900 text-xs md:text-base">
                      Our Happy Customer
                    </span>
                    <span className="flex items-center gap-1 text-[10px] md:text-sm text-tertiary-D-700">
                      <Star className="w-3 h-3 md:w-3.5 md:h-3.5 text-yellow-500 fill-yellow-500" />
                      4.9 (1,989 Reviews)
                    </span>
                  </div>
                </div>
              </Glassmorphism>
            </div>

            {/* Glass Card 2 */}
            <div className="absolute bottom-2 right-4 md:bottom-4 md:right-0">
              <Glassmorphism>
                <div className="flex items-center gap-2 md:gap-3 w-fit max-w-[209px] px-3 md:px-6">
                  <AlarmClock className="w-6 h-6 md:w-8 md:h-8 text-primary-500" />
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-tertiary-D-900 text-xs md:text-base">
                      Delivery
                    </span>
                    <span className="flex items-center gap-1 text-[10px] md:text-sm text-tertiary-D-700">
                      <Star className="w-3 h-3 md:w-3.5 md:h-3.5 text-yellow-500 fill-yellow-500" />
                      30 Minutes
                    </span>
                  </div>
                </div>
              </Glassmorphism>
            </div>
          </div>
        </div>
      </div>
    </NoiseBackground>
  );
}
