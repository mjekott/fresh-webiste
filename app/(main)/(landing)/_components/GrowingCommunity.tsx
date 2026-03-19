import { clayDark, iconEgg, iconFruit } from "@/components/index";
import Container from "@/components/Container";
import NoiseBackground from "@/components/NoiseBackground";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import DownloadApp from "@/components/downloadApp";
import BrandIcons from "@/components/BrandIcons";

const GrowingCommunity = () => {
  return (
    <NoiseBackground variant="subtle">
      <div className="relative overflow-hidden w-full">
        <Container>
          <div className="md:min-h-[732px] py-12 w-full flex flex-col md:flex-row items-center">
            <div
              data-aos="zoom-in-right"
              className="hidden md:block md:w-[55%] lg:w-[50%]"
            >
              <Image
                src={clayDark}
                alt="clay dark"
                placeholder="blur"
                className="w-full h-auto object-contain"
                priority
              />
            </div>

            <div
              data-aos="fade-left"
              className="w-full md:ml-auto md:max-w-[486px] flex flex-col md:gap-6 mt-8 md:mt-0"
            >
              <h3 className="text-2xl md:text-[20px] md:leading-[25px] lg:text-[40px] font-bold lg:leading-[50px] text-tertiary-D-900">
                Join our growing community.{" "}
                <span className="text-secondary-100">Download</span> and start{" "}
                <span className="text-primary-500">shopping</span>
              </h3>

              <p className="w-full font-normal text-wrap text-[15px] md:text-[18px] leading-6 md:leading-8 md:max-w-[427px]">
                Experience the best your neighborhood has to offer, all in one
                app...{" "}
                <Button
                  variant="link"
                  className="p-0 text-primary-500 font-semibold md:text-[18px] align-baseline"
                >
                  Learn More
                </Button>
              </p>
              <DownloadApp />
            </div>
          </div>
        </Container>
        {/* Top Right Decoration */}
        <div className="pointer-events-none absolute top-6 right-[47.35px] translate-x-1/3 -z-10 w-24 sm:w-32 md:w-40">
          <BrandIcons.IconFruit />
        </div>

        {/* Bottom Left Decoration */}
        <div className="pointer-events-none absolute bottom-6 left-[47.35px] -translate-x-1/3 -z-10 w-9 sm:w-2 md:w-24">
          <BrandIcons.IconEgg />
        </div>
      </div>
    </NoiseBackground>
  );
};

export default GrowingCommunity;
