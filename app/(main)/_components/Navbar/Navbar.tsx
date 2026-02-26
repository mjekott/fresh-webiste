import Link from "next/link";

import Container from "@/components/Container";

import { PUBLIC_URL } from "@/config/url.config";

import MobileNavigation from "./MobieNavigation";

import Navigation from "./Navigation";
import NavbarContextProvider from "./context";
import BrandIcons from "@/components/BrandIcons";
import NavbarWrapper from "./NavbarWrapper";

const Navbar = () => {
  return (
    <NavbarContextProvider>
      <NavbarWrapper>
        <Container className="h-full flex items-center justify-between z-30">
          <Link href={PUBLIC_URL.home()}>
            <BrandIcons.logo />
          </Link>

          <div className="flex-1 flex justify-end gap-x-6">
            <Navigation />
          </div>

          <div className="lg:hidden">
            <MobileNavigation />
          </div>
        </Container>
      </NavbarWrapper>
    </NavbarContextProvider>
  );
};

export default Navbar;
