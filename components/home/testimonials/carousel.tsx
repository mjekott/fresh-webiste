"use client";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Justina Alins",
    role: "Vendor",
    text: `“Really fresh2cart is the best platform to boost your business especially their support was awesome, They have tried to level best to give best support of new candidate.”`,
    rating: 5,
  },
  {
    name: "Michael Roberts",
    role: "Customer",
    text: `“Fresh2cart has made shopping so much easier for me. The platform is intuitive, and their customer service is always helpful and responsive.”`,
    rating: 5,
  },
  {
    name: "Sarah Lee",
    role: "Vendor",
    text: `“Running my store with Fresh2cart has been a breeze. Their features are practical and the support team is fantastic.”`,
    rating: 4,
  },
  {
    name: "Alex Johnson",
    role: "Customer",
    text: `“I’m impressed by how smooth and reliable Fresh2cart is. Orders are always accurate, and the interface is very user-friendly.”`,
    rating: 3,
  },
  {
    name: "Priya Singh",
    role: "Vendor",
    text: `“Fresh2cart truly cares about its vendors. The platform helps me manage my business efficiently and the team is always ready to assist.”`,
    rating: 5,
  },
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const testimonial = testimonials[current];

  return (
    <div className="w-full">
      <p className="font-bold">{testimonial.name}</p>
      <p>{testimonial.role}</p>
      <div className="mt-6 min-h-32 md:min-h-20">
        <p>{testimonial.text}</p>
      </div>
      <div className="flex gap-1 mt-3">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star
            key={i}
            className={cn(
              "w-3 h-3 md:w-3.5 md:h-3.5 text-gray-300 fill-transparent",
              testimonial.rating > 4 && "text-yellow-500 fill-yellow-500",
            )}
          />
        ))}
      </div>
      <div className="mt-[30px]">
        <Button
          onClick={handlePrev}
          className="w-full max-w-[66px] rounded-full mr-2 border bg-tertiary-800 hover:bg-transparent"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0e6134"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-left-icon lucide-arrow-left"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
        </Button>
        <Button
          onClick={handleNext}
          className="w-full max-w-[66px] rounded-full bg-tertiary-800 border hover:bg-transparent"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0e6134"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-right-icon lucide-arrow-right"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
