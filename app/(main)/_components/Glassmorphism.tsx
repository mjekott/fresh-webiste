import React, { ReactNode } from "react";

const Glassmorphism = ({ children }: { children: ReactNode }) => {
  return (
    <div className="absolute bottom-4 right-4 bg-white/30 backdrop-blur-md border border-white/20 p-4 rounded-lg shadow-md max-w-[200px]">
      {children}
    </div>
  );
};

export default Glassmorphism;
