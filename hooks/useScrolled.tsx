"use client";
import { useEffect, useState } from "react";

const useScrolled = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScrolled = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScrolled);
    return () => {
      window.removeEventListener("scroll", handleScrolled);
    };
  }, []);
  return isScrolled;
};

export default useScrolled;
