import { testimonialimg, vector } from "@/components/index";
import Container from "@/components/Container";
import TestimonialCarousel from "@/components/home/testimonials/carousel";
import DecorativeImageCard from "@/components/DecorativeImageCard";

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
          <DecorativeImageCard
            src={testimonialimg}
            vectorSrc={vector}
            alt="testimonial"
          />
          <TestimonialCarousel />
        </div>
      </section>
    </Container>
  );
};

export default Testimonials;
