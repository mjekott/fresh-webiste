import React, { ReactNode } from "react";

const Glassmorphism = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full bg-white/30 backdrop-blur-md border border-white/20 p-4 shadow-md">
      {children}
    </div>
  );
};

export default Glassmorphism;
