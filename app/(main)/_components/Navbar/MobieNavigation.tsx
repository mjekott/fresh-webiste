"use client";

import { AlignJustify, X } from "lucide-react";
import { useEffect, useState } from "react";

import Container from "@/components/Container";
import { PUBLIC_URL } from "@/config/url.config";
import Link from "next/link";

import { NAV_LINKS } from "./constants";
import { useNavbarContext } from "./context";

const MobileNavigation = () => {
  const context = useNavbarContext();
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
    if (isDropdownVisible) {
      context?.setIsDropDownOpen(false);
    } else {
      context?.setIsDropDownOpen(true);
    }
  };

  useEffect(() => {
    if (isDropdownVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function to reset the overflow property when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isDropdownVisible]);

  return (
    <>
      {isDropdownVisible && (
        <div
          onClick={toggleDropdown}
          className="
    
             
             rounded-full
      
             "
        >
          <X className="h-6 w-6 items-center justify-center rounded-full" />
        </div>
      )}
      {!isDropdownVisible && (
        <div onClick={toggleDropdown} className="rounded-full">
          <AlignJustify className="h-6 w-6  items-center justify-center rounded-full" />
        </div>
      )}

      {isDropdownVisible && (
        <div
          style={{ height: "calc(100vh - 88px)" }}
          className="w-full  flex flex-col bg-[#FAFAFA]  z-[9999999]  justify-center absolute top-[87px] pt-4  right-0 lg:hidden"
        >
          <Container className="flex-1 w-full  flex flex-col  pt-8 gap-12">
            {NAV_LINKS.map((item) => (
              <MobileNavLinks
                onClick={toggleDropdown}
                {...item}
                key={item.label}
              />
            ))}
          </Container>
          <Container className="mt-auto mb-24">
            <Link
              href={PUBLIC_URL.contactUs()}
              onClick={toggleDropdown}
              className="bg-primary w-fit px-8 py-4 rounded-[100px] text-white flex items-center jus font-bold"
            >
              Contact Us
            </Link>
          </Container>
        </div>
      )}
    </>
  );
};

export default MobileNavigation;

type MobileNavLinkProps = (typeof NAV_LINKS)[0] & {
  onClick: () => void;
};

const MobileNavLinks = ({ label, href, onClick }: MobileNavLinkProps) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-lg w-full pb-4 border-b-[1px] border-[#E4E1D5]"
    >
      {label}
    </Link>
  );
};
