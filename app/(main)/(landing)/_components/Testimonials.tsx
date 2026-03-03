import { testimonialimg } from "@/components/index";
import Container from "@/components/Container";

import Image from "next/image";
import TestimonialCarousel from "@/components/home/testimonials/carousel";

const Testimonials = () => {
  return (
    <Container>
      <section className="py-5 md:py-32 w-full max-w-[1052px] justify-self-center">
        <div className="flex md:justify-center text-left md:text-center flex-col">
          <h1 className="text-primary-500">TESTIMONIALS</h1>

          <p
            className="text-tertiary-D-900 font-bold -tracking-[1px]
          text-[clamp(18px,5vw,50px)]"
          >
            What Our Customer Say
          </p>
        </div>
        <div className="mt-[40px] md:mt-[86px] flex flex-col md:flex-row justify-between items-center gap-14 md:gap-[161px]">
          <figure className="relative w-full max-w-[200px] sm:max-w-[300px] md:max-w-[346px] aspect-[346/388]">
            <div className="absolute -left-[12.9%] top-[9%] w-[108%] h-full bg-[#E7EFEB] rounded-full" />

            <Image
              src={testimonialimg}
              alt="testimonial"
              fill
              placeholder="blur"
              className="object-cover z-10 rounded-full"
            />
          </figure>
          <TestimonialCarousel />
        </div>
      </section>
    </Container>
  );
};

export default Testimonials;
