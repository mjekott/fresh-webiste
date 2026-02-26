import type { Metadata } from "next";
import { Quicksand, Nunito_Sans } from "next/font/google";
import "./globals.css";

const fontHeading = Quicksand({
  subsets: ["latin"],
  variable: "--font-heading",
});

const fontBody = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Fresh2Carts Website",
  description: "Go grocery shopping without moving an inch",
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
      </body>
    </html>
  );
}
