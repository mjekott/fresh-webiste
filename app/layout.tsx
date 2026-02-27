import type { Metadata } from "next";
import { Quicksand, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { AOSInit } from "@/components/AOS";
import { SITE_DESCRIPTION, SITE_NAME } from "@/constants/seo.constants";

const fontHeading = Quicksand({
  subsets: ["latin"],
  variable: "--font-heading",
});

const fontBody = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: {
    absolute: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: ["grocery", "shopping", "Best shopping", "Best grocery"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontHeading.variable} ${fontBody.variable} antialiased`}
      >
        {children}
        <AOSInit />
      </body>
    </html>
  );
}
