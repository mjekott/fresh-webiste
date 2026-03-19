"use client";

import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="relative text-white"
      style={{
        backgroundImage: "url('/images/textures/footer-image.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      
      <div className="absolute inset-0 bg-[#063D1E]/95"></div>

      {/* ================= ORANGE CHAT ICON ================= */}
      <div className="absolute -top-6 right-6 z-20">
        <button className="w-14 h-14 rounded-full bg-[#F97316] hover:bg-[#ea580c] flex items-center justify-center shadow-xl transition">
          <MessageCircle className="w-6 h-6 text-white" />
        </button>
      </div>

      <Container className="py-16 relative z-10">

        
        <div className="flex justify-center mb-16">
          <div className="w-full max-w-4xl bg-[#3E6B57] rounded-xl px-10 py-6 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-lg">

            <h3 className="text-xl font-medium text-white whitespace-nowrap">
              Newsletter Sign Up
            </h3>

            <div className="flex items-center bg-white rounded-lg overflow-hidden w-full lg:w-130">
              <input
                type="email"
                placeholder="Enter your email here..."
                className="flex-1 px-4 py-3 text-sm text-gray-800 outline-none"
              />

              <button className="bg-[#1B4332] hover:bg-[#133524] text-white text-sm px-6 py-2.5 mr-2 rounded-md transition">
                Submit
              </button>
            </div>

          </div>
        </div>

        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">

          <div>
            <h4 className="font-semibold mb-5 text-base">Doing Business</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-gray-300 hover:text-white">Become a Delivery Agent</Link></li>
              <li><Link href="#" className="text-sm text-gray-300 hover:text-white">Be a Partner Store</Link></li>
              <li><Link href="#" className="text-sm text-gray-300 hover:text-white">Get Fresh2carts for Deliveries</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-5 text-base">Get to Know Us</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link href="/faq" className="text-sm text-gray-300 hover:text-white">Faqs</Link></li>
              <li><Link href="/contact-us" className="text-sm text-gray-300 hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-5 text-base">Quick links</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-gray-300 hover:text-white">Privacy policy</Link></li>
              <li><Link href="#" className="text-sm text-gray-300 hover:text-white">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-5 text-base">Social Handles</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-300 hover:text-white">Instagram</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white">Twitter</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white">Facebook</a></li>
            </ul>
          </div>

        </div>

        
        <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-white/20">
          <Image
            src="/images/logos/logo2.png"
            alt="Fresh2carts Logo"
            width={32}
            height={32}
          />
          <p className="text-sm text-gray-300 mt-4 md:mt-0">
            © 2022 Fresh2carts • All Rights Reserved
          </p>
        </div>

      </Container>
    </footer>
  );
};

export default Footer;



