import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-Inter",
  subsets: ["latin"],
});

const OpenSans = Open_Sans({
  variable: "--font-Open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Benni - Photographer",
  description: "I'm a photographer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${OpenSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
