import React, { ReactNode } from "react";

const Glassmorphism = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full bg-white/30 backdrop-blur-md border rounded-full border-white/20 p-2.5 shadow-md">
      {children}
    </div>
  );
};

export default Glassmorphism;
