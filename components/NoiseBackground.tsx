import { ReactNode } from "react";

type NoiseBackgroundProps = {
  children: ReactNode;
  variant?: "paper" | "lines";
  color?: string;
};

export default function NoiseBackground({
  children,
  variant = "paper",
  color = "transparent",
}: NoiseBackgroundProps) {
  // Map each variant to small (mobile) and large (desktop) texture URLs
  const textureVariants: Record<string, { mobile: string; desktop: string }> = {
    paper: {
      mobile: "url('/images/textures/paper-small.png')",
      desktop: "url('/images/textures/paper-large.png')",
    },
    lines: {
      mobile: "url('/images/textures/lines-small.png')",
      desktop: "url('/images/textures/lines-large.png')",
    },
  };

  return (
    <main
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: color }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-30 bg-repeat sm:hidden"
        style={{
          backgroundImage: textureVariants[variant].mobile,
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none opacity-30 bg-repeat hidden sm:block"
        style={{
          backgroundImage: textureVariants[variant].desktop,
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        {children}
      </div>
    </main>
  );
}
