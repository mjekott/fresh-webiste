"use client";
import useScrolled from "@/hooks/useScrolled";
import { cn } from "@/lib/utils";

import { ReactNode } from "react";
import { useNavbarContext } from "./context";

type Props = {
  children: ReactNode;
};

const NavbarWrapper = ({ children }: Props) => {
  const isScrolled = useScrolled();
  const context = useNavbarContext();

  return (
    <header
      className={cn(
        "fixed top-0 z-50 select-none text-primary h-[88px] w-full bg-transparent transition-all duration-75 ease-in-out",
        {
          "bg-white/30 dark:bg-black/30 backdrop-blur-md border-b border-white/20 dark:border-black/20 shadow-md":
            isScrolled || context?.isDropdownOpen,
        },
      )}
    >
      {children}
    </header>
  );
};

export default NavbarWrapper;
