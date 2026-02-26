import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn("w-full max-w-[1312px] px-6 lg:px-4 mx-auto", className)}
    >
      {children}
    </div>
  );
};

export default Container;
