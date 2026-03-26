"use client";

import Container from "@/components/Container";
import Image from "next/image";

const ContactPage = () => {
  return (
    <div className="w-full min-h-screen bg-[#F6F7F6]">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-12 lg:px-24 py-16 md:py-24 lg:py-32 bg-cover bg-center gap-6 md:gap-4 overflow-visible"
      style={{ backgroundImage: "url('/images/about/hero-bg.png')" }}>
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* ================= LEFT SIDE ================= */}
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
            >

              <p className="text-sm text-gray-500 mb-3">Contact Me</p>

              <h1 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
                How Can I Help You?
              </h1>

              <p className="text-gray-500 mb-10">
                Fill in the form or drop an email.
              </p>

              {/* Contact Info Boxes */}
              <div className="space-y-5 max-w-md">

                {/* Phone */}
                <div 
                  className="flex items-center gap-4 border border-gray-300 rounded-lg px-5 py-4 bg-white/60 backdrop-blur-sm"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  <div className="text-green-700 text-lg">📱</div>
                  <span className="text-gray-700 text-sm">
                    0813949432393
                  </span>
                </div>

                {/* Email */}
                <div 
                  className="flex items-center gap-4 border border-gray-300 rounded-lg px-5 py-4 bg-white/60 backdrop-blur-sm"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="300"
                >
                  <div className="text-green-700 text-lg">✉️</div>
                  <span className="text-gray-700 text-sm">
                    support@fresh2carts.com
                  </span>
                </div>

              </div>
            </div>

            {/* ================= RIGHT SIDE (FORM CARD) ================= */}
            <div 
              className="bg-white/70 backdrop-blur-md shadow-xl rounded-xl p-8 lg:p-10 max-w-lg ml-auto"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="200"
            >

              <h3 className="text-lg font-semibold text-gray-800 mb-6">
                Get In Touch
              </h3>

              <form className="space-y-5">

                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-lg bg-gray-100 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-green-600 transition"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="300"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-lg bg-gray-100 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-green-600 transition"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="400"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-lg bg-gray-100 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-green-600 transition"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="500"
                />

                <textarea
                  placeholder="Message"
                  rows={5}
                  className="w-full rounded-lg bg-gray-100 px-4 py-3 text-sm outline-none resize-none focus:ring-2 focus:ring-green-600 transition"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="600"
                />

                <button
                  type="submit"
                  className="w-full bg-[#0E6134] hover:bg-green-800 text-white text-sm cursor-pointer font-medium py-3 rounded-lg transition"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="700"
                >
                  Submit
                </button>

              </form>
            </div>

          </div>
        </Container>

        {/* ================= STRAWBERRY IMAGE ================= */}
        <Image
          src="/images/contact/strawberries.png"
          alt="Strawberries"
          width={250}
          height={250}
          className="absolute bottom-0 left-0 w-50 lg:w-65 mix-blend-multiply"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
        />

      </section>
    </div>
  );
};

export default ContactPage;
