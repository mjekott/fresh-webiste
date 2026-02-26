"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "./constants";

const Navigation = () => {
  return (
    <div className="items-center gap-10 hidden lg:flex">
      {NAV_LINKS.map((item) => (
        <NavBarItem {...item} key={item.label} />
      ))}
    </div>
  );
};

export default Navigation;

const NavBarItem = ({ label, href }: { label: string; href: string }) => {
  const pathname = usePathname();
  const isActive =
    (pathname.includes(href) && href.length > 1) || pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "h-full flex py-1 tracking-normal text-tertiary-500 leading-[132px] items-center relative",
        {
          "text-primary-500 font-bold text-[18px] ": isActive,
        },
      )}
    >
      {label}

      {isActive && (
        <div className="absolute bottom-0 w-full h-[1px] bg-tertiary" />
      )}
    </Link>
  );
};
