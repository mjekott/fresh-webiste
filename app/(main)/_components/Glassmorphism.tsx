import React, { ReactNode } from "react";

const Glassmorphism = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`bg-white/30 backdrop-blur-md border border-white/20 shadow-md ${className}`}
    >
      {children}
    </div>
  );
};

export default Glassmorphism;
