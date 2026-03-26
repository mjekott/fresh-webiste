import React from "react";
import Image from "next/image";
import {appstore, customers, delivery, vendor, googleplay, vector} from "@/components/index";
import DecorativeImageCard from "@/components/DecorativeImageCard";

const About = () => {
  return (
    <div className="w-full bg-[#F6F7F6]">

      {/* ================= HERO SECTION ================= */}
      <section
        className="relative flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-12 lg:px-24 py-16 md:py-24 lg:py-32 bg-cover bg-center gap-6 md:gap-4 overflow-visible"
        style={{ backgroundImage: "url('/images/about/hero-bg.png')" }}
      >
        
        <div 
          className="relative w-full md:w-[55%] lg:w-[50%] z-10"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
            Who We Are
          </h1>
          <p className="text-gray-700 leading-7 md:leading-8 text-sm md:text-base lg:text-[17px] max-w-xl">
            Id interdum eu etiam vel facilisis purus mauris lacus. Placerat lorem augue eu 
            mauris lorem imperdiet pellentesque fermentum. Amet, sed pharetra facilisis 
            imperdiet egestas eros quis. Quis vitam sed lobis, etiam eu aliquet. In at amet 
            sit vel lobortis pellentesque faucibus lorem mauris placerat. Egestas malesuada 
            euismod vitae quisque lorem ut sit amet, id risus. Suspendisse accumsan tempus 
            integer iaculis. Phasibus neque auctor conec etiam id massa sit tortor neque 
            vel dictum sit at varius. Ullamcorper.
          </p>
        </div>

        
        <div 
          className="absolute -bottom-32 md:-bottom-40 lg:-bottom-48 right-4 md:right-8 lg:right-16 z-20 mix-blend-multiply"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-125 lg:h-125 ">
            <div className="absolute inset-0" style={{ 
              background: `url('/images/about/hero-food.png') center/contain no-repeat`,
              mixBlendMode: 'darken'
            }}></div>
            
          </div>
        </div>

        
        <div 
          className="absolute top-12 right-12 md:top-16 md:right-16 lg:top-20 lg:right-20 rounded-full p-3 md:p-4 shadow-lg z-10"
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay="400"
        >
          <div className="relative w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16">
            <Image
              src="/images/about/leaf.png"
              alt="Fresh"
              fill
              className="object-contain"
            />
          </div>
        </div>
        
      </section>

      {/* ================= WHO WE SERVE SECTION ================= */}
      <section className="relative px-4 md:px-12 lg:px-24 pt-48 md:pt-56 lg:pt-64 pb-16 md:pb-24 lg:pb-32 bg-white overflow-visible">
        <h2 
          className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-12 md:mb-16 lg:mb-24"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Who we <span className="text-orange-500">serve</span>
        </h2>

        
        <div 
          className="hidden lg:block absolute top-32 left-8 opacity-30"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          <Image
            src="/images/about/leaf.png"
            alt="decoration"
            width={60}
            height={60}
            className="object-contain"
          />
        </div>

        {/* Vendors Section */}
        <div className="relative flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16 mb-16 md:mb-24 lg:mb-32">
          
          <div className="hidden lg:block absolute left-[12%] top-1/2 -translate-y-1/2 w-24 h-24">
            <svg width="120" height="100" viewBox="0 0 120 100" fill="none" className="stroke-green-800">
              <path d="M10 50 Q40 20, 80 30" strokeWidth="3" strokeLinecap="round" fill="none"/>
            </svg>
          </div>

          <div 
            className="relative w-48 h-48 md:w-64 lg:w-80 md:h-64 lg:h-80 rounded-full overflow-hidden shadow-2xl shrink-0 bg-gray-100"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <DecorativeImageCard
              src={vendor}
              vectorSrc={vector}
              alt="Vendor managing inventory"
            />
          </div>

          <div 
            className="w-full md:w-[45%]"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 md:mb-6">Vendors</h3>
            <p className="text-gray-600 mb-6 md:mb-8 leading-7 md:leading-8 text-sm md:text-base">
              Reach new customers, market your store, and grow your
              business by offering delivery, pickup, and direct online ordering with DoorDash.
            </p>

            <button className="bg-[#0E6134] text-white px-6 md:px-8 py-3 md:py-4 cursor-pointer rounded-md hover:bg-green-900 transition font-medium">
              Get started
            </button>
          </div>
        </div>

        
        <div 
          className="hidden lg:block absolute top-[35%] right-8"
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          <Image
            src="/images/about/Icon_fruits.png"
            alt="decoration"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>

        {/* Customers Section */}
        {/* ================= CUSTOMERS SECTION ================= */}
<div className="w-screen relative left-1/2 right-1/2 -mx-[50vw]">

  <section className="relative py-20 md:py-28 lg:py-32">

    {/* Background Image */}
    <div
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: "url('/images/about/customersbg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />

    {/* Texture Overlay */}
    <div
      className="absolute inset-0 z-10 opacity-40 mix-blend-multiply"
      style={{
        backgroundImage: "url('/images/about/noise.png')", // 👈 add a subtle grain texture
      }}
    />

    {/* Gradient Fade (LEFT → RIGHT like design) */}
    <div className="absolute inset-0 z-10 bg-linear-to-r from-[#F6F7F6]/95 via-[#F6F7F6]/80 to-transparent" />

    {/* CONTENT CONTAINER */}
    <div className="relative z-20 max-w-[1200px] mx-auto px-4 md:px-12 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">

      {/* TEXT */}
      <div className="w-full md:w-[45%]">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6">
          Customers
        </h3>

        <p className="text-gray-600 mb-8 leading-7 md:leading-8 text-sm md:text-base">
          Reach new customers, market your store, and grow your
          business by offering delivery, pickup, and direct online ordering.
        </p>

        <div className="flex gap-4 flex-wrap">
          <Image
            src={appstore}
            alt="Download on App Store"
            className="h-12 w-auto"
          />
          <Image
            src={googleplay}
            alt="Get it on Google Play"
            className="h-12 w-auto"
          />
        </div>
      </div>

      {/* IMAGE */}
      <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl bg-gray-100">
        <Image
          src={customers}
          alt="Customer receiving groceries"
          fill
          className="object-cover"
        />
      </div>
    </div>
  </section>
</div>

        {/* Delivery Agent Section */}
        <div className="relative flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16">
          
          <div className="hidden lg:block absolute left-[12%] top-1/2 -translate-y-1/2 w-24 h-24">
            <svg width="120" height="100" viewBox="0 0 120 100" fill="none" className="stroke-green-800">
              <path d="M10 50 Q40 20, 80 30" strokeWidth="3" strokeLinecap="round" fill="none"/>
            </svg>
          </div>

          <div 
            className="relative w-48 h-48 md:w-64 lg:w-80 md:h-64 lg:h-80 rounded-full overflow-hidden shadow-2xl shrink-0 bg-gray-100"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <Image
              src={delivery}
              alt="Delivery agent"
              fill
              className="object-cover"
            />
          </div>

          <div 
            className="w-full md:w-[45%]"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 md:mb-6">Delivery Agent</h3>
            <p className="text-gray-600 mb-6 md:mb-8 leading-7 md:leading-8 text-sm md:text-base">
              Reach new customers, market your store, and grow your
              business by offering delivery, pickup, and direct online ordering with DoorDash.
            </p>

            <div className="flex gap-3 md:gap-4 flex-wrap">
              <Image
                src={appstore}
                alt="Download on App Store"
                width={120}
                height={40}
                className="h-10 md:h-12 w-auto cursor-pointer hover:opacity-80 transition"
              />
              <Image
                src={googleplay}
                alt="Get it on Google Play"
                width={135}
                height={40}
                className="h-10 md:h-12 w-auto cursor-pointer hover:opacity-80 transition"
              />
            </div>
          </div>
        </div>

        
        <div 
          className="hidden lg:block absolute bottom-16 right-12"
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          <Image
            src="/images/about/Icon_fruits.png"
            alt="decoration"
            width={70}
            height={70}
            className="object-contain"
          />
        </div>
      </section>

      

    </div>
  );
};

export default About;
