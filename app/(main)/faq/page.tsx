"use client";

import Container from "@/components/Container";
import Image from "next/image";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQsPage = () => {
  const [activeCategory, setActiveCategory] = useState("Customers");
  const [expandedItem, setExpandedItem] = useState<number | null>(1);

  const categories = ["Customers", "Vendors", "Delivery Agent"];

  const faqItems = Array(6).fill({
    question: "Why should I shop with fresh2carts",
    answer:
      "Id interdum eu etiam vehicula facilisis purus mauris lacus. Placerat lorem augue eu quis tortor imperdiet pellentesque fermentum. Amet, leo pharetra, facilisis imperdiet egestas mauris. Quis dolor nec tellus, turpis mi viverra sed.",
  });

  const toggleItem = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  return (
    <div className="w-full min-h-screen bg-[#F6F7F6]">
      
      {/* ================= HERO SECTION ================= */}
      <section className="overflow-visible py-20"
      style={{ backgroundImage: "url('/images/about/hero-bg.png')" }}>
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Left Content */}
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <p className="text-sm text-gray-500 mb-3">The FAQs</p>

              <h1 className="text-5xl font-semibold text-gray-900 mb-4">
                Help Centre
              </h1>

              <p className="text-gray-500 max-w-md">
                Everything you need to know about the product and billing
              </p>
            </div>

            {/* Right Image */}
            <div 
              className="flex justify-end"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="relative w-120">

                {/* Main Image */}
                <Image
                  src="/images/FAQ/FAQimg2.png"
                  alt="Fresh fruits and vegetables"
                  width={500}
                  height={350}
                  className="w-full h-auto object-contain mix-blend-multiply"
                />

                {/* Quality Badge */}
                <div
                  className="
                    absolute
                    top-1/2
                    left-1/2
                    -translate-x-1/2
                    -translate-y-1/2
                    w-32.5
                    h-32.5
                    bg-white
                    rounded-full
                    flex
                    items-center
                    justify-center
                    shadow-lg
                  "
                  data-aos="zoom-in"
                  data-aos-duration="800"
                  data-aos-delay="400"
                >
                  <Image
                    src="/images/FAQ/FAQimg1.png" 
                    alt="Quality Badge"
                    width={115}
                    height={115}
                    className="object-contain"
                  />
                </div>

              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="bg-[#F7F7F7] py-16">
        <Container>
          <div className="grid lg:grid-cols-[220px_1fr] gap-14">

            {/* Sidebar */}
            <div 
              className="border-r border-gray-200 pr-6 space-y-6"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              {categories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`block text-left text-sm transition ${
                    activeCategory === category
                      ? "text-green-700 font-medium"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay={index * 100}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* FAQ Items */}
            <div 
              className="divide-y divide-gray-200"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              {faqItems.map((item, index) => (
                <div 
                  key={index} 
                  className="py-6"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay={index * 100}
                >

                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full flex justify-between items-start text-left"
                  >
                    <span className="text-sm text-gray-800 font-medium pr-4">
                      {item.question}
                    </span>

                    {expandedItem === index ? (
                      <Minus className="w-5 h-5 text-gray-500 transition-transform duration-300" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-500 transition-transform duration-300" />
                    )}
                  </button>

                  {expandedItem === index && (
                    <p className="mt-4 text-sm text-gray-500 leading-relaxed max-w-2xl animate-fadeIn">
                      {item.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>

          </div>
        </Container>
      </section>

      {/* ================= STILL NEED HELP ================= */}
      <section className="relative bg-[#EFEFEA] py-20 overflow-hidden"
      style={{ backgroundImage: "url('/images/about/hero-bg.png')" }}>
        <Container>
          <div 
            className="text-center max-w-2xl mx-auto relative z-10"
            data-aos="fade-up"
            data-aos-duration="1000"
          >

            <h2 className="text-4xl font-semibold text-gray-900 mb-4">
              Still Need Help?
            </h2>

            <p className="text-gray-500 mb-6">
              Our team is happy to answer your questions. Contact us and we&apos;ll
              be in touch as soon as possible.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 text-gray-700 text-sm">
              <a
                href="mailto:Support@fresh2carts.com"
                className="hover:underline transition"
              >
                Support@fresh2carts.com
              </a>

              <span className="hidden sm:inline">•</span>

              <a
                href="tel:+2348096859495"
                className="hover:underline transition"
              >
                +2348096859495
              </a>
            </div>
          </div>

          {/* Decorative Elements */}
          <Image
            src="/images/about/icon_fruits.png"
            alt="decoration"
            width={70}
            height={70}
            className="absolute top-10 right-20 opacity-80"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="200"
          />

          <Image
            src="/images/about/icon_eggs.png"
            alt="decoration"
            width={70}
            height={70}
            className="absolute bottom-8 left-20 opacity-60"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="200"
          />
        </Container>
      </section>

    </div>
  );
};

export default FAQsPage;
