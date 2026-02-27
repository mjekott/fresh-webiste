import { ReactNode } from "react";
import Navbar from "./_components/Navbar/Navbar";
import Footer from "./_components/Footer";
import ScrollUpBody from "@/components/ScrollToTop";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col text-primary min-h-screen overflow-clip">
      <Navbar />
      {children}
      <Footer />
      <ScrollUpBody />
    </div>
  );
};

export default MainLayout;
